var express = require('express'); // import express module

var app = express();

app.get('/api/todos/:id', function(req, res) {
  res.end('got a TODO!');
});
app.get('/api/todos', function(req, res) {
  res.end('got a list of TODOs!');
});
app.delete('/api/todos/:id', function(req, res) {
  res.end('deleted a TODO!');
});
app.post('/api/todos', function(req, res) {
  res.end('created a TODO!');
});
app.put('/api/todos/:id', function(req, res) {
  res.end('updated a TODO!');
});

app.listen(3000); // listen to port 3000
console.log("Server running at http://127.0.0.1:3000/");