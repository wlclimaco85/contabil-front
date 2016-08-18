(function() {
'use strict';
	var commonAuth = angular.module('wdApp.models', []);

	commonAuth.factory('fModels', ['$rootScope','localStorageService', function($rootScope,localStorageService){
		var factory = {};

		factory.amont = function(object){
			debugger
			console.log(localStorageService.get('empresa'))
			object.createDateUTC = (new Date()).getTime();
			object.createUser = $rootScope.user.user;
			object.emprId = localStorageService.get('empresa').id

			console.log($rootScope)
			return object;
		}

	
     return factory;
	}]);
})();







