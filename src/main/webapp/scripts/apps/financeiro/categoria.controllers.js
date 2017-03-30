(function() {
    angular.module('wdApp.apps.categorias', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriasdController', function ($q,$http,$scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
    var vm = this;
        vm.selected = {};
        vm.dtInstance = {};
        vm.persons = {};
        vm.selectAll = false;
        vm.button='Novo'
        vm.fnDelete  = fnDelete;
        vm.fnEdit    = fnEdit;


        function parseDate(input) {
          var parts = input.split('-');
          return new Date(parts[2], parts[1]-1, parts[0]);
        }


        function reloadData() {
            var resetPaging = false;
            vm.dtInstance.reloadData(callback, resetPaging);
        }

        function callback(json) {
            console.log(json);
        }

       var reloadData = function() {

            var resetPaging = false;
            vm.dtInstance.reloadData(callback, resetPaging);
        }

        $rootScope.reloadDataSit = function(_callback) {

            var resetPaging = false;
            vm.dtInstance.reloadData(_callback, resetPaging);
        }

        function fnEdit(person) {

             $rootScope.doisValor = person;

            dialogFactory.dialog('views/financeiro/dialog/dSituacao.html',"SituacaoUpdateController",validationFactory.contasPagar(),reloadData());
        }

        function fnDelete(person) {
           $rootScope.doisValor = person;
           dialogFactory.dialog('views/util/dialog/dDelete.html',"SituacaoDeleteController",validationFactory.contasPagar(),reloadData());
        }

    var url = '/entidade/api/doisValores/fetchPage';// 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage'; qat.model.doisValoresInquiryRequest = function (_page, _iStartPage, _bCount,_emprId,_doisValorType)
    var request =  new qat.model.doisValoresInquiryRequest(101,0,true,null,103);//new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)
    //===================================


    //========================================


    vm.personsss = {};//$resource($rootScope.getTableData());


    function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-warning" ng-click="showCase.fnEdit(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.fnDelete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

    function rCallback(nRow, aData) {
        // console.log('row');
    }

    function recompile(row, data, dataIndex) {
        $compile(angular.element(row).contents())($scope);
    }

    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    var fnDataSRC = function(json) {
        console.log(json)
        json['recordsTotal'] = json.doisValoresList.length
        json['recordsFiltered'] = json.doisValoresList.length
        json['draw'] = 1

        return json.doisValoresList;
    }




    Datatablessss.getTable(url, fnDataSRC, request, this, rCallback, null, recompile, tableOptionsFactory.doisValores(vm,createdRow,$scope,FiltersFactory.doisValores(),reloadData) , tableColumnsFactory.doisValores(vm,"",actionsHtml));

})
})();
(function() {
    angular.module('wdApp.apps.categorias.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaInsertController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveDoisValor = function() {
                var oObject = qat.model.fnDoisValores(null, $scope.situacao.value, $scope.situacao.nome, "SITUACAO", "INSERT",$rootScope.user.user,$scope.situacao.descricao,106,103)

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/doisValores/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){debugger})
                    }

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.categorias.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaUpdateController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            console.log($rootScope.doisValor)
            $scope.situacao = $rootScope.doisValor
            $scope.saveDoisValor = function() {
                var oObject = qat.model.fnDoisValores($scope.situacao.id, $scope.situacao.value, $scope.situacao.nome, "SITUACAO", "UPDATE",$rootScope.user.user,$scope.situacao.descricao,106,103)

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/doisValores/update",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){debugger})
                    }

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.categorias.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CategoriaDeleteController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            var sHtml = '<div class="container-fluid">'
            $('#delete').append(sHtml);
            console.log($rootScope.doisValor)
            $scope.delete = function() {
                var oObject = qat.model.fnDoisValores($rootScope.doisValor.id, null, null, "SITUACAO", "DELETE",$rootScope.user.user,null,106,103)

                SysMgmtData.processPostPageData("main/api/request", {
                     url: "entidade/api/doisValores/delete",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){debugger})
                    }

                });
            }
        });
})();