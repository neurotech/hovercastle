const Discord = require('discord.js');
const config = require('./config');
const router = require('./router');

const bot = new Discord.Client();
bot.login(config.discord.token);

bot.on('ready', () => {
  console.log('Bot is now online.');
});

// Watch for message
bot.on('message', message => {
  // Only respond to your own messages
  if (message.author !== bot.user) return;

  // Send the message to router
  router(bot, message);
});

// Re-login if bot goes offline
setInterval(() => { if (bot.status === 1) bot.login(config.discord.token); }, 1000 * 30);

// Log out on process exit/uncaught exception
process.on('exit', () => { bot.destroy(); });
process.on('uncaughtException', () => { bot.destroy(); });
