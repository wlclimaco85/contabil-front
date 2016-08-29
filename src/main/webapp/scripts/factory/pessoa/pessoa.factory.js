(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,action,url,callBack){

         //   debugger
         var  ggg = []
         var  ggg = empresa.documentos
         empresa.documentos = [];
          var  count = ggg.length
            for (var a = 0 ; a < count ;a++)
            {
                if(ggg[a] == undefined || ggg[a].numero == undefined )
                {
                    delete ggg[a]
                }else{
                    empresa.documentos.push(ggg[a])
                }
            } 

            empresa.enderecos =[];
            empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnTelefones($(this).val(),null,1,action),action));
                    count = count + 1;
                }
            });
            empresa.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.emails:visible').each(function() {
                if($(this).find('.input-email').val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnEmails($(this).find('.input-email').val(),$(this).find('.input-id').val(),1,action),action));
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

    factory.fnMontObject = function(_object,enderecos,action) {
            _object.enderecos =[];
            _object.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnTelefones($(this).val(),null,1,action),action));
                    count = count + 1;
                }
            });
            _object.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.emails:visible').each(function() {
                if($(this).find('.input-email').val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnEmails($(this).find('.input-email').val(),$(this).find('.input-id').val(),1,action),action));
                    count = count + 1;
                }
            });

            _object.emails = bb;

            return _object;
        }

	return factory;
	}]);
})();


