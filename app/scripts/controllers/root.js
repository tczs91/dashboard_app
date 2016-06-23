'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

dashApp.controller('rootController', ['$scope','getUserService',function($scope, getUserService) {
    $scope.username = {};
    var myDate = new Date();

    getUserService.getUser()
      .then(function(results) {
              $scope.username = results.data.name;
      }, function(error) {})
        .finally(function() {
     });
    //we can create a string from myDate or
    //just use filter to change the format of myDate
    $scope.currentDate = myDate;
}]);

