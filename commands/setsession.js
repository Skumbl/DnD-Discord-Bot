const {SlashCommandBuilder} = require('discord.js');

let SESH_DAY = 0;
let SESH_TIME = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set_session')
        .setDescription('Set the weekly session date and time')
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
                )
        )
        .addIntegerOption((option) =>
            option.setName('time')
                .setDescription('whole number for time of session')
                .setRequired(true)
                .setMaxValue(11)
        )
        .addIntegerOption((option) =>
            option.setName('meridiem')
                .setDescription('AM or PM?')
                .setRequired(true)
                .addChoices(
                    {name: 'AM', value: 0},
                    {name: 'PM', value: 1}
                )
        ),
                    

    async execute(interation) {
        const { options } = interation;
        SESH_DAY = options.getInteger('day');
        let time = options.getInteger('time')
        const meridiem = options.getInteger('meridiem');
        if ( meridiem == 1)
        {
            time += 12;
        }
        switch(options.getInteger('day'))
        {
            case 0: {
                await interation.reply (`Session set for Sunday at ${time}:00`);
                break;
            }
            case 1: {
                await interation.reply (`Session set for Monday at ${time}:00`);       
                break;  
            }
            case 2: {
                await interation.reply (`Session set for Tuesday at ${time}:00`);
                break;
            }
            case 3: {
                await interation.reply (`Session set for Wednesday at ${time}:00`);
                break;
            }
            case 4: {
                await interation.reply (`Session set for Thursday at ${time}:00`);
                break;
            }
            case 5: {
                await interation.reply (`Session set for Friday at ${time}:00`);
                break;
            }
            case 6: {
                await interation.reply (`Session set for Saturday at ${time}:00`);
                break;
            }
        }
    }
};

module.exports.SESH_DAY = SESH_DAY;
module.exports.SESH_TIME = SESH_TIME;
