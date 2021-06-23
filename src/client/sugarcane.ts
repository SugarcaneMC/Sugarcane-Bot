import { AkairoClient, ListenerHandler } from '@auric/discord-akairo';
import { Intents } from 'discord.js';
import path from 'path';
import { Logger } from "tslog";
import config from '../config';

declare module '@auric/discord-akairo' {
	interface AkairoClient {
		config: typeof config;
		logger: Logger;
		listenerHandler: ListenerHandler;
	}
}

export default class SugarcaneClient extends AkairoClient {
	public config: typeof config;
	public logger: Logger
	public listenerHandler: ListenerHandler = new ListenerHandler(this, {
		directory: path.join(__dirname, '..', 'listeners')
	})

	public constructor() {
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