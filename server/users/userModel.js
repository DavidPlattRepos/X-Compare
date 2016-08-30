var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('User', UserSchema);

