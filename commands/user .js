const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gives user info'),
    async execute(interation) {
        await interation.reply(`User Name: ${interation.user.tag}\nYour ID: ${interation.user.id}`);
    }
}