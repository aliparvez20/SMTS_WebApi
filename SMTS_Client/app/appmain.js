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
<<<<<<< HEAD
        .when("/about/:message", {
            templateUrl: '/app/pages/about/about.html',
            controller: "AboutController"
        })
        .when("/service", {
            templateUrl: '/app/pages/service/service.html',
            controller: "ServiceController"
=======
        .when("/contact", {
            templateUrl: '/app/contact/contact.html',
            controller: "ContactController"
>>>>>>> origin/master
        })
        .otherwise({
            redirectTo:"/home"
        })
}).controller('IndexController', ['$scope', '$location', function ($scope, $location) {



}]);


