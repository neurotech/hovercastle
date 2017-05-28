const Discord = require('discord.js');
const moment = require('moment');
const config = require('../config');
const details = require('../package.json');

module.exports = (bot, message) => {
  let memory = process.memoryUsage();
  let memTotal = memory.heapTotal / 1024 / 1024;
  let memUsed = memory.heapUsed / 1024 / 1024;
  let uptime = process.uptime() * 1000;
  message.edit({
    embed: {
      author: {
        name: 'Hovercastle Bot Info',
        icon_url: bot.user.displayAvatarURL
      },
      description: `[${details.repository}](${details.repository})`,
      color: config.palette.yellow,
      fields: [
        { name: 'Node Version', value: `\`${process.version}\``, inline: true },
        { name: 'Discord.js Version', value: `\`${Discord.version}\``, inline: true },
        { name: 'Bot Version', value: `\`v${details.version}\``, inline: true },
        { name: 'Process Uptime', value: `\`${moment.duration(uptime).humanize()}\``, inline: true },
        { name: 'Memory Use', value: `\`${memUsed.toFixed(2)}/${memTotal.toFixed(2)}MB\``, inline: true },
        { name: 'Heartbeat Ping', value: `\`${Math.floor(bot.ping)}ms\``, inline: true }
      ]
    }
  });
};
