'use strict';

appmain.factory('messageResource',
        ['$http', function ($http) {
            return new message($http);
        }]);

function message(http) {
    this.http = http;
    this.createUser = function (user, scope) {
        console.log("this.createUser")
        // 
        // Save Action Method
        //
        //var User = resource('/users/new');
        //User.save(user, function (response) {
        //    scope.message = response.message;
        //});
    }
    this.getUser = function (id, scope) {
        //
        // GET Action Method
        //
        //var User = resource('/users/:userId', { userId: '@userId' });
        //User.get({ userId: id }, function (user) {
        //    scope.user = user;
        //})
    }
    this.getUsers = function (scope) {
        //
        // Query Action Method
        //
        //var Users = resource('/users/all');
        //Users.query(function (users) {
        //    scope.users = users;
        //});
    }
}




//(function () {
//    "use strict";

//    angular
//        .module("commen.service")
//        .factory("messageResource", ["$resource", "appSettings",
//            function ($resource, appSettings, data) {
//                //return $resource(appSettings.serverPath + "/api/Products/:search");
//                console.log("messageResource");
//                return {

//                    //postMessage: function (data) {
//                    //    alert("Posting");
//                    //    $http.post(appSettings.serverPath + "/api/Message", data)
//                    //    .then(function () {
//                    //        //Sucess
//                    //    }, function () {
//                    //        //Error
//                    //    })
//                    //}
//                }




//            }
//        ]);


//}());




