Apply static middleware to serve `index.html` file without any routes.

Your solution must listen on the port number supplied by `process.argv[2]`.

The `index.html` file is provided and usable via the path supplied by
`process.argv[3]`. However, you can use your own file with this content:

```html
<html>
    <head>
        <title>Codepot 2015</title>
    </head>
    <body>
        <h1>Welcome to Codepot 2015</h1>
    </body>
</html>
```

-----------------------------

## HINTS

This is how you can call static middleware:

```js
app.use(express.static(path.join(__dirname, 'public')));
```

For this exercise {appname} will pass you the path:

```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
```