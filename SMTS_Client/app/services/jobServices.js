'use strict';

appmain.factory('jobServices',
        ['$http', '$templateCache', '$q', 'config', '$timeout', '$resource', function ($http, $templateCache, $q, config, $timeout, $resource) {
            return new Job($http, $templateCache, $q, config, $timeout, $resource);
        }]);

function Job(http, templateCache, q, config, timeout, resource) {
    var _http = http;
    var _templateCache = templateCache
    var defer = q.defer();
    var _config = config
    var _url = config.apiUrl + 'api/Jobs'
    var status = null;
    var _data = null;
    var _timeout = timeout;
    var _resource = resource;

    this.postJob = function (data, scope) {

        




        //_data = JSON.stringify(data);
        //console.log("this.createUser", _data);
        //_http({
        //    method: 'POST',
        //    url: _url,
        //    params: { data: _data }

        //}).
        //then(function (response) {
        //    var success = response;
        //    console.log("SUCESS", response);
        //}, function (response) {
        //    console.log("FAILED", response);
        //});
    }

    this.getJobs = function () {
        console.log(1);

        return _http.get(_url);



        //_http({ method: 'GET', url: _url, cache: _templateCache }).
        //then(function (response) {
        //    status = response.status;
        //    _data = response.data;
        //    defer.resolve(_data);
        //}, function (response) {
        //    _data = response.data || "Request failed";
        //    status = response.status;
        //});

        //return defer.promise;

    }

    this.getJobById = function (id) {
        var _id = id;
        _http({ method: 'GET', url: _url, cache: _templateCache, params: { id: _id } })
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

    this.deleteJob = function (id) {

    }
}








