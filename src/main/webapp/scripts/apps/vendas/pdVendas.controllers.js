(function () {
	angular.module('wdApp.apps.pdVendas', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PdVendasController', pdVendasController);

	function pdVendasController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, tableColumnsFactory, tableOptionsFactory, FiltersFactory) {
		var vm = this;
		vm.selected = {};
		vm.selectAll = false;
		vm.toggleAll = toggleAll;
		vm.toggleOne = toggleOne;
		vm.status = status;
		vm.message = '';
		vm.edit = edit;
		vm.delete = deleteRow;
		vm.dtInstancePdVendas = {};
		vm.persons = {};

		$scope.pedidoVenda = {
			tipoPessoa: 2
		};

		$scope.toggle = function () {
			$scope.state = !$scope.state;
		};
		var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
			'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

		function reloadData() {
			var resetPaging = false;
			vm.dtInstancePdVendas.reloadData(callback, resetPaging);
		}

		function callback(json) {
			console.log(json);
		}

		var reloadData = function () {

			var resetPaging = false;
			vm.dtInstancePdVendas.reloadData(callback, resetPaging);
		}

		$rootScope.reloadDataSit = function (_callback) {

			var resetPaging = false;
			vm.dtInstancePdVendas.reloadData(_callback, resetPaging);
		}

		function rCallback(nRow, aData) {
			// console.log('row');
		}

		function recompile(row, data, dataIndex) {
			$compile(angular.element(row).contents())($scope);
		}
		var fnDataSRC = function (json) {
				console.log(json)
				json['recordsTotal'] = json.nfnotaList.length
				json['recordsFiltered'] = json.nfnotaList.length
				json['draw'] = 1
				console.log(json)
				return json.nfnotaList;
			}
			//  Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,$scope,FiltersFactory.cliente()), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));
		Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.pdVendas(vm, createdRow, $scope, FiltersFactory.pdVendas(), reloadData), tableColumnsFactory.pdVendas(vm, titleHtml, actionsHtml));

		function edit(person) {
			$rootScope.pedidoVenda = person;
			dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html', "PedidoVendasUpdateController", openDialogUpdateCreate);
		}

		function deleteRow(person) {
			$rootScope.pedidoVenda = person;
			dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html', "PedidoVendasDeleteController", openDialogUpdateCreate);
		}

		function createdRow(row, data, dataIndex) {
			// Recompiling so we can bind Angular directive to the DT
			$compile(angular.element(row).contents())($scope);
		}

		function actionsHtml(data, type, full, meta) {
			vm.persons[data.id] = data;
			return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
				'   <i class="glyphicon glyphicon-save"></i>' +
				'</button> ' +
				'<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
				'   <i class="fa fa-trash-o"></i>' +
				'</button>';
		}

		function toggleAll(selectAll, selectedItems) {
			for (var id in selectedItems) {
				if (selectedItems.hasOwnProperty(id)) {
					selectedItems[id] = selectAll;
				}
			}
		}

		function status() {}

		function toggleOne(selectedItems) {
			for (var id in selectedItems) {
				if (selectedItems.hasOwnProperty(id)) {
					if (!selectedItems[id]) {
						vm.selectAll = false;
						return;
					}
				}
			}
			vm.selectAll = true;
		}

		function toggle() {
			$scope.state = !$scope.state;
		};
	}
})();
(function () {
	angular.module('wdApp.apps.pedidoVenda.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']).run([
                'validator',
                function (validator) {
                    validator.setValidElementStyling(false);
                    validator.setInvalidElementStyling(false);
            }])
		.controller('PedidoVendaInsertController', function (localStorageService, $rootScope, $scope, fModels, SysMgmtData, doisValorFactory, fNotaFiscal) {
			var vm = this;

			$scope.notaFiscalSaida = {

			};
			$scope.cliente = {};
			$scope.formaPg = {};
			$scope.endereco = null;
			$scope.pessoa = {};


			$scope.visibled = false
				//   $scope.cliente = [];

			$scope.countrySelected = function (selected) {

				if (selected) {

					$scope.pessoa = selected.originalObject;
					$scope.visibled = true;

					$scope.popovers = {
						"html": "<div>Hello Popover<br />This is a multiline message!</div>",
						"title": "Informação",
						"animation": 'am-flip-x',
						"content": " " + $scope.pessoa.nome + " " +
							" " + $scope.pessoa.nome + " " +
							" " + $scope.pessoa.nome + " " +
							" " + $scope.pessoa.nome + " " +
							" " + $scope.pessoa.nome + " " +
							" " + $scope.pessoa.nome + " "
					};

				} else {
					console.log('cleared');
				}
			};

			SysMgmtData.processPostPageData("main/api/request", {
				url: "pessoa/api/cliente/fetchPage",
				token: $rootScope.authToken,
				request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
			}, function (res) {
				//  debugger
				$scope.cliente = res.clienteList;
			});

			$scope.notaFiscalSaida = {
				frete: {
					vrFrete: 0
				},
				vrDesconto: 0,
				vrtotal: 0
			}

			$scope.produtosSelect = "";

			$scope.produto = {};

			$scope.produtos = [{
				form: 'form',
				produto: {}
			}];


			$scope.contasReceber = {};

			$scope.financeiros = [{
				form: 'formFinc',
				financeiro: {
					valor: parseFloat($scope.notaFiscalSaida.vrtotal) / (1)
				}
			}];

			$scope.clientes = [];

			$scope.total = 0;

			$scope.calcProd = function (quant, valor) {
				return quant * valor;
			}

			$scope.$watch("financeiros", function () {
				var cout = 0
				for (var x = 0; x < $scope.financeiros.length; x++) {
					cout = parseFloat(cout, 10) + parseFloat($scope.financeiros[x].financeiro.valor)
				}
				$scope.total = cout;
			}, true);

			function teste() {
				var cout = 0
				for (var x = 0; x < $scope.produtos.length; x++) {
					cout = parseFloat(cout, 10) + parseFloat(($scope.produtos[x].produto.quantidade * $scope.produtos[x].produto.precoList[0].valor) - $scope.produtos[x].produto.desconto)
				}
				$scope.totals = cout;
				$scope.notaFiscalSaida.vrtotal = (cout + parseFloat($scope.notaFiscalSaida.frete.vrFrete)) - parseFloat($scope.notaFiscalSaida.vrDesconto)
				$scope.financeiros[0].financeiro.valor = (cout + parseFloat($scope.notaFiscalSaida.frete.vrFrete)) - parseFloat($scope.notaFiscalSaida.vrDesconto);
			}

			$scope.$watch("produtos", function () {
				teste();
			}, true);

			$scope.$watch("notaFiscalSaida.frete.vrFrete", function () {
				teste();
			}, true);

			$scope.$watch("notaFiscalSaida.vrDesconto", function () {
				teste();
			}, true);

			$scope.calcProdTotal = function () {
				var total = 0

				for (var x = 0; x < $scope.financeiros.length; x++) {

				}

				return total

			}


			$scope.createForm2 = function () {

				$scope.produtos.push({
					nome: 'form1' + ($scope.produtos.length + 1),
					produto: {
						quantidade: 0,
						desconto: 0
					}
				});

			};

			$scope.createForm3 = function () {

				$scope.financeiros.push({
					nome: 'formFinc' + ($scope.financeiros.length + 1),
					financeiro: {
						valor: 0
					}
				});

				for (var x = 0; x < $scope.financeiros.length; x++) {
					$scope.financeiros[x].financeiro.valor = parseFloat($scope.notaFiscalSaida.vrtotal) / (parseFloat($scope.financeiros.length));
				}

			};


			$scope.forms = [{
				id: 0,
				produto: "",
				ddd: 'form1',
				notaFiscalSaidaItens: {}
			}];
			$scope.count = 0;


			$scope.changeProd = function (form) {
				debugger
				console.log(form);

				for (var x = 0; $scope.produtos.length > x; x++) {
					if ($scope.produtos[x].id == form.produto) {
						form.quantidade = 100;
					}
				}
			}

			var fnFunction = function () {
				debugger
			}
			$inputaction = $('#teste')
			$inputaction.inputaction({
				confirmAction: fnFunction,
				model: $scope.cliente,
				fullData: {},
				propertyName: 'name'
			});


			doisValorFactory.pedidoVendas($scope);


			$scope.deleteForm = function (formScope) {


				delete $scope.forms(formScope);
			}

			$scope.titulo.pagarAgora = false;

			$scope.formatterDate = function (iDate) {
				return $filter('date')(new Date(iDate), 'dd/MM/yyyy');
			};

			$scope.today = function () {
				$scope.dt = new Date();
			};
			$scope.today();

			$scope.clear = function () {
				$scope.dt = null;
			};

			$scope.inlineOptions = {
				customClass: getDayClass,
				minDate: new Date(),
				showWeeks: true
			};

			$scope.dateOptions = {
				dateDisabled: disabled,
				formatYear: 'yy',
				maxDate: new Date(2020, 5, 22),
				minDate: new Date(),
				startingDay: 1
			};

			// Disable weekend selection
			function disabled(data) {
				var date = data.date,
					mode = data.mode;
				return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
			}

			$scope.toggleMin = function () {
				$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
				$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
			};

			$scope.toggleMin();

			$scope.open1 = function () {

				$scope.popup1.opened = true;
			};

			$scope.open2 = function () {

				$scope.popup2.opened = true;
			};

			$scope.open3 = function () {

				$scope.popup3.opened = true;
			};

			$scope.setDate = function (year, month, day) {
				$scope.dt = new Date(year, month, day);
			};

			$scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			$scope.format = $scope.formats[1];
			$scope.altInputFormats = ['M!/d!/yyyy'];

			$scope.popup1 = {
				opened: false
			};

			$scope.popup2 = {
				opened: false
			};

			$scope.popup3 = {
				opened: false
			};

			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			var afterTomorrow = new Date();
			afterTomorrow.setDate(tomorrow.getDate() + 1);
			$scope.events = [{
				date: tomorrow,
				status: 'full'
			}, {
				date: afterTomorrow,
				status: 'partially'
			}];

			function getDayClass(data) {
				var date = data.date,
					mode = data.mode;
				if (mode === 'day') {
					var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

					for (var i = 0; i < $scope.events.length; i++) {
						var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

						if (dayToCheck === currentDay) {
							return $scope.events[i].status;
						}
					}
				}

				return '';
			}


			$scope.savePedidoVenda = function () {


				/*    if($scope.financeiro.pagarAgora)
				        {
				            $scope.financeiro.listBaixa[0].dataBaixa = $scope.titulo ? $scope.titulo.dataPagamento.getTime() : (new Date()).getTime();
				            $scope.financeiro.listBaixa[0].observacao = "";
				            $scope.financeiro.listBaixa[0].juros  = 0;
				            $scope.financeiro.listBaixa[0].multa = 0;
				            $scope.financeiro.listBaixa[0].desconto = 0;

				            fModels.amont($scope.financeiro.listBaixa[0],"INSERT");
				        }

				        $scope.financeiro.situacao = { id : 392}
				        var oObject = fModels.amont(qat.model.fnFormaReceber($scope.financeiro,"INSERT"),"INSERT");


				        SysMgmtData.processPostPageData("main/api/request", {
				            url: "financeiro/api/contasReceber/insert",
				            token: $rootScope.authToken,
				            request: new qat.model.reqContasReceber(oObject, true, true)
				        }, function(res) {
				            fnCallBack(res,$scope);
				        }); */

				fNotaFiscal.fnCreateObjectPdVendasOrcamento(localStorageService.get('empresa'), $scope.pessoa, $scope.endereco, $scope.produtos, $scope.formaPg, $scope.notaFiscalSaida, 1, 'INSERT', 1001, $scope.financeiros);
			};


		});
})();
(function () {
	angular.module('wdApp.apps.pedidoVenda.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PedidoVendaUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
			var vm = this;
			$scope.pedidoVenda = {};
			$scope.pedidoVenda = $rootScope.pedidoVenda;
			console.log($rootScope.pedidoVenda)
			$scope.savePedidoVenda = function () {
				fPessoa.fnMontaObjeto($scope.pedidoVenda, $scope.endereco, 'UPDATE', "site/api/pedidoVenda/update/", fnCallBack);
			}
		});
})();
(function () {
	angular.module('wdApp.apps.pedidoVenda.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PedidoVendaDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
			var vm = this;
			$scope.pedidoVenda = {};
			$scope.pedidoVenda = $rootScope.pedidoVenda;
			console.log($rootScope.pedidoVenda)
			$scope.savePedidoVenda = function () {
				fPessoa.fnDelete($scope.pedidoVenda, "site/api/pedidoVenda/update/", function () {
					console.log('ddda   aqui')
				});
			}
		});
})();
(function () {
	angular.module('wdApp.apps.pedidoVenda.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('PedidoVendaViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
			var vm = this;
			$scope.pedidoVenda = {};
			$scope.pedidoVenda = $rootScope.pedidoVenda;
			console.log($rootScope.pedidoVenda)
			$scope.savePedidoVenda = function () {
				fPessoa.fnOpenView($scope.pedidoVenda, "site/api/pedidoVenda/update/", function () {
					console.log('aqui')
				});
			}
		});
})();