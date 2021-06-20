import { AkairoClient, ListenerHandler } from '@auric/discord-akairo';
import { Intents } from 'discord.js';
import path from 'path';
import { Logger } from "tslog";

interface SugarcaneOptions {
	ownerID?: string | string[];
	token?: string;
}

export default class SugarcaneClient extends AkairoClient {
	public config: SugarcaneOptions;
	public logger: Logger
	public listenerHandler = new ListenerHandler(this, {
		directory: path.join(__dirname, '..', 'listeners')
	})

	public constructor(config: SugarcaneOptions) {
		super({ ownerID: config.ownerID}, { ws: { intents: [Intents.ALL] } });
		
		this.config = config;
		this.logger = new Logger({ name: 'Sugarcane Logger' })
	}

	public async init() {
		const { token } = this.config;
		if (!token || token.length < 59) {
			this.logger.error(new Error('Invalid Token'));
			return null;
		}
		this.listenerHandler.setEmitters({
			listnerHandler: this.listenerHandler
		});
		this.listenerHandler.loadAll();
		super.login(token);
	}
}