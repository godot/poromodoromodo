'use strict';

app.controller('TasksController', function ($scope, Data) {
    $scope.tasks = [];
    $scope.task = { length : 1 };
    console.log(Data)
    $scope.add = function() {
        $scope.tasks.push( angular.copy($scope.task));
    };
});
