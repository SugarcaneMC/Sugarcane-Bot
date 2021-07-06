const log = require("./log.js")
var vizion = require('vizion');
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const {
    isAsyncFunction
} = require("util/types");

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
    /*This didn't work, I'll fix it later
    const autoUpdate = setInterval(() => {
        vizion.analyze({
            folder: '.'
        }, function (err, meta) {
            if (err) throw new Error(err);
            if (!meta.next_rev) return;
            log.log(`Update detected, New revision id is ${meta.next_reg}. Restarting!`, true);
        });
    }, 30000);
    vizion.analyze({
        folder: '.'
    }, function (err, meta) {
        if (err) throw new Error(err);
        if (!meta.next_rev) return;
        log.log(`Update detected, New revision id is ${meta.next_reg}. Restarting!`, true);
    });*/
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
        if (!/^[a-zA-Z0-9]+$/.test(cmd)) return; //This is a temporary fix so the bot doesnt respond to commands that are not alphanumeric, i.e any command (<prefix><command> <arguments>) that contains symbols will be ignored.
        //To clarify, arguments with symbols will NOT be ignored, only root commands themselves
        switch (cmd) {
            // Admin Commands
            case "admin":
                if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send(`You cannot do that <@${msg.author.id}>!`);
                if (!args[0]) return msg.channel.send(`Please provide a valid subcommand\n\`${prefix}admin <subcommand> [arguments]\``);
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
                            embed.fields.push({
                                name: row.timestamp,
                                value: row.log
                            });
                        }, (err) => {
                            msg.channel.send(embed);
                        })
                        break;
                    default:
                        msg.channel.send(`\`${args[0]}\` is not a valid subcommand`);
                }
                break;
            case "info":
                if(!args[0]) args[0] = "";
                switch (args[0].toLowerCase()) {
                    case "bot":
                        vizion.analyze({
                            folder: "."
                        }, function (err, meta) {
                            if (err) throw new Error(err);
                            msg.channel.send({
                                embed: {
                                    "title": `Info on ${meta.url.substr(19).replace(/.git$/, "")}`,
                                    "description": `[Repo](${meta.url})`,
                                    "color": 38143,
                                    "fields": [{
                                        "name": "Latest Commit",
                                        "value": `URL: ${meta.url.substr(0, meta.url.length - 4)}/commit/${meta.revision}\nBranch: ${meta.branch}\nComment: \`\`\`\n${meta.comment}\`\`\``
                                    }],
                                    "footer": {
                                        "text": "Created (mostly) by Chris Chrome"
                                    }
                                }
                            })
                        });
                        break;

                    default:
                        msg.channel.send(`Please provide a valid category. Currently Available:\n\`bot\` - Latest commit for this bot`);
                        break;
                }
                break;
        }
    }
})

bot.login(config.discord.token).catch((err) => {
    log.log(err, true);
});