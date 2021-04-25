// API imports
const config = require('../config.json');
const embedmessage = require('../commands/vars/embedmessage.json');
const Discord = require('discord.js');
const { TransportTycoon } = require('transporttycoon');
const calculations = require('../commands/vars/calculations.json');

// Discord embed message
module.exports = {
  name: "chargesleft",
  description: "shows how many api charges are left.",
  category: "help",
  run: async (bot, message, args) => {
    const TT = new TransportTycoon(config.TT_Token, true);
        if(!args.length){
        await TT.setupCharges();
        const apicharges = await TT.setupCharges();
        const embed = new Discord.MessageEmbed()
            .setColor(RANDOM)
            .setTitle('Current charges left:')
            .setDescription(apicharges)
            message.channel.send(embed);
        }
        }}