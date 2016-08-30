var mongoose = require('mongoose');
// var Product = require('../products/productModel.js');

var MatchupSchema = new mongoose.Schema({
	product1: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}, 
	product2: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
	votes1: Number,
	votes2: Number,
	leader: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'} 
});

module.exports = mongoose.model('Matchup', MatchupSchema);