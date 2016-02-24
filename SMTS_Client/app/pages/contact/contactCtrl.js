'use strict';

appmain.controller('ContactController', ['$scope', '$http', 'messageResource', function ($scope, $http, messageResource) {

    var conCtrl = this;


    $scope.submitMessage = function () {
        conCtrl.message.date = new Date();
        console.log(conCtrl.message);
        messageResource.postMessage(data
            //Hello


        //$http.post("", conCtrl.message)
        //    .then(function () {
        //        //Sucess
        //    }, function () {
        //        //Error
        //    })

    }

}]);
