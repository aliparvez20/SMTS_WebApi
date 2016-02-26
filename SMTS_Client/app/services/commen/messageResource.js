'use strict';

appmain.factory('messageResource',
        ['$http', 'config', function ($http, config) {
            return new message($http, config);
        }]);

function message(http, config) {
    this.http = http;
    this.config = config

    this.sentMessage = function (data, scope) {
        console.log("this.createUser", config.apiUrl);
        http({
            method: 'POST',
            url: config.apiUrl + 'api/Message',
            
        }).then(function successCallback(data, response) {
            
        }, function errorCallback(response) {

        });
    }

    this.readMessage = function (id, scope) {
      
        $http({ method: 'GET', url: config.apiUrl + 'api/Message' }).
               success(function (data, ) {
                   
               }).
               error(function (data, status, headers, config) {
                   
               });

    }

    this.deleteMessage = function(id, scope){
    
    
    
    }
}








