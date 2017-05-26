const quote = require('./commands/quote');
const botinfo = require('./commands/botinfo');

module.exports = (bot, message) => {
  if (message.content.startsWith('!quote')) quote(message);
  if (message.content.startsWith('!botinfo')) botinfo(bot, message);
};
