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


        $scope.buscaRCep = function(){
                $scope.detail = 0;



                 $('.toggle-one').bootstrapToggle();
                 $('.toggle-one').change(function() {
                  $scope.detail = 1;
                })
                 $scope.tabs=5;
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
    angular.module('wdApp.apps.produto.insert', ['angucomplete','inputactions','ngSanitize', 'ui.select']).filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
}).controller('ProdutoInsertController', function($rootScope, $scope, fModels, SysMgmtData, fProduto,$templateCache, $http, $timeout, $interval) {
            var vm = this;


        $scope.produto = {};
        $scope.tributacao = {};
        $scope.produtoEmpresa = {};
        $scope.details = 0;
        $scope.teste = 1;


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
        $scope.tributacao =  {}


        var callbackBanco = function(res){
        var planos = "";

       if(res.operationSuccess == true)
       {

           $scope.countries = res.produtoList;

        }
    }

  //  qat.model.select.anonimo("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);
    qat.model.select.util("produto/api/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);

            vm.icmsST = [];
            vm.icmsOri = [];
            vm.icmsMBC = [];
            vm.icmsMD = [];

            $scope.icmsST = [];


            $scope.updateSlotName = function(updatedModel){

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

                console.log(oResponse)
            }
            $scope.saveProduto = function() {
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
angular.module('wdApp.apps.produto.select', ['ngSanitize', 'ui.select'])
    .filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
}).controller('ProdutoSelectController', produtoSelectController);

    function produtoSelectController($scope, $http, $timeout, $interval) {
        var vm = this;


        $scope.forms = [{ nome : 'form1' ,cnae :{id : 0}}];
        $scope.createForm = function(type){

            $scope.forms.push({ nome : 'form1' + ($scope.forms.length + 1),cnae :{id : type}});

        };

        $scope.fnTelefoneType = function(type){

        var typeEnum
            switch (new Date().getDay()) {
                case "":
                    day = "Sunday";
                    break;
                case "":
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
            }

        }

        $scope.deleteForm = function(formScope){

            delete $scope.forms(formScope);
        }

        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
        };


  vm.disabled = undefined;
  vm.searchEnabled = undefined;

  vm.setInputFocus = function (){
    $scope.$broadcast('UiSelectDemo1');
  };

  vm.enable = function() {
    vm.disabled = false;
  };

  vm.disable = function() {
    vm.disabled = true;
  };

  vm.enableSearch = function() {
    vm.searchEnabled = true;
  };

  vm.disableSearch = function() {
    vm.searchEnabled = false;
  };

  vm.clear = function() {
    vm.person.selected = undefined;
    vm.address.selected = undefined;
    vm.country.selected = undefined;
  };

  vm.someGroupFn = function (item){

    if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';

    if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

  };

  vm.firstLetterGroupFn = function (item){
      return item.name[0];
  };

  vm.reverseOrderFilterFn = function(groups) {
    return groups.reverse();
  };

  vm.personAsync = {selected : "wladimir@email.com"};
  vm.peopleAsync = [];

  $timeout(function(){
   vm.peopleAsync = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
      ];
  },3000);

  vm.counter = 0;


  vm.removed = function (item, model) {
    vm.lastRemoved = {
        item: item,
        model: model
    };
  };

  vm.tagTransform = function (newTag) {
    var item = {
        name: newTag,
        email: newTag.toLowerCase()+'@email.com',
        age: 'unknown',
        country: 'unknown'
    };

    return item;
  };

  vm.peopleObj = {
    '1' : { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    '2' : { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    '3' : { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    '4' : { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    '5' : { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    '6' : { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    '7' : { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    '8' : { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    '9' : { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    '10' : { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
  //vm.person.selected = vm.person.selectedValue;

  vm.produto = [
//    { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
//    { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
//    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
//    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
 //   { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
 //   { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
 //   { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
//    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
 //   { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
 //   { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  ];

   var callbackBanco = function(res){
        var planos = "";

       if(res.operationSuccess == true)
       {

           vm.produto = res.produtoParentList;
           console.log(res.produtoParentList);
        }
    }

  //qat.model.select.anonimo("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);
  qat.model.select.util("produto/api/produtoParent/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),callbackBanco);
  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.produto[5], vm.produto[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.produto[8], vm.produto[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.produto[2], vm.produto[0]];

  vm.appendToBodyDemo = {
    remainingToggleTime: 0,
    present: true,
    startToggleTimer: function() {
      var scope = vm.appendToBodyDemo;
      var promise = $interval(function() {
        if (scope.remainingTime < 1000) {
          $interval.cancel(promise);
          scope.present = !scope.present;
          scope.remainingTime = 0;
        } else {
          scope.remainingTime -= 1000;
        }
      }, 1000);
      scope.remainingTime = 3000;
    }
  };

  vm.address = {};
  vm.refreshAddresses = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response) {
      vm.addresses = response.data.results;
    });
  };

  vm.addPerson = function(item, model){
    if(item.hasOwnProperty('isTag')) {
      delete item.isTag;
      vm.produto.push(item);
    }
  }

  vm.country = {};
  vm.countries = [ // Taken from https://gist.github.com/unceus/6501985

  ];

    }
})();


(function() {
angular.module('wdApp.apps.produto.selects', ['ngSanitize', 'ui.select'])
    .filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
}).controller('ProdutoSelectControllers', produtoSelectControllers);

    function produtoSelectControllers($scope, $http, $timeout, $interval) {
        var vm = this;


        $scope.forms = [{ nome : 'form1' ,cnae :{id : 0}}];
        $scope.createForm = function(type){

            $scope.forms.push({ nome : 'form1' + ($scope.forms.length + 1),cnae :{id : type}});


        };

        $scope.fnTelefoneType = function(type){

        var typeEnum
            switch (new Date().getDay()) {
                case "":
                    day = "Sunday";
                    break;
                case "":
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
            }

        }

        $scope.deleteForm = function(formScope){

            delete $scope.forms(formScope);
        }

        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
        };


  vm.disabled = undefined;
  vm.searchEnabled = undefined;

  vm.setInputFocus = function (){
    $scope.$broadcast('UiSelectDemo1');
  };

  vm.enable = function() {
    vm.disabled = false;
  };

  vm.disable = function() {
    vm.disabled = true;
  };

  vm.enableSearch = function() {
    vm.searchEnabled = true;
  };

  vm.disableSearch = function() {
    vm.searchEnabled = false;
  };

  vm.clear = function() {
    vm.person.selected = undefined;
    vm.address.selected = undefined;
    vm.country.selected = undefined;
  };

  vm.someGroupFn = function (item){

    if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';

    if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

  };

  vm.firstLetterGroupFn = function (item){
      return item.name[0];
  };

  vm.reverseOrderFilterFn = function(groups) {
    return groups.reverse();
  };

  vm.personAsync = {selected : "wladimir@email.com"};
  vm.peopleAsync = [];

  $timeout(function(){
   vm.peopleAsync = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
      ];
  },3000);

  vm.counter = 0;


  vm.removed = function (item, model) {
    vm.lastRemoved = {
        item: item,
        model: model
    };
  };

  vm.tagTransform = function (newTag) {
    var item = {
        name: newTag,
        email: newTag.toLowerCase()+'@email.com',
        age: 'unknown',
        country: 'unknown'
    };

    return item;
  };

  vm.peopleObj = {
    '1' : { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    '2' : { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    '3' : { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    '4' : { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    '5' : { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    '6' : { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    '7' : { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    '8' : { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    '9' : { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    '10' : { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
  //vm.person.selected = vm.person.selectedValue;

  vm.produto = [
//    { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
//    { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
//    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
//    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
 //   { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
 //   { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
 //   { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
//    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
 //   { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
 //   { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  ];
   vm.icmsST = [];
   vm.icmsOri = [];

      var fnCallbackDoisValor = function(res){
        var planos = "";


debugger
       if(res.operationSuccess == true)
       {
            for(var x=0;x<res.doisValoresList.length;x++)
            {
                planos = res.doisValoresList[x] ;
                if(planos.doisValorType != null)
                {
                    switch (planos.doisValorType.tipo)
                    {
                        case 'ICMS - SITUAÇÃO TRIBUTARIA':
                            vm.icmsST.push(planos);
                            break;
                        case 'ICMS - ORIGEM':
                            vm.icmsOri.push(planos)
                            break;
                    }
                }
            }


       }
    }

    qat.model.select.util("entidade/api/doisValores/fetchPage",true,new qat.model.doisValoresInquiryRequest(2, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackDoisValor);

vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.produto[5], vm.produto[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.produto[8], vm.produto[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.produto[2], vm.produto[0]];

  vm.appendToBodyDemo = {
    remainingToggleTime: 0,
    present: true,
    startToggleTimer: function() {
      var scope = vm.appendToBodyDemo;
      var promise = $interval(function() {
        if (scope.remainingTime < 1000) {
          $interval.cancel(promise);
          scope.present = !scope.present;
          scope.remainingTime = 0;
        } else {
          scope.remainingTime -= 1000;
        }
      }, 1000);
      scope.remainingTime = 3000;
    }
  };

  vm.address = {};
  vm.refreshAddresses = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response) {
      vm.addresses = response.data.results;
    });
  };

  vm.addPerson = function(item, model){
    if(item.hasOwnProperty('isTag')) {
      delete item.isTag;
      vm.produto.push(item);
    }
  }

  vm.country = {};
  vm.countries = [ // Taken from https://gist.github.com/unceus/6501985

  ];

    }
})();