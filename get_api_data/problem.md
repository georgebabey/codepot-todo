Modify the controller so that it GETs (```$http.get```) all of the Todos from the api and displays their titles in a ```ng-repeat``` on the html page

-----------------------------

## HINTS

The [```$http```](https://docs.angularjs.org/api/ng/service/$http) can be used to easily fetch resources. ```$http```, and most other angular services, make use of promises instead of callbacks. Be sure to update the $scope variables inside the ```.then()``` handler of the promise.

The [```ng-repeat```](https://docs.angularjs.org/api/ng/directive/ngRepeat) directive can be used to loop over an array of items and apply the nested html tags for each item in the list.