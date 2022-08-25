const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rollcall')
        .setDescription('Pings for roll call')
        .addIntegerOption(option =>
            option.setName('day')
                .setDescription('day of the session 0-6')
                .setRequired(true)),

    async execute(interation) {
        const { options } = interation;
        const day = options.getInteger('day')
        await interation.reply (`the session is set for ${day}`);
    },
};