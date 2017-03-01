(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCalls.validation', ['angularModalService']);

	commonAuth.factory('validationFactory', ['ModalService', function(ModalService){
		return{
				//County Object
				categoria : function() {
				    $('.CategoriaForm')
		            .formValidation({
		                framework: 'bootstrap',
		                icon: {
		                    valid: 'glyphicon glyphicon-ok',
		                    invalid: 'glyphicon glyphicon-remove',
		                    validating: 'glyphicon glyphicon-refresh'
		                },
		                fields: {
		                    'nome': notEmptyStringMinMaxRegexp                    }
		            });
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
				    $('.cfopForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'firstName': notEmptyStringMinMaxRegexp,
	                        'lastName': integerNotEmptyValidation,
	                    }
	                });
				},
				cliente : function() {
				    $('.clienteForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nomeResponsavel': notEmptyStringMinMaxRegexp,
	                        'cpf': integerNotEmptyValidation
	                    }
	                });
				},
				pdVendas : function() {
				    $('.pdVendasForm')
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
				regime : function() {
				    $('.regimeForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nome': notEmptyStringMinMaxRegexp,
	                        'descricao': integerNotEmptyValidation,
	                    }
	                });
				},
				orcamento : function() {
				    $('.orcamentoForm')
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
				nfSaida : function() {
				    $('.nfSaidaForm')
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
				empresa : function() {
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
				tributacao : function() {
				    $('.tributacaoForm')
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
				contasPagar : function() {
				    $('.regimeForm')
	                .formValidation({
	                    framework: 'bootstrap',
	                    icon: {
	                        valid: 'glyphicon glyphicon-ok',
	                        invalid: 'glyphicon glyphicon-remove',
	                        validating: 'glyphicon glyphicon-refresh'
	                    },
	                    fields: {
	                        'nome': notEmptyStringMinMaxRegexp,
	                        'descricao': integerNotEmptyValidation,
	                    }
	                });
				}
			};
	}]);
})();