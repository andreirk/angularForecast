
// SERVICES
weatherApp.service('cityService', function () {
    this.city = "Новосибирск";
});

weatherApp.service('weatherService',['$resource', function($resource){
    
    this.getWeather = function(city, days){
    
        var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';
        var forcastParams = {
            q: city,
            cnt: days,
            units: 'metric',
            APPID: keyID
        };
        weatherApi = $resource(weatherUrl, {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });
        return  weatherApi.get(forcastParams);

    }
    
}]);