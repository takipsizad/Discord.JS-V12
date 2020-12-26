const Discord = require('discord.js');
const leet = require('leet');
exports.run = (client,message,args) => {
   let mesaj = args.slice(0).join(' ');
 if(!mesaj){
message.channel.send("You Must Write Something.")
} else{
   const text = leet.convert(mesaj);
   message.channel.send(text)
}; };


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["leetify"]
  };
  
  exports.help = {
    name: 'leetify',
  };
