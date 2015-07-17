'use strict';

/**
 * @ngdoc function
 * @name mylibraryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mylibraryApp
 */
angular.module('mylibraryApp')
  .controller('AdminCtrl', function ($scope,$http) {
   $http.get('../../json/books.json').success(function(data) { 
   //data is an array of objects
    console.log(data);
    $scope.books=data;

   })
  });
