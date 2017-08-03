(function () {
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.notaFiscal', []);

	commonAuth.factory('fNotaFiscal', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr','$log','localStorageService', 'doisValorFactory', function ($rootScope, fModels, SysMgmtData, toastr,$log,localStorageService, doisValorFactory) {
		var factory = {};

        //function padrao(vm,createdRow,scope, filters,aButtons,sPosition,functionReload){
        function ajaxCall (_request,_fnCallBack) {
            var initLoad = true; //used to ensure not calling server multiple times
            SysMgmtData.processPostPageData("main/api/request", {
                url: "vendas/api/nfSaidas/insert",
                token: $rootScope.authToken,
                request: _request
            }, function (res) {
				if(_fnCallBack)
					_fnCallBack(res)
				else
				{
					if (res.operationSuccess == true) {
						initLoad = true;
						toastr.success('Deu Certo seu tanga.', 'Sucess');
					}
				}
            });

        }
        factory.fnCreateObjectPdVendas = function (scope,vm,url,_action,_fnCallBack) {

            scope.countrySelected = function (selected) {

				if (selected) {

					scope.pessoa = selected.originalObject;
					scope.visibled = true;

					scope.popovers = {
						"html": "<div>Hello Popover<br />This is a multiline message!</div>",
						"title": "Informação",
						"animation": 'am-flip-x',
						"content": " " + scope.pessoa.nome + " " +
							" " + scope.pessoa.nome + " " +
							" " + scope.pessoa.nome + " " +
							" " + scope.pessoa.nome + " " +
							" " + scope.pessoa.nome + " " +
							" " + scope.pessoa.nome + " "
					};

				} else {
					console.log('cleared');
				}
			};

			SysMgmtData.processPostPageData("main/api/request", {
				url: "pessoa/api/cliente/fetchPage",
				token: $rootScope.authToken,
				request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
			}, function (res) {
				//  //debugger
				scope.cliente = res.clienteList;
            });

            scope.calcProd = function (quant, valor) {
				return quant * valor;
			}

			scope.$watch("financeiros", function () {
				var cout = 0
				for (var x = 0; x < scope.financeiros.length; x++) {
					cout = parseFloat(cout, 10) + parseFloat(scope.financeiros[x].valor)
				}
				scope.total = cout;
			}, true);

			function teste() {
				var cout = 0
				for (var x = 0; x < scope.produtos.length; x++) {
					cout = parseFloat(cout, 10) + parseFloat((scope.produtos[x].produto.quantidade * scope.produtos[x].produto.precoList[0].valor) - scope.produtos[x].produto.desconto)
				}
				scope.totals = cout;
				scope.notaFiscalSaida.vrtotal = (cout + parseFloat(scope.notaFiscalSaida.frete.vrFrete)) - parseFloat(scope.notaFiscalSaida.vrDesconto)
				scope.financeiros[0].valor = (cout + parseFloat(scope.notaFiscalSaida.frete.vrFrete)) - parseFloat(scope.notaFiscalSaida.vrDesconto);
			}

			scope.$watch("produtos", function () {
				teste();
			}, true);

			scope.$watch("notaFiscalSaida.frete.vrFrete", function () {
				teste();
			}, true);

			scope.$watch("notaFiscalSaida.vrDesconto", function () {
				teste();
			}, true);

			scope.calcProdTotal = function () {
				var total = 0

				for (var x = 0; x < scope.financeiros.length; x++) {

				}

				return total

			}


			scope.createForm2 = function () {

				scope.produtos.push({
					nome: 'form1' + (scope.produtos.length + 1),
					produto: {
						quantidade: 0,
						desconto: 0
					}
				});

			};

			scope.createForm3 = function () {

				scope.financeiros.push({
					nome: 'formFinc' + (scope.financeiros.length + 1),
					financeiro: {
						valor: 0
					}
				});

				for (var x = 0; x < scope.financeiros.length; x++) {
					scope.financeiros[x].financeiro.valor = parseFloat(scope.notaFiscalSaida.vrtotal) / (parseFloat(scope.financeiros.length));
				}

			};
			scope.somarValorParcela = function(parcela,parcelaSemJ,juros,valor)
			{
				if(parcela < parcelaSemJ)
					return valor
				else
				{
					return valor + ((valor * juros)/100)
				}
			}

			scope.somarDtVenciParcela = function(parcela,intervalo,tempo,entrada,carencia)
			{
				debugger
				if(intervalo && tempo)
				{
					if(intervalo.toLowerCase() == "dias")
					{
						return (new Date()).setDate( new Date().getDate() + (parcela * tempo))
					}
					else if(intervalo.toLowerCase() == "quinzena")
					{

					}
					else if(intervalo.toLowerCase() == "meses")
					{
						return (new Date()).setMonth( new Date().getMonth() + (parcela * tempo))
					}
					else if(intervalo.toLowerCase() == "ano")
					{

					}
				}
			}

			scope.getFormaPagamento = function(item,model)
			{
				debugger
				scope.notaFiscalSaida.vrtotal
				var iParcelas = parseInt(item.parcelamentoMax.value,10);
				scope.financeiros =[];
				var dVrParcela = scope.notaFiscalSaida.vrtotal /iParcelas;
				for(var x = 0;x< iParcelas;x++)
				{
					scope.financeiros.push({valor: scope.somarValorParcela(x,item.parcelamentoSemJuros.value,item.juros,dVrParcela), dataVencimento : scope.somarDtVenciParcela((x+1),item.intervalo.descricao,item.qntIntervalo,item.entrada,item.diasPg),tipoDoc : item.tipoDoc ,pagarAgora:true})
				}
				console.log(scope.financeiros)
			}

			scope.forms = [{
				id: 0,
				produto: "",
				ddd: 'form1',
				notaFiscalSaidaItens: {}
			}];
			scope.count = 0;


			scope.changeProd = function (form) {
				//debugger
				console.log(form);

				for (var x = 0; scope.produtos.length > x; x++) {
					if (scope.produtos[x].id == form.produto) {
						form.quantidade = 100;
					}
				}
			}

			var fnFunction = function () {
				//debugger
			}
		/*	$inputaction = $('#teste')
			$inputaction.inputaction({
				confirmAction: fnFunction,
				model: scope.cliente,
				fullData: {},
				propertyName: 'name'
			});

*/
			doisValorFactory.pedidoVendas(scope);


			scope.deleteForm = function (formScope) {


				delete scope.forms(formScope);
			}

			scope.titulo.pagarAgora = false;

			scope.formatterDate = function (iDate) {
				return $filter('date')(new Date(iDate), 'dd/MM/yyyy');
			};

			scope.today = function () {
				scope.dt = new Date();
			};
			scope.today();

			scope.clear = function () {
				scope.dt = null;
			};

			scope.inlineOptions = {
				customClass: getDayClass,
				minDate: new Date(),
				showWeeks: true
			};

			scope.dateOptions = {
				dateDisabled: disabled,
				formatYear: 'yy',
				maxDate: new Date(2020, 5, 22),
				minDate: new Date(),
				startingDay: 1
			};

			// Disable weekend selection
			function disabled(data) {
				var date = data.date,
					mode = data.mode;
				return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
			}

			scope.toggleMin = function () {
				scope.inlineOptions.minDate = scope.inlineOptions.minDate ? null : new Date();
				scope.dateOptions.minDate = scope.inlineOptions.minDate;
			};

			scope.toggleMin();

			scope.open1 = function () {

				scope.popup1.opened = true;
			};

			scope.open2 = function () {

				scope.popup2.opened = true;
			};

			scope.open3 = function () {

				scope.popup3.opened = true;
			};

			scope.setDate = function (year, month, day) {
				scope.dt = new Date(year, month, day);
			};

			scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			scope.format = scope.formats[1];
			scope.altInputFormats = ['M!/d!/yyyy'];

			scope.popup1 = {
				opened: false
			};

			scope.popup2 = {
				opened: false
			};

			scope.popup3 = {
				opened: false
			};

			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			var afterTomorrow = new Date();
			afterTomorrow.setDate(tomorrow.getDate() + 1);
			scope.events = [{
				date: tomorrow,
				status: 'full'
			}, {
				date: afterTomorrow,
				status: 'partially'
			}];

			function getDayClass(data) {
				var date = data.date,
					mode = data.mode;
				if (mode === 'day') {
					var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

					for (var i = 0; i < scope.events.length; i++) {
						var currentDay = new Date(scope.events[i].date).setHours(0, 0, 0, 0);

						if (dayToCheck === currentDay) {
							return scope.events[i].status;
						}
					}
				}

				return '';
            }

            scope.savePedidoVenda = function () {


            /*    if(scope.financeiro.pagarAgora)
                    {
                        scope.financeiro.listBaixa[0].dataBaixa = scope.titulo ? scope.titulo.dataPagamento.getTime() : (new Date()).getTime();
                        scope.financeiro.listBaixa[0].observacao = "";
                        scope.financeiro.listBaixa[0].juros  = 0;
                        scope.financeiro.listBaixa[0].multa = 0;
                        scope.financeiro.listBaixa[0].desconto = 0;

                        fModels.amont(scope.financeiro.listBaixa[0],"INSERT");
                    }

                    scope.financeiro.situacao = { id : 392}
                    var oObject = fModels.amont(qat.model.fnFormaReceber(scope.financeiro,"INSERT"),"INSERT");


                    SysMgmtData.processPostPageData("main/api/request", {
                        url: "financeiro/api/contasReceber/insert",
                        token: $rootScope.authToken,
                        request: new qat.model.reqContasReceber(oObject, true, true)
                    }, function(res) {
                        fnCallBack(res,scope);
                    }); */

            factory.fnCreateObjectPdVendasOrcamento(localStorageService.get('empresa'), scope.pessoa, scope.endereco, scope.produtos, scope.formaPg, scope.notaFiscalSaida, 1, 'INSERT', 1001, scope.financeiros,_fnCallBack);
			};


        }

		factory.fnCreateObjectPdVendasOrcamento = function (emitente, remetente, endereco, produtos, formaPg, notaFiscal, type, _action, _tipo, financeiros,_fnCallBack) {

			_action = "INSERT";
			var oEmitente = {
				id: null,
				cnpj: null,
				cpf: null,
				razaosocial: emitente.razao,
				nomefantasia: emitente.nome,
				endereco: emitente.enderecos ? qat.model.fnEndereco(emitente.enderecos[0], 'INSERT') : null,
				inscricaoestadual: null,
				inscricaoestadualsubstituicaotributaria: null,
				inscricaomunicipal: null,
				classificacaonacionalatividadeseconomicas: null,
				modelAction: _action
					// regimetributario: emitente.regime,

			}

			if(emitente.documentos)
			{
				for (var x = 0; x < emitente.documentos.length; x++) {
					if (emitente.documentos[x].documentoTypeEnumValue == 1) {
						oEmitente.cnpj = emitente.documentos[x].numero;
					} else if (emitente.documentos[x].documentoTypeEnumValue == 2) {
						oEmitente.cpf = emitente.documentos[x].numero;
					} else if (emitente.documentos[x].documentoTypeEnumValue == 10) {
						oEmitente.inscricaoestadual = emitente.documentos[x].numero;
					} else if (emitente.documentos[x].documentoTypeEnumValue == 12) {
						oEmitente.inscricaoestadualsubstituicaotributaria = emitente.documentos[x].numero;
					} else if (emitente.documentos[x].documentoTypeEnumValue == 3) {
						oEmitente.inscricaomunicipal = emitente.documentos[x].numero;
					}
				}
			}

			var oDestinatario = {
				id: null,
				cnpj: null,
				cpf: null,
				idEstrangeiro: null,
				razaoSocial: remetente.nome,
				endereco: remetente.endereco,
				indicadorIEDestinatario: {
					id: 1
				},
				inscricaoEstadual: null,
				inscricaoSuframa: null,
				inscricaoMunicipal: null,
				modelAction: _action,
				email: remetente.emails ? remetente.emails[0].email : null
			}

			if(remetente.documentos)
			{
				for (var x = 0; x < remetente.documentos.length; x++) {
					if (remetente.documentos[x].documentoTypeEnumValue == 1) {
						oDestinatario.cnpj = remetente.documentos[x].numero;
					} else if (remetente.documentos[x].documentoTypeEnumValue == 2) {
						oDestinatario.cpf = remetente.documentos[x].numero;
					} else if (remetente.documentos[x].documentoTypeEnumValue == 15) {
						oDestinatario.idEstrangeiro = remetente.documentos[x].numero;
					} else if (remetente.documentos[x].documentoTypeEnumValue == 10) {
						oDestinatario.inscricaoEstadual = remetente.documentos[x].numero;
					} else if (remetente.documentos[x].documentoTypeEnumValue == 11) {
						oDestinatario.inscricaoSuframa = remetente.documentos[x].numero;
					} else if (remetente.documentos[x].documentoTypeEnumValue == 3) {
						oDestinatario.inscricaoMunicipal = remetente.documentos[x].numero;
					}
				}
			}
			var oEndEntrega = null;
			if ((endereco == null) || (endereco == undefined)) {
				oEndEntrega = remetente.enderecos[0];
			} else {
				oEndEntrega = endereco;
			}
			if (oEndEntrega) {
				var oEntrega = {
					id: null,
					cnpj: null,
					cpf: null,
					logradouro: oEndEntrega.logradouro,
					numero: oEndEntrega.numero,
					complemento: oEndEntrega.complemento,
					bairro: oEndEntrega.bairro,
					codigomunicipio: oEndEntrega.codIbge,
					nomemunicipio: oEndEntrega.cidade.nome,
					modelAction: _action,
					uf: oEndEntrega.cidade.estado.abreviacao
				}
			}
			var oItens = [];
            var oIten = {
                id : null,
                numeroItem : 0,
                produto :  {
                        id  : null,
                        codigo:  null,
                        codigoDeBarras:  null,
                        descricao:  null,
                        ncm:  null,
                        nomeclaturaValorAduaneiroEstatistica:  null,
                        codigoEspecificadorSituacaoTributaria:  null,
                        extipi :  null,
                        cfop :  null,
                        unidadeComercial :  null,
                        quantidadeComercial :  null,
                        valorUnitario :  null,
                        valorTotalBruto :  null,
                        codigoDeBarrasTributavel :  null,
                        unidadeTributavel :  null,
                        quantidadeTributavel :  null,
                        valorUnitarioTributavel :  null,
                        valorFrete :  null,
                        valorSeguro :  null,
                        valorDesconto :  null,
                        valorOutrasDespesasAcessorias :  null,
                        compoeValorNota :  null,
                        declaracoesImportacao :  null,
                        detalhesExportacao :  null,
                        numeroPedidoCliente :  null,
                        numeroPedidoItemCliente :  null,
                        numeroControleFCI :  null,
                        veiculo :  null,
                        medicamentos :  null,
                        armamentos :  null,
                        combustivel :  null,
                        numeroRECOPI :  null
                    },

                imposto : null,
                impostoDevolvido : null,
                informacoesAdicionais : null
            }


			var oDuplicatas = [];
			var oDuplicata = {
				numeroDuplicata: null,
				dataVencimento: null,
				valorDuplicata: null,
				receberAgora: null,
				tipoDoc: null

			}

			for (var x = 0; x < financeiros.length; x++) {
				oDuplicata.numeroDuplicata = financeiros[x].numero;
				oDuplicata.dataVencimento = financeiros[x].dataVencimento;
				oDuplicata.valorDuplicata = financeiros[x].valor;
				oDuplicata.receberAgora = financeiros[x].receberAgora;
				oDuplicata.tipoDoc = financeiros[x].tipoDoc;
				oDuplicatas.push(fModels.amont(oDuplicata, 'INSERT'));
			}


			for (var x = 0; x < produtos.length; x++) {
                oIten = {};
                oIten.numeroItem = x,
                oIten.produto =  {
                        id  : null,
                        codigo:  produtos[x].produto.codigo,
                        codigoDeBarras:  produtos[x].produto.prodId.cdBarras,
                        descricao:  produtos[x].produto.prodId.produto,
                        ncm:  produtos[x].produto.prodId.ncm ? produtos[x].produto.prodId.ncm : "1111111",
                        nomeclaturaValorAduaneiroEstatistica:  null,
                        codigoEspecificadorSituacaoTributaria:  null,
                        extipi :  produtos[x].produto.prodId.excTabIPI ? produtos[x].produto.prodId.excTabIPI.descricao : null,
                        cfop :  produtos[x].tributacao ? produtos[x].tributacao.cfop : "5400",
                        unidadeComercial :  produtos[x].produto.prodId.uniMed ? produtos[x].produto.prodId.uniMed.sigla : "UN",
                        quantidadeComercial :  produtos[x].produto.quantidade,
                        valorUnitario :  produtos[x].produto.precoList[0].valor,
                        valorTotalBruto :  (produtos[x].produto.quantidade * produtos[x].produto.precoList[0].valor),
                        codigoDeBarrasTributavel :  null,
                        unidadeTributavel :  produtos[x].produto.prodId.uniMed ? produtos[x].produto.prodId.uniMed.sigla : "UN",
                        quantidadeTributavel :  produtos[x].produto.quantidade,
                        valorUnitarioTributavel :   produtos[x].produto.precoList[0].valor,
                        valorFrete :  0,
                        valorSeguro :  0,
                        valorDesconto :  produtos[x].produto.desconto,
                        valorOutrasDespesasAcessorias :  0,
                        compoeValorNota :  null,
                        declaracoesImportacao :  null,
                        detalhesExportacao :  null,
                        numeroPedidoCliente :  null,
                        numeroPedidoItemCliente :  null,
                        numeroControleFCI :  null,
                        veiculo :  null,
                        medicamentos :  null,
                        armamentos :  null,
                        combustivel :  null,
                        numeroRECOPI :  null,
                        modelAction: 'INSERT',
                        createUser: "System",
                        createDateUTC: (new Date()).getTime(),
                        modifyUser: "System",
                        modifyDateUTC: (new Date()).getTime()
                    },

                oIten.imposto = null,
                oIten.impostoDevolvido = null,
                oIten.informacoesAdicionais = null

				oItens.push(fModels.amont(oIten, 'INSERT'));
			}

			var oInfosuplementar = {
				//   id                              : null

			}

			var oTransporte = {
				id: null,
				modalidadefrete: notaFiscal.frete.tipoFrete,
				modelAction: _action,
				transportador: null,
				icmstransporte: null,
				veiculo: null,
				reboques: null,
				vagao: null,
				balsa: null
			}

			var oIcmstotal = {
				id: null,
				baseCalculoICMS: notaFiscal.vrtotal,
				valorTotalICMS: null,
				valorICMSDesonerado: null,
				valorICMSFundoCombatePobreza: null,
				valorICMSPartilhaDestinatario: null,
				valorICMSPartilhaRementente: null,
				baseCalculoICMSST: null,
				valorTotalICMSST: null,
				valorTotalDosProdutosServicos: null,
				valorTotalFrete: notaFiscal.frete.vrFrete,
				valorTotalSeguro: null,
				valorTotalDesconto: notaFiscal.vrDesconto,
				valorTotalII: null,
				valorTotalIPI: null,
				valorPIS: null,
				valorCOFINS: null,
				outrasDespesasAcessorias: null,
				valorTotalNFe: notaFiscal.vrtotal,
				modelAction: _action,
				valorTotalTributos: null

			}

			var oTotal = {
				id: null,
				icmsTotal: fModels.amont(qat.model.fnNFNotaInfoICMSTotal(oIcmstotal, _action), _action),
				issqnTotal: null,
				retencoesTributos: null,
				modelAction: _action
			}


			var oNFNotaInfoIdentificacao = {
				id: null,
				uf: emitente.enderecos[0] ? emitente.enderecos[0].cidade ? emitente.enderecos[0].cidade.estado : "MG" : null,
				codigoRandomico: 555,
				naturezaOperacao: '5011', //emitente.configuracao.confNFe.cfopPadrao.cfop,
				formaPagamento: new qat.model.FormaPg(notaFiscal.formapg, _action,$rootScope.user.user,$log),
				modelo: {
					id: 1
				}, //emitente.configuracao.confNFe.modelo.value,
				serie: {
					id: 1
				}, //emitente.configuracao.confNFe.serieEnvio,
				numeroNota: null,
				dataHoraEmissao: null,
				dataHoraSaidaOuEntrada: null,
				tipo: {
					id: 5
				},
				identificadorLocalDestinoOperacao: {
					value: 1
				},
				codigoMunicipio: emitente.enderecos[0] ? emitente.enderecos[0].cidade ? emitente.enderecos[0].cidade.codIbge : "" : "",
				tipoImpressao: {
					value: 1
				},
				tipoEmissao: {
					value: 1
				},
				digitoVerificador: 0,
				ambiente: {id : emitente.configuracao.confNFe.ambienteEnvio ? emitente.configuracao.confNFe.ambienteEnvio.id : null},
				finalidade: {
					value: 1
				},
				operacaoConsumidorFinal: {
					value: 1
				},
				indicadorPresencaComprador: {
					value: 1
				},
				programaEmissor: {
					value: 1
				},
				versaoEmissor: "3.10",
				dataHoraContigencia: null,
				justificativaEntradaContingencia: null,
				referenciadas: null,
				modelAction: _action
			}


			//NFNote

			var oNFNotaInfo = {
				id: null,
				identificador: '10',
				versao: '3.4',
				identificacao: fModels.amont(qat.model.fnNFNotaInfoIdentificacao(oNFNotaInfoIdentificacao, _action), _action),
				emitente: fModels.amont(qat.model.fnNFNotaInfoEmitente(oEmitente, _action), _action),
				avulsa: null,
				destinatario: fModels.amont(qat.model.fnNFNotaInfoDestinatario(oDestinatario, _action), _action),
				retirada: null,
				entrega: oEntrega ? fModels.amont(qat.model.fnNFNotaInfoLocal(oEntrega, _action), _action) : null,
				pessoasautorizadasdownloadnfe: null,
				itens: oItens,
				total: fModels.amont(qat.model.fnNFNotaInfoTotal(oTotal, _action), _action),
				transporte: fModels.amont(qat.model.fnNFNotaInfoTransporte(oTransporte, _action), _action),
				cobranca: {
					duplicatas: fModels.amont(oDuplicatas, _action)
				},
				pagamentos: null,
				informacoesadicionais: null,
				exportacao: null,
				compra: null,
				cana: null,
				modelAction: _action
			}


			//NFNote
			var oNFNote = {
				identificadorlocal: null,
				info: fModels.amont(qat.model.fnNFNotaInfo(oNFNotaInfo, _action), _action),
				infosuplementar: {},
				assinatura: {
					value: 'teste'
				},
				tipo: {
					id: 1003
				},
				modelAction: _action,
				historico : [ new qat.model.NFHistorico({tipoNFEnum : "PEDIDOVENDAS"}, "INSERT",$rootScope.user.user,$log)]
			};


			var user = "system";
			if (($rootScope.user != null) && ($rootScope.user != undefined)) {
				user = $rootScope.user.user;
			}

            ajaxCall(new qat.model.reqNotaFiscal(fModels.amont(oNFNote, _action), true, true),_fnCallBack);

		}

		factory.fnCreateObjectNFSaida = function (_emitente,_notaFiscal,_produtos,_financeiros,_endereco, _action) {
			//debugger


            _action = "INSERT";
            var oEmitente = {
                id: null,
                cnpj: null,
                cpf: null,
                razaosocial: _emitente.razao,
                nomefantasia: _emitente.nome,
                endereco: _emitente.enderecos ? qat.model.fnEndereco(_emitente.enderecos[0], 'INSERT') : null,
                inscricaoestadual: null,
                inscricaoestadualsubstituicaotributaria: null,
                inscricaomunicipal: null,
                classificacaonacionalatividadeseconomicas: null,
                modelAction: _action
                    // regimetributario: emitente.regime,

            }


            for (var x = 0; x < _emitente.documentos.length; x++) {
                if (_emitente.documentos[x].documentoTypeEnumValue == 1) {
                    oEmitente.cnpj = _emitente.documentos[x].numero;
                } else if (_emitente.documentos[x].documentoTypeEnumValue == 2) {
                    oEmitente.cpf = _emitente.documentos[x].numero;
                } else if (_emitente.documentos[x].documentoTypeEnumValue == 10) {
                    oEmitente.inscricaoestadual = _emitente.documentos[x].numero;
                } else if (_emitente.documentos[x].documentoTypeEnumValue == 12) {
                    oEmitente.inscricaoestadualsubstituicaotributaria = _emitente.documentos[x].numero;
                } else if (_emitente.documentos[x].documentoTypeEnumValue == 3) {
                    oEmitente.inscricaomunicipal = _emitente.documentos[x].numero;
                }
            }

            var oEndEntrega = null;
            if ((_endereco == null) || (_endereco == undefined)) {
                oEndEntrega = _notaFiscal.remetente.enderecos[0];
            } else {
                oEndEntrega = _endereco;
            }
            if (oEndEntrega) {
                var oEntrega = {
                    id: null,
                    cnpj: null,
                    cpf: null,
                    logradouro: oEndEntrega.logradouro,
                    numero: oEndEntrega.numero,
                    complemento: oEndEntrega.complemento,
                    bairro: oEndEntrega.bairro,
                    codigomunicipio: oEndEntrega.codIbge,
                    nomemunicipio: oEndEntrega.cidade.nome,
                    modelAction: _action,
                    uf: oEndEntrega.cidade.estado.abreviacao
                }
            }


            var oItens = [];
            var oIten = {
                id : null,
                numeroItem : 0,
                produto :  {
                        id  : null,
                        codigo:  null,
                        codigoDeBarras:  null,
                        descricao:  null,
                        ncm:  null,
                        nomeclaturaValorAduaneiroEstatistica:  null,
                        codigoEspecificadorSituacaoTributaria:  null,
                        extipi :  null,
                        cfop :  null,
                        unidadeComercial :  null,
                        quantidadeComercial :  null,
                        valorUnitario :  null,
                        valorTotalBruto :  null,
                        codigoDeBarrasTributavel :  null,
                        unidadeTributavel :  null,
                        quantidadeTributavel :  null,
                        valorUnitarioTributavel :  null,
                        valorFrete :  null,
                        valorSeguro :  null,
                        valorDesconto :  null,
                        valorOutrasDespesasAcessorias :  null,
                        compoeValorNota :  null,
                        declaracoesImportacao :  null,
                        detalhesExportacao :  null,
                        numeroPedidoCliente :  null,
                        numeroPedidoItemCliente :  null,
                        numeroControleFCI :  null,
                        veiculo :  null,
                        medicamentos :  null,
                        armamentos :  null,
                        combustivel :  null,
                        numeroRECOPI :  null
                    },

                imposto : null,
                impostoDevolvido : null,
                informacoesAdicionais : null
            }


            var oDuplicatas = [];
            var oDuplicata = {
                numeroDuplicata: null,
                dataVencimento: null,
                valorDuplicata: null,
                receberAgora: null,
                tipoDoc: null

            }

            for (var x = 0; x < _financeiros.length; x++) {
                oDuplicata.numeroDuplicata = _financeiros[x].numero;
                oDuplicata.dataVencimento = _financeiros[x].dataVencimento;
                oDuplicata.valorDuplicata = _financeiros[x].valor;
                oDuplicata.receberAgora = _financeiros[x].receberAgora;
                oDuplicata.tipoDoc = _financeiros[x].tipoDoc;
                oDuplicatas.push(fModels.amont(oDuplicata, 'INSERT'));
            }


            for (var x = 0; x < _produtos.length; x++) {
                oIten = {};
                oIten.numeroItem = x,
                oIten.produto =  {
                        id  : null,
                        codigo:  _produtos[x].produto.codigo,
                        codigoDeBarras:  _produtos[x].produto.prodId.cdBarras,
                        descricao:  _produtos[x].produto.prodId.produto,
                        ncm:  _produtos[x].produto.prodId.ncm ? _produtos[x].produto.prodId.ncm : "1111111",
                        nomeclaturaValorAduaneiroEstatistica:  null,
                        codigoEspecificadorSituacaoTributaria:  null,
                        extipi :  _produtos[x].produto.prodId.excTabIPI ?  _produtos[x].produto.prodId.excTabIPI.descricao : "",
                        cfop :  _produtos[x].tributacao ? _produtos[x].tributacao.cfop : "5400",
                        unidadeComercial :  _produtos[x].produto.prodId.uniMed ? _produtos[x].produto.prodId.uniMed.sigla : "UN",
                        quantidadeComercial :  _produtos[x].produto.quantidade,
                        valorUnitario :  _produtos[x].produto.precoList[0].valor,
                        valorTotalBruto :  (_produtos[x].produto.quantidade * _produtos[x].produto.precoList[0].valor),
                        codigoDeBarrasTributavel :  null,
                        unidadeTributavel :  _produtos[x].produto.prodId.uniMed ? _produtos[x].produto.prodId.uniMed.sigla : "UN",
                        quantidadeTributavel :  _produtos[x].produto.quantidade,
                        valorUnitarioTributavel :   _produtos[x].produto.precoList[0].valor,
                        valorFrete :  0,
                        valorSeguro :  0,
                        valorDesconto :  _produtos[x].produto.desconto,
                        valorOutrasDespesasAcessorias :  0,
                        compoeValorNota :  null,
                        declaracoesImportacao :  null,
                        detalhesExportacao :  null,
                        numeroPedidoCliente :  null,
                        numeroPedidoItemCliente :  null,
                        numeroControleFCI :  null,
                        veiculo :  null,
                        medicamentos :  null,
                        armamentos :  null,
                        combustivel :  null,
                        numeroRECOPI :  null,
                        modelAction: 'INSERT',
                        createUser: "System",
                        createDateUTC: (new Date()).getTime(),
                        modifyUser: "System",
                        modifyDateUTC: (new Date()).getTime()
                    },

                oIten.imposto = null,
                oIten.impostoDevolvido = null,
                oIten.informacoesAdicionais = null

                oItens.push(fModels.amont(oIten, 'INSERT'));
            }


            var oNFNotaInfo = {
                id: null,
                identificador: '10',
                versao: '3.4',
                identificacao: fModels.amont(qat.model.fnNFNotaInfoIdentificacao(_notaFiscal.info.identificacao, _action), _action),
                emitente: fModels.amont(qat.model.fnNFNotaInfoEmitente(oEmitente, _action), _action),
                avulsa: null,
                destinatario: fModels.amont(qat.model.fnNFNotaInfoDestinatario(_notaFiscal.info.destinatario, _action), _action),
                retirada: null,
                entrega: oEntrega ? fModels.amont(qat.model.fnNFNotaInfoLocal(oEntrega, _action), _action) : null,
                pessoasautorizadasdownloadnfe: null,
                itens: oItens,
                total: fModels.amont( _notaFiscal.info.total ? qat.model.fnNFNotaInfoTotal(_notaFiscal.info.total, _action) : {}, _action),
                transporte: fModels.amont(qat.model.fnNFNotaInfoTransporte(_notaFiscal.info.transporte, _action), _action),
                cobranca: {
                    duplicatas: fModels.amont(oDuplicatas, _action)
                },
                pagamentos: null,
                informacoesadicionais: null,
                exportacao: null,
                compra: null,
                cana: null,
                modelAction: _action
            }


            //NFNote
            var oNFNote = {
                identificadorlocal: null,
                info: fModels.amont(qat.model.fnNFNotaInfo(oNFNotaInfo, _action), _action),
                infosuplementar: {},
                assinatura: {
                    value: 'teste'
                },
                tipo: {
                    id: 1001
				},
				historico : [ new qat.model.NFHistorico({tipoNFEnum : "PEDIDOVENDAS"}, "INSERT",$rootScope.user.user,$log)],
                modelAction: _action
            };

            ajaxCall(new qat.model.reqNotaFiscal(fModels.amont(oNFNote, _action), true, true));

		}

		factory.ajaxCalls = function (_request) {
            var initLoad = true; //used to ensure not calling server multiple times
			SysMgmtData.processPostPageData("main/api/request", {
                url: "vendas/api/nfSaidas/insert",
                token: $rootScope.authToken,
                request: _request
            }, function (res) {

                if (res.operationSuccess == true) {
                    initLoad = true;
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                }
            });
		}

		return factory;
    }

]);

})();