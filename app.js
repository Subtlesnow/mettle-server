//dependencies
const path = require('path'),
    express = require('express');

//methods
const app = express();

//routes
const routes = require('./routes/index');

//routing
app.use('/', routes);

module.exports = app;
