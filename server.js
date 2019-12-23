var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 7860
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');


// Use of middleware
app.use(morgan('dev')); // get formatted requests on console
app.use(bodyParser.json()); // Use of body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

// connect to Mongo using mongoose 5.7.14
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/davidacosta', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("Successfully Connected to MongoDB");
});

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//Server connection
app.listen(port, function () {
	console.log("Server is up on: " + port);
});
