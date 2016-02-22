var app = angular.module("Container", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: '/app/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/contact", {
            templateUrl: '/app/contact/contact.html',
            controller: "ContactController"
        })
        .otherwise({
            redirectTo:"/home"
        })
}).controller('IndexController', ['$scope', '$location', function ($scope, $location) {

    $scope.contact = function () {
        $location.path("/contact");
    }

    $scope.home = function () {
        $location.path("/home");
    }

}]);