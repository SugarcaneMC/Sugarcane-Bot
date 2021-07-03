const log = require("./log.js")
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
})

bot.on('guildMemberAdd', (member) => {
    switch (member.guild.id) {
        case "855918593497759754":
            member.roles.add("855981133731856414").catch((err) => {
                log.log("err", err, false);
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

        }
    }
})

bot.login(config.discord.token).catch((err) => {
    log.log("err", err, true);
});