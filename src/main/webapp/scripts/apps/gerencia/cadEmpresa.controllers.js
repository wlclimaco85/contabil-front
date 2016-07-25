(function() {
    angular.module('wdApp.apps.cadempresa', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CadEmpresaController', cadEmpresaController);

    function cadEmpresaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService) {
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

        vm.dtOptions = DTOptionsBuilder.fromSource('filial.json')
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
                text: 'Novo Empresa',
                key: '1',
                action: function(e, dt, node, config) {
                    ModalService.showModal({
                        templateUrl: 'views/gerencia/dialog/dEmpresa.html',
                        controller: function($scope) {



                        },
                        controllerAs: "futurama"
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
            DTColumnBuilder.newColumn('razao').withTitle('Nome ou Razão social'),
            DTColumnBuilder.newColumn('nome').withTitle('Nome Fantasia'),
            DTColumnBuilder.newColumn('cnpj').withTitle('CPF ou CNPJ'),
            DTColumnBuilder.newColumn('numFunc').withTitle('Numero Funcionarios').notVisible(),
            DTColumnBuilder.newColumn('IES').withTitle('Inscr Est Subst Trib').notVisible(),
            DTColumnBuilder.newColumn('IIE').withTitle('Indicador de IE').notVisible(),
            DTColumnBuilder.newColumn('IE').withTitle('Inscrição Estadual').notVisible(),
            DTColumnBuilder.newColumn('IM').withTitle('Inscrição Municipal').notVisible(),
            DTColumnBuilder.newColumn('IF').withTitle('Inscrição Suframa').notVisible(),
            DTColumnBuilder.newColumn('cep').withTitle('CEP').notVisible(),
            DTColumnBuilder.newColumn('logradouro').withTitle('Logradouro'),
            DTColumnBuilder.newColumn('numero').withTitle('Numero'),
            DTColumnBuilder.newColumn('cidade').withTitle('Cidade'),
            DTColumnBuilder.newColumn('estado').withTitle('Estado').notVisible(),
            DTColumnBuilder.newColumn('pais').withTitle('Pais').notVisible(),
            DTColumnBuilder.newColumn('telefone').withTitle('Telefone'),
            DTColumnBuilder.newColumn('email').withTitle('Email').notVisible(),
            DTColumnBuilder.newColumn('cnae').withTitle('Ativ. Filial'),
            DTColumnBuilder.newColumn('dataCadastro').withTitle('Data Cadastro').notVisible(),
            DTColumnBuilder.newColumn('obs').withTitle('Observação').notVisible(),
            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '140px'),
        ];


        function edit(person) {
            ModalService.showModal({
                templateUrl: 'almoxarifadoDelete.html',
                controller: "ContasPagarController"
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
                templateUrl: 'deleteCidade.html',
                controller: "ContasPagarController"
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

            $('.empresaForm')
                .formValidation({
                    framework: 'bootstrap',
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {

                        //  'book[0].cpf': notEmptyStringMinMaxRegexp,
                        //  'book[0].nome': notEmptyStringMinMax,
                        //  'book[0].cota': integerNotEmptyValidation,
                        nome: notEmptyStringMinMax,
                        nunFunc: integerNotEmptyValidation,
                        razao: notEmptyStringMinMax,
                        logradouro: notEmptyStringMinMax,
                        cpf: notEmptyStringMinMaxRegexp,
                        cep: notEmptyStringMinMax,
                        cnpj: notEmptyStringMinMax,
                        email: emailValidation,
                        telefone: telefoneValidation,
                        phone: telefoneValidation,
                        cep: cepNotEmptyValidation,
                        password: {
                            validators: {
                                notEmpty: {
                                    message: 'The password is required and can\'t be empty'
                                }
                            }
                        },
                        confirmPassword: {
                            validators: {
                                notEmpty: {
                                    message: 'The confirm password is required and can\'t be empty'
                                },
                                identical: {
                                    field: 'password',
                                    message: 'The password and its confirm are not the same'
                                }
                            }
                        }

                    }
                });

            //============================= Telefone
            $('.addPhoneButton').on('click', function() {

                var $that = $(this),
                    $template = $('#template'),
                    $newRow = $template.clone().removeAttr('id').insertBefore($template).show();

                $that.parent().addClass('disabled');

                // Set the label and field name
                var fieldName = $that.attr('data-name');
                $newRow
                    .find('.control-label')
                    .html($that.html())
                    .end()
                    .find('input')
                    .attr('name', fieldName)
                    .end()
                    .on('click', '.removeButton', function() {
                        // Remove field when clicking the Remove button
                        $('#contactForm').formValidation('removeField', fieldName);

                        // Enable the Add button
                        $that.parent().removeClass('disabled');

                        // Remove element
                        $newRow.remove();
                    });

                // Add new field
                $('.empresaForm').formValidation('addField', fieldName, {
                    message: 'The phone number is not valid',
                    validators: {
                        digits: {
                            message: 'The value can contain only digits'
                        }
                    }
                });
            });
            //============================= Telefone fim

            //============================= Email
            $('.addEmailButton').on('click', function() {
                var $that = $(this),
                    $template = $('#template-email'),
                    $newRow = $template.clone().removeAttr('id').insertBefore($template).show();

                $that.parent().addClass('disabled');

                // Set the label and field name
                var fieldName = $that.attr('data-name');
                $newRow
                    .find('.control-label')
                    .html($that.html())
                    .end()
                    .find('input')
                    .attr('name', fieldName)
                    .end()
                    .on('click', '.removeButton', function() {
                        // Remove field when clicking the Remove button
                        $('.empresaForm').formValidation('removeField', fieldName);

                        // Enable the Add button
                        $that.parent().removeClass('disabled');

                        // Remove element
                        $newRow.remove();
                    });

                // Add new field
                $('.empresaForm').formValidation('addField', fieldName, {
                    message: 'The phone number is not valid',
                    validators: {
                        digits: {
                            message: 'The value can contain only digits'
                        }
                    }
                });
            });


            $(".select").select2({
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
            return '<a href="#/empresa/details/empresa" class="btn btn-warning"><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
            '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-edit"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>';
        }

        function actionsHtmlProcesso(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<a href="#/advogado/details/processo"><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
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