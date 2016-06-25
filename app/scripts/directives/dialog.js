'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog.
// First one is for the "Add" button and the second one is for the "Edit" button
dashApp
.directive('adddirective',function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/addDialog.html'
  };
})
.directive('editdirective',function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/editDialog.html'
  };
})
