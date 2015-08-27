Using the previous solution, modify the index.html to serve a page that:
 - includes the angular.js script
 - includes a basic app.js that creates an angular module `codepot-todo`
 - has a textbox input
 - has a h2 which displays 'Hello ' + the input from the textbox

-----------------------------

## HINTS

You can load angularjs from a cdn (https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js) -or- use bower to install it locally

To create an angular module you only need to declare the module with an empty array for required dependencies:
```javascript
angular.module('codepot-todo', []);
```