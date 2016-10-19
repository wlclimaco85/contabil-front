(function() {
'use strict';

	var commonAuth = angular.module('wdApp.ajaxCalls.table.columns', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
    commonAuth.factory('tableColumnsFactory', ['$rootScope', 'DTOptionsBuilder',  'DTColumnBuilder', '$log','$compile','dialogFactory','validationFactory',
    		function($rootScope,DTOptionsBuilder, DTColumnBuilder, $log,$compile,dialogFactory,validationFactory){

		return{
				//County Object
				cliente : function(vm,_html,_actions) {
				    return  [
			            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
			            .renderWith(function(data, type, full, meta) {
			                vm.selected[full.id] = false;
			                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Nome ou Razão social').renderWith(function(data, type, full, meta) {

			                return '<p>'+data.nome+'</p>';
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn('nomeFantasia').withTitle('Nome Fantasia'),
			            DTColumnBuilder.newColumn(null).withTitle('Tipo').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.tipoPessoa == 1))
			                	{
			                		return '<p>Fisica</p>';
			                	}
			                	else
			                	{
			                		return '<p>Juridica</p>';
			                	}
			                }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('CPF ou CNPJ').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos != null)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 1)||(data.documentos[x].documentoTypeEnumValue == 2))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }

			                	return '<p>'+documentos+'</p>';
			                }
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Inscr Est Subst Trib').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 8))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }
				                return '<p>'+documentos+'</p>';
				            }
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Indicador de IE').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 14))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }
				            }
			                return '<p>'+documentos+'</p>';
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Inscrição Estadual').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 10))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }
				                return '<p>'+documentos+'</p>';
				            }
			                
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Inscrição Municipal').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 3))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }
				                return '<p>'+documentos+'</p>';
				            }
			                
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Inscrição Suframa').renderWith(function(data, type, full, meta) {
			                var documentos = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.documentos != undefined)&&(data.documentos.length > 0))
				                {
				                    for(var x = 0;x < data.documentos.length;x++)
				                    {
				                        if((data.documentos[x].documentoTypeEnumValue == 11))
				                        {
				                            documentos = data.documentos[x].numero; 
				                        }
				                    }
				                }
				                return '<p>'+documentos+'</p>';
				            }
			                
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('CEP').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                		return '<p>'+data.enderecos[0].cep+'</p>';
			                }
			            }).withOption('width', '50px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Logradouro').renderWith(function(data, type, full, meta) {
			            	
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                		return '<p>'+data.enderecos[0].logradouro+'</p>';
			                }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Numero').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                		return '<p>'+data.enderecos[0].numero+'</p>';
			                }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Cidade').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                	{
					            	if((data.enderecos[0].cidade != null)&&(data.enderecos[0].cidade != undefined))
					            	{
					                	return '<p>'+data.enderecos[0].cidade.nome+'</p>';
					            	}
					            	else
					            	{
					            		return ""
					            	}
					            }
				            }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Estado').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                	{
									if((data.enderecos[0].estado != null)&&(data.enderecos[0].cidade != undefined))
					            	{
					                	return '<p>'+data.enderecos[0].estado.sigla+'</p>';
					            	}
					            	else
					            	{
					            		return ""
					            	}
					            }
				            }
			            }).withOption('width', '50px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Pais').renderWith(function(data, type, full, meta) {
			            	if((data != null)&&(data != undefined)&&(type == "display"))
			                {
			                	if((data.enderecos[0] != null)&&(data.enderecos[0] != undefined))
			                		return '<p>'+data.enderecos[0].pais+'</p>';
			                }
			            }).withOption('width', '50px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Telefone').renderWith(function(data, type, full, meta) {
			            	var telefones = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.telefones != undefined)&&(data.telefones.length > 0))
				                {
				                    for(var x = 0;x < data.telefones.length;x++)
				                    {
				 
				                        telefones = telefones + '<br>' + data.telefones[x].numero; 
				                        
				                    }
				                }
				                return '<p>'+telefones+'</p>';
				            }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Email').notVisible().renderWith(function(data, type, full, meta) {
			            	var emails = "";
			                if((data != null)&&(data != undefined)&&(type == "display"))
			                {
				                if((data.emails != undefined)&&(data.emails.length > 0))
				                {
				                    for(var x = 0;x < data.emails.length;x++)
				                    {
				 
				                        emails = emails + '<br>' + data.emails[x].email; 
				                        
				                    }
				                }
				                return '<p>'+emails+'</p>';
				            }
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn('dtNasc').withTitle('Data Nascimento').notVisible(),
			            DTColumnBuilder.newColumn('dataCadastro').withTitle('Data Cadastro').notVisible(),
			            DTColumnBuilder.newColumn('obs').withTitle('Observação').notVisible(),
			            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
			            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
			        ];
				}
			};
	}]);
})();