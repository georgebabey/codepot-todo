Create your first node web server!

-----------------------------

## HINTS

1. To create a HTTP server we need the HTTP library
    ```js
    var http = require('http');
    ```
2. To create a HTTP server that listens to port 8000
    ```js
    http.createServer(function(request,response){}).listen(8000);
    ```