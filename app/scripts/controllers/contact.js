'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
dashApp.controller('contactController',['$scope','$http','contactService',function($scope,$http,contactService) {
      contactService.getLocation()
          .then(function(results) {
                  $scope.locations = results;
//                  console.log('locations are ' + $scope.locations);
            }, function(error) {})
              .finally(function() {
           });
     
    contactService.getCategory()
          .then(function(results) {
                  $scope.categories = results;
            }, function(error) {})
              .finally(function() {
           });
    
    $scope.nowtime= new Date();  
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
    $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
    
    $scope.randomNum=Math.floor(Math.random()*100000000);
    $scope.priority = function(value) {
    if(value<4)
      return "Low";
    else if(value>=4 && value<7)
      return "Middle";
    else
      return "High";
  };
}]);