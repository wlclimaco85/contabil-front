(function() {
angular.module('wdApp.apps.produto', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
.controller('ProdutoController', produtoController);

    function produtoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
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
        $scope.produto = {
            tipoproduto: 2
        };

        var openDialogUpdateCreate = function () {
            bookIndex = 0;
            $('.ProdutoForm')
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

                    dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoInsertController",openDialogUpdateCreate);

                }
            }]);
        var aColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
        DTColumnBuilder.newColumn('codigo').withTitle('Codigo').withOption('width', '30px'),
        DTColumnBuilder.newColumn(null).withTitle('Nome Produto').renderWith(function(data, type, full, meta) {

                return '<p>'+data.prodId.produto+'</p>';
            }).withOption('width', '100px'),
        DTColumnBuilder.newColumn(null).withTitle('NCM').renderWith(function(data, type, full, meta) {

                return '<p>'+data.prodId.ncm+'</p>';
            }).withOption('width', '50px'),
        DTColumnBuilder.newColumn(null).withTitle('Cod Barra').renderWith(function(data, type, full, meta) {

                return '<p>'+data.prodId.cdBarras+'</p>';
            }).withOption('width', '100px'),
        DTColumnBuilder.newColumn(null).withTitle('Data Cadastro').renderWith(function(data, type, full, meta) {

                return '<p>'+data.prodId.dataCreate+'</p>';
            }).withOption('width', '100px'),
        DTColumnBuilder.newColumn(null).withTitle('Estoque Atual').renderWith(function(data, type, full, meta) {
                var estoqueList = "0";
                if(data.estoqueList.length > 0)
                {
                    for(var x = 0;x < data.estoqueList.length;x++)
                    {
                        if(data.estoqueList[x].estoqueTypeEnum == "ATUAL")
                        {
                            estoqueList = data.estoqueList[x].quant + "<br><small>" + data.estoqueList[x].ultimoMov +"</small>"
                        }
                    }
                }
                return '<p>'+estoqueList+'</p>';
            }).withOption('width', '100px'),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        DTColumnBuilder.newColumn(null).withTitle('Nome Produto').renderWith(function(data, type, full, meta) {

                return '<p>'+data.prodId.produto+'</p>';
            }).withOption('width', '100px'),
        DTColumnBuilder.newColumn('cEST').withTitle('cEST').notVisible(),
        DTColumnBuilder.newColumn('exceçãoIPI').withTitle('exceçãoIPI').notVisible(),
        DTColumnBuilder.newColumn('informAdicionaisParaNFe').withTitle('informAdicionaisParaNFe').notVisible(),
        DTColumnBuilder.newColumn('anotainternas').withTitle('anotainternas').notVisible(),
        DTColumnBuilder.newColumn('unidTributada').withTitle('unidTributada').notVisible(),
        DTColumnBuilder.newColumn('categoria').withTitle('Categoria').notVisible(),
        DTColumnBuilder.newColumn('marca').withTitle('marca').notVisible(),
        DTColumnBuilder.newColumn('pesolíquido').withTitle('pesolíquido').notVisible(),
        DTColumnBuilder.newColumn('pesobruto').withTitle('pesobruto').notVisible(),
        DTColumnBuilder.newColumn('cFOPPadraoNFe').withTitle('cFOPPadraoNFe').notVisible(),
        DTColumnBuilder.newColumn('IcmsSitTributaria').withTitle('IcmsSitTributaria').notVisible(),
        DTColumnBuilder.newColumn('iCMSOrigem').withTitle('iCMSOrigem').notVisible(),
        DTColumnBuilder.newColumn('iPISitTributaria').withTitle('iPISitTributaria').notVisible(),
        DTColumnBuilder.newColumn('classeCigarrosBebidas').withTitle('classeCigarrosBebidas').notVisible(),
        DTColumnBuilder.newColumn('cNPJProdutor').withTitle('cNPJProdutor').notVisible(),
        DTColumnBuilder.newColumn('codControleIPI').withTitle('codControleIPI').notVisible(),
        DTColumnBuilder.newColumn('qtdSeloIPI').withTitle('qtdSeloIPI').notVisible(),
        DTColumnBuilder.newColumn('codEnquadramento').withTitle('codEnquadramento').notVisible(),
        DTColumnBuilder.newColumn('tipoCalculo').withTitle('tipoCalculo').notVisible(),
        DTColumnBuilder.newColumn('aliquotaIPI').withTitle('aliquotaIPI').notVisible(),
        DTColumnBuilder.newColumn('pISSituaTributaria').withTitle('pISSituaTributaria').notVisible(),
        DTColumnBuilder.newColumn('valorUnidtribPIS').withTitle('valorUnidtribPIS').notVisible(),
        DTColumnBuilder.newColumn('tipocalculoSubstTrib').withTitle('tipocalculoSubstTrib').notVisible(),
        DTColumnBuilder.newColumn('valorTribPISST').withTitle('valorTribPISST').notVisible(),
        DTColumnBuilder.newColumn('cOFINSSituatributaria').withTitle('cOFINSSituatributaria').notVisible(),
        DTColumnBuilder.newColumn('valorTribCOFINS').withTitle('valorTribCOFINS').notVisible(),
        DTColumnBuilder.newColumn('tipoCalculoSubstTrib').withTitle('tipoCalculoSubstTrib').notVisible(),
        DTColumnBuilder.newColumn('aliquotaCOFINSST').withTitle('aliquotaCOFINSST').notVisible(),
        DTColumnBuilder.newColumn('estMinimo').withTitle('estMinimo').notVisible(),
        DTColumnBuilder.newColumn('estMaximo').withTitle('estMaximo').notVisible(),
        DTColumnBuilder.newColumn('margemLucro').withTitle('margemLucro').notVisible(),
        DTColumnBuilder.newColumn('precoVenda').withTitle('precoVenda'),
        DTColumnBuilder.newColumn('precoCusto').withTitle('precoCusto').notVisible(),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
        DTColumnBuilder.newColumn('status').withTitle('status'),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '100px')
    ];

        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.produtoParentList.length
            json['recordsFiltered'] = json.produtoParentList.length
            json['draw'] = 1
            console.log(json)
            return json.produtoParentList;
        }
        Datatablessss.getTable('/produto/api/produtoParent/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, oOptions, aColumns);

        function edit(person) {
            $rootScope.produto = person;
            dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           dialogFactory.dialog('views/produto/dialog/dProduto.html',"ProdutoDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.produto.insert', ['angucomplete','inputactions'])
        .controller('ProdutoInsertController', function($rootScope, $scope, fModels, SysMgmtData, fProduto,$templateCache, $http) {
            var vm = this;


        $scope.produto = {};
        $scope.tributacao = {};
        $scope.produtoEmpresa = {};


        $scope.produto.produto = "Coca Cola";
        $scope.produto.nCM = "ncm";
        $scope.produto.cdBarras = "cd barras";
        $scope.produto.excTabIPI = "excecaoIPI";
        $scope.produto.cEST = "cEST";
        $scope.produto.quant = 2;
        $scope.produto.unidTributada = {};
        $scope.produto.unidTributada.id = 1;
        $scope.produto.marca = {};
        $scope.produto.marca.id = 1;

        $scope.produtoEmpresa.dataCreate =  (new Date()).getTime();
        $scope.produtoEmpresa.InfaddNFe = "informAdicionaisParaNFe";
        $scope.produtoEmpresa.AnotInt = "anotainternas";

        $scope.produtoEmpresa.categoria = {};
        $scope.produtoEmpresa.categoria.id = 1;

        $scope.produtoEmpresa.codigo = "0004575"
        $scope.produtoEmpresa.pesoliquido = "1.96"
        $scope.produtoEmpresa.pesobruto = "0.09"
        $scope.produtoEmpresa.margemLucro = "5"
        $scope.produtoEmpresa.custoList = [{valor : 10}];
        $scope.produtoEmpresa.custoList[0].valor = 1.99
        $scope.produtoEmpresa.precoList = [{valor : 0}];
        $scope.produtoEmpresa.precoList[0].valor = 2.39;
        $scope.produtoEmpresa.precoList[0].dataMarcacao = (new Date()).getTime();
        $scope.produtoEmpresa.precoList[0].precoTypeEnumValue = 3;
        $scope.produtoEmpresa.estoqueList = [
            {
                estoqueTypeEnumValue : 1,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            },
            {
                estoqueTypeEnumValue : 4,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            },
            {
                estoqueTypeEnumValue : 3,
                 quant : 0,
                 ultimoMov : (new Date()).getTime()
            }
        ];


        //
        $scope.tributacao.cfop = {}
        $scope.tributacao.cfop.id = 1
        $scope.tributacao.icms = {};
        $scope.tributacao.icms.sitTributaria = {}
        $scope.tributacao.icms.sitTributaria.id = 1;
        $scope.tributacao.icms.origem = {};
        $scope.tributacao.icms.origem.id = 5;
        $scope.tributacao.icms.modalidadeBC = {};
        $scope.tributacao.icms.modalidadeBC.id = 3;
        $scope.tributacao.icms.redBase = 1.99;
        $scope.tributacao.icms.aliqICMS = 0.99;
        $scope.tributacao.icms.motDesoneracao = {};
        $scope.tributacao.icms.motDesoneracao.id = 3;

        $scope.tributacao.ipi ={};
        $scope.tributacao.ipi.sitTributaria ={};
        $scope.tributacao.ipi.sitTributaria.id = "53";
        $scope.tributacao.ipi.classeCigarrosBebidas = "504";
        $scope.tributacao.ipi.cNPJProdutor = "55555555555/0001";
        $scope.tributacao.ipi.codControleIPI = "00054";
        $scope.tributacao.ipi.qtdSeloIPI = "4444";
        $scope.tributacao.ipi.codEnquadramento = {}
        $scope.tributacao.ipi.codEnquadramento.id = 900;
        $scope.tributacao.ipi.tipoCalculo = {}
        $scope.tributacao.ipi.tipoCalculo.id = 1;
        $scope.tributacao.ipi.aliquotaIPI = 1.99;

        $scope.tributacao.pis = {}
        $scope.tributacao.pis.pISSituaTributaria = {}
        $scope.tributacao.pis.pISSituaTributaria.id = 72;
        $scope.tributacao.pis.valorUnidtribPIS = "4454";
        $scope.tributacao.pis.tipocalculoSubstTrib = {};
        $scope.tributacao.pis.tipocalculoSubstTrib.id = 2;
        $scope.tributacao.pis.valorTribPISST = "1.99";

        $scope.tributacao.cofins = {}
        $scope.tributacao.cofins.sitTributaria = {}
        $scope.tributacao.cofins.sitTributaria.id = 63;
        $scope.tributacao.cofins.valorTribCOFINS = "0.99";
        $scope.tributacao.cofins.tipoCalculoSubstTrib ={};
        $scope.tributacao.cofins.tipoCalculoSubstTrib.id = 2;
        $scope.tributacao.cofins.aliquotaCOFINSST = "0.01";


        $scope.people = [
            {firstName: "Daryl", surname: "Rowland", twitter: "@darylrowland", pic: "img/daryl.jpeg"},
            {firstName: "Alan", surname: "Partridge", twitter: "@alangpartridge", pic: "img/alanp.jpg"},
            {firstName: "Annie", surname: "Rowland", twitter: "@anklesannie", pic: "img/annie.jpg"}
        ];

        var callbackBanco = function(res){
        var planos = "";
debugger
       if(res.operationSuccess == true)
       {

           $scope.countries = res.produtoList;

        }
    }

  //  qat.model.select.anonimo("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);
    qat.model.select.util("produto/api/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);

    

            $scope.updateSlotName = function(updatedModel){
debugger
               /* var tgbMaintenanceRequest = {
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
            $scope.saveProduto = function() {
                debugger
                fProduto.fnMontaObjeto($scope.produto, $scope.tributacao,$scope.produtoEmpresa, 'INSERT', "produto/api/produtoParent/insert/", fnCallBack);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.produto.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnMontaObjeto($scope.produto, $scope.endereco, 'UPDATE', "site/api/produto/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.produto.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnDelete($scope.produto, "site/api/produto/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.produto.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoViewController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;
            $scope.produto = {};
            $scope.produto = $rootScope.produto;
            console.log($rootScope.produto)
            $scope.saveProduto = function() {
                fProduto.fnOpenView($scope.produto,"site/api/produto/update/", function(){console.log('aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.produto.select', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ProdutoSelectController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
            var vm = this;

            $scope.produtosSelect = "";
            $scope.produto = {};



        $scope.forms = [{id : 0,
               produto : "",
               ddd : 'form1',
               quantidade : 0,
               telefoneTypeEnumValue : 0,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()}];
        $scope.count = 0;

        $scope.createForm = function(type){
            debugger
            $scope.forms.push({id : 0,
               produto : "",
               ddd : 'form2',
               quantidade : 0,
               telefoneTypeEnumValue : 0,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()});

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


        var callbackBanco = function(res){
                var planos = "";

               if(res.operationSuccess == true)
               {

                   $scope.produtos = res.produtoParentList;

                   $(".produto").select2({
                      placeholder: "Selecione o BANCO",
                      allowClear: true
                    });
              /*     for(var x = 0 ;x < res.produtoParentList.length;x++)
                   {
                       $scope.produtosSelect = $scope.produtosSelect + "<option value='"+res.produtoParentList[x].id+"'> "+res.produtoParentList[x].codigo+" "+res.produtoParentList[x].prodId.ncm+" "+res.produtoParentList[x].prodId.produto+"  </option>";
                   }

                    $('.selectProduto').append($scope.produtosSelect);

                    $(".produto").select2({
                          placeholder: "Selecione o BANCO",
                          allowClear: true
                        });*/
               }

            }

            qat.model.select.util("produto/api/produtoParent/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),callbackBanco);

        $scope.deleteForm = function(formScope){


            delete $scope.forms(formScope);
        }
        });
})();