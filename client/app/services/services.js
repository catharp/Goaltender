angular.module('goaltender.services', [])

.factory('Goals', function($http) {
  var get = function () {
    return $http({
      method: 'GET',
      url: '/goals'
    })
    .then(function(res) {
      return res;
    });
  };

  var add = function (goal) {
    console.log('adding...');
    return $http({
      method: 'POST',
      url: '/goals',
      data: goal
    });
  };

  return {
    get: get,
    add: add
  };
})
