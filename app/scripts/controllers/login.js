'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
dashApp.controller('loginController', ['$scope','authenticateService',function($scope, authenticateService) {
    $scope.username = {};
    var myDate = new Date();

    getUserService.getUser()
      .then(function(results) {
              $scope.username = results.data.name;
      }, function(error) {})
        .finally(function() {
     });
}]);

