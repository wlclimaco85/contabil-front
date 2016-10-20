(function() {
    angular.module('wdApp.apps.nfSaida', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidasController', nfSaidaController);

    function nfSaidaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData) {
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
                    json['recordsTotal'] = json.nfSaidas.length
                    json['recordsFiltered'] = json.nfSaidas.length
                    json['draw'] = 1
                    console.log(json)
                    return json.nfSaidas;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "nfSaida/api/fetchPage",
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
                text: 'Novo NfSaida',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/vendas/dialog/dNotaFiscalSaida.html',
                        controller: "NfSaidaInsertController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }])
        /*DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] = json.nfSaidas.length
                    json['recordsFiltered'] = json.nfSaidas.length
                    json['draw'] = 1
                    console.log(json)
                    return json.nfSaidas;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "nfSaida/api/fetchPage",
                        "token": $rootScope.authToken,
                        "request": new qat.model.empresaInquiryRequest(0, true,null,null,null)
                    });
                }
            })
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
                text: 'Novo NfSaida',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/gerencia/dialog/dNotaFiscalSaida.html',
                        controller: "ExampleController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }]);

*/
            vm.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
            }).withOption('width', '10px'),
            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
            DTColumnBuilder.newColumn('nome').withTitle('Nome'),
            DTColumnBuilder.newColumn('url').withTitle('Url'),
            DTColumnBuilder.newColumn('missao').withTitle('Missão'),
            DTColumnBuilder.newColumn('visao').withTitle('Vissão'),
            DTColumnBuilder.newColumn('quemSomos').withTitle('Quem Somos'),
            DTColumnBuilder.newColumn('comoTrabalhamos').withTitle('Como Trabalhamos').notVisible(),
            DTColumnBuilder.newColumn('logo').withTitle('Logo Marca').notVisible(),
            DTColumnBuilder.newColumn('emprId').withTitle('Empresa').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Redes Social').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.redesSocial.length > 0) {
                    for (var x = 0; x < data.redesSocial.length; x++) {
                        sText = sText + " " + data.redesSocial[x].nome  + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Equipe').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.equipe.length > 0) {
                    for (var x = 0; x < data.equipe.length; x++) {
                        sText = sText + " " + data.equipe[x].nome  + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Serviços').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.servicoList.length > 0) {
                    for (var x = 0; x < data.servicoList.length; x++) {
                        sText = sText + " " + data.servicoList[x].nome  + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Planos').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.planoList.length > 0) {
                    for (var x = 0; x < data.planoList.length; x++) {
                        sText = sText + " " + data.planoList[x].descricao  + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Imagens').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.imagens.length > 0) {
                    for (var x = 0; x < data.imagens.length; x++) {
                        sText = sText + " " + data.imagens[x].nome  + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Status').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.statusList.length > 0) {
                   // for (var x = 0; x < data.statusList.length; x++) {
                        sText = sText + " " + data.statusList[data.statusList.length -1].status  + "<br> ";
                   // }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtmlProcesso).withOption('width', '140px'),
        ];






        function edit(person) {
            $rootScope.nfSaida = person;
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dNotaFiscalSaida.html',
                controller: "NfSaidaUpdateController"
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
            $('#pdVendasForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {

                        'book[0].produto': notEmptyStringMinMaxRegexp,
                        'book[0].quantidade': integerNotEmptyValidation,
                        'book[0].vlUnitario': integerNotEmptyValidation,


                    }
                })
                // Add button click handler
                .on('click', '.addButton', function() {
                    bookIndex++;
                    var $template = $('#bookTemplate'),
                        $clone = $template
                        .clone()
                        .removeClass('hide')
                        .removeAttr('id')
                        .attr('data-book-index', bookIndex)
                        .insertBefore($template);

                    // Update the name attributes
                    $clone
                        .find('[name="produto"]').attr('name', 'book[' + bookIndex + '].produto').end()
                        .find('[name="quantidade"]').attr('name', 'book[' + bookIndex + '].quantidade').end()
                        .find('[name="vlUnitario"]').attr('name', 'book[' + bookIndex + '].vlUnitario').end()
                        .find('[name="desconto"]').attr('name', 'book[' + bookIndex + '].desconto').end();

                    // Add new fields
                    // Note that we also pass the validator rules for new field as the third parameter
                    $('#pdVendasForm')
                        .formValidation('addField', 'book[' + bookIndex + '].produto', notEmptyStringMinMaxRegexp)
                        .formValidation('addField', 'book[' + bookIndex + '].quantidade', integerNotEmptyValidation)
                        .formValidation('addField', 'book[' + bookIndex + '].vlUnitario', integerNotEmptyValidation);
                }) // Remove button click handler
                .on('click', '.removeButton', function() {
                    var $row = $(this).parents('.form-group'),
                        index = $row.attr('data-book-index');

                    // Remove fields
                    $('#bookForm')
                        .formValidation('removeField', $row.find('[name="book[' + index + '].produto"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].quantidade"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].vlUnitario"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].desconto"]'));

                    // Remove element containing the fields
                    $row.remove();
                });
            $("select").select2({
                placeholder: "Select a state",
                allowClear: true
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
    angular.module('wdApp.apps.nfSaida.insert',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter','angucomplete','inputactions'])
        .controller('NfSaidaInsertController', function(localStorageService,$rootScope,$scope,fModels,SysMgmtData,fProduto) {

            var vm = this;
            $scope.slotDisplayName = "teste00";
            $scope.empresa = null;
            $scope.notaFiscal = null;
            $scope.produtos = [{form : 'form',produto:{}}];
            
            $scope.clientes = [];

            $scope.calcProd = function(quant,valor)
            {
              return quant * valor;
            }


            $scope.createForm2 = function(){
            
                $scope.produtos.push({ nome : 'form1' + ($scope.produtos.length + 1),produto :{}});

            };
            

            if(localStorageService.get('empresa') != undefined)
            {
                $scope.empresa = localStorageService.get('empresa');
            }

            console.log($scope.empresa);


/*

        SysMgmtData.processPostPageData("main/api/request", {
            url: 'pessoa/api/cliente/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.PagedInquiryRequest(10)
        }, function(res) {
        //    debugger
            $scope.clientes = res.clienteList;
        });

*/

            $scope.updateSlotName = function(updatedModel){
//debugger
           /*     var tgbMaintenanceRequest = {
                    tgbId: vm.towerSelected,
                    slotName: updatedModel.slotDisplayName,
                    slotId: updatedModel.slotChannelId
                };

                $http({
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    url: "bandplan/updateslotname",
                    method: "POST",
                    data: JSON.stringify(tgbMaintenanceRequest)
                }).then(function(oResponse){

                    submitTower($scope.filterForm);
                });*/
            }

     //   fProduto.fnSelectProduto();
        $scope.nfSaida = {};

        $scope.savessss = function() {

                        var oObject = fModels.amont($scope.nfSaida,'INSERT');
                        console.log($scope.nfSaida);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "nfSaida/api/insert/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqNfSaida( oObject,true, true)
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