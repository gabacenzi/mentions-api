//const { port } = require('./config');
//const dotenv = require('dotenv')
//dotenv.config({path:'./.env'});
const {resolve} = require('path')

require('dotenv').config({path: resolve(__dirname,"../process.env")})

const port = process.env.PORT;
console.log(`Your port is ${port}`); 

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');


//PORT //based on express-generator
function normalalizePort(val) {
  const port = parseInt(val,10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

console.log('porta' + port);
const portOk = normalalizePort(port);
app.set('port',portOk);

//error handler
function onError(error) {
  if (erro.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACESS':
      console.error(bind + ' requeries elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is alread in use');
      process.exit(1);
    default:
      throw error;
  }
}

//listener handler
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'Pipe ' + addr : 'Port ' + addr.port;
  debug('Listening on ' + bind);
}

//server
const server = http.createServer(app);
server.listen(port);
server.on('error',onError);
server.on('listening',onListening);
console.log(`API is alive on ${port}`);

