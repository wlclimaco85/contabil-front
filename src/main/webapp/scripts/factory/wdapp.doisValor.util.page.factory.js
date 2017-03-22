(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.doisValores', []);

	commonAuth.factory('doisValorPageFactory', ['$rootScope', function($rootScope){
		return{
				//County Object
				insert 		: function(oObject) {
	                SysMgmtData.processPostPageData("main/api/request", {
	                    url: "entidade/api/doisValores/insert",
	                    token: $rootScope.authToken,
	                    request: new qat.model.reqDoisValor(oObject, true, true)
	                }, function(res) {
	                	if(res.operationSuccess == true){
		                    toastr.success('Deu Certo seu tanga.', 'Sucess');
		                  }
		                  else
		                  {
		                     toastr.error('County form error, please correct and resubmit.', 'Error');
		                  }
	                });
				},
				fetch 		: function(_pageId,_typeId) {

	                SysMgmtData.processPostPageData("main/api/request", {
	                    url: "entidade/api/doisValores/fetchPage",
	                    token: $rootScope.authToken,
	                    request: new qat.model.doisValorInquiryRequest(_pageId,_typeId, true, true)
	                }, function(res) {
	                	if(res.operationSuccess == true){
		                    toastr.success('Deu Certo seu tanga.', 'Sucess');
		                  }
		                  else
		                  {
		                     toastr.error('County form error, please correct and resubmit.', 'Error');
		                  }
	                });
				},
				update 		: function() {
	                SysMgmtData.processPostPageData("main/api/request", {
	                    url: "entidade/api/doisValores/insert",
	                    token: $rootScope.authToken,
	                    request: new qat.model.reqDoisValor(oObject, true, true)
	                }, function(res) {
	                	if(res.operationSuccess == true){
		                    toastr.success('Deu Certo seu tanga.', 'Sucess');
		                  }
		                  else
		                  {
		                     toastr.error('County form error, please correct and resubmit.', 'Error');
		                  }
	                });
				},
				delete 		: function() {
	                SysMgmtData.processPostPageData("main/api/request", {
	                    url: "entidade/api/doisValores/insert",
	                    token: $rootScope.authToken,
	                    request: new qat.model.reqDoisValor(oObject, true, true)
	                }, function(res) {
	                	if(res.operationSuccess == true){
		                    toastr.success('Deu Certo seu tanga.', 'Sucess');
		                  }
		                  else
		                  {
		                     toastr.error('County form error, please correct and resubmit.', 'Error');
		                  }
	                });
				},
				view 		: function(scope) {},
				dialog 		: function(scope) {},
			};
	}]);
})();