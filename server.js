var app = require('./app'); //Require our app
var http = require('http');

var port = process.env.PORT || 3000
app.set('port',port );

// create http server
var server = http.createServer(app);
server.listen(port,function(){
	console.log('server started in port : '+port);
});