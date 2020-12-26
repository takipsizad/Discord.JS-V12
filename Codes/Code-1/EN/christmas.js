const Discord = require('discord.js');
const parsems = require('parse-ms');

exports.run = async(client, message, args) => {
  let newyear = new Date('2021-01-01:00:00')
    let time = parsems(newyear - Date.now())
    message.channel.send(`We enter the new year after **${time.hours}** hours, **${time.minute}** minute, **${time.seconds}** seconds :tada:`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["new-year"],
};

exports.help = {
  name: 'christmas',
  description: 'Shows how much time is left in the New Year',
  usage: "!christmas"
};
//MeyiN36
