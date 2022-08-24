const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
require('dotenv').config();
const clientId = process.env.ClientId;
const guildId = process.env.GuildId;
const token = process.env.TOKEN;

