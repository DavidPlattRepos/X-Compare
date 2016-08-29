var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var products = require('./products/productsController');

var app = express();
mongoose.connect('mongodb://localhost/xcompare');

app.use(body-parser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '../../client'));

app.get('/matchups', products.generate)
app.post('/products', products.create)

app.listen(8000);

