const dotenv = require('dotenv')
dotenv.config({path:'./.env'});
if (dotenv.error) {
  throw dotenv.error
}

console.log('config ' + dotenv.parsed);

module.exports = {
  port: process.env.PORT
};