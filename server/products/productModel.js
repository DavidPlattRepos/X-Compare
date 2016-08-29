var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	title: String,
	src: String,
	description: String, 
	winPercentage: Number	
});

module.exports = mongoose.model('Product', ProductSchema);