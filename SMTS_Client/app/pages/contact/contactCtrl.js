'use strict';

appmain.controller('ContactController', ['$scope', '$rootScope', '$http', 'messageResource', function ($scope,$rootScope, $http, messageResource) {


    $rootScope.menu = {
        home: "",
        about: "",
        blog: "",
        contact: "active",
    }
    
    $scope.google = "XXXXX";

    $scope.submitMessage = function () {
        //$scope.message.messageDate = new Date();
        //messageResource.sentMessage(conCtrl.message);
        //messageResource.deleteMessage(4);
        console.log(messageResource.readAllMessage());
       
        
    }

}]);
