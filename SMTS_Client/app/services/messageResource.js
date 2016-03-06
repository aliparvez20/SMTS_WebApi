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
    var _url = config.apiUrl + 'api/Messages'
    var status = null;
    var _data = null;


    this.sentMessage = function (data, scope) {

        _data = JSON.stringify(data);
        console.log("this.createUser", _data);
        _http({
            method: 'POST',
            url: _url,
            params: { data: _data }
            
        }).
        then(function (response) {
            var success = response;
            console.log("SUCESS", response);
        }, function (response) {
            console.log("FAILED", response);
        });
    }

    this.readAllMessage = function () {

        _http({ method: 'GET', url: _url, cache: _templateCache }).
        then(function (response) {
            status = response.status;
            _data = response.data;
            defer.resolve(_data);
        }, function (response) {
            _data = response.data || "Request failed";
            status = response.status;
        });
        return defer.promise;
    }

    this.readMessageById = function (id) {
        var _id = id;
        _http({ method: 'GET', url: _url, cache: _templateCache, params: { id: _id }})
            .then(function (response) {
                status = response.status;
                _data = response.data;
                defer.resolve(_data);
            }, function (response) {
                _data = response.data || "Request failed";
                status = response.status;
            });
        return defer.promise;

    }

    this.deleteMessage = function(id){
         //var _id = id;
         //_http({ method: 'DELETE', url: _url, cache: _templateCache, params: { id: '1' }})
         //   .then(function (response) {
         //       status = response.status;
         //       _data = response.data;
         //       defer.resolve(_data);
         //       console.log("DELETE SUCESS");
         //   }, function (response) {
         //       _data = response.data || "Request failed";
         //       status = response.status;
         //       console.log("DELETE failed", response);
         //   });
         //return defer.promise;
    }
}








