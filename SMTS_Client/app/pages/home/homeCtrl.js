'use strict';

appmain.controller('HomeController', ['$scope', '$rootScope', '$route', function ($scope, $rootScope, $route) {
    $rootScope.HomeController = true;
    var paramValue = $route.current.$$route.paramExample;
    console.log(paramValue);


    console.log("HomeController", $scope);
}]);

