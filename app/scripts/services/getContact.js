'use strict';
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory 
dashApp.service('contactService', ['$http',function($http) {
      this.getLocation = function() {
                return $http({
                method : "GET",
                //api is to find router folder in server
                url : "/api/location"
            }).then(function mySucces(response) {
            return response.data.locations;
            }, function myError(response) {
            console.log("error");
                });  
      }
      this.getCategory = function(){
            return $http({
                method : "GET",
                //api is to find router folder in server
                url : "/api/category"
            }).then(function mySucces(response) {
            return response.data.categories;
            }, function myError(response) {
            console.log("error");
                });  
      }
      
}]);