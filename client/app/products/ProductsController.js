angular.module('xcompare.products', [])

.controller('ProductsController', function($scope, Products) {
  $scope.product1 = {};
  $scope.product2 = {};
  $scope.rankings = Products.leaderboard();

  $scope.newMatch = function(winner) {
    Products.getRandomMatch(winner).then(function(data) {
      $scope.product1 = data[0];
      $scope.product2 = data[1];
    })
  }	

  $scope.create = function() {
  	var newProd = {
  		title: search1,
      link: search2,
			src: search3,
			description: search4
		}
		
  	Products.addOne(newProd)
  }

});