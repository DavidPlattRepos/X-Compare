var Q = require('q');
var Product = require('./productModel.js');
var Matchup = require('../matchups/matchupModel.js')
var createProduct = Q.nbind(Product.create, Product);
var createMatchup = Q.nbind(Matchup.create, Matchup);


module.exports = {
  calculatePercentages: function() {
    Product.find({}).exec().then(function(allProds) {
      Matchup.find({}).exec().then(function(allmatches) {
        allProds.forEach(function(prod) {
          var totalCount = 0;
          var winCount = 0;
          
          allmatches.forEach(function(match) {
            if (prod.id === match.product1 && (!((match.votes1 === 0) && (match.votes2 === 0)))) {
                totalCount+=1;
                if (match.votes1 > match.votes2) {
                  winCount+=1;
                }
            } else if (prod._id === match.product2 && (!((match.votes1 === 0) && (match.votes2 === 0)))) {
                totalCount+=1;
                if (match.votes2 > match.votes1) {
                  winCount+=1;
                }
            }
          })

          var winP = winCount/totalCount;
          return Product.update({_id: prod.id}, { $set: { winPercentage: winP} }).exec();
        })
      })  
    })  
  },

  allProducts: function (req, res, next) {
    exports.calculatePercentages().then(function() {
      res.json('nothing');
    })
    // exports.calculatePercentages().then(function() {
    //   Product.find({}).sort({winPercentage: -1}).exec()
    //     .then(function (products) {
    //       res.json(products);
    //     })
    //   })  
  },

  newProduct: function(req, res, next) {
  	var newProd = new Product({
  	  title: req.body.title,
      link: req.body.link,
  	  src: req.body.src,
  	  description: req.body.description,
  	  winPercentage: 0
  	})

    Product.find({}).exec()
      .then(function(all) {
        newProd.save()
          .then(function (createdProd) {
            if (all.length != 0) {
              all.forEach(function(elem, idx) {
                var newMatch = new Matchup({
                  product1: createdProd._id,
                  product2: elem._id,
                  votes1: 0,
                  votes2: 0,
                  leader: createdProd._id
                })
                newMatch.save()
                  .then(function() {
                    if (idx === all.length-1) {
                      res.json(createdProd);
                    }
                  });
              })
            } else {
              res.json(createdProd);
            }    
          })
        })  
  }

}

