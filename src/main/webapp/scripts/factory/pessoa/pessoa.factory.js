(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory','validationFactory','fEndereco','fDocumento','fTelefone','fEmail','fDatas' ,'$log',function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory,validationFactory,fEndereco,fDocumento,fTelefone,fEmail,fDatas,$log){
		var factory = {};
//fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
	factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,action,url,callBack){

         //===============Documentos====================

         var documentos = [];
         for(var x=0;x < empresa.documentos.length;x++)
         {
            if((empresa.documentos[x].numero)&&(empresa.documentos[x].numero != ""))
            {
                if((empresa.documentos[x]) && (empresa.documentos[x].id))
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"UPDATE",$rootScope.user.user),"UPDATE"));
                }
                else
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"INSERT",$rootScope.user.user),"INSERT"));
                }
            }
         }
         empresa.documentos =[];
         empresa.documentos = documentos;

         //=================== ENDERECO
         empresa.enderecos =[];
         empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));

         //==================Telefone==================================
         //debugger
         var telefonesAux = [];
         for(var x=0;x < telefones.length;x++)
         {
            if((telefones[x])&&(telefones[x].id))
            {
                if(telefones[x].modelAction == "DELETE")
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x],"DELETE"),"DELETE"));
                else
                   telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x],"UPDATE"),"UPDATE"));
            }
            else
            {
                telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x],"INSERT"),"INSERT"));
            }
         }
         empresa.telefones =[];
         empresa.telefones = telefonesAux;

         //==================EMAIL==================================
         var emailsAux = [];
         var email = {};
         for(var x=0;x < emails.length;x++)
         {
            email = emails[x];
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
        empresa.emails =[];
        empresa.emails = emailsAux;

        var oObject = fModels.amont(empresa,action);
        var _oObject = new qat.model.Cliente(oObject, action,$rootScope.user.user,$log);

            SysMgmtData.processPostPageData("main/api/request", {
                url: url,
                token: $rootScope.authToken,
                request: new qat.model.reqCliente(_oObject, true, true)
            }, function(res) {
                callBack(res);
            });
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


