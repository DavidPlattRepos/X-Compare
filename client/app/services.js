angular.module('xcompare.services', []) 	

.factory('Products', function($http, $location) {
  var leaderboard = function() {	
		return $http({
		    url: "http://localhost:8000/products/rankings",
		    method: "GET"
			}).then(function(resp) {
				return resp.data;
			});
	};

	var getRandomMatch = function(reqbody) {	
		console.log(reqbody);
		return $http({
		    url: "http://localhost:8000/matchups/getRandomMatchup",
		    method: "POST",
		    data: reqbody
			}).then(function(resp) {
				return resp.data;
			});
	};

	var addOne = function(prod) {	
		return $http({
		    url: "http://localhost:8000/products/upload",
		    method: "POST",
		    data: prod
			}).then(function(resp) {
				$location.path('');
				return resp.data;
			});
	};

	return {
		leaderboard: leaderboard,
		getRandomMatch: getRandomMatch,
		addOne: addOne
	}

});

