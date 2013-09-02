var app = angular.module('app', ['ui.sortable']);

app.config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', { templateUrl: 'app/tasks/tasks.html' });
    $routeProvider.when('/timer', { templateUrl: 'app/timer/show.html' });
    $routeProvider.when('/setup', { templateUrl: 'app/settings/settings.html', controller: 'SetupController' });
    $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

function AppCtrl($scope, $location, Data) {
    'use strict';

    $scope.close = function() {
        $scope.save();
        global.WindowManager.MainWindow.close();
    };
    $scope.minimize = function() {
        global.WindowManager.MainWindow.minimize();
    };

    $scope.save = function() {
        $scope.$broadcast('tasks:save');
    };

    $scope.load = function() {
        $scope.$broadcast('tasks:load');
    };

    $scope.$on('task:start', function(event, task) {
        global.WindowManager.TimerWindow.open({
          task: task
        }, function() {
          global.WindowManager.MainWindow.minimize();
        });
    });

    $scope.$on('task:closed', function(event, task) {
        global.WindowManager.TimerWindow.close();
        global.WindowManager.MainWindow.restore();
    });
};
