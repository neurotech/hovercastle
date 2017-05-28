const overwatch = require('./commands/overwatch');
const quote = require('./commands/quote');
const botinfo = require('./commands/botinfo');
const restart = require('./commands/restart');

module.exports = (bot, message) => {
  if (message.content.toLowerCase().startsWith('/overwatch')) overwatch(message);
  if (message.content.toLowerCase().startsWith('/quote')) quote(message);
  if (message.content.toLowerCase().startsWith('/botinfo')) botinfo(bot, message);
  if (message.content.toLowerCase().startsWith('/restart')) restart();
};
