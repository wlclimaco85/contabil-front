(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.titulo', []);

	commonAuth.factory('fTitulo', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory','validationFactory','fEndereco','fDocumento','fTelefone','fEmail','fDatas' ,'$log',function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory,validationFactory,fEndereco,fDocumento,fTelefone,fEmail,fDatas,$log){
		var factory = {};
//fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
	factory.fnMontaAgencia = function(scope,vm,action,url,fnCallBack){

        scope.agencia = { numeroConta : []}
        scope.enderecos = [];
        scope.telefones = [];
        scope.emails = [];
        scope.telefones.push({numero : "",telefoneTypeEnum : "CELULAR"});
        scope.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});

        if(scope.agencia.numeroConta && scope.agencia.numeroConta.length > 0)
        {
            console.log("teste")
        }
        else
        {
            scope.agencia.numeroConta.push({});
        }

        fEndereco.fnMontaEnderecoEmpresa(vm,scope);
        fTelefone.fnMontaTelefones(vm,scope);
        fEmail.fnMontaEmails(vm,scope);
        fDatas.fnMontaDatas(vm,scope);

        var fnCallbackBanco = function(res){
            var planos = "";

        if(res.operationSuccess == true)
        {
                scope.banco = res.bancoList
        }
        }
        qat.model.select.util("financeiro/api/banco/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackBanco);
        
        var fnCallbackConta = function(res){
            if(res.operationSuccess == true)
            {
                    scope.contaC = res.bancoList
            }
        }
        qat.model.select.util("financeiro/api/conta/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackConta);
       
        var fnFunctionCallbacks = function (res)
        {
            scope.tipoConta = [];
            if(res.operationSuccess == true)
            {
                for(var x=0;x<res.doisValoresList.length;x++)
                {
                    var planos = res.doisValoresList[x] ;
                    if(planos.doisValorType != null)
                    {
                        switch (planos.doisValorType.tipo)
                        {
                            case 'TIPO CONTA':
                                scope.tipoConta.push(planos);
                                break;
                        }
                    }
                }
            }
            console.log(res);
        }

        doisValorFactory.financeiro(102,scope,fnFunctionCallbacks);

        scope.saveAgencia = function() {
            debugger
            //=================== ENDERECO
            scope.agencia.enderecos =[];
            scope.agencia.enderecos.push(fModels.amont(qat.model.fnEndereco(scope.enderecos[0],action,$rootScope.user.user),action));

            //==================Telefone==================================
            var telefonesAux = [];
            for(var x=0;x < scope.telefones.length;x++)
            {
                if((scope.telefones[x])&&(scope.telefones[x].id))
                {
                    if(scope.telefones[x].modelAction == "DELETE")
                        telefonesAux.push(fModels.amont(qat.model.fnTelefones(scope.telefones[x],"DELETE"),"DELETE"));
                    else
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(scope.telefones[x],"UPDATE"),"UPDATE"));
                }
                else
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(scope.telefones[x],"INSERT"),"INSERT"));
                }
            }
            scope.agencia.telefones =[];
            scope.agencia.telefones = telefonesAux;

            //==================EMAIL==================================
            var emailsAux = [];
            var email = {};
            for(var x=0;x < scope.emails.length;x++)
            {
                email = scope.emails[x];
                if(email.email && email.email.trim() != "")
                {
                    if((email) && (email.id))
                    {
                        if(email.modelAction == "DELETE")
                            emailsAux.push(fModels.amont(qat.model.fnEmails(email,"DELETE"),"DELETE"));
                        else
                            emailsAux.push(fModels.amont(qat.model.fnEmails(email,"UPDATE"),"UPDATE"));
                    }
                    else
                    {
                        emailsAux.push(fModels.amont(qat.model.fnEmails(email,"INSERT"),"INSERT"));
                    }
                }

            }
            scope.agencia.emails =[];
            scope.agencia.emails = emailsAux;
            var oObject = fModels.amont(scope.agencia,action);
            var _oObject = new qat.model.Agencia(oObject, action,$rootScope.user.user,$log);

            SysMgmtData.processPostPageData("main/api/request", {
                url: url,
                token: $rootScope.authToken,
                request: new qat.model.reqAgencia(_oObject, true, true)
            }, function(res) {
                if(fnCallBack)
                    fnCallBack(res);
            });  
        };
        
    }
	factory.fnDelete = function() {
			//..
		}

    factory.fnTableCliente = function() {
            //..
        }

	factory.fnOpenView = function(vm,scope) {

        if((!scope.documentos)&&(scope.documentos.length == 0))
        {
               fDocumentos.fnInitDocumentos(vm,$scope);
        }

        fEndereco.fnMontaEnderecoEmpresa(vm,scope);
        fDocumento.fnMontaDocumentosEmpresa(vm,scope);
        fTelefone.fnMontaTelefones(vm,scope);
        fEmail.fnMontaEmails(vm,scope);
        fDatas.fnMontaDatas(vm,scope);
        validationFactory.empresa(vm,scope);

      //cria instancia endereco fEndereco,fDocumento,fTelefone,fEmail,fDatas

     /*   try {
            fEndereco.fnMontaEnderecoEmpresa(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar endereço");
        }
        finally {
            $log.warn("Inicializando endereço");
        }


        //cria instancia documentos
        try {
            fDocumento.fnMontaDocumentosEmpresa(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar documentos -> " + err);
        }
        finally {
            $log.warn("Inicializando documentos");
        }


        //CRIA INSTANCIA TELEFONE
        try {
            fTelefone.fnMontaTelefones(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar telefone -> " + err);
        }
        finally {
            $log.warn("Inicializando telefone");
        }

        //CRIA INSTANCIA EMAIL
        try {
            fEmail.fnMontaEmails(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar emails -> " + err);
        }
        finally {
            $log.warn("Inicializando emails");
        }

        //Datas
        try {
            fDatas.fnMontaDatas(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar datas -> " + err);
        }
        finally {
            $log.warn("Inicializando datas");
        }

        //Validation
        try {
            validationFactory.empresa(vm,scope);
        }
        catch(err) {
            $log.error("Erro ao instanciar Validação -> " + err);
        }
        finally {
            $log.warn("Inicializando Validaçoes");
        }
*/
        scope.changes = function ($event, id) {
          var checkbox = $event.target;
          var bValid = true;
          for (x = 0; x < scope.cliente.pessoaTipo.length; x++) {
              if(scope.cliente.pessoaTipo == id.pessoaTypeEnum)
              {
                bValid = false;
              }
          }
          if (checkbox.checked && bValid) {
              for (x = 0; x < scope.cliente.pessoaTipo.length; x++) {
                scope.cliente.pessoaTipo.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum, 'INSERT', 'System'))
              }
          }else {
            for (x = 0; x < scope.cliente.pessoaTipo.length; x++) {
              if (scope.cliente.pessoaTipo[x].pessoaTypeEnum == id.pessoaTypeEnum) {
                scope.cliente.pessoaTipo.splice(x, 1)
              }
            }
          //  scope.empresa.pessoaTipos.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
          }
          console.log(scope.cliente.pessoaTipo)
        }

      doisValorFactory.empresa(scope)

     // ===========================================

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


