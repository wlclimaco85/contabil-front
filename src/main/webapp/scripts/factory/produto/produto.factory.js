(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.produto', []);

	commonAuth.factory('fProduto', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(produto,tributacao,produtoEmpresa,action,url,callBack){

            produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,action,$rootScope.user.user),action);

            produtoEmpresa.tributacao = fModels.amont(qat.model.fnTributacao(tributacao,action,$rootScope.user.user),action);


            var oObject = fModels.amont(produtoEmpresa,action);

                SysMgmtData.processPostPageData("main/api/request", {
                    url: url,
                    token: $rootScope.authToken,
                    request: new qat.model.reqProduto(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
        }

	factory.fnDelete = function() {
			//..
		}

	factory.fnOpenView = function() {
			//..
		}

    factory.fnInitProduto = function() {
            //..
    }

	return factory;
	}]);
})();


