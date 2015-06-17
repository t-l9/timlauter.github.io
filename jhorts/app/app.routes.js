angular.module('app.routes', ['ngRoute'])
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'app/views/main.html'
        })
		.otherwise({
			redirectTo: '/'
		});

    // $locationProvider.html5Mode({enabled: true, required: true });
}]);
