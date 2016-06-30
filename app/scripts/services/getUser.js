'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality:
// making service calls to retrieve the logged-in users' information
dashApp.service('getUserService', ['$http','sessionService',function($http, sessionService) {
var userString = sessionService.getSession('userSession');
      this.getFullname = function(username) {
                return $http({
                    url: '/api/getuser',
                    method: "GET",
//                    username as parameter passed in the function
//                    params user is assigned by username,means res.query.user<==username
                    params: {'user': username}
                }).success(function(res) {
                    console.log("Success!");
                    return res.body;
                }).error(function(res) {
                    console.log("Error.");
                });
          }
}]);



