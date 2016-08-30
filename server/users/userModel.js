var mongoose = require('mongoose');
var Product = require('../productModel.js')

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('Product', ProductSchema);

// db.users.insert()