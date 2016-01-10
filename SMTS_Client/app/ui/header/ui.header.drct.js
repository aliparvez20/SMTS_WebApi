'use strict';

angular.module('ui.header.drct', [])
    .directive("ngUiHeader", function () {
        return {
            restrict: "E",
            templateUrl: "ui/header/ui.header.tpl.html"
        }
    })
    .directive("ngUiHeaderMobile", function () {
        return {
            restrict: "E",
            templateUrl: "ui/header/mobile/ui.header.mobile.tpl.html"
        }
    });