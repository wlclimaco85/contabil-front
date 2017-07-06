(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.email', []);

	commonAuth.factory('fEmail', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', 'doisValorFactory','validationFactory', function($rootScope, fModels, SysMgmtData, toastr, $log, doisValorFactory,validationFactory)
		{
			var factory = {};

			factory.fnMontaEmails = function(vm,scope)
			{
                if (!(scope.empresa.emails && scope.empresa.emails[0]))
                {
                    scope.empresa.emails.push(
                    {
                        email: ""
                    });
                }

            }
       
		return factory;
	}]);
})();