Create your first node web server!

-----------------------------

## HINTS

1.To create a HTTP server we need the HTTP library
```js
var http = require('http');
```
2.To create a HTTP server that listens to port 3000 with a callback function
```js
http.createServer(function(request, response){}).listen(3000);
```
3.To add content to response
```js
response.write("contents...");
```
4.To send the content of the response to the client
```js
response.end();
```