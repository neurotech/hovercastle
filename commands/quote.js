const moment = require('moment');
const config = require('../config');

module.exports = (message) => {
  let chunked = message.content.split(' ');
  let id = chunked.slice(1).join(' ');

  message.channel.fetchMessage(id)
    .then((fetched) => {
      return message.edit({
        embed: {
          author: {
            name: `${fetched.member ? fetched.member.displayName : fetched.author.username} said:`,
            icon_url: fetched.author.displayAvatarURL
          },
          description: fetched.content,
          footer: {
            text: `In: #${fetched.channel.name} on ${moment(fetched.createdAt).format('LLLL')}`
          },
          color: fetched.member && fetched.member.displayColor ? fetched.member.displayColor : config.palette.pink
        }
      });
    })
    .catch(console.error);
};
