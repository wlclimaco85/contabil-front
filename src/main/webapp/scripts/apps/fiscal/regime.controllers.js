(function() {
    angular.module('wdApp.apps.regime', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeController', regimeController);

    function regimeController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';

        vm.dtInstance = {};
        vm.persons = {};

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};

       function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }


        var createdRow = function (row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

       var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.regimeList.length
            json['recordsFiltered'] = json.regimeList.length
            json['draw'] = 1
            console.log(json)
            return json.regimeList;
        }

       var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

       var actionsHtml = function (data, type, full, meta) {

            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

        function edit(person) {
            $rootScope.regime = person;
          //  Datatablessss.reloadData(vm)
            dialogFactory.dialog('views/fiscal/dialog/dRegime.html',"RegimeUpdateController",validationFactory.regime());
        }

        function deleteRow(person) {
           $rootScope.regime = person;
           dialogFactory.dialog('views/fiscal/dialog/dRegime.html',"RegimeDeleteController",validationFactory.regime());
        }



        Datatablessss.getTable('/fiscal/api/regime/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.regime(vm,createdRow,$scope,FiltersFactory.regime()), tableColumnsFactory.regime(vm,titleHtml,actionsHtml));

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
    angular.module('wdApp.apps.regime.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa,toastr) {
            var vm = this;
            $scope.regime = {};
            
            var fnCallBack = function(res) {
                if(res.operationSuccess == true)
                {
                    initLoad = true;
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                }
                else
                {
                   toastr.error('County form error, please correct and resubmit.', 'Error');
                }
            }
            $scope.saveRegime = function() {

                var oObject = fModels.amont(qat.model.fnRegime($scope.regime,"INSERT"),"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "fiscal/api/regime/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqRegime(oObject, true, true)
                }, function(res) {
                  
                    fnCallBack(res);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.regime.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.regime = {};
            $scope.regime = $rootScope.regime;
            console.log($rootScope.regime)
            $scope.saveRegime = function() {
                fPessoa.fnMontaObjeto($scope.regime, $scope.endereco, 'UPDATE', "pessoa/api/regime/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.regime.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.regime = {};
            $scope.regime = $rootScope.regime;
            console.log($rootScope.regime)
            $scope.saveRegime = function() {
                fPessoa.fnDelete($scope.regime, "pessoa/api/regime/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.regime.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.regime = {};
            $scope.regime = $rootScope.regime;
            console.log($rootScope.regime)
            $scope.saveRegime = function() {
                fPessoa.fnOpenView($scope.regime,"pessoa/api/regime/update/", function(){console.log('aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.regime.search', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('RegimeSearchController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.visibled = false
         //   $scope.regime = [];

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
                    url: "pessoa/api/regime/fetchPage",
                    token: $rootScope.authToken,
                    request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
                }, function(res) {
                  //  debugger
                    $scope.regime = res.regimeList;
                });
          });
})();