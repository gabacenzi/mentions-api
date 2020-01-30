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

const port = normalalizePort(process.env.PORT || 3000);
app.set('port',port);
