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

//login
client.login(token);