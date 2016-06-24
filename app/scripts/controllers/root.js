'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in
routerApp.controller('rootController',function(Session,$scope,$state){
    $scope.userName=Session.getUser('user');
    $scope.date=new Date();
    $scope.logout=function(){
        Session.destroy('user');
        Session.destroy('psw');
        $state.go("login");
    }
});