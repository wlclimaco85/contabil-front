(function() {
'use strict';
	var commonAuth = angular.module('wdApp.models', []);

	commonAuth.factory('fModels', ['$rootScope','localStorageService', function($rootScope,localStorageService){
		var factory = {};

		factory.amont = function(object,action){

			var user = "system"
			var empresa = null;
			if($rootScope.user != undefined)
			{
				user = $rootScope.user.user;
			}
			if(localStorageService.get('empresa') != undefined)
			{
				empresa = localStorageService.get('empresa').id;
			}
			if(action === "INSERT"){
				object.createDateUTC = (new Date()).getTime();
				object.createUser = user;
				object.emprId = empresa;
				object.modelAction = "INSERT"
			}else if(action === "UPDATE")
			{
				object.modifyDateUTC = (new Date()).getTime();
				object.modifyUser = user;
				object.emprId = empresa;
				object.modelAction = "INSERT"
			}
			else
			{
				object.modifyDateUTC = (new Date()).getTime();
				object.modifyUser = user;
				object.emprId = empresa;
				object.modelAction = "DELETE"
			}

			console.log($rootScope)
			return object;
		}


     return factory;
	}]);
})();







