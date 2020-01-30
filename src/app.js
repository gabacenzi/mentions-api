const express = require('express');

//App
const app = express;

//Load routes
const indexRoutes = require('./routes/index-routes');
app.request('/',indexRoutes);

module.exports = app;