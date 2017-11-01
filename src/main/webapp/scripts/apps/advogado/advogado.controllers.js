;(function () {
    angular.module('wdApp.apps.advogado', ['datatables', 'ngResource', 'datatables.scroller','ui.bootstrap', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoController', advogadoController)

    function advogadoController ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
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

      $scope.advogado = {
        tipoPessoa: 2
      }

      function reloadData () {
        var resetPaging = false
        vm.dtInstance.reloadData(callback, resetPaging)
      }

      function callback (json) {
        console.log(json)
      }
      $rootScope.reloadDataAdvogado = function (_callback) {
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
        json['recordsTotal'] = json.advogadoList.length
        json['recordsFiltered'] = json.advogadoList.length
        json['draw'] = 1
        console.log(json)
        return json.advogadoList
      }

      var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">'

      var actionsHtml = function (data, type, full, meta) {
        vm.persons[data.id] = data;
        return '<a href="#/advogado/details/advogado?id=' + data.id + '"  class="btn btn-info"><i class="fa fa-eye"></i></a>&nbsp;' +
        '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-edit"></i>' +
        '</button>&nbsp;' +
        '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
        '   <i class="fa fa-trash-o"></i>' +
        '</button>'
      }

      function edit (person) {
        $rootScope.advogado = person
        dialogFactory.dialog('views/advogado/dialog/dAdvogado.html', 'AdvogadoUpdateController', validationFactory.advogado())
      }
      function view (person) {
        $rootScope.advogado = person
        //  Datatablessss.reloadData(vm)
        dialogFactory.dialog('views/advogado/dialog/dAdvogado.html', 'AdvogadoUpdateController', validationFactory.advogado())
      }

      function deleteRow (person) {
        $rootScope.advogado = person
        dialogFactory.dialog('views/advogado/dialog/dAdvogado.html', 'AdvogadoDeleteController', validationFactory.advogado())
      }

      Datatablessss.getTable('/pessoa/api/advogado/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile,
        tableOptionsFactory.advogado(vm, createdRow, $scope, FiltersFactory.advogado(), reloadData), tableColumnsFactory.advogado(vm, '', actionsHtml))

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
    angular.module('wdApp.apps.advogado.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoInsertController', function ($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close,fAdvogado) {
        var vm = this
        fAdvogado.fnOpenView(vm, $scope);

        fAdvogado.fnCreateMock($scope);

        var fnCallBack = function (res) {
            debugger
            if (res.operationSuccess == true) {
                $element.modal('hide')
                close(null, 500)
                toastr.success('Deu Certo seu tanga.', 'Sucess')
                $rootScope.reloadDataAdvogado(function (data) {
                //debugger
                })
            }
        }

        $scope.saveAdvogado = function (bValidate,b) {
          //debugger
     //     if(bValidate)

            fAdvogado.fnMontaObjeto($scope.enderecos, $scope.telefones, $scope.emails, $scope.advogado, 'INSERT', 'pessoa/api/advogado/insert',fnCallBack);
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.advogado.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoUpdateController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa, toastr, $element, close,validationFactory) {
        var vm = this
        $scope.advogado = {}

        $scope.advogado = $rootScope.advogado;
        $scope.enderecos =  $scope.advogado.enderecos;
        $scope.telefones = $scope.advogado.telefones;
        $scope.emails = $scope.advogado.emails;
        $scope.documentos = $scope.advogado.documentos;

        fPessoa.fnOpenView(vm,$scope);

       // ===========================================
        var fnCallBack = function (res) {
          if (res.operationSuccess == true) {
            $element.modal('hide')
            close(null, 500)
            toastr.success('Deu Certo seu tanga.', 'Sucess')
            $rootScope.reloadDataAdvogado(function (data) {
              //debugger
            })
          }
        }

        $scope.saveAdvogado = function (bValidate,b) {
          if(bValidate)
              fPessoa.fnMontaObjeto($scope.advogado, $scope.enderecos, $scope.emails, $scope.telefones, 'UPDATE', 'pessoa/api/advogado/update', fnCallBack)
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.advogado.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoDeleteController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
        var vm = this
        $scope.advogado = {}
        $scope.advogado = $rootScope.advogado
        console.log($rootScope.advogado)
        $scope.saveAdvogado = function () {
          fPessoa.fnDelete($scope.advogado, 'pessoa/api/advogado/update/', function () {
            console.log('ddda   aqui')
          })
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.advogado.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoViewController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa, $location, toastr) {
        var vm = this

        var searchObject = $location.search();
              var _emprId = null;
              if ((localStorage.getItem('empresa') !== undefined) && (localStorage.getItem('empresa') !== null))
              {
                  _emprId = JSON.parse(localStorage.getItem('empresa')).id;
        }

        SysMgmtData.processPostPageData("main/api/request",
              {
                  url: "pessoa/api/advogado/fetchPage",
                  token: $rootScope.authToken,
                  request: new qat.model.empresaInquiryRequest(0, true, null, parseInt(searchObject.id, 10), null, null)
              }, function(res)
              {
          $scope.advogado = {}
          $scope.advogado = res.advogadoList[0];
          console.log($scope.advogado);

          if($scope.advogado.emails.length === 0 )
          {
            $scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
          }

          $scope.status = $scope.advogado.statusList[$scope.advogado.statusList.length - 1];
          console.log($scope.advogado);
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
          $scope.advogado.telefones.push({numero : "",telefoneTypeEnum : "EMPRESA"});
        };

        $scope.deleteFormTelefone = function(email) {

          for(var x=0;x < $scope.advogado.telefones.length;x++)
          {
            if($scope.advogado.telefones[x].id == email.id || $scope.advogado.telefones[x].numero == email.numero)
            {
              $scope.advogado.telefones[x].modelAction = "DELETE";
            }
          }
          $scope.updateAdvogado();
        };

        $scope.insertFormEmail = function(email) {
          $scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
        };

        $scope.deleteFormEmailsdddd = function(email) {

          for(var x=0;x < $scope.advogado.emails.length;x++)
          {
            if($scope.advogado.emails[x].id == email.id || $scope.advogado.emails[x].email == email.email)
            {
              $scope.advogado.emails[x].modelAction = "DELETE";
            }
          }
          $scope.updateAdvogado();
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
            for (var a = 0; a < res.advogadoList.length;a++)
            {
                if( res.advogadoList[a].id === $scope.advogado.id)
                {
                  $scope.advogado = res.advogadoList[a];
                  if($scope.advogado.emails.length === 0 )
                  {
                    $scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
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
              parentId : $scope.advogado.id,
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
                    url: "pessoa/api/advogado/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, parseInt($scope.advogado.id, 10), null, null)
                  }, function(res)
                  {
                    $scope.advogado = {}
                    $scope.advogado = res.advogadoList[0];
                    console.log($scope.advogado);

                    if($scope.advogado.emails.length === 0 )
                    {
                      $scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
                    }

                    $scope.status = $scope.advogado.statusList[$scope.advogado.statusList.length - 1];
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
              parentId : $scope.advogado.id,
              emprId : $scope.advogado.emprId,
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
                    url: "pessoa/api/advogado/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, parseInt($scope.advogado.id, 10), null, null)
                  }, function(res)
                  {
                    $scope.advogado = {}
                    $scope.advogado = res.advogadoList[0];
                    console.log($scope.advogado);

                    if($scope.advogado.emails.length === 0 )
                    {
                      $scope.advogado.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
                    }

                    $scope.status = $scope.advogado.statusList[$scope.advogado.statusList.length - 1];
                  });
                  toastr.success('Deu Certo seu tanga.', 'Sucess')
                }
            });
        }
        $scope.updateAdvogado = function () {

          fPessoa.fnMontaObjeto($scope.advogado, $scope.advogado.enderecos, $scope.advogado.emails, $scope.advogado.telefones, 'UPDATE', 'pessoa/api/advogado/update', fnCallBack);
        }
      })
  })()
  ;(function () {
    angular.module('wdApp.apps.advogado.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('AdvogadoSearchController', function ($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
        var vm = this
        $scope.visibled = false
        //   $scope.advogado = []

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
            url: 'pessoa/api/advogado/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
          }, function (res) {
            //  debugger
            $scope.advogado = res.advogadoList
          })
      })
  })()