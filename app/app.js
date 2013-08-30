var app = angular.module('app', ['ui.sortable']);

app.config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', { templateUrl: 'app/tasks/tasks.html', controller: 'TasksController' });
    $routeProvider.when('/timer', { templateUrl: 'app/timer/show.html', controller: 'TimerController' });
    $routeProvider.when('/setup', { templateUrl: 'app/settings/settings.html', controller: 'SetupController' });
    $routeProvider.otherwise({ redirectTo: '/tasks' });
}]);

function AppCtrl($scope, $location, Data) {
    'use strict';
    $scope.close = function() {
        $scope.save();
        window.close();
    };
    $scope.minimize = function() {
        $scope.save();
        var gui = require('nw.gui');
        var win = gui.Window.get();
        win.minimize();
    };

    $scope.save = function() {
        $scope.$broadcast('tasks:save');
    };
    $scope.load = function() {
        $scope.$broadcast('tasks:load');
    };

    $scope.$on('task:start', function(event, task) {
      Data.sync('currentTask', task);
      var gui = require('nw.gui');
      var win = gui.Window.get();

      win.minimize();
      gui.Window.open('file://' + window.location.pathname + '#/timer', {
        position: 'top',
        width: 390,
        height: 200,
        toolbar: true,
        frame: false,
        min_width: 390,
        min_height: 200,
        max_width: 390,
        max_height: 200,
        x: 1000,
        y: 100,
        resize: false
      });
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
