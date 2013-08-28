var app = angular.module('app', []);

app.config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', { templateUrl: 'tasks.html', controller: 'TasksController' });
    $routeProvider.when('/setup', { templateUrl: 'setup.html', controller: 'SetupController' });
    $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

function AppCtrl($scope) {
  'use strict';
    $scope.name = 'hello world from ng-web-kit-node-js';
    $scope.data = localStorage.x;


    $scope.store = function() {
      console.log($scope.key);
      localStorage.x = $scope.key;
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
