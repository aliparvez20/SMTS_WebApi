'use strict';

appmain.controller('ContactController', ['$scope', '$rootScope', '$http', 'messageResource', function ($scope,$rootScope, $http, messageResource) {

    var conCtrl = this;
    $rootScope.menu = {
        home: "",
        about: "",
        blog: "",
        contact: "active",
    }
    


    $scope.submitMessage = function () {
        conCtrl.message.date = new Date();
        console.log(conCtrl.message);
        messageResource.createUser();

        //$http.post("", conCtrl.message)
        //    .then(function () {
        //        //Sucess
        //    }, function () {
        //        //Error
        //    })

    }

}]);
