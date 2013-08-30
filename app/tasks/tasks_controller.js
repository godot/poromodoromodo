'use strict';

app.controller('TasksController', function ($scope, Data, TasksManager) {
    $scope.tasks = Data.fetch('Tasks') || [];
    $scope.task = { length : 1 };
    $scope.add = function() {
        $scope.tasks.push( angular.copy($scope.task) );
    };

    $scope.$on('tasks:save', function() {
        console.log('save');
        Data.sync('Tasks', $scope.tasks);
    });

    $scope.$on('tasks:load', function() {
        console.log('load');
        $scope.tasks = Data.fetch('Tasks');
    });
    
    $scope.start = function(task) {
      console.log('task: ', task)
      $scope.$emit('task:start', task)
    }
});
