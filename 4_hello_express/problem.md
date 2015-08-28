Create an Express.js app that responds with "Hello World!" when somebody make a get request to `/`(the server root).

-----------------------------

## HINTS

create a package.json file and use 'npm install'
```
{
  "name": "codepot-todo",
  "version": "0.0.1",
  "dependencies": {
    "express": "^4.13.3"
  }
}
```

import express module
```js
var express = require('express');
```

create a app (server)
```js
var app = express();
```

handle http get request on root url
```js
app.get('/', function(req, res) {
// TODO: handle request
});
```

listen to port 3000
```js
app.listen(3000);
```