var Q = require('q');
var Product = require('../products/productModel.js');
var Matchup = require('./matchupModel.js');

var createMatchup = Q.nbind(Matchup.create, Matchup);

module.exports = {
  getRandomMatchup: function(req,res,next) {

  	Matchup.find({}).exec()
  		.then(function(data) {
  			var vs = data[Math.floor(Math.random() * data.length)];	  
  			Product.findOne({_id: vs.product1}).exec().then(function(prod1) {
  				Product.findOne({_id: vs.product2}).exec().then(function(prod2) {
  					res.json([prod1, prod2]);
  				})
  			})

        if (req.body.vote === 1) {
          Matchup.update({_id: req.body.matchupid}, { $set: { votes1: req.body.voteCount} }).exec();
        } else {
        	Matchup.update({_id: req.body.matchupid}, { $set: { votes1: req.body.voteCount} }).exec();
        }
  		})
  }
}

  // calculateLeaders: function() {
  // 	Matchup.find({}).exec().then(function(data) {
  //     data.forEach(function(match) {
  //       if (match.votes1 > match.votes2) {
  //         Matchup.update({_id: match._id}, { $set: { leader: match.product1} }).exec()
  //       } else {
  //         Matchup.update({_id: match._id}, { $set: { leader: match.product2} }).exec();
  //       }
  //     })
  //   })
  // 	.fail(function (error) {
  //     next(error);
  //   });
 

  

  // addMatchup: function(req,res,next) {
  
  // }

  // generateMatchup: function(req,res,next) {
  // 	Product.find({}).exec()
  // 		.then(function(data) {
  // 			Matchup.find({}).exec()
  // 				.then(function(data2) {
  // 					while (bool === false) {
  // 						var prod1 = data[Math.floor(Math.random() * data.length)];
  // 						var prod2 = data[Math.floor(Math.random() * data.length)];
  // 						data2.forEach(function(matchup) {
  // 							if (!((matchup.product1.title === product1.title) && (matchup.product2.title === product2.title))) {
  // 								bool = true;
		// 					var newMatch = {
		// 					  product1: product1.ObjectId,
		// 					  product2: product2.ObjectId,
		// 					  leader: product1		
  // 						}
  // 						CreateMatchup(newMatch)
		// 			      .then(function(createdMatchup) {
		// 			        res.json(createdMatchup);
		// 			      })
		// 			      .fail(function(error) {
		// 			        next(error);
		// 			      })
  // 					}	
  // 				})	
  // 		})
  // }

