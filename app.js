//dependencies
const express = require('express'),
    body_parser = require('body-parser');

//methods
const app = express();

//routes
const routes = require('./routes/index');

//middleware
app.use(body_parser.json());

//routing
app.use('/', routes);

module.exports = app;
