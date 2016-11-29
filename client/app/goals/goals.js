angular.module('goaltender.goals', [])

.controller('GoalsController', function($scope, Goals) {
  $scope.data = {};

  const initializeGoals = function () {
    Goals.getAll()
      .then(function (goals) {
        $scope.data.goals = goals;
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  initializeGoals();
});
