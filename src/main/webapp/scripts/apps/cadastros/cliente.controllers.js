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

      $scope.today = function () {
        $scope.dt = new Date()
      }
      $scope.today()

      $scope.clear = function () {
        $scope.dt = null
      }

      $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      }

      $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      }

      // Disable weekend selection
      function disabled (data) {
        var date = data.date,
          mode = data.mode
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6)
      }

      $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date()
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate
      }

      $scope.toggleMin()

      $scope.open1 = function () {
        $scope.popup1.opened = true
      }

      $scope.open2 = function () {
        $scope.popup2.opened = true
      }

      $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day)
      }

      $scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate']
      $scope.format = $scope.formats[1]
      $scope.altInputFormats = ['M!/d!/yyyy']

      $scope.popup1 = {
        opened: false
      }

      $scope.popup2 = {
        opened: false
      }

      var tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      var afterTomorrow = new Date()
      afterTomorrow.setDate(tomorrow.getDate() + 1)
      $scope.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ]

      function getDayClass (data) {
        var date = data.date,
          mode = data.mode
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0)

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0)

            if (dayToCheck === currentDay) {
              return $scope.events[i].status
            }
          }
        }

        return ''
      }

      $scope.emails = [
        {
          nome: 'form1',
          email: {
            emailTypeEnum: 1
          }
        }]
      $scope.telefones = [
        {
          nome: 'form1',
          telefone: {
            telefoneTypeEnum: 1
          }
        }]
      $scope.confirmed = ''
      $scope.empresa = {
        tipoPessoa: 1,
        pessoaTipo: [],
        documentos: [
          {
            documentoTypeEnumValue: 1,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 2,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 12,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 4,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 14,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 10,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 3,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 11,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          }]
      }

      $scope.cliente = {
        pessoaTipos: [
          {
            pessoaTypeEnum: 'CLIENTE',
            label: 'Cliente'
          },
          {
            pessoaTypeEnum: 'FORNECEDOR',
            label: 'Fornecedor'
          },
          {
            pessoaTypeEnum: 'TRANSPORTADOR',
            label: 'Transportador'
          },
          {
            pessoaTypeEnum: 'CONSFINAL',
            label: 'Consumidor Final'
          }]
      }

      $scope.changes = function ($event, id) {
        var checkbox = $event.target
        if (checkbox.checked) {
          $scope.empresa.pessoaTipo.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum, 'INSERT', 'System'))
        }else {
          for (x = 0; x < $scope.empresa.pessoaTipo.length; x++) {
            if ($scope.empresa.pessoaTipo[x].pessoaTypeEnum == id.pessoaTypeEnum) {
              $scope.empresa.pessoaTipo.splice(x, 1)
            }
          }
        //  $scope.empresa.pessoaTipo.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
        }
        console.log($scope.empresa.pessoaTipo)
      }

      // Endereço
      $scope.enderecos = []
      $scope.enderecos[0] = {
        bairro: '',
        complemento: '',
        codIbge: '',
        cidade: {},
        logradouro: ''
      }

      var callbackEstado = function (res) {
        if (res.operationSuccess == true) {
          $scope.estados = res.estadoList
        }
      }

      var callbackCidade = function (res) {
        if (res.operationSuccess == true) {
          $scope.cidades = res.cidadeList
        }
      }

      doisValorFactory.empresa($scope)

      qat.model.select.anonimo('cadastros/api/estado/fetchPage', true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado)

      $scope.countrySelected = function (selected) {
        if (selected) {
          qat.model.select.anonimo('cadastros/api/cidade/fetchPage', true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade)
        }
      }

      $scope.buscaRCep = function (_cepValue) {
        var cepValue = _cepValue
        var formatedCep
        debugger
        $.getJSON('//viacep.com.br/ws/' + _cepValue + '/json/?callback=?', function (res) {
          console.log(res)

          $scope.enderecos[0].bairro = res.bairro
          $scope.enderecos[0].complemento = res.complemento
          $scope.enderecos[0].codIbge = res.ibge
          $scope.enderecos[0].cidade = {
            nome: res.localidade,
            estado: {
              abreviacao: res.uf
            }
          }
          $scope.enderecos[0].logradouro = res.logradouro
        })
      }
      // ========================================

      // ============== Validation ====================
      $scope.validationCPF = function(tipo, value)
			{
				if (value && tipo == 1)
				{
					validationFactory.cpf(value);
				}
        else
          return true;
			}

			$scope.validationCNPJ = function(tipo, cnpj)
			{

				if (tipo && tipo == 2)
				{
					validationFactory.cnpj(cnpj);
				}
				else
				{
					return true;
				}
			}
			$scope.validationInsEst = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return true

					}
					else
					{
						return false

					}
				}
				else
				{
					return true
				}
			}
      $scope.validationInsMun = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return true

					}
					else
					{
						return false

					}
				}
				else
				{
					return true
				}
			}
     // ===========================================

      $scope.format = $scope.formats[1]
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
      console.log($rootScope.cliente)

       // Endereço
      $scope.enderecos = []
      $scope.enderecos[0] = {
        bairro: '',
        complemento: '',
        codIbge: '',
        cidade: {},
        logradouro: ''
      }

      var callbackEstado = function (res) {
        if (res.operationSuccess == true) {
          $scope.estados = res.estadoList
        }
      }

      var callbackCidade = function (res) {
        if (res.operationSuccess == true) {
          $scope.cidades = res.cidadeList
        }
      }

      doisValorFactory.empresa($scope)

      qat.model.select.anonimo('cadastros/api/estado/fetchPage', true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado)

      $scope.countrySelected = function (selected) {
        if (selected) {
          qat.model.select.anonimo('cadastros/api/cidade/fetchPage', true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade)
        }
      }

      $scope.buscaRCep = function (_cepValue) {
        var cepValue = _cepValue
        var formatedCep
        debugger
        $.getJSON('//viacep.com.br/ws/' + _cepValue + '/json/?callback=?', function (res) {
          console.log(res)

          $scope.enderecos[0].bairro = res.bairro
          $scope.enderecos[0].complemento = res.complemento
          $scope.enderecos[0].codIbge = res.ibge
          $scope.enderecos[0].cidade = {
            nome: res.localidade,
            estado: {
              abreviacao: res.uf
            }
          }
          $scope.enderecos[0].logradouro = res.logradouro
        })
      }
      // ========================================

      // ============== Validation ====================
      $scope.validationCPF = function(tipo, value)
			{
				if (value && tipo == 1)
				{
					validationFactory.cpf(value);
				}
        else
          return true
			}

			$scope.validationCNPJ = function(tipo, cnpj)
			{

				if (tipo && tipo == 2)
				{
					validationFactory.cnpj(cnpj);
				}
				else
				{
					return true;
				}
			}
			$scope.validationInsEst = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return true

					}
					else
					{
						return false

					}
				}
				else
				{
					return true
				}
			}
      $scope.validationInsMun = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return true

					}
					else
					{
						return false

					}
				}
				else
				{
					return true
				}
			}
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
