var appmain = angular.module("Container", ["ngRoute"]);

appmain.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: '/app/home/home.html',
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: '/app/about/about.html',
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: '/app/contact/contact.html',
            controller: "ContactController"
        })
        .otherwise({
            redirectTo:"/home"
        })
}).controller('IndexController', ['$scope', '$location', function ($scope, $location) {



}]);