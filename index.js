const {Client, GatewayIntentBits} = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;

//initilaizes the client with the appropriate intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

//start up message
client.on('ready', ()=> {
    console.log('Hermond takes flight');
});

client.on('interactionCreate', async interation => {
    if(!interation.isChatInputCommand()) { return true; }

    const { commandName } = interation;

    if (commandName === 'ping') {
        await interation.reply('pong');
    }
    else if (commandName === 'server') {
        await interation.reply(`Server name: ${interation.guild.name}\nTotal members: ${interation.guild.memberCount}`);
    }
    else if (commandName === 'user'){ 
        await interation.reply(`Your tags: ${interation.user.tag}\nYour id: ${interation.user.id}`);
    }
});

//login
client.login(token);