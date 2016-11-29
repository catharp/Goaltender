angular.module('goaltender.services', [])

.factory('Goals', function($http) {
  function get () {
    return $http({
      method: 'GET',
      url: '/goals'
    })
    .then(function (res) {
      return res.data;
    });
  };

  function add (goal) {
    return $http({
      method: 'POST',
      url: '/goals',
      data: goal
    });
  };

  function progress (goal) {
    return $http({
      method: 'POST',
      url: '/goals/progress',
      data: goal
    });
  };

  function abandon (goal) {
    return $http({
      method: 'POST',
      url: '/goals/abandon',
      data: goal
    });
  };

  return {
    get: get,
    add: add,
    progress: progress,
    abandon: abandon
  };
})
