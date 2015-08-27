Based on the Hello World Express, create 5 API endpoints for TODO list operations:
1. get a TODO by id
2. get all TODOs
3. delete a TODO by id
4. create a TODO
5. update a TODO

We do not need to implement the actually create/delete/get... For now, we just need make the server to return different text based on different requests.

-----------------------------

## HINTS

To update a TODO by id we do
```js
app.put('/api/todos/:id', function(req, res) {
  // need to be implemented.
});
```