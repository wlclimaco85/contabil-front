(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory','validationFactory' ,function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory,validationFactory){
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
            if(telefones[x].telefone == undefined || telefones[x].telefone == undefined )
            {

                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"DELETE"),"DELETE"));
                }
                delete telefones[x].telefone
            }
            else
            {
                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"UPDATE"),"UPDATE"));
                }
                else
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"INSERT"),"INSERT"));
                }

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

            if(email == undefined || email == undefined )
            {

                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"DELETE"),"DELETE"));
                }
                delete emails[x].email;
            }
            else
            {
                if((email.id != null)&&(email.id != undefined))
                {
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

      //cria instancia endereco
				try { 
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

        scope.cliente = {
          pessoaTipos: [
            {
              pessoaTypeEnum: 'CLIENTE',
              label: 'Cliente'
            },
            {
              pessoaTypeEnum: 'FORNECEDOR',
              label: 'Fornecedor'
            },
            {
              pessoaTypeEnum: 'TRANSPORTADOR',
              label: 'Transportador'
            },
            {
              pessoaTypeEnum: 'CONSFINAL',
              label: 'Consumidor Final'
            }]
        }

      scope.changes = function ($event, id) {
        var checkbox = $event.target
        if (checkbox.checked) {
          scope.empresa.pessoaTipo.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum, 'INSERT', 'System'))
        }else {
          for (x = 0; x < scope.empresa.pessoaTipo.length; x++) {
            if (scope.empresa.pessoaTipo[x].pessoaTypeEnum == id.pessoaTypeEnum) {
              scope.empresa.pessoaTipo.splice(x, 1)
            }
          }
        //  scope.empresa.pessoaTipo.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
        }
        console.log(scope.empresa.pessoaTipo)
      }

      // Endereço
      scope.enderecos = []
      scope.enderecos[0] = {
        bairro: '',
        complemento: '',
        codIbge: '',
        cidade: {},
        logradouro: ''
      }

      var callbackEstado = function (res) {
        if (res.operationSuccess == true) {
          scope.estados = res.estadoList
        }
      }

      var callbackCidade = function (res) {
        if (res.operationSuccess == true) {
          scope.cidades = res.cidadeList
        }
      }

      doisValorFactory.empresa(scope)

      qat.model.select.anonimo('cadastros/api/estado/fetchPage', true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado)

      scope.countrySelected = function (selected) {
        if (selected) {
          qat.model.select.anonimo('cadastros/api/cidade/fetchPage', true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade)
        }
      }

      scope.buscaRCep = function (_cepValue) {
        var cepValue = _cepValue
        var formatedCep

        $.getJSON('//viacep.com.br/ws/' + _cepValue + '/json/?callback=?', function (res) {

          scope.enderecos[0].bairro = res.bairro
          scope.enderecos[0].complemento = res.complemento
          scope.enderecos[0].codIbge = res.ibge
          scope.enderecos[0].cidade = {
            nome: res.localidade,
            estado: {
              abreviacao: res.uf
            }
          }
          scope.enderecos[0].logradouro = res.logradouro
        })
      }
      // ========================================

      // ============== Validation ====================
      scope.validationCPF = function(tipo, value)
			{
				if (value && tipo == 1)
				{
					validationFactory.cpf(value);
				}
        else
          return true;
          
			}

			scope.validationCNPJ = function(tipo, cnpj)
			{

	/*			if (tipo && tipo == 2)
				{
					validationFactory.cnpj(cnpj);
				}
				else
				{
					return false;
				} */
        return false;
			}
			scope.validationInsEst = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return false
				}
			}
      scope.validationInsMun = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return false
				}
			}
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


