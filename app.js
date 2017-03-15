require('dotenv').config();

//dependencies
const path = require('path'),
    express = require('express');

//routes
const routes = require('./routes/index');

//methods
const app = express();

app.use('/', routes);

module.exports = app;
