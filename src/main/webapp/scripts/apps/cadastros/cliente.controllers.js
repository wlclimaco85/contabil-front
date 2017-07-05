;(function () {
  angular.module('wdApp.apps.cliente', ['datatables', 'ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteController', clienteController)

  function clienteController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
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

    $scope.cliente = {
      tipoPessoa: 2
    }

    function reloadData () {
      var resetPaging = false
      vm.dtInstance.reloadData(callback, resetPaging)
    }

    function callback (json) {
      console.log(json)
    }
    $rootScope.reloadDataCliente = function (_callback) {
      var resetPaging = false
      vm.dtInstance.reloadData(_callback, resetPaging)
    }

    $scope.toggle = function () {
      $scope.state = !$scope.state
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
      json['recordsTotal'] = json.clienteList.length
      json['recordsFiltered'] = json.clienteList.length
      json['draw'] = 1
      console.log(json)
      return json.clienteList
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
      $rootScope.cliente = person
      //  Datatablessss.reloadData(vm)
      dialogFactory.dialog('views/cadastros/dialog/dCliente.html', 'ClienteUpdateController', validationFactory.cliente())
    }

    function deleteRow (person) {
      $rootScope.cliente = person
      dialogFactory.dialog('views/cadastros/dialog/dCliente.html', 'ClienteDeleteController', validationFactory.cliente())
    }

    Datatablessss.getTable('/pessoa/api/cliente/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile,
      tableOptionsFactory.cliente(vm, createdRow, $scope, FiltersFactory.cliente(), reloadData), tableColumnsFactory.cliente(vm, '', actionsHtml))

    function toggleAll (selectAll, selectedItems) {
      for (var id in selectedItems) {
        if (selectedItems.hasOwnProperty(id)) {
          selectedItems[id] = selectAll
        }
      }
    }

    function status () {}

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
  angular.module('wdApp.apps.cliente.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteInsertController', function ($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close, fPessoa, doisValorFactory,validationFactory) {
      var vm = this

      fPessoa.fnOpenView(vm,$scope);

      var fnCallBack = function (res) {
        if (res.operationSuccess == true) {
          $element.modal('hide')
          close(null, 500)
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          $rootScope.reloadDataCliente(function (data) {
            debugger
          })
        }
      }

      $scope.saveCliente = function (bValidate) {
          if(bValidate)
              fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, 'INSERT', 'pessoa/api/cliente/insert', fnCallBack)
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.cliente.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa, toastr, $element, close,validationFactory) {
      var vm = this
      $scope.cliente = {}
      $scope.cliente = $rootScope.cliente

      fPessoa.fnOpenView(vm,$scope);

     // ===========================================
      var fnCallBack = function (res) {
        if (res.operationSuccess == true) {
          $element.modal('hide')
          close(null, 500)
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          $rootScope.reloadDataCliente(function (data) {
            debugger
          })
        }
      }

      $scope.saveCliente = function (bValidate,b) {
        if(bValidate)
            fPessoa.fnMontaObjeto($scope.cliente, $scope.endereco, $scope.emails, $scope.telefones, 'UPDATE', 'pessoa/api/cliente/update', fnCallBack)
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.cliente.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.cliente = {}
      $scope.cliente = $rootScope.cliente
      console.log($rootScope.cliente)
      $scope.saveCliente = function () {
        fPessoa.fnDelete($scope.cliente, 'pessoa/api/cliente/update/', function () {
          console.log('ddda   aqui')
        })
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.cliente.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.cliente = {}
      $scope.cliente = $rootScope.cliente
      console.log($rootScope.cliente)
      $scope.saveCliente = function () {
        fPessoa.fnOpenView($scope.cliente, 'pessoa/api/cliente/update/', function () {
          console.log('aqui')
        })
      }
    })
})()
;(function () {
  angular.module('wdApp.apps.cliente.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('ClienteSearchController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.visibled = false
      //   $scope.cliente = []

      $scope.countrySelected = function (selected) {
        // debugger
        if (selected) {
          $scope.pessoa = selected.originalObject
          $scope.visibled = true
        }else {
          console.log('cleared')
        }
      }

      SysMgmtData.processPostPageData('main/api/request',
        {
          url: 'pessoa/api/cliente/fetchPage',
          token: $rootScope.authToken,
          request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
        }, function (res) {
          //  debugger
          $scope.cliente = res.clienteList
        })
    })
})()
