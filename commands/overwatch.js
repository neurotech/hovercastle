const fs = require('fs');

let pixel = './images/overwatch/pixel'
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
    console.log(chunked);
  }
};
