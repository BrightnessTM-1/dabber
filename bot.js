const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.TOKEN)

client.on('ready', () => {

  console.log("on");
  client.user.setStatus("online")
  client.user.setActivity("for messages from quikblend so then I can dab on them", {type: "WATCHING"})
})

client.on('message', (message) => {
  if (message.author.id === "73193882359173120") { // quikblend is 73193882359173120
    let emoteCollection = client.guilds.get("591717822443290633").emojis.map(x => x.name + " " + x.id + " " + x.animated);
    let emoteChosen = emoteCollection[Math.floor(Math.random()*emoteCollection.length)];
    let splitted = emoteChosen.split(" ")
    console.log(splitted)
    if (splitted[0].startsWith("a")) {
      console.log("<a:" + splitted[0] + ":" + splitted[1] + ">")
      message.channel.send("<a:" + splitted[0] + ":" + splitted[1] + ">")
    } else {
      message.channel.send("<:" + splitted[0] + ":" + splitted[1] + ">")
    }
  }
})
