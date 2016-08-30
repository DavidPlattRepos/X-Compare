var Q = require('q');
var Product = require('../productModel.js');
var Matchup = require('../matchupModel.js');

var createMatchup = Q.nbind(Matchup.create, Matchup);

module.exports = {
  getRandomMatchup: function(req,res,next) {
  	Matchup.find({}).exec()
  		.then(function(data) {
  			res.json(data[Math.floor(Math.random() * data.length)]);	
  		})
  		.fail(function (error) {
        next(error);
      });
  },

  addMatchup: function(req,res,next) {
  
  }

  generateMatchup: function(req,res,next) {
  	Product.find({}).exec()
  		.then(function(data) {
  			Matchup.find({}).exec()
  				.then(function(data2) {
  					// while (bool === false) {
  						var prod1 = data[Math.floor(Math.random() * data.length)];
  						var prod2 = data[Math.floor(Math.random() * data.length)];
  						// data2.forEach(function(matchup) {
  						// 	if (!((matchup.product1.title === product1.title) && (matchup.product2.title === product2.title))) {
  						// 		bool = true;
							var newMatch = {
							  product1: product1.ObjectId,
							  product2: product2.ObjectId,
							  leader: product1		
  						}
  						CreateMatchup(newMatch)
					      .then(function(createdMatchup) {
					        res.json(createdMatchup);
					      })
					      .fail(function(error) {
					        next(error);
					      })
  					}	
  				})	
  		})
  }

}