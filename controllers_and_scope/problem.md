The previous exercise used Angular's two-way data-binding without having to declare a controller because Angular automatically
created a controller and added the name to the controller's scope when the text input changed.

In this exercise we will create a new controller (```TodoCtrl```) so that we can display the client's time of day when the page was loaded.

Be sure to include the controller ```ng-controller="TodoCtrl"`` on an element on the page so that it will be loaded
-----------------------------

## HINTS

New controllers must be declared on a module by chaining their declaration to the module object. For this exercise we can create a new controller on the codepot-todo module we previously defined.

You can use ```Date.now()``` to get the current date and use the Angular [date filter](https://docs.angularjs.org/api/ng/filter/date) to pretty format it

Angular uses dependency injection to pass necessary services, such as the controllers $scope:
```
  .controller('TodoCtrl', function TodoCtrl($scope) {
    ...
   });
```