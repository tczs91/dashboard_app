'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged

dashApp.service('authenticateService', ['$http',function($http) {
      //user login function
      //make the http post and send the username&password pair to serve and
      //receive the login result
      this.login = function (userName,password) {
        return $http({
                    url: '/api/login',
                    method: "POST",
                    data: {'userName': userName,
                    'password': password}
                }).success(function(res) {
                    return res.body;
                }).error(function(res) {
                });
    }

    //TODO user logout function
    this.logout = function () {
        //destroy the session here
        console.log('logout succeed!');
    }
    //TODO user islogedin function
}]);
