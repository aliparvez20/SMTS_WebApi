(function () {
	"use strict";

	var appmain = angular.module("commen.service",
                            ["ngResource"]).constant("appSettings", {
                            	serverPath: "http://localhost:49528/"
                            });

}());