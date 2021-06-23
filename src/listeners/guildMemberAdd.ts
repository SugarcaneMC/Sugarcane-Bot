import { Listener } from '@auric/discord-akairo';
import { GuildMember } from 'discord.js';

export default class GuildMemberAddListner extends Listener {
	public constructor() {
		super('guildMemberAdd', {
			emitter: 'client',
			event: 'guildMemberAdd',
		});
	}

	public async exec(member: GuildMember) {
		member.roles.add('855981133731856414');
	}
}
