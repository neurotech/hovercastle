const Discord = require('discord.js');
const symbols = require('log-symbols');
const dateFormat = require('dateformat');
const config = require('./config');
const router = require('./router');

const bot = new Discord.Client();
bot.login(config.discord.token);

bot.on('ready', () => {
  console.log(symbols.success, ` [${dateFormat()}] Hovercastle online.`);
});

// Watch for message
bot.on('message', message => {
  // Only respond to your own messages
  if (message.author !== bot.user) return;

  // Send the message to router
  router(bot, message);
});

// Re-login if bot goes offline
setInterval(() => {
  if (bot.status === 1) {
    console.log(symbols.error, ` [${dateFormat()}] Hovercastle lost connection to Discord!`);
    bot.login(config.discord.token)
      .then(() => {
        console.log(symbols.success, ` [${dateFormat()}] Hovercastle re-connected to Discord.`);
      });
  }
}, 1000 * 30);

// Log out on process exit/uncaught exception
process.on('exit', () => { bot.destroy(); });
process.on('uncaughtException', () => { bot.destroy(); });
