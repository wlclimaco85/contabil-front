(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,action,url,callBack){

         //   debugger
            console.log(empresa);
            empresa.enderecos =[];
            empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
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


            var oObject = fModels.amont(empresa,action);

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

	return factory;
	}]);
})();


