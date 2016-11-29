angular.module('goaltender', ['goaltender.services', 'goaltender.goals', 'ngRoute'])
.config(function ($routeProvider) {
  console.log('in config...');

  $routeProvider
    .when('/goals', {
      templateUrl: 'app/goals/goals.html',
      controller: 'GoalsController'
    })
    .otherwise({
      redirectTo: '/goals'
    });
});
