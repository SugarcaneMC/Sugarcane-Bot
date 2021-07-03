const log = require("./log.js")
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const { isAsyncFunction } = require("util/types");

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
})

bot.on('guildMemberAdd', (member) => {
    switch (member.guild.id) {
        case "855918593497759754":
            member.roles.add("855981133731856414").catch((err) => {
                log.log(err);
            })
            break;
    }
})

bot.on('message', (msg) => {
    const prefix = config.discord.prefix;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (msg.content.toLowerCase().startsWith(prefix)) {
        switch (cmd) {
            // Admin Commands
            case "admin": 
                if(!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send(`You cannot do that <@${msg.author.id}>!`);
                if(!args[0]) return msg.channel.send(`Please provide a valid subcommand\n\`${prefix}admin <subcommand> [arguments]\``);
                switch (args[0]) {
                    case "restart":
                        msg.channel.send("Restarting...").then(() => {
                            bot.destroy();
                            process.exit(0);
                        });
                        break;
                    case "logs":
                        var embed = new Discord.MessageEmbed;
                        embed.setTitle("Latest logs");
                        log.db.each("SELECT * FROM logs LIMIT 25", (err, row) => {
                            embed.fields.push({name: row.timestamp, value: row.log});
                        }, (err) => {
                            msg.channel.send(embed);
                        })
                        break;
                    default:
                        msg.channel.send(`\`${args[0]}\` is not a valid subcommand`);
                }
                break;

            default:
                msg.channel.send(`\`${prefix}${cmd}\` Not found!`)
                break;
        }
    }
})

bot.login(config.discord.token).catch((err) => {
    log.log(err, true);
});