(function() {
    angular.module('wdApp.apps.socio', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('SocioController', socioController);

    function socioController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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

        $scope.socio = {
            tipoPessoa: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.socioForm')
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

                    dialogFactory.dialog('views/entidade/dialog/dSocio.html',"SocioInsertController",openDialogUpdateCreate);

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
        DTColumnBuilder.newColumn('numSocio').withTitle('Nº Socio'),
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
            json['recordsTotal'] = json.roleList.length
            json['recordsFiltered'] = json.roleList.length
            json['draw'] = 1
            console.log(json)
            return json.roleList;
        }
        Datatablessss.getTable('entidade/api/role/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.Socio = person;
            dialogFactory.dialog('views/entidade/dialog/dSocio.html',"SocioUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           dialogFactory.dialog('views/entidade/dialog/dSocio.html',"SocioDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.socio.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('SocioInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;

            $scope.socio = {

            }
            $scope.socio.pessoa = fModels.amont({ pessoaTypeEnumValue : 6,
                documentos : [fModels.amont({numero : ""},"INSERT")],
                emails : [fModels.amont({email : ""},"INSERT")],
                telefones :[fModels.amont({numero : ""},"INSERT")]
            },"INSERT");


            var fnCallBack = function(oResponse) {

                console.log(oResponse)
            }
            $scope.saveSociod = function() {
                var socios = []
//debugger
                var oObject = fModels.amont($scope.socio,"INSERT");
                socios.push(oObject);
                oObject = {};
                oObject = {modelAction : "NONE" ,socios: socios}
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/empresa/update/",
                    token: $rootScope.authToken,
                    request: new qat.model.reqSocio(oObject, true, true)
                }, function(res) {
                    //debugger
                    fnCallBack(res);
                });
              //  fPessoa.fnMontaObjeto($scope.socio, null, 'INSERT', "financeiro/api/socio/insert/", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.socio.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('SocioUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            vm.saveSocio = saveSocio;
            $scope.socio = {};
            $scope.socio = $rootScope.socio;
            console.log($rootScope.socio)
            function saveSocio() {

                //debugger
                fPessoa.fnMontaObjeto($scope.socio, null, 'UPDATE', "site/api/socio/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.socio.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('SocioDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.socio = {};
            $scope.socio = $rootScope.socio;
            console.log($rootScope.socio)
            $scope.saveSocio = function() {
                fPessoa.fnDelete($scope.socio, "site/api/socio/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.socio.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('SocioViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.socio = {};
            $scope.socio = $rootScope.socio;
            console.log($rootScope.socio)
            $scope.saveSocio = function() {
                fPessoa.fnOpenView($scope.socio,"site/api/socio/update/", function(){console.log('aqui')});
            }
        });
})();