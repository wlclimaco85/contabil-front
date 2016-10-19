(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.table.ajax', ['angularModalService']);

	commonAuth.factory('tableAjaxsFactory', ['ModalService', function(ModalService){
		return{
				//County Object
				cliente : function(_url,_controller, _callback) {
					var fnDataSRC = function(json) {
			            console.log(json)
			            json['recordsTotal'] = json.clienteList.length
			            json['recordsFiltered'] = json.clienteList.length
			            json['draw'] = 1
			            console.log(json)
			            return json.clienteList;
			        }
				    return fnDataSRC;
				}
			};
	}]);
})();