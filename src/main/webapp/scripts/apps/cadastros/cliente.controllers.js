(function() {
angular.module('wdApp.apps.cliente', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
.controller('ClienteController', clienteController);

    function clienteController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData,Datatablessss) {
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

        vm.alterStatus = alterStatus;
        vm.historico = historico;
        vm.addAdvogado = addAdvogado;
        vm.envolvidos = envolvidos;
        $scope.cliente ={
            tipoPessoa : 2
        };



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
                    ModalService.showModal({
                        templateUrl: 'views/cadastros/dialog/dCliente.html',
                        controller: "ClienteInsertController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
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

    function rCallback(nRow, aData){
      // console.log('row');
    }

    function recompile(row, data, dataIndex) {
       $compile(angular.element(row).contents())($scope);
   }

    var fnDataSRC = function(json)
    {
                    console.log(json)
                    json['recordsTotal'] = json.clienteList.length
                    json['recordsFiltered'] = json.clienteList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.clienteList;
    }


    Datatablessss.getTable('/pessoa/api/cliente/fetchPage',fnDataSRC,new qat.model.empresaInquiryRequest(0, true,null,null,null), this, rCallback, null, recompile,oOptions,aColumns);


        function edit(person) {
            $rootScope.Cliente = person;
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dClientes.html',
                controller: "ClienteUpdateController"
            }).then(function(modal) {

                modal.element.modal();
                openDialogUpdateCreate();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function deleteRow(person) {
            ModalService.showModal({
                templateUrl: 'deletePlano.html',
                controller: "PlanoController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function view(person) {
            ModalService.showModal({
                templateUrl: 'deleteCidade.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function openDialogUpdateCreate() {
            bookIndex = 0;
            $('.ClienteForm')
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

        function actionsHtmlProcesso(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<a href="#/advogado/details/processo" class="btn btn-info" ><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
                '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
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
            debugger

        }

        function alterStatus() {
            ModalService.showModal({
                templateUrl: 'alterStatus.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function historico() {
            ModalService.showModal({
                templateUrl: 'historico.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addAdvogado() {
            ModalService.showModal({
                templateUrl: 'addAdvogado.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function envolvidos() {
            ModalService.showModal({
                templateUrl: 'envolvidos.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                openDialogUpdateCreate();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function desdobramento() {
            ModalService.showModal({
                templateUrl: 'desdobramento.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
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
            debugger
            $scope.state = !$scope.state;
        };
    }
})();



(function() {
    angular.module('wdApp.apps.Cliente.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteInsertController', function($rootScope, $scope, fModels, SysMgmtData) {

            var vm = this;

            $scope.Cliente = {};

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

            $scope.saveCliente = function() {
                var oObject = fModels.amont($scope.Cliente,"INSERT");
                oObject.dataCliente = (new Date()).getTime();
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "site/api/Cliente/insert/",
                    token: $rootScope.authToken,
                    request: new qat.model.reqCliente(oObject, true, true)
                        // {
                        //  "cfop": oObject
                        //   cfop : {"id":"10"}
                        // }
                }, function(res) {

                    console.log(res)
                });
                // $('#cfopForm').formValidation('resetForm', true);
                // vm.processButtons('U',$scope.cfop);
            };

        });
})();


(function() {
    angular.module('wdApp.apps.Cliente.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ClienteUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {

            var vm = this;

            $scope.Cliente = {};

            $scope.Cliente = $rootScope.Cliente;
       console.log($rootScope.Cliente)
        $scope.saveCliente = function() {

                        var oObject = fModels.amont($scope.Cliente,'UPDATE');
                        console.log($scope.Cliente);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "site/api/Cliente/update/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqCliente( oObject,true, true)
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