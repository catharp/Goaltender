var Q = require('q');
var Goal = require('./goalModel.js');

var get = Q.nbind(Goal.find);
var add = Q.nbind(Goal.create);

moule.exports = {
  get: function(req, res, next) {
    get({})
      .then(function(goals) {
        res.json(goals);
      });
  },

  add: function(req, res, next) {
    add({goal: req.body.goal})
      .then(function(goal) {
        res.json(goal);
      });
  }
};
