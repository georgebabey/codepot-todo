angular.module('codepot-todo', [])
  .controller('TodoCtrl', function TodoCtrl($scope, $interval) {
    $scope.currentTime = Date.now();

    $interval(function() {
      $scope.currentTime = Date.now();
    }, 1000);
  });