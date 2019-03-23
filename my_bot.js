const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.includes("!ping")) {
        user = message.mentions.users.first();
        message.channel.send('look over here ' + user);
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret