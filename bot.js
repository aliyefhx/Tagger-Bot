
var token = '210636921:AAGruBb2_rONA7y7vScyIjwn3FyGKJL2p-8';

var Bot = require('node-telegram-bot-api');
bot = new Bot(token, {polling: true });

console.log('bot server started...');
var buffer = "";  
var note = {}; 
var err = "";

bot.onText(/^\/start/, function (msg, match) {
bot.sendMessage(msg.chat.id, 'Hi, I’m Tag, an AI-based assistant for Telegram powered by @winthanaung.\n\n You can control me by sending these commands:\n\n /note "your note" - Create your own note.\n /please - Retrieve your saved notes.\n /clear - Clean your notes.\n\nNote:If session expired, the notes are clear automatically.').then(function() {
});
});


bot.onText(/^\/please/, function (msg, match) {
if (note[msg.chat.id] == null)
  {
var error  =  "Oop, you haven't tag anything yet"; 
bot.sendMessage(msg.chat.id, error).then(function(){
});
}

else {
bot.sendMessage(msg.chat.id, note[msg.chat.id]).then(function() {
});
}

});

bot.onText(/^\/note (.+)$/, function (msg, match) {
if (note[msg.chat.id] == null ) {
note[msg.chat.id]  =   '\n\n' + msg.text.substring(6).replace('@tagger_bot', '');
}

else {

note[msg.chat.id]  +=   '\n\n' + msg.text.substring(6).replace('@tagger_bot', '');
}
bot.sendMessage(msg.chat.id, note[msg.chat.id]).then(function () {
});
});


 bot.onText(/^\/clear/, function (msg, match) {
var clear = match[1];
if (note[msg.chat.id] != null)
  {
console.log(1);

if (note[msg.chat.id] !== "" ) {
console.log(note[msg.chat.id].length);
note[msg.chat.id] = null;

}

}

else {
console.log(2);
}
i = 0; 
bot.sendMessage(msg.chat.id, 'All notes are clear from System.').then(function() {
});
});

module.exports = bot; 
