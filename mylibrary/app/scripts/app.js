'use strict';

/**
 * @ngdoc overview
 * @name mylibraryApp
 * @description
 * # mylibraryApp
 *
 * Main module of the application.
 */
(function(){
  angular
  .module('mylibraryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMaterial'
  ]) ;
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
   angular.module('mylibraryApp').config(function ($stateProvider, $urlRouterProvider) {
     
  
   /*$urlRouterProvider.when('/','/main')*/
      /*$urlRouterProvider.otherwise('/main')*/
     
      $stateProvider
      .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller:'MainCtrl'
        })
   $urlRouterProvider.otherwise('/main')
    });

    })();
