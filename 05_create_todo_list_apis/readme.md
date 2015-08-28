Based on the Hello World Express, create 5 API endpoints for TODO list operations:

1.  get a TODO by id
2.  get all TODOs
3.  delete a TODO by id
4.  create a TODO
5.  update a TODO

For now do not worry about full implementation of the operations, just setup the routes and send a response that returns a different word based on the different requests.

-----------------------------

## HINTS

To update a TODO by id we register a callback function to be called when there is a PUT request to localhost/api/todos/:id. ( example: localhost/api/todos/1 )
```js
app.put('/api/todos/:id', function(req, res) {
  // need to be implemented.
});
```
