'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality:
// making service calls to retrieve the logged-in users' information
dashApp.factory('getUserService', ['$http','sessionService',function($http, sessionService) {
var userString = sessionService.getSession('userSession');
var userObj = JSON.parse(userString);
var userName = userObj.username;

return {
            getUser: function() {
                return $http({
                    url: '/api/getuser',
                    method: "GET",
                    params: {'user': userName}
                }).success(function(res) {
                    console.log("Success!");
                    return res.body;
                }).error(function(res) {
                    console.log("Error.");
                });
            }
        };
}]);
