(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.documento', []);

	commonAuth.factory('fDocumento', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', '$log', 'doisValorFactory','validationFactory', function($rootScope, fModels, SysMgmtData, toastr, $log, doisValorFactory,validationFactory)
		{
			var factory = {};

			factory.fnMontaDocumentosEmpresa = function(vm,scope)
			{
                var bCPF = false;
                var bCNPJ = false;
                var bIM = false;
                var bIES = false;
                var bIIE = false;
                var bIE = false;
                var bIF = false;
                var bINSCRESTSUBSTTRIB = false;
                var bINDICADORIE = false;
                var bNUNINSJUNTCOMERCIAL = false;
                var bCRC = false;
                for (var x = 0; x < scope.empresa.documentos.length; x++)
                {
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 1)
                    {
                        bCNPJ = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 2)
                    {
                        bCPF = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 3)
                    {
                        bIM = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 8)
                    {
                        bIES = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 9)
                    {
                        bIIE = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 10)
                    {
                        bIE = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 11)
                    {
                        bIF = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 12)
                    {
                        bINSCRESTSUBSTTRIB = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 14)
                    {
                        bINDICADORIE = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 16)
                    {
                        bNUNINSJUNTCOMERCIAL = true;
                    }
                    if (scope.empresa.documentos[x].documentoTypeEnumValue == 17)
                    {
                        bCRC = true;
                    }
                }

                if (!bCPF)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 2,
                        numero: ""
                    })
                };
                if (!bCNPJ)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 1,
                        numero: ""
                    })
                };
                if (!bIM)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 3,
                        numero: ""
                    })
                };
                if (!bIES)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 8,
                        numero: ""
                    })
                };
                if (!bIIE)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 9,
                        numero: ""
                    })
                };
                if (!bIE)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 10,
                        numero: ""
                    })
                };
                if (!bIF)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 11,
                        numero: ""
                    })
                };
                if (!bINSCRESTSUBSTTRIB)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 12,
                        numero: ""
                    })
                };
                if (!bINDICADORIE)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 14,
                        numero: ""
                    })
                };
                if (!bNUNINSJUNTCOMERCIAL)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 16,
                        numero: ""
                    })
                };
                if (!bCRC)
                {
                    scope.empresa.documentos.push(
                    {
                        documentoTypeEnumValue: 17,
                        numero: ""
                    })
                };
                scope.getIndicadorIE = function(a,b)
                {
                    b.numero = a.id;
                }

            }
       
		return factory;
	}]);
})();