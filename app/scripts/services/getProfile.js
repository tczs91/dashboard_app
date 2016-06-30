'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
dashApp.service('getProfileService', ['$http', function($http) {
      this.getProfile = function() {
                return $http({
                    url: '/api/profile',
                    method: "GET",
                }).success(function(res) {
                    console.log("Success!");
                    return res.body;
                }).error(function(res) {
                    console.log("Error.");
                });
          }
}]);
