'use strict';

/**
* @ngdoc overview
* @name angularDemoApp
* @description
* # angularDemoApp
*
* Main module of the application.
*/

var angularDemoApp = angular
  .module('angularDemoApp', [
    'ngRoute'
  ]);

angularDemoApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider
   .when('/directors', {
       templateUrl: 'javascripts/views/directors-module/list.html',
       controller: 'directorController',
       data: {
            header: 'Directors LIST'
       }

   })
   .when('/director', {
       templateUrl: 'javascripts/views/directors-module/info.html',
       data: {
            header: 'Director INFO'
       }
   })
    
})
.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        if (next.data != undefined) {
            $rootScope.header = next.data.header;  
            console.log($rootScope);        
        }
    });
});