'use strict';

appmain.controller('JobPageController', ['$scope', '$rootScope', 'jobServices', function ($scope, $rootScope, jobServices) {

    var promise = jobServices.getJobs();
    promise.then(function (jobs) {
        $scope.jobs = jobs.data;
        console.log($scope.jobs);
    },
    function (errorPayload) {
        
    });
    
    


}]);
