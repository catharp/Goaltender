var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  title: String,
  deadline: Date,
  progress: [{
    date: Date,
    log: String
  }]
});

module.exports = mongoose.model('Goal', GoalSchema);
