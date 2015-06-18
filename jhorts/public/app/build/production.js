angular.module('forecastCtrl', ['weatherService'])
.controller('forecastController', ["$http", "$scope", "Weather", function($http, $scope, Weather) {

    /************************************************
         gets executed onload and on submission
    /************************************************/
    $scope.initialize = function(defaultLocation, e) {

        var preloader = document.getElementById('preloader');
        var degree = document.getElementById('temp');

        Weather.init(defaultLocation)
            .success(function(data) {

                // remove preloader
                preloader.style.display = 'none';

                if (data.query.results === null) {
                    $scope.error = 'Bummer, we don\'t know where that is. Sounds great though.';
                    $scope.location = undefined;
                    $scope.temp = undefined;
                    $scope.description = undefined;
                    $scope.message = undefined;
                    degree.style.visibility = 'hidden';

                } else {
                    var city = data.query.results.channel.location.city;
                    var region = ', ' + data.query.results.channel.location.region;
                    $scope.location = city + region;
                    $scope.temp = data.query.results.channel.item.condition.temp;
                    $scope.description = data.query.results.channel.item.condition.text;
                    $scope.error = undefined;
                    message($scope.temp);
                    degree.style.visibility = 'visible';
                }

            })
            .error(function(data) {
                preloader.style.display = 'none';
                $scope.error = 'Ahh shoot, we are encountering some technical difficulties.';
            });

        if (e) {
            e.preventDefault();
        }
    };

    function displayDefault(location) {
        $scope.initialize(location);
    }

    function message(temp) {
        parseInt(temp);
        if (temp <= 50) { $scope.message = 'Save\'em for another day.'; }
        if (temp > 50 && temp <= 60) { $scope.message = 'It\'s still a bit cold'; }
        if (temp > 60 && temp <= 70) { $scope.message = 'It needs to be warmer.'; }
        if (temp > 70 && temp <= 80) { $scope.message = 'It\'s warm, you know what to do.'; }
        if (temp > 80 && temp <= 90) { $scope.message = 'It\'s perfect. Get those jhorts.'; }
        if (temp > 90 && temp <= 100) { $scope.message = 'Jhorts? It\'s bathing suit weather.'; }
        if (temp >= 100) { $scope.message = 'Get the jhorts and the tank'; }

    }

    /********************************
     *    get current position      *
    /********************************/
    function decodeLatLng(pos) {
        var crd = pos.coords;
        var geocoder = new google.maps.Geocoder();
        var lat = crd.latitude;
        var lng = crd.longitude;
        var latlng = new google.maps.LatLng(lat, lng);
        if (geocoder) {
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        currentLocation = results[1].address_components[1].long_name + ', ' + results[1].address_components[2].short_name;
                        displayDefault(currentLocation);
                    } else {
                        alert("No results found");
                    }
                } else {
                    alert("Our geolocation failed due to: " + status);
                }
            });
        }
    }

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function error(err) {
        preloader.style.display = 'none';
        $scope.error = "Ahh shoot, we couldn\'t find you. Try entering your location.";
        $scope.$apply();
    }

    navigator.geolocation.getCurrentPosition(decodeLatLng, error, options);
}]);

angular.module('weatherService', [])
.factory('Weather', ["$http", function($http) {
    return {
        init: function(location) {

            if (location.city) { location = location.city; }
            location = location.replace(/\s/g, '');

            return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+location+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
        }
    };
}]);

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

angular.module('mainApp', [
    'weatherService',
    'forecastCtrl',
    'app.routes'
]);
