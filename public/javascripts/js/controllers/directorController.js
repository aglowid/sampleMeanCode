 'use strict';

angular.module('angularDemoApp')
  .controller('directorController', ['$scope', '$rootScope', '$location','directorService', 
    function($scope, $rootScope, $location, directorService) {

    	$scope.directors = [];
    	$scope.getDirectors = function(){
            directorService.getDirectors().success(function(response){
                $scope.directors = response;
        	});
        };

    	$scope.getDirectorInfo = function(selectedDirectorID){

            directorService.getDirectorInfo(selectedDirectorID).success(function(response){
                $rootScope.selectedDirector = response;
                $location.path('/director');
        	});
        };

        $scope.getDirectors();

    }]);