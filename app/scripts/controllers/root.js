'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

dashApp.controller('rootController', ['$scope','getUserService','authenticateService','$state',function($scope, getUserService, authenticateService,$state) {
    ////TODO check login here
    //if not return to login page
    var loggedFlag = authenticateService.islogged();
    if(loggedFlag) {
    }else {
        $state.transitionTo('login');
    }

    //call getUser service to retirve user full name and display
    $scope.username = {};
    getUserService.getUser()
      .then(function(results) {
              $scope.username = results.data.name;
      }, function(error) {})
        .finally(function() {
     });

    //display current date
    //we can create a string from myDate or
    //just use filter to change the format of myDate
    var myDate = new Date();
    $scope.currentDate = myDate;

    //when click the button call authentication service to logout the user
    $scope.logout =function() {
      authenticateService.logout();
    }

}]);

