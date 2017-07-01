var app = require('./app');
//var routes = require('./api/routes/rootResourcesRoutes');

//var app = express();
var port = process.env.port ||3000;

//routes1(app);
var server = app.listen(port,function(){
    console.log('Server started on port :',server.address().port);
})
