'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage
routerApp
.factory('Session', function($http) {
    return {
        getUser: function(key) {
            return sessionStorage.getItem(key);
        },
        setUser: function(key,value) {
            return sessionStorage.setItem(key,value);
        },
        destroy: function(key){
            return sessionStorage.removeItem(key);
        }

    }
});