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
				},
				pdVendas : function(vm,_html,_actions) {
				    return  [
			            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
			            .renderWith(function(data, type, full, meta) {
			                vm.selected[full.id] = false;
			                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Destinatario').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.destinatario != undefined)&&(data.info.destinatario != null))
			            		{
			            			if((data.info.destinatario.cpf != undefined)&&(data.info.destinatario.cpf != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cpf + ' <br> ' +data.info.destinatario.nomeFantasia + '</p>'
			            			}
			            			else if((data.info.destinatario.cnpj != undefined)&&(data.info.destinatario.cnpj != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' +data.info.destinatario.razaoSocial + '</p>'
			            			}
			            			else
			            			{
			            				if(data.info.destinatario.nomeFantasia != undefined)
			            				{
			            					sline = '<p>' + data.info.destinatario.nomeFantasia + '</p>';
			            				}
			            				else
			            				{
			            					sline = '<p>' + data.info.destinatario.razaoSocial + '</p>';
			            				}
			            			}
			            		}
			            	}
			                return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.identificacao != undefined)&&(data.info.identificacao != null))
			            		{
			            			if((data.info.identificacao.formaPagamento != undefined)&&(data.info.identificacao.formaPagamento != null))
				            		{
				            			sline = '<p>'+ data.info.identificacao.formaPagamento.descricao +' - '+data.info.identificacao.formaPagamento.parcelamentoMax+' - '+data.info.identificacao.formaPagamento.parcelamentoSemJuros+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.transporte != undefined)&&(data.info.transporte != null))
			            		{
			            			if((data.info.transporte.modalidadeFrete != undefined)&&(data.info.transporte.modalidadeFrete != null))
				            		{
				            			sline = '<p>' + data.info.transporte.modalidadeFrete.value +' - '+data.info.transporte.modalidadeFrete.descricao+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalfrete != undefined)&&(data.info.total.icmstotal.valortotalfrete != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotalfrete+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotaldesconto != undefined)&&(data.info.total.icmstotal.valortotaldesconto != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotaldesconto+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalnfe != undefined)&&(data.info.total.icmstotal.valortotalnfe != null))
					            		{
					            			sline = '<p> R$'+ data.info.total.valortotalnfe+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;

			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.itens != undefined)&&(data.info.itens != null))
			            		{
			            			for(var x = 0;x < data.info.itens.length;x++)
			            			{
				            			if((data.info.itens[x].produto != undefined)&&(data.info.itens[x].produto != null))
					            		{
					            			if((data.info.itens[x].produto.prodId != undefined)&&(data.info.itens[x].produto.prodId != null))
						            		{
						            			if((data.info.itens[x].produto.prodId.produto != undefined)&&(data.info.itens[x].produto.prodId.produto != null))
							            		{
							            			sline = sline + '<p>' +data.info.itens[x].produto.prodId.produto +' '+data.info.itens[x].produto.prodId.ncm+'</p> <br>'
							            		}
						            		}
					            		}
					            	}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.entrega != undefined)&&(data.info.entrega != null))
			            		{

					            	sline = '<p>'+data.info.entrega.cep  +' - '+data.info.entrega.logradouro +' - '+data.info.entrega.numero +' - '+data.info.entrega.municipio+' - '+data.info.entrega.uf+'</p>'

			            		}
			            		else
			            		{
			            			if((data.info.retirada != undefined)&&(data.info.retirada != null))
				            		{
					            		sline = '<p>'+data.info.retirada.cep +' - '+data.info.retirada.logradouro +' - '+data.info.retirada.numero +' - '+data.info.retirada.municipio+' - '+data.info.retirada.uf+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '200px').notVisible(),
			            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
			            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
			        ];
				},
				orcamento : function(vm,_html,_actions) {
				    return  [
			            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
			            .renderWith(function(data, type, full, meta) {
			                vm.selected[full.id] = false;
			                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Destinatario').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.destinatario != undefined)&&(data.info.destinatario != null))
			            		{
			            			if((data.info.destinatario.cpf != undefined)&&(data.info.destinatario.cpf != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cpf + ' <br> ' +data.info.destinatario.nomeFantasia + '</p>'
			            			}
			            			else if((data.info.destinatario.cnpj != undefined)&&(data.info.destinatario.cnpj != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' +data.info.destinatario.razaoSocial + '</p>'
			            			}
			            			else
			            			{
			            				if(data.info.destinatario.nomeFantasia != undefined)
			            				{
			            					sline = '<p>' + data.info.destinatario.nomeFantasia + '</p>';
			            				}
			            				else
			            				{
			            					sline = '<p>' + data.info.destinatario.razaoSocial + '</p>';
			            				}
			            			}
			            		}
			            	}
			                return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.identificacao != undefined)&&(data.info.identificacao != null))
			            		{
			            			if((data.info.identificacao.formaPagamento != undefined)&&(data.info.identificacao.formaPagamento != null))
				            		{
				            			sline = '<p>'+ data.info.identificacao.formaPagamento.descricao +' - '+data.info.identificacao.formaPagamento.parcelamentoMax+' - '+data.info.identificacao.formaPagamento.parcelamentoSemJuros+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.transporte != undefined)&&(data.info.transporte != null))
			            		{
			            			if((data.info.transporte.modalidadeFrete != undefined)&&(data.info.transporte.modalidadeFrete != null))
				            		{
				            			sline = '<p>' + data.info.transporte.modalidadeFrete.value +' - '+data.info.transporte.modalidadeFrete.descricao+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalfrete != undefined)&&(data.info.total.icmstotal.valortotalfrete != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotalfrete+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotaldesconto != undefined)&&(data.info.total.icmstotal.valortotaldesconto != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotaldesconto+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalnfe != undefined)&&(data.info.total.icmstotal.valortotalnfe != null))
					            		{
					            			sline = '<p> R$'+ data.info.total.valortotalnfe+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;

			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.itens != undefined)&&(data.info.itens != null))
			            		{
			            			for(var x = 0;x < data.info.itens.length;x++)
			            			{
				            			if((data.info.itens[x].produto != undefined)&&(data.info.itens[x].produto != null))
					            		{
					            			if((data.info.itens[x].produto.prodId != undefined)&&(data.info.itens[x].produto.prodId != null))
						            		{
						            			if((data.info.itens[x].produto.prodId.produto != undefined)&&(data.info.itens[x].produto.prodId.produto != null))
							            		{
							            			sline = sline + '<p>' +data.info.itens[x].produto.prodId.produto +' '+data.info.itens[x].produto.prodId.ncm+'</p> <br>'
							            		}
						            		}
					            		}
					            	}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.entrega != undefined)&&(data.info.entrega != null))
			            		{

					            	sline = '<p>'+data.info.entrega.cep  +' - '+data.info.entrega.logradouro +' - '+data.info.entrega.numero +' - '+data.info.entrega.municipio+' - '+data.info.entrega.uf+'</p>'

			            		}
			            		else
			            		{
			            			if((data.info.retirada != undefined)&&(data.info.retirada != null))
				            		{
					            		sline = '<p>'+data.info.retirada.cep +' - '+data.info.retirada.logradouro +' - '+data.info.retirada.numero +' - '+data.info.retirada.municipio+' - '+data.info.retirada.uf+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '200px').notVisible(),
			            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
			            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
			        ];
				},
				nfSaida : function(vm,_html,_actions) {
				    return  [
			            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
			            .renderWith(function(data, type, full, meta) {
			                vm.selected[full.id] = false;
			                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Destinatario').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.destinatario != undefined)&&(data.info.destinatario != null))
			            		{
			            			if((data.info.destinatario.cpf != undefined)&&(data.info.destinatario.cpf != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cpf + ' <br> ' +data.info.destinatario.nomeFantasia + '</p>'
			            			}
			            			else if((data.info.destinatario.cnpj != undefined)&&(data.info.destinatario.cnpj != null))
			            			{
			            				sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' +data.info.destinatario.razaoSocial + '</p>'
			            			}
			            			else
			            			{
			            				if(data.info.destinatario.nomeFantasia != undefined)
			            				{
			            					sline = '<p>' + data.info.destinatario.nomeFantasia + '</p>';
			            				}
			            				else
			            				{
			            					sline = '<p>' + data.info.destinatario.razaoSocial + '</p>';
			            				}
			            			}
			            		}
			            	}
			                return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta) {
			            	var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.identificacao != undefined)&&(data.info.identificacao != null))
			            		{
			            			if((data.info.identificacao.formaPagamento != undefined)&&(data.info.identificacao.formaPagamento != null))
				            		{
				            			sline = '<p>'+ data.info.identificacao.formaPagamento.descricao +' - '+data.info.identificacao.formaPagamento.parcelamentoMax+' - '+data.info.identificacao.formaPagamento.parcelamentoSemJuros+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '50px'),
			            DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.transporte != undefined)&&(data.info.transporte != null))
			            		{
			            			if((data.info.transporte.modalidadeFrete != undefined)&&(data.info.transporte.modalidadeFrete != null))
				            		{
				            			sline = '<p>' + data.info.transporte.modalidadeFrete.value +' - '+data.info.transporte.modalidadeFrete.descricao+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px'),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalfrete != undefined)&&(data.info.total.icmstotal.valortotalfrete != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotalfrete+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotaldesconto != undefined)&&(data.info.total.icmstotal.valortotaldesconto != null))
					            		{
					            			sline = '<p> R$' +data.info.total.valortotaldesconto+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.total != undefined)&&(data.info.total != null))
			            		{
			            			if((data.info.total.icmstotal != undefined)&&(data.info.total.icmstotal != null))
				            		{
				            			if((data.info.total.icmstotal.valortotalnfe != undefined)&&(data.info.total.icmstotal.valortotalnfe != null))
					            		{
					            			sline = '<p> R$'+ data.info.total.valortotalnfe+'</p>'
					            		}

				            		}
			            		}
			            	}
			            	return sline;

			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta) {
			                var sline = "";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.itens != undefined)&&(data.info.itens != null))
			            		{
			            			for(var x = 0;x < data.info.itens.length;x++)
			            			{
				            			if((data.info.itens[x].produto != undefined)&&(data.info.itens[x].produto != null))
					            		{
					            			if((data.info.itens[x].produto.prodId != undefined)&&(data.info.itens[x].produto.prodId != null))
						            		{
						            			if((data.info.itens[x].produto.prodId.produto != undefined)&&(data.info.itens[x].produto.prodId.produto != null))
							            		{
							            			sline = sline + '<p>' +data.info.itens[x].produto.prodId.produto +' '+data.info.itens[x].produto.prodId.ncm+'</p> <br>'
							            		}
						            		}
					            		}
					            	}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '100px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta) {
			                var sline = "0";
			            	if((data.info != undefined)&&(data.info != null))
			            	{
			            		if((data.info.entrega != undefined)&&(data.info.entrega != null))
			            		{

					            	sline = '<p>'+data.info.entrega.cep  +' - '+data.info.entrega.logradouro +' - '+data.info.entrega.numero +' - '+data.info.entrega.municipio+' - '+data.info.entrega.uf+'</p>'

			            		}
			            		else
			            		{
			            			if((data.info.retirada != undefined)&&(data.info.retirada != null))
				            		{
					            		sline = '<p>'+data.info.retirada.cep +' - '+data.info.retirada.logradouro +' - '+data.info.retirada.numero +' - '+data.info.retirada.municipio+' - '+data.info.retirada.uf+'</p>'
				            		}
			            		}
			            	}
			            	return sline;
			            }).withOption('width', '200px').notVisible(),
			            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
			            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
			        ];
				},tributacao : function(vm,_html,_actions) {

				    return  [
			            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
			            .renderWith(function(data, type, full, meta) {
			                vm.selected[full.id] = false;
			                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			            }).withOption('width', '3px'),
			            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
			            DTColumnBuilder.newColumn('descricao').withTitle('descrição').withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Icms').renderWith(function(data, type, full, meta) {
			            	var sline = "";

			            	if(data.cfop != undefined)
			            	{
			            		sline = data.cfop.cfop;
			            	}

			            	return sline;

			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Icms').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var sline = "0";
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.icms != undefined)
							    {
									var keys = Object.keys(data.imposto.icms);

								    for (var i = 0, len = keys.length; i < len; i++){
										if (keys[i].includes('icms'))
								        {
											if(data.imposto.icms[keys[i]] != null ){
												if(keys[i] == "icms00")
												{
													sline = dialogFactory.icms00(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms10")
												{
													sline = dialogFactory.icms10(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms11")
												{
													sline = dialogFactory.icms20(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms20")
												{
													sline = dialogFactory.icms30(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms30")
												{
													sline = dialogFactory.icms40(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms40")
												{
													sline = dialogFactory.icms50(data.imposto.icms[keys[i]]);
												}
												else if(keys[i] == "icms50")
												{
													sline = dialogFactory.icms60(data.imposto.icms[keys[i]]);
												}
											}

								        }
								    }
								}
							}


			            	return sline;
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('IPI').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.ipi != undefined)
							    {


									if(data.imposto.ipi.tributado != undefined)
									{
										retorno = retorno + "<tr><td>IPI - Situação tributária</td><td>"+data.imposto.ipi.tributado.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Classe cigarros/bebidas</td><td>"+data.imposto.ipi.classeEnquadramento+"</td></tr>"
						    			retorno = retorno + "<tr><td>CNPJ Produtor</td><td>"+data.imposto.ipi.cnpjProdutor+"</td></tr>"
						    			retorno = retorno + "<tr><td>Cod. selo controle IPI</td><td>"+data.imposto.ipi.codigoSelo+"</td></tr>"
						    			retorno = retorno + "<tr><td>Qtd. selo IPI</td><td>"+data.imposto.ipi.quantidadeSelo+"</td></tr>"
						    			retorno = retorno + "<tr><td>Cod Enquadramento</td><td>"+data.imposto.ipi.codigoEnquadramento+"</td></tr>"
							        	retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.ipi.tributado.percentualAliquota+"</td></tr>"
							        	retorno = retorno + "<tr><td>Vr do IPI</td><td>"+data.imposto.ipi.tributado.valorTributo+"</td></tr>"

									}else if(data.imposto.ipi.naotributado != undefined){
										retorno = retorno + "<tr><td>IPI - Situação tributária</td><td>"+data.imposto.ipi.naotributado.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Classe cigarros/bebidas</td><td>"+data.imposto.ipi.classeEnquadramento+"</td></tr>"
						    			retorno = retorno + "<tr><td>CNPJ Produtor</td><td>"+data.imposto.ipi.cnpjProdutor+"</td></tr>"
						    			retorno = retorno + "<tr><td>Cod. selo controle IPI</td><td>"+data.imposto.ipi.codigoSelo+"</td></tr>"
						    			retorno = retorno + "<tr><td>Qtd. selo IPI</td><td>"+data.imposto.ipi.quantidadeSelo+"</td></tr>"
						    			retorno = retorno + "<tr><td>Cod Enquadramento</td><td>"+data.imposto.ipi.codigoEnquadramento+"</td></tr>"
									}

							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('PIS').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.pis != undefined)
							    {


									if(data.imposto.pis.aliquota != undefined)
									{
										retorno = retorno + "<tr><td>PIS - Situação tributária</td><td>"+data.imposto.pis.aliquota.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.pis.aliquota.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>"+data.imposto.pis.aliquota.valorUnidade+"</td></tr>"
						    			if(data.imposto.pisst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.pisst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.pisst.valorAliquota+"</td></tr>"
						    			}


									}else if(data.imposto.pis.quantidade != undefined){
										retorno = retorno + "<tr><td>PIS - Situação tributária</td><td>"+data.imposto.pis.quantidade.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.pis.quantidade.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>"+data.imposto.pis.quantidade.valorUnidade+"</td></tr>"
						    			if(data.imposto.pisst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.pisst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.pisst.valorAliquota+"</td></tr>"
						    			}
									}else if(data.imposto.pis.naoTributavel != undefined){
										retorno = retorno + "<tr><td>PIS - Situação tributária</td><td>"+data.imposto.pis.naoTributavel.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.pis.naoTributavel.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>"+data.imposto.pis.naoTributavel.valorUnidade+"</td></tr>"
						    			if(data.imposto.pisst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.pisst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.pisst.valorAliquota+"</td></tr>"
						    			}
									}else if(data.imposto.pis.outrasOperacoes != undefined){
										retorno = retorno + "<tr><td>PIS - Situação tributária</td><td>"+data.imposto.pis.outrasOperacoes.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.pis.outrasOperacoes.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>"+data.imposto.pis.outrasOperacoes.valorUnidade+"</td></tr>"
						    			if(data.imposto.pisst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.pisst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.pisst.valorAliquota+"</td></tr>"
						    			}
									}

							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('COFINS').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.cofins != undefined)
							    {


									if(data.imposto.cofins.aliquota != undefined)
									{
										retorno = retorno + "<tr><td>COFINS - Situação tributária</td><td>"+data.imposto.cofins.aliquota.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.cofins.aliquota.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>"+data.imposto.cofins.aliquota.valorUnidade+"</td></tr>"
						    			if(data.imposto.cofinsst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.cofinsst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.cofinsst.valorAliquota+"</td></tr>"
						    			}


									}else if(data.imposto.cofins.quantidade != undefined){
										retorno = retorno + "<tr><td>COFINS - Situação tributária</td><td>"+data.imposto.cofins.quantidade.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.cofins.quantidade.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>"+data.imposto.cofins.quantidade.valorUnidade+"</td></tr>"
						    			if(data.imposto.cofinsst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.cofinsst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.cofinsst.valorAliquota+"</td></tr>"
						    			}
									}else if(data.imposto.cofins.naoTributavel != undefined){
										retorno = retorno + "<tr><td>COFINS - Situação tributária</td><td>"+data.imposto.cofins.naoTributavel.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.cofins.naoTributavel.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>"+data.imposto.cofins.naoTributavel.valorUnidade+"</td></tr>"
						    			if(data.imposto.cofinsst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.cofinsst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.cofinsst.valorAliquota+"</td></tr>"
						    			}
									}else if(data.imposto.cofins.outrasOperacoes != undefined){
										retorno = retorno + "<tr><td>COFINS - Situação tributária</td><td>"+data.imposto.cofins.outrasOperacoes.situacaoTributaria.descricao+"</td></tr>"
						    			retorno = retorno + "<tr><td>Aliquota</td><td>"+data.imposto.cofins.outrasOperacoes.percentualAliquota+"</td></tr>"
						    			retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>"+data.imposto.cofins.outrasOperacoes.valorUnidade+"</td></tr>"
						    			if(data.imposto.cofinsst.percentualAliquota != undefined)
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>"+data.imposto.cofinsst.percentualAliquota+"</td></tr>"
						    			}else
						    			{
						    				retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>"+data.imposto.cofinsst.valorAliquota+"</td></tr>"
						    			}
									}

							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('Imposto Importação').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.impostoImportacao != undefined)
							    {
									retorno = retorno + "<tr><td>Vr Base Calc.</td><td>"+data.imposto.impostoImportacao.valorBaseCalculo+"</td></tr>"
					    			retorno = retorno + "<tr><td>Vr despesas Arduaneiras</td><td>"+data.imposto.impostoImportacao.valorDespesaAduaneira+"</td></tr>"
					    			retorno = retorno + "<tr><td>IOF</td><td>"+data.imposto.impostoImportacao.valorIOF+"</td></tr>"
					    			retorno = retorno + "<tr><td>Vr Imposto Impot.</td><td>"+data.imposto.impostoImportacao.valorImpostoImportacao+"</td></tr>"
							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px'),
			            DTColumnBuilder.newColumn(null).withTitle('IPI Devolvido').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.impostoDevolvido != undefined)
							    {

									retorno = retorno + "<tr><td>Perc. da Merc. Devolvida</td><td>"+data.imposto.impostoDevolvido.percentualDevolucao+"</td></tr>"
					    			retorno = retorno + "<tr><td>Vr IPI Devolvido</td><td>"+data.imposto.impostoDevolvido.informacaoIPIDevolvido+"</td></tr>"
							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('ICMS Ope. Interestaduais').renderWith(function(data, type, full, meta) {
			            	//debugger
			            	var retorno = '<table class="table"><thead></thead><tbody>';
			            	if(data.imposto != undefined)
							{
							    if (data.imposto.icmsUfDestino != undefined)
							    {

									retorno = retorno + "<tr><td>Per ICMS Rel UF Dest.</td><td>"+data.imposto.icmsUfDestino.valorRelativoFundoCombatePobrezaDestino+"</td></tr>"
					    			retorno = retorno + "<tr><td>Vr da base de  cálc UF dest.</td><td>"+data.imposto.icmsUfDestino.valorBaseCalculoDestino+"</td></tr>"
					    			retorno = retorno + "<tr><td>Aliq interna da UF dest.</td><td>"+data.imposto.icmsUfDestino.percentualAliquotaInternaDestino+"</td></tr>"
					    			if(data.imposto.icmsUfDestino.percentualInterestadual != undefined)
					    			{
					    				retorno = retorno + "<tr><td>Aliq interestadual</td><td>"+data.imposto.icmsUfDestino.percentualInterestadual.descricao+"</td></tr>"
					    			}
					    			if(data.imposto.icmsUfDestino.percentualProvisorioPartilha != undefined)
					    			{
					    				retorno = retorno + "<tr><td>Perc prov partilha</td><td>"+data.imposto.icmsUfDestino.percentualProvisorioPartilha.descricao+"</td></tr>"
					    			}
					    			retorno = retorno + "<tr><td>Vr ICMS de part UF do dest.</td><td>"+data.imposto.icmsUfDestino.valorICMSInterestadualDestino+"</td></tr>"
									retorno = retorno + "<tr><td>Vr ICMS de part UF do remet.</td><td>"+data.imposto.icmsUfDestino.valorICMSInterestadualRemetente+"</td></tr>"
					    			retorno = retorno + "<tr><td>Vr ICMS rel FCP UF dest.</td><td>"+data.imposto.icmsUfDestino.percentualRelativoFundoCombatePobrezaDestino+"</td></tr>"
							    }
							}


			            	return retorno + '</tbody></table>';
			            }).withOption('width', '10px').notVisible(),
			            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
			            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
			            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
			            ];
			         },
			         regime : function(vm,_html,_actions) {
						return  [
					            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
					            .renderWith(function(data, type, full, meta) {
					                vm.selected[full.id] = false;
					                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
					            }).withOption('width', '3px'),
					            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
					            DTColumnBuilder.newColumn('nome').withTitle('Nome'),
					            DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),
					            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
					            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
					            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
								];
					},
					cfop : function(vm,_html,_actions) {
						return   [

				            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
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
				            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
				        ];
					},
					contasPagar : function(vm,_html,_actions) {

				    return  [
				    		DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
				            .renderWith(function(data, type, full, meta) {
				                vm.selected[full.id] = false;
				                return '<input type="checkbox" ng-model="vm.selected[' + data.id + ']" ng-click="vm.toggleOne(vm.selected)"/>';
				            }).withOption('width', '10px'),
				            DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
				            DTColumnBuilder.newColumn(null).withTitle('Fornecedor').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.fornecedor)
							{
							   	shtml = '<a id="'+data.fornecedor.id+'">'+data.fornecedor.nome+'</a>';
							}

			            	return shtml;
			            }).withOption('width', '10px'),
				            DTColumnBuilder.newColumn(null).withTitle('Descrição').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.descricao)
							{
							   	shtml = '<span>'+data.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Vencimento').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataVencimento)
							{	var date = new Date();
								var formattedDate = moment(data.dataVencimento).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Pagamento').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataPagamento)
							{	var date = new Date();
								var formattedDate = moment(data.dataPagamento).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px').notVisible(),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Emissão').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataEmissao)
							{	var date = new Date();
								var formattedDate = moment(data.dataEmissao).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px').notVisible(),
			            	DTColumnBuilder.newColumn(null).withTitle('Categoria').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.categoria)
							{
								shtml = '<span>'+data.categoria.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Situação').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.situacao)
							{
								shtml = '<span>'+data.situacao.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Valor Doc').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.valor)
							{
								shtml = '<span>'+numeral(data.valor).format('$0.0')+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Valor Pago').renderWith(function(data, type, full, meta) {
				            var shtml = "";
				            var dValor = 0;

			            	if(data.listBaixa)
							{
								for(var x = 0;x < data.listBaixa.length;x++)
								{
									dValor = dValor + data.listBaixa[x].valor;
								}
								vm.selectAll = data.listBaixa
								shtml = '<a ng-click="showCase.toggleAlls('+data.id+', showCase.selected)"><span>'+numeral(dValor).format('$0.0')+'</span></a>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
				    		DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
				            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
				            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
				            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
				    	];
					},
					contasReceber : function(vm,_html,_actions) {

				    return  [
				    		DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
				            .renderWith(function(data, type, full, meta) {
				                vm.selected[full.id] = false;
				                return '<input type="checkbox" ng-model="vm.selected[' + data.id + ']" ng-click="vm.toggleOne(vm.selected)"/>';
				            }).withOption('width', '10px'),
				            DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
				            DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.cliente)
							{
							   	shtml = '<a id="'+data.cliente.id+'">'+data.cliente.nome+'</a>';
							}

			            	return shtml;
			            }).withOption('width', '10px'),
				            DTColumnBuilder.newColumn(null).withTitle('Descrição').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.descricao)
							{
							   	shtml = '<span>'+data.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Vencimento').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataVencimento)
							{	var date = new Date();
								var formattedDate = moment(data.dataVencimento).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Pagamento').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataPagamento)
							{	var date = new Date();
								var formattedDate = moment(data.dataPagamento).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px').notVisible(),
			            	DTColumnBuilder.newColumn(null).withTitle('Data Emissão').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.dataEmissao)
							{	var date = new Date();
								var formattedDate = moment(data.dataEmissao).format('DD/MM/YYYY');
							   	shtml = "<p><b>"+formattedDate+"<b></p>";
							}

			            	return shtml;
			            	}).withOption('width', '10px').notVisible(),
			            	DTColumnBuilder.newColumn(null).withTitle('Categoria').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.categoria)
							{
								shtml = '<span>'+data.categoria.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Situação').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.situacao)
							{
								shtml = '<span>'+data.situacao.descricao+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Valor Doc').renderWith(function(data, type, full, meta) {
				            var shtml = "";
			            	if(data.valor)
							{
								shtml = '<span>'+numeral(data.valor).format('$0.0')+'</span>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
			            	DTColumnBuilder.newColumn(null).withTitle('Valor Pago').renderWith(function(data, type, full, meta) {
				            var shtml = "";
				            var dValor = 0;

			            	if(data.listBaixa)
							{
								for(var x = 0;x < data.listBaixa.length;x++)
								{
									dValor = dValor + data.listBaixa[x].valor;
								}
								vm.selectAll = data.listBaixa
								shtml = '<a ng-click="showCase.toggleAlls('+data.id+', showCase.selected)"><span>'+numeral(dValor).format('$0.0')+'</span></a>';
							}

			            	return shtml;
			            	}).withOption('width', '10px'),
				    		DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
				            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
				            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
				            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
				    	];
					},
					conta : function(vm,_html,_actions) {
						return  [
					            DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
					            .renderWith(function(data, type, full, meta) {
					                vm.selected[full.id] = false;
					                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
					            }).withOption('width', '3px'),
					            DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px').notVisible(),
					            DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),
					            DTColumnBuilder.newColumn(null).withTitle('Saldo').renderWith(function(data, type, full, meta) {
					            var shtml = "";
				            	if(data.saldo)
								{
									shtml = '<span>'+numeral(data.saldo).format('$0.0')+'</span>';
								}

				            	return shtml;
				            	}).withOption('width', '10px'),
					            DTColumnBuilder.newColumn(null).withTitle('Ultima Transação').renderWith(function(data, type, full, meta) {
					            var shtml = "";
				            	if(data.dataUltLanc)
								{	var date = new Date();
									var formattedDate = moment(data.dataUltLanc).format('DD/MM/YYYY');
								   	shtml = "<p><b>"+formattedDate+"<b></p>";
								}

				            	return shtml;
				            	}).withOption('width', '10px'),
				            	DTColumnBuilder.newColumn('numeroConta').withTitle('N° Conta'),
				            	DTColumnBuilder.newColumn('observacao').withTitle('Observação'),
				            	DTColumnBuilder.newColumn(null).withTitle('Baixas').renderWith(function(data, type, full, meta) {
					            var shtml = "";
					            var dValor = 0;

				            	if(data.listBaixa)
								{
									for(var x = 0;x < data.listBaixa.length;x++)
									{
										dValor = dValor + data.listBaixa[x].valorBaixa;
									}

									vm.selectAlls = data.listBaixa
									shtml = '<a ng-click="showCase.toggleAllss(showCase.persons[' + (meta.row)+ '], showCase.selected)"><span>'+numeral(dValor).format('$0.0')+'</span></a>';
								}

				            	return shtml;
				            	}).withOption('width', '10px'),
					            DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
					            DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
					            DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
								];
					}
			};
	}]);
})();