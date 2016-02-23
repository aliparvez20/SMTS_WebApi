'use strict';
angular.module('htmlbindDrct', [])
    .directive("ngHtmlBind", function ($compile) {

        function link(scope, element, attrs) {
            attrs.$observe("ngHtmlBind", function (value) {
                var subSectionOfPage, collectedFeedbackHtml = '';
                subSectionOfPage = $compile("<div>{0}</div>".format(value))(scope);
                $(element).empty();
                $(element).append(subSectionOfPage);
            })
        }

        return {
            restrict: "AE",
            link: link
        };
    });