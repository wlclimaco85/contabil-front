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
				},
				tributacao : function(scope) {

				   scope.regime = [];
	               scope.icmsOri = [];
	               scope.icmsMBC = [];
	               scope.icmsMBCST = [];
	               scope.icmsMD = [];
	               scope.icmsMDST = [];
	               scope.iPISitTributaria = [];
	               scope.tipoCalc = [];
	               scope.pisST = [];
	               scope.cofinsST = [];

	                    var fnCallbackDoisValor = function(res){
                    var planos = "";

//ICMS - MODALIDADE BC

                   if(res.operationSuccess == true)
                   {
                        for(var x=0;x<res.doisValoresList.length;x++)
                        {
                            planos = res.doisValoresList[x] ;
                            if(planos.doisValorType != null)
                            {
                                switch (planos.doisValorType.tipo)
                                {
                                    case 'ICMS - REGINE':
                                        scope.regime.push(planos);
                                        break;
                                    case 'ICMS - ORIGEM':
                                        scope.icmsOri.push(planos)
                                        break;
                                    case 'ICMS - MODALIDADE BC':
                                        scope.icmsMBC.push(planos)
                                        break;
                                    case 'ICMS - MODALIDADE BC ST':
                                        scope.icmsMBCST.push(planos)
                                        break;
                                    case 'ICMS - MOTIVO DESONERAÇÃO':
                                        scope.icmsMD.push(planos)
                                        break;
                                    case 'ICMS - MOTIVO DESONERAÇÃO ST':
                                        scope.icmsMDST.push(planos)
                                        break;
                                    case 'IPI - SITUAÇÃO TRIBUTARIA':
                                        scope.iPISitTributaria.push(planos)
                                        break;
                                    case 'TIPO CALCULO':
                                        scope.tipoCalc.push(planos)
                                        break;
                                    case 'PIS - SITUAÇÃO TRIBUTARIA':
                                        scope.pisST.push(planos)
                                        break;
                                    case 'COFINS - SITUAÇÃO TRIBUTARIA':
                                        scope.cofinsST.push(planos)
                                        break;
                                }
                            }
                        }


                   }
                }

                qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(6, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);


	               scope.getRegimeTriburario = function (oObject)
				   {

				        var iType = 0;
				         if(oObject.value == "10")
				           iType = 21
				         else
				            iType = 22

				         qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(null, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id,iType),function(res){
				            scope.icmsST = [];
				            scope.icmsST  = res.doisValoresList;
				         });
				    }
				    return scope;
				},
				financeiro : function(pageId,scope,fnCallback) {

					scope.tipoFrete = [];

					var fnCallbackDoisValor = function(res){
	                    var planos = "";

	                    if(res.operationSuccess == true)
	                    {
	                    	if(fnCallback != undefined)
	                    	{
	                    		fnCallback(res);
	                    	}
	                   		console.log(scope)
	                   }
	                }

                	qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(pageId, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);


				},
				conta : function(pageId,scope,fnCallback) {

					scope.tipoFrete = [];

					var fnCallbackDoisValor = function(res){
	                    var planos = "";

	                    if(res.operationSuccess == true)
	                    {
	                    	if(fnCallback != undefined)
	                    	{
	                    		fnCallback(res);
	                    	}
	                   		console.log(scope)
	                   }
	                }

                	qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(pageId, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);


				},

				notaFiscal : function(scope) {

					scope.tipoFrete = [];
					scope.TIPO_DOCUMENTO = [];
					scope.MODELO = [];
					scope.SERIE = [];
					scope.TIPO = [];
					scope.IDENTIFICADOR_LOCAL_DESTINO_OPERACAO = [];
					scope.TIPO_IMPRESSAO = [];
					scope.TIPO_EMISSAO = [];
					scope.AMBIENTE = [];
					scope.FINALIDADE = [];
					scope.OPERACAO_CONSUMIDOR_FINAL = [];
					scope.INDICADOR_PRESENCA_COMPRADOR = [];
					scope.PROGRAMA_EMISSOR = [];
					scope.INDICADOR_IE_DESTINATARIO = [];
					scope.MODALIDADE_FRETE = [];
					scope.TIPO_DOC = [];
					scope.FORMA_PAGAMENTO_MOEDA = [];
					scope.INDICADOR_ORIGEM_PROCESSO = [];
					scope.ASSINATURA= [];
					scope.TIPO_NOTA_FISCAL = [];
					scope.TRIBUTACAO = [];

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

	                                case 'TIPO DOCUMENTO':
                                        scope.TIPO_DOCUMENTO.push(planos);
                                        break;
	                                case 'MODELO', 'MODELO':
                                        scope.MODELO.push(planos);
                                    break;
                                case 'SERIE':
                                    scope.SERIE.push(planos);
                                    break;
                                case 'TIPO':
                                scope.TIPO.push(planos);
                                break;
                            case 'IDENTIFICADOR LOCAL DESTINO OPERACAO':
                                scope.IDENTIFICADOR_LOCAL_DESTINO_OPERACAO.push(planos);
                                break;
                            case 'TIPO IMPRESSAO':
                                scope.TIPO_IMPRESSAO.push(planos);
                                break;
                            case 'TIPO EMISSAO':
                                scope.TIPO_EMISSAO.push(planos);
                                break;
                            case 'AMBIENTE':
                                scope.AMBIENTE.push(planos);
                                break;
                            case 'FINALIDADE':
                                scope.FINALIDADE.push(planos);
                                break;
                            case 'OPERACAO CONSUMIDOR FINAL':
                                scope.OPERACAO_CONSUMIDOR_FINAL.push(planos);
                                break;
                            case 'INDICADOR	PRESENCA COMPRADOR':
                                scope.INDICADOR_PRESENCA_COMPRADOR.push(planos);
                                break;
                            case 'PROGRAMA EMISSOR':
                                scope.PROGRAMA_EMISSOR.push(planos);
                                break;
                            case 'INDICADOR IE DESTINATARIO':
                                scope.INDICADOR_IE_DESTINATARIO.push(planos);
                                break;
                            case 'MODALIDADE FRETE':
                                scope.MODALIDADE_FRETE.push(planos);
                                break;
                            case 'TIPO DOC':
                                scope.TIPO_DOC.push(planos);
                                break;
                            case 'FORMA PAGAMENTO MOEDA':
                                scope.FORMA_PAGAMENTO_MOEDA.push(planos);
                                break;
                            case 'INDICADOR ORIGEM PROCESSO':
                                scope.INDICADOR_ORIGEM_PROCESSO.push(planos);
                                break;
                            case 'ASSINATURA':
                                scope.ASSINATURA.push(planos);
                                break;
                            case 'TIPO NOTA FISCAL':
                                scope.TIPO_NOTA_FISCAL.push(planos);
                                break;
                            case 'TRIBUTACAO':
                                scope.TRIBUTACAO.push(planos);
                                break;
                            case 'TIPO FRETE':
	                                        scope.TIPO_FRETE.push(planos);
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

                	qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(10, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);


				}
			};
	}]);
})();