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

				var fnCallBack = function (res) {
					if (res.operationSuccess == true) {
					  $element.modal('hide')
					  close(null, 500)
					  toastr.success('Deu Certo seu tanga.', 'Sucess')
					  $rootScope.reloadDataCliente(function (data) {
						//debugger
					  })
					}
				}

				var oObject = fModels.amont(processo,action);
				var _oObject = new qat.model.Processo(oObject, action,$rootScope.user.user,$log);

				SysMgmtData.processPostPageData("main/api/request", {
					url: url,
					token: $rootScope.authToken,
					request: new qat.model.reqProcesso(_oObject, true, true)
				}, function(res) {
					fnCallBack(res);
				});

			}
			factory.fnCreateMock = function(scope)
			{
				scope.processo.pasta="000001";
				scope.processo.assunto="assunto";
				scope.processo.natureza= {id:1141};
				scope.processo.statusProc = {id:1052};
				scope.processo.descricao ="descricao";
				scope.processo.senha ="descricao";
				scope.processo.grupoTrabalho = {id:1052};
				scope.processo.usuariosRestricaoProc = {id:1052};
				scope.processo.envolvList[0].cliente = {id:1052};
				scope.processo.envolvList[0].tipoEnvolvido = {id:1052};
				scope.processo.envolvList[0].envolvimento = {id:1052};
				scope.processo.envolvList[0].bCliente= 1
				scope.processo.advogadoList=[{id:1001},{id:1002}];
				scope.processo.fundamentacaoJuridica="observacao";
				scope.processo.fatos="observacao";
				scope.processo.pretensoesCliente="observacao";
				scope.processo.estrategia="observacao";
				scope.processo.tipoProcesso = {id:1052};
				scope.processo.justica = {id:1052};
				scope.processo.instancia = {id:1052};
				scope.processo.orgao = {id:1052};
				scope.processo.situacao = {id:1052};
				scope.processo.npadraocnj="11111111111"
				scope.processo.npadrao="222222222222"
				scope.processo.agendarCap = {id:1052};
				scope.processo.distribuido="distribuido"
				scope.processo.valorAcao="1001"
				scope.processo.valorProvisionado="111001"
				scope.processo.segJustica=1
				scope.processo.justica = {id:1052};
				scope.processo.tribunal = {id:1052};
				scope.processo.instancia1 = {id:1052};
				scope.processo.localidade = {id:1052};
				scope.processo.capturpor = {id:1052};
				scope.processo.numeroprocesso="101010"
				scope.processo.capautomatica = {id:1052};
				scope.processo.agendarCap = {id:1052};
				scope.processo.enviarMdgTelefone=1
				scope.processo.enviarEmail=1
				scope.processo.monitorar=1
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
