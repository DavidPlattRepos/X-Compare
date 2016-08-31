angular.module('xcompare.products', [])

.controller('ProductsController', function($scope, Products) {
  $scope.product1 = {};
  $scope.product2 = {};
  $scope.currentMatchup = {};

  $scope.newMatch = function(winner) {
    reqbody = {
      vote: winner,
      matchupid: $scope.currentMatchup._id
    }

    Products.getRandomMatch(reqbody).then(function(data) {
      $scope.product1 = data[0];
      $scope.product2 = data[1];
      $scope.currentMatchup = data[2];
    })
  }	

  $scope.refreshLeaderboard = function() {
    Products.leaderboard().then(function(data) {
      $scope.rankings=data;
    })
  }

  $scope.create = function() {
  	var newProd = {
  		title: $scope.search1,
      link: $scope.search2,
			src: $scope.search3,
			description: $scope.search4
		}
		
  	Products.addOne(newProd);
  }

  $scope.newMatch();
  $scope.refreshLeaderboard();

});