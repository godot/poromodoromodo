'use strict';

app.controller('TasksController', function ($scope, Data, TasksManager) {
    $scope.tasks = Data.fetch('Tasks');

    $scope.task = {
        length : 1,
        done: false
    };

    $scope.add = function() {
        var task = {
            title: $scope.task.title,
            length: $scope.task.length,
            id: (new Date().getTime())
        };

        $scope.tasks.push(task);
        $scope.task = null;
    };

    $scope.$on('tasks:save', function() {
        console.log('save');
        Data.save('Tasks', $scope.tasks);
    });

    $scope.$on('tasks:load', function() {
        console.log('load');
        $scope.tasks = Data.fetch('Tasks');
    });

    $scope.edit = function(task) {
        task.edited = !task.edited;
    };

    $scope.finish_edit = function(task,$event) {
        if ($event.keyCode == 13) {
            task.edited = false;
        }
    };

    $scope.start = function(task) {
      $scope.$emit('task:start', task);
    };
});
