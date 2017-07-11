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
            if(empresa.documentos[x].numero == undefined || empresa.documentos[x].numero == undefined )
            {
                delete empresa.documentos[x]
            }
            else
            {
                if((empresa.documentos[x].id != null)&&(empresa.documentos[x].id != undefined))
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
         var telefonesAux = [];
         for(var x=0;x < telefones.length;x++)
         {
            if(telefones[x].telefone != undefined)
            {

                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"UPDATE"),"UPDATE"));
                }
            }
            else
            {
                telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"INSERT"),"INSERT"));
            }
         }
         empresa.telefones =[];
         empresa.telefones = telefonesAux;

         //==================EMAIL==================================
         var emailsAux = [];
         var email = {};
         for(var x=0;x < emails.length;x++)
         {
            email = emails[x].email;
            if(email != undefined)
            {
                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"UPDATE"),"UPDATE"));
                }
            }
            else
            {
                emailsAux.push(fModels.amont(qat.model.fnEmails(email,"INSERT"),"INSERT"));
            }

        }
        empresa.emails =[];
        empresa.emails = emailsAux;
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

    factory.fnTableCliente = function() {
            //..
        }

	factory.fnOpenView = function(vm,scope) {

        fEndereco.fnMontaEnderecoEmpresa(vm,scope);
        fDocumento.fnMontaDocumentosEmpresa(vm,scope);
        fTelefone.fnMontaTelefones(vm,scope);
        fEmail.fnMontaEmails(vm,scope);
        fDatas.fnMontaDatas(vm,scope);

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
*/
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

        scope.changes = function ($event, id) {
          var checkbox = $event.target;
          var bValid = true;
          for (x = 0; x < scope.cliente.pessoaTipos.length; x++) {
              if(scope.cliente.pessoaTipos == id.pessoaTypeEnum)
              {
                bValid = false;
              }
          }
          if (checkbox.checked && bValid) {
              for (x = 0; x < scope.cliente.pessoaTipos.length; x++) {
                scope.cliente.pessoaTipos.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum, 'INSERT', 'System'))
              }
          }else {
            for (x = 0; x < scope.cliente.pessoaTipos.length; x++) {
              if (scope.cliente.pessoaTipos[x].pessoaTypeEnum == id.pessoaTypeEnum) {
                scope.cliente.pessoaTipos.splice(x, 1)
              }
            }
          //  scope.empresa.pessoaTipos.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
          }
          console.log(scope.cliente.pessoaTipos)
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


