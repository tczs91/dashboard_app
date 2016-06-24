'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: 
//login, logout, and islogged routerApp
routerApp
.factory('Authenticate', function($http,Session) {
return{
       getReturn:function() {
            var user = Session.getUser('user');
            var psw = Session.getUser('psw');
            var promise = $http.post('/api/login', { userName: user,password: psw});
           return promise;
           /*promist is an object,deferred, so (return res) is returned first, I cannot get the res='success' */
//    promise.then(function(response) {
//      res = response.data.authentication;
//    },function(){
//        console.log("eoor");
//    });  
//          return res;
//    }
       }};
});