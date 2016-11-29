angular.module('goaltender.services', [])

.factory('Goals', function($http) {
  var get = function () {
    return $http({
      method: 'GET',
      url: '/api/goals'
    })
    .then(function(res) {
      return res.data;
    });
  };

  var add = function (goal) {
    return $http({
      method: 'POST',
      url: 'api/goals',
      data: goal
    });
  };

  return {
    get: get,
    add: add
  };
})
