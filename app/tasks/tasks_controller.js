'use strict';

app.controller('TasksController', function ($scope, Data, TasksManager) {
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

    $scope.tasks = Data.fetch('Tasks') || [];
});
