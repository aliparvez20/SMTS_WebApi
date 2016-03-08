'use strict';

appmain.controller('IndexController', ['$scope', '$location', function ($scope, $location) {

    $scope.contact = function () {
        $location.path("/contact");
    }

    $scope.home = function () {
        $location.path("/home");
    }

    $scope.service = function () {
        $location.path("/service");
    }

    $scope.about = function () {
        $location.path("/about");
    }


}]);