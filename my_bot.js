const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.content.includes('!ping')) {
    var i
    const user = message.mentions.users.first()
    for (i = 0; i < 10; i++) {
      message.channel.send('look over here ' + user)
    }
  } else if (message.content.includes('!r')) {
    var j
    for (j = 0; j < 18; j++) {
      setTimeout(() => message.channel.send('$m'), 1000)
    }
  }
})
// THIS  MUST  BE  THIS  WAY
// BOT_TOKEN is the Client Secret
client.login(process.env.BOT_TOKEN)
