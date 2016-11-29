angular.module('goaltender.controller', [])

.controller('GoalsController', function($scope, $location, Goals, moment) {
  function setGoals() {
    Goals.get()
      .then(function (goals) {
        $scope.goals = goals;
      });
  };

  setGoals();

  $scope.addProgress = function(goal) {
    goal.progress.push({
      date: Date.now(),
      log: goal.newProgress
    });
  };

  $scope.addGoal = function() {
    $scope.newGoal.deadline = Date.now() + $scope.newGoal.deadline * 24 * 60 * 60 * 1000;
    Goals.add($scope.newGoal)
      .then(function() {
        $location.path('/');
      });
  };

});
