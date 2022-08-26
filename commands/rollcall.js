const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rollcall')
        .setDescription('Pings for roll call')
        .addIntegerOption((option) =>
            option.setName('day')
                .setDescription('Day of the session')
                .setRequired(true)
                .addChoices(
                    {name: 'Sunday', value: 0},
                    {name: 'Monday', value: 1},
                    {name: 'Tuesday', value: 2},
                    {name: 'Wednesday', value: 3},
                    {name: 'Thursday', value: 4},
                    {name: 'Friday', value: 5},
                    {name: 'Saturday', value: 6}
                )),
                    

    async execute(interation) {
        const { options } = interation;
        const day = options.getInteger('day')
        await interation.reply (`the session is set for ${day}`);
    }
};