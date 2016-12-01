(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.calcProduto', []);

	commonAuth.factory('fCalcProduto', ['$rootScope','SysMgmtData' ,function($rootScope,SysMgmtData){
		var factory = {};

	factory.fnCalcTributo = function(tributacao,NFNotaInfoICMSTotal,vBC){





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
		var
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

		var $cstIPI;        // (Código da Situação Tributária)
		var $clEnq;
		var $cnpjProd;
		var $cSelo;
		var $qSelo;
		var $cEnq;
		var $pIPI;
		var $qUnid;
		var $vUnid;
		var $vIPI;          // = $vBC * ( $pIPI / 100 )


		//PIS - Programa de Integração Social

		var $cstPIS;               // (Código da Situação Tributária)
		var $pPIS;
		var $vPIS;                 // = $vBC * ( $pPIS / 100 )




		//COFINS - Contribuição para o Financiamento da Seguridade Social
		var $cstCOFINS;
	    var $pCOFINS;
		var $vCOFINS;




		// +----------------------------------------------------------------------+
	    // |                         CALCULA O PIS                                |
	    // +----------------------------------------------------------------------+


			// PIS 01 - Operação Tributável (base de cálculo = valor da operação alíquota normal)
			if (tributacao.pis.pISSituaTributaria.value == '01'){

				NFNotaInfoICMSTotal.valorpis = vBC * ( tributacao.pis.valorUnidtribPIS / 100 );
			}

			// PIS 02 - Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada));
			if (tributacao.pis.pISSituaTributaria.value == '02'){

				NFNotaInfoICMSTotal.valorpis = vBC * ( tributacao.pis.valorUnidtribPIS / 100 );
			}

			// PIS 03 - Operação Tributável (base de cálculo = qtd vendida x alíquota por unidade de produto);
			if (tributacao.pis.pISSituaTributaria.value == '03'){

				NFNotaInfoICMSTotal.valorpis = vBC * tributacao.pis.valorTribPISST;
			}

			// PIS04-OperaçãoTributável(tributaçãomonofásica(alíquotazero));
			// PIS06-OperaçãoTributável(alíquotazero);
			// PIS07-OperaçãoIsentadaContribuição;
			// PIS08-OperaçãoSemIncidênciadaContribuição;
			// PIS09-OperaçãocomSuspensãodaContribuição;

			// array com a Situação Tributária do COFINS
			$_cstPIS = array('04','06','07','08','09');
			if ( in_array( tributacao.pis.pISSituaTributaria.value, $_cstPIS ) ){

				NFNotaInfoICMSTotal.valorpis = 0.00;
			}

			// PIS 99 - Outras operações
			if (tributacao.pis.pISSituaTributaria.value == '03'){
				if(tributacao.pis.tipocalculoSubstTrib.value == "Porcentagem")
				{

					NFNotaInfoICMSTotal.valorpis = vBC * ( tributacao.pis.valorTribPISST / 100 );
				}
				else
				{
					//qBCProd
					NFNotaInfoICMSTotal.valorpis = vBC * tributacao.pis.valorTribPISST
				}
		    }


		// +----------------------------------------------------------------------+
	    // |                         CALCULA O COFINS                             |
	    // +----------------------------------------------------------------------+

			// PIS 01 - Operação Tributável (base de cálculo = valor da operação alíquota normal)
			if (tributacao.cofins.sitTributaria.value == '01'){
				NFNotaInfoICMSTotal.valorcofins = vBC * ( tributacao.cofins.valorTribCOFINS / 100 );
			}

			// PIS 02 - Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada));
			if (tributacao.cofins.sitTributaria.value == '02'){

				NFNotaInfoICMSTotal.valorcofins = vBC * ( tributacao.cofins.valorTribCOFINS / 100 );
			}

			// PIS 03 - Operação Tributável (base de cálculo = qtd vendida x alíquota por unidade de produto);
			if (tributacao.cofins.sitTributaria.value == '03'){

				NFNotaInfoICMSTotal.valorcofins = qBCProd * vAliqProd ;
			}

			// COFINS04-OperaçãoTributável(tributaçãomonofásica(alíquotazero));
			// COFINS06-OperaçãoTributável(alíquotazero);
			// COFINS07-OperaçãoIsentadaContribuição;
			// COFINS08-OperaçãoSemIncidênciadaContribuição;
			// COFINS09-OperaçãocomSuspensãodaContribuição;

			// array com a Situação Tributária do COFINS
			   $_cstCOFINS = array('04','06','07','08','09');
			if ( in_array(tributacao.cofins.sitTributaria.value, $_cstCOFINS ) ){

				NFNotaInfoICMSTotal.valorcofins = 0.00;
			}

			// PIS 99 - Outras operações
			if (tributacao.cofins.sitTributaria.value == '03'){
				if(tributacao.cofins.tipoCalculoSubstTrib.value == "Porcentagem")
				{
					// Cálculo percentual
					NFNotaInfoICMSTotal.valorcofins = vBC * ( tributacao.cofins.aliquotaCOFINSST / 100 );

				}
				else
				{
					// Cálculo em valor
					NFNotaInfoICMSTotal.valorcofins = qBCProd * tributacao.cofins.aliquotaCOFINSST ;
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
			$_cstIPI = array('00','01','02','03','04','05','49','50','51','52','53','54','55','99');
			if ( in_array( tributacao.ipi.sitTributaria.value, $_cstIPI ) ){

				NFNotaInfoICMSTotal.valortotalipi = vBC  * ( tributacao.ipi.aliquotaIPI / 100 );

			}


			// +----------------------------------------------------------------------+
	        // |                 CALCULA O ICMS - REGIME NORMAL                       |
	        // +----------------------------------------------------------------------+

			   // CST 000 - Tributada integralmente
			   if (tributacao.icms.sitTributaria == '000'){

				   NFNotaInfoICMSTotal.valortotalicms = vBC  * ( pICMS / 100 );
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0

			   }

			   // CST 010 - Tributada com cobrança do ICMS ST
			   if (tributacao.icms.sitTributaria == '010'){

				   NFNotaInfoICMSTotal.valortotalicms = vBC * ( pICMS / 100 );

				   NFNotaInfoICMSTotal.basecalculoicmsst = vBC + ( vBC * pMVAST / 100);
				   NFNotaInfoICMSTotal.basecalculoicmsst = vBCST - ( vBCST *  tributacao.icms.redBase  / 100);

				   //valortotalicmsst
				   NFNotaInfoICMSTotal.valortotalicmsst = ( vBCST - vBC ) * pICMSST / 100;

			   }

			   // CST 020 - Com reduçao de base de 22 calculo
			   if (tributacao.icms.sitTributaria == '020'){

				   NFNotaInfoICMSTotal.valortotalicms = ( vBC - ( vBC *  tributacao.icms.redBase / 100) )  * pICMS / 100 ;

			   }

			   // CST 030 - Isenta ou não tributada e com cobrança do ICMS ST
			   if (tributacao.icms.sitTributaria == '030'){

				   NFNotaInfoICMSTotal.valortotalicms = vBC * ( pICMS / 100 );

				   NFNotaInfoICMSTotal.basecalculoicmsst = vBC + ( vBC * pMVAST / 100);
				   NFNotaInfoICMSTotal.basecalculoicmsst = vBCST - ( vBCST *  tributacao.icms.redBase / 100);

				   NFNotaInfoICMSTotal.valortotalicmsst =  NFNotaInfoICMSTotal.basecalculoicmsst  * pICMSST / 100;

			   }

			   // ST 040 - Isenta, com isençao cond
			   if (tributacao.icms.sitTributaria == '040'){

				   NFNotaInfoICMSTotal.valortotalicms = 0;
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0
			   }

			   // CST 041 - Nao tributada
			   if (tributacao.icms.sitTributaria == '041'){

				   NFNotaInfoICMSTotal.valortotalicms = 0
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0
			   }

			   // CST 050 - Suspensao
			   if (tributacao.icms.sitTributaria == '050'){

				   NFNotaInfoICMSTotal.valortotalicms = 0
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0
			   }


			   // CST 051 - Diferimento, legislaçao pertinente da UF
			   if (tributacao.icms.sitTributaria == '051'){

				   NFNotaInfoICMSTotal.valortotalicms = ( vBC - ( vBC *  tributacao.icms.redBase / 100) )  * pICMS / 100 ;
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0

			   }

			   // CST 060 - ICMS cobrado anteriormente por ST
			   if (tributacao.icms.sitTributaria == '060'){

				   NFNotaInfoICMSTotal.valortotalicms = 0
				   NFNotaInfoICMSTotal.basecalculoicmsst = 0
			   }

			   // CST 070 - Com redução de base de cálculo e cobrança de ICMS por ST
			   if (tributacao.icms.sitTributaria == '070'){

				   NFNotaInfoICMSTotal.valortotalicms = vBC * ( pICMS / 100 );

				   NFNotaInfoICMSTotal.basecalculoicmsst = vBC + ( vBC * pMVAST / 100);
				   NFNotaInfoICMSTotal.basecalculoicmsst = NFNotaInfoICMSTotal.basecalculoicmsst - ( NFNotaInfoICMSTotal.basecalculoicmsst *  tributacao.icms.redBase / 100);

				   NFNotaInfoICMSTotal.valortotalicmsst = ( NFNotaInfoICMSTotal.basecalculoicmsst - vBC ) * pICMSST / 100;


			   }

			   // CST 090 - Outras
			   if (tributacao.icms.sitTributaria == '090'){

				   NFNotaInfoICMSTotal.valortotalicms = vBC * ( pICMS / 100 );

				   NFNotaInfoICMSTotal.basecalculoicmsst = vBC + ( vBC * pMVAST / 100);
				   NFNotaInfoICMSTotal.basecalculoicmsst = NFNotaInfoICMSTotal.basecalculoicmsst - ( NFNotaInfoICMSTotal.basecalculoicmsst *  tributacao.icms.redBase / 100);

				   NFNotaInfoICMSTotal.valortotalicmsst = ( NFNotaInfoICMSTotal.basecalculoicmsst - vBC ) * pICMSST / 100;

			   }

			// +----------------------------------------------------------------------+
	        // |             CALCULA O ICMS - REGIME SIMPLES NACIONAL                 |
	        // +----------------------------------------------------------------------+

			   // CSOSN 101 - Tributada com permissao de credito
			   if (cstICMS == '101'){

			       vCredICMSSN = vBC  * ( pCredSN / 100 );

			   }

			   // CSOSN 102 - Tributada sem permissao de credito
			   if (cstICMS == '102'){



			   }

			   // SOSN 103 - Isençao do ICMS para faixa de receita bruta
			   if (cstICMS == '103'){ }


			   // CSOSN 201 - Tributada com permissao de credito e com cobrança do ICMS ST
			   if (cstICMS == '201'){

			       vCredICMSSN = vBC  * ( pCredSN / 100 );

				   vICMS = vBC - ( vBC * pRedBC / 100 );

				   vBCST = vICMS + ( vICMS * pMVAST / 100);
				   vBCST = vBCST - ( vBCST *  tributacao.icms.redBase / 100);


				   vICMSST = ( vBCST - vICMS ) * pICMSST / 100;

			   }

			   // CSOSN 202 - Tributada sem permissao de credito e com cobrança do ICMS ST
			   if (cstICMS == '202'){

			       vICMS = vBC - ( vBC * pRedBC / 100 );

				   vBCST = vICMS + ( vICMS * pMVAST / 100);
				   vBCST = vBCST - ( vBCST *  tributacao.icms.redBase / 100);

				   vICMSST = ( vBCST - vICMS ) * pICMSST / 100;

			   }

			   // CSOSN 203 - Isençao do ICMS para faixa de receita bruta e com cobrança de ICMS ST
			   if (cstICMS == '203'){

			       vICMS = vBC * ( pICMS / 100 );

				   vBCST = vBC + ( vBC * pMVAST / 100);
				   vBCST = vBCST - ( vBCST *  tributacao.icms.redBase / 100);

				   vICMSST = ( vBCST - vICMS ) * pICMSST / 100;

			   }

			   // CSOSN 300 - Imune
			   if (cstICMS == '300'){ }


			   // CSOSN 400 - Nao tributada
			   if (cstICMS == '400'){ }

			   // CSOSN 500 - ICMS cobrado anteriormente por ST ou por antecipaçao
			   if (cstICMS == '500'){ }


			   // CSOSN 900 - Outras
			   if (cstICMS == '900'){

				   vCredICMSSN = vBC  * ( pCredSN / 100 );

				   vICMS = vBC - ( vBC * pRedBC / 100 );

				   vBCST = vICMS + ( vICMS * pMVAST / 100);
				   vBCST = vBCST - ( vBCST *  tributacao.icms.redBase / 100);


				   vICMSST = ( vBCST - vICMS ) * pICMSST / 100;

			   }


    }

})();


