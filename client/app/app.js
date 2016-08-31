angular.module('xcompare', [
	'xcompare.services',
	'xcompare.products',
	'ngRoute'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/homescreen.html'
		})
		.when('/create', {
			templateUrl: 'app/products/create.html',
			controller: 'ProductsController'
		})
		.when('/leaderboards', {
			templateUrl: 'app/products/leaderboards.html',
			controller: 'ProductsController'
		})
		.when('/matchups', {
			templateUrl: 'app/products/matchups.html',
			controller: 'ProductsController'
		})
})
.run(function ($rootScope, $location) {
	console.log('Up and running');
});
