Based on the Hello World Express, create 5 API endpoints for TODO list operations:

1.  get a TODO by id
2.  get all TODOs
3.  delete a TODO by id
4.  create a TODO
5.  update a TODO

We do not need to do implement the callback functions. For now, we just need make the server to return different text based on different requests.

-----------------------------

## HINTS

To update a TODO by id we register a callback function to be called when there is a PUT request to localhost/api/todos/:id(localhost/api/todos/1).
```js
app.put('/api/todos/:id', function(req, res) {
  // need to be implemented.
});
```