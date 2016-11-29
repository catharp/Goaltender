angular.module('goaltender.controller', [])

.controller('GoalsController', function($scope, $location, Goals, moment) {
  $scope.newGoal = {};
  $scope.goals = [];

  console.log(moment().fromNow());

  var setGoals = function () {
    Goals.get()
      .then(function (goals) {
        $scope.goals = goals;
      });
  };

  $scope.addGoal = function () {
    $scope.newGoal.deadline = Date.now() + $scope.newGoal.deadline * 24 * 60 * 60 * 1000;
    Goals.add($scope.newGoal)
      .then(function() {
        $location.path('/');
      });
  };

  setGoals();
});
