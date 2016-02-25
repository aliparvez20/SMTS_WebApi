'use strict';

appmain.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/pages/home/home.html',
            controller: 'HomeController'
        })
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
        .when("/error", {
            templateUrl: '/app/pages/errorpage/errorpage.html',
            controller: "ErrorController"
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
           // redirectTo: "/home"
        });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);

//appmain.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
//    $urlRouterProvider.otherwise('/home');
//    $stateProvider
//        .state('home', {
//            url: '/home',
//            templateUrl: '/app/pages/home/home.html',
//            controller: 'HomeController',
//            paramExample: 'exampleA'
//        })
//        .state("contact", {
//            url: '/contact',
//            templateUrl: '/app/pages/contact/contact.html',
//            controller: "ContactController"
//        })
//        .state("about", {
//            url: '/about',
//            templateUrl: '/app/pages/about/about.html',
//            controller: "AboutController"
//        })
//       .state("service", {
//           url: '/service',
//           templateUrl: '/app/pages/service/service.html',
//           controller: "ServiceController"
//       })
//       .state("client", {
//           url: '/client',
//           templateUrl: '/app/pages/client/client.html',
//           controller: "ClientController",
//           paramExample: 'exampleA'
//       })
//       .state("commingsoon", {
//           url: '/commingsoon',
//           templateUrl: '/app/pages/commingsoon/commingsoon.html',
//           controller: "CommingSoonController"
//       })
//       .state("errorpage", {
//           url: '/errorpage',
//           templateUrl: '/app/pages/errorpage/errorpage.html',
//           controller: "ErrorPageController"
//       })
//       .state("gallary", {
//           url: '/gallary',
//           templateUrl: '/app/pages/gallary/gallary.html',
//           controller: "GallaryController"
//       })
//       .state("privacypolicy", {
//           url: '/privacypolicy',
//           templateUrl: '/app/pages/privacypolicy/privacypolicy.html',
//           controller: "PrivacyPolicyController",
           
//       })
//       .state("termsofservice", {
//           url: '/termsofservice',
//           templateUrl: '/app/pages/termsofservice/termsofservice.html',
//           controller: "TermsOfServiceController"
//       });

//}]);


