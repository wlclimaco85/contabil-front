(function() {
    angular.module('wdApp.apps.cadempresa', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CadEmpresaController', cadEmpresaController);

    function cadEmpresaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData,fEmpresa) {
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
        vm.addSocios = addSocios;
        vm.addCnae = addCnae;
        vm.addPlano = addPlano;
        vm.addSite = addSite;
        vm.addColaborador = addColaborador;
        vm.addPlanoContas = addPlanoContas;
        vm.addFilial = addFilial;


        $scope.empresa = {
            enderecos : [{
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),
            }],
            documentos          : [{
                       documentoTypeEnumValue : 1,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 2,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 3,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 4,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 5,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 6,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    }]
        };
        $scope.enderecos = [];


        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        $scope.toggle1 = function() {
            $scope.state1 = !$scope.state1;
        };

        $scope.toggle2 = function() {
            $scope.state2 = !$scope.state2;
        };



        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

       vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] = json.empresaList.length
                    json['recordsFiltered'] = json.empresaList.length
                    json['draw'] = 1
                    console.log(json)
                    return json.empresaList;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "entidade/api/empresa/fetchPage",
                        "token": $rootScope.authToken,
                        "request": new qat.model.empresaInquiryRequest(0, true,null,null,null)
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
                text: 'Novo Empresa',
                key: '1',
                action: function(e, dt, node, config) {

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
            DTColumnBuilder.newColumn(null).withTitle('CPF ou CNPJ').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "CNPJ" || data.documentos[x].documentoType == "CPF")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn('numFunc').withTitle('Numero Funcionarios').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Inscr Est Subst Trib').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "IES")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Indicador de IE').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "IIE")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Inscrição Estadual').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "IE")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Inscrição Municipal').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "IM")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Inscrição Suframa').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.documentos.length > 0)
				{
					for(var x = 0;x < data.documentos.length;x++)
					{
						if(data.documentos[x].documentoType == "IF")
						{
							sDocumento = sDocumento = data.documentos[x].numero
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('CEP').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						sDocumento = sDocumento = data.enderecos[x].cep
					}
				}
                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Logradouro').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						sDocumento = sDocumento = data.enderecos[x].logradouro
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Numero').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						sDocumento = sDocumento = data.enderecos[x].numero
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Cidade').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						if(data.enderecos[x].cidade != undefined || data.enderecos[x].cidade != null)
						{
							sDocumento = sDocumento = data.enderecos[x].cidade.nome
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Estado').notVisible().renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						if(data.enderecos[x].estado != undefined || data.enderecos[x].estado != null)
						{
							sDocumento = sDocumento = data.enderecos[x].estado.abreviacao
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Pais').notVisible().renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.enderecos.length > 0)
				{
					for(var x = 0;x < data.enderecos.length;x++)
					{
						sDocumento = sDocumento = data.enderecos[x].pais
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Telefone').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.telefones.length > 0)
				{
					for(var x = 0;x < data.telefones.length;x++)
					{
							sDocumento = sDocumento = data.telefones[x].numero
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Email').notVisible().renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.emails.length > 0)
				{
					for(var x = 0;x < data.emails.length;x++)
					{
						sDocumento = sDocumento = data.emails[x].email
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Ativ. Filial').renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.cnaes.length > 0)
				{
					for(var x = 0;x < data.cnaes.length;x++)
					{
						if(data.cnaes[x].idCnae != "" || data.cnaes[x].idCnae != undefined)
						{
							sDocumento = sDocumento = data.cnaes[x].idCnae.codigo
						}
					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn(null).withTitle('Data Cadastro').renderWith(function(data, type, full, meta) {
                var sDocumento = "";

				if(data.createDateUTC != "" || data.createDateUTC != undefined)
				{
					sDocumento = sDocumento = new Date(data.createDateUTC);
				}

                return '<p>'+sDocumento+'</p>';
            }).notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Observação').notVisible().renderWith(function(data, type, full, meta) {
                var sDocumento = "";
				if(data.notes.length > 0)
				{
					for(var x = 0;x < data.notes.length;x++)
					{
							sDocumento = sDocumento = data.notes[x].noteText

					}
				}
                return '<p>'+sDocumento+'</p>';
            }),
            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(actionsHtml).withOption('width', '140px'),
        ];

$scope.submit = function() {
    debugger
    console.log($scope.empresa);
    console.log($scope.enderecos);
    fEmpresa.fnMontaObjeto($scope.empresa,$scope.enderecos,"INSERT")
 //   fnMontaObjeto();
    debugger
    console.log($scope.empresa)

    SysMgmtData.processPostPageData("main/api/anonimo",{
            url: "entidade/api/empresa"+   WebDaptiveAppConfig.create_url,
            request: new qat.model.reqEmpr($scope.empresa ,true, true)}, function(res){
       console.log(res)
       debugger
       if(res.operationSuccess == true)
       {
           $('#dialogs').hide();
       }

    });
}

fnMontaObjeto = function(action){
            console.log($scope.empresa);
            $scope.empresa.enderecos[0] = qat.model.fnEndereco($scope.enderecos[0],"INSERT",$rootScope.user.user);
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnTelefones($(this).val(),count,1,"INSERT"));
                    count = count + 1;
                }
            });
            $scope.empresa.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.input-email').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnEmails($(this).val(),count,1,"INSERT"));
                    count = count + 1;
                }
            });
            $scope.empresa.emails = bb;


            // cnae
            count = 0;
            bb = [];
            $('.cnaeList').each(function() {
                if($(this).val() != "")
                {
                    bb.push(qat.model.fnCnaeEmpresa({idCnae : qat.model.fnCnae({id :$(this).val(),modelAction :"NONE"})}));
                    count = count + 1;
                }
            });
            $scope.empresa.cnaes = bb;
        }

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

            $('.cadEmpresaForm')
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
                $('.cadEmpresaForm').formValidation('addField', fieldName, {
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
                        $('.cadEmpresaForm').formValidation('removeField', fieldName);

                        // Enable the Add button
                        $that.parent().removeClass('disabled');

                        // Remove element
                        $newRow.remove();
                    });

                // Add new field
                $('.cadEmpresaForm').formValidation('addField', fieldName, {
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
            return '<a href="#/gerencia/details/empresa" class="btn btn-info"><i class="glyphicon glyphicon-search"></i></a>&nbsp;' +
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


        function alterStatus() {
            ModalService.showModal({
                templateUrl: 'views/util/dialog/dAlterStatus.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addSocios() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dSocios.html',
                controller: function($scope) {

                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();



                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addCnae() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dCnae.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();

                $(".selectd").select2({
                    placeholder: "Select a state"
                });
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        $scope.today = function() {
            return $scope.dt = new Date();
          };
          $scope.today();
          $scope.clear = function() {
            return $scope.dt = null;
          };
          $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            return $scope.opened = true;
          };
          $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 0
          };
          $scope.formats = ['MMMM-dd-yyyy','MM/dd/yyyy', 'yyyy/MM/dd'];
          return $scope.format = $scope.formats[1];



        function addPlano() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dPlano.html',
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

        function addSite() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dSite.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();
                $(".mySelect").select2({
                placeholder: "Select a state",
                allowClear: true
            });
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addColaborador() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dParceiro.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addPlanoContas() {
            ModalService.showModal({
                templateUrl: 'views/gerencia/dialog/dPlanoContas.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        }

        function addFilial() {
            ModalService.showModal({
                templateUrl: 'views/cadastros/dialog/dFilial.html',
                controller: function($scope) {



                },
                controllerAs: "futurama"
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
            $scope.state = !$scope.state;
        };
    }
})();