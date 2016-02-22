'use strict';

app.controller('HomeController', ['$scope', '$route', function ($scope, $route) {
    var paramValue = $route.current.$$route.paramExample;
    console.log(paramValue);
}]);
