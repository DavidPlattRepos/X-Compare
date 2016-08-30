angular.module('xcompare.services', []) 	

.factory('Products', function($http) {
  var leaderboard = function() {	
		return $http({
		    url: "http://localhost:8000/products/rankings",
		    method: "GET"
			}).then(function(resp) {
				return resp;
			});
	};

	var getRandomMatch = function(voted) {	
		return $http({
		    url: "http://localhost:8000/matchups/getRandomMatchup",
		    method: "POST",
		    data: {vote: voted}
			}).then(function(resp) {
				return resp;
			});
	};

	var addOne = function(prod) {	
		return $http({
		    url: "http://localhost:8000/products/upload",
		    method: "POST",
		    data: prod
			}).then(function(resp) {
				return resp;
			});
	};

	return {
		leaderboard: leaderboard,
		getRandomMatch: getRandomMatch,
		addOne: addOne
	}

});

