(function () {
    "use strict";

    angular
        .module("commen.service")
        .factory("messageResource", ["$resource", "appSettings",
            function ($resource, appSettings, data) {
                //return $resource(appSettings.serverPath + "/api/Products/:search");
                return {
                    postMessage: function (data) {
                        alert("Posting");
                        $http.post(appSettings.serverPath + "/api/Message", data)
                        .then(function () {
                            //Sucess
                        }, function () {
                            //Error
                        })
                    }
                }


                

            }
        ]);


}());