var appmain = angular.module("Container", ["ngRoute"]);

appmain.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: '/app/pages/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/contact", {
            templateUrl: '/app/pages/contact/contact.html',
            controller: "ContactController"
        })
        .when("/about", {
            templateUrl: '/app/pages/about/about.html',
            controller: "AboutController"
        })
        .when("/about/:message", {
            templateUrl: '/app/pages/about/about.html',
            controller: "AboutController"
        })
        .when("/service", {
            templateUrl: '/app/pages/service/service.html',
            controller: "ServiceController"
        })
        .otherwise({
            redirectTo: "/home"
        })
});


appmain.controller('IndexController', ['$scope', '$location', function ($scope, $location) {
    
    $scope.contact = function () {
        $location.path("/contact");
    }

    $scope.home = function () {
        $location.path("/home");
    }

    $scope.service = function () {
        $location.path("/service");
    }

    $scope.about = function () {
        $location.path("/about");
    }

}]);


