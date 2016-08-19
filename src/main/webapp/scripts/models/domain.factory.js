(function() {
'use strict';
	var commonAuth = angular.module('wdApp.models', []);

	commonAuth.factory('fModels', ['$rootScope','localStorageService', function($rootScope,localStorageService){
		var factory = {};

		factory.amont = function(object,action){
			
			if(action === "INSERT"){
				object.createDateUTC = (new Date()).getTime();
				object.createUser = $rootScope.user.user;
				object.emprId = localStorageService.get('empresa').id
			}else if(action === "UPDATE")
			{
				object.modifyDateUTC = (new Date()).getTime();
				object.modifyUser = $rootScope.user.user;
				object.emprId = localStorageService.get('empresa').id
			}

			console.log($rootScope)
			return object;
		}

	
     return factory;
	}]);
})();







