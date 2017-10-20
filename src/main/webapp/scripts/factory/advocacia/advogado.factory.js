(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.advogado', []);
	commonAuth.factory('fAdvogado', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory', 'validationFactory', 'fEndereco', 'fDocumento', 'fTelefone', 'fEmail',
		'fDatas', '$log',
		function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory, validationFactory, fEndereco, fDocumento, fTelefone, fEmail, fDatas, $log)
		{
			var factory = {};
			////fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
			factory.fnMontaObjeto = function(advogado, action, url, callBack) {
debugger


				var oObject = fModels.amont(advogado,action);
				var _oObject = new qat.model.Advogado(oObject, action,$rootScope.user.user,$log);
				var aUsuariosRestricaoProc = _oObject.usuariosRestricaoProc;
debugger
				_oObject.usuariosRestricaoProc = aUsuariosRestricaoProc;

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
				 	//private Integer id;
					scope.advogado.dataProcess = (new Date()).getTime();
					scope.advogado.dataFim = (new Date()).getTime();
					scope.advogado.valor = 1.99;
					scope.advogado.descricaoProc="descricaoProc";
					scope.advogado.senha="senha";
					scope.advogado.assunto="assunto";
					scope.advogado.porcValorAcao="porcValorAcao";
					scope.advogado.advogado="advogado";
					scope.advogado.npadraocnj="npadraocnj";
					scope.advogado.npadrao="npadrao";
					scope.advogado.agendarCap=1
					scope.advogado.distribuido="distribuido";
					scope.advogado.valorAcao=2.99
					scope.advogado.valorProvisionado=9.99
					scope.advogado.segJustica=0
					scope.advogado.observacaoProc="observacaoProc";
					scope.advogado.numeroadvogado="numeroadvogado";
					scope.advogado.capautomatica=0;
					scope.advogado.pasta="pasta";
					scope.advogado.enviarEmail=0;
					scope.advogado.enviarMdgTelefone=1;
					scope.advogado.monitorar=0;
					scope.advogado.fundamentacaoJuridica="fundamentacaoJuridica";
					scope.advogado.fatos="fatos";
					scope.advogado.pretensoesCliente="pretensoesCliente";
					scope.advogado.estrategia="estrategia";
					scope.advogado.retringirAdvogado=0;

					scope.advogado.statusProc = {id:1052};
					scope.advogado.grupoTrabalho = {id:1052};
					scope.advogado.acao = {id:1052};
					scope.advogado.natureza = {id:1052};
					scope.advogado.situacao = {id:1052};
					scope.advogado.instancia = {id:1052};
					scope.advogado.orgao = {id:1052};
					scope.advogado.justica = {id:1052};
					scope.advogado.tribunal = {id:1052};
					scope.advogado.instancia1 = {id:1052};
					scope.advogado.localidade = {id:1052};
					scope.advogado.capturpor = {id:1052};
					scope.advogado.quando = {id:1052};

				//	scope.advogado.tituloList = [{id:10,modelAction:"INSERT"}];
					scope.advogado.clienteList = [{id:10,modelAction:"INSERT"}];
				//	scope.advogado.advogadoList = [{id:10,modelAction:"INSERT"}];
				//	scope.advogado.audienciaList = [{id:10,modelAction:"INSERT"}];
				//	scope.advogado.advogadoStatusList =[{id:10,modelAction:"INSERT"}];
					scope.advogado.envolvList = [{cliente : {id:1052},tipoEnvolvido : {id:1052},envolvimento : {id:1052},bCliente: 1,modelAction:"INSERT"}];
				//	scope.advogado.arquivos =[{id:10,modelAction:"INSERT"}];
				//	scope.advogado.envolvidosExterno = [{id:10,modelAction:"INSERT"}];
					scope.advogado.usuariosRestricaoProc = [{modelAction:"INSERT"}];

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
             /*   doisValorFactory.advogado(scope);

                //Usuarios
                qat.model.select.util('entidade/api/usuario/fetchPage', true, new qat.model.empresaInquiryRequest(6, 100 / 20, true),
                function(oResp){
                    scope.usuarioList = oResp.usuarioList;
                })
                //Grupos
                qat.model.select.util('entidade/api/doisValores/fetchPage', true, new qat.model.doisValoresInquiryRequest(null, 100 / 20, true, JSON.parse(localStorage.getItem('empresa')).id,152),
                function(oResp){
                    scope.grupoTrabalhoList = oResp.doisValoresList;
                })
                //clientes
                qat.model.select.util('pessoa/api/cliente/fetchPage', true, new qat.model.empresaInquiryRequest(6, 100 / 20, true),
                function(oResp){
                    scope.clienteList = oResp.clienteList;
                })
                //advogados
                qat.model.select.util('pessoa/api/advogado/fetchPage', true, new qat.model.empresaInquiryRequest(6, 100 / 20, true),
                function(oResp){
                    scope.advogadoList = oResp.advogadoList;
				})
*/


			}



			return factory;
	}]);
})();
