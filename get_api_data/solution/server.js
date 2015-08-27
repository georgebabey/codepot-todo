var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/codepot');

var app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

// Serve up all files in /public as static
app.use(express.static(__dirname + '/public'));

// load all route files. pass in express, used to create an instance of router along with
// optional basicAuth middleware which each route 'app' can chose to use or not
fs.readdirSync(__dirname + '/app/routes').forEach(function (file) {
  var newRouterInstance = express.Router();
  var routeBasePath = require('./app/routes/' + file)(newRouterInstance);
  app.use('/api' + routeBasePath, newRouterInstance);
});


app.listen(3000);