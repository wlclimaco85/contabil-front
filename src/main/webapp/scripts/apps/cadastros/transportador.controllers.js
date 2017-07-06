(function () {
  angular.module('wdApp.apps.compras', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorController', transportadorController)

  function transportadorController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
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

    vm.edit = edit
    vm.delete = deleteRow
    vm.dtInstance = {}
    vm.persons = {}

    function callback (json) {
      console.log(json)
    }
    $rootScope.reloadDataTransportador = function (_callback) {
      var resetPaging = false
      vm.dtInstance.reloadData(_callback, resetPaging)
    }

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
      json['recordsTotal'] = json.transportadorList.length
      json['recordsFiltered'] = json.transportadorList.length
      json['draw'] = 1
      console.log(json)
      return json.transportadorList
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
      dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', 'TransportadorUpdateController', validationFactory.transportador())
    }

    function deleteRow (person) {
      $rootScope.cliente = person
      dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', 'TransportadorDeleteController', validationFactory.transportador())
    }

    Datatablessss.getTable('/pessoa/api/transportador/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.transportador(vm, createdRow, $scope, FiltersFactory.transportador(), $rootScope.reloadDataTransportador), tableColumnsFactory.cliente(vm, titleHtml, actionsHtml))

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
})();
(function () {
  angular.module('wdApp.apps.transportador.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorInsertController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this

       fPessoa.fnOpenView(vm,$scope);
      
     // ===========================================
      var fnCallBack = function (res) {
        if (res.operationSuccess == true) {
          $element.modal('hide')
          close(null, 500)
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          $rootScope.reloadDataTransportador(function (data) {
            debugger
          })
        }
      }

      $scope.saveTransportador = function (bValidate,b) {
        if(bValidate)
            fPessoa.fnMontaObjeto($scope.cliente, $scope.endereco, $scope.emails, $scope.telefones, 'INSERT', 'pessoa/api/transportador/insert', fnCallBack)
      }
    })
})();
(function () {
  angular.module('wdApp.apps.transportador.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.transportador = {}

       fPessoa.fnOpenView(vm,$scope);
      
     // ===========================================
      var fnCallBack = function (res) {
        if (res.operationSuccess == true) {
          $element.modal('hide')
          close(null, 500)
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          $rootScope.reloadDataTransportador(function (data) {
            debugger
          })
        }
      }

      $scope.saveTransportador = function () {
        fPessoa.fnMontaObjeto($scope.cliente, $scope.endereco, $scope.emails, $scope.telefones, 'UPDATE', 'pessoa/api/transportador/update', fnCallBack)
      }
    })
})();
(function () {
  angular.module('wdApp.apps.transportador.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.Transportador = {}
      $scope.Transportador = $rootScope.transportador
      console.log($rootScope.transportador)
      $scope.saveTransportador = function () {
        fPessoa.fnDelete($scope.transportador, 'site/api/transportador/update/', function () {
          console.log('ddda   aqui')
        })
      }
    })
})();
(function () {
  angular.module('wdApp.apps.transportador.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.transportador = {}
      $scope.transportador = $rootScope.transportador
      console.log($rootScope.transportador)
      $scope.saveTransportador = function () {
        fPessoa.fnOpenView($scope.transportador, 'site/api/transportador/update/', function () {
          console.log('aqui')
        })
      }
    })
})();
(function () {
  angular.module('wdApp.apps.transportador.table', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorController', transportadorsController)

  function transportadorsController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
    var vm = this
    vm.selected = {}
    vm.selectAll = false
    vm.toggleAll = toggleAll
    vm.toggleOne = toggleOne
    vm.status = status
    vm.message = ''
    vm.edit = edit
    vm.delete = deleteRow
    vm.dtInstance = {}
    vm.persons = {}
    vm.alterStatus = alterStatus
    vm.historico = historico
    vm.addAdvogado = addAdvogado
    vm.envolvidos = envolvidos
    $scope.cliente = {
      tipoPessoa: 2
    }

    var openDialogUpdateCreate = function () {
      bookIndex = 0
      $('.TransportadorForm')
        .formValidation(
          {
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'razao': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
    }

    $scope.toggle = function () {
      $scope.state = !$scope.state
    }
    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
      'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">'
    var oOptions = DTOptionsBuilder.newOptions()
      .withDOM('frtip')
      .withPaginationType('full_numbers')
      .withOption('createdRow', createdRow)
      .withOption('headerCallback', function (header) {
        if (!vm.headerCompiled) {
          // Use this headerCompiled field to only compile header once
          vm.headerCompiled = true
          $compile(angular.element(header).contents())($scope)
        }
      })
      .withPaginationType('full_numbers')
      .withColumnFilter(
        {
          aoColumns: [
            {
              type: 'number'
            },
            {
              type: 'number'
            },
            {
              type: 'select',
              values: ['Entrada', 'Saida']
            },
            {
              type: 'text'
            },
            {
              type: 'text'
            },
            {
              type: 'text'
            }]
        })
      .withOption('initComplete', function (settings, json) {
        $('.dt-buttons').find('.dt-button:eq(1)').before(
          '<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"' +
          'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">' +
          '<option><a href="#">Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>' +
          '<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>' +
          '</select>'
        )
      })
      .withOption('processing', true)
      .withOption('language',
        {
          paginate: { // Set up pagination text
            first: '&laquo;',
            last: '&raquo;',
            next: '&rarr;',
            previous: '&larr;'
          },
          lengthMenu: '_MENU_ records per page'
        })
      .withButtons([
        {
          extend: 'colvis',
          fileName: 'Data_Analysis',
          exportOptions: {
            columns: ':visible'
          },
          exportData: {
            decodeEntities: true
          }
        },
        {
          extend: 'csvHtml5',
          fileName: 'Data_Analysis',
          exportOptions: {
            columns: ':visible'
          },
          exportData: {
            decodeEntities: true
          }
        },
        {
          extend: 'pdfHtml5',
          fileName: 'Data_Analysis',
          title: 'Data Analysis Report',
          exportOptions: {
            columns: ':visible'
          },
          exportData: {
            decodeEntities: true
          }
        },
        {
          extend: 'copy',
          fileName: 'Data_Analysis',
          title: 'Data Analysis Report',
          exportOptions: {
            columns: ':visible'
          },
          exportData: {
            decodeEntities: true
          }
        },
        {
          extend: 'print',
          // text: 'Print current page',
          autoPrint: true,
          exportOptions: {
            columns: ':visible'
          }
        },
        {
          extend: 'excelHtml5',
          filename: 'Data_Analysis',
          title: 'Data Analysis Report',
          exportOptions: {
            columns: ':visible'
          },
          // CharSet: "utf8",
          exportData: {
            decodeEntities: true
          }
        },
        {
          text: 'Novo Plano',
          key: '1',
          action: function (e, dt, node, config) {
            dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', 'TransportadorInsertController', openDialogUpdateCreate)
          }
        }])
    var aColumns = [
      DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
        .renderWith(function (data, type, full, meta) {
          vm.selected[full.id] = false
          return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>'
        }).withOption('width', '10px'),
      DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
      DTColumnBuilder.newColumn('razao').withTitle('Nome ou Razão social'),
      DTColumnBuilder.newColumn('nome').withTitle('Nome Fantasia'),
      DTColumnBuilder.newColumn('cnpj').withTitle('CPF ou CNPJ'),
      DTColumnBuilder.newColumn('IES').withTitle('Inscr Est Subst Trib').notVisible(),
      DTColumnBuilder.newColumn('IIE').withTitle('Indicador de IE').notVisible(),
      DTColumnBuilder.newColumn('IE').withTitle('Inscrição Estadual').notVisible(),
      DTColumnBuilder.newColumn('IM').withTitle('Inscrição Municipal').notVisible(),
      DTColumnBuilder.newColumn('IF').withTitle('Inscrição Suframa').notVisible(),
      DTColumnBuilder.newColumn('cep').withTitle('CEP').notVisible(),
      DTColumnBuilder.newColumn('logradouro').withTitle('Logradouro'),
      DTColumnBuilder.newColumn('numero').withTitle('Numero'),
      DTColumnBuilder.newColumn('cidade').withTitle('Cidade'),
      DTColumnBuilder.newColumn('estado').withTitle('Estado').notVisible(),
      DTColumnBuilder.newColumn('pais').withTitle('Pais').notVisible(),
      DTColumnBuilder.newColumn('telefone').withTitle('Telefone'),
      DTColumnBuilder.newColumn('email').withTitle('Email').notVisible(),
      DTColumnBuilder.newColumn('dtNasc').withTitle('Data Nascimento').notVisible(),
      DTColumnBuilder.newColumn('dataCadastro').withTitle('Data Cadastro').notVisible(),
      DTColumnBuilder.newColumn('obs').withTitle('Observação').notVisible(),
      DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
      DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
      DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '140px')
    ]

    function rCallback (nRow, aData) {
      // console.log('row')
    }

    function recompile (row, data, dataIndex) {
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
    Datatablessss.getTable('/pessoa/api/cliente/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions,
      aColumns)

    function edit (person) {
      $rootScope.transportador = person
      dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', 'TransportadorUpdateController', openDialogUpdateCreate)
    }

    function deleteRow (person) {
      dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', 'TransportadorDeleteController', openDialogUpdateCreate)
    }

    function createdRow (row, data, dataIndex) {
      // Recompiling so we can bind Angular directive to the DT
      $compile(angular.element(row).contents())($scope)
    }

    function actionsHtml (data, type, full, meta) {
      vm.persons[data.id] = data
      return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
        '   <i class="glyphicon glyphicon-save"></i>' +
        '</button>&nbsp;' +
        '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-trash-o"></i>' +
        '</button>'
    }

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
})();
(function () {
  angular.module('wdApp.apps.transportador.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('TransportadorSearchController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
      var vm = this
      $scope.transportador = []
      $scope.pessoa = null
      $scope.countrySelected = function (selected) {
        // debugger
        if (selected) {
          // debugger
          $scope.pessoa = selected.originalObject
        }else {
          console.log('cleared')
        }
      }

      SysMgmtData.processPostPageData('main/api/request',
        {
          url: 'pessoa/api/transportador/fetchPage',
          token: $rootScope.authToken,
          request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
        }, function (res) {
          //  debugger
          $scope.transportador = res.transportadorList
        })
    })
})()
