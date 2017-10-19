(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.processo', []);
	commonAuth.factory('fProcesso', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory', 'validationFactory', 'fEndereco', 'fDocumento', 'fTelefone', 'fEmail',
		'fDatas', '$log',
		function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory, validationFactory, fEndereco, fDocumento, fTelefone, fEmail, fDatas, $log)
		{
			var factory = {};
			////fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
			factory.fnMontaObjeto = function(processo, action, url, callBack) {
debugger


				var oObject = fModels.amont(processo,action);
				var _oObject = new qat.model.Processo(oObject, action,$rootScope.user.user,$log);
				var aUsuariosRestricaoProc = _oObject.usuariosRestricaoProc;
debugger
				_oObject.usuariosRestricaoProc = aUsuariosRestricaoProc;

				SysMgmtData.processPostPageData("main/api/request", {
					url: url,
					token: $rootScope.authToken,
					request: new qat.model.reqProcesso(_oObject, true, true)
				}, function(res) {
					callBack(res);
				});

			}
			factory.fnCreateMock = function(scope)
			{
				 	//private Integer id;
					scope.processo.dataProcess = (new Date()).getTime();
					scope.processo.dataFim = (new Date()).getTime();
					scope.processo.valor = 1.99;
					scope.processo.descricaoProc="descricaoProc";
					scope.processo.senha="senha";
					scope.processo.assunto="assunto";
					scope.processo.porcValorAcao="porcValorAcao";
					scope.processo.processo="processo";
					scope.processo.npadraocnj="npadraocnj";
					scope.processo.npadrao="npadrao";
					scope.processo.agendarCap=1
					scope.processo.distribuido="distribuido";
					scope.processo.valorAcao=2.99
					scope.processo.valorProvisionado=9.99
					scope.processo.segJustica=0
					scope.processo.observacaoProc="observacaoProc";
					scope.processo.numeroprocesso="numeroprocesso";
					scope.processo.capautomatica=0;
					scope.processo.pasta="pasta";
					scope.processo.enviarEmail=0;
					scope.processo.enviarMdgTelefone=1;
					scope.processo.monitorar=0;
					scope.processo.fundamentacaoJuridica="fundamentacaoJuridica";
					scope.processo.fatos="fatos";
					scope.processo.pretensoesCliente="pretensoesCliente";
					scope.processo.estrategia="estrategia";
					scope.processo.retringirProcesso=0;

					scope.processo.statusProc = {id:1052};
					scope.processo.grupoTrabalho = {id:1052};
					scope.processo.acao = {id:1052};
					scope.processo.natureza = {id:1052};
					scope.processo.situacao = {id:1052};
					scope.processo.instancia = {id:1052};
					scope.processo.orgao = {id:1052};
					scope.processo.justica = {id:1052};
					scope.processo.tribunal = {id:1052};
					scope.processo.instancia1 = {id:1052};
					scope.processo.localidade = {id:1052};
					scope.processo.capturpor = {id:1052};
					scope.processo.quando = {id:1052};

				//	scope.processo.tituloList = [{id:10,modelAction:"INSERT"}];
					scope.processo.clienteList = [{id:10,modelAction:"INSERT"}];
				//	scope.processo.advogadoList = [{id:10,modelAction:"INSERT"}];
				//	scope.processo.audienciaList = [{id:10,modelAction:"INSERT"}];
				//	scope.processo.processoStatusList =[{id:10,modelAction:"INSERT"}];
					scope.processo.envolvList = [{cliente : {id:1052},tipoEnvolvido : {id:1052},envolvimento : {id:1052},bCliente: 1,modelAction:"INSERT"}];
				//	scope.processo.arquivos =[{id:10,modelAction:"INSERT"}];
				//	scope.processo.envolvidosExterno = [{id:10,modelAction:"INSERT"}];
					scope.processo.usuariosRestricaoProc = [{modelAction:"INSERT"}];

			}

			factory.fnVerificaPrivacidade = function(oData)
			{
				debugger
				return false;
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
                doisValorFactory.processo(scope);

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



			}



			return factory;
	}]);
})();
