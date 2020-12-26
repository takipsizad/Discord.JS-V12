const Discord = require('discord.js');
const parsems = require('parse-ms');

exports.run = async(client, message, args) => {
  let yeniyil = new Date('2021-01-01:00:00')
    let zaman = parsems(yeniyil - Date.now())
    message.reply(`Yeni yıla **${zaman.days}** gün,**${zaman.hours}** saat,**${zaman.minutes}**dakika sonra gireceğiz :tada:`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yeni-yıl"],
};

exports.help = {
  name: 'yılbaşı',
  description: 'Yeni yıla ne kadar zaman kaldığını gösterir',
  usage: "!yılbaşı"
};
