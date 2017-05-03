(function() {
    'use strict';
    //var commonAuth = angular.module('wdApp.ajaxCalls.table.option', ['angularModalService','datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
    var commonAuth = angular.module('wdApp.ajaxCalls.table.option', ['datatables', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
    commonAuth.factory('tableOptionsFactory', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log', '$compile', 'dialogFactory', 'validationFactory', function($rootScope, DTOptionsBuilder, DTColumnBuilder, $log, $compile, dialogFactory, validationFactory) {
        //commonAuth.factory('tableOptionsFactory', ['ModalService','$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log','$compile', function(ModalService,$scope,  DTOptionsBuilder,$compile,dialogFactory,validationFactory){
        function padrao(vm, createdRow, scope, filters, aButtons, sPosition, functionReload) {

            if (aButtons) {
                var sPos = 1
                var aCollunsReturn;
                if (sPosition)
                    sPos = 2
                var aColluns = [{
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
                }]

                if (sPos == 2) {
                    aCollunsReturn = aButtons
                    for (var x = 0; x < aColluns.length; x++) {
                        aCollunsReturn.push(aColluns[x])
                    }
                } else {
                    aCollunsReturn = aColluns;
                    if (aButtons) {
                        for (var x = 0; x < aButtons.length; x++) {
                            aCollunsReturn.push(aButtons[x])
                        }
                    }
                }

                aCollunsReturn.push({
                    text: '<span data-tooltip="Recaregar Pagina" id="recareggarPag" class=""><span class="glyphicon glyphicon-refresh"> </span></span>',
                    key: '30',
                    action: function(e, dt, node, config) {

                        functionReload();
                        //  dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html',"ContasPagarInsertController",validationFactory.contasPagar,null);

                    }
                })
            }

            //var sCombo =

            return DTOptionsBuilder.newOptions()
                .withDOM('frtip')
                .withPaginationType('full_numbers')
                .withOption('createdRow', createdRow)
                .withOption('headerCallback', function(header) {
                    if (!vm.headerCompiled) {
                        // Use this headerCompiled field to only compile header once
                        vm.headerCompiled = true;
                        $compile(angular.element(header).contents())(scope);
                    }
                })
                .withPaginationType('full_numbers')

            .withColumnFilter({
                    aoColumns: filters
                })
                .withOption('stateSave', true)

            .withOption('deferRender', true)
                // Do not forget to add the scorllY option!!!
                .withOption('scrollY', 380)
                .withOption('initComplete', function() {
                    $('.dataTables_filter input').unbind();
                    $('<button/>').text('search').attr('id', 'new-search').appendTo('.dataTables_filter');
                    $('#new-search').on('click', function() {
                        vm.dtInstance.DataTable.search($('.dataTables_filter input').val()).draw();
                    })
                })
                .withPaginationType('full_numbers')

            .withBootstrap()
                .withOption('responsive', true)
                .withLanguage({
                    "sEmptyTable": "No hay información disponible",
                    "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                    "sInfoEmpty": "Mostrando 0 a 0 de 0 entradas",
                    "sInfoFiltered": "(filtrada de _MAX_ entradas totales)",
                    "sInfoPostFix": "",
                    "sInfoThousands": ",",
                    "sLengthMenu": "Mostrando _MENU_ entradas",
                    "sLoadingRecords": '<div class="container"><button class="btn btn-lg" style="backgroud : #1B3975"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></button></div>',
                    "sProcessing": '<div class="container"><button class="btn btn-lg" style="color : #1B3975;font-size : 50px;background :transparent"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></button></div>',
                    //  "loadingRecords":  '<div class="container"><h3>Animated button</h3><button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></button></div>',
                    "sSearch": "Buscar: ",
                    "sZeroRecords": "No se encuentra coincidencias en la búsqueda",
                    "oPaginate": {
                        //Dos opciones: https://github.com/DataTables/Plugins/issues/62
                        "sFirst": '<i class="fa fa-angle-double-left"></i>',
                        "sLast": '<i class="fa fa-angle-double-right"></i>',
                        "sNext": '<i class="fa fa-angle-right"></i>',
                        "sPrevious": '<i class="fa fa-angle-left"></i>'
                    },
                    "oAria": {
                        "sSortAscending": ": activar para ordenar columna ascendentemente",
                        "sSortDescending": ": activar para ordenar columna descendentemente"
                    }
                })


            /*      .withOption('initComplete', function(settings, json) {
                      $('.dt-buttons').find('.dt-button:eq(1)').before(
                          '<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"' +
                          'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">' +
                          '<option><a href="#">Ações <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>' +
                          '<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>' +
                          '</select>'
                      )
                  })*/
            .withOption('processing', true)
                //	.withOption('serverSide', true)
                /*     .withOption('language', {
                      paginate: { // Set up pagination text
                          first: "&laquo;",
                          last: "&raquo;",
                          next: "&rarr;",
                          previous: "&larr;"
                      },
                      lengthMenu: "_MENU_ records per page"
                  })*/
                .withButtons(aCollunsReturn);


        }
        return {
            //County Object
            defaut: function() {



            },
            cliente: function(vm, createdRow, scope, _callback) {

                var oOptions = padrao(vm, createdRow, scope, _callback);
                console.log(oOptions)
                oOptions.buttons.push({
                    text: 'Novo Cliente',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/cadastros/dialog/dCliente.html', "ClienteInsertController", validationFactory.cliente, null);

                    }
                })

                return oOptions;
            },
            fornecedor: function(vm, createdRow, scope, _callback) {

                var oOptions = padrao(vm, createdRow, scope, _callback);
                console.log(oOptions)
                oOptions.buttons.push({
                    text: 'Novo Fornecedor',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html', "FornecedorInsertController", validationFactory.fornecedor, null);

                    }
                })

                return oOptions;
            },
            transportador: function(vm, createdRow, scope, _callback) {

                var oOptions = padrao(vm, createdRow, scope, _callback);
                console.log(oOptions)
                oOptions.buttons.push({
                    text: 'Novo Transportador',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/cadastros/dialog/dTransportador.html', "TransportadorInsertController", validationFactory.transportador, null);

                    }
                })

                return oOptions;
            },
            pdVendas: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: '<span data-tooltip="Emitir recibo" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: 'Novo Pedido de Venda',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html', "PedidoVendaInsertController", validationFactory.pdVendas, _function);
                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            orcamento: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrcamento.html', "OrcamentoInsertController", validationFactory.orcamento, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrcamento.html', "OrcamentoInsertController", validationFactory.orcamento, _function);

                    }
                }, {
                    text: '<span data-tooltip="Enviar Email" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrcamento.html', "OrcamentoInsertController", validationFactory.orcamento, _function);

                    }
                }, {
                    text: 'Novo Orçamento',
                    key: '4',
                    action: function(e, dt, node, config) {
                        dialogFactory.dialog('views/vendas/dialog/dOrcamento.html', "OrcamentoInsertController", validationFactory.orcamento, _function);
                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);
            },
            ordemServico: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrdemServico.html', "OrdemServicoInsertController", validationFactory.ordemServico, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrdemServico.html', "OrdemServicoInsertController", validationFactory.ordemServico, _function);

                    }
                }, {
                    text: '<span data-tooltip="Enviar Email" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/vendas/dialog/dOrdemServico.html', "OrdemServicoInsertController", validationFactory.ordemServico, _function);

                    }
                }, {
                    text: 'Novo Orçamento',
                    key: '4',
                    action: function(e, dt, node, config) {
                        dialogFactory.dialog('views/vendas/dialog/dOrdemServico.html', "OrdemServicoInsertController", validationFactory.ordemServico, _function);
                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);
            },
            tributacao: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: 'Nova Tributação',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/gerencia/dialog/dTributacao.html', "TributacaoInsertController", validationFactory.tributacao, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            regime: function(vm, createdRow, scope, _callback) {

                var oOptions = padrao(vm, createdRow, scope, _callback);
                console.log(oOptions)
                oOptions.buttons.push({
                    text: 'Novo Regime',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/fiscal/dialog/dRegime.html', "RegimeInsertController", validationFactory.regime, null);

                    }
                })

                return oOptions;
            },
            cfop: function(vm, createdRow, scope, _callback) {

                var oOptions = padrao(vm, createdRow, scope, _callback);
                console.log(oOptions)
                oOptions.buttons.push({
                    text: 'Novo Cfop',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/fiscal/dialog/dCfop.html', "CfopInsertController", validationFactory.cfop, null);

                    }
                })

                return oOptions;
            },
            contasReceber: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: '<span data-tooltip="Emitir recibo" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                }, {
                    text: 'Nova Conta Receber',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html', "ContasReceberInsertController", validationFactory.contasReceber, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            contasPagar: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Emitir recibo" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: 'Nova Conta Pagar',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            nfEntrada: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/notaFiscal/apps/dUploadNFe.html', "NotaFiscalEntradaUploadController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Pagar selecionado(s)" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Emitir recibo" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> </span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: 'Nova Conta Pagar',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            nfSaida: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Buscar Retorno" id="pag_pagarEmLote" class=""><span class="fa fa-usd"> Buscar Retorno </span></span>',
                    key: '2',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Situação Nota" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> Situação Nota</span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Cancelar NFe" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> Cancelar NFe</span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: '<span data-tooltip="Imprimir" id="pag_emitirRecibo" class=""><span class="glyphicon glyphicon-print"> Imprimir</span></span>',
                    key: '3',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: 'Novo Nota Fiscal Saida',
                    key: '4',
                    action: function(e, dt, node, config) {
                        dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html', "NfSaidaInsertController", validationFactory.nfSaida, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
            doisValores: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: vm.button,
                    key: '3',
                    action: function(e, dt, node, config) {
                        dialogFactory.dialog('views/financeiro/dialog/dSituacao.html', "SituacaoInsertController", validationFactory.situacao, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, null, _function);

            },
            conta: function(vm, createdRow, scope, _callback) {

                var buttons = [];
                buttons.push({
                        text: '<span class="fa fa-trash"></span>',
                        key: '1',
                        action: function(e, dt, node, config) {

                            dialogFactory.dialog('views/financeiro/dialog/dConta.html', "ContaInsertController", validationFactory.contasPagar, null);

                        }
                    },

                    {
                        text: 'Nova Conta',
                        key: '4',
                        action: function(e, dt, node, config) {

                            dialogFactory.dialog('views/financeiro/dialog/dConta.html', "ContaInsertController", validationFactory.contasPagar, null);

                        }
                    })

                return padrao(vm, createdRow, scope, _callback, buttons, 2);

            },
            formaPg: function(vm, createdRow, scope, _callback, _function) {

                var buttons = [];
                buttons.push({
                    text: '<span class="fa fa-trash"></span>',
                    key: '1',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html', "ContasPagarInsertController", validationFactory.contasPagar, _function);

                    }
                }, {
                    text: 'Nova Forma Pagamento',
                    key: '4',
                    action: function(e, dt, node, config) {

                        dialogFactory.dialog('views/financeiro/dialog/dFormaPg.html', "FormaPgInsertController", validationFactory.formaPg, _function);

                    }
                })

                return padrao(vm, createdRow, scope, _callback, buttons, 2, _function);

            },
        };
    }]);
})();