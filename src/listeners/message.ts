import { Listener } from "@auric/discord-akairo";
import { Message } from "discord.js";

export default class MessageListner extends Listener {
	public constructor() {
		super('message', {
			emitter: 'client',
			event: 'message'
		});
	}

	public exec(message: Message) {
		
	}
}