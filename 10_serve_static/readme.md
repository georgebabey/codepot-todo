Apply static middleware to serve `index.html` file from the `public` folder without any routes.

-----------------------------

## HINTS

Express has built in middleware for serving static data. This is how you can call static middleware:

```js
app.use(express.static(path.join(__dirname, 'public')));
```