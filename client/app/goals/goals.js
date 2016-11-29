angular.module('goaltender.goals', [])

.controller('GoalsController', function($scope, Goals) {
  $scope.newGoal = {};
  $scope.data = {};


  const setGoals = function () {
    Goals.get()
      .then(function (goals) {
        $scope.data.goals = goals;
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  setGoals();
});
