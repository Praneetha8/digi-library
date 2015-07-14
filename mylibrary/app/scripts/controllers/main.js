'use strict';

/**
 * @ngdoc function
 * @name mylibraryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mylibraryApp
 */
angular.module('mylibraryApp')
  .controller('MainCtrl', function ($scope,$mdDialog) {

	$scope.showSignUpModal= function(ev) {
		  $scope.alert = '';
    $mdDialog.show({
       controller: DialogController,	
      templateUrl:"../../views/Directives/sign-up.html",
      targetEvent: ev,
    })
     .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

 function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

  });

  
