angular.module('codepot-todo', [])
  .controller('TodoCtrl', function TodoCtrl($scope, $http) {
    $http.get('api/todos').then(function(result) {
      $scope.todos = result.data;
    });

    $scope.addTodo = function addTodo() {
      var newTodo = {
        title: $scope.newTodo,
        completed: false
      };

      $http.post('/api/todos', newTodo).then(function(result) {
        $scope.todos.push(result.data);
        $scope.newTodo = '';
      });
    };

    $scope.removeTodo = function removeTodo(todo) {
      $http.delete('/api/todos/' + todo._id).then(function() {
        $scope.todos.splice($scope.todos.indexOf(todo), 1)
      });
    }
  });