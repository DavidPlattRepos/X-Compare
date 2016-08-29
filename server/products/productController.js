var Q = require('q');
var Product = require('./productModel.js');

// var findProduct = Q.nbind(Link.findProduct, Product);
var createProduct = Q.nbind(Product.create, Product);
// var findAllProducts = Q.nbind(Product.find, Product);

module.exports = {
  allProducts: function (req, res, next) {
  	Product.find({}).sort({winPercentage: -1}).exec()
  		.then(function (products) {
  			res.json(products);
  		})
  		.catch(function(error) {
  			next(error);
  		})
  },

  newProduct: function(req, res, next) {
  	var newProd = {
  	  title: req.body.title,
  	  src: req.body.src,
  	  description: req.body.description,
  	  winPercentage: req.body.winPercentage	
  	}

  	return createProduct(newProd);
  }

}