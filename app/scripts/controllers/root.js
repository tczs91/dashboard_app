'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

dashApp.controller('rootController', ['$state','$scope','getUserService','authenticateService','sessionService',function($state,$scope, getUserService, authenticateService,sessionService) {
    ////TODO check login here
    //if not return to login page
    var loggedFlag = authenticateService.islogged();
    if(loggedFlag) {
          //call getUser service to retirve user full name and display
          var fullName = '';
          var userString = sessionService.getSession('userSession');
          if(userString) {
            var userObj = JSON.parse(userString);
            var userName = userObj.username;
            console.log(userName);
          } else {
                var userName = '';
          }
          getUserService.getFullname(userName)
          .then(function(results) {
                  fullName = results.data.name;
                  console.log('your fullname is ' + fullName);
                  $scope.username = fullName;
            }, function(error) {})
              .finally(function() {
           });
                  $scope.username = fullName;
          // $scope.$apply(function() {
          //     $scope.username = fullName;
          // });
          //display current date
          //we can create a string from myDate or
          //just use filter to change the format of myDate
          var myDate = new Date();
          $scope.currentDate = myDate;

          //when click the button call authentication service to logout the user
          $scope.logout =function() {
            authenticateService.logout();
          }
          //change the activate li
           $('#leftMenu li').click(function() {
             //Removes the active class from any <li> elements
            $('#leftMenu li.active').removeClass('active');
            //Adds it to the current element
            $(this).addClass('active');
          });

          //go to work view
          $state.transitionTo('root.work');
    }else {
          $state.transitionTo('login');
    }
}]);

