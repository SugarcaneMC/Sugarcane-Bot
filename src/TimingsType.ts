export interface Welcome10 {
    id:            string;
    timingsMaster: TimingsMaster;
}

export interface TimingsMaster {
    version:    string;
    maxplayers: number;
    start:      number;
    end:        number;
    sampletime: number;
    server:     string;
    motd:       string;
    onlinemode: boolean;
    icon:       null;
    system:     System;
    idmap:      Idmap;
    plugins:    Plugins;
    data:       Datum[];
    config:     Config;
    ":cls":     number;
}

export interface Config {
    "server.properties": ServerProperties;
    bukkit:              Bukkit;
    spigot:              Spigot;
    paper:               Paper;
    tuinity:             Tuinity;
    purpur:              Purpur;
    yatopia:             Yatopia;
}

export interface Bukkit {
    settings:       BukkitSettings;
    "ticks-per":    BukkitTicksPer;
    aliases:        string;
    worlds:         BukkitWorlds;
    "spawn-limits": SpawnLimits;
    "chunk-gc":     ChunkGc;
}

export interface ChunkGc {
    "period-in-ticks": string;
}

export interface BukkitSettings {
    "update-folder":       string;
    "warn-on-overload":    string;
    "query-plugins":       string;
    "deprecated-verbose":  string;
    "connection-throttle": string;
    "plugin-profiling":    string;
    "permissions-file":    string;
    "allow-end":           string;
    "minimum-api":         string;
    "shutdown-message":    string;
}

export interface SpawnLimits {
    "water-ambient": string;
    monsters:        string;
    ambient:         string;
    animals:         string;
    "water-animals": string;
}

export interface BukkitTicksPer {
    "monster-spawns":       string;
    autosave:               string;
    "ambient-spawns":       string;
    "water-spawns":         string;
    "water-ambient-spawns": string;
    "animal-spawns":        string;
}

export interface BukkitWorlds {
    world: World;
}

export interface World {
    generator: string;
}

export interface Paper {
    settings:                           PaperSettings;
    "use-display-name-in-quit-message": string;
    "world-settings":                   PaperWorldSettings;
    "config-version":                   string;
    timings:                            PaperTimings;
    messages:                           PaperMessages;
    verbose:                            string;
}

export interface PaperMessages {
    kick:            Kick;
    "no-permission": string;
}

export interface Kick {
    "authentication-servers-down": string;
    "connection-throttle":         string;
    "flying-vehicle":              string;
    "flying-player":               string;
}

export interface PaperSettings {
    "async-chunks":                                   AsyncChunks;
    "enable-player-collisions":                       string;
    console:                                          Console;
    "spam-limiter":                                   SpamLimiter;
    "save-empty-scoreboard-teams":                    string;
    "unsupported-settings":                           UnsupportedSettings;
    "use-alternative-luck-formula":                   string;
    "fix-entity-position-desync":                     string;
    "book-size":                                      BookSize;
    "player-auto-save-rate":                          string;
    "velocity-support":                               VelocitySupport;
    "load-permissions-yml-before-plugins":            string;
    "chunk-tasks-per-tick":                           string;
    "max-joins-per-tick":                             string;
    "incoming-packet-spam-threshold":                 string;
    "region-file-cache-size":                         string;
    watchdog:                                         Watchdog;
    "track-plugin-scoreboards":                       string;
    "suggest-player-names-when-null-tab-completions": string;
    "console-has-all-permissions":                    string;
    "bungee-online-mode":                             string;
    "max-player-auto-save-per-tick":                  string;
}

export interface AsyncChunks {
    threads: string;
}

export interface BookSize {
    "total-multiplier": string;
    "page-max":         string;
}

export interface Console {
    "enable-brigadier-highlighting": string;
    "enable-brigadier-completions":  string;
}

export interface SpamLimiter {
    "tab-spam-increment":    string;
    "tab-spam-limit":        string;
    "recipe-spam-limit":     string;
    "recipe-spam-increment": string;
}

export interface UnsupportedSettings {
    "allow-headless-pistons-readme":               string;
    "allow-permanent-block-break-exploits":        string;
    "allow-piston-duplication-readme":             string;
    "allow-headless-pistons":                      string;
    "allow-piston-duplication":                    string;
    "allow-permanent-block-break-exploits-readme": string;
}

export interface VelocitySupport {
    "online-mode": string;
    enabled:       string;
}

export interface Watchdog {
    "early-warning-every": string;
    "early-warning-delay": string;
}

export interface PaperTimings {
    "server-name":           string;
    "hidden-config-entries": string[];
    "history-interval":      string;
    "history-length":        string;
    "server-name-privacy":   string;
    enabled:                 string;
    verbose:                 string;
}

export interface PaperWorldSettings {
    default: PurpleDefault;
}

export interface PurpleDefault {
    "portal-search-radius":                         string;
    "creative-arrow-despawn-rate":                  string;
    "tnt-entity-height-nerf":                       string;
    "zombie-villager-infection-chance":             string;
    "duplicate-uuid-saferegen-delete-range":        string;
    viewdistances:                                  Viewdistances;
    "container-update-tick-rate":                   string;
    "mob-spawner-tick-rate":                        string;
    "phantoms-do-not-spawn-on-creative-players":    string;
    "armor-stands-do-collision-entity-lookups":     string;
    "grass-spread-tick-rate":                       string;
    "parrots-are-unaffected-by-player-movement":    string;
    "update-pathfinding-on-block-update":           string;
    "iron-golems-can-spawn-in-air":                 string;
    "baby-zombie-movement-modifier":                string;
    "generator-settings":                           GeneratorSettings;
    "enable-treasure-maps":                         string;
    "disable-thunder":                              string;
    "entities-target-with-follow-range":            string;
    "treasure-maps-return-already-discovered":      string;
    "disable-teleportation-suffocation-check":      string;
    "wandering-trader":                             WanderingTrader;
    "skeleton-horse-thunder-spawn-chance":          string;
    "alt-item-despawn-rate":                        AltItemDespawnRate;
    "count-all-mobs-for-spawning":                  string;
    "keep-spawn-loaded":                            string;
    "zombies-target-turtle-eggs":                   string;
    "use-faster-eigencraft-redstone":               string;
    "max-leash-distance":                           string;
    "duplicate-uuid-resolver":                      string;
    "light-queue-size":                             string;
    "optimize-explosions":                          string;
    "max-auto-save-chunks-per-tick":                string;
    "delay-chunk-unloads-by":                       string;
    "piglins-guard-chests":                         string;
    "fix-wither-targeting-bug":                     string;
    "mobs-can-always-pick-up-loot":                 MobsCanAlwaysPickUpLoot;
    "disable-explosion-knockback":                  string;
    "squid-spawn-height":                           SquidSpawnHeight;
    "ender-dragons-death-always-places-dragon-egg": string;
    "filter-nbt-data-from-spawn-eggs-and-related":  string;
    "nether-ceiling-void-damage-height":            string;
    "map-item-frame-cursor-limit":                  string;
    "should-remove-dragon":                         string;
    "water-over-lava-flow-speed":                   string;
    "portal-create-radius":                         string;
    "fixed-chunk-inhabited-time":                   string;
    "fix-items-merging-through-walls":              string;
    "frosted-ice":                                  FrostedIce;
    "prevent-moving-into-unloaded-chunks":          string;
    "per-player-mob-spawns":                        string;
    "auto-save-interval":                           string;
    "disable-ice-and-snow":                         string;
    "entity-per-chunk-save-limit":                  EntityPerChunkSaveLimit;
    "fishing-time-range":                           FishingTimeRange;
    "spawner-nerfed-mobs-should-jump":              string;
    "experience-merge-max-value":                   string;
    "falling-block-height-nerf":                    string;
    "allow-using-signs-inside-spawn-protection":    string;
    "anti-xray":                                    AntiXray;
    "only-players-collide":                         string;
    "all-chunks-are-slime-chunks":                  string;
    "allow-non-player-entities-on-scoreboards":     string;
    "use-vanilla-world-scoreboard-name-coloring":   string;
    "allow-vehicle-collisions":                     string;
    "phantoms-only-attack-insomniacs":              string;
    "remove-corrupt-tile-entities":                 string;
    "door-breaking-difficulty":                     DoorBreakingDifficulty;
    "armor-stands-tick":                            string;
    "despawn-ranges":                               DespawnRanges;
    "keep-spawn-loaded-range":                      string;
    "fix-climbing-bypassing-cramming-rule":         string;
    "non-player-arrow-despawn-rate":                string;
    "max-growth-height":                            MaxGrowthHeight;
    "max-entity-collisions":                        string;
    "disable-creeper-lingering-effect":             string;
    "game-mechanics":                               GameMechanics;
    "portal-search-vanilla-dimension-scaling":      string;
    hopper:                                         Hopper;
    "prevent-tnt-from-moving-in-water":             string;
    lootables:                                      Lootables;
    "lightning-strike-distance-limit":              LightningStrikeDistanceLimit;
}

export interface AltItemDespawnRate {
    items:   Items;
    enabled: string;
}

export interface Items {
    COBBLESTONE: string;
}

export interface AntiXray {
    "lava-obscures":           string;
    "update-radius":           string;
    "replacement-blocks":      string[];
    "max-chunk-section-index": string;
    "use-permission":          string;
    enabled:                   string;
    "hidden-blocks":           string[];
    "engine-mode":             string;
}

export interface DespawnRanges {
    hard: string;
    soft: string;
}

export interface DoorBreakingDifficulty {
    vindicator: string[];
    zombie:     string[];
}

export interface EntityPerChunkSaveLimit {
    arrow:          string;
    ender_pearl:    string;
    snowball:       string;
    experience_orb: string;
}

export interface FishingTimeRange {
    MaximumTicks: string;
    MinimumTicks: string;
}

export interface FrostedIce {
    delay:   Delay;
    enabled: string;
}

export interface Delay {
    min: string;
    max: string;
}

export interface GameMechanics {
    "disable-unloaded-chunk-enderpearl-exploit":    string;
    "nerf-pigmen-from-nether-portals":              string;
    "shield-blocking-delay":                        string;
    "disable-player-crits":                         string;
    "disable-chest-cat-detection":                  string;
    "disable-relative-projectile-velocity":         string;
    "scan-for-legacy-ender-dragon":                 string;
    "disable-pillager-patrols":                     string;
    "pillager-patrols":                             PillagerPatrols;
    "disable-sprint-interruption-on-attack":        string;
    "fix-curing-zombie-villager-discount-exploit":  string;
    "disable-end-credits":                          string;
    "disable-mob-spawner-spawn-egg-transformation": string;
}

export interface PillagerPatrols {
    start:          Start;
    "spawn-chance": string;
    "spawn-delay":  SpawnDelay;
}

export interface SpawnDelay {
    ticks:        string;
    "per-player": string;
}

export interface Start {
    day:          string;
    "per-player": string;
}

export interface GeneratorSettings {
    "flat-bedrock": string;
}

export interface Hopper {
    "cooldown-when-full": string;
    "disable-move-event": string;
}

export interface LightningStrikeDistanceLimit {
    sound:          string;
    "impact-sound": string;
    flash:          string;
}

export interface Lootables {
    "restrict-player-reloot": string;
    "auto-replenish":         string;
    "reset-seed-on-fill":     string;
    "refresh-min":            string;
    "max-refills":            string;
    "refresh-max":            string;
}

export interface MaxGrowthHeight {
    bamboo: Delay;
    reeds:  string;
    cactus: string;
}

export interface MobsCanAlwaysPickUpLoot {
    skeletons: string;
    zombies:   string;
}

export interface SquidSpawnHeight {
    maximum: string;
}

export interface Viewdistances {
    "no-tick-view-distance": string;
}

export interface WanderingTrader {
    "spawn-minute-length":            string;
    "spawn-chance-max":               string;
    "spawn-day-length":               string;
    "spawn-chance-min":               string;
    "spawn-chance-failure-increment": string;
}

export interface Purpur {
    settings:         PurpurSettings;
    "world-settings": PurpurWorldSettings;
    "config-version": string;
    verbose:          string;
}

export interface PurpurSettings {
    blocks:                             SettingsBlocks;
    logger:                             Logger;
    "server-mod-name":                  string;
    broadcasts:                         Broadcasts;
    "disable-give-dropping":            string;
    "use-alternate-keepalive":          string;
    command:                            Command;
    "allow-water-placement-in-the-end": string;
    "tps-catchup":                      string;
    enchantment:                        Enchantment;
    "dont-send-useless-entity-packets": string;
    timings:                            SettingsTimings;
    messages:                           SettingsMessages;
    entity:                             Entity;
    "lagging-threshold":                string;
}

export interface SettingsBlocks {
    barrel:                       Barrel;
    "disable-note-block-updates": string;
    anvil:                        PurpleAnvil;
    crying_obsidian:              CryingObsidian;
    ender_chest:                  EnderChest;
    "disable-mushroom-updates":   string;
    beehive:                      Beehive;
}

export interface PurpleAnvil {
    "cumulative-cost": string;
}

export interface Barrel {
    "six-rows": string;
}

export interface Beehive {
    "max-bees-inside": string;
}

export interface CryingObsidian {
    "valid-for-portal-frame": string;
}

export interface EnderChest {
    "use-permissions-for-rows": string;
    "six-rows":                 string;
}

export interface Broadcasts {
    advancement: Advancement;
    death:       Advancement;
}

export interface Advancement {
    "only-broadcast-to-affected-player": string;
}

export interface Command {
    "hide-hidden-players-from-entity-selector": string;
    gamemode:                                   Gamemode;
}

export interface Gamemode {
    "requires-specific-permission": string;
}

export interface Enchantment {
    "allow-infinity-on-crossbow":          string;
    "allow-infinity-and-mending-together": string;
    "allow-unsafe-enchants":               string;
}

export interface Entity {
    enderman: EntityEnderman;
}

export interface EntityEnderman {
    "short-height": string;
}

export interface Logger {
    "suppress-ignored-advancement-warnings": string;
    "suppress-init-legacy-material-errors":  string;
}

export interface SettingsMessages {
    "unverified-username":    string;
    "afk-tab-list-suffix":    string;
    "credits-command-output": string;
    "afk-broadcast-back":     string;
    "afk-tab-list-prefix":    string;
    "ping-command-output":    string;
    "afk-broadcast-away":     string;
    "demo-command-output":    string;
    "cannot-ride-mob":        string;
}

export interface SettingsTimings {
    url: string;
}

export interface PurpurWorldSettings {
    default: FluffyDefault;
}

export interface FluffyDefault {
    mobs:                 Mobs;
    "ridable-settings":   RidableSettings;
    blocks:               DefaultBlocks;
    "gameplay-mechanics": GameplayMechanics;
}

export interface DefaultBlocks {
    bed:              Bed;
    door:             Door;
    sponge:           Sponge;
    furnace:          Furnace;
    respawn_anchor:   Bed;
    anvil:            FluffyAnvil;
    sign:             Sign;
    weeping_vines:    IngVines;
    "end-crystal":    EndCrystal;
    farmland:         Farmland;
    slab:             Slab;
    dispenser:        Dispenser;
    blue_ice:         BlueIce;
    lava:             Lava;
    stonecutter:      Stonecutter;
    dragon_egg:       DragonEgg;
    "magma-block":    MagmaBlock;
    composter:        Composter;
    packed_ice:       PackedIce;
    chest:            Chest;
    piston:           Piston;
    shulker_box:      ShulkerBox;
    kelp:             Kelp;
    turtle_egg:       TurtleEgg;
    twisting_vines:   IngVines;
    "powered-rail":   BlocksPoweredRail;
    spawner:          Spawner;
    "no-random-tick": any[];
}

export interface FluffyAnvil {
    "allow-colors": string;
}

export interface Bed {
    "explosion-power":  string;
    explode:            string;
    "explosion-fire":   string;
    "explosion-effect": string;
}

export interface BlueIce {
    "allow-snow-formation": string;
    "allow-mob-spawns":     string;
}

export interface Chest {
    "open-with-solid-block-on-top": string;
}

export interface Composter {
    "sneak-to-bulk-process": string;
}

export interface Dispenser {
    "apply-cursed-to-armor-slots": string;
    "place-anvils":                string;
}

export interface Door {
    "requires-redstone": any[];
}

export interface DragonEgg {
    teleport: string;
}

export interface EndCrystal {
    baseless: Bed;
    base:     Bed;
}

export interface Farmland {
    "feather-fall-distance-affects-trampling": string;
    "use-alpha-farmland":                      string;
    "gets-moist-from-below":                   string;
    "only-players-trample":                    string;
    "bypass-mob-griefing":                     string;
    "disable-trampling":                       string;
}

export interface Furnace {
    "infinite-fuel": string;
}

export interface Kelp {
    "max-growth-age": string;
}

export interface Lava {
    "infinite-source":           string;
    "infinite-required-sources": string;
    speed:                       Speed;
}

export interface Speed {
    nether:       string;
    "not-nether": string;
}

export interface MagmaBlock {
    "damage-with-frost-walker": string;
    "damage-when-sneaking":     string;
}

export interface PackedIce {
    "allow-mob-spawns": string;
}

export interface Piston {
    "block-push-limit": string;
}

export interface BlocksPoweredRail {
    "activation-range": string;
}

export interface ShulkerBox {
    "allow-oversized-stacks": string;
}

export interface Sign {
    "allow-colors":     string;
    "right-click-edit": string;
}

export interface Slab {
    "break-individual-slabs-when-sneaking": string;
}

export interface Spawner {
    "deactivate-by-redstone": string;
}

export interface Sponge {
    absorption: Absorption;
}

export interface Absorption {
    area:   string;
    radius: string;
}

export interface Stonecutter {
    damage: string;
}

export interface TurtleEgg {
    "break-from-exp-orbs":  string;
    "break-from-items":     string;
    "bypass-mob-griefing":  string;
    "break-from-minecarts": string;
}

export interface IngVines {
    "growth-modifier": string;
    "max-growth-age":  string;
}

export interface GameplayMechanics {
    "raid-cooldown-seconds":                        string;
    "impose-teleport-restrictions-on-gateways":     string;
    "always-tame-in-creative":                      string;
    "entity-blindness-multiplier":                  string;
    "entity-lifespan":                              string;
    "use-better-mending":                           string;
    "animal-breeding-cooldown-seconds":             string;
    drowning:                                       Drowning;
    "persistent-tileentity-display-names-and-lore": string;
    "milk-cures-bad-omen":                          string;
    "note-block-ignore-above":                      string;
    "tick-fluids":                                  string;
    "void-damage-dealt":                            string;
    player:                                         Player;
    "entity-left-handed-chance":                    string;
    "shovel-turns-block-to-grass-path":             string[];
    "void-damage-height":                           string;
    item:                                           Item;
    armorstand:                                     Armorstand;
    "projectile-despawn-rates":                     ProjectileDespawnRates;
    "entities-can-use-portals":                     string;
    "trident-loyalty-void-return-height":           string;
    "projectile-damage":                            ProjectileDamage;
    "mob-spawning":                                 MobSpawning;
    boat:                                           Boat;
    "silk-touch":                                   SilkTouch;
    minecart:                                       Minecart;
    "infinity-bow":                                 InfinityBow;
    "entities-pick-up-loot-bypass-mob-griefing":    string;
    elytra:                                         Elytra;
    "persistent-droppable-entity-display-names":    string;
    "fireballs-bypass-mob-griefing":                string;
    "daylight-cycle-ticks":                         DaylightCycleTicks;
    "projectile-offset":                            ProjectileOffset;
    "disable-drops-on-cramming-death":              string;
}

export interface Armorstand {
    "fix-nametags":                                   string;
    "place-with-arms-visible":                        string;
    "set-name-visible-when-placing-with-custom-name": string;
    "can-movement-tick":                              string;
    "can-move-in-water-over-fence":                   string;
    "can-move-in-water":                              string;
    "step-height":                                    string;
}

export interface Boat {
    "do-fall-damage":        string;
    "eject-players-on-land": string;
}

export interface DaylightCycleTicks {
    nighttime: string;
    daytime:   string;
}

export interface Drowning {
    "damage-from-drowning": string;
    "ticks-per-damage":     string;
    "air-ticks":            string;
}

export interface Elytra {
    "damage-multiplied-by-speed": string;
    "ignore-unbreaking":          string;
    "damage-per-second":          string;
    "damage-per-boost":           DamagePerBoost;
}

export interface DamagePerBoost {
    firework: string;
    trident:  string;
}

export interface InfinityBow {
    "works-without-arrows": string;
    "normal-arrows":        string;
    "tipped-arrows":        string;
    "spectral-arrows":      string;
}

export interface Item {
    immune:        Immune;
    shears:        Shears;
    "ender-pearl": EnderPearl;
}

export interface EnderPearl {
    damage:                   string;
    "endermite-spawn-chance": string;
    "creative-cooldown":      string;
    cooldown:                 string;
}

export interface Immune {
    lightning: any[];
    explosion: any[];
    cactus:    any[];
    fire:      any[];
}

export interface Shears {
    "sprinting-damage":    string;
    "damage-if-sprinting": string;
}

export interface Minecart {
    controllable:     Controllable;
    "place-anywhere": string;
    "max-speed":      string;
    "powered-rail":   MinecartPoweredRail;
}

export interface Controllable {
    "base-speed":  string;
    "block-speed": BlockSpeed;
    "hop-boost":   string;
    "fall-damage": string;
    enabled:       string;
    "step-height": string;
}

export interface BlockSpeed {
    grass_block: string;
    stone:       string;
}

export interface MinecartPoweredRail {
    "boost-modifier": string;
}

export interface MobSpawning {
    phantoms:            string;
    "wandering-traders": string;
    "village-sieges":    string;
    "village-cats":      string;
    "raid-patrols":      string;
}

export interface Player {
    "critical-damage-multiplier":                 string;
    "totem-of-undying-works-in-inventory":        string;
    "fix-stuck-in-portal":                        string;
    "teleport-if-outside-border":                 string;
    "idle-timeout":                               IdleTimeout;
    "one-punch-in-creative":                      string;
    "sleep-ignore-nearby-mobs":                   string;
    "exp-dropped-on-death":                       ExpDroppedOnDeath;
    "netherite-fire-resistance":                  NetheriteFireResistance;
    "spawn-invulnerable-ticks":                   string;
    "invulnerable-while-accepting-resource-pack": string;
    "can-skip-night":                             string;
}

export interface ExpDroppedOnDeath {
    equation: string;
    maximum:  string;
}

export interface IdleTimeout {
    "tick-nearby-entities": string;
    "kick-if-idle":         string;
    "update-tab-list":      string;
    "count-as-sleeping":    string;
}

export interface NetheriteFireResistance {
    duration:         string;
    "show-particles": string;
    amplifier:        string;
    ambient:          string;
    "show-icon":      string;
}

export interface ProjectileDamage {
    snowball: string;
}

export interface ProjectileDespawnRates {
    dragon_fireball:   string;
    potion:            string;
    egg:               string;
    wither_skull:      string;
    fishing_bobber:    string;
    small_fireball:    string;
    experience_bottle: string;
    ender_pearl:       string;
    firework_rocket:   string;
    llama_spit:        string;
    shulker_bullet:    string;
    snowball:          string;
    fireball:          string;
}

export interface ProjectileOffset {
    trident:            string;
    crossbow:           string;
    egg:                string;
    "ender-pearl":      string;
    "throwable-potion": string;
    bow:                string;
    snowball:           string;
}

export interface SilkTouch {
    "spawner-lore": string[];
    "spawner-name": string;
    tools:          string[];
    enabled:        string;
}

export interface Mobs {
    zombie_horse:     Horse;
    panda:            Chicken;
    bee:              Bee;
    zoglin:           Chicken;
    cow:              Chicken;
    magma_cube:       Bat;
    pig:              Chicken;
    llama:            Llama;
    skeleton:         Fox;
    mule:             Donkey;
    bat:              Bat;
    husk:             Drowned;
    hoglin:           Bat;
    rabbit:           Rabbit;
    silverfish:       Fox;
    giant:            Giant;
    drowned:          Drowned;
    dolphin:          Dolphin;
    stray:            Bat;
    shulker:          Bat;
    turtle:           Bat;
    salmon:           Cod;
    vex:              Bat;
    wandering_trader: WanderingTraderClass;
    wither_skeleton:  Chicken;
    piglin_brute:     Bat;
    ocelot:           Chicken;
    horse:            Donkey;
    vindicator:       Bat;
    phantom:          Phantom;
    ender_dragon:     EnderDragon;
    evoker:           Bat;
    mooshroom:        Chicken;
    squid:            Squid;
    parrot:           Bat;
    creeper:          Creeper;
    enderman:         MobsEnderman;
    chicken:          Chicken;
    ravager:          Bat;
    trader_llama:     TraderLlama;
    donkey:           Donkey;
    fox:              Fox;
    tropical_fish:    Cod;
    slime:            Fox;
    pillager:         Bat;
    iron_golem:       IronGolem;
    zombified_piglin: Drowned;
    blaze:            Bat;
    piglin:           Bat;
    endermite:        Bat;
    cat:              Cat;
    zombie:           Zombie;
    guardian:         Cod;
    ghast:            Bat;
    sheep:            Fox;
    illusioner:       Illusioner;
    pufferfish:       Cod;
    villager:         MobsVillager;
    wolf:             Wolf;
    skeleton_horse:   Horse;
    zombie_villager:  Drowned;
    elder_guardian:   Cod;
    polar_bear:       Bat;
    strider:          Chicken;
    cave_spider:      Bat;
    cod:              Cod;
    snow_golem:       SnowGolem;
    witch:            Chicken;
    wither:           Wither;
    spider:           Bat;
}

export interface Bat {
    "ridable-in-water":         string;
    "ridable-max-y"?:           string;
    ridable:                    string;
    attributes:                 BatAttributes;
    "takes-damage-from-water"?: string;
    "bypass-mob-griefing"?:     string;
    "allow-griefing"?:          string;
    "breeding-delay-ticks"?:    string;
    "can-breed"?:               string;
    "portal-spawn-modifier"?:   string;
    "breedable-item"?:          string;
    "griefable-blocks"?:        string[];
    johnny?:                    Johnny;
}

export interface BatAttributes {
    max_health: string;
}

export interface Johnny {
    "spawn-chance": string;
}

export interface Bee {
    "ridable-in-water":     string;
    "breeding-delay-ticks": string;
    "ridable-max-y":        string;
    "can-work-at-night":    string;
    ridable:                string;
    "can-work-in-rain":     string;
    attributes:             BatAttributes;
}

export interface Cat {
    "scan-range-for-other-cats": ScanRangeForOtherCats;
    "ridable-in-water":          string;
    "breeding-delay-ticks":      string;
    ridable:                     string;
    attributes:                  BatAttributes;
    "spawn-delay":               string;
}

export interface ScanRangeForOtherCats {
    "swamp-hut": string;
    village:     string;
}

export interface Chicken {
    "ridable-in-water":              string;
    "breeding-delay-ticks"?:         string;
    ridable:                         string;
    retaliate?:                      string;
    attributes:                      BatAttributes;
    "feed-mushrooms-for-mooshroom"?: string;
    "give-saddle-back"?:             string;
    "takes-damage-from-water"?:      string;
    "takes-wither-damage"?:          string;
}

export interface Cod {
    ridable:    string;
    attributes: BatAttributes;
}

export interface Creeper {
    "naturally-charged-chance": string;
    "ridable-in-water":         string;
    "explode-when-killed":      string;
    "allow-griefing":           string;
    ridable:                    string;
    attributes:                 BatAttributes;
    "health-impacts-explosion": string;
}

export interface Dolphin {
    ridable:                      string;
    "disable-treasure-searching": string;
    attributes:                   BatAttributes;
    spit:                         Spit;
}

export interface Spit {
    damage:   string;
    cooldown: string;
    speed:    string;
}

export interface Donkey {
    "ridable-in-water":     string;
    "breeding-delay-ticks": string;
    attributes:             DonkeyAttributes;
}

export interface DonkeyAttributes {
    max_health:     Delay;
    movement_speed: Delay;
    jump_strength:  Delay;
}

export interface Drowned {
    "ridable-in-water":                 string;
    ridable:                            string;
    attributes:                         DrownedAttributes;
    jockey:                             Jockey;
    "count-as-player-kill-when-angry"?: string;
}

export interface DrownedAttributes {
    max_health:           string;
    spawn_reinforcements: string;
}

export interface Jockey {
    chance:                  string;
    "only-babies":           string;
    "try-existing-chickens": string;
}

export interface EnderDragon {
    "ridable-in-water":     string;
    "ridable-max-y":        string;
    ridable:                string;
    attributes:             BatAttributes;
    "can-ride-vehicles":    string;
    "bypass-mob-griefing":  string;
    "always-drop-full-exp": string;
}

export interface MobsEnderman {
    "ridable-in-water":                      string;
    "allow-griefing":                        string;
    "can-despawn-with-held-block":           string;
    ridable:                                 string;
    "ignore-players-wearing-dragon-head":    string;
    attributes:                              BatAttributes;
    "disable-player-stare-aggression":       string;
    "takes-damage-from-water":               string;
    "aggressive-towards-spawned-endermites": string;
    "bypass-mob-griefing":                   string;
}

export interface Fox {
    "ridable-in-water":      string;
    "breeding-delay-ticks"?: string;
    ridable:                 string;
    attributes:              BatAttributes;
    "bypass-mob-griefing"?:  string;
    "tulips-change-type"?:   string;
}

export interface Giant {
    "attack-damage":    string;
    "ridable-in-water": string;
    "have-hostile-ai":  string;
    ridable:            string;
    "have-ai":          string;
    attributes:         BatAttributes;
    "jump-height":      string;
    "movement-speed":   string;
    "step-height":      string;
}

export interface Illusioner {
    "ridable-in-water": string;
    "follow-range":     string;
    ridable:            string;
    attributes:         BatAttributes;
    "movement-speed":   string;
}

export interface IronGolem {
    "ridable-in-water":  string;
    "can-swim":          string;
    ridable:             string;
    attributes:          BatAttributes;
    "poppy-calms-anger": string;
}

export interface Llama {
    "ridable-in-water":     string;
    "join-caravans":        string;
    "breeding-delay-ticks": string;
    ridable:                string;
    attributes:             DonkeyAttributes;
}

export interface Phantom {
    "allow-griefing":             string;
    ridable:                      string;
    "flames-on-swoop":            string;
    "orbit-crystal-radius":       string;
    "attacked-by-crystal-range":  string;
    flames:                       Flames;
    "burn-in-light":              string;
    "ridable-in-water":           string;
    "attacked-by-crystal-damage": string;
    spawn:                        Spawn;
    "ridable-max-y":              string;
    "ignore-players-with-torch":  string;
    "burn-in-daylight":           string;
    attributes:                   BatAttributes;
}

export interface Flames {
    damage:      string;
    "fire-time": string;
}

export interface Spawn {
    "only-above-sea-level":    string;
    delay:                     Delay;
    "only-with-visible-sky":   string;
    "min-sky-darkness":        string;
    overhead:                  Overhead;
    "local-difficulty-chance": string;
    "per-attempt":             Delay;
    "min-time-since-slept":    string;
}

export interface Overhead {
    min:    string;
    max:    string;
    radius: string;
}

export interface Rabbit {
    "spawn-killer-rabbit-chance": string;
    "ridable-in-water":           string;
    "breeding-delay-ticks":       string;
    ridable:                      string;
    attributes:                   BatAttributes;
    "bypass-mob-griefing":        string;
    "spawn-toast-chance":         string;
}

export interface Horse {
    "ridable-in-water": string;
    "can-swim":         string;
    attributes:         DonkeyAttributes;
    "spawn-chance"?:    string;
}

export interface SnowGolem {
    "drop-pumpkin-when-sheared": string;
    "min-shoot-interval-ticks":  string;
    "ridable-in-water":          string;
    ridable:                     string;
    "max-shoot-interval-ticks":  string;
    "leave-trail-when-ridden":   string;
    "attack-distance":           string;
    "pumpkin-can-be-added-back": string;
    attributes:                  BatAttributes;
    "takes-damage-from-water":   string;
    "snow-ball-modifier":        string;
    "bypass-mob-griefing":       string;
}

export interface Squid {
    "immune-to-EAR":      string;
    "water-offset-check": string;
    "can-fly":            string;
    ridable:              string;
    attributes:           BatAttributes;
}

export interface TraderLlama {
    "ridable-in-water": string;
    ridable:            string;
    attributes:         DonkeyAttributes;
}

export interface MobsVillager {
    "use-brain-ticks-only-when-lagging":            string;
    "follow-emerald-blocks":                        string;
    lobotomize:                                     Lobotomize;
    "can-be-leashed":                               string;
    "breeding-delay-ticks":                         string;
    ridable:                                        string;
    "clerics-farm-warts":                           string;
    "spawn-iron-golem":                             SpawnIronGolem;
    "brain-ticks":                                  string;
    "can-breed":                                    string;
    "allow-trading":                                string;
    "bypass-mob-griefing":                          string;
    "ridable-in-water":                             string;
    attributes:                                     BatAttributes;
    "cleric-wart-farmers-throw-warts-at-villagers": string;
}

export interface Lobotomize {
    "check-interval": string;
    enabled:          string;
}

export interface SpawnIronGolem {
    limit:  string;
    radius: string;
}

export interface WanderingTraderClass {
    "follow-emerald-blocks": string;
    "ridable-in-water":      string;
    "can-be-leashed":        string;
    ridable:                 string;
    attributes:              BatAttributes;
    "allow-trading":         string;
}

export interface Wither {
    "explosion-radius":    string;
    "ridable-in-water":    string;
    "ridable-max-y":       string;
    ridable:               string;
    "health-regen-amount": string;
    "health-regen-delay":  string;
    attributes:            BatAttributes;
    "can-ride-vehicles":   string;
    "bypass-mob-griefing": string;
}

export interface Wolf {
    "ridable-in-water":        string;
    "milk-cures-rabid-wolves": string;
    "breeding-delay-ticks":    string;
    ridable:                   string;
    attributes:                BatAttributes;
    "spawn-rabid-chance":      string;
    "default-collar-color":    string;
}

export interface Zombie {
    "aggressive-towards-villager-when-lagging": string;
    "ridable-in-water":                         string;
    ridable:                                    string;
    attributes:                                 DrownedAttributes;
    "break-door-minimum-difficulty":            string;
    jockey:                                     Jockey;
    "bypass-mob-griefing":                      string;
}

export interface RidableSettings {
    "babies-are-ridable":           string;
    "use-night-vision":             string;
    "untamed-tamables-are-ridable": string;
}

export interface ServerProperties {
    "broadcast-rcon-to-ops":             string;
    "enable-jmx-monitoring":             string;
    "view-distance":                     string;
    "max-build-height":                  string;
    gamemode:                            string;
    "enable-command-block":              string;
    "allow-nether":                      string;
    "server-port":                       string;
    "enable-rcon":                       string;
    "sync-chunk-writes":                 string;
    "enable-query":                      string;
    "server-name":                       string;
    "op-permission-level":               string;
    "prevent-proxy-connections":         string;
    "generator-settings":                string;
    "resource-pack":                     string;
    "entity-broadcast-range-percentage": string;
    "level-name":                        string;
    "player-idle-timeout":               string;
    motd:                                string;
    debug:                               string;
    "force-gamemode":                    string;
    "rate-limit":                        string;
    hardcore:                            string;
    "white-list":                        string;
    "broadcast-console-to-ops":          string;
    pvp:                                 string;
    "spawn-npcs":                        string;
    "generate-structures":               string;
    "spawn-animals":                     string;
    "snooper-enabled":                   string;
    difficulty:                          string;
    "function-permission-level":         string;
    "network-compression-threshold":     string;
    "level-type":                        string;
    "text-filtering-config":             string;
    "max-tick-time":                     string;
    "spawn-monsters":                    string;
    "use-native-transport":              string;
    "max-players":                       string;
    "enforce-whitelist":                 string;
    "resource-pack-sha1":                string;
    "spawn-protection":                  string;
    "online-mode":                       string;
    "enable-status":                     string;
    "allow-flight":                      string;
    "max-world-size":                    string;
}

export interface Spigot {
    settings:         SpigotSettings;
    advancements:     Advancements;
    "world-settings": SpigotWorldSettings;
    stats:            Stats;
    "config-version": string;
    players:          Players;
    messages:         SpigotMessages;
    commands:         Commands;
}

export interface Advancements {
    "disable-saving": string;
    disabled:         string[];
}

export interface Commands {
    "tab-complete":                string;
    "send-namespaced":             string;
    log:                           string;
    "silent-commandblock-console": string;
    "spam-exclusions":             string[];
    "replace-commands":            string[];
}

export interface SpigotMessages {
    "outdated-client": string;
    "unknown-command": string;
    restart:           string;
    "outdated-server": string;
    whitelist:         string;
    "server-full":     string;
}

export interface Players {
    "disable-saving": string;
}

export interface SpigotSettings {
    debug:                          string;
    "moved-too-quickly-multiplier": string;
    "netty-threads":                string;
    "player-shuffle":               string;
    "restart-on-crash":             string;
    "user-cache-size":              string;
    "moved-wrongly-threshold":      string;
    bungeecord:                     string;
    "timeout-time":                 string;
    "save-user-cache-on-stop-only": string;
    "log-villager-deaths":          string;
    attribute:                      Attribute;
    "sample-count":                 string;
    "restart-script":               string;
}

export interface Attribute {
    maxHealth:     AttackDamage;
    movementSpeed: AttackDamage;
    attackDamage:  AttackDamage;
}

export interface AttackDamage {
    max: string;
}

export interface Stats {
    "disable-saving": string;
    "forced-stats":   any[];
}

export interface SpigotWorldSettings {
    default: TentacledDefault;
}

export interface TentacledDefault {
    "ticks-per":                          DefaultTicksPer;
    "mob-spawn-range":                    string;
    "wither-spawn-sound-radius":          string;
    "trident-despawn-rate":               string;
    "view-distance":                      string;
    "max-tnt-per-tick":                   string;
    "enable-zombie-pigmen-portal-spawns": string;
    "nerf-spawner-mobs":                  string;
    "squid-spawn-range":                  SquidSpawnRange;
    "zombie-aggressive-towards-villager": string;
    verbose:                              string;
    hunger:                               Hunger;
    "hanging-tick-frequency":             string;
    "end-portal-sound-radius":            string;
    "entity-tracking-range":              EntityTrackingRange;
    "max-tick-time":                      MaxTickTime;
    "hopper-amount":                      string;
    "max-entity-collisions":              string;
    "entity-activation-range":            EntityActivationRange;
    growth:                               Growth;
    "arrow-despawn-rate":                 string;
    "dragon-death-sound-radius":          string;
    "item-despawn-rate":                  string;
    "merge-radius":                       MergeRadius;
}

export interface EntityActivationRange {
    "flying-monsters":               string;
    "wake-up-inactive":              WakeUpInactive;
    villagers:                       string;
    "villagers-work-immunity-after": string;
    monsters:                        string;
    "villagers-active-for-panic":    string;
    animals:                         string;
    "tick-inactive-villagers":       string;
    water:                           string;
    raiders:                         string;
    misc:                            string;
    "villagers-work-immunity-for":   string;
}

export interface WakeUpInactive {
    "villagers-every":              string;
    "villagers-for":                string;
    "flying-monsters-for":          string;
    "animals-every":                string;
    "villagers-max-per-tick":       string;
    "animals-for":                  string;
    "monsters-max-per-tick":        string;
    "flying-monsters-max-per-tick": string;
    "flying-monsters-every":        string;
    "monsters-every":               string;
    "animals-max-per-tick":         string;
    "monsters-for":                 string;
}

export interface EntityTrackingRange {
    other:    string;
    players:  string;
    monsters: string;
    animals:  string;
    misc:     string;
}

export interface Growth {
    "carrot-modifier":     string;
    "netherwart-modifier": string;
    "mushroom-modifier":   string;
    "cocoa-modifier":      string;
    "kelp-modifier":       string;
    "wheat-modifier":      string;
    "vine-modifier":       string;
    "sweetberry-modifier": string;
    "melon-modifier":      string;
    "pumpkin-modifier":    string;
    "sapling-modifier":    string;
    "potato-modifier":     string;
    "beetroot-modifier":   string;
    "bamboo-modifier":     string;
    "cane-modifier":       string;
    "cactus-modifier":     string;
}

export interface Hunger {
    "jump-sprint-exhaustion": string;
    "swim-multiplier":        string;
    "other-multiplier":       string;
    "combat-exhaustion":      string;
    "sprint-multiplier":      string;
    "regen-exhaustion":       string;
    "jump-walk-exhaustion":   string;
}

export interface MaxTickTime {
    tile:   string;
    entity: string;
}

export interface MergeRadius {
    item: string;
    exp:  string;
}

export interface SquidSpawnRange {
    min: string;
}

export interface DefaultTicksPer {
    "hopper-transfer": string;
    "hopper-check":    string;
}

export interface Tuinity {
    "config-version-please-do-not-modify-me":    string;
    "player-chunks":                             PlayerChunks;
    "lag-compensate-block-breaking":             string;
    "packet-limiter":                            PacketLimiter;
    "world-settings":                            TuinityWorldSettings;
    "use-new-light-engine":                      string;
    "send-full-pos-for-hard-colliding-entities": string;
    "delay-chunkunloads-by":                     string;
}

export interface PacketLimiter {
    "kick-message": string;
    limits:         Limits;
}

export interface Limits {
    all:                    All;
    PacketPlayInAutoRecipe: PacketPlayInAutoRecipe;
}

export interface PacketPlayInAutoRecipe {
    "max-packet-rate": string;
    action:            string;
    interval:          string;
}

export interface All {
    "max-packet-rate": string;
    interval:          string;
}

export interface PlayerChunks {
    "enable-mc162253-workaround": string;
    "min-load-radius":            string;
    "max-concurrent-sends":       string;
    "autoconfig-send-distance":   string;
    "max-concurrent-loads":       string;
    "enable-frustum-priority":    string;
    "target-chunk-send-rate":     string;
}

export interface TuinityWorldSettings {
    default:       StickyDefault;
    world:         any[];
    world_the_end: any[];
    world_nether:  any[];
}

export interface StickyDefault {
    "spawn-limits": SpawnLimits;
    worldgen:       Worldgen;
}

export interface Worldgen {
    seeds: any[];
}

export interface Yatopia {
    settings:         YatopiaSettings;
    worlds:           YatopiaWorlds;
    "config-version": string;
    "brand-name":     string;
    verbose:          string;
}

export interface YatopiaSettings {
    "fire-block-physics-event":  string;
    intervals:                   Intervals;
    checks:                      Checks;
    disableEntityStuckChecks:    string;
    villager:                    SettingsVillager;
    fixFallDistance:             string;
    "fix-protocollib":           string;
    "criterion-triggers":        CriterionTriggers;
    tick:                        Tick;
    "log-player-login-location": string;
    itemStuckSleepTicks:         string;
}

export interface Checks {
    flight:                  string;
    "moved-quickly":         string;
    "moved-wrongly":         string;
    "vehicle-flight":        string;
    "vehicle-moved-quickly": string;
    "vehicle-moved-wrongly": string;
}

export interface CriterionTriggers {
    "enter-block": string;
    location:      string;
    tick:          string;
}

export interface Intervals {
    "player-time-statistics": string;
}

export interface Tick {
    "enchanting-tables": string;
}

export interface SettingsVillager {
    simplerVillagerBehavior: string;
    villagersHideAtNight:    string;
}

export interface YatopiaWorlds {
    default: WorldsDefault;
}

export interface WorldsDefault {
    collisions:                Collisions;
    "disable-observer-clocks": string;
    pigmen:                    Pigmen;
}

export interface Collisions {
    "water-creature": string;
    "water-ambient":  string;
    "iron-golems":    string;
    players:          string;
    villagers:        string;
    pillagers:        string;
    ambient:          string;
    monsters:         string;
    animals:          string;
    items:            string;
    misc:             string;
}

export interface Pigmen {
    "dont-target-unless-hit": string;
}

export interface Datum {
    id:            number;
    start:         number;
    end:           number;
    totalTicks:    number;
    totalTime:     number;
    worldData:     WorldData;
    minuteReports: MinuteReport[];
    ":cls":        number;
}

export interface MinuteReport {
    time:           number;
    tps:            number;
    avgPing:        number;
    fullServerTick: FullServerTick;
    ticks:          Ticks;
    ":cls":         number;
}

export interface FullServerTick {
    id:       number;
    count:    number;
    total:    number;
    lagCount: number;
    lagTotal: number;
    ":cls":   number;
}

export interface Ticks {
    timedTicks:           number;
    playerTicks:          number;
    entityTicks:          number;
    activatedEntityTicks: number;
    tileEntityTicks:      number;
    ":cls":               number;
}

export interface WorldData {
    "1": The1;
}

export interface The1 {
    worldName: string;
    regions:   { [key: string]: Region };
    ":cls":    number;
}

export interface Region {
    regionId:     string;
    chunkCount:   number;
    areaLocX:     number;
    areaLocZ:     number;
    tileEntities: any[];
    entities:     any[];
    ":cls":       number;
}

export interface Idmap {
    groupMap:          { [key: string]: string };
    handlerMap:        { [key: string]: HandlerMap };
    worldMap:          WorldMap;
    tileEntityTypeMap: any[];
    entityTypeMap:     any[];
    ":cls":            number;
}

export interface HandlerMap {
    name:   string;
    group:  number;
    ":cls": number;
}

export interface WorldMap {
    "1": string;
}

export type Plugins = Record<string, Essentials>

export type Essentials = {
    name:        string;
    version:     string;
    description: string;
    website:     string;
    authors:     string;
    ":cls":      number;
}

export interface System {
    timingcost: number;
    name:       string;
    version:    string;
    jvmversion: string;
    arch:       string;
    maxmem:     number;
    cpu:        number;
    runtime:    number;
    flags:      string;
    gc:         Gc;
    ":cls":     number;
}

export interface Gc {
    "G1 Young Generation": number[];
    "G1 Old Generation":   number[];
}
