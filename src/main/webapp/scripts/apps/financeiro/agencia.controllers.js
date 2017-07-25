(function() {
    angular.module('wdApp.apps.agencia', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AgenciaController', agenciaController);

    function agenciaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
    tableColumnsFactory, FiltersFactory, validationFactory,dialogFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';
        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};
                $scope.agencia = {
            tipoPessoa: 2
        };

        function reloadData ()
        {
            var resetPaging = false
            vm.dtInstance.reloadData(callback, resetPaging)
        }

        function callback (json)
        {
            console.log(json)
        }
        $rootScope.reloadDataAgencia = function (_callback)
        {
            var resetPaging = false
            vm.dtInstance.reloadData(_callback, resetPaging)
        }

        function rCallback (nRow, aData) {
        // console.log('row')
        }

        function recompile (row, data, dataIndex)
        {
            $compile(angular.element(row).contents())($scope)
        }

        var createdRow = function (row, data, dataIndex)
        {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope)
        }

        var fnDataSRC = function(json)
        {
            console.log(json)
            json['recordsTotal'] = json.agenciaList.length
            json['recordsFiltered'] = json.agenciaList.length
            json['draw'] = 1
            console.log(json)
            return json.agenciaList;
        }

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        //   dialogFactory.dialog('views/cadastros/dialog/dAgencia.html',"AgenciaInsertController",openDialogUpdateCreate);

        var titleHtml = null;

        var actionsHtml = function (data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-pencil-square-o"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>'
        }

        function edit (person) {
        $rootScope.agencia = person
        dialogFactory.dialog('views/cadastros/dialog/dAgencia.html', 'AgenciaUpdateController', validationFactory.cliente())
        }

        function deleteRow (person) {
        $rootScope.agencia = person
        dialogFactory.dialog('views/cadastros/dialog/dAgencia.html', 'AgenciaDeleteController', validationFactory.cliente())
        }

        Datatablessss.getTable('/financeiro/api/agencia/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile,
            tableOptionsFactory.agencia(vm, createdRow, $scope, FiltersFactory.agencia(), reloadData), tableColumnsFactory.agencia(vm, '', actionsHtml))


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
    angular.module('wdApp.apps.agencia.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AgenciaInsertController', function($rootScope, $scope, fModels, SysMgmtData,fTitulo, toastr, $element, close) {

            var vm = this;

            $scope.agencia = { numeroConta : []}
            $scope.enderecos = [];
            $scope.telefones = [];
            $scope.emails = [];
            $scope.telefones.push({numero : "",telefoneTypeEnum : "CELULAR"});
            $scope.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});

            var fnCallBack = function (res)
            {
                if (res.operationSuccess == true) {
                $element.modal('hide')
                close(null, 500)
                toastr.success('Deu Certo seu tanga.', 'Sucess')
                $rootScope.reloadDataAgencia(function (data) {
                    //debugger
                })
                }
            }

            fTitulo.fnMontaAgencia($scope,vm,"INSERT","financeiro/api/agencia/insert",fnCallBack)

        });
})();
(function() {
    angular.module('wdApp.apps.agencia.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AgenciaUpdateController', function($rootScope, $scope, fModels, SysMgmtData,fTitulo, toastr, $element, close) {
            var vm = this;
            debugger
            $scope.agencia = {};
            $scope.agencia = $rootScope.agencia;
            $scope.enderecos = $rootScope.agencia.enderecos;
            if($rootScope.agencia.telefones)
            {
                $scope.telefones = $rootScope.agencia.telefones;
            }
            else
            {
                $scope.telefones = [];
                $scope.telefones.push({numero : "",telefoneTypeEnum : "CELULAR"});
            }
            if($rootScope.agencia.emails)  {
                $scope.emails = $rootScope.agencia.emails;
            }else{
                $scope.emails = [];
                $scope.emails.push({email : "",emailTypeEnum : "PRINCIPAL"});
            }
            console.log($rootScope.agencia)

            var fnCallBack = function (res)
            {
                if (res.operationSuccess == true) {
                $element.modal('hide')
                close(null, 500)
                toastr.success('Deu Certo seu tanga.', 'Sucess')
                $rootScope.reloadDataAgencia(function (data) {
                    //debugger
                })
                }
            }

            fTitulo.fnMontaAgencia($scope,vm,"UPDATE","financeiro/api/agencia/update",fnCallBack)
        });
})();
(function() {
    angular.module('wdApp.apps.agencia.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AgenciaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.agencia = {};
            $scope.agencia = $rootScope.agencia;
            console.log($rootScope.agencia)
            $scope.saveAgencia = function() {
                fPessoa.fnDelete($scope.agencia, "site/api/agencia/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.agencia.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AgenciaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.agencia = {};
            $scope.agencia = $rootScope.agencia;
            console.log($rootScope.agencia)
            $scope.saveAgencia = function() {
                fPessoa.fnOpenView($scope.agencia,"site/api/agencia/update/", function(){console.log('aqui')});
            }
        });
})();