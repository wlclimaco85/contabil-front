(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.filters', ['angularModalService']);

	commonAuth.factory('FiltersFactory', ['ModalService', function(ModalService){
		return{
				//County Object
				categoria : function() {
				},
				uniMed : function() {
				},
				cfop : function() {
				},
				cliente : function() {
					return [{
                                type: 'number'
                            }, {
                                type: 'number',
                            }, {
                                type: 'select',
                                values: ['Entrada', 'Saida']
                            }, {
                                type: 'text'
                            }, {
                                type: 'text'
                            }, {
                                type: 'text'
                            }];
				}
			};
	}]);
})();