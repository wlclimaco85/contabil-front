(function() {
    angular.module('wdApp.apps.produtoss', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap', 'datatables.columnfilter'])
        .controller('RowSelectCtrl', CfopController);

    function CfopController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, CnaeFactory, $rootScope, SysMgmtData) {

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
        $scope.cfop = {};




        var titleHtml = '<input type="checkbox" ng-model="vm.selectAll"' +
            'ng-click="vm.toggleAll(vm.selectAll, vm.selected)">';
        //debugger
        //SysMgmtData.processPostPageData("main/api/request", {url : "fiscal/api/cfop/fetchPage/", token : $rootScope.authToken , request : new qat.model.pagedInquiryRequest(  2, true)}, function(res){
        //                          console.log(res);
        //                          console.log('factory')
        //  });
        //var S = CnaeFactory.cnaeFactory("main/api/request", {url : "fiscal/api/cfop/fetchPage/", token : $rootScope.authToken , request : new qat.model.pagedInquiryRequest(  2, true)},function(data){console.log("testando")})

        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
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
                        "url": "fiscal/api/cfop/fetchPage/",
                        "token": $rootScope.authToken,
                        "request": new qat.model.pagedInquiryRequest(2, true)
                    });
                }
            })
            .withDOM('frtip')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow)
            .withPaginationType('full_numbers')
            .withColumnFilter({
                aoColumns: [null, {
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
                    'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important; " ng-change="vm.deleteRowAll(vm.selected)">' +

                    '<option>Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{vm.countSeleted()}}"</span></option>' +
                    '<option>Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{vm.countSeleted()}}"></span></option>' +
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
                text: 'Novo CFOP',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/fiscal/dialog/dCfop.html',
                        controller: "RowSelectCtrl"
                    }).then(function(modal) {

                        modal.element.modal();
                        openDialog();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }])

        vm.dtColumns = [

            DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
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

        function edit(person) {


            ModalService.showModal({
                templateUrl: "views/fiscal/dialog/dCfop.html",
                controller: function($scope) {



                 console.log(person);
                    // $scope.cfop = "New New York";
                    SysMgmtData.processPostPageData("main/api/request", {
                        url: "fiscal/api/cfop/fetchPage/",
                        token: $rootScope.authToken,
                        request: {
                            "id": 1
                        }
                    }, function(res) {
                        console.log($scope.cfop)
                        console.log(res);
                        $scope.cfop = {
                            acaoEnumValue: res.cfopList[0].acaoEnumValue,
                            acaoType: res.cfopList[0].acaoType,
                            cfop: res.cfopList[0].cfop,
                            cfopTypeEnum: res.cfopList[0].cfopTypeEnum,
                            cfopTypeEnumValue: res.cfopList[0].cfopTypeEnumValue,
                            classFiscal: res.cfopList[0].classFiscal,
                            createDateUTC: res.cfopList[0].createDateUTC,
                            createUser: res.cfopList[0].createUser,
                            cstPrincipal: res.cfopList[0].cstPrincipal,
                            emprId: res.cfopList[0].emprId,
                            icms: res.cfopList[0].icms,
                            icmsReduzido: res.cfopList[0].icmsReduzido,
                            id: res.cfopList[0].id,
                            margemAgregadaST: res.cfopList[0].margemAgregadaST,
                            modifyDateUTC: res.cfopList[0].modifyDateUTC,
                            modifyUser: res.cfopList[0].modifyUser,
                            natureza: res.cfopList[0].natureza,
                            notes: res.cfopList[0].notes,
                            observacao: res.cfopList[0].observacao,
                            parentId: res.cfopList[0].parentId,
                            processId: res.cfopList[0].processId,
                            simplificado: res.cfopList[0].simplificado,
                            site: res.cfopList[0].site,
                            statusList: res.cfopList[0].statusList,
                            tabelaEnum: res.cfopList[0].tabelaEnum,
                            tabelaEnumValue: res.cfopList[0].tabelaEnumValue,
                            type: res.cfopList[0].type,
                            typeValue: res.cfopList[0].typeValue,
                            userId: res.cfopList[0].userId
                        };
                        console.log($scope.cfop)
                    });
                    $scope.save = function() {
                        debugger
                        console.log($scope.cfop)
                        $('#cfopForm').formValidation('resetForm', true);
                        vm.processButtons('U',$scope.cfop);
                    };
                    $(document).ready(function() {

            });
                },
                controllerAs: "futurama"
            }).then(function(modal) {

                modal.element.modal();




    $('.cfopForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
               //     row: 'col-sm-6',
                    validators: {
                        notEmpty: {
                            message: 'Campo Requerido'
                        }
                    }
                },
                lastName: {
                 //   row: 'col-sm-12',
                    validators: {
                        notEmpty: {
                            message: 'Campo Requerido'
                        }
                    }
                }
            }

        });
        /*.on('success.form.fv', function(e) {
        // Prevent default form submission
        e.preventDefault();
            debugger
            vm.processButtons('U');


        });
*/
        $(".type").select2({
                placeholder: "Select a state",
                allowClear: true
            });

                modal.close.then(function(result) {
                    $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
                });
            });
        }

        function deleteRow(person) {
             ModalService.showModal({
                 templateUrl: 'views/util/dialog/dDelete.html',
                 controller: "CfopController"
             }).then(function(modal) {
                 modal.element.modal();
                 modal.close.then(function(result) {
                     $scope.message = "You said " + result;
                 });
             });
        }

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }

        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-warning" ng-click="vm.edit(vm.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="vm.delete(vm.persons[' + data.id + '])">' +
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

        //reusable processGetData (insert, update, pagedFetch)
        function processPostData(_url, _req, _bLoading)
        {
            //console.log(_url);
            if (_bLoading){
                vm.countyGridOptions.api.showLoadingOverlay(true);
            }
            SysMgmtData.processPostPageData(_url, _req, function(res){
                if (res){
                    initLoad = true;
                    createNewDatasource(res); //send Data
                }
                else{
                    alert('error')
                }
            });
        };


        //reusable button form logic
        vm.processButtons = function(_btnType,oObject){
            //console.log(_btnType);

                switch (_btnType) {
                //Add Button
                case 'A':
                    processPostData(create_url,  new qat.model.reqCounty( new qat.model.county(10, 'teste'),true, true), true);
                    break;
                //Update Button
                case 'U':
                    SysMgmtData.processPostPageData("main/api/cfop",{
                    url: "fiscal/api/cfop/update/",
                    token: $rootScope.authToken,
                    request: new qat.model.reqCounty( oObject,true, true)
                   // {
                      //  "cfop": oObject
                   //   cfop : {"id":"10"}
                   // }
                }, function(res) {
                    debugger
                    console.log(res)
                });
                    break;
                //Delete Button
                case 'D':
                    var send_url = delete_url + "?countyId=" + 1 + "&retList=true&retPaged=true";
                    processGetData(send_url);
                    break;
                //List Button
                case 'L':
                    processPostData(fetch_url, new qat.model.pagedInquiryRequest( 0, true), true);
                    break;
                default:
                    console.log('Invalid button type: ' + _btnType);
                };
                //clear the form
                cvm.clearForm();

        };

    }
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