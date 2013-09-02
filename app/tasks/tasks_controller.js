'use strict';

app.controller('TasksController', function ($scope, Data) {
    var resetTask = function() {
        $scope.task = { length : 1, done: false };
    };

    $scope.init = function() {
        $scope.tasks = Data.fetch('Tasks');
        global.WindowManager.MainWindow.assign(gui.Window.get());
        resetTask();
    };

    $scope.add = function(task) {
        var _task = {};

        _task.title  = task.title;
        _task.length = task.length;
        _task.id     = (new Date().getTime());

        $scope.tasks.push( angular.copy(_task) );
        resetTask();
    };

    $scope.$on('tasks:save', function() {
        Data.save('Tasks', $scope.tasks);
    });

    $scope.$on('tasks:load', function() {
        $scope.tasks = Data.fetch('Tasks');
    });

    $scope.edit = function(task) {
        task.edited = !task.edited;
    };

    $scope.finish_edit = function(task,$event) {
        task.edited = ($event.keyCode == 13);
    };

    $scope.start = function(task) {
        $scope.$emit('task:start', task);
    };
});
