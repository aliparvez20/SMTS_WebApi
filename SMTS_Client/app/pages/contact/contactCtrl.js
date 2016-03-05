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
        conCtrl.message.messageDate = new Date();
        //messageResource.sentMessage(conCtrl.message);
        messageResource.deleteMessage(4);
        
       
        
    }

}]);
