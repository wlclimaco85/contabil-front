(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.initPage', []);

	commonAuth.factory('fInitPage', ['$rootScope', function($rootScope){
		var factory = {};
		
		factory.initEmpresa = function() {
					
		}

		factory.initCliente = function() {
					
		}

		factory.initFornecedor = function() {
					
		}

		factory.initTransportador = function() {
					
		}

		factory.initFilial = function() {
					
		}

		return factory;

	}]);
})();