(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.empresa', []);

	commonAuth.factory('fEmpresa', ['$rootScope', function($rootScope){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,action){

            console.log(empresa);
            debugger
            empresa.enderecos[0] = qat.model.fnEndereco(enderecos[0],"INSERT",$rootScope.user.user);
            var count = 0;
            var bb = [];



            // email
            count = 0;
            bb = [];
            $('.input-email').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnEmails($(this).val(),null,1,"INSERT"));
                    count = count + 1;
                }
            });
            empresa.emails = bb;


             // socios
            count = 0;
            bb = [];
            $('.socios').each(function() {
                if($(this).find('.nome-socio').val() !="")
                {   
                    var a = 0
                    if($(this).find('.check-socio').is(":checked"))
                    {
                        a = 1
                    }
                    //cota,_por,_adm,_nome,_cpf,id,type,modelAction
                    bb.push(qat.model.fnSocios("",$(this).find('.cota-socio').val(),a,$(this).find('.nome-socio').val(),$(this).find('.cpf-socio').val(),"","",'INSERT'));
                    count = count + 1;
                }
            });
            empresa.socios = bb;

            //plano
            count = 0;
            bb = [];
            $('.planos').each(function()
            {
                debugger
                if($(this).find('.plano').is(":checked") == true)
                {   //_id,_Valor,_planoServicoId,_type,_modelAction
                    bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            $('.planos').each(function()
            {
                if($(this).find('.Servico').is(":checked") == true)
                {debugger
                    bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            empresa.planosServicos = bb;


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


