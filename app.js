var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routers/index');
var rootResources = require('./routers/rootresources');
var resources = require('./routers/resources');

var app = express();

// load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
//mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://localhost/bookingengine');
  //.then(() =>  console.log('db connection succesful'))
  //.catch((err) => console.error(err));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',index);
app.use('/api/rootresources', rootResources); //This is our route middleware
app.use('/api/resources', resources); //This is our route middleware

module.exports = app;
