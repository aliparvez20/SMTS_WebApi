'use strict';

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
        .when("/service", {
            templateUrl: '/app/pages/service/service.html',
            controller: "ServiceController"
        })
        .when("/client", {
            templateUrl: '/app/pages/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/commingsoon", {
            templateUrl: '/app/pages/commingsoon/commingsoon.html',
            controller: "CommingSoonController"
        })
        .when("/errorpage", {
            templateUrl: '/app/pages/about/about.html',
            controller: "AboutController"
        })
        .when("/gallary", {
            templateUrl: '/app/pages/service/service.html',
            controller: "ServiceController"
        })
        .when("/privacypolicy", {
            templateUrl: '/app/pages/home/home.html',
            controller: "HomeController",
            paramExample: 'exampleA'
        })
        .when("/termsofservice", {
            templateUrl: '/app/pages/contact/contact.html',
            controller: "ContactController"
        })
        .otherwise({
            redirectTo: "/home"
        })
});
