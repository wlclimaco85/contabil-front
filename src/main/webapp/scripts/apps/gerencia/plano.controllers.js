(function() {
    angular.module('wdApp.apps.plano', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PlanosController', planoController);

    function planoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData) {
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

        vm.alterStatus = alterStatus;
        vm.historico = historico;
        vm.addAdvogado = addAdvogado;
        vm.envolvidos = envolvidos;
        vm.desdobramento = desdobramento;


        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };


        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] = json.planoList.length
                    json['recordsFiltered'] = json.planoList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.planoList;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "site/api/plano/fetchPage",
                        "token": $rootScope.authToken,
                        "request": new qat.model.pagedInquiryRequest(2, true)
                    });
                }
            })
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
                    ModalService.showModal({
                        templateUrl: 'views/gerencia/dialog/dPlano.html',
                        controller: "PlanoTesteController"
                    }).then(function(modal) {


                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }]);


        vm.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
            }).withOption('width', '10px'),
            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
            DTColumnBuilder.newColumn(null).withTitle('Data Inicio').renderWith(function(data, type, full, meta) {

                if (data.dataInicio != undefined)
                    return '<span>' + new Date(data.dataInicio) + '</span>';
                else
                    return '<span> </span>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Data Final').renderWith(function(data, type, full, meta) {

                if (data.dataFinal != undefined)
                    return '<span>' + new Date(data.dataFinal) + '</span>';
                else
                    return '<span> </span>';
            }),
            DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),
            DTColumnBuilder.newColumn('titulo').withTitle('Titulo'),
            DTColumnBuilder.newColumn(null).withTitle('Preço').renderWith(function(data, type, full, meta) {

                if (data.precoList.length > 0)
                    return '<span>' + data.precoList[0].valor + '</span>';
                else
                    return '<span> 0,00</span>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Serviços').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.servicoList.length > 0) {
                    for (var x = 0; x < data.servicoList.length; x++) {
                        sText = sText + " " + data.servicoList[x].nome + "<br> ";
                    }
                }

                return '<span>' + sText + '</span>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Status').renderWith(function(data, type, full, meta) {
                var sText = "";
                if (data.statusList.length > 0) {
                    // for (var x = 0; x < data.statusList.length; x++) {
                    sText = sText + " " + data.statusList[data.statusList.length - 1].status + "<br> ";
                    // }
                }

                return '<span>' + sText + '</span>';
            }).notVisible(),
            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtmlProcesso).withOption('width', '140px'),
        ];




        function edit(person) {
            $rootScope.plano = person;
            ModalService.showModal({
                templateUrl: 'cadPlano.html',
                controller: "PlanosController"
            }).then(function(modal) {

                modal.element.modal();
                openDialogUpdateCreate();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function deleteRow(person) {
            ModalService.showModal({
                templateUrl: 'deletePlano.html',
                controller: "PlanoController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function view(person) {
            ModalService.showModal({
                templateUrl: 'deleteCidade.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function openDialogUpdateCreate() {
            bookIndex = 0;
            $('#pdVendasForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {

                        'book[0].produto': notEmptyStringMinMaxRegexp,
                        'book[0].quantidade': integerNotEmptyValidation,
                        'book[0].vlUnitario': integerNotEmptyValidation,


                    }
                })
                // Add button click handler
                .on('click', '.addButton', function() {
                    bookIndex++;
                    var $template = $('#bookTemplate'),
                        $clone = $template
                        .clone()
                        .removeClass('hide')
                        .removeAttr('id')
                        .attr('data-book-index', bookIndex)
                        .insertBefore($template);

                    // Update the name attributes
                    $clone
                        .find('[name="produto"]').attr('name', 'book[' + bookIndex + '].produto').end()
                        .find('[name="quantidade"]').attr('name', 'book[' + bookIndex + '].quantidade').end()
                        .find('[name="vlUnitario"]').attr('name', 'book[' + bookIndex + '].vlUnitario').end()
                        .find('[name="desconto"]').attr('name', 'book[' + bookIndex + '].desconto').end();

                    // Add new fields
                    // Note that we also pass the validator rules for new field as the third parameter
                    $('#pdVendasForm')
                        .formValidation('addField', 'book[' + bookIndex + '].produto', notEmptyStringMinMaxRegexp)
                        .formValidation('addField', 'book[' + bookIndex + '].quantidade', integerNotEmptyValidation)
                        .formValidation('addField', 'book[' + bookIndex + '].vlUnitario', integerNotEmptyValidation);
                }) // Remove button click handler
                .on('click', '.removeButton', function() {
                    var $row = $(this).parents('.form-group'),
                        index = $row.attr('data-book-index');

                    // Remove fields
                    $('#bookForm')
                        .formValidation('removeField', $row.find('[name="book[' + index + '].produto"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].quantidade"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].vlUnitario"]'))
                        .formValidation('removeField', $row.find('[name="book[' + index + '].desconto"]'));

                    // Remove element containing the fields
                    $row.remove();
                });
            $("select").select2({
                placeholder: "Select a state",
                allowClear: true
            });


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

        function actionsHtmlProcesso(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<a href="#/advogado/details/processo" class="btn btn-info" ><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
                '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
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

        function status() {
            debugger

        }

        function alterStatus() {
            ModalService.showModal({
                templateUrl: 'alterStatus.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function historico() {
            ModalService.showModal({
                templateUrl: 'historico.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addAdvogado() {
            ModalService.showModal({
                templateUrl: 'addAdvogado.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function envolvidos() {
            ModalService.showModal({
                templateUrl: 'envolvidos.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                openDialogUpdateCreate();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function desdobramento() {
            ModalService.showModal({
                templateUrl: 'desdobramento.html',
                controller: "ContasPagarController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
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
            debugger
            $scope.state = !$scope.state;
        };
    }
})();



(function() {
    angular.module('wdApp.apps.plano.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter','ngSanitize', 'ui.select'])
        .controller('PlanoInsertController', function($rootScope, $scope, fModels, SysMgmtData, $http, $timeout, $interval) {

            var vm = this;
            $scope.plano = {};
            $scope.plano.servicoList =[]
            $scope.plano.itensList = [{value:"",
             processId      : 0}]


            $scope.createForm = function(type){

            $scope.plano.itensList.push({ value : '',processId      : 1});

        };

        $scope.removeForm= function(type){

            debugger

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
  vm.onSelectCallback = function (item, model){
  //  debugger
    vm.counter++;
  //  $scope.plano.servicoList.push(item)
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
    '1' : { id : 1, name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    '2' : { id : 1,name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    '3' : { id : 1,name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    '4' : { id : 1,name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    '5' : { id : 1,name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    '6' : { id : 1,name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    '7' : { id : 1,name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    '8' : { id : 1,name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    '9' : { id : 1,name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    '10' : { id : 1,name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
//  debugger
 // vm.person.selected = vm.person.selectedValue;

  vm.servico = [

  ];

   SysMgmtData.processPostPageData("main/api/request",{
        url: "site/api/servico/fetchPage/",
        token: $rootScope.authToken,
        request: new qat.model.PagedInquiryRequest(null,true, true)
       // {
          //  "cfop": oObject
       //   cfop : {"id":"10"}
       // }
    }, function(res) {
     //   debugger
        vm.servico = res.servicoList;
        console.log(res)
    });


     vm.site = [

  ];

   SysMgmtData.processPostPageData("main/api/request",{
        url: "site/api/fetchPage/",
        token: $rootScope.authToken,
        request: new qat.model.PagedInquiryRequest(null,true, true)
       // {
          //  "cfop": oObject
       //   cfop : {"id":"10"}
       // }
    }, function(res) {
       // debugger
        vm.site = res.sites;
        console.log(res)
    });

  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];


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
      vm.people.push(item);
    }
  }





            vm.today = function() {
                return vm.dt = new Date();
            };
            vm.today();
            vm.clear = function() {
                return vm.dt = null;
            };
            vm.open = function($event) {
                debugger
                $event.preventDefault();
                $event.stopPropagation();
                return vm.opened = true;
            };
            vm.dateOptions = {
                'year-format': "'yy'",
                'starting-day': 0
            };
            vm.formats = ['MMMM-dd-yyyy', 'MM/dd/yyyy', 'yyyy/MM/dd'];
            vm.format = vm.formats[1];

            $scope.savessssS = function() {
                debugger

                var array = [];

                $scope.plano.parentId = $scope.plano.parentId.id;

                for(var x = 0;x<$scope.plano.itensList.length;x++)
                {
                    array.push(fModels.amont(qat.model.fnDoisValores(null,$scope.plano.itensList[x].value,$scope.plano.itensList[x].nome,54,"INSERT"),"INSERT"));
                }

                $scope.plano.itensList = array;

                var preco = $scope.plano.precoList;

                $scope.plano.precoList = [];
                $scope.plano.precoList.push(fModels.amont(qat.model.fnPreco(null,preco[0].valor,54,"INSERT"),"INSERT"));

                var oObject = fModels.amont($scope.plano,"INSERT");
                oObject.tabelaEnumValue = 64;
                oObject.dataInicio = (new Date()).getTime();
                oObject.dataFinal = (new Date()).getTime();
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "site/api/plano/insert/",
                    token: $rootScope.authToken,
                    request: new qat.model.reqPlano(oObject, true, true)
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
    angular.module('wdApp.apps.plano.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PlanoUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {

             var vm = this;

            $scope.plano = {};

            $scope.contato = $rootScope.plano;
       console.log($rootScope.plano)
        $scope.savessss = function() {

                        var oObject = fModels.amont($scope.plano,'UPDATE');
                        console.log($scope.plano);
                        SysMgmtData.processPostPageData("main/api/request",{
                            url: "site/api/plano/update/",
                            token: $rootScope.authToken,
                            request: new qat.model.reqPlano( oObject,true, true)
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
    angular.module('wdApp.apps.plano.teste', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PlanoTesteController', function($rootScope, $scope, fModels, SysMgmtData) {

             var vm = this;

        });

})();