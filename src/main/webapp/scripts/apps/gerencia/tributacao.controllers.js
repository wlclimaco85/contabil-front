(function() {
angular.module('wdApp.apps.tributacao', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap','datatables.columnfilter'])
    .controller('TributacaoController', RowSelect);

function RowSelect($scope, $compile, DTOptionsBuilder, DTColumnBuilder,ModalService, Datatablessss, dialogFactory,tableColumnsFactory,tableOptionsFactory,FiltersFactory) {

    var vm = this;
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;
    vm.message = '';
    vm.edit = edit;
    vm.delete = deleteRow;
    vm.dtInstance = {};
    vm.persons = {};

    $scope.pedidoVenda = {
        tipoPessoa: 2
    };

    $scope.toggle = function() {
        $scope.state = !$scope.state;
    };
    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';


    function rCallback(nRow, aData) {
        // console.log('row');
    }

    function recompile(row, data, dataIndex) {
        $compile(angular.element(row).contents())($scope);
    }
    var fnDataSRC = function(json) {

        console.log(json)
        json['recordsTotal'] = json.tributacaoList.length
        json['recordsFiltered'] = json.tributacaoList.length
        json['draw'] = 1
        console.log(json)
        return json.tributacaoList;
    }
  //  Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,$scope,FiltersFactory.cliente()), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));
    Datatablessss.getTable('/produto/api/tributacao/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.tributacao(vm,createdRow,$scope,FiltersFactory.tributacao()), tableColumnsFactory.tributacao(vm,titleHtml,actionsHtml));

    function edit(person) {
        $rootScope.pedidoVenda = person;
        dialogFactory.dialog('views/vendas/dialog/dTributacao.html',"TributacaoUpdateController",openDialogUpdateCreate);
    }

    function deleteRow(person) {
       $rootScope.pedidoVenda = person;
       dialogFactory.dialog('views/vendas/dialog/dTributacao.html',"TributacaoDeleteController",openDialogUpdateCreate);
    }

    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }

    function deleteRowAll(person) {
        debugger
        ModalService.showModal({
            templateUrl: 'cfopAllDelete.html',
            controller: "CfopController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }

    function actionsHtml(data, type, full, meta) {
        vm.persons[data.id] = data;

        return ' <div class="dropdown">'+
          '<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
           ' Açoes'+
            '<span class="caret"></span>'+
          '</button>'+
          '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
            '<li><a href="#">Deletar</a></li>'+
            '<li><a href="#">Alterar</a></li>'+
            '<li><a href="#">Transformar em Pedido Compra</a></li>'+
            '<li role="separator" class="divider"></li>'+
            '<li><a href="#">Transformar Em NF-e</a></li>'+
          '</ul>'+
        '</div>'
    }
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
})();
(function() {
    angular.module('wdApp.apps.tributacao.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('TributacaoInsertController', function(localStorageService,$rootScope, $scope, fModels, SysMgmtData,doisValorFactory,fNotaFiscal) {
            var vm = this;

            $scope.notaFiscalSaida = {

            };
            $scope.tributacao = {
                imposto : {
                    icms : {
                        icms00 :{},
                        icms10 :{},
                        icms20 :{},
                        icms30 :{},
                        icms40 :{},
                        icms51 :{},
                        icms60 :{},
                        icms70 :{},
                        icms90 :{},
                        icmsPartilhado :{},
                        icmsst :{},
                        icmssn101 :{},
                        icmssn102 :{},
                        icmssn201 :{},
                        icmssn202 :{},
                        icmssn500 :{},
                        icmssn900 :{}
                    },
                    ipi :{
                        tributado :{},
                        naoTributado:{},

                    },
                    pis  :{},
                    cofins :{},
                    impostoImportacao :{},
                    pisst:{},
                    cofinsst:{},
                    icmsUfDestino:{}

                },

            };
            $scope.formaPg  = {};
            $scope.endereco = null;
            $scope.pessoa   = {};

            var fnHidePIS = function(){
                $('#pis-Aliquota').hide()
                $('#pis-Aliquota-unid').hide()
            }

            var fnHideCOFINS = function(){
                $('#cofins-por-aliq').hide()
                $('#cofins-val-aliq').hide()
            }

            $scope.getInputsCOFINS = function (oObject)
            {
                fnHidePIS();
                if(oObject.value == "01" || oObject.value == "02")
                {
                    $('#cofins-por-aliq').show()
                }
                else if(oObject.value == "03")
                {
                    $('#cofins-val-aliq').show()
                }

            }

            $scope.getInputsPIS = function (oObject)
            {
                fnHidePIS();
                if(oObject.value == "01" || oObject.value == "02")
                {
                    $('#pis-Aliquota').show()
                }
                else if(oObject.value == "03")
                {
                    $('#pis-Aliquota-unid').show()
                }

            }
            
            $scope.getInputsIPI = function (oObject)
            {
                if(oObject.value == "-1")
                {
                    $('#Classe-cigarros-bebidas').hide();
                    $('#cnpj-produtor').hide();
                    $('#cod-selo').hide();
                    $('#quant-selo').hide();
                    $('#cod-enquadramento').hide();
                    $('#ipi-tipo-calc').hide();
                    $('#ipi-aliq').hide();
                    $('#ipi-valor').hide();
                }
                else
                {
                    $('#Classe-cigarros-bebidas').show();
                    $('#cnpj-produtor').show();
                    $('#cod-selo').show();
                    $('#quant-selo').show();
                    $('#cod-enquadramento').show();
                    $('#ipi-tipo-calc').show();
                    $('#ipi-aliq').show();
                    $('#ipi-valor').show();
                }
                if(oObject.value == "-1" ||oObject.value == "01" || oObject.value == "02"||oObject.value == "03" || oObject.value == "04" || oObject.value == "05")
                {
                    $('#ipi-tipo-calc').hide();
                    $('#ipi-aliq').hide();
                    $('#ipi-valor').hide();
                }else{
                    $('#ipi-tipo-calc').show();
                    $('#ipi-aliq').show();
                    $('#ipi-valor').show();
                }

            }

            doisValorFactory.tributacao($scope);

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

            $scope.saveTributacao = function() {
               fNotaFiscal.fnCreateObjectPdVendasTributacao(localStorageService.get('empresa'),$scope.pessoa,$scope.endereco,$scope.produtos,$scope.formaPg,$scope.notaFiscalSaida,1,'INSERT',1002);
            };
        });
})();
(function() {
    angular.module('wdApp.apps.tributacao.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('TributacaoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.saveTributacao = function() {
                fPessoa.fnMontaObjeto($scope.pedidoVenda, $scope.endereco, 'UPDATE', "site/api/pedidoVenda/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.tributacao.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('TributacaoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.saveTributacao = function() {
                fPessoa.fnDelete($scope.pedidoVenda, "site/api/pedidoVenda/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.tributacao.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('TributacaoViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.pedidoVenda = {};
            $scope.pedidoVenda = $rootScope.pedidoVenda;
            console.log($rootScope.pedidoVenda)
            $scope.saveTributacao = function() {
                fPessoa.fnOpenView($scope.pedidoVenda,"site/api/pedidoVenda/update/", function(){console.log('aqui')});
            }
        });
})();