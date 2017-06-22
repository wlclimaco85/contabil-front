(function()
{
	angular.module('wdApp.apps.principal', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PrincipalController', principalController);

	function principalController($location, $log, fModels, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory,
		fEmpresa)
	{
		var vm = this;
		vm.show = true;
		vm.doc = "";
		vm.docTipo = "";

		var $window;
		$window = $(window);

		$scope.empresa = {
			usuarios: []
		};
		$scope.senha2 = "";
		$scope.empresa.usuarios.push(
		{
			parentId: 0
		});
		vm.shows = function(s, v)
		{
			if (v)
				vm.show = s;
		}
		vm.functionTest = function(s)
		{
			return s % 3;
		}
		vm.generatePDF = function()
		{

			kendo.drawing.drawDOM($("#contrato")).then(function(group)
			{
				kendo.drawing.pdf.saveAs(group, "Converted PDF.pdf");
			});
		}
		SysMgmtData.processPostPageData("main/api/anonimo",
		{
			url: "site/api/fetchPage",
			request: new qat.model.siteInquiryRequest(100 / 20, true, "http://localhost:8080/webSite/")
		}, function(res)
		{

			vm.site = new qat.model.Site(res.sites[0]);
			console.log(res.sites[0].empresa)
			if ((res.sites[0].empresa != undefined) && (res.sites[0].empresa != null))
			{
				localStorage.setItem("empresa", JSON.stringify(res.sites[0].empresa));
				var docs = res.sites[0].empresa.documentos

				for (var x = 0; x < docs.length; x++)
				{
					if (docs[x].documentoType == "CPF")
					{
						vm.doc = docs[x].numero;
						vm.docTipo = "CPF"
					}
					else if (docs[x].documentoType == "CNPJ")
					{

						vm.doc = docs[x].numero;
						vm.docTipo = "CNPJ"
					}
				}
			}
		});

		$scope.searchButtonText = "Search";
		$scope.loading = false;
		$scope.test = "false";
		$scope.search = function()
		{

			// Do your searching here
		}
		$scope.searchButtonText = "COMEÇAR TESTE GRATUITO";

		var fnCallBack = function(res)
		{
			$scope.test = "false";
			$scope.loading = "false"
			$scope.searchButtonText = "COMEÇAR TESTE GRATUITO";
		}

		$scope.functionTest = function()
		{
			bReturn = false;
			if ($scope.empresa.usuarios[0].senha == $scope.empresa.usuarios[0].senha2)
			{
				bReturn = true;
			}
			$scope.userForm.$valid = bReturn;
			return bReturn;
		}

		$scope.submitForm = function(isValid)
		{
			if (isValid)
			{
				$scope.test = "true";
				$scope.loading = "true"
				$scope.searchButtonText = "COMEÇAR TESTE GRATUITO";

				$log.info("Insert empresa ", "Teste");
				$scope.empresa.entidadeEnumValue = 1;
				if ($scope.empresa.documentos[0].numero.length > 12)
				{
					$scope.empresa.documentos[0].documentoType = "CNPJ"
					$scope.empresa.tipoPessoa = 2
				}
				else
				{
					$scope.empresa.documentos[0].documentoType = "CPF"
					$scope.empresa.nome = $scope.empresa.razao;
					$scope.empresa.tipoPessoa = 1

				}
				fEmpresa.fnMontaObjeto3($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, $scope.cnaes, $scope.usuario, "INSERT", fnCallBack);
			}
		};




	}
})();
(function()
{
	angular.module('wdApp.apps.principal.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PrincipalInsertController', function($rootScope, $scope, fModels, SysMgmtData, fEmpresa)
		{
			var vm = this;

			$scope.forms = [
				{
					nome: 'form1',
					telefone:
					{}
			}];
			$scope.count = 0;

			$scope.empresa = {
				telefones: [],
				enderecos: [
					{
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),
            }],
				documentos: [
					{
						documentoTypeEnumValue: 1,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 2,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 3,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 4,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 5,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 6,
						numero: 0,
						tableEnumValue: 1,
						modelAction: "INSERT",
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    }]
			};
			$scope.enderecos = [];


			$scope.today = function()
			{
				return $scope.dt = new Date();
			};
			$scope.today();
			$scope.clear = function()
			{
				return $scope.dt = null;
			};
			$scope.open = function($event)
			{
				$event.preventDefault();
				$event.stopPropagation();
				return $scope.opened = true;
			};
			$scope.dateOptions = {
				'year-format': "'yy'",
				'starting-day': 0
			};
			$scope.formats = ['MMMM-dd-yyyy', 'MM/dd/yyyy', 'yyyy/MM/dd'];
			$scope.format = $scope.formats[1];
			var fnCallBack = function(oResponse)
			{
				debugger
				console.log(oResponse)
			}
			$scope.saveEmpresa = function()
			{

				debugger
				var oObject = fModels.amont(qat.model.Empresa($scope.empresa, "INSERT", $rootScope.user.user), "INSERT");

				SysMgmtData.processPostPageData("main/api/anonimo",
				{
					url: "entidade/api/empresa" + WebDaptiveAppConfig.create_url,
					request: new qat.model.reqEmpr(oObject, true, true)
				}, function(res)
				{
					console.log(res)
					debugger
					if (res.operationSuccess == true)
					{
						debugger
					}

				});
			};
		});
})();
(function()
{
	angular.module('wdApp.apps.principal.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PrincipalUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa)
		{
			var vm = this;
			$scope.principal = {};
			$scope.principal = $rootScope.principal;
			console.log($rootScope.principal)
			$scope.savePrincipal = function()
			{
				fPessoa.fnMontaObjeto($scope.principal, null, 'UPDATE', "site/api/principal/update/", fnCallBack);
			}
		});
})();
(function()
{
	angular.module('wdApp.apps.principal.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PrincipalDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa)
		{
			var vm = this;
			$scope.principal = {};
			$scope.principal = $rootScope.principal;
			console.log($rootScope.principal)
			$scope.savePrincipal = function()
			{
				fPessoa.fnDelete($scope.principal, "site/api/principal/update/", function()
				{
					console.log('ddda   aqui')
				});
			}
		});
})();
(function()
{
	angular.module('wdApp.apps.principal.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PrincipalViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa)
		{
			var vm = this;
			$scope.principal = {};
			$scope.principal = $rootScope.principal;
			console.log($rootScope.principal)
			$scope.savePrincipal = function()
			{
				fPessoa.fnOpenView($scope.principal, "site/api/principal/update/", function()
				{
					console.log('aqui')
				});
			}
		});
})();