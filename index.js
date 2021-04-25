// Forced (Discord)
const Discord = require('discord.js');
require("dotenv").config();

// Forced (Tokens)
const config = require("./config.json");

// Forced (TT)
const { TransportTycoon } = require('transporttycoon');
const fs = require('fs');
const bot = new Discord.Client();

// Terminal message
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

bot.on("ready", async () => {
	console.log(`Bot is ready for usage!
    `);
})

// Command handler

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("File " + file + " loaded successfully!")
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

fs.readdir('./events/', (err, files) => {
	if (err) console.log(err);
	files.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		console.log("File " + file + " loaded successfully!")
		let eventName = file.split(".")[0];
		bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
	});
});

// Bot login
bot.login(config.Discord_Token);