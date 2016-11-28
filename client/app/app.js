angular.module('goaltender', [])
.config(function ($routeProvider) {
  $routeProvider
    .when('/links', {
      templateUrl: 'app/goals/goals.html',
      controller: 'GoalsController'
    })
    .otherwise({
      redirectTo: '/goals'
    });
});
