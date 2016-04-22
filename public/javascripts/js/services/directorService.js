'use strict';

angular.module('angularDemoApp')
.service('directorService', ['$http',
  function($http){
  		var directorAPI = {};
  		directorAPI.getDirectors = function(){
        return $http.get('/api/directors').success(function(data){
          return data;
        });
  		};

  		directorAPI.getDirectorInfo = function(id){
        return $http.get('/api/directors/'+id).success(function(data){
          return data;
        });
  		};

  		return directorAPI;
  }]);