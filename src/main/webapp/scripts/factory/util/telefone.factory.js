(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.telefone', []);

	commonAuth.factory('fTelefone', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', 'doisValorFactory','validationFactory', function($rootScope, fModels, SysMgmtData, toastr, $log, doisValorFactory,validationFactory)
		{
			var factory = {};

			factory.fnMontaTelefones = function(vm,scope)
			{
                scope.createFormTelefone = function(sType)
                {
                    scope.empresa.telefones.push(
                    {
                        telefoneTypeEnum: sType
                    })
                }

            }
       
		return factory;
	}]);
})();