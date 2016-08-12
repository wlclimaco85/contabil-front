(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall', []);

	commonAuth.factory('fEmpresa', ['$rootScope', function($rootScope){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,action){

            console.log(empresa);
            empresa.enderecos[0] = qat.model.fnEndereco(enderecos[0],"INSERT",$rootScope.user.user);
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnTelefones($(this).val(),count,1,"INSERT"));
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
                    bb.push(qat.model.fnEmails($(this).val(),count,1,"INSERT"));
                    count = count + 1;
                }
            });
            empresa.emails = bb;


            // cnae
            count = 0;
            bb = [];
            $('.cnaeList').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnCnaeEmpresa({idCnae : qat.model.fnCnae({id :$(this).val(),modelAction :"NONE"})}));
                    count = count + 1;
                }
            });
            empresa.cnaes = bb;

            return empresa;
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


