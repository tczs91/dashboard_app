'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
routerApp.controller('workController', function($scope,$http) {
    $http({
        method : "GET",
        //api is to find router folder in server
        url : "/api/work"
    }).then(function mySucces(response) {
        $scope.works = response.data.works;
    }, function myError(response) {
       console.log("error");
    });
});
//delete(workid){
//    $("#workid").css("display","none");
//}
