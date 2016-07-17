
// DIRECTIVES 

weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherreport.htm',
        scope: {
            weatherDay: '=',
            convertToStandart: '&',
            convertToDate: '&',
            convertToString: '@'
        } 
    }
})