'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
dashApp.controller('workController',['$scope','$http','$filter', function($scope,$http,$filter) {
    $http({
        method : "GET",
        //api is to find router folder in server
        url : "/api/work"
    }).then(function mySucces(response) {
        $scope.works = response.data.works;
    }, function myError(response) {
       console.log("error");
    });

    $scope.deleteItem=function(work){
         $scope.index=-1;
        $scope.index=$scope.works.indexOf(work);
    }
    $scope.confdelete=function(){
        $scope.works.splice( $scope.index,1);
    }
    $scope.disvar=true;
    $scope.displayCard=function(){
        $scope.disvar=true;
    }
    $scope.displayList=function(){
        $scope.disvar=false;
    }

    $scope.addsubmit = function() {
        var item = {
                title: $scope.addtitle,
                author: $scope.addauthor,
                like: $scope.addlike,
                comment: $scope.addcomment,
            };
        $scope.works.push(item);
    }
    $scope.edit=function(work){
        $scope.edititle= work.title;
        $scope.editauthor= work.author;
        $scope.editlike= work.like;
        $scope.editcomment= work.comment;
        $scope.indexedit=work.id-1;
    }
    $scope.editsubmit=function(){
        $scope.works[$scope.indexedit].title=$scope.edititle;
        $scope.works[$scope.indexedit].author=$scope.editauthor;
        $scope.works[$scope.indexedit].like=$scope.editlike;
        $scope.works[$scope.indexedit].comment=$scope.editcomment;
    }
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
//    $scope.orderlike=function(x){
//
//    }

}]);
