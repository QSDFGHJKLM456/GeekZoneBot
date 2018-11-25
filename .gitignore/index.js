const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Faire /help");
    console.log("Je suis activé !");
});

bot.login('NTA3OTI2ODA5NzYxOTM5NDc4.Dtw7Mw.Uuav1Lv0XtxTMYq5gYQpfvyc7n8')

bot.on('message', message => {
    if(message.content === prefix + 'help') {
        message.channel.send('**__Commande :__** \n \n */help* \n -> Donne la commande help \n \n */say [text]* \n -> fait faire parler le bot !')
    }

    if(message.content === 'Salut') {
        message.channel.send("Salut Salut ^^")
    }
});

bot.on("message", message => {   
    if(message.content.startsWith( "/say")) {
        message.delete();
        var text = message.content.split(' ').slice(1).join(' ')
        message.channel.send(text)
        console.log("Le §say a été éffectué !") 
    }
});

bot.on('message', message => {

    if(message.content.startsWith('/kill')) {

        const user = message.mentions.users.first();
         
        if(user) {
            message.channel.send("Pas de problème " + message.author + " ! Dès que j'aurai le temps je m'occuperai de " + (user) + " ! :smiling_imp: ")
        } else {
            message.reply("Tu veux que je tues qui moi ? Mentionne quelqu'un sinon je suis perdu !")
        }
    }
});
