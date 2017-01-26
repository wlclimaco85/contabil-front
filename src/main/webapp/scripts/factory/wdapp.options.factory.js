(function() {
'use strict';
	//var commonAuth = angular.module('wdApp.ajaxCalls.table.option', ['angularModalService','datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
	var commonAuth = angular.module('wdApp.ajaxCalls.table.option', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
    commonAuth.factory('tableOptionsFactory', ['$rootScope', 'DTOptionsBuilder',  'DTColumnBuilder', '$log','$compile','dialogFactory','validationFactory',function($rootScope,DTOptionsBuilder, DTColumnBuilder, $log,$compile,dialogFactory,validationFactory){
	//commonAuth.factory('tableOptionsFactory', ['ModalService','$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log','$compile', function(ModalService,$scope,  DTOptionsBuilder,$compile,dialogFactory,validationFactory){
		function padrao(vm,createdRow,scope, filters){
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
			            }]);


		}
		return{
				//County Object
				defaut : function() {



				},
				cliente : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
					console.log(oOptions)
				     oOptions.buttons.push({
			                text: 'Novo Cliente',
			                key: '1',
			                action: function(e, dt, node, config) {

			                    dialogFactory.dialog('views/cadastros/dialog/dCliente.html',"ClienteInsertController",validationFactory.cliente,null);

			                }
			            })

			            return oOptions;
				},
				fornecedor : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
					console.log(oOptions)
				     oOptions.buttons.push({
			                text: 'Novo Fornecedor',
			                key: '1',
			                action: function(e, dt, node, config) {

			                    dialogFactory.dialog('views/cadastros/dialog/dFornecedor.html',"FornecedorInsertController",validationFactory.fornecedor,null);

			                }
			            })

			            return oOptions;
				},
				transportador : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
					console.log(oOptions)
				     oOptions.buttons.push({
			                text: 'Novo Transportador',
			                key: '1',
			                action: function(e, dt, node, config) {

			                    dialogFactory.dialog('views/cadastros/dialog/dTransportador.html',"TransportadorInsertController",validationFactory.transportador,null);

			                }
			            })

			            return oOptions;
				},
				pdVendas : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
				     oOptions.buttons.push({
			                text: 'Novo Pedido de Venda',
			                key: '1',
			                action: function(e, dt, node, config) {
			                    dialogFactory.dialog('views/vendas/dialog/dPedidoVendas.html',"PedidoVendaInsertController",validationFactory.pdVendas,null);

			                }
			            })

			            return oOptions;
				},
				orcamento : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
				     oOptions.buttons.push({
			                text: 'Novo Orcamento',
			                key: '1',
			                action: function(e, dt, node, config) {
			                    dialogFactory.dialog('views/vendas/dialog/dOrcamento.html',"OrcamentoInsertController",validationFactory.orcamento,null);

			                }
			            })

			            return oOptions;
				},
				nfSaida : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
				     oOptions.buttons.push({
			                text: 'Novo Nota Fiscal Saida',
			                key: '1',
			                action: function(e, dt, node, config) {
			                    dialogFactory.dialog('views/vendas/dialog/dNotaFiscalSaida.html',"NfSaidaInsertController",validationFactory.nfSaida,null);

			                }
			            })

			            return oOptions;
				},
				tributacao : function(vm,createdRow,scope, _callback) {

					var oOptions = padrao(vm,createdRow,scope, _callback);
				     oOptions.buttons.push({
			                text: 'Nova Tributação',
			                key: '1',
			                action: function(e, dt, node, config) {
			                    dialogFactory.dialog('views/gerencia/dialog/dTributacao.html',"TributacaoInsertController",validationFactory.tributacao,null);

			                }
			            })

			            return oOptions;
				}
			};
	}]);
})();