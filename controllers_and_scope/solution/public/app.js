angular.module('codepot-todo', [])
  .controller('TodoCtrl', function TodoCtrl($scope) {
    $scope.currentTime = Date.now();
  });