//Imported modules
//============================================================
//npm server package
var express = require('express');
//npm package used for 
var bodyParser = require('body-parser');
//npm package to handle file pathways
var path = require('path');
//module to establish mysql connection with Jaws DB
var connection = require('./config/connection.js');
//npm module 'dot-env'; deal with sensitive info
require('dotenv').config();

//Run express app
//================================================
var app = express();
var PORT = process.env.PORT || 3000;
//App listener
app.listen(PORT, function(){
	console.log('Listening on port: ' + PORT);
});

//Express middleware for parsing info for http POST requests
//================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//establish connection to mysql/jawsdb
connection.connect(function(err){
	if (err){
		console.error(err.stack);
	}
	console.log('connected as ID ' + connection.threadId);
});

app.get('/', function(req, res){
	res.send('smile! you are alive!');
});

app.get('/sentences', function(req, res){
	var queryString = `SELECT * FROM sentences`;
	var result = '';
	connection.query(queryString, function(err, data){
		res.json(data);
		res.status(201).end();
	});
});

app.get('/addsentence', function(req, res){
	// var text = req.body;
	var test = 'puppies day!';
	var queryString = `INSERT INTO sentences (original) VALUES(?)`;

	connection.query(queryString, [test], function(err, data){
		if (err) throw err;
		console.log(data.insertId);
		var sentenceID = data.insertId;
		res.send('success');

		var queryString2 = `CREATE TABLE ? (
			id int(11) AUTO_INCREMENT,
	    revision varchar (2048) NOT NULL,
	    upvotes int(11) DEFAULT 0,
	    downvotes int(11) DEFAULT 0,
	    PRIMARY KEY (id))`;

	  var tableName = 'sentence'+sentenceID;

	  connection.query(queryString2, [tableName], function(err, data){
	  	if (err) throw err;
	  	console.log(queryString2);
	  	console.log(sentenceID);
	  	res.status(201);
	  });
	});
});

// function createSentenceTable(id){
// 	var queryString = `CREATE TABLE ? (
// 	id int(11) NOT NULL AUTO_INCREMENT,
//     revision varchar (2048) NOT NULL,
//     upvotes int(11) DEFAULT 0,
//     downvotes int(11) DEFAULT 0,
//     PRIMARY KEY (id))`;

// 	connection.query(queryString, [id], function(err, data){
// 				res.status(201);
// 			});	
// }

function updateUserTable(userID, photoID, url){
		var queryString = `INSERT INTO ` + userID + ` (id, url) VALUES (?, ?)`;
		connection.query(queryString, [photoID, url], function(err, data){
			if (err) throw err;
			console.log(data);
			res.status(201);
		});
	}


//External routing files
//================================================
// require('./api/api-routes.js')(app);
// require('./api/admin-routes.js')(app);
// require('./api/login-register-routes.js')(app);
require('./api/static-file-routes.js')(app);

