(function() {
angular.module('wdApp.apps.cotacao', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
.controller('CotacaoController', cotacaoController);

function cotacaoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder,ModalService) {
    var vm = this;
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;
    vm.message = '';
    vm.edit = edit;
    vm.baixar = baixar;
    vm.delete = deleteRow;
    vm.dtInstance = {};
    vm.persons = {};

    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

    vm.dtOptions = DTOptionsBuilder.fromSource('cotacao.json')
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
              'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">'+
              
                '<option><a href="#">Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>'+
                '<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>'+
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
                text: 'Nova Cotação',
                key: '1',
                action: function (e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'cadCotacao.html',
                        controller: "CotacaoController"
                    }).then(function(modal) { 
                        modal.element.modal();
                        openDialogUpdateCreate();
                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }
        ]);
    vm.dtColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
            }),

        DTColumnBuilder.newColumn('id').withTitle('ID'),     
        DTColumnBuilder.newColumn('resCotacao').withTitle('Responsavel Cotação'),
         DTColumnBuilder.newColumn(null).withTitle('Empresas Concorrente').notSortable()
            .renderWith(function(data, type, full, meta) {
                var sReturn = "";
                for(var x = 0 ;x<data.Empresas.length;x++)
                {
                    sReturn =  sReturn +  '<a> '+ data.Empresas[x].empresa +'</a>';
                }
                return sReturn;
            }),
        DTColumnBuilder.newColumn('data').withTitle('data'),
         DTColumnBuilder.newColumn('dataLimite').withTitle('Prazo Limite').notVisible(),
         DTColumnBuilder.newColumn(null).withTitle('Produtos').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<a> '+ data.produtos +'</a>';
            }),
       // DTColumnBuilder.newColumn('qntProd').withTitle('qntProd'), <span class="label label-info">Aguardando Conferencia</span>
        DTColumnBuilder.newColumn('valor').withTitle('valor'),
         DTColumnBuilder.newColumn(null).withTitle('Cotação').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<a> '+ data.pdCompra +'</a>';
            }),
        DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
         DTColumnBuilder.newColumn(null).withTitle('status').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<span class="label label-info">'+ data.status +'</span> ';
            }),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml)
    ];
   

    function edit(person) {
       ModalService.showModal({
            templateUrl: 'cadCotacao.html',
            controller: "CotacaoController"
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
            templateUrl: 'cotacaoDelete.html',
            controller: "CotacaoController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }
    function baixar(person) {
        ModalService.showModal({
            templateUrl: 'baixar.html',
            controller: "ContasPagarController"
        }).then(function(modal) {
            modal.element.modal();
            $("select").select2({
              placeholder: "Select a state",
              allowClear: true
            });
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }
    function openDialogUpdateCreate()
    {
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


    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
        vm.persons[data.id] = data;
        return '<button class="btn btn-warning" data-toggle="tooltip" data-placement="left" title="Editar Pedido Compra" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-edit"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-info" data-toggle="tooltip" data-placement="left" title="Detalhes Cotação" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
            '   <i class="glyphicon glyphicon-search"></i>' +
            '</button>' +
            '<button class="btn btn-danger" data-toggle="tooltip" data-placement="left" title="Excluir Pedido Compra" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
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
}
})();