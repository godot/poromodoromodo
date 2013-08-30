var app = angular.module('app', ['ui.sortable']);

app.config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', { templateUrl: 'app/tasks/tasks.html', controller: 'TasksController' });
    $routeProvider.when('/timer', { templateUrl: 'app/timer/show.html', controller: 'TimerController' });
    $routeProvider.when('/setup', { templateUrl: 'app/settings/settings.html', controller: 'SetupController' });
    $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

function AppCtrl($scope, $location, Data, TasksWindow, TimerWindow) {
    'use strict';
    var gui = require('nw.gui');

    $scope.close = function() {
        $scope.save();
        window.close();
    };
    $scope.minimize = function() {
        TasksWindow.minimize();
    };

    $scope.save = function() {
        $scope.$broadcast('tasks:save');
    };

    $scope.load = function() {
        $scope.$broadcast('tasks:load');
    };

    $scope.$on('task:start', function(event, task) {
        Data.sync('currentTask', task);
        TimerWindow.show();
    });

    $scope.$on('task:closed', function(event, task) {
        TimerWindow.close();

        $scope.currentTask = Data.fetch('currentTask');
        console.log($scope.currentTask);
    });
};
