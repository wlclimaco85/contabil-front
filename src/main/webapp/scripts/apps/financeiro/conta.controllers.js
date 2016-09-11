(function() {
    angular.module('wdApp.apps.conta', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaController', contaController);

    function contaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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

        $scope.conta = {
            tipoPessoa: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.contaForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        'descricao': notEmptyStringMinMaxRegexp,
                        'parcMaximo': integerNotEmptyValidation,
                        'parSemJuros': integerNotEmptyValidation,
                        'juros': integerNotEmptyValidation,
                        'intervParcelas': integerNotEmptyValidation,
                        'intervaloT': integerNotEmptyValidation,
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

                    dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"ContaInsertController",openDialogUpdateCreate);

                }
            }]);
        var aColumns = [
            DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
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
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '140px'),
        ];

        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json);
            json['recordsTotal'] = json.contaList.length;
            json['recordsFiltered'] = json.contaList.length;
            json['draw'] = 1;
            console.log(json);
            return json.contaList;
        }
        Datatablessss.getTable('/financeiro/api/conta/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.conta = person;
            dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"ContaUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.conta = person;
           dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"ContaDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.conta.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;

            $scope.conta = {};
            $scope.conta.conta = {};
            $scope.conta.conta.id = 0;

            $scope.conta.tipoDoc = {};
            $scope.conta.tipoDoc.id = 0;

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

            $scope.saveConta = function() {

                var oObject = fModels.amont($scope.conta.conta,"INSERT");
                $scope.conta.conta = oObject;
                var oObject = fModels.amont($scope.conta.tipoDoc,"INSERT");
                $scope.conta.tipoDoc = oObject;
                var oObject = fModels.amont($scope.conta,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/conta/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqConta(oObject, true, true)
                }, function(res) {
                    debugger
                });
                
            };
        });
})();
(function() {
    angular.module('wdApp.apps.conta.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveConta = function() {
                fPessoa.fnMontaObjeto($scope.conta, $scope.endereco, 'UPDATE', "financeiro/api/conta/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.conta.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveConta = function() {
                fPessoa.fnDelete($scope.conta, "financeiro/api/conta/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.conta.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveConta = function() {
                fPessoa.fnOpenView($scope.conta,"financeiro/api/conta/update/", function(){console.log('aqui')});
            }
        });
})();