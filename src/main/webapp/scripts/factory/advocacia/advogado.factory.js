(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.advogado', []);
	commonAuth.factory('fAdvogado', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory', 'validationFactory', 'fEndereco', 'fDocumento', 'fTelefone', 'fEmail',
		'fDatas', '$log',
		function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory, validationFactory, fEndereco, fDocumento, fTelefone, fEmail, fDatas, $log)
		{
			var factory = {};

			factory.fnMontaObjeto = function(advogado, action, url, callBack) {
debugger
				 //===============Documentos====================

				 var documentos = [];
				 for(var x=0;x < advogado.documentos.length;x++)
				 {
					if((advogado.documentos[x].numero)&&(advogado.documentos[x].numero != ""))
					{
						if((advogado.documentos[x]) && (advogado.documentos[x].id))
						{
							documentos.push(fModels.amont(qat.model.fnDocumento(advogado.documentos[x],"UPDATE",$rootScope.user.user),"UPDATE"));
						}
						else
						{
							documentos.push(fModels.amont(qat.model.fnDocumento(advogado.documentos[x],"INSERT",$rootScope.user.user),"INSERT"));
						}
					}
				 }
				 advogado.documentos =[];
				 advogado.documentos = documentos;

				 //=================== ENDERECO
				 advogado.enderecos =[];
				 advogado.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));

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
				 advogado.telefones =[];
				 advogado.telefones = telefonesAux;

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
				advogado.emails =[];
				advogado.emails = emailsAux;

				var oObject = fModels.amont(advogado,action);
				var _oObject = new qat.model.Advogado(oObject, action,$rootScope.user.user,$log);

				SysMgmtData.processPostPageData("main/api/request", {
					url: url,
					token: $rootScope.authToken,
					request: new qat.model.reqAdvogado(_oObject, true, true)
				}, function(res) {
					callBack(res);
				});

			}
			factory.fnCreateMock = function(scope)
			{
				scope.advogado.nome = "Nome",
				scope.advogado.codigo = "0000001",
				scope.advogado.razao= "Razao",
				scope.advogado.nomePai = "Nome Pai",
				scope.advogado.nomeMae = "Nome Mae",
				scope.advogado.nomeConjugue = "Nome Conjugue",
				scope.advogado.estadoCivil = 1
				scope.advogado.datanasc = (new Date()).getTime();
				scope.advogado.tipoPessoa = 1,
				scope.advogado.foto = null,
				scope.advogado.sexo = 1;
				scope.advogado.datanasc = (new Date()).getTime();
				scope.enderecos = [{
					codIbge : "codIbge",
					pais : {id:10},
					logradouro : "logradouro",
					bairro : "bairro",
					numero : "numero",
					enderecoTypeValue : 1,
					cep : "38082243",
					latitude : "latitude",
					longitude : "longitude",
					complemento : "complemento",
					cidade : {id : 100,estado:{id:20}},
					emprId : 4595,
					modelAction : "INSERT",
					createUser : "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser : "system",
					modifyDateUTC : (new Date()).getTime()
				}];
				scope.advogado.documentos = [{
					documentoTypeEnumValue : 2,
					numero : "05790167659",
					data : (new Date()).getTime(),
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					documentoTypeEnumValue : 4,
					numero : "MG13087049",
					data : (new Date()).getTime(),
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				}],
				scope.emails = [{
					typeValue : 1,
					email : "email@gmail.com",
					emailTypeEnumValue : 1,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					typeValue : 2,
					email : "email@gma666.com",
					emailTypeEnumValue : 2,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					typeValue : 3,
					email : "ema66666l@gmail.com",
					emailTypeEnumValue : 3,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				}],
				scope.telefones = [{
					typeValue : 1,
					ddd : "34",
					numero : "999999999999",
					telefoneTypeEnumValue : 1,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					typeValue : 1,
					ddd : "34",
					numero : "999999999999",
					telefoneTypeEnumValue : 1,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					typeValue : 1,
					ddd : "34",
					numero : "999999999999",
					telefoneTypeEnumValue : 1,
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				}],
				scope.advogado.bancos = null;
				scope.advogado.formaPagamentoList = null;
				scope.advogado.condPagList = null;
				scope.advogado.contatoList = null;
				scope.advogado.tempoAtendimento = 3600000,
				scope.advogado.oab = "388888888888",
				scope.advogado.mediaAtendimento = 3600000,
				scope.advogado.maxAtendimento = 8,
				scope.advogado.maxEncaixe = 2,
				scope.advogado.estado = {id:1},
				scope.advogado.tipoOab = {id:1000},
				scope.advogado.horasTrabalhos = [{
					dia : [1,2,3],
					horaInicio : "07:40",
					horaFinal : "10:40",
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				},{
					dia : [1,2,3,4,5],
					horaInicio : "12:40",
					horaFinal : "17:40",
					emprId : 4595,
					modelAction : "INSERT",
					createUser :  "system",
					createDateUTC : (new Date()).getTime(),
					modifyUser :  "system",
					modifyDateUTC : (new Date()).getTime()
				}
			],
				scope.advogado.grupoTrabalho = [{id:100},{id:101},{id:102}];
				scope.advogado.especialidades = [{id:1},{id:2},{id:3}];
				scope.advogado.compromissos = null,
				scope.advogado.processos = null,
				scope.advogado.regime = {id:100};

			}

			factory.fnVerificaPrivacidade = function(oData)
			{
				if($rootScope.user.user === oData.createUser)
				{
					return true;
				}
				//work
				else if(oData.advogadoList.indexOf($rootScope.user.user) !== -1)
				{
					return true;
				}
				else if(oData.usuariosRestricaoProc.indexOf($rootScope.user.user) !== -1)
				{

				}
				else if(!oData.senha && !oData.grupoTrabalho)
				{
					return true;
				}
				else
				{
					//work
					for(var x = 0 ; x < oData.grupoTrabalho.length;x++)
					{

					}
					return false;
				}
			}

			factory.fnDelete = function()
			{
				//..
			}

			factory.fnTableCliente = function()
			{
				//..
			}

			factory.fnOpenView = function(vm, scope)
			{

				fDatas.fnMontaDatas(vm,scope);
				fEndereco.fnMontaEnderecoEmpresa(vm,scope);
				fDocumento.fnMontaDocumentosEmpresa(vm,scope);
				fTelefone.fnMontaTelefones(vm,scope);
				fEmail.fnMontaEmails(vm,scope);
				fDatas.fnMontaDatas(vm,scope);
				validationFactory.empresa(vm,scope);

				scope.advogado = {};
				scope.advogado.horasTrabalhos = [];
				scope.advogado.horasTrabalhos.push({});

				scope.advogado.advogados = [];
				scope.advogado.telefones = [];
				scope.advogado.advogados.push({});
				scope.advogado.documentos = [];
				scope.advogado.enderecos = [];
				scope.advogado.emails = [];

				scope.documentos = [];
				scope.enderecos = [];
				scope.telefones = [];
				scope.emails = [];
				scope.telefones.push({numero : "",telefoneTypeEnum : "CELULAR"});
				scope.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
				scope.advogado.tipoPessoa = 1;

				scope.advogado.telefones.push({numero : "",telefoneTypeEnum : "CELULAR"});
				scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});

				scope.createForm = function(type){
					scope.advogado.horasTrabalhos.push({});
				};

				scope.deleteForm = function(type){
					scope.advogado.horasTrabalhos.push({});
				};

                doisValorFactory.advogado(scope);

                //Usuarios
                qat.model.select.util('entidade/api/estado/fetchPage', true, new qat.model.empresaInquiryRequest(null, 100 / 20, true),
                function(oResp){
                    scope.usuarioList = oResp.usuarioList;
                })
                //Grupos
                qat.model.select.util('entidade/api/doisValores/fetchPage', true, new qat.model.doisValoresInquiryRequest(null, 100 / 20, true, JSON.parse(localStorage.getItem('empresa')).id,152),
                function(oResp){
                    scope.grupoTrabalhoList = oResp.doisValoresList;
                })

			}



			return factory;
	}]);
})();
