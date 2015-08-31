# TODO

Let's finish up full API set: CREATE, UPDATE, GET, GET_ALL, DELETE
-----------------------------

## HINTS

How to get my URL param
```js
req.params.id
```

Some mongoose tips
```js
//find a todo by id
Todo.findById(id, function(err, todo) {
    // to be implemented
})

//find all todos
Todo.find({}, function(err, todo) {
    // to be implemented
})

//delete a todo by id
Todo.findOneAndRemove({_id: id}, function(err, todo) {
    // to be implemented
})

//update a todo by id
Todo.findOneAndUpdate({_id: id}, updateData, function(err, todo) {
    // to be implemented
})
```
