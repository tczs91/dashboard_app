'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
routerApp.controller('loginController',function($scope,$http,$state,Authenticate,Session){
    $scope.reminder=true;
    $scope.login=function(){
        Session.setUser('user',$scope.userName);
        Session.setUser('psw',$scope.password);
        Authenticate.getReturn().then(function(response) {
            $scope.resres = response.data.authentication;
//            console.log($scope.resres);
        }, function(error) {
            $scope.resres=error.data.authentication;
        })
        if($scope.resres=="success"){
//             alert("runrun1");
            $state.go("root.work");
        }
        else{
            $scope.reminder=false;
        }
    }
    
});