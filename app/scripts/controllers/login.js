'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
dashApp.controller('loginController', ['$scope','authenticateService',function($scope, authenticateService) {
    var message = '';
    authenticateService.login('minh','faith')
      .then(function(results) {
              message = results.data.authentication;
              console.log(message + 'aaaaaaa');
      }, function(error) {console.log(message + 'bbbbbbb');})
        .finally(function() {
     });
}]);

