/*'use strict';
angular.module('wdApp.apps.produto', ['datatables'])
.controller('BindAngularDirectiveCtrl', BindAngularDirectiveCtrl);

function BindAngularDirectiveCtrl($scope, $compile, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.message = '';
    vm.edit = edit;
    vm.delete = deleteRow;
    vm.dtInstance = {};
    vm.persons = {};
    vm.dtOptions = DTOptionsBuilder.fromSource('data1.json')
        .withPaginationType('full_numbers')
        .withOption('createdRow', createdRow);
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
            .renderWith(actionsHtml)
    ];

    function edit(person) {
        vm.message = 'You are trying to edit the row: ' + JSON.stringify(person);
        // Edit some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        vm.dtInstance.reloadData();
    }
    function deleteRow(person) {
        vm.message = 'You are trying to remove the row: ' + JSON.stringify(person);
        // Delete some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        vm.dtInstance.reloadData();
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
        vm.persons[data.id] = data;
        return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-edit"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>';
    }
}

angular.module("wdApp.apps.produto", ["ngTable","datatables"]);



(function() {
angular.module('wdApp.apps.produto', ['datatables'])
.controller('DataReloadWithAjaxCtrl', DataReloadWithAjaxCtrl);

function DataReloadWithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    debugger
    vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
        .withOption('stateSave', true)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];
    vm.newSource = 'data1.json';
    vm.reloadData = reloadData;
    vm.dtInstance = {};

    function reloadData() {
        var resetPaging = false;
        vm.dtInstance.reloadData(callback, resetPaging);
    }

    function callback(json) {
        console.log(json);
    }
}
})();

(function() {
  angular.module('wdApp.apps.produto', ['datatables', 'datatables.tabletools'])
.controller('WithTableToolsCtrl', WithTableToolsCtrl);

function WithTableToolsCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder
        .fromSource('data.json')
        // Add Table tools compatibility
        .withTableTools('vendor/datatables-tabletools/swf/copy_csv_xls_pdf.swf')
        .withTableToolsButtons([
            'copy',
            'print', {
                'sExtends': 'collection',
                'sButtonText': 'Save',
                'aButtons': ['csv', 'xls', 'pdf']
            }

        ]);
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];
}
})();
*/
'use strict';
angular.module('wdApp.apps.produto', ['datatables', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap'])
    .controller('WithButtonsCtrl', WithButtonsCtrl);

function WithButtonsCtrl($compile, $scope,  DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;

    vm.message = '';
    vm.edit = edit;
    vm.delete = deleteRow;
    vm.dtInstance = {};
    vm.persons = {};
    vm.selected = {};
    vm.selectAll = false;
   // vm.toggleAll = toggleAll;
   // vm.toggleOne = toggleOne;

 //   var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
 //       'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';


    vm.dtOptions = vm.dtOptions = DTOptionsBuilder
        .fromSource('data.json')
  //      .withDOM('<\'row\'<\'col-xs-6\'l><\'col-xs-6\'f>r>t<\'row\'<\'col-xs-6\'i><\'col-xs-6\'p>>')
       
        .withDOM('<"row tablealign"<"col-sm-4  col-xs-12" T><"col-sm-1  col-xs-1" C> <"col-xs-6" f>>t<\'row\'<\'col-xs-5\'i><\'col-xs-3\'l><\'col-xs-4\'p>>')
        .withPaginationType('full_numbers')
        .withOption('createdRow', createdRow)
            //.withDataProp('data')
            .withOption('serverSide', true)
            .withOption('processing', true)
            .withOption('language',{
                paginate : {            // Set up pagination text
                    first: "&laquo;",
                    last: "&raquo;",
                    next: "&rarr;",
                    previous: "&larr;"
                },
                lengthMenu: "_MENU_ records per page" 
            })
        .withBootstrap()
        .withBootstrapOptions({
            TableTools: {
                classes: {
                    container: 'btn-group',
                    buttons: {
                        normal: 'btn btn-danger'
                    }
                }
            },
            ColVis: {
                classes: {
                    masterButton: 'btn btn-primary'
                }
            },
            pagination: {
                classes: {
                    ul: 'pagination pagination-sm'
                }
            }
        })
        /*
            .withColReorder()
            .withColReorderOption('iFixedColumnsRight', 1)
            .withColVis()
            .withColVisOption('buttonText', '<i class="fa fa-cog fa-fw">') 
            .withColVisOption('activate','mouseover')
            .withColVisOption( 'label',function ( index, title, th ) {
                    return (index+1) +'. '+ title;
                })
            .withColVisOption( 'align', 'left')
            .withDOM('<"row tablealign" <"col-sm-2 col-xs-8 col-xs-offset-4 col-sm-offset-1" l><"col-sm-2  col-xs-5" T><"col-sm-3  col-xs-7" f><"col-sm-1  col-xs-1" C><"col-sm-3  col-xs-8" p>>t<"F"i>')
            .withTableTools('vendor/datatables/datatables-tabletools/swf/copy_csv_xls_pdf.swf') //for copy, print, xls, pdf, csv
            .withTableToolsButtons([{
                'sExtends': 'print',
                'sButtonText': '<i class="tabletoolicon fa fa-print"> '
                },{
                    'sExtends': 'copy',
                    'sButtonText': '<i class="tabletoolicon fa fa-copy"> '
                },{
                    'sExtends': 'collection',
                    'sButtonText': '<i class="glyphicon glyphicon-save">',
                    'aButtons': [{
                        'sExtends': 'csv',
                        'sButtonText': '<i class="tabletoolicon fa fa-file-excel-o"> csv',
                        'oSelectorOpts': {
                            filter: 'applied'
                        },
                    'sCsvMessage': 'Client List'
                }, {
                    'sExtends': 'xls',
                    'sButtonText': '<i class="tabletoolicon fa fa-file-excel-o"> xls',
                    'oSelectorOpts': {
                        filter: 'applied'
                },
                    'sXlsMessage': 'Client List'
                }, {
                    'sExtends': 'pdf',
                    'sButtonText': '<i class="tabletoolicon fa fa-file-pdf-o"> pdf',
                    'oSelectorOpts': {
                        filter: 'applied'
                    },
                    'sPdfMessage': 'Client List'
                }]
            }])
            .withBootstrap()             
            .withBootstrapOptions({
                TableTools: {
                    classes: {
                        container: 'btn-group',
                    }
                },
                ColVis: {
                    classes: {
                        masterButton: 'btn btn-success'
                    }
                },
                pagination: {
                    classes: {
                        ul: 'pagination pagination-sm'
                    }
                }
            })



        */

        // Add ColVis compatibility

        .withLightColumnFilter({
            '0' : {
                type : 'text'
            },
            '1' : {
                type : 'text'
            },
            '2' : {
                type : 'select',
                values: [{
                    value: 'Yoda', label: 'Yoda foobar'
                }, {
                    value: 'Titi', label: 'Titi foobar'
                }, {
                    value: 'Kyle', label: 'Kyle foobar'
                }, {
                    value: 'Bar', label: 'Bar foobar'
                }, {
                    value: 'Whateveryournameis', label: 'Whateveryournameis foobar'
                }]
            }
        })
        // Active Buttons extension
        .withDisplayLength(10);
    vm.dtColumns = [
      //  DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
      //      .renderWith(function(data, type, full, meta) {
      //          vm.selected[full.id] = false;
      //          return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
      //      }),
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('codigo').withTitle('Codigo'),
        DTColumnBuilder.newColumn('produto').withTitle('Nome Produto'),
        DTColumnBuilder.newColumn('nCM').withTitle('NCM'),
        DTColumnBuilder.newColumn('codbarra').withTitle('Cod Barra'),
        DTColumnBuilder.newColumn('dataCadastro').withTitle('Data Cadastro'),
        DTColumnBuilder.newColumn('estAtual').withTitle('Estoque Atual'),
        DTColumnBuilder.newColumn('precoVenda').withTitle('Preço Venda'),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        DTColumnBuilder.newColumn('cEST').withTitle('cEST'),
        DTColumnBuilder.newColumn('exceçãoIPI').withTitle('exceçãoIPI'),
        DTColumnBuilder.newColumn('informAdicionaisParaNFe').withTitle('informAdicionaisParaNFe'),
        DTColumnBuilder.newColumn('anotainternas').withTitle('anotainternas'),
        DTColumnBuilder.newColumn('unidTributada').withTitle('unidTributada'),
        DTColumnBuilder.newColumn('grupo').withTitle('grupo'),
        DTColumnBuilder.newColumn('subGrupo').withTitle('subGrupo'),
        DTColumnBuilder.newColumn('marca').withTitle('marca'),
        DTColumnBuilder.newColumn('pesolíquido').withTitle('pesolíquido'),
        DTColumnBuilder.newColumn('pesobruto').withTitle('pesobruto'),
        DTColumnBuilder.newColumn('cFOPPadraoNFe').withTitle('cFOPPadraoNFe'),
        DTColumnBuilder.newColumn('IcmsSitTributaria').withTitle('IcmsSitTributaria'),
        DTColumnBuilder.newColumn('iCMSOrigem').withTitle('iCMSOrigem'),
        DTColumnBuilder.newColumn('iPISitTributaria').withTitle('iPISitTributaria'),
        DTColumnBuilder.newColumn('classeCigarrosBebidas').withTitle('classeCigarrosBebidas'),
        DTColumnBuilder.newColumn('cNPJProdutor').withTitle('cNPJProdutor'),
        DTColumnBuilder.newColumn('codControleIPI').withTitle('codControleIPI'),
        DTColumnBuilder.newColumn('qtdSeloIPI').withTitle('qtdSeloIPI'),
        DTColumnBuilder.newColumn('codEnquadramento').withTitle('codEnquadramento'),
        DTColumnBuilder.newColumn('tipoCalculo').withTitle('tipoCalculo'),
        DTColumnBuilder.newColumn('aliquotaIPI').withTitle('aliquotaIPI'),
        DTColumnBuilder.newColumn('pISSituaTributaria').withTitle('pISSituaTributaria'),
        DTColumnBuilder.newColumn('valorUnidtribPIS').withTitle('valorUnidtribPIS'),
        DTColumnBuilder.newColumn('tipocalculoSubstTrib').withTitle('tipocalculoSubstTrib'),
        DTColumnBuilder.newColumn('valorTribPISST').withTitle('valorTribPISST'),
        DTColumnBuilder.newColumn('cOFINSSituatributaria').withTitle('cOFINSSituatributaria'),
        DTColumnBuilder.newColumn('valorTribCOFINS').withTitle('valorTribCOFINS'),
        DTColumnBuilder.newColumn('tipoCalculoSubstTrib').withTitle('tipoCalculoSubstTrib'),
        DTColumnBuilder.newColumn('aliquotaCOFINSST').withTitle('aliquotaCOFINSST'),
        DTColumnBuilder.newColumn('estMinimo').withTitle('estMinimo'),       
        DTColumnBuilder.newColumn('estMaximo').withTitle('estMaximo'),
        DTColumnBuilder.newColumn('margemLucro').withTitle('margemLucro'),
        DTColumnBuilder.newColumn('precoVenda').withTitle('precoVenda'),
        DTColumnBuilder.newColumn('precoCusto').withTitle('precoCusto'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
    ];

    vm.dtColumns[0].visible = false;
    vm.dtColumns[9].visible = false;
    vm.dtColumns[10].visible = false;
    vm.dtColumns[11].visible = false;
    vm.dtColumns[12].visible = false;
    vm.dtColumns[13].visible = false;
    vm.dtColumns[14].visible = false;
    vm.dtColumns[15].visible = false;
    vm.dtColumns[16].visible = false;
    vm.dtColumns[17].visible = false;
    vm.dtColumns[18].visible = false;
    vm.dtColumns[19].visible = false;
    vm.dtColumns[20].visible = false;
    vm.dtColumns[21].visible = false;
    vm.dtColumns[22].visible = false;
    vm.dtColumns[23].visible = false;
    vm.dtColumns[24].visible = false;
    vm.dtColumns[25].visible = false;
    vm.dtColumns[26].visible = false;
    vm.dtColumns[27].visible = false;
    vm.dtColumns[28].visible = false;
    vm.dtColumns[29].visible = false;
    vm.dtColumns[30].visible = false;
    vm.dtColumns[31].visible = false;
    vm.dtColumns[32].visible = false;
    vm.dtColumns[33].visible = false;
    vm.dtColumns[34].visible = false;
    vm.dtColumns[35].visible = false;
    vm.dtColumns[36].visible = false;
    vm.dtColumns[37].visible = false;

    function edit(person) {
        vm.message = 'You are trying to edit the row: ' + JSON.stringify(person);
        // Edit some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        vm.dtInstance.reloadData();
    }
    function deleteRow(person) {
        vm.message = 'You are trying to remove the row: ' + JSON.stringify(person);
        // Delete some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        vm.dtInstance.reloadData();
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
        vm.persons[data.id] = data;
        return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-edit"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>';
    }
}

/*
'use strict';
angular.module('showcase.rowSelect', ['datatables'])
.controller('RowSelectCtrl', RowSelect);

function RowSelect($compile, $scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;

    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
            return $resource('data1.json').query().$promise;
        })
        .withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withOption('headerCallback', function(header) {
            if (!vm.headerCompiled) {
                // Use this headerCompiled field to only compile header once
                vm.headerCompiled = true;
                $compile(angular.element(header).contents())($scope);
            }
        })
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
            }),
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];

    function toggleAll (selectAll, selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                selectedItems[id] = selectAll;
            }
        }
    }
    function toggleOne (selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                if(!selectedItems[id]) {
                    vm.selectAll = false;
                    return;
                }
            }
        }
        vm.selectAll = true;
    }
}




(function() {
  "use strict";

  angular.module("wdApp.apps.produto").controller("produtoController",
  ['$scope', 'SysMgmtData', 'toastr','NgTableParams', '$element',
	function($scope, SysMgmtData, toastr,NgTableParams,$element) {
		var self = this;

		self.simpleList = [{
          "name": "aab",
          "age": 5,
          "money": 5
        },
        {
          "name": "aac",
          "age": 55,
          "money": 0
        },
        {
          "name": "aad",
          "age": 555,
          "money": 1
        },
        {
          "name": "aae",
          "age": 5555,
          "money": 2
        },
        {
          "name": "aaf",
          "age": 55555,
          "money": 3
        },
        {
          "name": "aag",
          "age": 555555,
          "money": 4
        }]

		$scope.tabs = [{
            title: 'Produto',
            url: 'one.tpl.html'
        }, {
            title: 'Dados Tributarios',
            url: 'two.tpl.html'
        }, {
            title: 'Preço/Estoque',
            url: 'three.tpl.html'
        }, {
            title: 'Imagens',
            url: 'imagens'
        }, {
            title: 'Historico',
            url: 'historico'

    }];

    self.cols = [
      { field : "name", valueExpr: "name", title: "Name",  filter: { name: "text" }, sortable: "name", show: true },
      { field: "age", title: "Age",sortable: "age",show: true },
      { field: "money", title: "Money", show: true }
    ];
    self.tableParams = new NgTableParams({}, {
      dataset: angular.copy(self.simpleList)
    });




    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    $scope.onClickTabb = function (tab) {
       debugger
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

	$scope.submitt = function() {

		console.log($scope.produto)
		debugger
		//fnMontaObjeto();
		//console.log($scope.empresa)
		//processPostData(create_url, new qat.model.reqEmpr($scope.empresa ,true, true), true);
	};
    $scope.produto = [];
	$scope.produto.aliquotaCOFINSST="10";
	$scope.produto.aliquotaIPI="10";
	$scope.produto.anotainternas="Anotações internas";
	$scope.produto.cEST="1";
	$scope.produto.cFOPPadraoNFe="50201";
	$scope.produto.cNPJProdutor="057102014";
	$scope.produto.cOFINSSituatributaria="49";
	$scope.produto.categoria="08";
	$scope.produto.cdBarras="1111101041010";
	$scope.produto.classeCigarrosBebidas="Classe cigarros e bebidas";
	$scope.produto.codControleIPI="10";
	$scope.produto.codEnquadramento="999";
	$scope.produto.codigo="00001";
	$scope.produto.dataCadastro="11/06/2016";
	$scope.produto.estAtual="10";
	$scope.produto.estMaximo="50";
	$scope.produto.estMinimo="10";
	$scope.produto.excecaoIPI="1";
	$scope.produto.iCMSOrigem="0";
	$scope.produto.iPISitTributaria="00";
	$scope.produto.icmsSitTributaria="90";
	$scope.produto.informAdicionaisParaNFe="Inform. adicionais para a NFe";
	$scope.produto.margemLucro="1;00";
	$scope.produto.nCM="123456789";
	$scope.produto.nome="Produto";
	$scope.produto.pISSituaTributaria="01";
	$scope.produto.pesobruto="1,0";
	$scope.produto.pesoliquido="1,00";
	$scope.produto.precoCusto="1.00";
	$scope.produto.precoVenda="1.01";
	$scope.produto.qtdSeloIPI="1";
	$scope.produto.tipoCalculo="2";
	$scope.produto.tipoCalculoSubstTrib="1";
	$scope.produto.tipocalculoSubstTrib="1";
	$scope.produto.unidTributada="02";
	$scope.produto.valorTribCOFINS="10";
	$scope.produto.valorTribPISST="05";
	$scope.produto.valorUnidtribPIS="10";


	self.checkboxes = {
      checked: false,
      items: {}
    };

    // watch for check all checkbox
    $scope.$watch(function() {
      return self.checkboxes.checked;
    }, function(value) {
      angular.forEach(self.simpleList, function(item) {
        self.checkboxes.items[item.id] = value;
      });
    });

    // watch for data checkboxes
    $scope.$watch(function() {
      return self.checkboxes.items;
    }, function(values) {
      var checked = 0, unchecked = 0,
          total = self.simpleList.length;
      angular.forEach(self.simpleList, function(item) {
        checked   +=  (self.checkboxes.items[item.id]) || 0;
        unchecked += (!self.checkboxes.items[item.id]) || 0;
      });
      if ((unchecked == 0) || (checked == 0)) {
        self.checkboxes.checked = (checked == total);
      }
      // grayed checkbox
      angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);


	}
  ])

})();

(function() {
  "use strict";

  angular.module("wdApp.apps.produto").run(configureDefaults);
  configureDefaults.$inject = ["ngTableDefaults"];

  function configureDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  }
})();


/*


var testTableApp = angular.module( 'testTableApp', ['ngRoute', 'ngResource', 'datatables', 'datatables.tabletools', 'datatables.bootstrap', 'datatables.fixedheader'] );
console.log( testTableApp );
testTableApp.controller("mainTable", 
[ '$scope', 'DTOptionsBuilder', 'DTColumnBuilder',
    function ( $scope, DTOptionsBuilder, DTColumnBuilder){
        $scope.dataSource = "http://dt.ishraf.com/ajax.php";
        $scope.start = 0;
        $scope.end = 5000;
        
        
        $scope.getDataSource = function(obj,prefix){
            var src = $scope.dataSource;
            
            var str = [];
            for(var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push(typeof v == "object" ?
                    serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return src + "?" + str.join("&");
        }
        
        var dsParams = {
            start : $scope.start,
            end : $scope.end
        }
        
        $scope.dsString = $scope.getDataSource( dsParams );
        
        
        $scope.buildTable = function(){
            return DTOptionsBuilder
                .newOptions()
                .withOption('ajax', {
                    // Either you specify the AjaxDataProp here
                    dataSrc: 'data',
                    url: $scope.dsString,
                    type: 'POST'
                }).
                withOption( 'lengthMenu', [
                    [10, 20, 50, 100, 150, 300, 500],
                    [10, 20, 50, 100, 150, 300, 500]
                ])                
                .withTableTools('bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf')
                .withTableToolsButtons([
                    {
                        "sExtends": "copy",
                        "sButtonText": "<i class='fa fa-copy'></i>&nbsp;|&nbsp;Copy",
                        "fnInit": function (nButton, oConfig) {
                            $(nButton).addClass('btn btn-success');
                        }
                    },
                    {
                        "sExtends": "print",
                        "sButtonText": "<i class='fa fa-print'></i>&nbsp;|&nbsp;Print",
                        "fnInit": function (nButton, oConfig) {
                            $(nButton).addClass('btn btn-danger');
                        }
                    },
                    {
                        "sExtends": "csv",
                        "sButtonText": "<i class='fa fa-file-o'></i>&nbsp;|&nbsp;CSV",
                        "fnInit": function (nButton, oConfig) {
                            $(nButton).addClass('btn btn-primary');
                        }
                    },
                    {
                        "sExtends": "pdf",
                        "sButtonText": "<i class='fa fa-file-pdf-o'></i>&nbsp;|&nbsp;PDF",
                        "fnInit": function (nButton, oConfig) {
                            $(nButton).addClass('btn btn-warning');
                        }
                    }
                ])
                .withFixedHeader({
                    bottom: true
                })
                .withDOM('<"clear"><"#top.hidden-print"<".row"<".col-md-6"i><".col-md-6"f>><".row"<".col-md-6"l><".col-md-6"p>><"clear">T>rt')
                ;            
        }
        
        
        $scope.dtOptions = $scope.buildTable();
            
        $scope.buildColumns = function(){
            return [
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('firstName').withTitle('First name'),
                DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
                DTColumnBuilder.newColumn('city').withTitle('city'),
                DTColumnBuilder.newColumn('state').withTitle('state'),
                DTColumnBuilder.newColumn('zip').withTitle('zip'),
                DTColumnBuilder.newColumn('country').withTitle('country'),
                DTColumnBuilder.newColumn('phone').withTitle('phone'),
                DTColumnBuilder.newColumn('email').withTitle('email')
            ];
        }
        
        $scope.dtColumns = $scope.buildColumns();
        
        
        $scope.reloadData = reloadData;
        $scope.dtInstance = {};

        function reloadData() {
            var resetPaging = false;
            $scope.dtInstance.reloadData(callback, resetPaging);
        }

        function callback(json) {
            console.log(json);
        }
        
    }
]);


*/