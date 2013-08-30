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

    $scope.save = function() {
        $scope.$broadcast('tasks:save');
    };
    $scope.load = function() {
        $scope.$broadcast('tasks:load');
    };
    
    $scope.$on('task:start', function(event, task) {
      console.log(task);
      var gui = require('nw.gui');
      var win = gui.Window.get();
      
      win.minimize();
      gui.Window.open('app/timer/timer.html');
    });
};

function SetupController($scope) {
  'use strict';
    $scope.options = {
        pomodoro: 25,
        break   : 5,
        long    : 5,
        top     : 4
    };
};
