(function() {
    angular.module('wdApp.apps.produtoss', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap', 'datatables.columnfilter'])
        .controller('RowSelectCtrl', CfopController);

    function CfopController($http,$scope, $compile, DTOptionsBuilder, DTColumnBuilder, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,DTInstances   ) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';

        vm.dtInstance = {};
        vm.persons = {};

        var url = '/fiscal/api/cfop/fetchPage'
        var request = new qat.model.empresaInquiryRequest(0, true, null, null, null);

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
            $rootScope.cfop = person;
          //  Datatablessss.reloadData(vm)
            dialogFactory.dialog('views/fiscal/dialog/dCfop.html',"CfopUpdateController",validationFactory.cfop());
        }

        function deleteRow(person) {
           $rootScope.cfop = person;
           dialogFactory.dialog('views/fiscal/dialog/dCfop.html',"CfopDeleteController",validationFactory.cfop());
        }

     //   Datatablessss.getTable('/fiscal/api/cfop/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cfop(vm,createdRow,$scope,FiltersFactory.cfop()), tableColumnsFactory.cfop(vm,titleHtml,actionsHtml));




       var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';


       vm.dtOptions = DTOptionsBuilder.newOptions()
          .withFnServerData(
                function (sSource, aoData, fnCallback, oSettings) {
                    debugger
                    for(var x = 0; x < aoData.length;x++)
                    {
                        if(aoData[x].name == "order")
                        {
                            var dir = aoData[x].value[0].dir;
                            if(dir == "asc")
                            {
                                dir = "Ascending"
                            }
                            else
                            {
                                dir = "Descending"
                            }
                            request.columnName1 = (aoData[x].value[0].column + 1);
                            request.direction1 = dir;
                        }
                        if(aoData[x].name == "draw"){
                            request.draw = aoData[x].value;
                        }
                        if(aoData[x].name == "length"){
                            request.pageSize = aoData[x].value;
                        }
                        if(aoData[x].name == "start"){
                        request.startPage = (aoData[x].value/10);}
                        
                        
                    }
                    request.userId = $rootScope.user.user;
                    $http({
                        method: 'POST',
                        url: 'main/api/request',
                        dataType: "json",
                        data: JSON.stringify({
                                "url": url,
                                "token": $rootScope.authToken,
                                "request": request}),
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        }
                    })
                    .then(function(result) {
debugger
                            var records = {
                                'draw': result.data.resultsSetInfo.startPage,
                                'recordsTotal': result.data.resultsSetInfo.totalRowsAvailable,
                                'recordsFiltered': result.data.resultsSetInfo.totalRowsAvailable,
                                'data': result.data.cfopList
                            };

                            fnCallback(records);

                    });
                }
            )
 
            .withOption('processing', true)
            .withPaginationType('full_numbers')
            .withOption("bPaginate", true)
            .withDisplayLength(10)
            .withDOM('frtip')
            .withDataProp('data')
            .withOption('serverSide', true)
            .withOption('rowCallback', vm.rowCallback)


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
                text: 'Novo Empresa',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/empresa/dialog/dEmpresa.html',
                        controller: "NewEmpresaInsertController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }])

        vm.dtColumns = [

                    DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
                    .renderWith(function(data, type, full, meta) {debugger
                        vm.selected[full.id] = false;
                        return '<input type="checkbox" ng-model="vm.selected[' + data.id + ']" ng-click="vm.toggleOne(vm.selected)"/>';
                    }).withOption('width', '10px'),
                    DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px'),
                    DTColumnBuilder.newColumn('cfop').withTitle('CFOP').withOption('width', '40px'),
                    DTColumnBuilder.newColumn('natureza').withTitle('Natureza'),
                    DTColumnBuilder.newColumn('simplificado').withTitle('simplificado').notVisible(),
                    DTColumnBuilder.newColumn('icms').withTitle('icms').notVisible(),
                    DTColumnBuilder.newColumn('icmsReduzido').withTitle('icmsReduzido').notVisible(),
                    DTColumnBuilder.newColumn('margemAgregadaST').withTitle('margemAgregadaST').notVisible(),
                    DTColumnBuilder.newColumn('cstPrincipal').withTitle('cstPrincipal').notVisible(),
                    DTColumnBuilder.newColumn('classFiscal').withTitle('classFiscal').notVisible(),
                    DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
                    DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                    DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                    DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '100px')
                ];

        vm.rowCallback = function(nRow, aData ) { //, iDisplayIndex, iDisplayIndexFull) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    vm.rowClicked(aData);
                });
            });
            return nRow;
        };

        vm.dtInstance = {};
        vm.dtInstanceCallback = function(_dtInstance){
            $log.debug(_dtInstance);
            vm.dtInstance = _dtInstance;
        };

         DTInstances.getList().then(function(dtInstances) {
          console.log('dtInstances: ', dtInstances);
        });

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
    angular.module('wdApp.apps.cfop.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CfopInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa,toastr) {
            var vm = this;
            $scope.cfop = {};
            
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
            $scope.saveCfop = function() {

                var oObject = fModels.amont(qat.model.fnCfop($scope.cfop,"INSERT"),"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "fiscal/api/cfop/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqCfop(oObject, true, true)
                }, function(res) {
                  
                    fnCallBack(res);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.cfop.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CfopUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cfop = {};
            $scope.cfop = $rootScope.cfop;
            console.log($rootScope.cfop)
            $scope.saveCfop = function() {
                fPessoa.fnMontaObjeto($scope.cfop, $scope.endereco, 'UPDATE', "pessoa/api/cfop/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.cfop.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CfopDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cfop = {};
            $scope.cfop = $rootScope.cfop;
            console.log($rootScope.cfop)
            $scope.saveCfop = function() {
                fPessoa.fnDelete($scope.cfop, "pessoa/api/cfop/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.cfop.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CfopViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.cfop = {};
            $scope.cfop = $rootScope.cfop;
            console.log($rootScope.cfop)
            $scope.saveCfop = function() {
                fPessoa.fnOpenView($scope.cfop,"pessoa/api/cfop/update/", function(){console.log('aqui')});
            }
        });
})();
(function() {

    var app = angular.module('wdApp.apps.produtoss');

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
angular.module('wdApp.apps.cfop.select', ['ngSanitize', 'ui.select'])
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
}).controller('CfopSelectController', cfopSelectController);

    function cfopSelectController($scope, $http, $timeout, $interval,dialogFactory,validationFactory) {
        var vm = this;


    var closse = function(){
          var fnCallbackCfop = function(res){
        var planos = "";

       if(res.operationSuccess == true)
       {

           vm.cfop = res.cfopList;

        }
    }

 qat.model.select.util("fiscal/api/cfop/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackCfop);
  } 

vm.addCfop = function(){

     dialogFactory.dialog('views/fiscal/dialog/dCfop.html',"RowSelectCtrl",validationFactory.cfop,closse);


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

  vm.cfop = [

  ];

  closse();
  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.cfop[5], vm.cfop[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.cfop[8], vm.cfop[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.cfop[2], vm.cfop[0]];

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
      vm.cfop.push(item);
    }
  }


    }


})();

(function() {
    angular.module('wdApp.apps.contasPagar.view1', ['datatables', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('DataReloadWithAjaxCtrl', DataReloadWithAjaxCtrl);

function DataReloadWithAjaxCtrl($rootScope,DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var url = '/fiscal/api/cfop/fetchPage'
    var request = new qat.model.empresaInquiryRequest(0, true, null, null, null);
    vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {

                dataSrc: function(json) {
                    console.log(json)
                    debugger
                    json['recordsTotal'] = json.cfopList.length
                    json['recordsFiltered'] = json.cfopList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.cfopList;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": url,
                        "token": $rootScope.authToken,
                        "request": new qat.model.empresaInquiryRequest(0, true,null,null,null)
                    });
                }
            })
        .withOption('stateSave', true)
        .withScroller()
        .withOption('deferRender', true)
        // Do not forget to add the scorllY option!!!
        .withOption('scrollY', 200)
        .withPaginationType('full_numbers');

    vm.dtColumns = [
       DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px'),
                    DTColumnBuilder.newColumn('cfop').withTitle('CFOP').withOption('width', '40px'),
                    DTColumnBuilder.newColumn('natureza').withTitle('Natureza'),
                    DTColumnBuilder.newColumn('simplificado').withTitle('simplificado').notVisible(),
                    DTColumnBuilder.newColumn('icms').withTitle('icms').notVisible(),
                    DTColumnBuilder.newColumn('icmsReduzido').withTitle('icmsReduzido').notVisible(),
                    DTColumnBuilder.newColumn('margemAgregadaST').withTitle('margemAgregadaST').notVisible(),
                    DTColumnBuilder.newColumn('cstPrincipal').withTitle('cstPrincipal').notVisible(),
                    DTColumnBuilder.newColumn('classFiscal').withTitle('classFiscal').notVisible(),
                    DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
                    DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                    DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
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
    angular.module('wdApp.apps.contasPagar.view2', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AngularWayChangeDataCtrl', AngularWayChangeDataCtrl);

function AngularWayChangeDataCtrl($resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.persons = $resource('data1.json').query();
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];
    vm.person2Add = _buildPerson2Add(1);
    vm.addPerson = addPerson;
    vm.modifyPerson = modifyPerson;
    vm.removePerson = removePerson;

    function _buildPerson2Add(id) {
        return {
            id: id,
            firstName: 'Foo' + id,
            lastName: 'Bar' + id
        };
    }
    function addPerson() {
        vm.persons.push(angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function modifyPerson(index) {
        vm.persons.splice(index, 1, angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function removePerson(index) {
        vm.persons.splice(index, 1);
    }
}
})();


(function() {
    angular.module('wdApp.apps.contasPagar.view3', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ServerSideProcessingCtrl', ServerSideProcessingCtrl);

function ServerSideProcessingCtrl($http,$rootScope,DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var url = '/fiscal/api/cfop/fetchPage'
    var request = new qat.model.empresaInquiryRequest(0, true, null, null, null);
    vm.dtOptions = DTOptionsBuilder.newOptions()
    
.withFnServerData(
                function (sSource, aoData, fnCallback, oSettings) {
                    debugger
                    for(var x = 0; x < aoData.length;x++)
                    {
                        if(aoData[x].name == "order")
                        {
                            var dir = aoData[x].value[0].dir;
                            if(dir == "asc")
                            {
                                dir = "Ascending"
                            }
                            else
                            {
                                dir = "Descending"
                            }
                            request.columnName1 = (aoData[x].value[0].column + 1);
                            request.direction1 = dir;
                        }
                        if(aoData[x].name == "draw"){
                            request.draw = aoData[x].value;
                        }
                        if(aoData[x].name == "length"){
                            request.pageSize = aoData[x].value;
                        }
                        if(aoData[x].name == "start"){
                        request.startPage = (aoData[x].value/10);}
                        
                        
                    }
                    request.userId = $rootScope.user.user;
                    $http({
                        method: 'POST',
                        url: 'main/api/request',
                        dataType: "json",
                        data: JSON.stringify({
                                "url": url,
                                "token": $rootScope.authToken,
                                "request": request}),
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        }
                    })
                    .then(function(result) {
debugger
                            var records = {
                                'draw': result.data.resultsSetInfo.startPage,
                                'recordsTotal': result.data.resultsSetInfo.totalRowsAvailable,
                                'recordsFiltered': result.data.resultsSetInfo.totalRowsAvailable,
                                'data': result.data.cfopList
                            };

                            fnCallback(records);
                            
                    });
                }
            )
    
       /*  .withOption('ajax', {

                dataSrc: function(json) {
                    console.log(json)
                    debugger
                    json['recordsTotal'] = json.cfopList.length
                    json['recordsFiltered'] = json.cfopList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.cfopList;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": url,
                        "token": $rootScope.authToken,
                        "request": new qat.model.empresaInquiryRequest(0, true,null,null,null)
                    });
                }
            })*/
     // or here
     .withDataProp('data')
        .withOption('processing', true)
        .withOption('serverSide', true)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
         DTColumnBuilder.newColumn('cfop').withTitle('CFOP').withOption('width', '40px'),
                    DTColumnBuilder.newColumn('natureza').withTitle('Natureza'),
                    DTColumnBuilder.newColumn('simplificado').withTitle('simplificado').notVisible(),
                    DTColumnBuilder.newColumn('icms').withTitle('icms').notVisible(),
                    DTColumnBuilder.newColumn('icmsReduzido').withTitle('icmsReduzido').notVisible(),
                    DTColumnBuilder.newColumn('margemAgregadaST').withTitle('margemAgregadaST').notVisible(),
                    DTColumnBuilder.newColumn('cstPrincipal').withTitle('cstPrincipal').notVisible(),
                    DTColumnBuilder.newColumn('classFiscal').withTitle('classFiscal').notVisible(),
                    DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
                    DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                    DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible()
    ];

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

