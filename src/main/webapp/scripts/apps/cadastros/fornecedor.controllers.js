;(function () {
  angular.module('wdApp.apps.fornecedor', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('FornecedorController', fornecedorController)

  function fornecedorController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
    tableColumnsFactory, FiltersFactory, validationFactory) {
    var vm = this
    vm.selected = {}
    vm.selectAll = false
    vm.toggleAll = toggleAll
    vm.toggleOne = toggleOne
    vm.status = status
    vm.message = ''

    vm.dtInstance = {}
    vm.persons = {}

    $scope.toggle = function () {
      $scope.state = !$scope.state
    }

    function callback (json) {
      console.log(json)
    }
    $rootScope.reloadDataFornecedor = function (_callback) {
      var resetPaging = false
      vm.dtInstance.reloadData(_callback, resetPaging)
    }

    vm.edit = edit
    vm.delete = deleteRow
    vm.dtInstance = {}
    vm.persons = {}

    function rCallback (nRow, aData) {
      // console.log('row')
    }

    function recompile (row, data, dataIndex) {
      $compile(angular.element(row).contents())($scope)
    }

    var createdRow = function (row, data, dataIndex) {
      // Recompiling so we can bind Angular directive to the DT
      $compile(angular.element(row).contents())($scope)
    }

    var fnDataSRC = function (json) {
      console.log(json)
      json['recordsTotal'] = json.fornecedorList.length
      json['recordsFiltered'] = json.fornecedorList.length
      json['draw'] = 1
      console.log(json)
      return json.fornecedorList
    }

    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
      'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">'

    var actionsHtml = function (data, type, full, meta) {
      return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
        '   <i class="glyphicon glyphicon-save"></i>' +
        '</button>&nbsp;' +
        '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-trash-o"></i>' +
        '</button>'
    }

    function edit (person) {
      $rootScope.fornecedor = person
      dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html', 'FornecedorUpdateController', validationFactory.fornecedor())
    }

    function deleteRow (person) {
      $rootScope.fornecedor = person
      dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html', 'FornecedorDeleteController', validationFactory.fornecedor())
    }

    Datatablessss.getTable('/pessoa/api/fornecedor/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.fornecedor(vm, createdRow, $scope, FiltersFactory.fornecedor()  , $rootScope.reloadDataFornecedor), tableColumnsFactory.cliente(vm, titleHtml, actionsHtml))

    function toggleAll (selectAll, selectedItems) {
      for (var id in selectedItems) {
        if (selectedItems.hasOwnProperty(id)) {
          selectedItems[id] = selectAll
        }
      }
    }

    function status () {
    }

    function toggleOne (selectedItems) {
      for (var id in selectedItems) {
        if (selectedItems.hasOwnProperty(id)) {
          if (!selectedItems[id]) {
            vm.selectAll = false
            return
          }
        }
      }
      vm.selectAll = true
    }

    function toggle () {
      $scope.state = !$scope.state
    }
  }
})()
;(function () {
  angular.module('wdApp.apps.fornecedor.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('FornecedorInsertController', function ($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close, fPessoa, doisValorFactory,validationFactory) {

      var vm = this

      fPessoa.fnOpenView(vm,$scope);

      $scope.format = $scope.formats[1]
      var fnCallBack = function (res) {
        if (res.operationSuccess == true) {
          $element.modal('hide')
          close(null, 500)
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          $rootScope.reloadDataFornecedor(function (data) {
            debugger
          })
        }
      }
      $scope.saveFornecedor = function (bValid) {
        if(bValid)
          fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, 'INSERT', 'pessoa/api/fornecedor/insert', fnCallBack)
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.fornecedor.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('FornecedorUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close, fPessoa, doisValorFactory,validationFactory) {
      var vm = this
      $scope.fornecedor = {}
      $scope.fornecedor = $rootScope.fornecedor

      fPessoa.fnOpenView(vm,$scope);
      // ===========================================

      $scope.saveFornecedor = function () {
        fPessoa.fnMontaObjeto($scope.fornecedor, $scope.endereco, 'UPDATE', 'site/api/fornecedor/update/', fnCallBack)
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.fornecedor.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('FornecedorDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.fornecedor = {}
      $scope.fornecedor = $rootScope.fornecedor
      console.log($rootScope.fornecedor)
      $scope.saveFornecedor = function () {
        fPessoa.fnDelete($scope.fornecedor, 'site/api/fornecedor/update/', function () {console.log('ddda   aqui')})
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.fornecedor.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('FornecedorViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.fornecedor = {}
      $scope.fornecedor = $rootScope.fornecedor
      console.log($rootScope.fornecedor)
      $scope.saveFornecedor = function () {
        fPessoa.fnOpenView($scope.fornecedor, 'site/api/fornecedor/update/', function () {console.log('aqui')})
      }
    })
})()
