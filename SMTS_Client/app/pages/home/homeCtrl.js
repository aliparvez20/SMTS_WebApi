'use strict';

appmain.controller('HomeController', ['$scope', '$rootScope', '$controller', '$route', function ($scope, $rootScope, $controller, $route) {


    
    $rootScope.menu = {
        home: "active",
        about: "",
        blog: "",
        contact: "",
    }


    //var paramValue = $route.current.$$route.paramExample;
    //console.log(paramValue);


    //console.log("HomeController", $scope);


    //$scope.script = "$(document).ready(function () {alert('HOME');App.init();App.initSliders();ParallaxSlider.initParallaxSlider();})"

}]);

