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
					scope.telefones.push({numero : '',telefone :{telefoneTypeEnum : sType}});
                }

				scope.deleteForm = function(formScope){

					var a = scope.telefones;
					$.each(scope.telefones, function(i){
						if(scope.telefones[i].numero === formScope.numero) {
							scope.telefones.splice(i,1);
							return false;
						}
					});
				}

            }

		return factory;
	}]);
})();