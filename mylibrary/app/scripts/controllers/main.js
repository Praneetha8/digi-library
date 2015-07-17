'use strict';

angular.module('mylibraryApp')
  .controller('MainCtrl', function ($scope,$mdDialog,$state) {

    /*popup for signup*/
	    $scope.showSignUpModal= function(ev) {
		  $scope.alert = '';
          $mdDialog.show({
            controller: DialogController,	
            parent: angular.element(document.body),
            templateUrl:"../views/sign-up.html",
            targetEvent: ev,
          })
         .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
          $scope.alert = 'You cancelled the dialog.';
          });
        };

    /*Go to next page once signed in*/
        $scope.signIn=function(){
        	if($scope.email && $scope.password)
    	$state.go('admin');
        }

    });

    /*outside controller for sign In popup*/
        function DialogController($scope,$mdDialog,$rootScope,$timeout) {
          $scope.hide = function() {
            $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

   		  $scope.answer = function(answer) {
  	        
             if($scope.email && $scope.password && $scope.firstName && $scope.lastName && $scope.repassword){
             $rootScope.signUp=true;
  	         $timeout(function() {
  	         	
             $rootScope.signUp=false;
             $mdDialog.hide(answer);
         		
             },
             1000)
  	     }
          };
 
        }          

  
