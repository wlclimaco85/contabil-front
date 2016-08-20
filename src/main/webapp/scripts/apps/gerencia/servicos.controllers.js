 (function() {
    angular.module('wdApp.apps.servico', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ServicosController', servicosController);

    function servicosController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData) {
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
        vm.desdobramento = desdobramento;


        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };


        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] = json.servicoList.length
                    json['recordsFiltered'] = json.servicoList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.servicoList;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "site/api/servico/fetchPage",
                        "token": $rootScope.authToken,
                        "request": new qat.model.pagedInquiryRequest(2, true)
                    });
                }
            })
            .withDOM('frtip')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow)
            .withPaginationType('full_numbers')
            .withColumnFilter({
                aoColumns: [null, {
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
                    'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important; " ng-change="vm.deleteRowAll(vm.selected)">' +

                    '<option>Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{vm.countSeleted()}}"</span></option>' +
                    '<option>Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{vm.countSeleted()}}"></span></option>' +
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
                text: 'Novo Serviço',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/gerencia/dialog/dServico.html',
                        controller: "ServicoInsertController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }])

            vm.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
            }).withOption('width', '10px'),
            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
            DTColumnBuilder.newColumn('nome').withTitle('Nome'),
            DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),

            DTColumnBuilder.newColumn(null).withTitle('Status').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.statusList != undefined && data.statusList.length > 0) {
                   // for (var x = 0; x < data.statusList.length; x++) {
                        sText = sText + " " + data.statusList[data.statusList.length -1].status  + "<br> ";
                   // }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
             DTColumnBuilder.newColumn(null).withTitle('Preco').renderWith(function(data, type, full, meta) {

                if (data.statusList != undefined && data.precoList.length > 0)
                    return '<span>' + data.precoList[data.precoList.length-1].valor + '</span>';
                else
                    return '<span> 0,00</span>';
            }),
            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtmlProcesso).withOption('width', '140px'),
        ];






        function edit(person) {
            $rootScope.servico = person;
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dSite.html',
                controller: "SiteUpdateController"
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
                templateUrl: 'deleteCidade.html',
                controller: "ContasPagarController"
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
                controller: "ExampleController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function openDialogUpdateCreate() {
            bookIndex = 0;
            $('.servicoForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {

                        'nome': notEmptyStringMinMaxRegexp,
                        'valor': integerNotEmptyValidation,

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
        return '<a class="btn btn-info" href="#/advogado/details/processo"><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
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
    angular.module('wdApp.apps.servico.insert',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ServicoInsertController', function($rootScope,$scope,fModels,SysMgmtData) {

            var vm = this;

        $scope.servico = {};
        $scope.valor = 0;
        $scope.savessss = function() {
 debugger
                        var oObject = fModels.amont($scope.servico,'INSERT');
                        oObject.preco = [];
                        oObject.preco.push({ valor : parseFloat($scope.valor)});
                        console.log($scope.servico);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "site/api/servico/insert/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqServico( oObject,true, true)
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
    angular.module('wdApp.apps.servico.update',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ServicoUpdateController', function($scope,$rootScope,fModels,SysMgmtData) {

            var vm = this;

        $scope.servico = $rootScope.servico;
       console.log($rootScope.servico)
        $scope.savessss = function() {

                        var oObject = fModels.amont($scope.servico,'UPDATE');
                        console.log($scope.servico);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "site/api/servico/update/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqServico( oObject,true, true)
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