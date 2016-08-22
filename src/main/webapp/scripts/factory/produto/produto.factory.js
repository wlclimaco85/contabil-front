(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.produto', []);

	commonAuth.factory('fProduto', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,telefone,email,action,url,callBack){

            console.log(empresa);
            empresa.enderecos[0] = fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action);
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnTelefones($(this).val(),count,1,action),action));
                    count = count + 1;
                }
            });
            empresa.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.input-email').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnEmails($(this).val(),count,1,action),action));
                    count = count + 1;
                }
            });

            empresa.emails = bb;


            var oObject = fModels.amont($scope.empresa,action);

                SysMgmtData.processPostPageData("main/api/request", {
                    url: url,
                    token: $rootScope.authToken,
                    request: new qat.model.reqCliente(oObject, true, true)
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


