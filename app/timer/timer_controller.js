'use strict';

app.controller('TimerController', function ($scope, Data) {
    var labels = {
        break: { default: 'Stop', confirm: 'Sure?' }
    };

    $scope.init = function() {
        $scope.timeLeft = 60 * 25;
        $scope.timeString = $scope.setTimeString($scope.timeLeft);
        $scope.startTicker();
        $scope.task = global.WindowManager.TimerWindow.task;
        $scope.labels = { break: labels.break.default };
    };

    $scope.startTicker = function() {
        $scope.tickerInterval = setInterval(function() {
            $scope.decreaseTime();
        }, 1000);
    };

    $scope.setTimeString = function(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds % 60;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
    };

    $scope.decreaseTime = function() {
        $scope.timeLeft = $scope.timeLeft - 1;
        $scope.updateTimer();
    };

    $scope.breakTimer = function(confirmation) {
        if (!confirmation) {
            $scope.labels.break = labels.break.confirm;
            $scope.pendingConfirmation = true;
            setTimeout(function() {
                $scope.labels.break = labels.break.default;
                $scope.pendingConfirmation = false;
            }, 2000);
        }
        else {
            $scope.task.timeleft = $scope.timeLeft;
            clearInterval($scope.tickerInterval);

            $scope.$emit('task:closed', $scope.task);
        }
    };

    $scope.updateTimer = function() {
        $scope.timeString = $scope.setTimeString($scope.timeLeft);
        $scope.$apply();
    };
});
