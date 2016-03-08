'use strict';

appmain.config(["$routeProvider", "$locationProvider", "$httpProvider", function ($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};


    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeController'
        })
        .when("/home", {
            templateUrl: 'app/pages/home/home.html',
            controller: "HomeController"
            //paramExample: 'exampleA'
        })
        .when("/contact", {
            templateUrl: 'app/pages/contact/contact.html',
            controller: "ContactController"
        })
        .when("/about", {
            templateUrl: 'app/pages/about/about.html',
            controller: "AboutController"
        })
        .when("/service", {
            templateUrl: 'app/pages/service/service.html',
            controller: "ServiceController"
        })
        .when("/client", {
            templateUrl: 'app/pages/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/jobs", {
            templateUrl: 'app/pages/jobpage/jobpage.html',
            controller: "JobPageController"
        })
        .when("/commingsoon", {
            templateUrl: 'app/pages/commingsoon/commingsoon.html',
            controller: "CommingSoonController"
        })
        .when("/error", {
            templateUrl: 'app/pages/errorpage/errorpage.html',
            controller: "ErrorController"
        })
        .when("/gallary", {
            templateUrl: 'app/pages/service/service.html',
            controller: "ServiceController"
        })
        .when("/privacypolicy", {
            templateUrl: 'app/pages/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/termsofservice", {
            templateUrl: 'app/pages/contact/contact.html',
            controller: "ContactController"
        })
        .when("/adminlogin", {
            templateUrl: 'app/pages/adminlogin/adminlogin.html',
            controller: "AdminLoginController"
        })
        .when("/adminhome", {
            templateUrl: 'app/pages/adminhome/adminhome.html',
            controller: "AdminHomeController"
        })
        .otherwise({
            // redirectTo: "/home"
        });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);



