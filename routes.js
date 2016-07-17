// ROUTES
weatherApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.htm',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.htm',
            controller: 'forecastController'
        })
        .when('/forecast/:num', {
            templateUrl: 'views/forecast.htm',
            controller: 'forecastController'
        })
});