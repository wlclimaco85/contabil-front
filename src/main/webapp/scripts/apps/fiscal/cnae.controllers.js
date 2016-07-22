(function() {
    angular.module('wdApp.apps.produtos', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CnaeController', CnaeController);

    function CnaeController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService) {
        var vm = this;

        vm.message = '';
        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};

        vm.dtOptions = DTOptionsBuilder.fromSource('cnae.json')
            .withDOM('frtip')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow)
            .withPaginationType('full_numbers')
            .withLightColumnFilter({
                '0': {
                    type: 'text'
                },
                '1': {
                    type: 'text'
                },
                '2': {
                    type: 'text',
                },
                '3': {
                    type: 'text',
                },
                '4': {
                    type: 'text',

                }
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
                text: 'Novo CFOP',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/fiscal/dialog/dCnae.html',
                        controller: function($scope) {


                            var tagsData = [{
                                id: 1,
                                tag: 'Apple'
                            }, {
                                id: 2,
                                tag: 'Banana'
                            }, {
                                id: 3,
                                tag: 'Cherry'
                            }, {
                                id: 4,
                                tag: 'Cantelope'
                            }, {
                                id: 5,
                                tag: 'Grapefruit'
                            }, {
                                id: 6,
                                tag: 'Grapes',
                                selected: true
                            }, {
                                id: 7,
                                tag: 'Lemon'
                            }, {
                                id: 8,
                                tag: 'Lime'
                            }, {
                                id: 9,
                                tag: 'Melon',
                                selected: true
                            }, {
                                id: 10,
                                tag: 'Orange'
                            }, {
                                id: 11,
                                tag: 'Strawberry'
                            }, {
                                id: 11,
                                tag: 'Watermelon'
                            }];



                            $scope.items = tagsData;



                        },
                        controllerAs: "futurama"
                    }).then(function(modal) {



                        $.getScript('//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.min.js');
                        $.getScript('//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js');
                        $.getScript('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js');
                        $.getScript('//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.0.0/js/bootstrap-datetimepicker.min.js');
                        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js');

                        modal.element.modal();

                        $(".mySel").select2({

                        });

                        $("#mySel2").select2({
                            closeOnSelect: false
                        });



                        $('#datepicker').datepicker({
                            autoclose: true,
                        }).on("changeDate", function(e) {
                            console.log(e.date);
                        });

                        $('.input-daterange').datepicker({
                            autoclose: true
                        }).on("changeDate", function(e) {
                            console.log(e.date);
                        });


                        ('#cnaeForm').formValidation({
                            framework: 'bootstrap',

                            icon: {
                                valid: 'glyphicon glyphicon-ok',
                                invalid: 'glyphicon glyphicon-remove',
                                validating: 'glyphicon glyphicon-refresh'
                            },
                            fields: {

                                'codigo': notEmptyStringMinMaxRegexp,
                                'cnae': integerNotEmptyValidation,


                            }
                        });
                        $("select").select2({
                            placeholder: "Select a state",
                            allowClear: true
                        });


                        modal.close.then(function(result) {
                            $scope.message = "You said " + result;
                        });
                    });
                }
            }])

        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('codigo').withTitle('Codigo'),
            DTColumnBuilder.newColumn('cnae').withTitle('CNAE'),
            DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),
            DTColumnBuilder.newColumn('abreviado').withTitle('Abreviação'),
            DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
        ];


        function edit(person) {
            ModalService.showModal({
                templateUrl: 'views/fiscal/dialog/dCnae.html',
                controller: "CnaeController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function deleteRow(person) {
            ModalService.showModal({
                templateUrl: 'views/util/dialog/dDelete.html',
                controller: "CnaeController"
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
            return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }
    }
})();