(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.endereco', []);

	commonAuth.factory('fEndereco', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', 'doisValorFactory','validationFactory', function($rootScope, fModels, SysMgmtData, toastr, $log, doisValorFactory,validationFactory)
		{
			var factory = {};

			factory.fnMontaEnderecoEmpresa = function(vm,scope)
			{
                if (!(scope.enderecos && scope.enderecos[0]))
                {
                    scope.enderecos.push(
                    {
                        bairro: "",
                        complemento: "",
                        cidade:
                        {
                            nome: "",
                            estado:
                            {
                                abreviacao: ""
                            },
                            codIbge: ""
                        },
                        logradouro: ""
                    })
			    }
                scope.buscaRCep = function(_cepValue)
			    {
					//debugger
					var cepValue = _cepValue;
					var formatedCep;

					$.getJSON("//viacep.com.br/ws/" + _cepValue + "/json/?callback=?", function(res)
					{
						scope.enderecos[0].bairro = res.bairro;
						scope.enderecos[0].complemento = res.complemento;
						scope.enderecos[0].cidade = {
							nome: res.localidade,
							estado:
							{
								abreviacao: res.uf
							},
							codIbge: res.ibge
						};
						scope.enderecos[0].logradouro = "";
						scope.enderecos[0].logradouro = res.logradouro;
					});
				}

			scope.createFormTelefone = function(sType)
			{
				scope.empresa.telefones.push(
				{
					telefoneTypeEnum: sType
				})
			}

			//
			var callbackEstado = function(res)
			{

				if (res.operationSuccess == true)
				{
					scope.estados = res.estadoList;
				}

			}

			var callbackCidade = function(res)
			{
				if (res.operationSuccess == true)
				{
					scope.cidades = res.cidadeList
				}

			}

			var callbackRoles = function(res)
			{

				if (res.operationSuccess == true)
				{
					scope.roles = res.userRolesList;
				}

			}

			qat.model.select.anonimo("entidade/api/userRoles/fetchPage", true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackRoles);

			doisValorFactory.empresa(scope);

			qat.model.select.anonimo("cadastros/api/estado/fetchPage", true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado);

			scope.countrySelected = function(selected)
			{
				if (selected)
				{
					qat.model.select.anonimo("cadastros/api/cidade/fetchPage", true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade);
				}
			}
            }

		return factory;
	}]);
})();