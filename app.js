(function() {
var app = angular.module('myApp', ['ngRoute']); 
	app.config(function($routeProvider) {
		$routeProvider.when('/puppy', {
			templateUrl: 'views/puppy.html'
		})
		.when('/dog', {
			templateUrl: 'views/dog.html',
		})
		.otherwise({
			template: 'Pupper or Doggo?'
		})
	});
})();