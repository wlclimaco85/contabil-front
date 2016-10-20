(function() {
    angular.module('wdApp.apps.cliente', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteController', clienteController);

    function clienteController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';

        vm.dtInstance = {};
        vm.persons = {};
        
        $scope.cliente = {
            tipoPessoa: 2
        };


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
            json['recordsTotal'] = json.clienteList.length
            json['recordsFiltered'] = json.clienteList.length
            json['draw'] = 1
            console.log(json)
            return json.clienteList;
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
            $rootScope.cliente = person;
          //  Datatablessss.reloadData(vm)
            dialogFactory.dialog('views/cadastros/dialog/dCliente.html',"ClienteUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.cliente = person; 
           dialogFactory.dialog('views/cadastros/dialog/dCliente.html',"ClienteDeleteController",openDialogUpdateCreate);
        } 

       

        Datatablessss.getTable('/pessoa/api/cliente/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,$scope,FiltersFactory.cliente()), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));
          
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
    angular.module('wdApp.apps.cliente.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;

            $scope.emails = [{nome : 'form1',email :{emailTypeEnum : 1}}];
            $scope.telefones = [{nome : 'form1',telefone :{telefoneTypeEnum : 1}}];

            $scope.empresa = {
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
                debugger
                console.log(oResponse)
            }
            $scope.saveCliente = function() {
                debugger
                console.log($scope.emails);
                fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,$scope.emails,$scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.cliente.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cliente = {};
            $scope.cliente = $rootScope.cliente;
            console.log($rootScope.cliente)
            $scope.saveCliente = function() {
                fPessoa.fnMontaObjeto($scope.cliente, $scope.endereco, 'UPDATE', "pessoa/api/cliente/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.cliente.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cliente = {};
            $scope.cliente = $rootScope.cliente;
            console.log($rootScope.cliente)
            $scope.saveCliente = function() {
                fPessoa.fnDelete($scope.cliente, "pessoa/api/cliente/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.cliente.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cliente = {};
            $scope.cliente = $rootScope.cliente;
            console.log($rootScope.cliente)
            $scope.saveCliente = function() {
                fPessoa.fnOpenView($scope.cliente,"pessoa/api/cliente/update/", function(){console.log('aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.cliente.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteSearchController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cliente = [];
            $scope.pessoa =null
            $scope.countrySelected = function(selected) {
             // debugger
              if (selected) {
                debugger
                $scope.pessoa = selected.originalObject;
              } else {
                console.log('cleared');
              }
            };

            SysMgmtData.processPostPageData("main/api/request", {
                    url: "pessoa/api/cliente/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
                }, function(res) {
                  //  debugger
                    $scope.cliente = res.clienteList;
                });
          });
})();