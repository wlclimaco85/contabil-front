(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.email', []);

	commonAuth.factory('fEmail', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', 'doisValorFactory','validationFactory', function($rootScope, fModels, SysMgmtData, toastr, $log, doisValorFactory,validationFactory)
	{
		var factory = {};
		factory.fnMontaEmails = function(vm,scope)
		{
			scope.createFormEmail = function(sType)
			{
				scope.emails.push({email : '',emailTypeEnum : sType});
			}
			scope.deleteFormEmail = function(formScope){

				var a = scope.emails;
				$.each(scope.emails, function(i){
					if(scope.emails[i].email === formScope.email) {
						scope.emails.splice(i,1);
						return false;
					}
				});
			}
		}
		return factory;
	}]);
})();