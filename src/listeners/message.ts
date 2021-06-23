import { Listener } from '@auric/discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import got from 'got';
import SugarcaneClient from '../client/sugarcane';
import { Config, Plugins, Welcome10 } from '../TimingsType';

import { generateIsKeyof } from "@inrixia/helpers/ts"

export default class MessageListner extends Listener {
	public constructor() {
		super('message', {
			emitter: 'client',
			event: 'message',
		});
	}

	public async exec(message: Message) {
		if (message.content.startsWith('https://timin')) {
			let word: string = message.content;
			let url: string | null = null;

			if (message.content.includes('/d='))
				word = message.content.replaceAll('/d=', '/?id=');
			word = word.split('#')[0];
			if (word.includes('/?id=')) {
				try {
					encodeURI(word);
					new URL(word);
					url = word;
				} catch (e) {
					return;
				}
			}
			if (url === null) return;
			this.client.logger.silly(`Querying ${url}`);
			const parts = url.split('?id=');
			const timingsHost = parts[0];
			const timingsId = parts[1];
			const reply = await message.reply('Query In Progress');
			const timingsData: Welcome10 = await got(
				`${timingsHost}data.php?id=${timingsId}`,
				{ resolveBodyOnly: true }
			  ).then(JSON.parse)

			const embed = new MessageEmbed()
				.setTitle('Timings Analysis')
				.setColor(0xffff00)
				.setTimestamp(Date.now())
				.setAuthor(message.author.username, message.author.displayAvatarURL());
			try {

			} finally {

			}
			await checkServerPlugins(embed, timingsData, this.client as SugarcaneClient);
			// await checkServerConfigs(embed, timingsData, this.client as SugarcaneClient);
			// checkServerPlugins(embed, timingsData, this.client as SugarcaneClient);
			// checkServerPlugins(embed, timingsData, this.client as SugarcaneClient);
			// checkServerPlugins(embed, timingsData, this.client as SugarcaneClient);
			reply.edit(embed);
		}
	}
}

/*
const checkServerConfigs = async (
	embed: MessageEmbed,
	timingsData: Welcome10,
	client: SugarcaneClient
) => {
	const timingsConfigs: Config = timingsData['timingsMaster']['config'];
	const configSuggestions = client.config.timingConfigSuggestions(timingsConfigs);
	for (const suggestion of configSuggestions) {
		if (typeof suggestion === 'boolean' && suggestion === false) break;
		if (embed.fields.length === 24) break;
		// @ts-ignore
		console.log(configSuggestions())
		// embed.addField(Object(suggestion).toString(), 'idk', true)
	}
	// for (const configFile in configSuggestions) {
	// 	for (const suggestion in configSuggestions[configFile]) {
	//		if (typeof suggestion === 'boolean' && suggestion === false) break;
	//		if (!timingsConfigs[configFile][suggestion]) break;
	// 		if (embed.fields.length === 24) break;
	//		let suggestionThing;
	//		if (typeof configSuggestions[configFile][suggestion] === 'function') suggestionThing = configSuggestions[configFile][suggestion]();
	//
	//		embed.addField(suggestion, suggestionThing, true)
	//	}
	//}
};
*/

const checkServerPlugins = async (
	embed: MessageEmbed,
	timingsData: Welcome10,
	client: SugarcaneClient
) => {
	const plugins: Plugins = timingsData['timingsMaster']['plugins'];
	const configs: Config = timingsData['timingsMaster']['config'];

	if (
		plugins['TCPShield'] &&
		configs['purpur']['settings']['use-alternate-keepalive'] !== 'true'
	)
		embed.addField(
			'settings.use-alternate-keepalive',
			'Disable this in [purpur.yml](http://bit.ly/purpurc). It can cause issues with TCPShield',
			true
		);
	if (
		!plugins['TCPShield'] &&
		configs['purpur']['settings']['use-alternate-keepalive'] !== 'false'
	)
		embed.addField(
			'settings.use-alternate-keepalive',
			'Disable this in [purpur.yml](http://bit.ly/purpurc). It can cause issues with TCPShield',
			true
		);
	if (
		plugins['PetBlocks'] ||
		plugins['BlockBalls'] ||
		plugins['ArmorStandTools'] ||
		(configs['paper'] &&
			configs['paper']['world-settings']['default']['armor-stands-tick'] !== 'true')
	)
		embed.addField(
			'armor-stands-tick',
			'Disable this in [paper.yml](http://bit.ly/paperconf).',
			true
		);
	const catagories = client.config.timingPluginSuggestions;
	for (const plugin of Object.values(plugins)) {
		for (const category of Object.values(catagories)) {
			if (generateIsKeyof(category)(plugin.name)) {
				embed.addField(plugin.name, category[plugin.name]);
			}
		}
	}
};
