
(function() {
angular.module('wdApp.apps.produtoss', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap','datatables.columnfilter'])
    .controller('RowSelectCtrl', CfopController);

function CfopController($scope, $compile, DTOptionsBuilder, DTColumnBuilder,ModalService,CnaeFactory,$rootScope,SysMgmtData) {

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

	$scope.acaoEnumValue = null;
	$scope.acaoType = null;
	$scope.cfop = "teste";
	$scope.cfopTypeEnum = null;
	$scope.cfopTypeEnumValue = null;
	$scope.classFiscal = null;
	$scope.createDateUTC = null;
	$scope.createUser = null;
	$scope.cstPrincipal = null;
	$scope.emprId = null;
	$scope.icms = null;
	$scope.icmsReduzido = null;
	$scope.id = null;
	$scope.margemAgregadaST = null;
	$scope.modifyDateUTC = null;
	$scope.modifyUser = null;
	$scope.natureza = null;
	$scope.notes = null;
	$scope.observacao = null;
	$scope.parentId = null;
	$scope.processId = null;
	$scope.simplificado = null;
	$scope.site = null;
	$scope.statusList = null;
	$scope.tabelaEnum = null;
	$scope.tabelaEnumValue = null;
	$scope.type = null;
	$scope.typeValue = null;
	$scope.userId = null;



    var titleHtml = '<input type="checkbox" ng-model="vm.selectAll"' +
        'ng-click="vm.toggleAll(vm.selectAll, vm.selected)">';
//debugger
//SysMgmtData.processPostPageData("main/api/request", {url : "fiscal/api/cfop/fetchPage/", token : $rootScope.authToken , request : new qat.model.pagedInquiryRequest(  2, true)}, function(res){
//							console.log(res);
//							console.log('factory')
//	});
    //var S = CnaeFactory.cnaeFactory("main/api/request", {url : "fiscal/api/cfop/fetchPage/", token : $rootScope.authToken , request : new qat.model.pagedInquiryRequest(  2, true)},function(data){console.log("testando")})

    vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
				dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] =json.cfopList.length
                    json['recordsFiltered'] = json.cfopList.length
                    json['draw']=1
                    console.log(json)
                    return json.cfopList;
                  },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function ( d ) {
                 //   console.log("data");
                //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({"url" : "fiscal/api/cfop/fetchPage/", "token" : $rootScope.authToken , "request" : new qat.model.pagedInquiryRequest(  2, true)});
                }
            })
        .withDOM('frtip')
        .withPaginationType('full_numbers')
        .withOption('createdRow', createdRow)
        .withPaginationType('full_numbers')
        .withColumnFilter({
            aoColumns: [null,{
                type: 'number'
            }, {
                type: 'number',
            }, {
                type: 'select',
                values: ['Entrada', 'Saida']
            },{
                type: 'text'
            },{
                type: 'text'
            },{
                type: 'text'
            }]
        })
        .withOption('initComplete', function (settings,json) {

            $('.dt-buttons').find('.dt-button:eq(1)').before(

            '<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"'+
              'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important; " ng-change="vm.deleteRowAll(vm.selected)">'+

                '<option>Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{vm.countSeleted()}}"</span></option>'+
                '<option>Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{vm.countSeleted()}}"></span></option>'+
               '</select>'

            )
        })
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
        .withButtons([
            {
                extend: "colvis",
                fileName:  "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {decodeEntities:true}
            },
            {
            extend: "csvHtml5",
                fileName:  "Data_Analysis",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {decodeEntities:true}
            },
            {
                extend: "pdfHtml5",
                fileName:  "Data_Analysis",
                title:"Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {decodeEntities:true}
            },
            {
                extend: "copy",
                fileName:  "Data_Analysis",
                title:"Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                exportData: {decodeEntities:true}
            },
            {
                extend: "print",
                //text: 'Print current page',
                autoPrint: true,
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: "excelHtml5",
                filename:  "Data_Analysis",
                title:"Data Analysis Report",
                exportOptions: {
                    columns: ':visible'
                },
                //CharSet: "utf8",
                exportData: { decodeEntities: true }
            },
            {
                text: 'Novo CFOP',
                key: '1',
                action: function (e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'CFOPmodal.html',
                        controller: "RowSelectCtrl"
                    }).then(function(modal) {

                        modal.element.modal();
                        openDialog();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }
        ])

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
            templateUrl: 'CFOPmodal.html',
            controller : "CnaeController"
        }).then(function(modal) {
			$scope.cfop = "teste3"
            modal.element.modal();
			$scope.cfop = "teste4"
            openDialog('update',person);
			$scope.cfop = "teste5"
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }
    function deleteRow(person) {


				    ModalService.showModal({
      templateUrl: "views/fiscal/dialog/complex.html",
      controller: "RowSelectCtrl",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
		$scope.cfop = "teste0005";

	 // openDialog('update',person);
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });
	/*
        ModalService.showModal({
            templateUrl: 'cfopDelete.html',
            controller: "RowSelectCtrl"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });*/
    }

    function deleteRowAll(person) {
       /*
        ModalService.showModal({
            templateUrl: 'cfopAllDelete.html',
            controller: "CfopController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });*/

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

    function openDialog(acao,object)
    {
		$scope.cfop = "teste"
		debugger
		if(acao == 'update')
		{
			//debugger
			SysMgmtData.processPostPageData("main/api/request", {url : "fiscal/api/cfop/fetchPage/", token : $rootScope.authToken , request : {"id":1}}, function(res){
	console.log($scope.cfop)
	console.log(res);
	$scope.acaoEnumValue = res.cfopList[0].acaoEnumValue;
	$scope.acaoType = res.cfopList[0].acaoType;
	$scope.cfop = res.cfopList[0].cfop;
	$scope.cfopTypeEnum = res.cfopList[0].cfopTypeEnum;
	$scope.cfopTypeEnumValue = res.cfopList[0].cfopTypeEnumValue;
	$scope.classFiscal = res.cfopList[0].classFiscal;
	$scope.createDateUTC = res.cfopList[0].createDateUTC;
	$scope.createUser = res.cfopList[0].createUser;
	$scope.cstPrincipal = res.cfopList[0].cstPrincipal;
	$scope.emprId = res.cfopList[0].emprId;
	$scope.icms = res.cfopList[0].icms;
	$scope.icmsReduzido = res.cfopList[0].icmsReduzido;
	$scope.id = res.cfopList[0].id;
	$scope.margemAgregadaST = res.cfopList[0].margemAgregadaST;
	$scope.modifyDateUTC = res.cfopList[0].modifyDateUTC;
	$scope.modifyUser = res.cfopList[0].modifyUser;
	$scope.natureza = res.cfopList[0].natureza;
	$scope.notes = res.cfopList[0].notes;
	$scope.observacao = res.cfopList[0].observacao;
	$scope.parentId = res.cfopList[0].parentId;
	$scope.processId = res.cfopList[0].processId;
	$scope.simplificado = res.cfopList[0].simplificado;
	$scope.site = res.cfopList[0].site;
	$scope.statusList = res.cfopList[0].statusList;
	$scope.tabelaEnum = res.cfopList[0].tabelaEnum;
	$scope.tabelaEnumValue = res.cfopList[0].tabelaEnumValue;
	$scope.type = res.cfopList[0].type;
	$scope.typeValue = res.cfopList[0].typeValue;
	$scope.userId = res.cfopList[0].userId;
	console.log($scope.cfop)
				});
		}
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
                $clone    = $template
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
                .formValidation('addField', 'book[' + bookIndex + '].produto',notEmptyStringMinMaxRegexp)
                .formValidation('addField', 'book[' + bookIndex + '].quantidade',integerNotEmptyValidation)
                .formValidation('addField', 'book[' + bookIndex + '].vlUnitario',integerNotEmptyValidation);
        })// Remove button click handler
        .on('click', '.removeButton', function() {
            var $row  = $(this).parents('.form-group'),
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

		$scope.cfop = "teste1"

    }

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

}]);
})();