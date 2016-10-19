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