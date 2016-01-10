'use strict';

angular.module('ui.footer.drct', [])
    .directive("ngUiFooter", function () {
        //console.log("FOOTER DIRECTIVE");
        return {
            restrict: "E",
            templateUrl: "ui/footer/ui.footer.tpl.html"
        }
    })
    .directive("ngUiFooterMobile", function () {
        //console.log("FOOTER DIRECTIVE");
        return {
            restrict: "E",
            templateUrl: "ui/footer/mobile/ui.footer.mobile.tpl.html"
        }
    });