angular.module('goaltender.controller', [])

.controller('GoalsController', function($scope, $location, Goals) {
  $scope.newGoal = {};
  $scope.goals = {};

  var setGoals = function () {
    Goals.get()
      .then(function (goals) {
        console.log('got goals...');
        $scope.goals = goals;
      });
  };

  $scope.addGoal = function () {
    Goals.add($scope.newGoal)
      .then(function() {
        $location.path('/');
      });
  };

  setGoals();
});
