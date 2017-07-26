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

		$scope.user = {
		    name: 'awesome user'
		};

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
	angular.module('wdApp.apps.pedidoVenda.insert', [])
	.controller('PedidoVendaInsertController', function ($rootScope, $scope,fNotaFiscal) {
			var vm = this;

			$scope.notaFiscalSaida = {
				frete: {
					vrFrete: 0
				},
				vrDesconto: 0,
				vrtotal: 0
			};

			 $scope.user = {
				name: 'awesome user'
			};
			$scope.cliente = {};
			$scope.clientes = [];
			$scope.formaPg = {};
			$scope.endereco = null;
			$scope.pessoa = {};
			$scope.visibled = false
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
			$scope.total = 0;

			fnCallBack = function(res)
			{
				console.log(res)
			}
			
			fNotaFiscal.fnCreateObjectPdVendas($scope,vm,'','INSERT',fnCallBack)
	//	fNotaFiscal.fnCreateObjectPdVendasOrcamento(localStorageService.get('empresa'), $scope.pessoa, $scope.endereco, $scope.produtos, $scope.formaPg, $scope.notaFiscalSaida, 1, 'INSERT', 1001, $scope.financeiros);

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