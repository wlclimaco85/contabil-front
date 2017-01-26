(function() {
    angular.module('wdApp.apps.fornecedor', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('FornecedorController', fornecedorController);

    function fornecedorController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory) {

        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';

        vm.dtInstance = {};
        vm.persons = {};

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};

       function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }


        var createdRow = function (row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

       var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.fornecedorList.length
            json['recordsFiltered'] = json.fornecedorList.length
            json['draw'] = 1
            console.log(json)
            return json.fornecedorList;
        }

       var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

       var actionsHtml = function (data, type, full, meta) {

            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

        function edit(person) {
            $rootScope.fornecedor = person;
          //  Datatablessss.reloadData(vm)
            dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html',"FornecedorUpdateController",validationFactory.fornecedor());
        }

        function deleteRow(person) {
           $rootScope.fornecedor = person;
           dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html',"FornecedorDeleteController",validationFactory.fornecedor());
        }



        Datatablessss.getTable('/pessoa/api/fornecedor/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.fornecedor(vm,createdRow,$scope,FiltersFactory.fornecedor()), tableColumnsFactory.pessoa(vm,titleHtml,actionsHtml));

          //return vm;






      //  Datatablessss.getTable('/pessoa/api/cliente/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,$scope,filtes), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));



     //   TableCreate.getCliente(vm,$scope);


        function toggleAll(selectAll, selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }

        function status() {
        }

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
(function() {
    angular.module('wdApp.apps.fornecedor.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('FornecedorInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
              var vm = this;

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

            $scope.emails = [{nome : 'form1',email :{emailTypeEnum : 1}}];
            $scope.telefones = [{nome : 'form1',telefone :{telefoneTypeEnum : 1}}];
            $scope.confirmed = "";
            $scope.empresa = {
            tipoPessoa : 1,
            pessoaTipo  : [],
            documentos          : [{
                       documentoTypeEnumValue : 1,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 2,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 12,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 4,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 14,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 10,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 3,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 11,
                       tableEnumValue : 1,
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    }]
        };

        $scope.cliente = {

          pessoaTipos : [{

          pessoaTypeEnum : "CLIENTE",
          label          : "Cliente"
        }, {
              pessoaTypeEnum : "FORNECEDOR",
              label          : "Fornecedor"
        }, {
              pessoaTypeEnum : "TRANSPORTADOR",
              label          : "Transportador"
        }]
      }

        $scope.changes = function($event, id) {


         var checkbox = $event.target;
         if(checkbox.checked)
         {
           $scope.empresa.pessoaTipo.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
         }
         else
         {
            for (x = 0; x< $scope.empresa.pessoaTipo.length;x++)
            {
                if($scope.empresa.pessoaTipo[x].pessoaTypeEnum == id.pessoaTypeEnum)
                {
                    $scope.empresa.pessoaTipo.splice(x,1);
                }
            }
          //  $scope.empresa.pessoaTipo.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
         }
         console.log($scope.empresa.pessoaTipo)
        };

        $scope.enderecos = [];

            $scope.today = function() {
                return $scope.dt = new Date();
            };
            $scope.today();
            $scope.clear = function() {
                return $scope.dt = null;
            };
            $scope.open = function($event) {
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
            var fnCallBack = function(oResponse) {

                console.log(oResponse)
            }
            $scope.saveCliente = function() {

                fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,$scope.emails,$scope.telefones, 'INSERT', "pessoa/api/fornecedor/insert", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.fornecedor.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('FornecedorUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.fornecedor = {};
            $scope.fornecedor = $rootScope.fornecedor;
            console.log($rootScope.fornecedor)
            $scope.saveFornecedor = function() {
                fPessoa.fnMontaObjeto($scope.fornecedor, $scope.endereco, 'UPDATE', "site/api/fornecedor/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.fornecedor.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('FornecedorDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.fornecedor = {};
            $scope.fornecedor = $rootScope.fornecedor;
            console.log($rootScope.fornecedor)
            $scope.saveFornecedor = function() {
                fPessoa.fnDelete($scope.fornecedor, "site/api/fornecedor/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.fornecedor.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('FornecedorViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.fornecedor = {};
            $scope.fornecedor = $rootScope.fornecedor;
            console.log($rootScope.fornecedor)
            $scope.saveFornecedor = function() {
                fPessoa.fnOpenView($scope.fornecedor,"site/api/fornecedor/update/", function(){console.log('aqui')});
            }
        });
})();