Use mongoose to connect to mongodb and save a todo!
When new todo saved, return 201 and the todo object.
When save failed, return 500 and the error object.

-----------------------------

## HINTS

In your package.json add mongoose
```js
"mongoose": "^4.1.3"
```

This is how to use mongoose to connect to mongodb
```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codepot');
```

This is how to use mongoose to define a todo model
```js
var Todo = mongoose.model('Todo', {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
  });
```

This is how to create a model object and save
```js
var todo = new Todo({title: "test"});
todo.save(function(error, todo){}); // save() takes in a callback function to be executed after object saved/failed to save.
```

This is how to return a JSON encoded response with http status code
```js
res.status(200).json({});
```