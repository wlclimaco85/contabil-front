;(function () {
    angular.module('wdApp.apps.processo', ['datatables', 'ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoController', processoController)
  
    function processoController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
      tableColumnsFactory, FiltersFactory, validationFactory,dialogFactory) {
      var vm = this
      vm.selected = {}
      vm.selectAll = false
      vm.toggleAll = toggleAll
      vm.toggleOne = toggleOne
      vm.status = status
      vm.message = ''
  
      vm.dtInstance = {}
      vm.persons = {}
  
      $scope.processo = {
        tipoPessoa: 2
      }
  
  
      function reloadData () {
        var resetPaging = false
        vm.dtInstance.reloadData(callback, resetPaging)
      }
  
      function callback (json) {
        console.log(json)
      }
      $rootScope.reloadDataProcesso = function (_callback) {
        var resetPaging = false
        vm.dtInstance.reloadData(_callback, resetPaging)
      }
  
      $scope.toggle = function () {
        $scope.state = !$scope.state
      }
  
      vm.edit = edit;
      vm.view = view;
      vm.delete = deleteRow;
      vm.dtInstance = {};
      vm.persons = {};
  
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
        json['recordsTotal'] = json.processoList.length
        json['recordsFiltered'] = json.processoList.length
        json['draw'] = 1
        console.log(json)
        return json.processoList
      }
  
      var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">'
  
      var actionsHtml = function (data, type, full, meta) {
        vm.persons[data.id] = data;
        return '<a href="#/advogado/details/processo" class="btn btn-warning"><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
        '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-edit"></i>' +
        '</button>&nbsp;' +
        '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-trash-o"></i>' +
        '</button>'
      }
  
      function edit (person) {
        $rootScope.processo = person
        dialogFactory.dialog('views/advogado/dialog/dProcesso.html', 'ProcessoUpdateController', validationFactory.processo())
      }
      function view (person) {
        $rootScope.processo = person
        //  Datatablessss.reloadData(vm)
        dialogFactory.dialog('views/advogado/dialog/dProcesso.html', 'ProcessoUpdateController', validationFactory.processo())
      }
  
      function deleteRow (person) {
        $rootScope.processo = person
        dialogFactory.dialog('views/advogado/dialog/dProcesso.html', 'ProcessoDeleteController', validationFactory.processo())
      }
  
      Datatablessss.getTable('/advocacia/api/processo/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile,
        tableOptionsFactory.processo(vm, createdRow, $scope, FiltersFactory.processo(), reloadData), tableColumnsFactory.processo(vm, '', actionsHtml))
  
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
    angular.module('wdApp.apps.processo.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoInsertController', function ($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close,  doisValorFactory,validationFactory) {
        var vm = this
  
      
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.processo.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa, toastr, $element, close,validationFactory) {
        var vm = this
        $scope.processo = {}
  
        $scope.processo = $rootScope.processo;
        $scope.enderecos =  $scope.processo.enderecos;
        $scope.telefones = $scope.processo.telefones;
        $scope.emails = $scope.processo.emails;
        $scope.documentos = $scope.processo.documentos;
  
        fPessoa.fnOpenView(vm,$scope);
  
       // ===========================================
        var fnCallBack = function (res) {
          if (res.operationSuccess == true) {
            $element.modal('hide')
            close(null, 500)
            toastr.success('Deu Certo seu tanga.', 'Sucess')
            $rootScope.reloadDataProcesso(function (data) {
              //debugger
            })
          }
        }
  
        $scope.saveProcesso = function (bValidate,b) {
          if(bValidate)
              fPessoa.fnMontaObjeto($scope.processo, $scope.enderecos, $scope.emails, $scope.telefones, 'UPDATE', 'pessoa/api/processo/update', fnCallBack)
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.processo.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
        var vm = this
        $scope.processo = {}
        $scope.processo = $rootScope.processo
        console.log($rootScope.processo)
        $scope.saveProcesso = function () {
          fPessoa.fnDelete($scope.processo, 'pessoa/api/processo/update/', function () {
            console.log('ddda   aqui')
          })
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.processo.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa, $location, toastr) {
        var vm = this
  
        var searchObject = $location.search();
              var _emprId = null;
              if ((localStorage.getItem('empresa') !== undefined) && (localStorage.getItem('empresa') !== null))
              {
                  _emprId = JSON.parse(localStorage.getItem('empresa')).id;
        }
  
        SysMgmtData.processPostPageData("main/api/request",
              {
                  url: "pessoa/api/processo/fetchPage",
                  token: $rootScope.authToken,
                  request: new qat.model.empresaInquiryRequest(0, true, null, parseInt(searchObject.id, 10), null, null)
              }, function(res)
              {
          $scope.processo = {}
          $scope.processo = res.processoList[0];
          console.log($scope.processo);
  
          if($scope.processo.emails.length === 0 )
          {
            $scope.processo.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
          }
  
          $scope.status = $scope.processo.statusList[$scope.processo.statusList.length - 1];
          console.log($scope.processo);
        });
        $scope.showEmailType = function() {
          var sReturn = 'Not set';
          if($scope.regime)
          {
                for(var x = 0;x < $scope.regime.length;x++)
                {
                    if( $scope.empresa.regime && $scope.regime[x].id == $scope.empresa.regime.id)
                    {
                        sReturn =  $scope.regime[x].nome
                    }
                }
          }
          return sReturn;
        };
  
  
  
        $scope.insertFormTelefone = function(email) {
          $scope.processo.telefones.push({numero : "",telefoneTypeEnum : "EMPRESA"});
        };
  
        $scope.deleteFormTelefone = function(email) {
  
          for(var x=0;x < $scope.processo.telefones.length;x++)
          {
            if($scope.processo.telefones[x].id == email.id || $scope.processo.telefones[x].numero == email.numero)
            {
              $scope.processo.telefones[x].modelAction = "DELETE";
            }
          }
          $scope.updateProcesso();
        };
  
        $scope.insertFormEmail = function(email) {
          $scope.processo.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
        };
  
        $scope.deleteFormEmailsdddd = function(email) {
  
          for(var x=0;x < $scope.processo.emails.length;x++)
          {
            if($scope.processo.emails[x].id == email.id || $scope.processo.emails[x].email == email.email)
            {
              $scope.processo.emails[x].modelAction = "DELETE";
            }
          }
          $scope.updateProcesso();
        };
  
        $scope.emailType = [
          {nome : '1',label : 'Principal'},
          {nome : '2',label : 'NFe'},
          {nome : '3',label : 'Compras'},
          {nome : '4',label : 'Vendas'},
          {nome : '5',label : 'Outros'}
        ];
  
        $scope.statusType = [
          {nome : 'ATIVO',label : 'Ativo'},
          {nome : 'INATIVO',label : 'Inativo'},
          {nome : 'DELETADO',label : 'Deletado'},
          {nome : 'SUSPENSO',label : 'Suspenso'},
          {nome : 'NEGATIVADO',label : 'Negativado'},
          {nome : 'ANALISANDO',label : 'Analisando'}
        ];
  
        $scope.telefoneType = [
          {nome : '1',label : 'Particular'},
          {nome : '2',label : 'Vendas'},
          {nome : '3',label : 'Compras'},
          {nome : '4',label : 'NF-e'},
          {nome : '5',label : 'Sac'},
          {nome : '6',label : 'Representante'},
          {nome : '7',label : 'Diretor'},
          {nome : '8',label : 'Gerente'},
          {nome : '9',label : 'Empresa'},
          {nome : '10',label : 'Celular'}
        ];
  
  
        $scope.showEmailType = function(value) {
          var sReturn = 'Vazio';
          if($scope.emailType)
          {
                for(var x = 0;x < $scope.emailType.length;x++)
                {
                    if( value && $scope.emailType[x].nome == value)
                    {
                        sReturn =  $scope.emailType[x].label
                    }
                }
          }
          return sReturn;
        };
  
        $scope.showTelefoneType = function(value) {
          console.log(value)
          var sReturn = 'Vazio';
          if($scope.telefoneType)
          {
                for(var x = 0;x < $scope.telefoneType.length;x++)
                {
                    if( value && $scope.telefoneType[x].nome == value)
                    {
                        sReturn =  $scope.telefoneType[x].label
                    }
                }
          }
          return sReturn;
        };
  
        $scope.showStatusType = function(value) {
  
          var sReturn = 'Vazio';
  
          if($scope.statusType)
          {
                for(var x = 0;x < $scope.statusType.length;x++)
                {
                    if( value && $scope.statusType[x].nome == value)
                    {
                        sReturn =  $scope.statusType[x].label
                    }
                }
          }
  
          return sReturn;
        };
  
        var fnCallBack = function (res) {
          if (res.operationSuccess == true) {
            for (var a = 0; a < res.processoList.length;a++)
            {
                if( res.processoList[a].id === $scope.processo.id)
                {
                  $scope.processo = res.processoList[a];
                  if($scope.processo.emails.length === 0 )
                  {
                    $scope.processo.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
                  }
                  return;
                }
  
            }
  
            toastr.success('Deu Certo seu tanga.', 'Sucess')
          }
        }
  
        $scope.formatterDate = function (value) {
          return moment(value).format('DD/MM/YYYY H:MM')
        }
        $scope.updateStatus = function () {
  
            var oObject = {
              dataStatus: (new Date()).getTime(),
              status : $scope.status.status,
              acaoEnumValue : 0,
              tabelaEnumValue : 17,
              parentId : $scope.processo.id,
              note: $scope.status.note
            }
  
            SysMgmtData.processPostPageData("main/api/request", {
                url: "entidade/api/status/insert",
                token: $rootScope.authToken,
                request: new qat.model.reqStatus(oObject, true, true)
            }, function(res) {
                if (res.operationSuccess == true) {
                  SysMgmtData.processPostPageData("main/api/request",
                  {
                    url: "pessoa/api/processo/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, parseInt($scope.processo.id, 10), null, null)
                  }, function(res)
                  {
                    $scope.processo = {}
                    $scope.processo = res.processoList[0];
                    console.log($scope.processo);
  
                    if($scope.processo.emails.length === 0 )
                    {
                      $scope.processo.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
                    }
  
                    $scope.status = $scope.processo.statusList[$scope.processo.statusList.length - 1];
                  });
                  toastr.success('Deu Certo seu tanga.', 'Sucess')
                }
            });
        }
  
        $scope.insertNote = function () {
  //debugger
            var oObject = {
              dataStatus: (new Date()).getTime(),
              noteText : $scope.noteText,
              acaoEnumValue : 0,
              tabelaEnumValue : 17,
              parentId : $scope.processo.id,
              emprId : $scope.processo.emprId,
              createUser : $rootScope.user.user,
              createDateUTC : (new Date()).getTime()
            }
  
            SysMgmtData.processPostPageData("main/api/request", {
                url: "entidade/api/note/insert",
                token: $rootScope.authToken,
                request: new qat.model.reqNote(oObject, true, true)
            }, function(res) {
                if (res.operationSuccess == true) {
                  SysMgmtData.processPostPageData("main/api/request",
                  {
                    url: "pessoa/api/processo/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, parseInt($scope.processo.id, 10), null, null)
                  }, function(res)
                  {
                    $scope.processo = {}
                    $scope.processo = res.processoList[0];
                    console.log($scope.processo);
  
                    if($scope.processo.emails.length === 0 )
                    {
                      $scope.processo.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
                    }
  
                    $scope.status = $scope.processo.statusList[$scope.processo.statusList.length - 1];
                  });
                  toastr.success('Deu Certo seu tanga.', 'Sucess')
                }
            });
        }
        $scope.updateProcesso = function () {
  
          fPessoa.fnMontaObjeto($scope.processo, $scope.processo.enderecos, $scope.processo.emails, $scope.processo.telefones, 'UPDATE', 'pessoa/api/processo/update', fnCallBack);
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.processo.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('ProcessoSearchController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
        var vm = this
        $scope.visibled = false
        //   $scope.processo = []
  
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
            url: 'pessoa/api/processo/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
          }, function (res) {
            //  debugger
            $scope.processo = res.processoList
          })
      })
  })()