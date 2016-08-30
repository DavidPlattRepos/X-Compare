angular.module('xcompare.products', [])

.controller('ProductsController', function($scope, Products) {
  $scope.product1 = {};
  $scope.product2 = {};
  $scope.rankings = Products.leaderboard();

  $scope.newMatch = function(winner) {
    var arr = Products.randomMatch();	
    Products.vote(winner);
    $scope.product1 = arr[0];
    $scope.product2 = arr[1];
  }	

  $scope.create = function() {
  	var newProd = {
  		title: search1,
			src: search2,
			description: search3, 
			winPercentage: search4	
		}
		
  	Products.addOne(newProd)
  }

});