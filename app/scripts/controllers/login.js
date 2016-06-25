'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
dashApp.controller('loginController', ['$scope','$state','authenticateService',function($scope, $state, authenticateService) {
    var message = '';
    console.log(authenticateService.islogged());
    $scope.login = authenticateService.login;
}]);

