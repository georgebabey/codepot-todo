Express allows you to declare middleware - pieces of code that can read or modify the request or response, and then pass thorugh
to the next piece of middleware. In this exercise we will use a provided middleware as well as create our own.

Use the bodyParser middleware and create your first middleware to log the incoming request!

-----------------------------

## HINTS

In your package.json add bodyParser
```js
"body-parser": "^1.13.3"
```

This is how to add bodyParser to parse JSON body and add to req.body
```js
var bodyParser = require('body-parser');
...
app.use(bodyParser.json());
```

This is how to add your middleware function
```js
app.use(function (req, res, next) {
  // to be implemented
  next();
});
```

Try what is in the req.method, req.url and req.body.
