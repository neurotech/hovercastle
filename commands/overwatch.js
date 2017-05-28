const symbols = require('log-symbols');
const dateFormat = require('dateformat');

let pixel = './images/overwatch/pixel';
let heroes = [
  'ana',
  'bastion',
  'dva',
  'genji',
  'hanzo',
  'junkrat',
  'lucio',
  'mccree',
  'mei',
  'mercy',
  'pharah',
  'reaper',
  'reinhardt',
  'roadhog',
  'soldier-76',
  'sombra',
  'symmetra',
  'torbjorn',
  'tracer',
  'widowmaker',
  'winston',
  'zarya',
  'zenyatta'
];

module.exports = (message) => {
  if (message.content.toLowerCase().startsWith('/overwatch pixel')) {
    let chunked = message.content.split(' ');
    let hero = heroes.find(h => h.startsWith(chunked[2]));
    if (hero) {
      var image = `${pixel}/${hero}.png`;
      message.channel.send({ files: [ image ] })
        .then(() => message.delete());
    } else {
      message.delete();
      return console.log(symbols.error, ` [${dateFormat()}] Could not find pixel art of Overwatch hero: '${chunked[2]}'. (Command called was: "${message.content}")`);
    }
  }
};
