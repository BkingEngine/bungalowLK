var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routers/index');
var resources = require('./routers/resource');

var app = express();

console.log('////////////////////////// '+path.join(__dirname,'views'))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',index);
app.use('/api', resources); //This is our route middleware

module.exports = app;