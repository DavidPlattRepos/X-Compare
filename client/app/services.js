angular.module('xcompare.services', []) 	

.factory('Products', function($http) {
  var getRankings = function() {	
		return $http({
		    url: "http://example.appspot.com/rest/app",
		    method: "POST",
		    data: {"foo":"bar"}
			}).then(function(resp) {
				return resp;
			});
	}

	return {
		getRankings: getRankings
	}

});