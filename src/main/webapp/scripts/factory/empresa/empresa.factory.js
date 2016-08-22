(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCallEmpresa', []);

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

             // socios
            count = 0;
            bb = [];
            $('.socios').each(function() {
                if($(this).find('.nome-socio').val() !="")
                {
                    bb.push(fnSocios($(this).find('.nome-socio').val(),$(this).find('.cpf-socio').val(),$(this).find('.cota-socio').val(),$(this).find('.check-socio').is(":checked")));
                    count = count + 1;
                }
            });
            $scope.empresa.socios = bb;

            //plano
            count = 0;
            bb = [];
            $('.planos').each(function()
            {
                if($(this).find('.plano').is(":checked") == true)
                {
                    bb.push(fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            $scope.empresa.planoByEmpresaList = bb;

            //Servico
            count = 0;
            bb = [];
            $('.planos').each(function()
            {
                if($(this).find('.Servico').is(":checked") == true)
                {
                    bb.push(fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            $scope.empresa.planoByEmpresaList = bb;

            //Usuario
            count = 0;
            bb = [];
            $('.usuario').each(function()
            {
                if($(this).find('.Servico').is(":checked") == true)
                {
                    bb.push(fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            $scope.empresa.usuarioList = bb;

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


