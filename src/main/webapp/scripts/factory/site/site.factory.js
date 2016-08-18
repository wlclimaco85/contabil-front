(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall', []);

	commonAuth.factory('fSite', ['$rootScope','datatables',  'datatables.buttons', 'datatables.light-columnfilter', function($rootScope, DTOptionsBuilder, DTColumnBuilder){
		var factory = {};

	   factory.fnFillTableSite = function(empresa,enderecos,action){


        }

	factory.method1 = function() {
			//..
		}

	factory.method2 = function() {
			//..
		}

	return factory;
	}]);
})();


