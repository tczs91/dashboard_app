'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged

dashApp.factory('authenticateService', ['$http',function($http) {
return {
            getUser: function() {
                return $http({
                    url: '/api/login',
                    method: "GET",
                    params: {'userName': 'minh',
                    'password': 'faith'}
                }).success(function(res) {
                    console.log("Success!");
                    return res.body;
                }).error(function(res) {
                    console.log("Error.");
                });
            }
        };
}]);
