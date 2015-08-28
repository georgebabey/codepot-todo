var Todo = require('../models/todo-model');

var TodoCtrl = {
  create: function create(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(err, todo) {
      if (err) {
        res.status(500).json({ error: err});
      }
      else {
        res.status(201).json(todo);
      }
    });
  },

  get: function get(req, res) {
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
  },

  getAll: function get(req, res) {
    Todo.find({}, function(err, todo) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(todo);
      }
    });
  },


  del: function del(req, res) {
    Todo.findOneAndRemove({_id: req.params.id}, function(err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.sendStatus(204);
      }
    });
  },

  update: function update(req, res) {
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, todo) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(todo);
      }
    });
  }
};

module.exports = TodoCtrl;