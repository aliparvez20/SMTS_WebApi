(function () {
	"use strict";

	var app = angular.module("commen.service",
                            ["ngResource"]).constant("appSettings", {
                            	serverPath: "http://localhost:49528/"
                            });

}());