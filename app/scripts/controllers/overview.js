'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
dashApp.controller('overviewController', ['$scope','$state','getProfileService','sessionService', function($scope, $state, getProfileService, sessionService) {
        var userString = sessionService.getSession('userSession');
          if(userString) {
            var userObj = JSON.parse(userString);
            var userName = userObj.username;
            console.log(userName);
          } else {
                var userName = '';
          }
        var nickname = '';
        var profileImg = '';
        getProfileService.getProfile()
          .then(function(results) {
                  results.data.profiles.forEach(function(eachProfile){
                      var resultName = eachProfile.username;
                      var resultNickName = eachProfile.nickname;
                      var resultProfileImg = eachProfile.profileImage;
                      //display the current user's profile
                      if(userName == resultName) {
                          nickname = resultNickName;
                          profileImg = resultProfileImg;
                      }
                  });
                  $scope.dispUsername = userName;
                  $scope.dispNickname = nickname;
                  $scope.dispProfImg = profileImg;
            }, function(error) {});
}]);
