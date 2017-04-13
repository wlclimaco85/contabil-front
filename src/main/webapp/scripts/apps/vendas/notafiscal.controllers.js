(function() {
    angular.module('wdApp.apps.nfSaida', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidasController', nfSaidaController);

    function nfSaidaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory,tableColumnsFactory,tableOptionsFactory,FiltersFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.message = '';
        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};
        vm.dtInstancePdVendas = {};

        $scope.pedidoVenda = {
            tipoPessoa: 2
        };

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };
        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';


        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.nfnotaList.length
            json['recordsFiltered'] = json.nfnotaList.length
            json['draw'] = 1
            console.log(json)
            return json.nfnotaList;


        }

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

        Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.nfSaida(vm,createdRow,$scope,FiltersFactory.nfSaida(), reloadData     ), tableColumnsFactory.nfSaida(vm,titleHtml,actionsHtml));

        function edit(person) {
            $rootScope.pedidoVenda = person;
            dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html',"NfSaidaUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.pedidoVenda = person;
           dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html',"NfSaidaDeleteController",openDialogUpdateCreate);
        }

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

        function deleteRowAll(person) {

            ModalService.showModal({
                templateUrl: 'cfopAllDelete.html',
                controller: "CfopController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;

            return ' <div class="dropdown">'+
              '<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
               ' Açoes'+
                '<span class="caret"></span>'+
              '</button>'+
              '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
                '<li><a href="#">Deletar</a></li>'+
                '<li><a href="#">Alterar</a></li>'+
                '<li><a href="#">Transformar em Pedido Compra</a></li>'+
                '<li role="separator" class="divider"></li>'+
                '<li><a href="#">Transformar Em NF-e</a></li>'+
              '</ul>'+
            '</div>'
        }
        function toggleAll (selectAll, selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }
        function toggleOne (selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    if(!selectedItems[id]) {
                        vm.selectAll = false;
                        return;
                    }
                }
            }
            vm.selectAll = true;
        }
    }
})();

(function() {
    angular.module('wdApp.apps.nfSaida.insert',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter','angucomplete','inputactions'])
        .controller('NfSaidaInsertController', function(localStorageService,$rootScope,$scope,fModels,SysMgmtData,fProduto,fNotaFiscal,validationFactory,doisValorFactory) {

            var vm = this;
            $scope.slotDisplayName = "teste00";
            $scope.empresa = null;
            $scope.estado = null;
            $scope.notaFiscal = {
                info : {
                    identificacao : {},
                    destinatario  : {}
                }
            };

            doisValorFactory.notaFiscal($scope);

            $scope.produtos = [{form : 'form',produto:{}}];

            $scope.cliente = [];

            $scope.enderecos = [];

            $scope.visibled = false
         //   $scope.cliente = [];

            $scope.countrySelected = function(selected) {
             // debugger
              if (selected) {

                $scope.pessoa = selected.originalObject;
                $scope.visibled = true;
              } else {
                console.log('cleared');
              }
            };

            $scope.calcProd = function(quant,valor)
            {
              return quant * valor;
            }

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //  debugger
                $scope.cliente = res.clienteList;
            });

            SysMgmtData.processPostPageData("main/api/request", {
                url: "cadastros/api/estado/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //  debugger
                $scope.estado = res.estadoList;
            });

            $scope.contribuintes  = [{form : 'form',conti:{}}];
            $scope.fiscos  = [{form : 'form',fisco:{}}];
            $scope.processos  = [{form : 'form',proc:{}}];

            $scope.createForm2 = function(){

                $scope.produtos.push({ nome : 'form1' + ($scope.produtos.length + 1),produto :{}});
            };

            $scope.createForm3 = function () {

              $scope.financeiros.push({
                nome: 'formFinc' + ($scope.financeiros.length + 1),
                financeiro: {
                  valor: 0
                }
              });

            $scope.createForm6 = function(){

                $scope.contribuintes.push({ nome : 'form1' + ($scope.contribuintes.length + 1),conti :{}});
            };

            $scope.createForm7 = function(){

                $scope.fiscos.push({ nome : 'form1' + ($scope.fiscos.length + 1),fisco :{}});
            };

            $scope.createForm8 = function(){

                $scope.processos.push({ nome : 'form1' + ($scope.processos.length + 1),proc :{}});
            };

              for (var x = 0; x < $scope.financeiros.length; x++) {
                $scope.financeiros[x].financeiro.valor = parseFloat($scope.notaFiscal ? $scope.notaFiscal.vrtotal : 0) / (parseFloat($scope.financeiros.length));
              }

            };


            if(localStorageService.get('empresa') != undefined)
            {
                $scope.empresa = localStorageService.get('empresa');
            }

        $scope.nfSaida = {};

          $scope.financeiros = [{
        form: 'formFinc',
        financeiro: {
          valor: parseFloat($scope.notaFiscal ? $scope.notaFiscal.vrtotal : 0) / (1)
        }
      }];

        $scope.saveNFeNota = function() {

            fNotaFiscal.fnCreateObjectNFSaida(localStorageService.get('empresa'),$scope.notaFiscal,$scope.produtos,$scope.financeiros,$scope.enderecos[0], 'INSERT');

        };






            $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
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

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {

    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {

    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy','dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

   $scope.mytime = new Date();
      $scope.hstep = 1;
      $scope.mstep = 15;
      $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      };
      $scope.ismeridian = false;
      $scope.toggleMode = function() {
        return $scope.ismeridian = !$scope.ismeridian;
      };
      $scope.update = function() {
        var d;
        d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        return $scope.mytime = d;
      };
      $scope.changed = function() {
        return console.log('Time changed to: ' + $scope.mytime);
      };
      return $scope.clear = function() {
        return $scope.mytime = null;
      };

});
})();


(function() {
    angular.module('wdApp.apps.nfSaida.update',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidaUpdateController', function($scope,$rootScope,fModels,SysMgmtData) {

            var vm = this;

        $scope.nfSaida = $rootScope.nfSaida;
       console.log($rootScope.nfSaida)
        $scope.savessss = function() {

                        var oObject = fModels.amont($scope.nfSaida,'UPDATE');
                        console.log($scope.nfSaida);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "nfSaida/api/update/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqNfSaida( oObject,true, true)
                           // {
                              //  "cfop": oObject
                           //   cfop : {"id":"10"}
                           // }
                        }, function(res) {
                            debugger
                            console.log(res)
                        });
                    };

});
})();

(function() {
    angular.module('wdApp.apps.nfSaida.view',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidaViewController', function($scope,$rootScope,fModels,SysMgmtData) {

            var vm = this;

});
})();

(function() {
    angular.module('wdApp.apps.nfSaida.delete',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidaDeleteController', function($scope,$rootScope,fModels,SysMgmtData) {

            var vm = this;

});
})();
