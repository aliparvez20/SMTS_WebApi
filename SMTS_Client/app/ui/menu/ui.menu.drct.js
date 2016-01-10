'use strict';

angular.module('ui.menu.drct', [])
    .directive("ngUiMenu", function () {
        return {
            restrict: "AE",
            templateUrl: "ui/menu/ui.menu.tpl.html"
        }
    });