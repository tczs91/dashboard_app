'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities:
// get, set, and destroy for users' data in the session storage

dashApp.service('sessionService', function() {
      //set session, call this function to creat a
      //session from the given key and value
      this.setSession = function(key, value) {
          sessionStorage.setItem(key, value);
      }

      //get session, call this function to get a session value
      //by using given key
      this.getSession = function(key) {
          return sessionStorage.getItem(key);
      }

      //destroy session, call this function to remove a session
      //by using given key
      this.destroySession = function(key) {
          sessionStorage.removeItem(key);
      }
});
