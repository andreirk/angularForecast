// CONTROLLERS

weatherApp.controller('homeController', ['$scope','$location', 'cityService', function ($scope,$location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path('/forecast');
    };

    
}]);

weatherApp.controller('forecastController', ['$scope','$routeParams','weatherService', 'cityService', function ($scope,  $routeParams, weatherService, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.num || '2';
    $scope.weatherResult = weatherService.getWeather($scope.city,$scope.days );
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000) ;
    }
                                           
}]);