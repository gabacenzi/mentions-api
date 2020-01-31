const express = require('express');
const mongoose = require('mongoose');

//App
const app = express();

// Database
mongoose.connect('mongodb+srv://mentions:fDl4Bix8yBRdDGBu@cluster0-2vnxs.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose default connection is open');
});

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
      console.log(
      'Mongoose default connection is disconnected due to application termination'
      );
      process.exit(0);
  });
});

//Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/',indexRoutes);

module.exports = app;