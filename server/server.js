var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var goalsController = require('./goals/goalsController.js');

var app = express();

mongoose.connect('mongodb://localhost/goaltender');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../../client'));

app.get('/goals', goalsController.get);
app.get('/goals', goalsController.add);

app.listen(3000);

module.exports = app;
