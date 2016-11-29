var Goal = require('./goalModel.js');

module.exports = {
  get: function (req, res) {
    Goal.find({}, (err, goals) => err ? console.error(err) : res.json(goals));
  },

  add: function (req, res) {
    Goal.create(req.body, (err, goal) => err ? console.error(err) : res.json(goal));
  },

  progress: function (req, res) {
    Goal.findOneAndUpdate({_id: req.body._id}, {progress: req.body.progress}, (err, goal) => err ? console.error(err) : res.json(goal));
  },

  abandon: function (req, res) {
    Goal.find({_id: req.body._id}).remove((err, goal) => err ? console.error(err) : res.json(goal));
  }
};
