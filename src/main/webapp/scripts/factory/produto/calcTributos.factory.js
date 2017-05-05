(function() {
    'use strict';
    var commonAuth = angular.module('wdApp.ajaxCall.calcTributos', []);
    commonAuth.factory('fCalcProduto', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log', '$compile', 'dialogFactory', 'validationFactory', function($rootScope, DTOptionsBuilder, DTColumnBuilder, $log, $compile, dialogFactory, validationFactory) {

        function fnCalcTributo2(produto) {

            return { id: 10 };
        }

        return {
            fnCalcTributo: function(scope) {
                //	    /** The econtabil valorTotalDosProdutosServicos for the NFNotaInfoICMSTotal. */
                //	    private String valortotaldosprodutosservicos;
                //
                //	    /** The econtabil valorTotalFrete for the NFNotaInfoICMSTotal. */
                //	    private String valortotalfrete;
                //
                //	    /** The econtabil valorTotalSeguro for the NFNotaInfoICMSTotal. */
                //	    private String valortotalseguro;
                //
                //	    /** The econtabil valorTotalDesconto for the NFNotaInfoICMSTotal. */
                //	    private String valortotaldesconto;
                //
                //	    /** The econtabil valorTotalII for the NFNotaInfoICMSTotal. */
                //	    private String valortotalii;
                //
                //	    /** The econtabil valorTotalIPI for the NFNotaInfoICMSTotal. */
                //	    private String valortotalipi;
                //
                //	    /** The econtabil valorPIS for the NFNotaInfoICMSTotal. */
                //	    private String valorpis;
                //
                //	    /** The econtabil valorCOFINS for the NFNotaInfoICMSTotal. */
                //	    private String valorcofins;
                //
                //	    /** The econtabil outrasDespesasAcessorias for the NFNotaInfoICMSTotal. */
                //	    private String outrasdespesasacessorias;
                //
                //	    /** The econtabil valorTotalNFe for the NFNotaInfoICMSTotal. */
                //	    private String valortotalnfe;
                //
                //	    /** The econtabil valorTotalTributos for the NFNotaInfoICMSTotal. */
                //	    private String valortotaltributos;
                //Base de Cálculo
                var $vBC;
                var $qBCProd;
                var $vAliqProd;
                //ICMS - Imposto sobre Circulação de Mercadorias e Serviços
                //		NFNotaInfoICMSTotal.basecalculoicms;
                //		NFNotaInfoICMSTotal.valortotalicms;
                //		NFNotaInfoICMSTotal.valoricmsdesonerado;
                //		NFNotaInfoICMSTotal.valoricmsfundocombatepobreza;
                //		NFNotaInfoICMSTotal.valoricmspartilhadestinatario;
                //		NFNotaInfoICMSTotal.valoricmspartilharementente;
                //		NFNotaInfoICMSTotal.basecalculoicmsst;
                //		NFNotaInfoICMSTotal.valortotalicmsst;
                var $cstICMS;
                var $modBC;
                var $pRedBC;
                var $pICMS;
                var $vICMS;
                var $vICMSDeson;
                var $motDesICMS;
                var $modBCST;
                var $pMVAST;
                var $pRedBCST;
                var $vBCST;
                var $pICMSST;
                var $vICMSST;
                var $pDif;
                var $vICMSDif;
                var $vICMSOp;
                var $vBCSTRet;
                var $vICMSSTRet;
                var $pCredSN;
                var $vCredICMSSN;
                //IPI - Imposto sobre Produto Industrializado
                var $cstIPI; // (Código da Situação Tributária)
                var $clEnq;
                var $cnpjProd;
                var $cSelo;
                var $qSelo;
                var $cEnq;
                var $pIPI;
                var $qUnid;
                var $vUnid;
                var $vIPI; // = $vBC * ( $pIPI / 100 )
                //PIS - Programa de Integração Social
                var $cstPIS; // (Código da Situação Tributária)
                var $pPIS;
                var $vPIS; // = $vBC * ( $pPIS / 100 )
                //COFINS - Contribuição para o Financiamento da Seguridade Social
                var $cstCOFINS;
                var $pCOFINS;
                var $vCOFINS;
                // +----------------------------------------------------------------------+
                // |                         CALCULA O PIS                                |
                // +----------------------------------------------------------------------+
                debugger
                var _notaFiscal = scope.notaFiscal;
                var _produtos = scope.produtos;
                var _produto = {};
                var _impostoTotal = {}
                var _valorBrutoProd = 0;

                for (var x = 0; x < _produtos.length; x++) {
                    _produto = _produtos[x].produto;
                    _valorBrutoProd = (((_produto.quantidade ? _produto.quantidade : 0) * _produto.precoList[0].valor) - (_produto.desconto ? _produto.desconto : 0));
                    if (!_notaFiscal.info.total) {
                        _notaFiscal.info.total = qat.model.fnNFNotaInfoTotal({ icmsTotal: { valorPIS: 0 } }, "INSERT", $rootScope.user.user)
                    }
                    // PIS 01 - Operação Tributável (base de cálculo = valor da operação alíquota normal)
                    if (_produto.tributacao.imposto.pis.aliquota.situacaoTributaria.value == '01') {
                        _notaFiscal.info.total.icmsTotal.valorPIS = _notaFiscal.info.total.icmsTotal.valorPIS + (_valorBrutoProd * (_produto.tributacao.imposto.pis.aliquota.percentualAliquota ? _produto.tributacao.imposto.pis.aliquota.percentualAliquota / 100 : 0));
                        _produto.tributacao.imposto.pis.aliquota.valorBaseCalculo = _valorBrutoProd;
                        _produto.tributacao.imposto.pis.aliquota.valorTributo = (_valorBrutoProd * (_produto.tributacao.imposto.pis.aliquota.percentualAliquota / 100))
                        _notaFiscal.info.itens = new qat.model.itens({}, "INSERT", $rootScope.user.user);

                        var _itens = new qat.model.itens(fnCalcTributo2(_produto), "INSERT", $rootScope.user.user);
                    }
                    // PIS 02 - Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada));
                    if (_produto.tributacao.imposto.pis.aliquota.situacaoTributaria.value == '02') {
                        _notaFiscal.info.total.icmsTotal.valorPIS = _notaFiscal.info.total.icmsTotal.valorPIS + (_valorBrutoProd * (_produto.tributacao.imposto.pis.aliquota.percentualAliquota ? _produto.tributacao.imposto.pis.aliquota.percentualAliquota / 100 : 0));
                        _produto.tributacao.imposto.pis.aliquota.valorBaseCalculo = _valorBrutoProd;
                        _produto.tributacao.imposto.pis.aliquota.valorTributo = (_valorBrutoProd * (_produto.tributacao.imposto.pis.aliquota.percentualAliquota / 100))
                        _notaFiscal.info.itens = new qat.model.itens({}, "INSERT", $rootScope.user.user);

                        var _itens = new qat.model.itens(fnCalcTributo2(_produto), "INSERT", $rootScope.user.user);
                    }
                    // PIS 03 - Operação Tributável (base de cálculo = qtd vendida x alíquota por unidade de produto);
                    if (_produto.tributacao.imposto.pis.quantidade.situacaoTributaria.value == '03') {
                        ///		private DoisValores situacaoTributaria;
                        /**
                         * The econtabil quantidadeVendida for the
                         * NFNotaInfoItemImpostoPISQuantidade.
                         */
                        //private String quantidadeVendida;
                        /**
                         * The econtabil valorAliquota for the NFNotaInfoItemImpostoPISQuantidade.
                         */
                        //private String valorAliquota;
                        /**
                         * The econtabil valorTributo for the NFNotaInfoItemImpostoPISQuantidade.
                         */
                        //private String valorTributo;
                        for (var i = 0; i < _produto.produto.quantidadeTributavel; i++) {
                            scope.notaFiscal.total.icmsTotal.valorPIS = scope.notaFiscal.total.icmsTotal.valorPIS + (_produto.produto.valorUnitario * (_produto.tributacao.imposto.pis.quantidade.percentualAliquota / 100));
                        }
                        _produto.tributacao.imposto.pis.quantidade.quantidadeVendida = _produto.produto.quantidadeTributavel
                        _produto.tributacao.imposto.pis.quantidade.valorAliquota
                        _produto.tributacao.imposto.pis.quantidade.valorBaseCalculo = _produto.produto.valorTotalBruto;
                        _produto.tributacao.imposto.pis.quantidade.valorTributo = scope.notaFiscal.total.icmsTotal.valorPIS;
                    }
                    // PIS04-OperaçãoTributável(tributaçãomonofásica(alíquotazero));
                    // PIS06-OperaçãoTributável(alíquotazero);
                    // PIS07-OperaçãoIsentadaContribuição;
                    // PIS08-OperaçãoSemIncidênciadaContribuição;
                    // PIS09-OperaçãocomSuspensãodaContribuição;
                    // array com a Situação Tributária do COFINS
                    $_cstPIS = array('04', '06', '07', '08', '09');
                    if (in_array(_produto.tributacao.imposto.pis.aliquota.situacaoTributaria.value, $_cstPIS)) {
                        scope.notaFiscal.total.icmsTotal.valorPIS = scope.notaFiscal.total.icmsTotal.valorPIS + 0;
                        _produto.tributacao.imposto.pis.naoTributado.situacaoTributaria = _produto.tributacao.imposto.pis.aliquota.situacaoTributaria.value;
                        naoTributado
                    }
                    // PIS 99 - Outras operações
                    if (_produto.tributacao.imposto.pis.aliquota.situacaoTributaria.value == '99') {
                        scope.notaFiscal.total.icmsTotal.valorPIS = scope.notaFiscal.total.icmsTotal.valorPIS + 0;
                        _produto.tributacao.imposto.pis.valorBaseCalculo = 0;
                        _produto.tributacao.imposto.pis.valorTributo = 0;
                    }
                    // +----------------------------------------------------------------------+
                    // |                         CALCULA O COFINS                             |
                    // +----------------------------------------------------------------------+
                    // PIS 01 - Operação Tributável (base de cálculo = valor da operação alíquota normal)
                    if (_produto.tributacao.imposto.cofins.aliquota.situacaoTributaria.value == '01') {
                        scope.notaFiscal.total.icmsTotal.valorcofins = scope.notaFiscal.total.icmsTotal.valorcofins + (_produto.produto.valorTotalBruto * (_produto.tributacao.imposto.cofins.percentualAliquota / 100));
                        _produto.tributacao.imposto.cofins.valorBaseCalculo = _produto.produto.valorTotalBruto;
                        _produto.tributacao.imposto.cofins.valorTributo = (_produto.produto.valorTotalBruto * (_produto.tributacao.imposto.cofins.percentualAliquota / 100))
                    }
                    // PIS 02 - Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada));
                    if (_produto.tributacao.imposto.cofins.aliquota.situacaoTributaria.value == '02') {
                        scope.notaFiscal.total.icmsTotal.valorcofins = scope.notaFiscal.total.icmsTotal.valorcofins + (_produto.produto.valorTotalBruto * (_produto.tributacao.imposto.cofins.percentualAliquota / 100));
                        _produto.tributacao.imposto.cofins.valorBaseCalculo = _produto.produto.valorTotalBruto;
                        _produto.tributacao.imposto.cofins.valorTributo = (_produto.produto.valorTotalBruto * (_produto.tributacao.imposto.cofins.percentualAliquota / 100))
                    }
                    // PIS 03 - Operação Tributável (base de cálculo = qtd vendida x alíquota por unidade de produto);
                    if (_produto.tributacao.imposto.cofins.aliquota.situacaoTributaria.value == '03') {
                        for (var i = 0; i < _produto.produto.quantidadeTributavel; i++) {
                            scope.notaFiscal.total.icmsTotal.valorcofins = scope.notaFiscal.total.icmsTotal.valorcofins + (_produto.produto.valorUnitario * (_produto.tributacao.imposto.cofins.percentualAliquota / 100));
                        }
                        scope.notaFiscal.total.icmsTotal.valorcofins = scope.notaFiscal.total.icmsTotal.valorcofins + scope.notaFiscal.total.icmsTotal.valorcofins;
                        _produto.tributacao.imposto.cofins.valorBaseCalculo = _produto.produto.valorTotalBruto;
                        _produto.tributacao.imposto.cofins.valorTributo = scope.notaFiscal.total.icmsTotal.valorcofins;
                    }
                    // COFINS04-OperaçãoTributável(tributaçãomonofásica(alíquotazero));
                    // COFINS06-OperaçãoTributável(alíquotazero);
                    // COFINS07-OperaçãoIsentadaContribuição;
                    // COFINS08-OperaçãoSemIncidênciadaContribuição;
                    // COFINS09-OperaçãocomSuspensãodaContribuição;
                    // array com a Situação Tributária do COFINS
                    $_cstCOFINS = array('04', '06', '07', '08', '09');
                    if (in_array(_produto.tributacao.imposto.cofins.aliquota.situacaoTributaria.value, $_cstCOFINS)) {
                        scope.notaFiscal.total.icmsTotal.valorPIS = scope.notaFiscal.total.icmsTotal.valorPIS + 0;
                        _produto.tributacao.imposto.pis.valorBaseCalculo = 0;
                        _produto.tributacao.imposto.pis.valorTributo = 0
                    }
                    // PIS 99 - Outras operações
                    if (_produto.tributacao.imposto.cofins.aliquota.situacaoTributaria.value == '99') {
                        if (tributacao.cofins.tipoCalculoSubstTrib.value == "Porcentagem") {
                            // Cálculo percentual
                            NFNotaInfoICMSTotal.valorcofins = vBC * (tributacao.cofins.aliquotaCOFINSST / 100);
                        } else {
                            // Cálculo em valor
                            NFNotaInfoICMSTotal.valorcofins = qBCProd * tributacao.cofins.aliquotaCOFINSST;
                        }
                    }
                    // +----------------------------------------------------------------------+
                    // |                            CALCULA O IPI                             |
                    // +----------------------------------------------------------------------+
                    //	00 Entrada com Recuperação de Crédito
                    //	01 Entrada Tributável com Alíquota Zero
                    //	02 Entrada Isenta
                    //	03 Entrada Não-Tributada
                    //	04 Entrada Imune
                    //	05 Entrada com Suspensão
                    //	49 Outras Entradas
                    //	50 Saída Tributada
                    //	51 Saída Tributável com Alíquota Zero
                    //	52 Saída Isenta
                    //	53 Saída Não-Tributada
                    //	54 Saída Imune
                    //	55 Saída com Suspensão
                    //	99 Outras Saídas
                    // array com a Situação Tributária do IPI
                    $_cstIPI = array('00', '01', '02', '03', '04', '05', '49', '50', '51', '52', '53', '54', '55', '99');
                    if (in_array(tributacao.ipi.sitTributaria.value, $_cstIPI)) {
                        NFNotaInfoICMSTotal.valortotalipi = vBC * (tributacao.ipi.aliquotaIPI / 100);
                    }
                    // +----------------------------------------------------------------------+
                    // |                 CALCULA O ICMS - REGIME NORMAL                       |
                    // +----------------------------------------------------------------------+
                    // CST 000 - Tributada integralmente
                    if (tributacao.icms.sitTributaria == '000') {
                        NFNotaInfoICMSTotal.valortotalicms = vBC * (pICMS / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 010 - Tributada com cobrança do ICMS ST
                    if (tributacao.icms.sitTributaria == '010') {
                        NFNotaInfoICMSTotal.valortotalicms = vBC * (pICMS / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBC + (vBC * pMVAST / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        //valortotalicmsst
                        NFNotaInfoICMSTotal.valortotalicmsst = (vBCST - vBC) * pICMSST / 100;
                    }
                    // CST 020 - Com reduçao de base de 22 calculo
                    if (tributacao.icms.sitTributaria == '020') {
                        NFNotaInfoICMSTotal.valortotalicms = (vBC - (vBC * tributacao.icms.redBase / 100)) * pICMS / 100;
                    }
                    // CST 030 - Isenta ou não tributada e com cobrança do ICMS ST
                    if (tributacao.icms.sitTributaria == '030') {
                        NFNotaInfoICMSTotal.valortotalicms = vBC * (pICMS / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBC + (vBC * pMVAST / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        NFNotaInfoICMSTotal.valortotalicmsst = NFNotaInfoICMSTotal.basecalculoicmsst * pICMSST / 100;
                    }
                    // ST 040 - Isenta, com isençao cond
                    if (tributacao.icms.sitTributaria == '040') {
                        NFNotaInfoICMSTotal.valortotalicms = 0;
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 041 - Nao tributada
                    if (tributacao.icms.sitTributaria == '041') {
                        NFNotaInfoICMSTotal.valortotalicms = 0
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 050 - Suspensao
                    if (tributacao.icms.sitTributaria == '050') {
                        NFNotaInfoICMSTotal.valortotalicms = 0
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 051 - Diferimento, legislaçao pertinente da UF
                    if (tributacao.icms.sitTributaria == '051') {
                        NFNotaInfoICMSTotal.valortotalicms = (vBC - (vBC * tributacao.icms.redBase / 100)) * pICMS / 100;
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 060 - ICMS cobrado anteriormente por ST
                    if (tributacao.icms.sitTributaria == '060') {
                        NFNotaInfoICMSTotal.valortotalicms = 0
                        NFNotaInfoICMSTotal.basecalculoicmsst = 0
                    }
                    // CST 070 - Com redução de base de cálculo e cobrança de ICMS por ST
                    if (tributacao.icms.sitTributaria == '070') {
                        NFNotaInfoICMSTotal.valortotalicms = vBC * (pICMS / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBC + (vBC * pMVAST / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = NFNotaInfoICMSTotal.basecalculoicmsst - (NFNotaInfoICMSTotal.basecalculoicmsst * tributacao.icms.redBase / 100);
                        NFNotaInfoICMSTotal.valortotalicmsst = (NFNotaInfoICMSTotal.basecalculoicmsst - vBC) * pICMSST / 100;
                    }
                    // CST 090 - Outras
                    if (tributacao.icms.sitTributaria == '090') {
                        NFNotaInfoICMSTotal.valortotalicms = vBC * (pICMS / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = vBC + (vBC * pMVAST / 100);
                        NFNotaInfoICMSTotal.basecalculoicmsst = NFNotaInfoICMSTotal.basecalculoicmsst - (NFNotaInfoICMSTotal.basecalculoicmsst * tributacao.icms.redBase / 100);
                        NFNotaInfoICMSTotal.valortotalicmsst = (NFNotaInfoICMSTotal.basecalculoicmsst - vBC) * pICMSST / 100;
                    }
                    // +----------------------------------------------------------------------+
                    // |             CALCULA O ICMS - REGIME SIMPLES NACIONAL                 |
                    // +----------------------------------------------------------------------+
                    // CSOSN 101 - Tributada com permissao de credito
                    if (cstICMS == '101') {
                        vCredICMSSN = vBC * (pCredSN / 100);
                    }
                    // CSOSN 102 - Tributada sem permissao de credito
                    if (cstICMS == '102') {}
                    // SOSN 103 - Isençao do ICMS para faixa de receita bruta
                    if (cstICMS == '103') {}
                    // CSOSN 201 - Tributada com permissao de credito e com cobrança do ICMS ST
                    if (cstICMS == '201') {
                        vCredICMSSN = vBC * (pCredSN / 100);
                        vICMS = vBC - (vBC * pRedBC / 100);
                        vBCST = vICMS + (vICMS * pMVAST / 100);
                        vBCST = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        vICMSST = (vBCST - vICMS) * pICMSST / 100;
                    }
                    // CSOSN 202 - Tributada sem permissao de credito e com cobrança do ICMS ST
                    if (cstICMS == '202') {
                        vICMS = vBC - (vBC * pRedBC / 100);
                        vBCST = vICMS + (vICMS * pMVAST / 100);
                        vBCST = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        vICMSST = (vBCST - vICMS) * pICMSST / 100;
                    }
                    // CSOSN 203 - Isençao do ICMS para faixa de receita bruta e com cobrança de ICMS ST
                    if (cstICMS == '203') {
                        vICMS = vBC * (pICMS / 100);
                        vBCST = vBC + (vBC * pMVAST / 100);
                        vBCST = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        vICMSST = (vBCST - vICMS) * pICMSST / 100;
                    }
                    // CSOSN 300 - Imune
                    if (cstICMS == '300') {}
                    // CSOSN 400 - Nao tributada
                    if (cstICMS == '400') {}
                    // CSOSN 500 - ICMS cobrado anteriormente por ST ou por antecipaçao
                    if (cstICMS == '500') {}
                    // CSOSN 900 - Outras
                    if (cstICMS == '900') {
                        vCredICMSSN = vBC * (pCredSN / 100);
                        vICMS = vBC - (vBC * pRedBC / 100);
                        vBCST = vICMS + (vICMS * pMVAST / 100);
                        vBCST = vBCST - (vBCST * tributacao.icms.redBase / 100);
                        vICMSST = (vBCST - vICMS) * pICMSST / 100;
                    }
                }

            }

        }
    }]);
})();