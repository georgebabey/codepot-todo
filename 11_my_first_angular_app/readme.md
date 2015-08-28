Using the previous solution, modify the index.html to serve a page that:
 - includes the angular.js script
 - bootstraps angular to the page using ng-app
 - has a textbox input
 - has a h2 element which displays 'Hello ' + the input from the textbox

-----------------------------

## HINTS

You can load angularjs from a cdn (https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js) -or- use bower to install it locally

By using [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel) on an input element you can 2-way databind parts of your view together.

Angular allows templating inside your html, you can display the value of ```name``` using ```{{name}}``` directly in the html
