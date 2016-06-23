'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality:
// making service calls to retrieve the logged-in users' information
dashApp.factory('getUserService', ['$http',function($http) {
return {
            getUser: function() {
                return $http({
                    url: '/api/getuser',
                    method: "GET",
                    params: {'user': 'minh'}
                }).success(function(res) {
                    console.log("Success!");
                    return res.body;
                }).error(function(res) {
                    console.log("Error.");
                });
            }
        };
}]);
