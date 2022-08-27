const {SlashCommandBuilder} = require('discord.js');
const cron = require('node-cron');

//command to set the date and time of a session
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
            option.setName('hour')
                .setDescription('hour in 24 hour format')
                .setRequired(true)
                .setMaxValue(23)
        )
        .addIntegerOption((option) => 
            option.setName('minute')
                .setDescription('minute')
                .setRequired(true)
                .setMaxValue(59)
        ),
                    

    async execute(interation) {
        const { options } = interation;
        let hour = options.getInteger('hour');
        let minute = options.getInteger('minute');

        // cron.schedule(`${SESH_MIN} ${SESH_HOUR} * * ${SESH_DAY}`, () => {
        //     console.log('ping players');
        // });
        cron.schedule(`* * * * *`, () => {
            console.log('ping players');
        });

        //print session conformation
        switch(options.getInteger('day'))
        {
            case 0: {
                await interation.reply (`Session set for Sunday at ${hour}:${minute}`);
                break;
            }
            case 1: {
                await interation.reply (`Session set for Monday at ${hour}:${minute}`);       
                break;  
            }
            case 2: {
                await interation.reply (`Session set for Tuesday at ${hour}:${minute}`);
                break;
            }
            case 3: {
                await interation.reply (`Session set for Wednesday at ${hour}:${minute}`);
                break;
            }
            case 4: {
                await interation.reply (`Session set for Thursday at ${hour}:${minute}`);
                break;
            }
            case 5: {
                await interation.reply (`Session set for Friday at ${hour}:${minute}`);
                break;
            }
            case 6: {
                await interation.reply (`Session set for Saturday at ${hour}:${minute}`);
                break;
            }
        }
    }
};