(function() {
    angular.module('wdApp.apps.conta', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap', 'datatables.columnfilter'])
        .controller('ContaController', ContaController);

    function ContaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory) {
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
            json['recordsTotal'] = json.bancoList.length
            json['recordsFiltered'] = json.bancoList.length
            json['draw'] = 1
            console.log(json)
            return json.bancoList;
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
            $rootScope.conta = person;
          //  Datatablessss.reloadData(vm)
            dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"CaixaUpdateController",validationFactory.caixa());
        }

        function deleteRow(person) {
           $rootScope.conta = person;
           dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"CaixaDeleteController",validationFactory.caixa());
        }

        Datatablessss.getTable('/financeiro/api/conta/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.conta(vm,createdRow,$scope,FiltersFactory.conta()), tableColumnsFactory.conta(vm,titleHtml,actionsHtml));

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
    angular.module('wdApp.apps.conta.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, SysMgmtData,doisValorFactory,toastr) {
            var vm = this;
            $scope.conta = {};


            var fnFunctionCallback = function (res){
               $scope.tipoConta = [];
               
               
               if(res.operationSuccess == true)
                   {
                        for(var x=0;x<res.doisValoresList.length;x++)
                        {
                            planos = res.doisValoresList[x] ;
                            if(planos.doisValorType != null)
                            {
                                switch (planos.doisValorType.tipo)
                                {
                                    case 'TIPO CONTA':
                                        $scope.tipoConta.push(planos);
                                        break;
                                }
                            }
                        }
                    }
                console.log(res);
            }

            doisValorFactory.financeiro(102,$scope,fnFunctionCallback);
            
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
            $scope.saveConta = function() {
              debugger
                var oObject = fModels.amont(qat.model.fnConta($scope.conta,"INSERT"),"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/conta/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqConta(oObject, true, true)
                }, function(res) {
                  
                    fnCallBack(res);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.conta.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveCfop = function() {
                fPessoa.fnMontaObjeto($scope.conta, $scope.endereco, 'UPDATE', "pessoa/api/conta/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.conta.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveCfop = function() {
                fPessoa.fnDelete($scope.conta, "pessoa/api/conta/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.conta.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.conta = {};
            $scope.conta = $rootScope.conta;
            console.log($rootScope.conta)
            $scope.saveCfop = function() {
                fPessoa.fnOpenView($scope.conta,"pessoa/api/conta/update/", function(){console.log('aqui')});
            }
        });
})();
(function() {

    var app = angular.module("wdApp.apps.conta.delete");

    app.controller('ComplexController', [
        '$scope', '$element', 'title', 'close',
        function($scope, $element, title, close) {

            $scope.name = "teste";
            $scope.age = null;
            $scope.title = title;

            //  This close function doesn't need to use jQuery or bootstrap, because
            //  the button has the 'data-dismiss' attribute.
            $scope.close = function() {
                close({
                    name: $scope.name,
                    age: $scope.age
                }, 500); // close, but give 500ms for bootstrap to animate
            };

            //  This cancel function must use the bootstrap, 'modal' function because
            //  the doesn't have the 'data-dismiss' attribute.
            $scope.cancel = function() {

                //  Manually hide the modal.
                $element.modal('hide');

                //  Now call close, returning control to the caller.
                close({
                    name: $scope.name,
                    age: $scope.age
                }, 500); // close, but give 500ms for bootstrap to animate
            };

        }
    ]);
})();

(function() {
angular.module('wdApp.apps.conta.select', ['ngSanitize', 'ui.select'])
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
}).controller('ContaSelectController', contaSelectController);

    function contaSelectController($scope, $http, $timeout, $interval,dialogFactory,validationFactory) {
        var vm = this;


    var closse = function(){
          var fnCallbackCfop = function(res){
        var planos = "";

       if(res.operationSuccess == true)
       {

           vm.conta = res.bancoList;

        }
    }

 qat.model.select.util("financeiro/api/conta/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackCfop);
} 

vm.addCfop = function(){

     dialogFactory.dialog('views/fiscal/dialog/dCfop.html',"RowSelectCtrl",validationFactory.conta,closse);


  }
        

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

      ];
  },3000);

  vm.counter = 0;
  vm.onSelectCallback = function (item, model){
    vm.counter++;
    vm.eventResult = {item: item, model: model};
  };

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

  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
  //vm.person.selected = vm.person.selectedValue;

  vm.conta = [

  ];

  closse();
  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.conta[5], vm.conta[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.conta[8], vm.conta[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.conta[2], vm.conta[0]];

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
      vm.conta.push(item);
    }
  }


    }


})();