NodeJS lets you easily encapsulate and share code as modules. In this exercise we will create our own module!

Create a string repeat module that has a repeat function and use it to say hello world twice!
The repeat function takes in a string then return that repeated 2 times. ("Hello World!" -> "Hello World!Hello World!")
Import the module and use it in your web server.

-----------------------------

## HINTS

1.To create a module: make a new js file and add following code. It gives you a module with an empty repeat function.
```js
module.exports = {
    repeat: function() {},
}
```
2.To import that module
```js
var module = require("path to the module file...");
```
