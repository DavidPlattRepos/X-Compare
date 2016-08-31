var Q = require('q');
var Product = require('./productModel.js');
var Matchup = require('../matchups/matchupModel.js')
var createProduct = Q.nbind(Product.create, Product);
var createMatchup = Q.nbind(Matchup.create, Matchup);


module.exports = {
  calculatePercentages: function(req, res, next) {
    Product.find({}).exec().then(function(allProds) {
      Matchup.find({}).exec().then(function(allmatches) {
        allProds.forEach(function(prod, idx) {
          var totalCount = 0;
          var winCount = 0;
          allmatches.forEach(function(match) {
            if ((prod.id === match.product1.toString()) && (!((match.votes1 === 0) && (match.votes2 === 0)))) {
                totalCount+=1;
                if (match.votes1 > match.votes2) {
                  winCount+=1;
                }
            } else if ((prod.id === match.product2.toString()) && (!((match.votes1 === 0) && (match.votes2 === 0)))) {
                totalCount+=1;
                if (match.votes2 > match.votes1) {
                  winCount+=1;
                }
            }
          })

          if (totalCount === 0) {
            var winP = 0;
          } else {
            var winP = winCount/totalCount;
          }


          Product.update({_id: prod._id}, { $set: { winPercentage: winP} }).exec().then(function(aff) {
            if (idx === allProds.length-1) {
              Product.find({}).sort({winPercentage: -1}).exec().then(function(data) {
                res.json(data);
              });
            }
          })
        })
      })  
    })  
  },

  // allProducts: function (req, res, next) {
  //   module.exports.calculatePercentages().then(function(data) {
  //     console.log(data, 'HERE IT IS');
  //     // Product.find({}).sort({winPercentage: -1}).exec()
  //     //   .then(function (products) {
  //     //     res.json(products);
  //     //   })
  //     // })  
  //     res.json({k: 'k'});
  //   })
  // },

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

