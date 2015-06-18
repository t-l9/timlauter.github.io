angular.module('app.routes', ['ngRoute'])
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/templates/main.html'
        })
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
}]);
