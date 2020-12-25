const {Message, Client} = require("discord.js");
const Command = require("../../models/Command");

class CommandPurge extends Command{
    constructor(){
        super({
            commands: ["purge"],
            description: "Delete your messages",
            usage: "purge",
            cooldown: 5000
        });
    }

    /**
     * @param {Message} message 
     * @param {Client} args 
     */
    async execute(message, args){
        if(!args[1]) return message.reply ('Error, please specify the amount you want to delete.')
        message.channel.bulkDelete(args[1]);
        message.channel.send(`${args[1]} messages deleted!`)
    } }

module.exports = CommandPurge;
