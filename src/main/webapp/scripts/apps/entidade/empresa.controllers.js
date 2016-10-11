(function() {
    angular.module('wdApp.apps.newEmpresa', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NewEmpresaController', newEmpresaController);

    function newEmpresaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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

        $scope.newEmpresa = {
            tipoPessoa: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.newEmpresaForm')
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

                    dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html',"NewEmpresaInsertController",openDialogUpdateCreate);

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
        DTColumnBuilder.newColumn('numAgencia').withTitle('Nº Agencia'),
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
            json['recordsTotal'] = json.newEmpresaList.length
            json['recordsFiltered'] = json.newEmpresaList.length
            json['draw'] = 1
            console.log(json)
            return json.newEmpresaList;
        }
        Datatablessss.getTable('/financeiro/api/newEmpresa/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.Agencia = person;
            dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html',"NewEmpresaUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html',"NewEmpresaDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.newEmpresa.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NewEmpresaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fEmpresa) {
            var vm = this;

            $scope.doIfChecked = function(_ckecked,_value,_nome) {

            var value = 0;
            var sHtml = "",count =1;
            $('.planos').each(function()
            {
                if($(this).find('.plano').is(":checked") == true)
                {
                    value = value + parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2));
                    sHtml = sHtml  + "<tr>";
                    sHtml = sHtml  + "  <th scope='row'>"+count+"</th>";
                    sHtml = sHtml  + "  <td>"+$(this).find('.mbr-header__text').text()+"</td>";
                    sHtml = sHtml  + "  <td>"+parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2))+"</td>";
                    sHtml = sHtml  + "</tr>";
                    count = count + 1
                }
            });


            sHtml = sHtml  + "<tr style='background-color : red;color:black'>";
            sHtml = sHtml  + "  <th scope='row'></th>";
            sHtml = sHtml  + "  <td colspan='2'>Total</td>";
            sHtml = sHtml  + "  <td id='total-plano'>"+value+"</td>";
            sHtml = sHtml  + "</tr>";
            $('#table-plano').empty();
            $('#table-plano').append(sHtml);
            console.log(value);
            vm.total = value;
        }

            $scope.forms = [{ nome : 'form1',telefone :{}}];
            $scope.count = 0;
            $scope.usuario= {};
            $scope.empresa = {
            usuarios  :[],
            telefones :[],
            enderecos : [{
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),
            }],
            documentos          : [{
                       documentoTypeEnumValue : 1,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 2,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 3,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 4,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 5,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 6,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
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
            $scope.saveEmpresa = function() {

                for(x = 0;x< $scope.forms.length; x++ )
                {
                    $scope.empresa.telefones.push(fModels.amont($scope.forms[x].telefone,"INSERT"));

                }

                fEmpresa.fnMontaObjeto($scope.empresa,$scope.enderecos,"INSERT",'PRINCIPAL')



                var oObject = fModels.amont($scope.empresa,"INSERT");
                oObject.usuarios.push(fModels.amont(qat.model.fnUsuario($scope.usuario,"INSERT","system")));
                SysMgmtData.processPostPageData("main/api/anonimo",{
                        url: "entidade/api/empresa"+   WebDaptiveAppConfig.create_url,
                        request: new qat.model.reqEmpr(oObject ,true, true)}, function(res){
                   if(res.operationSuccess == true)
                   {

                   }

                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.newEmpresa.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NewEmpresaUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.newEmpresa = {};
            $scope.newEmpresa = $rootScope.newEmpresa;
            console.log($rootScope.newEmpresa)
            $scope.saveNewEmpresa = function() {
                fPessoa.fnMontaObjeto($scope.newEmpresa, null, 'UPDATE', "site/api/newEmpresa/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.newEmpresa.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NewEmpresaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.newEmpresa = {};
            $scope.newEmpresa = $rootScope.newEmpresa;
            console.log($rootScope.newEmpresa)
            $scope.saveNewEmpresa = function() {
                fPessoa.fnDelete($scope.newEmpresa, "site/api/newEmpresa/update/", function(){console.log('ddda   aqui')});
            }
        });
})();

(function() {
    angular.module('wdApp.apps.newEmpresa.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'angularModalService'])
        .controller('NewEmpresaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa,localStorageService, $location,fEmpresa,ModalService) {
            var vm = this;

            vm.alterStatus = alterStatus;
            vm.addSocios = addSocios;
            vm.addCnae = addCnae;
            vm.addPlano = addPlano;
            vm.addSite = addSite;
            vm.addColaborador = addColaborador;
            vm.addPlanoContas = addPlanoContas;
            vm.addFilial = addFilial;

            $scope.empresa = {
                configuracao :{
                    confGeral : {},
                    confVendas: {},
                    confEntrada: {},
                    configOS: {},
                    confCarne: {},
                    confFiscal: {},
                    confNFe: {},
                    confAlertas: {},
                    confSMTP: {},
                    confBlueSoft: {}

                }
            };
            $scope.enderecos = [];

            $scope.configuracao = {
                confGeral : {},
                confVendas: {},
                confEntrada: {},
                configOS: {},
                confCarne: {},
                confFiscal: {},
                confNFe: {},
                confAlertas: {},
                confSMTP: {},
                confBlueSoft: {}

            }



            function alterStatus() {
            ModalService.showModal({
                templateUrl: 'views/util/dialog/dAlterStatus.html',
                controller: "SocioInsertController",
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addSocios() {

            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: "SocioInsertController"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addPlano() {
            debugger
            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

         function addSite() {
            debugger
            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

         function addColaborador() {
            debugger
            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

         function addPlanoContas() {
            debugger
            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addFilial() {
            debugger
            ModalService.showModal({

                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }



        function addCnae() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dCnae.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();

                $(".selectd").select2({
                    placeholder: "Select a state"
                });
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

            $scope.toggle = function() {
                $scope.state = !$scope.state;
            };

            $scope.toggle1 = function() {
                $scope.state1 = !$scope.state1;
            };

            $scope.toggle2 = function() {
                $scope.state2 = !$scope.state2;
            };

         //   debugger
            var searchObject = $location.search();
            var _emprId = null;
            if((localStorage.getItem('empresa') !== undefined)&&(localStorage.getItem('empresa') !== null))
            {
                _emprId = JSON.parse(localStorage.getItem('empresa')).id;
            }



            SysMgmtData.processPostPageData("main/api/request",{
                    url: "entidade/api/empresa/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0,true,null,parseInt(searchObject.id,10),null ,null)}, function(res){
                        //qat.model.empresaInquiryRequest = function ( _iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
                        //new qat.model.empresaInquiryRequest(0, true,null,null,null)
               console.log(res)

               if(res.operationSuccess == true)
               {

                  $scope.empresa = res.empresaList[0];
                  $scope.enderecos = res.empresaList[0].enderecos;
                  console.log($scope.empresa)
               }

            });


            // save
            $scope.updateEmpresa = function() {

                if($scope.forms != undefined)
                {
                    for(x = 0;x< $scope.forms.length; x++ )
                    {
                        $scope.empresa.telefones.push(fModels.amont($scope.forms[x].telefone,"INSERT"));
                    }
                }

                 if($scope.configuracao == undefined)
                {
                     $scope.empresa.configuracao = {
                        confGeral : {},
                        confVendas: {},
                        confEntrada: {},
                        configOS: {},
                        confCarne: {},
                        confFiscal: {},
                        confNFe: {},
                        confAlertas: {},
                        confSMTP: {},
                        confBlueSoft: {}

                     };
                }

                $scope.empresa.configuracao = fModels.amont($scope.configuracao,"UPDATE");
                //-------------------
                if($scope.configuracao.confGeral.id !== undefined)
                {
                    $scope.empresa.configuracao.confGeral = fModels.amont($scope.configuracao.confGeral,"UPDATE");
                }
                else
                {
                    //$scope.empresa.configuracao = {confGeral : {}};
                    $scope.empresa.configuracao.confGeral = fModels.amont($scope.configuracao.confGeral,"INSERT");
                }
                //-------------------
                if($scope.configuracao.confVendas.id !== undefined)
                {
                    $scope.empresa.configuracao.confVendas = fModels.amont($scope.configuracao.confVendas,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confVendas = fModels.amont($scope.configuracao.confVendas,"INSERT");
                }


                //-------------------
                if($scope.configuracao.confEntrada.id !== undefined)
                {
                    $scope.empresa.configuracao.confEntrada = fModels.amont($scope.configuracao.confEntrada,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confEntrada = fModels.amont($scope.configuracao.confEntrada,"INSERT");
                }


                //-------------------
                if($scope.configuracao.configOS.id !== undefined)
                {
                    $scope.empresa.configuracao.configOS = fModels.amont($scope.configuracao.configOS,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.configOS = fModels.amont($scope.configuracao.configOS,"INSERT");
                }

                //-------------------
                if($scope.configuracao.confCarne.id !== undefined)
                {
                    $scope.empresa.configuracao.confCarne = fModels.amont($scope.configuracao.confCarne,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confCarne = fModels.amont($scope.configuracao.confCarne,"INSERT");
                }

                //-------------------
                if($scope.configuracao.confFiscal.id !== undefined)
                {
                    $scope.empresa.configuracao.confFiscal = fModels.amont($scope.configuracao.confFiscal,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confFiscal = fModels.amont($scope.configuracao.confFiscal,"INSERT");
                }

                //-------------------
                if($scope.configuracao.confNFe.id !== undefined)
                {
                    $scope.empresa.configuracao.confNFe = fModels.amont($scope.configuracao.confNFe,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confNFe = fModels.amont($scope.configuracao.confNFe,"INSERT");
                }
                //-------------------
                if($scope.configuracao.confAlertas.id !== undefined)
                {
                    $scope.empresa.configuracao.confAlertas = fModels.amont($scope.configuracao.confAlertas,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confAlertas = fModels.amont($scope.configuracao.confAlertas,"INSERT");
                }
                //-------------------
                if($scope.configuracao.confSMTP.id !== undefined)
                {
                    $scope.empresa.configuracao.confSMTP = fModels.amont($scope.configuracao.confSMTP,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confSMTP = fModels.amont($scope.configuracao.confSMTP,"INSERT");
                }
                //-------------------
                if($scope.configuracao.confBlueSoft.id !== undefined)
                {
                    $scope.empresa.configuracao.confBlueSoft = fModels.amont($scope.configuracao.confBlueSoft,"UPDATE");
                }
                else
                {
                    $scope.empresa.configuracao.confBlueSoft = fModels.amont($scope.configuracao.confBlueSoft,"INSERT");
                }


                fEmpresa.fnMontaObjeto($scope.empresa,$scope.enderecos,"UPDATE",'PRINCIPAL')

                var oObject = fModels.amont($scope.empresa,"UPDATE");

                oObject.cnaes = [];
                oObject.planosServicos = {};
                oObject.siteList = [];



                if($scope.usuario != undefined)
                {
                    oObject.usuarios.push(fModels.amont(qat.model.fnUsuario($scope.usuario,"UPDATE","system")));
                }
                SysMgmtData.processPostPageData("main/api/request",{
                        url: "entidade/api/empresa"+   WebDaptiveAppConfig.update_url,
                        token: $rootScope.authToken,
                        request: new qat.model.reqEmpr(oObject ,true, true)}, function(res){
                   if(res.operationSuccess == true)
                   {

                   }

                });
            };
        });
})();