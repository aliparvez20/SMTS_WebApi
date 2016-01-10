'use strict';

angular.module('ui.header.ctrl', [])
    .controller('HeaderController', ['$scope', '$rootScope', 'courseService', function ($scope, $rootScope, courseService) {

        var onReload;
        var getStartPage;
        $rootScope.$on('onCourseLoaded', function () {
            var header = courseService.getHeader();
            getStartPage = courseService.getStartPage().id;
            $scope.title = header.title;
            $scope.subtitle = header.subtitle;
            $scope.logoUrl = header.logotype;
            if (getStartPage != 0) {
                onReload = courseService.getReturnToLastPopup();
                if (onReload !== null) {
                    $rootScope.showingReturnToPagePopup = true;
                }
            }
        });

        var count = 0;
        $rootScope.$on('contentLoadedAfterAnimation', function (event, args) {
            count++;
            if (count === 1) {
                if (getStartPage != 0) {
                    ReturnToLastLocationPopup(onReload);
                }
            }
        });

        function ReturnToLastLocationPopup(obj) {
            if (obj !== null && obj !== undefined) {
                if(obj.length > 0) {
                    $rootScope.currentPopup = obj[0].popup;
                    $rootScope.$broadcast('onShowPopup');
                }
            }
        }

    }]);