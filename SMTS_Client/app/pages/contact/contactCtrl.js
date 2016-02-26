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
        messageResource.createUser(conCtrl.message);

        //$http.post("", conCtrl.message)
        //    .then(function () {
        //        //Sucess
        //    }, function () {
        //        //Error
        //    })

    }

}]);
