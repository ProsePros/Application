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

//replace 'get' with 'post' later. 'get' was used to test without using postman
//route to add a new sentence to the sentences table
app.get('/addsentence', function(req, res){
	// var text = req.body;
	var test = 'Lost all my hair and all my game';
	var queryString = `INSERT INTO sentences (original) VALUES(?)`;

	connection.query(queryString, [test], function(err, data){
		if (err) throw err;
		console.log(data.insertId);
		var sentenceID = data.insertId;
	  var tableName = 'sentence'+sentenceID;

		res.send('success');

		var queryString2 = `CREATE TABLE ${tableName} (id int(11) AUTO_INCREMENT, revision varchar (2048) NOT NULL, upvotes int(11) DEFAULT 0, downvotes int(11) DEFAULT 0, PRIMARY KEY (id))`;

	  connection.query(queryString2, function(err, data){
	  	if (err) throw err;
	  	console.log(queryString2);
	  	console.log(sentenceID);
	  	res.status(201);
	  });
	});
});

//replace 'get' with 'post' later
//route to add a revised version of a sentence to an existing sentence

app.get('/addrevision/:id', function(req, res){
	var sentenceID = 'sentence' + req.params.id;
	// var testID = 'sentence1';
	var text = req.body;
	var sampleText = 'No hair. Lonely nights.';
	var queryString = `INSERT INTO ${sentenceID} (revision) VALUES (?)`;
	connection.query(queryString, [sampleText], function(err, data){
		// res.status(201);
		if (err) throw err;
		res.send('success!');
		console.log(data);
	});

	var queryString2 = `UPDATE sentences SET revised = true WHERE id=${req.params.id}`;
	connection.query(queryString2, function(err, data){
		if (err) throw err;
		res.send('alright alright alright');
	});
});

//upvote a particular revision of a sentence
app.get('/upvote/:sentenceID/:revisionID', function(req, res){
	var sentenceID = req.params.sentenceID;
	var revisionID = req.params.revisionID;
	var queryString = `UPDATE ${sentenceID} SET upvotes = upvotes + 1 WHERE id = ${revisionID}`;
	connection.query(queryString, [sentenceID], function(err, data){
		if (err) throw err;
		res.send('success');
	});
});





//External routing files
//================================================
// require('./api/api-routes.js')(app);
// require('./api/admin-routes.js')(app);
// require('./api/login-register-routes.js')(app);
require('./api/static-file-routes.js')(app);




//Sample code from previous apps
// function updateUserTable(userID, photoID, url){
// 		var queryString = `INSERT INTO ` + userID + ` (id, url) VALUES (?, ?)`;
// 		connection.query(queryString, [photoID, url], function(err, data){
// 			if (err) throw err;
// 			console.log(data);
// 		});
// 	}

// connection.query("INSERT INTO products SET ?", {
//     flavor: "Rocky Road",
//     price: 3.00,
//     quantity: 50
// }, function(err, res) {});

// connection.query("UPDATE products SET ? WHERE ?", [{
//     quantity: 100
// }, {
//     flavor: "Rocky Road"
// }], function(err, res) {});

// connection.query("DELETE FROM products WHERE ?", {
//     flavor: "strawberry"
// }, function(err, res) {});

// connection.query('SELECT * FROM products', function(err, res) {
//     if (err) throw err;
//     console.log(res);
// })