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
			templateUrl: 'app/products/create.html'
			controller: 'ProductController'
		})
		.when('/create', {
			templateUrl: 'app/products/leaderboards.html'
			controller: 'ProductController'
		})
})
.run(function ($rootScope, $location) {
	console.log('Up and running');
});
