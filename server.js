
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
  	mongoose = require('mongoose'),
  	Task = require('./api/models/todoListModels'),
  	bodyParser = require('body-parser');

  	mongoose.Promise = global.Promise;
  	var dbURI = 'mongodb://localhost/Tododb';
  	mongoose.connect(dbURI);
  	// CONNECTION EVENTS
	// When successfully connected
	mongoose.connection.on('connected', function () {  
	  console.log('Mongoose default connection open to ' + dbURI);
	}); 					
	// If the connection throws an error
	mongoose.connection.on('error',function (err) {  
	  console.log('Mongoose default connection error: ' + err);
	}); 

  	app.use(bodyParser.urlencoded({ extended: true }));
  	app.use(bodyParser.json());

  	var routes = require('./api/routes/todoListRoutes');
	routes(app);

	app.use(function(req, res) {
	  res.status(404).send({status: "404" ,url: req.originalUrl + ' not found'})
	});




///////////////////////////////////////
app.listen(port,function(){
	console.log('API server started on port : ' + port);
});

