var express = require('express'); // import express module
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codepot');

// model
var Todo = mongoose.model('Todo', {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
  });

var app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log('[' + new Date().toUTCString() + ']' + req.method + ": " + req.url + " body: " + JSON.stringify(req.body));
  next();
});

app.get('/api/todos/:id', function(req, res) {
  if (!req.params.id) {
    res.sendStatus(404);
  }

  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(todo);
    }
  });
});

app.get('/api/todos', function(req, res) {
  Todo.find({}, function(err, todo) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(todo);
    }
  });
});

app.delete('/api/todos/:id', function(req, res) {
  Todo.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.post('/api/todos', function(req, res) {
  var todo = new Todo(req.body);
  todo.save(function(err, todo) {
    if (err) {
      res.status(500).json({error: err});
    }
    else {
      res.status(201).json(todo);
    }
  });
});

app.put('/api/todos/:id', function(req, res) {
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, todo) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(todo);
    }
  });
});

app.listen(3000); // listen to port 3000
console.log("Server running at http://127.0.0.1:3000/");