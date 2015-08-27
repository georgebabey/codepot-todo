Create a form to post a new TODO to the API and a button for each TODO to delete it

-----------------------------

## HINTS

The same ```$http``` service can be used to ```post``` and ```delete``` resources as well

You can bind methods from the controllers scope to the view as well! Try doing this with [```ng-click```](https://docs.angularjs.org/api/ng/directive/ngClick) and [```ng-submit```](https://docs.angularjs.org/api/ng/directive/ngSubmit)

Don't forget to add and remove the TODO from the controller's array once the API methods are successful (think ```.then()```)