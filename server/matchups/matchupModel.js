var mongoose = require('mongoose');
var Product = require('../productModel.js')

var MatchupSchema = new mongoose.Schema({
	product1: {type: Mongoose.Schema.Types.ObjectId, ref: 'Product'} 
	product2: {type: Mongoose.Schema.Types.ObjectId, ref: 'Product'} 
	leader: {type: Mongoose.Schema.Types.ObjectId, ref: 'Product'} 
});

module.exports = mongoose.model('Product', ProductSchema);