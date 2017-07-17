(function () {
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.notaFiscal', []);

	commonAuth.factory('fNotaFiscal', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', function ($rootScope, fModels, SysMgmtData, toastr) {
		var factory = {};

        //function padrao(vm,createdRow,scope, filters,aButtons,sPosition,functionReload){
        function ajaxCall (_request) {
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

		factory.fnCreateObjectPdVendasOrcamento = function (emitente, remetente, endereco, produtos, formaPg, notaFiscal, type, _action, _tipo, financeiros) {

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
				email: remetente.emails[0].email
			}

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
                        extipi :  produtos[x].produto.prodId.excTabIPI,
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
				uf: emitente.enderecos[0].cidade ? emitente.enderecos[0].cidade.estado : "MG",
				codigoRandomico: 555,
				naturezaOperacao: '5011', //emitente.configuracao.confNFe.cfopPadrao.cfop,
				formaPagamento: notaFiscal.formapg,
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
				codigoMunicipio: emitente.enderecos[0].cidade ? emitente.enderecos[0].cidade.codIbge : "",
				tipoImpressao: {
					value: 1
				},
				tipoEmissao: {
					value: 1
				},
				digitoVerificador: 0,
				ambiente: emitente.configuracao.confNFe.ambienteEnvio,
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
				modelAction: _action
			};


			var user = "system";
			if (($rootScope.user != null) && ($rootScope.user != undefined)) {
				user = $rootScope.user.user;
			}

            ajaxCall(new qat.model.reqNotaFiscal(fModels.amont(oNFNote, _action), true, true));

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
                        extipi :  _produtos[x].produto.prodId.excTabIPI,
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
	}]);
})();