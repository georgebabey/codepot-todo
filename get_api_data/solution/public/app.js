angular.module('codepot-todo', [])
  .controller('TodoCtrl', function TodoCtrl($scope, $http) {
    $http.get('api/todos').then(function(result) {
      $scope.todos = result.data;
    });
  });