(function() {
    angular.module('wdApp.apps.validacao', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ValidacaoController', validacaoController);

    function validacaoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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
        
        $scope.validacao = {
            tipoPessoa: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.validacaoForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        'banco': notEmpty,
                        'numero': notEmptyStringMinMaxRegexp,
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

                    dialogFactory.dialog('views/cadastros/dialog/dValidacao.html',"ValidacaoInsertController",openDialogUpdateCreate);
                   
                }
            }]);
        var aColumns =  [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'), 
        DTColumnBuilder.newColumn('banco').withTitle('Banco'),
        DTColumnBuilder.newColumn('numValidacao').withTitle('Nº Validacao'),
        DTColumnBuilder.newColumn('cep').withTitle('Cep'),    
        DTColumnBuilder.newColumn('logradouro').withTitle('Logradouro'),
        DTColumnBuilder.newColumn('numero').withTitle('Numero'),
        DTColumnBuilder.newColumn('cidade').withTitle('Cidade'),
        DTColumnBuilder.newColumn('estado').withTitle('Estado').notVisible(),
        DTColumnBuilder.newColumn('pais').withTitle('Pais').notVisible(),
        DTColumnBuilder.newColumn('telefone').withTitle('Telefone'),
        DTColumnBuilder.newColumn('email').withTitle('Email').notVisible(),
        DTColumnBuilder.newColumn('obs').withTitle('Observações').notVisible(),
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
            console.log(json)
            json['recordsTotal'] = json.validacaoList.length
            json['recordsFiltered'] = json.validacaoList.length
            json['draw'] = 1
            console.log(json)
            return json.validacaoList;
        }
        Datatablessss.getTable('/financeiro/api/validacao/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.Validacao = person;
            dialogFactory.dialog('views/cadastros/dialog/dValidacao.html',"ValidacaoUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           dialogFactory.dialog('views/cadastros/dialog/dValidacao.html',"ValidacaoDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.validacao.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ValidacaoInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;

            $scope.validacao = {}
            $scope.enderecos = {}
            
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
            $scope.saveValidacao = function() {
                
                var oObject = fModels.amont(fPessoa.fnMontObject($scope.validacao,$scope.enderecos,"INSERT"),"INSERT");
//var oObject = fModels.amont($scope.validacao,"INSERT");
var bb = [];
                $('.numeroConta:visible').each(function() {
                if($(this).length > 0)
                {
                    //.fnContaCC =function(_numero,_id,_statusConta,_saldo,modelAction)
                    bb.push(fModels.amont(qat.model.fnContaCC($(this).find('.numero').val(),$(this).find('.id').val(),$(this).find('.check-socio').prop('checked'),$(this).find('.saldo').val(),"INSERT"),"INSERT"));
                }
            });
            oObject.numeroConta = bb;
console.log(oObject);
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/validacao/insert/",
                    token: $rootScope.authToken,
                    request: new qat.model.reqValidacao(oObject, true, true)
                }, function(res) {
                    debugger
                    fnCallBack(res);
                });
              //  fPessoa.fnMontaObjeto($scope.validacao, null, 'INSERT', "financeiro/api/validacao/insert/", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.validacao.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ValidacaoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.validacao = {};
            $scope.validacao = $rootScope.validacao;
            console.log($rootScope.validacao)
            $scope.saveValidacao = function() {
                fPessoa.fnMontaObjeto($scope.validacao, null, 'UPDATE', "site/api/validacao/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.validacao.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ValidacaoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.validacao = {};
            $scope.validacao = $rootScope.validacao;
            console.log($rootScope.validacao)
            $scope.saveValidacao = function() {
                fPessoa.fnDelete($scope.validacao, "site/api/validacao/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.validacao.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ValidacaoViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.validacao = {};
            $scope.validacao = $rootScope.validacao;
            console.log($rootScope.validacao)
            $scope.saveValidacao = function() {
                fPessoa.fnOpenView($scope.validacao,"site/api/validacao/update/", function(){console.log('aqui')});
            }
        });
})();