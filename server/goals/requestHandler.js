var Goal = require('./goalModel.js');

module.exports = {
  get: function(req, res, next) {
    Goal.find({}, (err, goals) => err ? console.error(err) : res.json(goals));
  },

  add: function(req, res, next) {
    Goal.create(req.body, (err, goal) => err ? console.error(err) : res.json(goal));
  }
};
