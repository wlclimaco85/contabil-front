(function() {
    angular.module('wdApp.apps.pdVendas', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PdVendasController', pdVendasController);

    function pdVendasController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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

        $scope.pedidoVenda = {
            tipoPessoa: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.PedidoVendaForm')
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

                    dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html',"PedidoVendaInsertController",openDialogUpdateCreate);

                }
            }]);
        var aColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
        DTColumnBuilder.newColumn('cliente').withTitle('cliente').withOption('width', '150px'),
        DTColumnBuilder.newColumn('data').withTitle('data').withOption('width', '50px'),
         DTColumnBuilder.newColumn(null).withTitle('qntProd').notSortable().withOption('width', '10px')
            .renderWith(function(data, type, full, meta) {
                return '<a> '+ data.qntProd +'</a>';
            }),
       // DTColumnBuilder.newColumn('qntProd').withTitle('qntProd'),
        DTColumnBuilder.newColumn('valorPedido').withTitle('valorPedido').withOption('width', '15px'),
        DTColumnBuilder.newColumn('valorItens').withTitle('valorItens').withOption('width', '15px'),
        DTColumnBuilder.newColumn('observacao').withTitle('observacao').withOption('width', '150px'),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
        DTColumnBuilder.newColumn('status').withTitle('status'),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '150px')
    ];
        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.pedidoVendaList.length
            json['recordsFiltered'] = json.pedidoVendaList.length
            json['draw'] = 1
            console.log(json)
            return json.pedidoVendaList;
        }
        Datatablessss.getTable('/vendas/api/pedidoVenda/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.pedidoVenda = person;
            dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html',"PedidoVendasUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.pedidoVenda = person;
           dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html',"PedidoVendasDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.pedidoVenda.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PedidoVendaInsertController', function(localStorageService,$rootScope, $scope, fModels, SysMgmtData,doisValorFactory,fNotaFiscal) {
            var vm = this;

            $scope.notaFiscalSaida = {

            };
            $scope.cliente  = {};
            $scope.formaPg  = {};
            $scope.endereco = null;
            $scope.pessoa   = {};

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

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //  debugger
                $scope.cliente = res.clienteList;
            });


            $scope.produtosSelect = "";
            $scope.produto  = {};

            $scope.produtos = [{form : 'form',produto:{}}];

            $scope.clientes = [];

            $scope.calcProd = function(quant,valor)
            {
              return quant * valor;
            }


            $scope.createForm2 = function(){

                $scope.produtos.push({ nome : 'form1' + ($scope.produtos.length + 1),produto :{}});

            };



        $scope.forms = [{id : 0,
               produto : "",
               ddd : 'form1',
               notaFiscalSaidaItens : {}}];
        $scope.count = 0;

        $scope.createForm = function(type){
            debugger
            $scope.forms.push({id : 0,
               produto : "",
               ddd : 'form2',
               notaFiscalSaidaItens : {}});

            $(".produto").select2("destroy");


            $(".produto").select2({
              placeholder: "Selecione o BANCO",
              allowClear: true
            });
        };

        $scope.changeProd = function (form){
            debugger
            console.log(form);

            for(var x = 0; $scope.produtos.length > x ;x++){
                if($scope.produtos[x].id == form.produto)
                {
                    form.quantidade = 100;
                }
            }
        }

        var fnFunction = function(){
            debugger
        }
        $inputaction = $('#teste')
            $inputaction.inputaction({
                    confirmAction: fnFunction,
                    model: $scope.cliente,
                    fullData: {},
                    propertyName: 'name'
                });


        doisValorFactory.pedidoVendas($scope);



        $scope.deleteForm = function(formScope){


            delete $scope.forms(formScope);
        }


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

            $scope.savePedidoVenda = function() {

                fNotaFiscal.fnCreateObjectPdVendas(localStorageService.get('empresa'),$scope.pessoa,$scope.endereco,$scope.produtos,$scope.formaPg,$scope.notaFiscalSaida,1,'INSERT');
              // function(emitente,remetente,endereco,produtos,formaPg,notaFiscal,type,action){
            };
        });
})();
(function() {
    angular.module('wdApp.apps.pedidoVenda.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PedidoVendaUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.savePedidoVenda = function() {
                fPessoa.fnMontaObjeto($scope.pedidoVenda, $scope.endereco, 'UPDATE', "site/api/pedidoVenda/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.pedidoVenda.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PedidoVendaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.savePedidoVenda = function() {
                fPessoa.fnDelete($scope.pedidoVenda, "site/api/pedidoVenda/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.pedidoVenda.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PedidoVendaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.savePedidoVenda = function() {
                fPessoa.fnOpenView($scope.pedidoVenda,"site/api/pedidoVenda/update/", function(){console.log('aqui')});
            }
        });
})();