//(function () {
//    "use strict";

//    var app = angular.module("Container",
//                            []);

//}());

var app = angular.module("Container", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: '/app/home/home.html',
            controller: "HomeController"
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