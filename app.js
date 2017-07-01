var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
var routes = require('./api/routes/rootResourcesRoutes');

var app = express();
routes(app);

module.exports = app;
