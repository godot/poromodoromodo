var app = angular.module('app', ['ui.sortable']);

app.config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', { templateUrl: 'app/tasks/tasks.html', controller: 'TasksController' });
    $routeProvider.when('/setup', { templateUrl: 'app/settings/settings.html', controller: 'SetupController' });
    $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

function AppCtrl($scope) {
    'use strict';
    $scope.close = function() { window.close(); };
    $scope.minimize = function() {
        window = gui.Window.open('http://google.com');
    };
}

function TasksController($scope) {
  'use strict';
    $scope.tasks = [];
    $scope.task = { length : 1 };

    $scope.add = function() {
        $scope.tasks.push( angular.copy($scope.task));
    };
}


function SetupController($scope) {
  'use strict';
    $scope.options = {
        pomodoro: 25,
        break   : 5,
        long    : 5,
        top     : 4
    };
}
