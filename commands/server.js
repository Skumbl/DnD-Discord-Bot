const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('gives server info'),
    async execute(interation) {
        await interation.reply(`Server Name: ${interation.guild.name}\nTotal Members: ${interation.guild.memberCount}`);
    }
}