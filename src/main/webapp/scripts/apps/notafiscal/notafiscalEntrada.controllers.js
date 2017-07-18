(function() {
    angular.module('wdApp.apps.notaFiscalEntrada', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NotaFiscalEntradaController', AngularWayChangeDataCtrl).filter("myfilter", function() {
          return function(items, from, to) {
                var df = parseDate(from);
                var dt = parseDate(to);
                var result = [];
                for (var i=0; i<items.length; i++){
                    var tf = new Date(items[i].date1 * 1000),
                        tt = new Date(items[i].date2 * 1000);
                    if (tf > df && tt < dt)  {
                        result.push(items[i]);
                    }
                }
                return result;
          };
        });

function AngularWayChangeDataCtrl($q,$http,$scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
    var vm = this;
        vm.selected = {};
        vm.dtInstanceNFE = {};
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
            vm.dtInstanceNFE.reloadData(callback, resetPaging);
        }

        function callback(json) {
            console.log(json);
        }

       var reloadData = function() {

            var resetPaging = false;
            vm.dtInstanceNFE.reloadData(callback, resetPaging);
        }

        $rootScope.reloadDataSit = function(_callback) {

            var resetPaging = false;
            vm.dtInstanceNFE.reloadData(_callback, resetPaging);
        }

        function fnEdit(person) {

             $rootScope.doisValor = person;

            dialogFactory.dialog('views/financeiro/dialog/dNotaFiscalEntrada.html',"NotaFiscalEntradaUpdateController",validationFactory.contasPagar(),reloadData());
        }

        function fnDelete(person) {
           $rootScope.doisValor = person;
           dialogFactory.dialog('views/util/dialog/dDelete.html',"NotaFiscalEntradaDeleteController",validationFactory.contasPagar(),reloadData());
        }

    var url = '/entidade/api/doisValores/fetchPage';// 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage'; qat.model.doisValoresInquiryRequest = function (_page, _iStartPage, _bCount,_emprId,_doisValorType)
    var request =  new qat.model.doisValoresInquiryRequest(101,0,true,null,106);//new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)
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




    Datatablessss.getTable(url, fnDataSRC, request, this, rCallback, null, recompile, tableOptionsFactory.nfEntrada(vm,createdRow,$scope,FiltersFactory.nfEntrada(),reloadData) , tableColumnsFactory.nfEntrada(vm,"",actionsHtml));

}
})();
(function() {
    angular.module('wdApp.apps.notaFiscalEntrada.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NotaFiscalEntradaInsertController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveDoisValor = function() {
                var oObject = qat.model.fnDoisValores(null, $scope.notaFiscalEntrada.value, $scope.notaFiscalEntrada.nome, "SITUACAO", "INSERT",$rootScope.user.user,$scope.notaFiscalEntrada.descricao,106,101)

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/doisValores/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){//debugger
                      })
                    }

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.notaFiscalEntrada.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NotaFiscalEntradaUpdateController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            console.log($rootScope.doisValor)
            $scope.notaFiscalEntrada = $rootScope.doisValor
            $scope.saveDoisValor = function() {
                var oObject = qat.model.fnDoisValores($scope.notaFiscalEntrada.id, $scope.notaFiscalEntrada.value, $scope.notaFiscalEntrada.nome, "SITUACAO", "UPDATE",$rootScope.user.user,$scope.notaFiscalEntrada.descricao,106,101)

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/doisValores/update",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){//debugger
                    })
                    }

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.notaFiscalEntrada.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NotaFiscalEntradaDeleteController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            var sHtml = '<div class="container-fluid">'
            $('#delete').append(sHtml);
            console.log($rootScope.doisValor)
            $scope.delete = function() {
                var oObject = qat.model.fnDoisValores($rootScope.doisValor.id, null, null, "SITUACAO", "DELETE",$rootScope.user.user,null,106,101)

                SysMgmtData.processPostPageData("main/api/request", {
                     url: "entidade/api/doisValores/delete",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){//debugger
                    })
                    }

                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.notaFiscalEntrada.upload', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('NotaFiscalEntradaUploadController', function($http,$rootScope,$resource, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            $scope.uploadFile = function(files) {

            var fd = new FormData();
            //Take the first selected file
            fd.append("file", files[0]);

            $http.post('rest/main/api/upload', fd, {
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function(data){console.log(data); $scope.nota = data}).error( '..damn!...' );

        };

            $scope.uploadFiles = function(files) {
                //debugger
            var file = $scope.myFile;
            var fdata = new FormData();
            fdata.append("file", files[0]);

            $resource('api/post/:id', { id: "@id" }, {
                postWithFile: {
                    method: "POST",
                    params: fdata,
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                }
            }).postWithFile(fdata).$promise.then(function(response){
                 //successful
            },function(error){
                //error
            });
        };
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveDoisValor = function() {
                var oObject = qat.model.fnDoisValores(null, $scope.notaFiscalEntrada.value, $scope.notaFiscalEntrada.nome, "SITUACAO", "INSERT",$rootScope.user.user,$scope.notaFiscalEntrada.descricao,106,101)

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "entidade/api/doisValores/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqDoisValor(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataSit(function(data){//debugger
                    })
                    }

                });
            }
        });
})();