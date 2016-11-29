var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var requestHandler = require('./goals/requestHandler.js');

var app = express();

mongoose.connect('mongodb://localhost/goaltender');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/goals', requestHandler.get);
app.post('/goals', requestHandler.add);
app.post('/goals/progress', requestHandler.progress);
app.post('/goals/abandon', requestHandler.abandon);

const port = 3000
app.listen(port);
console.log('put it in my', port);

module.exports = app;
