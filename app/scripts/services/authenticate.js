'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged

dashApp.service('authenticateService', ['$http','$state','sessionService',function($http,$state, sessionService) {
      //user login function
      //make the http post and send the username&password pair to serve and
      //receive the login result
      var message = '';
      this.login = function () {
        var userName = this.inputUsername;
        var password = this.inputPwd;
        return $http({
                    url: '/api/login',
                    method: "POST",
                    data: {'userName': userName,
                    'password': password}
                  }).success(function(res) {
                      message = res.authentication;
                      //create login session
                      //create the user object
                      var userObj = {
                        'username': userName,
                        'password': password
                    };
                      //console.log(userObj);
                      //convert the user objecet to string
                      //because session storage accepts only string value
                      var stringUser = JSON.stringify(userObj);
                      //call set session to creat the user session
                      sessionService.setSession('userSession', stringUser);
                      alert("Login Successfully!");
                      //change the state to root view
                      $state.transitionTo('root');
                }).error(function(res) {
                    console.log(message + ' bbbbbbb');
                });
    }

    //TODO user logout function
    this.logout = function () {
        //call session service to destroy the session here
        sessionService.destroySession('userSession');
        console.log('logout succeed!');
        //redirect to login view
        $state.transitionTo('login');
    }
    //user islogedin function
    this.islogged  = function() {
        //call getSession service to get the session and check if the user
        var userString = sessionService.getSession('userSession');

        //maybe compare the session data and DB data in the future
        //convert the userString to user object
        //var userObj = JSON.parse(userString);

        //is logged in
        //if userString is not null, the user is logged in
        // if(undefined == userString || null == userString) {
        //     return false;
        // } else {
        //     return true;
        // }
        console.log(userString);
        if(userString) {
          return true;
        } else {
          return false;
        }
    }
}]);
