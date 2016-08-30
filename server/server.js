var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var products = require('./products/productController.js');
var matchups = require('./matchups/matchupController.js');  

var app = express();
mongoose.connect('mongodb://localhost/xcompare');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

app.get('/matchups/getRandomMatchup', matchups.getRandomMatchup);
app.get('/products/rankings', products.allProducts);
app.post('/products/upload', products.newProduct);

app.listen(8000);
console.log('server now listing');

module.exports = app;