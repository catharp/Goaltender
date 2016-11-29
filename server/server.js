var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var goalsController = require('./goals/goalsController.js');

var app = express();

mongoose.connect('mongodb://localhost/goaltender');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/goals', goalsController.get);
app.get('/goals', goalsController.add);

const port = 3000
app.listen(port);
console.log('put it in my', port);

module.exports = app;
