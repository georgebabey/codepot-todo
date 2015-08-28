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