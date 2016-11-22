(function() {
    angular.module('wdApp.apps.nfSaida', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NfSaidasController', nfSaidaController);

    function nfSaidaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory,tableColumnsFactory,tableOptionsFactory,FiltersFactory) {
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
            json['recordsTotal'] = json.nfnotaList.length
            json['recordsFiltered'] = json.nfnotaList.length
            json['draw'] = 1
            console.log(json)
            return json.nfnotaList;
        }
      //  Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,$scope,FiltersFactory.cliente()), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));
        Datatablessss.getTable('/vendas/api/nfSaidas/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.nfSaida(vm,createdRow,$scope,FiltersFactory.nfSaida()), tableColumnsFactory.nfSaida(vm,titleHtml,actionsHtml));

        function edit(person) {
            $rootScope.pedidoVenda = person;
            dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html',"NfSaidaUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.pedidoVenda = person;
           dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html',"NfSaidaDeleteController",openDialogUpdateCreate);
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
    angular.module('wdApp.apps.nfSaida.insert',['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter','angucomplete','inputactions'])
        .controller('NfSaidaInsertController', function(localStorageService,$rootScope,$scope,fModels,SysMgmtData,fProduto,fNotaFiscal) {

            var vm = this;
            $scope.slotDisplayName = "teste00";
            $scope.empresa = null;
            $scope.notaFiscal = {
                info : {
                    identificacao : {}
                }
            };
            $scope.produtos = [{form : 'form',produto:{}}];

            $scope.clientes = [];

            $scope.calcProd = function(quant,valor)
            {
              return quant * valor;
            }

          /*  $scope.buscaRCep = function(){



                $('.edit').hide();
                 $('.toggle-ones').bootstrapToggle('toggle')
                 $('.toggle-ones').change(function() {

                    if($(this).prop('checked') == true)
                    {
                        $(this).parents('.teste').find('.edit').hide()
                    }
                    else
                    {
                        $(this).parents('.teste').find('.edit').show()
                    }
                })

            }
*/
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

        $scope.saveNFeNota = function() {

            debugger
            console.log($scope.notaFiscal);

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