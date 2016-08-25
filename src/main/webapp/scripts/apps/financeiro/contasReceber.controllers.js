(function() {
    angular.module('wdApp.apps.contasReceber', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberController', contasReceberController);

    function contasReceberController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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

        $scope.contasReceber = {
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.ContasReceberForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        'nome': notEmptyStringMinMaxRegexp,
                        'email': integerNotEmptyValidation,
                        'texto': integerNotEmptyValidation,
                    }
                });
        }

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };
        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';
        var oOptions = DTOptionsBuilder.newOptions()
            .withDOM('frtip')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow)
            .withOption('headerCallback', function(header) {
                if (!vm.headerCompiled) {
                    // Use this headerCompiled field to only compile header once
                    vm.headerCompiled = true;
                    $compile(angular.element(header).contents())($scope);
                }
            })
            .withPaginationType('full_numbers')
            .withColumnFilter({
                aoColumns: [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }]
            })
            .withOption('initComplete', function(settings, json) {
                $('.dt-buttons').find('.dt-button:eq(1)').before(
                    '<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"' +
                    'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">' +
                    '<option><a href="#">Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>' +
                    '<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>' +
                    '</select>'
                )
            })
            .withOption('processing', true)
            .withOption('language', {
                paginate: { // Set up pagination text
                    first: "&laquo;",
                    last: "&raquo;",
                    next: "&rarr;",
                    previous: "&larr;"
                },
                lengthMenu: "_MENU_ records per page"
            })
            .withButtons([{
                extend: "colvis",
                fileName: "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "csvHtml5",
                fileName: "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "pdfHtml5",
                fileName: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "copy",
                fileName: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {
                    decodeEntities: true
                }
            }, {
                extend: "print",
                //text: 'Print current page',
                autoPrint: true,
                exportOptions: {
                    columns: ':visible'
                }
            }, {
                extend: "excelHtml5",
                filename: "Data_Analysis",
                title: "Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                //CharSet: "utf8",
                exportData: {
                    decodeEntities: true
                }
            }, {
                text: 'Novo Plano',
                key: '1',
                action: function(e, dt, node, config) {

                    dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberInsertController",openDialogUpdateCreate);

                }
            }]);
        var aColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
        DTColumnBuilder.newColumn('nunDoc').withTitle('N° Doc'),
        DTColumnBuilder.newColumn('parcela').withTitle('Parcela').notVisible(),
        DTColumnBuilder.newColumn('cliente').withTitle('Cliente'),
        DTColumnBuilder.newColumn('descricao').withTitle('Descrição').notVisible(),
        DTColumnBuilder.newColumn('tipoDoc').withTitle('Tipo Documento').notVisible(),
        DTColumnBuilder.newColumn('dataLanc').withTitle('Data Lançamento').notVisible(),
        DTColumnBuilder.newColumn('dataVenc').withTitle('Data Vencimento'),
        DTColumnBuilder.newColumn('valorCob').withTitle('valor'),
         DTColumnBuilder.newColumn(null).withTitle('Pagamentos')
            .renderWith(function(data, type, full, meta) {
                var sReturn = "";
                if(data.pagamento != undefined)
                {
                    if(data.pagamento.length > 0){
                        for(var x = 0;x<data.pagamento.length;x++)
                        {
                            sReturn = sReturn + "<a> R$"+data.pagamento[x].valorPago +" "+ data.pagamento[x].dataPag +"  </a><br>";
                        }
                    }
                }

                return sReturn;

            }).withOption('width', '130px'),

        DTColumnBuilder.newColumn('contaOrigem').withTitle('Conta Origem').notVisible(),
        DTColumnBuilder.newColumn('obs').withTitle('Observacao').notVisible(),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '140px'),
    ];

        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.contasReceberList.length
            json['recordsFiltered'] = json.contasReceberList.length
            json['draw'] = 1
            console.log(json)
            return json.contasReceberList;
        }
        Datatablessss.getTable('/financeiro/api/contasReceber/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.contasReceber = person;
            dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.contasReceber = person;
           dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberDeleteController",openDialogUpdateCreate);
        }

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

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
    angular.module('wdApp.apps.contasReceber.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberInsertController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;

            $scope.titulo = {
            }

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
            $scope.saveContasReceber = function() {
                debugger
                var oObject = fModels.amont($scope.contasReceber,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasReceber = {};
            $scope.contasReceber = $rootScope.contasReceber;
            console.log($rootScope.contasReceber)
            $scope.saveContasReceber = function() {
                var oObject = fModels.amont($scope.contasReceber,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberDeleteController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasReceber = {};
            $scope.contasReceber = $rootScope.contasReceber;
            console.log($rootScope.contasReceber)
            $scope.saveContasReceber = function() {
                var oObject = fModels.amont($scope.contasReceber,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberViewController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasReceber = {};
            $scope.contasReceber = $rootScope.contasReceber;
            console.log($rootScope.contasReceber)
            $scope.saveContasReceber = function() {
                var oObject = fModels.amont($scope.contasReceber,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();