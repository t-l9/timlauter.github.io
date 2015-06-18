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
