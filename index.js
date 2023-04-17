require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log("Discord Bot telah online!");
});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.DISCORD_CHANNEL_ID) return;
    if (message.content.startsWith('!')) return;

    let conversationLog = [{ role: 'system', content: "You are friendly chatbot."}];

    await message.channel.sendTyping();

    conversationLog.push({
        role: 'user',
        content: message.content,
    });

    const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversationLog,
    });

    message.reply(result.data.choices[0].message);
});

client.login(process.env.TOKEN_DISCORD_DEV);