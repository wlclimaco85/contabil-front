(function()
{
	'use strict';

	var commonAuth = angular.module('wdApp.ajaxCalls.table.columns', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);
	commonAuth.factory('tableColumnsFactory', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log', '$compile', 'dialogFactory', 'validationFactory','fProcesso',
        function($rootScope, DTOptionsBuilder, DTColumnBuilder, $log, $compile, dialogFactory, validationFactory,fProcesso)
		{

			return {
				agencia: function(vm, _html, _actions)
				{
					return [
   						DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn('gerente').withTitle('Gerente').withOption('width', '10px'),
						DTColumnBuilder.newColumn('responsavelConta').withTitle('Responsavel Conta').withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Banco').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.banco))
									return '<p>' + data.banco.nome + '</p>'
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '10px'),
						DTColumnBuilder.newColumn(null).withTitle('Conta').renderWith(function(data, type, full, meta)
						{
							var sNumeroConta = "";
							if (data && (type == "display"))
							{
								if ((data.numeroConta))
									for(var x = 0;x < data.numeroConta.length;x++)
									{
										sNumeroConta = sNumeroConta + '<p> Nº Conta : ' +data.numeroConta[x].numeroConta+ ' Saldo : $' +data.numeroConta[x].saldo+ '</p></br>';
									}
							}
							return sNumeroConta;
						}).withOption('width', '10px'),
        				DTColumnBuilder.newColumn('nome').withTitle('Nome').withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('CEP').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].cep + '</p>'
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Logradouro').renderWith(function(data, type, full, meta)
						{

							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].logradouro + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Numero').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].numero ? data.enderecos[0].numero : "" + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cidade').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if ((data.enderecos[0].cidade))
									{
										return '<p>' + data.enderecos[0].cidade.nome ? data.enderecos[0].cidade.nome : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Estado').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if (data.enderecos[0].estado)
									{
										return '<p>' + data.enderecos[0].estado.sigla ? data.enderecos[0].estado.sigla : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Pais').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].pais ? data.enderecos[0].pais :""+ '</p>';
									else
									{
										return ""
									}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Telefone').renderWith(function(data, type, full, meta)
						{
							var telefones = "";
							if ((data) && (type == "display"))
							{
								if ((data.telefones) && (data.telefones.length > 0))
								{
									for (var x = 0; x < data.telefones.length; x++)
									{
										telefones = telefones + '<br>' + data.telefones[x].numero ? data.telefones[x].numero : "";

									}
								}
								return '<p>' + telefones ? telefones : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Email').notVisible().renderWith(function(data, type, full, meta)
						{
							var emails = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.emails != undefined) && (data.emails.length > 0))
								{
									for (var x = 0; x < data.emails.length; x++)
									{

										emails = emails + '<br>' + data.emails[x].email ? data.emails[x].email : "";

									}
								}
								return '<p>' + emails ? emails : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
						DTColumnBuilder.newColumn(null).withTitle('Observação').renderWith(function(data, type, full, meta)
						{
							if (data.obs)
								return '<p>' + data.obs + '</p>';
							else
								return "";
						}).notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				cliente: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Nome ou Razão social').renderWith(function(data, type, full, meta)
						{
							return '<p>' + data.razao + '</p>';
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn('nome').withTitle('Nome Fantasia').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo').renderWith(function(data, type, full, meta)
						{
							if ((data) && (type == "display"))
							{
								if ((data.tipoPessoa == 1))
								{
									return '<p>Fisica</p>';
								}
								else
								{
									return '<p>Juridica</p>';
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('CPF ou CNPJ').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos != null) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 1) || (data.documentos[x].documentoTypeEnumValue == 2))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}

								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Inscr Est Subst Trib').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 8))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Indicador de IE').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 14))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
							}
							else
							{
								return '';
							}
							return '<p>' + documentos + '</p>';
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Estadual').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 10))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Municipal').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 3))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Suframa').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 11))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('CEP').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].cep + '</p>'
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Logradouro').renderWith(function(data, type, full, meta)
						{

							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].logradouro + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Numero').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].numero ? data.enderecos[0].numero : "" + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cidade').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if ((data.enderecos[0].cidade))
									{
										return '<p>' + data.enderecos[0].cidade.nome ? data.enderecos[0].cidade.nome : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Estado').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if (data.enderecos[0].estado)
									{
										return '<p>' + data.enderecos[0].estado.sigla ? data.enderecos[0].estado.sigla : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Pais').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].pais ? data.enderecos[0].pais :""+ '</p>';
									else
									{
										return ""
									}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Telefone').renderWith(function(data, type, full, meta)
						{
							var telefones = "";
							if ((data) && (type == "display"))
							{
								if ((data.telefones) && (data.telefones.length > 0))
								{
									for (var x = 0; x < data.telefones.length; x++)
									{
										telefones = telefones + '<br>' + data.telefones[x].numero ? data.telefones[x].numero : "";

									}
								}
								return '<p>' + telefones ? telefones : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Email').notVisible().renderWith(function(data, type, full, meta)
						{
							var emails = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.emails != undefined) && (data.emails.length > 0))
								{
									for (var x = 0; x < data.emails.length; x++)
									{

										emails = emails + '<br>' + data.emails[x].email ? data.emails[x].email : "";

									}
								}
								return '<p>' + emails ? emails : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
						DTColumnBuilder.newColumn(null).withTitle('Observação').renderWith(function(data, type, full, meta)
						{
							if (data.obs)
								return '<p>' + data.obs + '</p>';
							else
								return "";
						}).notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				advogado: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Nome ou Nome Fantasia').renderWith(function(data, type, full, meta)
						{
							return '<p>' + data.nome + '</p>';
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn('razao').withTitle('Razão social').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo').renderWith(function(data, type, full, meta)
						{
							if ((data) && (type == "display"))
							{
								if ((data.tipoPessoa == 1))
								{
									return '<p>Fisica</p>';
								}
								else
								{
									return '<p>Juridica</p>';
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('CPF ou CNPJ').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos != null) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 1) || (data.documentos[x].documentoTypeEnumValue == 2))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}

								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Inscr Est Subst Trib').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 8))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Indicador de IE').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 14))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
							}
							else
							{
								return '';
							}
							return '<p>' + documentos + '</p>';
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Estadual').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 10))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Municipal').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 3))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Inscrição Suframa').renderWith(function(data, type, full, meta)
						{
							var documentos = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.documentos != undefined) && (data.documentos.length > 0))
								{
									for (var x = 0; x < data.documentos.length; x++)
									{
										if ((data.documentos[x].documentoTypeEnumValue == 11))
										{
											documentos = data.documentos[x].numero;
										}
									}
								}
								return '<p>' + documentos + '</p>';
							}
							else
							{
								return '';
							}

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('CEP').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].cep + '</p>'
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Logradouro').renderWith(function(data, type, full, meta)
						{

							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].logradouro + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Numero').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].numero ? data.enderecos[0].numero : "" + '</p>';
								else
									return '';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cidade').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if ((data.enderecos[0].cidade))
									{
										return '<p>' + data.enderecos[0].cidade.nome ? data.enderecos[0].cidade.nome : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Estado').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
								{
									if (data.enderecos[0].estado)
									{
										return '<p>' + data.enderecos[0].estado.sigla ? data.enderecos[0].estado.sigla : "" + '</p>';
									}
									else
									{
										return ""
									}
								}
								else
								{
									return ""
								}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Pais').renderWith(function(data, type, full, meta)
						{
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.enderecos) && (data.enderecos[0]))
									return '<p>' + data.enderecos[0].pais ? data.enderecos[0].pais :""+ '</p>';
									else
									{
										return ""
									}
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Telefone').renderWith(function(data, type, full, meta)
						{
							var telefones = "";
							if ((data) && (type == "display"))
							{
								if ((data.telefones) && (data.telefones.length > 0))
								{
									for (var x = 0; x < data.telefones.length; x++)
									{
										telefones = telefones + '<br>' + data.telefones[x].numero ? data.telefones[x].numero : "";

									}
								}
								return '<p>' + telefones ? telefones : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Email').notVisible().renderWith(function(data, type, full, meta)
						{
							var emails = "";
							if ((data != null) && (data != undefined) && (type == "display"))
							{
								if ((data.emails != undefined) && (data.emails.length > 0))
								{
									for (var x = 0; x < data.emails.length; x++)
									{

										emails = emails + '<br>' + data.emails[x].email ? data.emails[x].email : "";

									}
								}
								return '<p>' + emails ? emails : "" + '</p>';
							}
							else
							{
								return '';
							}
						}).withOption('width', '50px'),
						DTColumnBuilder.newColumn(null).withTitle('Observação').renderWith(function(data, type, full, meta)
						{
							if (data.obs)
								return '<p>' + data.obs + '</p>';
							else
								return "";
						}).notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				processo: function(vm, _html, _actions)
				{

					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
						DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
						DTColumnBuilder.newColumn(null).withTitle('dataProcess').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.dataProcess)
								{
									shtml = '<span>' + data.dataProcess + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('dataFim').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('valor').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.valor)
								{
									shtml = '<span>' + data.valor + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('senha').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.senha)
								{
									shtml = '<span>' + data.senha + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('assunto').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.assunto)
								{
									shtml = '<span>' + data.assunto + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px'),
						DTColumnBuilder.newColumn(null).withTitle('porcValorAcao').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.porcValorAcao)
								{
									shtml = '<span>' + data.porcValorAcao + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('descricaoProc').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.descricaoProc)
								{
									shtml = '<span>' + data.descricaoProc + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('processo').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.processo)
								{
									shtml = '<span>' + data.processo + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px'),
						DTColumnBuilder.newColumn(null).withTitle('npadraocnj').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.npadraocnj)
								{
									shtml = '<span>' + data.npadraocnj + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('npadrao').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.npadrao)
								{
									shtml = '<span>' + data.npadrao + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('agendarCap').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.agendarCap)
								{
									shtml = '<span>' + data.agendarCap + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('distribuido').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.distribuido)
								{
									shtml = '<span>' + data.distribuido + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('valorAcao').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.valorAcao)
								{
									shtml = '<span>' + data.valorAcao + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('valorProvisionado').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.valorProvisionado)
								{
									shtml = '<span>' + data.valorProvisionado + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('segJustica').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.segJustica)
								{
									shtml = '<span>' + data.segJustica + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('observacaoProc').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.observacaoProc)
								{
									shtml = '<span>' + data.observacaoProc + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('numeroprocesso').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.numeroprocesso)
								{
									shtml = '<span>' + data.numeroprocesso + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('capautomatica').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.capautomatica)
								{
									shtml = '<span>' + data.capautomatica + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('pasta').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.pasta)
								{
									shtml = '<span>' + data.pasta + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px'),
						DTColumnBuilder.newColumn(null).withTitle('enviarEmail').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.enviarEmail)
								{
									shtml = '<span>' + data.enviarEmail + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('enviarMdgTelefone').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.enviarMdgTelefone)
								{
									shtml = '<span>' + data.enviarMdgTelefone + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('monitorar').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.monitorar)
								{
									shtml = '<span>' + data.monitorar + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('fundamentacaoJuridica').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.fundamentacaoJuridica)
								{
									shtml = '<span>' + data.fundamentacaoJuridica + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('fatos').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.fatos)
								{
									shtml = '<span>' + data.fatos + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('pretensoesCliente').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.pretensoesCliente)
								{
									shtml = '<span>' + data.pretensoesCliente + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('estrategia').renderWith(function(data, type, full, meta)
						{
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.estrategia)
								{
									shtml = '<span>' + data.estrategia + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('retringirProcesso').renderWith(function(data, type, full, meta)
						{debugger
							var shtml = "Confidencial";
							if(fProcesso.fnVerificaPrivacidade(data))
							{
								if (data.retringirProcesso)
								{
									shtml = '<span>' + data.retringirProcesso + '</span>';
								}
								else
								{
									shtml = "";
								}
							}
							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('acao').renderWith(function(data, type, full, meta)
						{ //fProcesso
							var shtml = "";
							if (data.descricao)
							{
								shtml = '<span>' + data.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('natureza').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.descricao)
							{
								shtml = '<span>' + data.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('statusProc').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.descricao)
							{
								shtml = '<span>' + data.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),

					DTColumnBuilder.newColumn(null).withTitle('grupoTrabalho').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('situacao').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('instancia').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('orgao').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('justica').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('tribunal').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('instancia1').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('localidade').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('capturpor').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.descricao)
						{
							shtml = '<span>' + data.descricao + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),

					DTColumnBuilder.newColumn(null).withTitle('quando').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if (data.id)
						{
							shtml = '<span>' + data.id + '</span>';
						}

						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('usuariosRestricaoProc').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.usuariosRestricaoProc)
						{
							for(var x = 0; data.usuariosRestricaoProc.length > x;x++)
							{
								var oData = data.usuariosRestricaoProc[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('tituloList').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.tituloList)
						{
							for(var x = 0; data.tituloList.length > x;x++)
							{
								var oData = data.tituloList[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('clienteList').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.clienteList)
						{
							for(var x = 0; data.clienteList.length > x;x++)
							{
								var oData = data.clienteList[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('advogadoList').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.advogadoList)
						{
							for(var x = 0; data.advogadoList.length > x;x++)
							{
								var oData = data.advogadoList[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('processoStatusList').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.processoStatusList)
						{
							for(var x = 0; data.processoStatusList.length > x;x++)
							{
								var oData = data.processoStatusList[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('envolvList').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.envolvList)
						{
							for(var x = 0; data.envolvList.length > x;x++)
							{
								var oData = data.envolvList[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('arquivos').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.arquivos)
						{
							for(var x = 0; data.arquivos.length > x;x++)
							{
								var oData = data.arquivos[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
					DTColumnBuilder.newColumn(null).withTitle('envolvidosExterno').renderWith(function(data, type, full, meta)
					{
						var shtml = "";
						if(data.envolvidosExterno)
						{
							for(var x = 0; data.envolvidosExterno.length > x;x++)
							{
								var oData = data.envolvidosExterno[x];
								if (oData.id)
								{
									shtml += '<span>' + oData.id + '</span>';
								}
							}
						}
						return shtml;
					}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
					];
				},
				pdVendas: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.destinatario != undefined) && (data.info.destinatario != null))
								{
									if ((data.info.destinatario.cpf != undefined) && (data.info.destinatario.cpf != null))
									{
										sline = '<p>' + data.info.destinatario.cpf + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
									else if ((data.info.destinatario.cnpj != undefined) && (data.info.destinatario.cnpj != null))
									{
										sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Vendedor').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.createUser != undefined) && (data.createUser != null))
							{
								sline = '<p>' + data.createUser + '</p>';
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.identificacao != undefined) && (data.info.identificacao != null))
								{
									if ((data.info.identificacao.formaPagamento != undefined) && (data.info.identificacao.formaPagamento != null))
									{
										sline = '<p>' + data.info.identificacao.formaPagamento.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.transporte != undefined) && (data.info.transporte != null))
								{
									if ((data.info.transporte.modalidadeFrete != undefined) && (data.info.transporte.modalidadeFrete != null))
									{
										sline = '<p>' + data.info.transporte.modalidadeFrete.value + ' - ' + data.info.transporte.modalidadeFrete.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalFrete != undefined) && (data.info.total.icmstotal.valorTotalFrete != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalFrete + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalDesconto != undefined) && (data.info.total.icmstotal.valorTotalDesconto != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalDesconto + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalNFe != undefined) && (data.info.total.icmstotal.valorTotalNFe != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalNFe + '</p>'
										}

									}
								}
							}
							return sline;

						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.itens != undefined) && (data.info.itens != null))
								{
									for (var x = 0; x < data.info.itens.length; x++)
									{
										if ((data.info.itens[x].produto != undefined) && (data.info.itens[x].produto != null))
										{
											sline = '<p> ' + data.info.itens[x].produto.codigo + ' ' + data.info.itens[x].produto.descricao + '<br> Qnt ' + data.info.itens[x].produto.quantidadeComercial +
												' Vr Total  R$' + data.info.itens[x].produto.valorTotalBruto + '</p>'
										}
									}
								}
							}
							return sline;
						}).withOption('width', '200px'),
                        DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.entrega != undefined) && (data.info.entrega != null))
								{

									sline = '<p>' + data.info.entrega.cep + ' - ' + data.info.entrega.logradouro + ' - ' + data.info.entrega.numero + ' - ' + data.info.entrega.municipio + ' - ' + data
										.info.entrega.uf + '</p>'

								}
								else
								{
									if ((data.info.retirada != undefined) && (data.info.retirada != null))
									{
										sline = '<p>' + data.info.retirada.cep + ' - ' + data.info.retirada.logradouro + ' - ' + data.info.retirada.numero + ' - ' + data.info.retirada.municipio + ' - ' +
											data.info.retirada.uf + '</p>'
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
				orcamento: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.destinatario != undefined) && (data.info.destinatario != null))
								{
									if ((data.info.destinatario.cpf != undefined) && (data.info.destinatario.cpf != null))
									{
										sline = '<p>' + data.info.destinatario.cpf + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
									else if ((data.info.destinatario.cnpj != undefined) && (data.info.destinatario.cnpj != null))
									{
										sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Vendedor').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.createUser != undefined) && (data.createUser != null))
							{
								sline = '<p>' + data.createUser + '</p>';
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.identificacao != undefined) && (data.info.identificacao != null))
								{
									if ((data.info.identificacao.formaPagamento != undefined) && (data.info.identificacao.formaPagamento != null))
									{
										sline = '<p>' + data.info.identificacao.formaPagamento.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.transporte != undefined) && (data.info.transporte != null))
								{
									if ((data.info.transporte.modalidadeFrete != undefined) && (data.info.transporte.modalidadeFrete != null))
									{
										sline = '<p>' + data.info.transporte.modalidadeFrete.value + ' - ' + data.info.transporte.modalidadeFrete.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalFrete != undefined) && (data.info.total.icmstotal.valorTotalFrete != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalFrete + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalDesconto != undefined) && (data.info.total.icmstotal.valorTotalDesconto != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalDesconto + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalNFe != undefined) && (data.info.total.icmstotal.valorTotalNFe != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalNFe + '</p>'
										}

									}
								}
							}
							return sline;

						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.itens != undefined) && (data.info.itens != null))
								{
									for (var x = 0; x < data.info.itens.length; x++)
									{
										if ((data.info.itens[x].produto != undefined) && (data.info.itens[x].produto != null))
										{
											sline = '<p> ' + data.info.itens[x].produto.codigo + ' ' + data.info.itens[x].produto.descricao + '<br> Qnt ' + data.info.itens[x].produto.quantidadeComercial +
												' Vr Total  R$' + data.info.itens[x].produto.valorTotalBruto + '</p>'
										}
									}
								}
							}
							return sline;
						}).withOption('width', '200px'),
                        DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.entrega != undefined) && (data.info.entrega != null))
								{

									sline = '<p>' + data.info.entrega.cep + ' - ' + data.info.entrega.logradouro + ' - ' + data.info.entrega.numero + ' - ' + data.info.entrega.municipio + ' - ' + data
										.info.entrega.uf + '</p>'

								}
								else
								{
									if ((data.info.retirada != undefined) && (data.info.retirada != null))
									{
										sline = '<p>' + data.info.retirada.cep + ' - ' + data.info.retirada.logradouro + ' - ' + data.info.retirada.numero + ' - ' + data.info.retirada.municipio + ' - ' +
											data.info.retirada.uf + '</p>'
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
				ordemServico: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.destinatario != undefined) && (data.info.destinatario != null))
								{
									if ((data.info.destinatario.cpf != undefined) && (data.info.destinatario.cpf != null))
									{
										sline = '<p>' + data.info.destinatario.cpf + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
									else if ((data.info.destinatario.cnpj != undefined) && (data.info.destinatario.cnpj != null))
									{
										sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Vendedor').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.createUser != undefined) && (data.createUser != null))
							{
								sline = '<p>' + data.createUser + '</p>';
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.identificacao != undefined) && (data.info.identificacao != null))
								{
									if ((data.info.identificacao.formaPagamento != undefined) && (data.info.identificacao.formaPagamento != null))
									{
										sline = '<p>' + data.info.identificacao.formaPagamento.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.transporte != undefined) && (data.info.transporte != null))
								{
									if ((data.info.transporte.modalidadeFrete != undefined) && (data.info.transporte.modalidadeFrete != null))
									{
										sline = '<p>' + data.info.transporte.modalidadeFrete.value + ' - ' + data.info.transporte.modalidadeFrete.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalFrete != undefined) && (data.info.total.icmstotal.valorTotalFrete != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalFrete + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalDesconto != undefined) && (data.info.total.icmstotal.valorTotalDesconto != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalDesconto + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalNFe != undefined) && (data.info.total.icmstotal.valorTotalNFe != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalNFe + '</p>'
										}

									}
								}
							}
							return sline;

						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.itens != undefined) && (data.info.itens != null))
								{
									for (var x = 0; x < data.info.itens.length; x++)
									{
										if ((data.info.itens[x].produto != undefined) && (data.info.itens[x].produto != null))
										{
											sline = '<p> ' + data.info.itens[x].produto.codigo + ' ' + data.info.itens[x].produto.descricao + '<br> Qnt ' + data.info.itens[x].produto.quantidadeComercial +
												' Vr Total  R$' + data.info.itens[x].produto.valorTotalBruto + '</p>'
										}
									}
								}
							}
							return sline;
						}).withOption('width', '200px'),
                        DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.entrega != undefined) && (data.info.entrega != null))
								{

									sline = '<p>' + data.info.entrega.cep + ' - ' + data.info.entrega.logradouro + ' - ' + data.info.entrega.numero + ' - ' + data.info.entrega.municipio + ' - ' + data
										.info.entrega.uf + '</p>'

								}
								else
								{
									if ((data.info.retirada != undefined) && (data.info.retirada != null))
									{
										sline = '<p>' + data.info.retirada.cep + ' - ' + data.info.retirada.logradouro + ' - ' + data.info.retirada.numero + ' - ' + data.info.retirada.municipio + ' - ' +
											data.info.retirada.uf + '</p>'
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
				nfSaida: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.destinatario != undefined) && (data.info.destinatario != null))
								{
									if ((data.info.destinatario.cpf != undefined) && (data.info.destinatario.cpf != null))
									{
										sline = '<p>' + data.info.destinatario.cpf + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
									else if ((data.info.destinatario.cnpj != undefined) && (data.info.destinatario.cnpj != null))
									{
										sline = '<p>' + data.info.destinatario.cnpj + ' <br> ' + data.info.destinatario.razaosocial + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Vendedor').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.createUser != undefined) && (data.createUser != null))
							{
								sline = '<p>' + data.createUser + '</p>';
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Forma de Pagamento').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.identificacao != undefined) && (data.info.identificacao != null))
								{
									if ((data.info.identificacao.formaPagamento != undefined) && (data.info.identificacao.formaPagamento != null))
									{
										sline = '<p>' + data.info.identificacao.formaPagamento.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.transporte != undefined) && (data.info.transporte != null))
								{
									if ((data.info.transporte.modalidadeFrete != undefined) && (data.info.transporte.modalidadeFrete != null))
									{
										sline = '<p>' + data.info.transporte.modalidadeFrete.value + ' - ' + data.info.transporte.modalidadeFrete.descricao + '</p>'
									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Frete').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalFrete != undefined) && (data.info.total.icmstotal.valorTotalFrete != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalFrete + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Desconto').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalDesconto != undefined) && (data.info.total.icmstotal.valorTotalDesconto != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalDesconto + '</p>'
										}

									}
								}
							}
							return sline;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Total').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.total != undefined) && (data.info.total != null))
								{
									if ((data.info.total.icmstotal != undefined) && (data.info.total.icmstotal != null))
									{
										if ((data.info.total.icmstotal.valorTotalNFe != undefined) && (data.info.total.icmstotal.valorTotalNFe != null))
										{
											sline = '<p> R$' + data.info.total.icmstotal.valorTotalNFe + '</p>'
										}

									}
								}
							}
							return sline;

						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Produto').renderWith(function(data, type, full, meta)
						{
							var sline = "";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.itens != undefined) && (data.info.itens != null))
								{
									for (var x = 0; x < data.info.itens.length; x++)
									{
										if ((data.info.itens[x].produto != undefined) && (data.info.itens[x].produto != null))
										{
											sline = '<p> ' + data.info.itens[x].produto.codigo + ' ' + data.info.itens[x].produto.descricao + '<br> Qnt ' + data.info.itens[x].produto.quantidadeComercial +
												' Vr Total  R$' + data.info.itens[x].produto.valorTotalBruto + '</p>'
										}
									}
								}
							}
							return sline;
						}).withOption('width', '200px'),
                        DTColumnBuilder.newColumn(null).withTitle('Endereco Entrega').renderWith(function(data, type, full, meta)
						{
							var sline = "0";
							if ((data.info != undefined) && (data.info != null))
							{
								if ((data.info.entrega != undefined) && (data.info.entrega != null))
								{

									sline = '<p>' + data.info.entrega.cep + ' - ' + data.info.entrega.logradouro + ' - ' + data.info.entrega.numero + ' - ' + data.info.entrega.municipio + ' - ' + data
										.info.entrega.uf + '</p>'

								}
								else
								{
									if ((data.info.retirada != undefined) && (data.info.retirada != null))
									{
										sline = '<p>' + data.info.retirada.cep + ' - ' + data.info.retirada.logradouro + ' - ' + data.info.retirada.numero + ' - ' + data.info.retirada.municipio + ' - ' +
											data.info.retirada.uf + '</p>'
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
				tributacao: function(vm, _html, _actions)
				{

					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '3px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn('descricao').withTitle('Descrição').withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cfop').renderWith(function(data, type, full, meta)
						{
							var sline = "";

							if (data.cfop != undefined)
							{
								sline = data.cfop.cfop;
							}

							return sline;

						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('ICMS/ISSQN').renderWith(function(data, type, full, meta)
						{

							var sline = "0";
							if (data.imposto != undefined)
							{
								if (data.tipo != 1)
								{
									if (data.imposto.icms != undefined)
									{
										var keys = Object.keys(data.imposto.icms);

										for (var i = 0, len = keys.length; i < len; i++)
										{
											if (keys[i].includes('icms'))
											{
												if (data.imposto.icms[keys[i]] != null)
												{
													if (keys[i] == "icms00")
													{
														sline = dialogFactory.icms00(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms10")
													{
														sline = dialogFactory.icms10(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms11")
													{
														sline = dialogFactory.icms11(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms20")
													{
														sline = dialogFactory.icms20(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms30")
													{
														sline = dialogFactory.icms30(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms40")
													{
														sline = dialogFactory.icms40(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms50")
													{
														sline = dialogFactory.icms50(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms51")
													{
														sline = dialogFactory.icms51(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms60")
													{
														sline = dialogFactory.icms60(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms70")
													{
														sline = dialogFactory.icms70(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icms90")
													{
														sline = dialogFactory.icms90(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmsPartilhado")
													{
														sline = dialogFactory.icmsPartilhado(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmsst")
													{
														sline = dialogFactory.icmsst(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn101")
													{
														sline = dialogFactory.icmssn101(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn102")
													{
														sline = dialogFactory.icmssn102(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn103")
													{
														sline = dialogFactory.icmssn103(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn201")
													{
														sline = dialogFactory.icmssn201(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn202")
													{
														sline = dialogFactory.icmssn202(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn203")
													{
														sline = dialogFactory.icmssn203(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn300")
													{
														sline = dialogFactory.icmssn300(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn400")
													{
														sline = dialogFactory.icmssn400(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn500")
													{
														sline = dialogFactory.icmssn500(data.imposto.icms[keys[i]]);
													}
													else if (keys[i] == "icmssn900")
													{
														sline = dialogFactory.icmssn900(data.imposto.icms[keys[i]]);
													}
												}

											}
										}
									}
									return sline;
								}
								else
								{
									if (data.imposto.issqn != undefined)
									{
										var retorno = '<table class="table"><thead></thead><tbody>';
										retorno = retorno + "<tr><td>Aliq. ISSQN</td><td>" + data.imposto.issqn.valorAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Exigibilidade do ISS</td><td>" + (data.imposto.issqn.indicadorExigibilidadeISS ? data.imposto.issqn.indicadorExigibilidadeISS.descricao :
											"") + "</td></tr>"
										retorno = retorno + "<tr><td>Possui incentivo fiscal</td><td>" + (data.imposto.issqn.indicadorIncentivoFiscal == 1 ? 'Sim' : 'Não') + "</td></tr>"
										return retorno + '</tbody></table>';
									}

								}
							}



						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('IPI').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.ipi != undefined)
								{


									if (data.imposto.ipi.tributado != undefined)
									{
										retorno = retorno + (data.imposto.ipi.tributado.situacaoTributaria ? "<tr><td>IPI - Situação Tributaria : " + (data.imposto.ipi.tributado.situacaoTributaria.descricao) +
											"</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.classeEnquadramento ? "<tr><td>Classe cigarros/bebidas" + data.imposto.ipi.classeEnquadramento + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.cnpjProdutor ? "<tr><td>CNPJ Produtor" + data.imposto.ipi.cnpjProdutor + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.codigoSelo ? "<tr><td>Cod. selo controle IPI" + data.imposto.ipi.codigoSelo + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.quantidadeSelo ? "<tr><td>Qtd. selo IPI" + data.imposto.ipi.quantidadeSelo + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.codigoEnquadramento ? "<tr><td>Cod Enquadramento" + data.imposto.ipi.codigoEnquadramento + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.tributado.percentualAliquota ? "<tr><td>Aliquota" + data.imposto.ipi.tributado.percentualAliquota + "</td></tr>" : "")
										retorno = retorno + (data.imposto.ipi.tributado.valorTributo ? "<tr><td>Vr do IPI" + data.imposto.ipi.tributado.valorTributo + "</td></tr>" : "")

									}
									else if (data.imposto.ipi.naotributado != undefined)
									{
										retorno = retorno + "<tr><td>IPI - Situação Tributaria</td><td>" + data.imposto.ipi.naotributado.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Classe cigarros/bebidas</td><td>" + data.imposto.ipi.classeEnquadramento + "</td></tr>"
										retorno = retorno + "<tr><td>CNPJ Produtor</td><td>" + data.imposto.ipi.cnpjProdutor + "</td></tr>"
										retorno = retorno + "<tr><td>Cod. selo controle IPI</td><td>" + data.imposto.ipi.codigoSelo + "</td></tr>"
										retorno = retorno + "<tr><td>Qtd. selo IPI</td><td>" + data.imposto.ipi.quantidadeSelo + "</td></tr>"
										retorno = retorno + "<tr><td>Cod Enquadramento</td><td>" + data.imposto.ipi.codigoEnquadramento + "</td></tr>"
									}

								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('PIS').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.pis != undefined)
								{


									if (data.imposto.pis.aliquota != undefined)
									{
										retorno = retorno + "<tr><td>PIS - Situação Tributaria</td><td>" + data.imposto.pis.aliquota.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.pis.aliquota.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>" + data.imposto.pis.aliquota.valorUnidade + "</td></tr>"
										if (data.imposto.pisst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.pisst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.pisst.valorAliquota + "</td></tr>"
										}


									}
									else if (data.imposto.pis.quantidade != undefined)
									{
										retorno = retorno + "<tr><td>PIS - Situação Tributaria</td><td>" + data.imposto.pis.quantidade.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.pis.quantidade.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>" + data.imposto.pis.quantidade.valorUnidade + "</td></tr>"
										if (data.imposto.pisst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.pisst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.pisst.valorAliquota + "</td></tr>"
										}
									}
									else if (data.imposto.pis.naoTributavel != undefined)
									{
										retorno = retorno + "<tr><td>PIS - Situação Tributaria</td><td>" + data.imposto.pis.naoTributavel.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.pis.naoTributavel.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>" + data.imposto.pis.naoTributavel.valorUnidade + "</td></tr>"
										if (data.imposto.pisst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.pisst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.pisst.valorAliquota + "</td></tr>"
										}
									}
									else if (data.imposto.pis.outrasOperacoes != undefined)
									{
										retorno = retorno + "<tr><td>PIS - Situação Tributaria</td><td>" + data.imposto.pis.outrasOperacoes.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.pis.outrasOperacoes.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor PIS/unidade</td><td>" + data.imposto.pis.outrasOperacoes.valorUnidade + "</td></tr>"
										if (data.imposto.pisst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.pisst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.pisst.valorAliquota + "</td></tr>"
										}
									}

								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('COFINS').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.cofins != undefined)
								{


									if (data.imposto.cofins.aliquota != undefined)
									{
										retorno = retorno + "<tr><td>COFINS - Situação Tributaria</td><td>" + data.imposto.cofins.aliquota.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.cofins.aliquota.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>" + data.imposto.cofins.aliquota.valorUnidade + "</td></tr>"
										if (data.imposto.cofinsst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.cofinsst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.cofinsst.valorAliquota + "</td></tr>"
										}


									}
									else if (data.imposto.cofins.quantidade != undefined)
									{
										retorno = retorno + "<tr><td>COFINS - Situação Tributaria</td><td>" + data.imposto.cofins.quantidade.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.cofins.quantidade.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>" + data.imposto.cofins.quantidade.valorUnidade + "</td></tr>"
										if (data.imposto.cofinsst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.cofinsst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.cofinsst.valorAliquota + "</td></tr>"
										}
									}
									else if (data.imposto.cofins.naoTributavel != undefined)
									{
										retorno = retorno + "<tr><td>COFINS - Situação Tributaria</td><td>" + data.imposto.cofins.naoTributavel.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.cofins.naoTributavel.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>" + data.imposto.cofins.naoTributavel.valorUnidade + "</td></tr>"
										if (data.imposto.cofinsst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.cofinsst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.cofinsst.valorAliquota + "</td></tr>"
										}
									}
									else if (data.imposto.cofins.outrasOperacoes != undefined)
									{
										retorno = retorno + "<tr><td>COFINS - Situação Tributaria</td><td>" + data.imposto.cofins.outrasOperacoes.situacaoTributaria.descricao + "</td></tr>"
										retorno = retorno + "<tr><td>Aliquota</td><td>" + data.imposto.cofins.outrasOperacoes.percentualAliquota + "</td></tr>"
										retorno = retorno + "<tr><td>Valor COFINS/unidade</td><td>" + data.imposto.cofins.outrasOperacoes.valorUnidade + "</td></tr>"
										if (data.imposto.cofinsst.percentualAliquota != undefined)
										{
											retorno = retorno + "<tr><td>Aliquota (ST) % </td><td>" + data.imposto.cofinsst.percentualAliquota + "</td></tr>"
										}
										else
										{
											retorno = retorno + "<tr><td>Aliquota (ST) $ </td><td>" + data.imposto.cofinsst.valorAliquota + "</td></tr>"
										}
									}

								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('ISSQN').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.issqn != undefined)
								{
									retorno = retorno + "<tr><td>Aliq. ISSQN</td><td>" + data.imposto.issqn.valorAliquota + "</td></tr>"
									retorno = retorno + "<tr><td>Exigibilidade do ISS</td><td>" + (data.imposto.issqn.indicadorExigibilidadeISS ? data.imposto.issqn.indicadorExigibilidadeISS.descricao :
										"") + "</td></tr>"
									retorno = retorno + "<tr><td>Possui incentivo fiscal</td><td>" + data.imposto.issqn.indicadorIncentivoFiscal == 1 ? "Sim" : "Não" + "</td></tr>"

								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('IPI Devolvido').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.impostoDevolvido != undefined)
								{

									retorno = retorno + "<tr><td>Perc. da Merc. Devolvida</td><td>" + data.imposto.impostoDevolvido.percentualDevolucao + "</td></tr>"
									retorno = retorno + "<tr><td>Vr IPI Devolvido</td><td>" + data.imposto.impostoDevolvido.informacaoIPIDevolvido + "</td></tr>"
								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('ICMS Ope. Interestaduais').renderWith(function(data, type, full, meta)
						{

							var retorno = '<table class="table"><thead></thead><tbody>';
							if (data.imposto != undefined)
							{
								if (data.imposto.icmsUfDestino != undefined)
								{

									retorno = retorno + "<tr><td>Per ICMS Rel UF Dest.</td><td>" + data.imposto.icmsUfDestino.valorRelativoFundoCombatePobrezaDestino + "</td></tr>"
									retorno = retorno + "<tr><td>Vr da base de  cÃ¡lc UF dest.</td><td>" + data.imposto.icmsUfDestino.valorBaseCalculoDestino + "</td></tr>"
									retorno = retorno + "<tr><td>Aliq interna da UF dest.</td><td>" + data.imposto.icmsUfDestino.percentualAliquotaInternaDestino + "</td></tr>"
									if (data.imposto.icmsUfDestino.percentualInterestadual != undefined)
									{
										retorno = retorno + "<tr><td>Aliq interestadual</td><td>" + data.imposto.icmsUfDestino.percentualInterestadual.descricao + "</td></tr>"
									}
									if (data.imposto.icmsUfDestino.percentualProvisorioPartilha != undefined)
									{
										retorno = retorno + "<tr><td>Perc prov partilha</td><td>" + data.imposto.icmsUfDestino.percentualProvisorioPartilha.descricao + "</td></tr>"
									}
									retorno = retorno + "<tr><td>Vr ICMS de part UF do dest.</td><td>" + data.imposto.icmsUfDestino.valorICMSInterestadualDestino + "</td></tr>"
									retorno = retorno + "<tr><td>Vr ICMS de part UF do remet.</td><td>" + data.imposto.icmsUfDestino.valorICMSInterestadualRemetente + "</td></tr>"
									retorno = retorno + "<tr><td>Vr ICMS rel FCP UF dest.</td><td>" + data.imposto.icmsUfDestino.percentualRelativoFundoCombatePobrezaDestino + "</td></tr>"
								}
							}


							return retorno + '</tbody></table>';
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				doisValores: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
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
				regime: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
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
				cfop: function(vm, _html, _actions)
				{
					return [

                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
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
				contasPagar: function(vm, _html, _actions)
				{

					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="vm.selected[' + data.id + ']" ng-click="vm.toggleOne(vm.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Fornecedor').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.fornecedor)
							{
								shtml = '<a id="' + data.fornecedor.id + '">' + data.fornecedor.nome + '</a>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Descrição').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.descricao)
							{
								shtml = '<span>' + data.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Data Vencimento').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataVencimento)
							{
								var date = new Date();
								var formattedDate = moment(data.dataVencimento).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Data Pagamento').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataPagamento)
							{
								var date = new Date();
								var formattedDate = moment(data.dataPagamento).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Data Emissão').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataEmissao)
							{
								var date = new Date();
								var formattedDate = moment(data.dataEmissao).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Categoria').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.categoria)
							{
								shtml = '<span>' + data.categoria.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Situação').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.situacao)
							{
								shtml = '<span>' + data.situacao.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Doc').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.valor)
							{
								shtml = '<span>' + numeral(data.valor).format('$0.0') + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Pago').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							var dValor = 0;

							if (data.listBaixa)
							{
								for (var x = 0; x < data.listBaixa.length; x++)
								{
									dValor = dValor + data.listBaixa[x].valor;
								}
								vm.selectAll = data.listBaixa
								shtml = '<a ng-click="showCase.toggleAlls(' + data.id + ', showCase.selected)"><span>' + numeral(dValor).format('$0.0') + '</span></a>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
                    ];
				},
				produtoEmpresa: function(vm, _html, _actions)
				{

					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn('codigo').withTitle('Codigo').withOption('width', '30px'),
                        DTColumnBuilder.newColumn(null).withTitle('Nome Produto').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId.produto + '</p>';
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('NCM').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId.ncm ? data.prodId.ncm : "" + '</p>';
						}).withOption('width', '50px'),
                        DTColumnBuilder.newColumn(null).withTitle('Cod Barra').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId.cdBarras ? data.prodId.cdBarras : "" + '</p>';
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Data Cadastro').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId.dataCreate + '</p>';
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Estoque Atual').renderWith(function(data, type, full, meta)
						{
							var estoqueList = "0";
							var html = "";
							var stqAtual = 0;
							var stqMin = 0;
							var stqMax = 0;
							var pstqAtual = 0;
							var pstqMin = 0;
							var pstqMax = 0;
							var porEsto = 0;
							var sClass = "";
							if (data.estoqueList.length > 0)
							{
								for (var x = 0; x < data.estoqueList.length; x++)
								{
									if (data.estoqueList[x].estoqueTypeEnumValue == 1)
									{
										stqMin = (data.estoqueList[x].quant ? data.estoqueList[x].quant : 0);
									}
									if (data.estoqueList[x].estoqueTypeEnumValue == 4)
									{
										stqAtual = (data.estoqueList[x].quant ? data.estoqueList[x].quant : 0);
									}
									if (data.estoqueList[x].estoqueTypeEnumValue == 3)
									{
										stqMax = (data.estoqueList[x].quant ? data.estoqueList[x].quant : 0);
									}
								}
							}
							if ((stqAtual) && (stqAtual > 0))
							{
								pstqAtual = 100 - (((stqMax - stqAtual) / stqMax) * 100)
							}

							if ((stqMin) && (stqMin > 0))
							{
								pstqMin = ((((stqMax - stqMin) / stqMax) * 100) - 100) * -1;
							}
							if (pstqAtual < pstqMin)
							{
								sClass = "progress-bar-danger"
							}
							else if (pstqAtual > pstqMin && pstqAtual < stqMax)
							{
								sClass = "progress-bar-success"
							}
							else if (pstqAtual > stqMax)
							{
								sClass = "progress-bar-warning"
							}
							else
							{
								sClass = "progress-bar-info"
							}
							porEsto = (stqAtual * 100) / stqMax;
							html = html + '<div class="progress">'
							html = html + '<div class="progress-bar ' + sClass + ' " role="progressbar" style="width: ' +
								pstqAtual + '%" aria-valuenow="' + pstqAtual + '" aria-valuemin="0" aria-valuemax="100" >' + pstqAtual + '%</div>'
							html = html + '</div>'



							return html;

						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Tributação').renderWith(function(data, type, full, meta)
						{

							return '<p>' + (data.tributacao ? data.tributacao.descricao : ' ') + '</p>';
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn('informAdicionaisParaNFe').withTitle('informAdicionaisParaNFe').notVisible(),
                        DTColumnBuilder.newColumn('anotainternas').withTitle('anotainternas').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('unidTributada').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId ? (data.prodId.uniMed ? data.prodId.uniMed.sigla : "") : "" + '</p>';

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Categoria').renderWith(function(data, type, full, meta)
						{
							return '<p>' + (data.categoria ? (data.categoria.categoria ? data.categoria.categoria : "") : "") + '</p>';
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Marca').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.prodId ? (data.prodId.marca ? data.prodId.marca.marca : "") : "" + '</p>';
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn('pesoLiquido').withTitle('Peso Lé±?quido').notVisible(),
                        DTColumnBuilder.newColumn('pesoBruto').withTitle('pesobruto').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle("Estoque Min.").renderWith(function(data, type, full, meta)
						{

							var sHtml = "";
							for (var x = 0; x < data.estoqueList.length; x++)
							{
								if (data.estoqueList[x].estoqueTypeEnumValue == 2)
								{
									sHtml = '<p>' + data.estoqueList[x].quant ? data.estoqueList[x].quant : 0 + '</p>';
								}
							}

							return sHtml;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Estoque. Max').renderWith(function(data, type, full, meta)
						{

							var sHtml = "";
							for (var x = 0; x < data.estoqueList.length; x++)
							{
								if (data.estoqueList[x].estoqueTypeEnumValue == 3)
								{
									sHtml = '<p>' + data.estoqueList[x].quant ? data.estoqueList[x].quant : 0 + '</p>';
								}
							}

							return sHtml;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Estoque. Inicial').renderWith(function(data, type, full, meta)
						{

							var sHtml = "";
							for (var x = 0; x < data.estoqueList.length; x++)
							{
								if (data.estoqueList[x].estoqueTypeEnumValue == 1)
								{
									sHtml = '<p>' + data.estoqueList[x].quant ? data.estoqueList[x].quant : 0 + '</p>';
								}
							}

							return sHtml;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Margem Lucro').renderWith(function(data, type, full, meta)
						{

							return '<p>' + data.margemLucro ? data.margemLucro : 0 + '</p>';

						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Preco Venda').renderWith(function(data, type, full, meta)
						{

							var sHtml = "";
							for (var x = 0; x < data.precoList.length; x++)
							{
								if (data.precoList[x].precoTypeEnumValue == 3)
								{
									sHtml = '<p>' + data.precoList[x].valor ? data.precoList[x].valor : 0 + '</p>';
								}
							}

							return sHtml;
						}).withOption('width', '100px'),
                        DTColumnBuilder.newColumn(null).withTitle('Preco Custo').renderWith(function(data, type, full, meta)
						{

							var sHtml = "";
							for (var x = 0; x < data.precoList.length; x++)
							{
								if (data.precoList[x].precoTypeEnumValue == 2)
								{
									sHtml = '<p>' + data.precoList[x].valor ? data.precoList[x].valor : 0 + '</p>';
								}
							}

							return sHtml;
						}).withOption('width', '100px').notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
                    ];
				},
				contasReceber: function(vm, _html, _actions)
				{

					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="vm.selected[' + data.id + ']" ng-click="vm.toggleOne(vm.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Cliente').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.cliente)
							{
								shtml = '<a id="' + data.cliente.id + '">' + data.cliente.nome + '</a>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Descrição').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.descricao)
							{
								shtml = '<span>' + data.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Data Vencimento').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataVencimento)
							{
								var date = new Date();
								var formattedDate = moment(data.dataVencimento).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Data Pagamento').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataPagamento)
							{
								var date = new Date();
								var formattedDate = moment(data.dataPagamento).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Data Emissão').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataEmissao)
							{
								var date = new Date();
								var formattedDate = moment(data.dataEmissao).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Categoria').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.categoria)
							{
								shtml = '<span>' + data.categoria.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Situação').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.situacao)
							{
								shtml = '<span>' + data.situacao.descricao + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Doc').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.valor)
							{
								shtml = '<span>' + numeral(data.valor).format('$0.0') + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Valor Pago').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							var dValor = 0;

							if (data.listBaixa)
							{
								for (var x = 0; x < data.listBaixa.length; x++)
								{
									dValor = dValor + data.listBaixa[x].valor;
								}
								vm.selectAll = data.listBaixa
								shtml = '<a ng-click="showCase.toggleAlls(' + data.id + ', showCase.selected)"><span>' + numeral(dValor).format('$0.0') + '</span></a>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('observacao').withTitle('observacao').notVisible(),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Pagar').notSortable().renderWith(function(data, type, full, meta)
						{
							return "<toggle style='width : 10px' ng-model='titulo.pagarAgora" + data.id + "' " +
								'ng-change="showCase.fnPagarAgora(showCase.persons[' + data.id + '])"  style="android" on="Sim"' +
								'off="Não" onstyle="btn-success" offstyle="btn-danger"' +
								'ng-true-value="true" ng-false-value="false"></toggle>'
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '100px')
                    ];
				},
				conta: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '3px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px').notVisible(),
                        DTColumnBuilder.newColumn('descricao').withTitle('Descrição'),
                        DTColumnBuilder.newColumn(null).withTitle('Saldo').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.saldo)
							{
								shtml = '<span>' + numeral(data.saldo).format('$0.0') + '</span>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn(null).withTitle('Ultima Transação').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							if (data.dataUltLanc)
							{
								var date = new Date();
								var formattedDate = moment(data.dataUltLanc).format('DD/MM/YYYY');
								shtml = "<p><b>" + formattedDate + "<b></p>";
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('numeroConta').withTitle('Nº Conta'),
                        DTColumnBuilder.newColumn('observacao').withTitle('Observação'),
                        DTColumnBuilder.newColumn(null).withTitle('Baixas').renderWith(function(data, type, full, meta)
						{
							var shtml = "";
							var dValor = 0;

							if (data.listBaixa)
							{
								for (var x = 0; x < data.listBaixa.length; x++)
								{
									dValor = dValor + data.listBaixa[x].valorBaixa;
								}

								vm.selectAlls = data.listBaixa
								shtml = '<a ng-click="showCase.toggleAllss(showCase.persons[' + (meta.row) + '], showCase.selected)"><span>' + numeral(dValor).format('$0.0') + '</span></a>';
							}

							return shtml;
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				formaPg: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn('descricao').withTitle('Descricao'),
                        DTColumnBuilder.newColumn(null).withTitle('Dias Pagamento').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";
							if ((data.diasPg))
							{
								return '<p>' + data.diasPg.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}).notVisible(),
						DTColumnBuilder.newColumn(null).withTitle('Conta').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.conta))
							{
								return '<p>' + data.conta.descricao + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}),
                        DTColumnBuilder.newColumn(null).withTitle('Parcelamento Max').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.parcelamentoMax))
							{
								return '<p>' + data.parcelamentoMax.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}),
                        DTColumnBuilder.newColumn(null).withTitle('Tipo Doc.').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.tipoDoc) )
							{
								return '<p>' + data.tipoDoc.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}),
                        DTColumnBuilder.newColumn(null).withTitle('Parcelamento Sem Juros').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.parcelamentoSemJuros))
							{
								return '<p>' + data.parcelamentoSemJuros.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}),
                        DTColumnBuilder.newColumn('juros').withTitle('Juros'),
                        DTColumnBuilder.newColumn('taxaFixa').withTitle('Taxa Fixa').notVisible(),
                        DTColumnBuilder.newColumn('descAvista').withTitle('Desconto Avista').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Tempo Intervalo').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.qntIntervalo))
							{
								return '<p>' + data.qntIntervalo.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}).notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Intervalo').renderWith(function(data, type, full, meta)
						{
							var sDocumento = "";

							if ((data.intervalo))
							{
								return '<p>' + data.intervalo.nome + '</p>';
							}
							return '<p>' + sDocumento + '</p>';
						}).notVisible(),
                        DTColumnBuilder.newColumn('entrada').withTitle('Entrada').notVisible(),
                        DTColumnBuilder.newColumn('observacao').withTitle('Observação'),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},
				nfEntrada: function(vm, _html, _actions)
				{
					return [
                        DTColumnBuilder.newColumn(null).withTitle(_html).notSortable()
                        .renderWith(function(data, type, full, meta)
						{
							vm.selected[full.id] = false;
							return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
						}).withOption('width', '10px'),
                        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
                        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
                        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
                        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable().renderWith(_actions).withOption('width', '140px'),
                    ];
				},



			};
        }
    ]);
})();