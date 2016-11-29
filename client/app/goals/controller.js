angular.module('goaltender.controller', [])

.controller('GoalsController', function($scope, $location, Goals) {
  $scope.newGoal = {};
  $scope.goals = {};

  var setGoals = function () {
    console.log('getting goals...');
    Goals.get()
      .then(function (goals) {
        console.log('got goals...');
        $scope.goals = goals;
      });
  };

  $scope.addGoal = function () {
    console.log('adding goal...');
    Goals.add($scope.newGoal)
      .then(function() {
        $location.path('/');
      });
  };

  setGoals();
});
