import { Config } from "./TimingsType";

export default {
	ownerID: ["296042121297788931"],
	token: "ODU2MDA5NTM5Njc3NTg1NDA4.YM6zAg.0wVG-E-BJojWdEZ5g38h_grvBNI",
	timingPluginSuggestions: {
		spigot: {
			VillagerOptimiser:
				"You probably don't need VillagerOptimiser as Spigot already adds its features. See entity-activation-range in spigot.yml.",
		},
		paper: {
			ClearLag: "Plugins that claim to remove lag actually cause more lag.",
			LagAssist:
				"LagAssist should only be used for analytics and preventative measures. All other features of the plugin should be disabled.",
			NoChunkLag: "Plugins that claim to remove lag actually cause more lag.",
			NoMobLag: "Plugins that claim to remove lag actually cause more lag.",
			ServerBooster:
				"Plugins that claim to remove lag actually cause more lag.",
			AntiLag: "Plugins that claim to remove lag actually cause more lag.",
			BookLimiter:
				"You don't need BookLimiter as Paper already fixes all crash bugs.",
			LimitPillagers:
				"You probably don't need LimitPillagers as Paper already adds its features.",
			StackMob: "Stacking mobs causes more lag.",
			Stacker: "Stacking mobs causes more lag.",
			MobStacker: "Stacking mobs causes more lag.",
			WildStacker: "Stacking mobs causes more lag.",
			UltimateStacker: "Stacking mobs causes more lag.",
			FastAsyncWorldEdit:
				"FAWE has been known to cause issues. Consider replacing FAWE with [Worldedit](https://enginehub.org/worldedit/#downloads).",
			IllegalStack:
				"You probably don't need IllegalStack as Paper already fixes all dupe and crash bugs.",
			ExploitFixer:
				"You probably don't need ExploitFixer as Paper already fixes all dupe and crash bugs.",
			EntityTrackerFixer:
				"You don't need EntityTrackerFixer as Paper already has its features.",
			Orebfuscator:
				"You don't need Orebfuscator as [Paper](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e) already has its features.",
			GroupManager:
				"GroupManager is an outdated permission plugin. Consider replacing it with [LuckPerms](https://luckperms.net/download).",
			PermissionsEx:
				"PermissionsEx is an outdated permission plugin. Consider replacing it with [LuckPerms](https://luckperms.net/download).",
			bPermissions:
				"bPermissions is an outdated permission plugin. Consider replacing it with [LuckPerms](https://luckperms.net/download).",
			PhantomSMP:
				"You probably don't need PhantomSMP as Paper already has its features. See phantoms-only-attack-insomniacs in paper.yml",
		},
		tuinity: {
			PacketLimiter:
				"You don't need PacketLimiter as Tuinity already has its features.",
		},
		purpur: {
			SilkSpawners:
				"You probably don't need SilkSpawners as Purpur already has its features.",
			MineableSpawners:
				"You probably don't need MineableSpawners as Purpur already has its features.",
			VillagerLobotomizatornator:
				"You probably don't need VillagerLobotomizatornator as Purpur already adds its features. Enable villager.lobotomize.enabled in [purpur.yml](http://bit.ly/purpurc).",
		}
	},
	timingConfigSuggestions: (configs: Config) => {
		return {
			"server.properties": {
				"online-mode": () => {
					let isSafe =
						configs["server.properties"]["online-mode"] === "true";

					if (!isSafe && configs["spigot"])
						isSafe =
							configs["spigot"]["settings"]["bungeecord"] === "true";
					/*
					if (!isSafe && configs["paper"])
						isSafe =
							configs["paper"]["settings"]["bungeecord"] === "true";
							*/
					if (!isSafe && configs["paper"])
						isSafe =
							configs["paper"]["settings"]["velocity-support"]["enabled"] ===
							"true";

					return isSafe ? false : 'Enable this in [server.properties](http://bit.ly/servprop)';
				},
				"network-compression-threshold: standalone": () => {
					if (
						!(
							configs["paper"] &&
							configs["paper"]["settings"]["velocity-support"]["enabled"] !==
							"true"
						) ||
						!(
							configs["spigot"] &&
							configs["spigot"]["settings"]["bungeecord"] === "true"
						)
					)
						return false;
					return parseInt(
						configs["server.properties"]["network-compression-threshold"]
					) <= 256
						? "Increase this in D. Recommended: 512."
						: false;
				},
				"network-compression-threshold: network": () => {
					if (
						!(
							configs["paper"] &&
							configs["paper"]["settings"]["velocity-support"]["enabled"] !==
							"true"
						) ||
						!(
							configs["spigot"] &&
							configs["spigot"]["settings"]["bungeecord"] === "true"
						)
					)
						return false;
					return parseInt(
						configs["server.properties"]["network-compression-threshold"]
					) != -1
						? "Set this to -1 in [server.properties](http://bit.ly/servprop) for a bungee/velocity server like yours"
						: false;
				},
			},
			bukkit: {
				"chunk-gc.period-in-ticks": () => {
					if (parseInt(configs["bukkit"]["chunk-gc"]["period-in-ticks"]) >= 600)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 400.";
					else return false;
				},
				"ticks-per.monster-spawns": () => {
					if (parseInt(configs["bukkit"]["ticks-per"]["monster-spawns"]) == 1)
						return "Increase this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 4.";
					else return false;
				},
				'spawn-limits.monsters': () => {
					if (parseInt(configs["bukkit"]["spawn-limits"]["monsters"]) == 70)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 15.";
					else return false;
				},
				'spawn-limits.water-ambient': () => {
					if (parseInt(configs["bukkit"]["spawn-limits"]["water-ambient"]) == 20)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 5.";
					else return false;
				},
				'spawn-limits.ambient': () => {
					if (parseInt(configs["bukkit"]["spawn-limits"]["ambient"]) == 15)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 1.";
					else return false;
				},
				'spawn-limits.animals': () => {
					if (parseInt(configs["bukkit"]["spawn-limits"]["animals"]) == 10)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 5.";
					else return false;
				},
				'spawn-limits.water-animals': () => {
					if (parseInt(configs["bukkit"]["spawn-limits"]["water-animals"]) == 15)
						return "Decrease this in [bukkit.yml](https://bukkit.gamepedia.com/Bukkit.yml). Recommended: 5.";
					else return false;
				}
			},
			spigot: {
				'view-distance': () => {
					if (configs['spigot']['world-settings']['default']['view-distance'] === '10') return 'Set a value in [spigot.yml](http://bit.ly/spiconf). Recommended: 4 and set no-tick-view-distance to a reasonable view distance.'
					else return false;
				},
				'entity-activation-range.animals': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['animals']) >= 32) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 16.'
					else return false;
				},
				'entity-activation-range.monsters': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['monsters']) >= 32) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 16.'
					else return false;
				},
				'entity-activation-range.misc': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['misc']) >= 16) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 12.'
					else return false;
				},
				'entity-activation-range.water': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['water']) >= 16) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 12.'
					else return false;
				},
				'entity-activation-range.villagers': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['villagers']) >= 32) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 16.'
					else return false;
				},
				'entity-activation-range.tick-inactive-villagers': () => {
					if (configs['spigot']['world-settings']['default']['entity-activation-range']['tick-inactive-villagers'] === 'true') return 'Disable this in [spigot.yml](http://bit.ly/spiconf).'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.villagers-for': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-for']) >= 100) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 20.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.flying-monsters-for': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-for']) >= 100) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 20.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.animals-for': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['animals-for']) >= 100) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 40.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.monsters-for': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['monsters-for']) >= 100) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 60.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.villagers-max-per-tick': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-max-per-tick']) >= 4) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 1.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.monsters-max-per-tick': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['monsters-max-per-tick']) >= 8) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 4.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.flying-monsters-max-per-tick': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['flying-monsters-max-per-tick']) >= 4) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 1.'
					else return false;
				},
				'entity-activation-range.wake-up-inactive.animals-max-per-tick': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['entity-activation-range']['wake-up-inactive']['animals-max-per-tick']) >= 4) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 2.'
					else return false;
				},
				'nerf-spawner-mobs': () => {
					if (configs['spigot']['world-settings']['default']['nerf-spawner-mobs'] === 'true') return 'Enable this in [spigot.yml](http://bit.ly/spiconf).'
					else return false;
				},
				'arrow-despawn-rate': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['arrow-despawn-rate']) >= 1200) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 1.'
					else return false;
				},
				'merge-radius.item': () => {
					if (parseFloat(configs['spigot']['world-settings']['default']['merge-radius']['item']) >= 2.5) return 'Increase this in [spigot.yml](http://bit.ly/spiconf). Recommended: 4.0.'
					else return false;
				},
				'merge-radius.exp': () => {
					if (parseFloat(configs['spigot']['world-settings']['default']['merge-radius']['exp']) >= 3.0) return 'Increase this in [spigot.yml](http://bit.ly/spiconf). Recommended: 6.0.'
					else return false;
				},
				'max-entity-collisions': () => {
					if (parseInt(configs['spigot']['world-settings']['default']['max-entity-collisions']) >= 8) return 'Decrease this in [spigot.yml](http://bit.ly/spiconf). Recommended: 1.'
					else return false;
				},
				'mob-spawn-range': () => {
					const spigotVD = configs['spigot']['world-settings']['default']['view-distance'].toString()
					let viewDistance: number;
					try {
						parseInt(spigotVD);
					} catch (e) {
						if (configs['server.properties']) viewDistance = parseInt(configs['server.properties']['view-distance'])
						else throw new Error('Set view-distance in spigot.yml')
					}
					const mobSpawnRange = parseInt(configs['spigot']['world-settings']['default']['mob-spawn-range']);
					return mobSpawnRange;
				}
			},
			paper: {
				'max-auto-save-chunks-per-tick': () => {
					if (parseInt(configs['paper']['world-settings']['default']['max-auto-save-chunks-per-tick']) >= 24) return 'Decrease this in [paper.yml](http://bit.ly/paperconf). Recommended: 6.'
					else return false;
				},
				'optimize-explosions': () => {
					if (configs['paper']['world-settings']['default']['optimize-explosions'] === 'true') return 'Enable this in [paper.yml](http://bit.ly/paperconf).'
					else return false;
				},
				'mob-spawner-tick-rate': () => {
					if (parseInt(configs['paper']['world-settings']['default']['mob-spawner-tick-rate']) === 1) return 'Increase this in [paper.yml](http://bit.ly/paperconf). Recommended: 2.'
					else return false;
				},
				'game-mechanics.disable-chest-cat-detection': () => {
					if (configs['paper']['world-settings']['default']['max-auto-save-chunks-per-tick'] === 'true') return 'Enable this in [paper.yml](http://bit.ly/paperconf)'
					else return false;
				},
				'container-update-tick-rate': () => {
					if (parseInt(configs['paper']['world-settings']['default']['container-update-tick-rate']) === 1) return 'Increase this in [paper.yml](http://bit.ly/paperconf). Recommended: 3.'
					else return false;
				},
				'grass-spread-tick-rate': () => {
					if (parseInt(configs['paper']['world-settings']['default']['grass-spread-tick-rate']) === 1) return 'Increase this in [paper.yml](http://bit.ly/paperconf). Recommended: 4.'
					else return false;
				},
				'despawn-ranges.soft': () => {
					if (parseInt(configs['paper']['world-settings']['default']['despawn-ranges']['soft']) >= 32) return 'Decrease this in [paper.yml](http://bit.ly/paperconf). Recommended: 28.'
					else return false;
				},
				'despawn-ranges.hard': () => {
					if (parseInt(configs['paper']['world-settings']['default']['despawn-ranges']['hard']) >= 128) return 'Decrease this in [paper.yml](http://bit.ly/paperconf). Recommended: 96.'
					else return false;
				},
				'hopper.disable-move-event': () => {
					if (configs['paper']['world-settings']['default']['hopper']['disable-move-event'] === 'true') return 'Enable this in [paper.yml](http://bit.ly/paperconf).'
					else return false;
				},
				'non-player-arrow-despawn-rate': () => {
					if (parseInt(configs['paper']['world-settings']['default']['non-player-arrow-despawn-rate']) === -1) return 'Set a value in [paper.yml](http://bit.ly/paperconf). Recommended: 60'
					else return false;
				},
				'creative-arrow-despawn-rate': () => {
					if (parseInt(configs['paper']['world-settings']['default']['creative-arrow-despawn-rate']) === -1) return 'Decrease this in [paper.yml](http://bit.ly/paperconf). Recommended: 60.'
					else return false;
				},
				'despawn-ran': () => {
					if (parseInt(configs['paper']['world-settings']['default']['despawn-ranges']['hard']) >= 128) return 'Decrease this in [paper.yml](http://bit.ly/paperconf). Recommended: 96.'
					else return false;
				},
				'prevent-moving-into-unloaded-chunks': () => {
					if (configs['paper']['world-settings']['default']['prevent-moving-into-unloaded-chunks'] === 'false') return 'Enable this in [paper.yml](http://bit.ly/paperconf).'
					else return false;
				},
				'use-faster-eigencraft-redstone': () => {
					if (configs['paper']['world-settings']['default']['use-faster-eigencraft-redstone'] === 'false') return 'Enable this in [paper.yml](http://bit.ly/paperconf).'
					else return false;
				},
				'fix-climbing-bypassing-cramming-rule': () => {
					if (configs['paper']['world-settings']['default']['fix-climbing-bypassing-cramming-rule'] === 'false') return 'Enable this in [paper.yml](http://bit.ly/paperconf)'
					else return false;
				},
				'armor-stands-do-collision-entity-lookups': () => {
					if (configs['paper']['world-settings']['default']['armor-stands-do-collision-entity-lookups'] === 'true') return 'Disable this in [paper.yml](http://bit.ly/paperconf)'
					else return false;
				},
				'per-player-mob-spawns': () => {
					if (configs['paper']['world-settings']['default']['per-player-mob-spawns'] === 'true') return 'Enable this in [paper.yml](http://bit.ly/paperconf)'
					else return false;
				},
				'alt-item-despawn-rate.enabled': () => {
					if (configs['paper']['world-settings']['default']['alt-item-despawn-rate']['enabled'] === 'false') return 'Enable this in [paper.yml](http://bit.ly/paperconf).'
					else return false;
				},
				'entity-per-chunk-save-limit.experience_orb': () => {
					if (parseInt(configs['paper']['world-settings']['default']['entity-per-chunk-save-limit']['experience_orb']) === -1) return 'Set a value in [paper.yml](https://github.com/PaperMC/Paper/pull/4792). Recommended: 16.'
					else return false;
				},
				'entity-per-chunk-save-limit.arrow': () => {
					if (parseInt(configs['paper']['world-settings']['default']['entity-per-chunk-save-limit']['arrow']) === -1) return 'Set a value in [paper.yml](https://github.com/PaperMC/Paper/pull/4792). Recommended: 16.'
					else return false;
				},
				'entity-per-chunk-save-limit.ender_pearl': () => {
					if (parseInt(configs['paper']['world-settings']['default']['entity-per-chunk-save-limit']['ender_pearl']) === -1) return 'Set a value in [paper.yml](https://github.com/PaperMC/Paper/pull/4792). Recommended: 16.'
					else return false;
				},
				'entity-per-chunk-save-limit.snowball': () => {
					if (parseInt(configs['paper']['world-settings']['default']['entity-per-chunk-save-limit']['snowball']) === -1) return 'Set a value in [paper.yml](https://github.com/PaperMC/Paper/pull/4792). Recommended: 16.'
					else return false;
				}
			}
		};
	},
};
