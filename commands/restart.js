const symbols = require('log-symbols');
const dateFormat = require('dateformat');

module.exports = () => {
  console.log(symbols.info, ` [${dateFormat()}] Hovercastle restarting...`);
  process.exit();
};
