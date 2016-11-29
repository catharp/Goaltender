angular.module('goaltender', ['goaltender.services', 'goaltender.controller', 'ngRoute', 'angularMoment'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/goals', {
      templateUrl: 'app/goals/goals.html',
      controller: 'GoalsController'
    })
    .otherwise({
      redirectTo: '/goals'
    });
});
