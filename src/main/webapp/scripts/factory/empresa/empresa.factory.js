(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.empresa', []);

	commonAuth.factory('fEmpresa', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', function($rootScope, fModels, SysMgmtData, toastr, $log)
		{
			var factory = {};

			factory.fnMontaObjeto = function(empresa, enderecos, emails, telefones, cnaes, usuario, action, fnCallBack)
			{

				var initLoad = true; //used to ensure not calling server multiple times
				var user = "system";
				if (($rootScope.user != null) && ($rootScope.user != undefined))
				{
					user = $rootScope.user.user;
				}
				// socios
				var count = 0;
				var bb = [];
				$('.socios').each(function()
				{
					if ($(this).find('.nome-socio').val() != "")
					{
						var a = 0
						if ($(this).find('.check-socio').is(":checked"))
						{
							a = 1
						}
						//cota,_por,_adm,_nome,_cpf,id,type,modelAction
						bb.push(qat.model.fnSocios("", $(this).find('.cota-socio').val(), a, $(this).find('.nome-socio').val(), $(this).find('.cpf-socio').val(), "", "", action));
						count = count + 1;
					}
				});
				empresa.socios = bb;
				// empresa.socios = []

				//plano
				count = 0;
				var fValor = 0;
				bb = [];
				var oServicoAndPlano = [];
				var oPlanoByEmpresa = {
					numContrato: 0,
					valor: 0,
					dataInicio: (new Date()).getTime(),
					dataFim: null,
					planoServicoList: null,
				}
				$('.planos').each(function()
				{

					if ($(this).find('.plano').is(":checked") == true)
					{ //_id,_Valor,_planoServicoId,_type,_modelAction
						oServicoAndPlano.push(
						{
							servicoPlanoEnum: 1,
							servicoList: null,
							planoList:
							{
								id: parseInt($(this).find('.plano-id').text())
							},
							valor: parseFloat($(this).find('.valor').text()).toFixed(2),
							modelAction: action,
							tableEnumValue: 53,
							createUser: "System",
							createDateUTC: (new Date()).getTime(),
							modifyUser: "System",
							modifyDateUTC: (new Date()).getTime()
						})
						fValor = fValor + parseFloat($(this).find('.valor').text()).toFixed(2);
						//  bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
						count = count + 1;
					}
				});
				$('.planos').each(function()
				{
					if ($(this).find('.Servico').is(":checked") == true)
					{
						oServicoAndPlano.push(
						{
							servicoPlanoEnum: 2,
							servicoList:
							{
								id: parseInt($(this).find('.plano-id').text(), 10)
							},
							planoList: null,
							valor: parseFloat($(this).find('.valor').text()).toFixed(2),
							modelAction: action,
							tableEnumValue: 53,
							createUser: "System",
							createDateUTC: (new Date()).getTime(),
							modifyUser: "System",
							modifyDateUTC: (new Date()).getTime()
						})

						//bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
						count = count + 1;
					}
				}); //(_Valor,_planoServicoId,_type,_modelAction)
				debugger
				oPlanoByEmpresa.planoServicoList = oServicoAndPlano;
				oPlanoByEmpresa.valor = parseFloat(parseFloat($('#total-plano').text()).toFixed(2));
				empresa.planosServicos = qat.model.fnServicoAndPlano(oPlanoByEmpresa, action);
				// empresa.planosServicos = {}


				//===============Documentos====================
				var documentos = [];
				for (var x = 0; x < empresa.documentos.length; x++)
				{
					if (empresa.documentos[x].numero == undefined || empresa.documentos[x].numero == undefined)
					{
						delete empresa.documentos[x]
					}
					else
					{
						if ((empresa.documentos[x].id != null) && (empresa.documentos[x].id != undefined))
						{
							documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x], "UPDATE", user), "UPDATE"));
						}
						else
						{
							documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x], "INSERT", user), "INSERT"));
						}

					}

				}
				empresa.documentos = [];
				empresa.documentos = documentos;

				//=================== ENDERECO
				empresa.enderecos = [];
				empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0], action, user), action));

				//==================Telefone==================================
				var telefonesAux = [];
				for (var x = 0; x < telefones.length; x++)
				{
					if (telefones[x].telefone == undefined || telefones[x].telefone == undefined)
					{

						if ((telefones[x].telefone.id != null) && (telefones[x].telefone.id != undefined))
						{
							telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone, "DELETE"), "DELETE"));
						}
						delete telefones[x].telefone
					}
					else
					{
						if ((telefones[x].telefone.id != null) && (telefones[x].telefone.id != undefined))
						{
							telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone, "UPDATE"), "UPDATE"));
						}
						else
						{
							telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone, "INSERT"), "INSERT"));
						}

					}

				}
				empresa.telefones = [];
				empresa.telefones = telefonesAux;


				//==================cnae==================================
				var cnaesAux = [];
				for (var x = 0; x < cnaes.length; x++)
				{
					if (cnaes[x].cnae == undefined || cnaes[x].cnae == undefined)
					{

						if ((cnaes[x].cnae.id != null) && (cnaes[x].cnae.id != undefined))
						{
							cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae, "DELETE"), "DELETE"));
						}
						delete cnaes[x].cnae
					}
					else
					{
						if ((cnaes[x].cnae.id != null) && (cnaes[x].cnae.id != undefined))
						{
							cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae, "UPDATE"), "UPDATE"));
						}
						else
						{
							cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae, "INSERT"), "INSERT"));
						}

					}

				}

				empresa.cnaes = [];
				empresa.cnaes = cnaesAux;

				//==================EMAIL==================================
				var emailsAux = [];
				var email = {};
				for (var x = 0; x < emails.length; x++)
				{
					email = emails[x].email;

					if (email == undefined || email == undefined)
					{

						if ((email.id != null) && (email.id != undefined))
						{
							emailsAux.push(fModels.amont(qat.model.fnEmails(email, "DELETE"), "DELETE"));
						}
						delete emails[x].email;
					}
					else
					{
						if ((email.id != null) && (email.id != undefined))
						{
							emailsAux.push(fModels.amont(qat.model.fnEmails(email, "UPDATE"), "UPDATE"));
						}
						else
						{
							emailsAux.push(fModels.amont(qat.model.fnEmails(email, "INSERT"), "INSERT"));
						}

					}

				}
				empresa.emails = [];
				empresa.emails = emailsAux;



				var oUsuario = fModels.amont(qat.model.fnUsuario(usuario, "INSERT", "system"), "INSERT");
				oObject.usuarios = [];
				oObject.usuarios.push(oUsuario);
				debugger
				var oObject = fModels.amont(new qat.model.Empresa(empresa, "UPDATE", user), "INSERT");
				SysMgmtData.processPostPageData("main/api/anonimo",
				{
					url: "entidade/api/empresa" + WebDaptiveAppConfig.create_url,
					request: new qat.model.reqEmpr(oObject, true, true)
				}, function(res)
				{

					if (res.operationSuccess == true)
					{
						initLoad = true;
						toastr.success('Deu Certo seu tanga.', 'Sucess');
						fnCallBack(res);
						//$location.path("#/pages/signin");

					}
					else
					{
						toastr.error('County form error, please correct and resubmit.', 'Error');
					}

				});
			}
			factory.fnMontaObjeto2 = function(empresa, enderecos, emails, telefones, cnaes, action, fnCallBack)
			{

				var initLoad = true; //used to ensure not calling server multiple times
				var user = "system";
				if (($rootScope.user != null) && ($rootScope.user != undefined))
				{
					user = $rootScope.user.user;
				}
				// socios
				for (var x = 0; empresa.socios.length > x; x++)
				{
					empresa.socios[x] = new qat.model.fnSocios(empresa.socios[x], empresa.socios[x].id ? "UPDATE" : "INSERT", $rootScope.user.user, $log)
				}

				//==================Endereco==================================
				debugger
				var enderecoAux = [];
				for (var x = 0; x < empresa.enderecos.length; x++)
				{
					enderecoAux.push(qat.model.fnEndereco( empresa.enderecos[x],  empresa.enderecos[x].id ? "UPDATE" : "INSERT", user, $log));
				}
				empresa.enderecos = [];
				empresa.enderecos = enderecoAux;

				//==================Telefone==================================
				var telefonesAux = [];
				for (var x = 0; x < telefones.length; x++)
				{
					telefonesAux.push(qat.model.fnTelefones(telefones[x], telefones[x].id ? "UPDATE" : "INSERT", user, $log));
				}
				empresa.telefones = [];
				empresa.telefones = telefonesAux;


				//==================cnae==================================

				var cnaesAux = [];
				for (var x = 0; x < empresa.cnaes.length; x++)
				{
					cnaesAux.push(qat.model.fnCnaeEmpresa(empresa.cnaes[x], empresa.cnaes[x].id ? "UPDATE" : "INSERT", user, $log));
				}

				empresa.cnaes = [];
				empresa.cnaes = cnaesAux;

				//==================EMAIL==================================
				var emailsAux = [];
				var email = {};
				for (var x = 0; x < emails.length; x++)
				{
					emailsAux.push(qat.model.fnEmails(emails[x], emails[x].id ? "UPDATE" : "INSERT", user, $log));
				}
				empresa.emails = [];
				empresa.emails = emailsAux;

				//==================DOCUMENTOS==================================
				var oDocumentos = [];
				oDocumentos = empresa.documentos;
				empresa.documentos = [];
				for (var x = 0; oDocumentos.length > x; x++)
				{
					if (oDocumentos[x].numero && oDocumentos[x].numero != "" && oDocumentos[x].numero != " ")
						empresa.documentos.push(new qat.model.fnDocumento(oDocumentos[x], oDocumentos[x].id ? "UPDATE" : "INSERT", $rootScope.user.user, $log));
				}
				debugger
				//==================USUARIOS==================================
				var oUsuarios = [];
				oUsuarios = empresa.usuarios;
				empresa.usuarios = [];
				for (var x = 0; oUsuarios.length > x; x++)
				{
					empresa.usuarios.push(new qat.model.fnUsuario(oUsuarios[x], oUsuarios[x].id ? "UPDATE" : "INSERT", $rootScope.user.user, $log));
				}
				debugger
				empresa.dtAbertura = (empresa.dtAbertura);
				var oObject = fModels.amont(new qat.model.Empresa(empresa, "UPDATE", user, $log), "UPDATE");
				SysMgmtData.processPostPageData("main/api/anonimo",
				{
					url: "entidade/api/empresa" + WebDaptiveAppConfig.update_url,
					request: new qat.model.reqEmpr(oObject, true, true)
				}, function(res)
				{

					if (res.operationSuccess == true)
					{
						initLoad = true;
						toastr.success('Deu Certo seu tanga.', 'Sucess');
						fnCallBack(res);
						//$location.path("#/pages/signin");

					}


				});
			}

			factory.fnMontaObjeto3 = function(empresa, enderecos, emails, telefones, cnaes, action, fnCallBack)
			{
				debugger
				var $window;
				$window = $(window);

				var initLoad = true; //used to ensure not calling server multiple times
				var user = "system";
				if (($rootScope.user != null) && ($rootScope.user != undefined))
				{
					user = $rootScope.user.user;
				}
				// socios
				if (empresa.socios)
				{
					for (var x = 0; empresa.socios.length > x; x++)
					{
						empresa.socios[x] = new qat.model.fnSocios(empresa.socios[x], empresa.socios[x].id ? "UPDATE" : "INSERT", $rootScope.user.user, $log)
					}
				}
				//==================Telefone==================================
				var telefonesAux = [];
				if (empresa.telefones)
				{
					if (empresa.telefones.length)
					{
						for (var x = 0; x < empresa.telefones.length; x++)
						{
							telefonesAux.push(qat.model.fnTelefones(empresa.telefones[x], empresa.telefones[x].id ? "UPDATE" : "INSERT", user, $log));
						}

					}
					else
					{
						for (var prop in empresa.telefones)
						{
							if (empresa.telefones.hasOwnProperty(prop))
							{
								telefonesAux.push(qat.model.fnTelefones(empresa.telefones[prop], empresa.telefones[prop].id ? "UPDATE" : "INSERT", user, $log));
							}
						}
					}
					empresa.telefones = [];
					empresa.telefones = telefonesAux;
				}

				//==================cnae==================================

				var cnaesAux = [];
				if (empresa.cnaes)
				{
					for (var x = 0; x < empresa.cnaes.length; x++)
					{
						cnaesAux.push(qat.model.fnCnaeEmpresa(empresa.cnaes[x], empresa.cnaes[x].id ? "UPDATE" : "INSERT", user, $log));
					}

					empresa.cnaes = [];
					empresa.cnaes = cnaesAux;
				}
				//==================EMAIL==================================
				var emailsAux = [];
				var email = {};
				if (empresa.emails)
				{
					for (var x = 0; x < empresa.emails.length; x++)
					{
						emailsAux.push(qat.model.fnEmails(empresa.emails[x], empresa.emails[x].id ? "UPDATE" : "INSERT", user, $log));
					}
					empresa.emails = [];
					empresa.emails = emailsAux;
				}
				//==================DOCUMENTOS==================================
				if (empresa.documentos)
				{
					var oDocumentos = [];
					if (empresa.documentos.length)
					{
						for (var x = 0; empresa.documentos.length > x; x++)
						{
							if (empresa.documentos[x].numero && empresa.documentos[x].numero != "" && empresa.documentos[x].numero != " ")
								oDocumentos.push(new qat.model.fnDocumento(empresa.documentos[x], empresa.documentos[x].id ? "UPDATE" : "INSERT", user, $log));
						}
					}
					else
					{
						for (var prop in empresa.documentos)
						{
							if (empresa.documentos.hasOwnProperty(prop))
							{
								oDocumentos.push(new qat.model.fnDocumento(empresa.documentos[prop], empresa.documentos[prop].id ? "UPDATE" : "INSERT", user, $log));
							}
						}
					}
					empresa.documentos = [];
					empresa.documentos = oDocumentos;
				}

				//==================USUARIOS==================================
				if (empresa.usuarios)
				{
					var oUsuarios = [];

					for (var x = 0; empresa.usuarios.length > x; x++)
					{
						oUsuarios.push(new qat.model.fnUsuario(empresa.usuarios[x], empresa.usuarios[x].id ? "UPDATE" : "INSERT", user, $log));
					}


					empresa.usuarios = [];
					empresa.usuarios = oUsuarios;
				}

				empresa.dtAbertura = (empresa.dtAbertura ? empresa.dtAbertura : (new Date()).getTime());
				var oObject = new qat.model.Empresa(empresa, "INSERT", user, $log);
				SysMgmtData.processPostPageData("main/api/anonimo",
				{
					url: "entidade/api/empresa" + WebDaptiveAppConfig.create_url,
					request: new qat.model.reqEmpr(oObject, true, true)
				}, function(res)
				{

					if (res.operationSuccess == true)
					{
						window.location.href = "http://localhost:8080/springmvc-angularjs/index3.html#/pages/signin"
						//		$location.path( "/pages/signin" );
						$log.warn("Empresa foi inserida com sucesso ", "Teste");
						initLoad = true;
						toastr.success('Deu Certo seu tanga.', 'Sucess');
						//fnCallBack(res);
						//$location.path("#/pages/signin");

					}else{if(fnCallBack) {fnCallBack(res)}}

				});
			}

			return factory;
	}]);
})();