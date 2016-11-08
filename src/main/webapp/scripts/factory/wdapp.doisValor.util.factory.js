(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.doisValores', []);

	commonAuth.factory('doisValorFactory', ['$rootScope', function($rootScope){
		return{
				//County Object
				pedidoVendas : function(scope) {

					scope.tipoFrete = [];

					var fnCallbackDoisValor = function(res){
	                    var planos = "";
	                    
	                    if(res.operationSuccess == true)
	                    {
	                        for(var x=0;x<res.doisValoresList.length;x++)
	                        {
	                            planos = res.doisValoresList[x] ;
	                            if(planos.doisValorType != null)
	                            {
	                                switch (planos.doisValorType.tipo) 
	                                {                          
	                                    case 'TIPO FRETE':
	                                        scope.tipoFrete.push(planos);
	                                        break;                
	                                    /*case 'ICMS - ORIGEM':
	                                        $scope.icmsOri.push(planos)
	                                        break;
	                                    case 'ICMS - MODALIDADE BC':
	                                        $scope.icmsMBC.push(planos)
	                                        break;
	                                    case 'ICMS - MOTIVO DESONERAÇÃO':
	                                        $scope.icmsMD.push(planos)
	                                        break;
	                                    case 'IPI - SITUAÇÃO TRIBUTARIA':
	                                        $scope.iPISitTributaria.push(planos)
	                                        break;
	                                    case 'TIPO CALCULO':
	                                        $scope.tipoCalc.push(planos)
	                                        break;
	                                    case 'PIS - SITUAÇÃO TRIBUTARIA':
	                                        $scope.pisST.push(planos)
	                                        break;
	                                    case 'COFINS - SITUAÇÃO TRIBUTARIA':
	                                        $scope.cofinsST.push(planos)
	                                        break;*/
	                                }
	                            }
	                        }
	                       
	                   //    return tipoFrete;
	                   console.log(scope)
	                   }
	                }

                	qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(5, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);


				},
				uniMed : function() {
				    $('.UniMedForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nome': notEmptyStringMinMaxRegexp,
	                        'email': integerNotEmptyValidation,
	                        'texto': integerNotEmptyValidation,
	                    }
	                });
				},
				cfop : function() {
				    $('.CfopForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nome': notEmptyStringMinMaxRegexp,
	                        'email': integerNotEmptyValidation,
	                        'texto': integerNotEmptyValidation,
	                    }
	                });
				},
				cliente : function() {
				    $('.ClienteForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nome': notEmptyStringMinMaxRegexp,
	                        'email': integerNotEmptyValidation,
	                        'texto': integerNotEmptyValidation,
	                    }
	                });
				}
			};
	}]);
})();