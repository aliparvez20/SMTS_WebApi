'use strict';

appmain.factory('messageResource',
        ['$http', '$templateCache', '$q', 'config', function ($http, $templateCache, $q, config) {
            return new message($http, $templateCache, $q, config);
        }]);

function message(http, templateCache, q, config) {
    var _http = http;
    var _templateCache = templateCache
    var defer = q.defer();
    var _config = config
    var _url = config.apiUrl + 'api/Message'
    var status = null;
    var data = null;


    this.sentMessage = function (data, scope) {
        console.log("this.createUser", config.apiUrl);
        //http({
        //    method: 'POST',
        //    url: config.apiUrl + 'api/Message'

        //}).then(function successCallback(data, response) {

        //}, function errorCallback(response) {

        //});
    }

    this.readAllMessage = function () {

        _http({ method: 'GET', url: _url, cache: _templateCache }).
        then(function (response) {
            status = response.status;
            data = response.data;
            defer.resolve(data);
        }, function (response) {
            data = response.data || "Request failed";
            status = response.status;
        });
        return defer.promise;



        //_http({ method: 'GET', url: config.apiUrl + 'api/Message' }).
        //       success(function (request, response) {

        //       }).
        //       error(function (request, response) {

        //       });

    }

    this.readMessageById = function (id) {
        var _id = id;
        _http({ method: 'GET', url: _url, cache: _templateCache, params: { id: _id }})
            .then(function (response) {
                status = response.status;
                data = response.data;
                defer.resolve(data);
            }, function (response) {
                data = response.data || "Request failed";
                status = response.status;
            });
        return defer.promise;

    }

    this.deleteMessage = function(id, scope){

    }
}








