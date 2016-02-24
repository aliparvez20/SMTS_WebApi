angular.module('containerDrct', [])
    .directive('ngPageContainer', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/container/container.html'
    }
});