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
