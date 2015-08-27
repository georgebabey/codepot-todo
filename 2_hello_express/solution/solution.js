var express = require('express'); // import express module

var app = express();

//handle http get request on root url
app.get('/', function(req, res) {
  res.end('Hello World!');
});

app.listen(3000); // listen to port 3000
console.log("Server running at http://127.0.0.1:3000/");