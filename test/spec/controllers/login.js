describe('login a user', function() {
  var scope;
  var ctrl;
  //load the module of the controller
  beforeEach(module('dashApp'));
  //initialize the controller and mock a scope
  beforeEach(inject(function($rootScope, $controller {
      scope = $rootScope.new();
      ctrl = $controller('loginController', {
        $scope: scope
      });
  })));
  describe('authenticate service', function() {
    //
  })
  it('should ')
})
