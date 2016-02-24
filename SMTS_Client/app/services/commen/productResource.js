(function () {
    "use strict";

    angular
        .module("commen.service")
        .factory("productResource", ["$resource", "appSettings",
            function ($resource, appSettings) {
                //return $resource(appSettings.serverPath + "/api/Products/:search");
            }
        ]);


}());