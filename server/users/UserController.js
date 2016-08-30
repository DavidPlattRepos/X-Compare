var Q = require('q');
var User = require('./userModel.js');

module.exports = {
  newUser: function(req, res, next) {
  	var newUser = {
  	  username: req.body.username,
  	  password: req.body.password
  	}
  }
}