(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.tributacao', []);

	commonAuth.factory('fTributacao', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(tributacao,action,url,callBack){
      var oObject = fModels.amont(produtoEmpresa,action);

('00', '00: Tributada integralmente','Tributada integralmente',22,6, 1477075035443, 'System'),
     ('10', '10: Tributada com cobr. por subst. trib.','10: Tributada com cobr. por subst. trib.',22,6, 1477075035443, 'System'),
     ('20', '20: Com redução de base de cálculo','20: Com redução de base de cálculo',22,6, 1477075035443, 'System'),
     ('30', '30: Isenta ou não trib com cobr por subst trib','30: Isenta ou não trib com cobr por subst trib',22,6, 1477075035443, 'System'),
     ('40', '40: Isenta','40: Isenta',22,6, 1477075035443, 'System'),
     ('41', '41: Não tributada','41: Não tributada',22,6, 1477075035443, 'System'),
     ('50', '50: Suspesão','50: Suspesão',22,6, 1477075035443, 'System'),
     ('51', '51: Diferimento','51: Diferimento',22,6, 1477075035443, 'System'),
     ('60', '60: ICMS cobrado anteriormente por subst trib','60: ICMS cobrado anteriormente por subst trib',22,6, 1477075035443, 'System'),
     ('70', '70: Redução de Base Calc e cobr ICMS por subst trib','70: Redução de Base Calc e cobr ICMS por subst trib',22,6, 1477075035443, 'System'),
     ('90', '90: Outros','90: Outros',22,6, 1477075035443, 'System'),
     ('10Part', 'Partilha 10: Entre UF origem e destino ou definida na legislação com Subst Trib','Entre UF origem e destino ou definida na legislação com Subst Trib',22,6, 1477075035443, 'System'),
     ('90Part', 'Partilha 90: Entre UF origem e destino ou definida na legislação - outros','Entre UF origem e destino ou definida na legislação - outros',22,6, 1477075035443, 'System'),
     ('41ST', 'ICMS ST retido em operações interestaduais com repasses do Subst Trib','ICMS ST retido em operações interestaduais com repasses do Subst Trib',22,6, 1477075035443, 'System'),
     ('101', '101: Com permissão de crédito','101: Com permissão de crédito',21,6, 1477075035443, 'System'),
     ('102', '102: Sem permissão de crédito','102: Sem permissão de crédito',21,6, 1477075035443, 'System'),
     ('103', '103: Isenção do ICMS para faixa de receita bruta','103: Isenção do ICMS para faixa de receita bruta',2,6, 1477075035443, 'System'),
     ('201', '201: Com permissão de crédito, com cobr ICMS por Subst Trib','201: Com permissão de crédito, com cobr ICMS por Subst Trib',21,6, 1477075035443, 'System'),
     ('202', '202: Sem permissão de crédito, com cobr ICMS por Subst Trib','202: Sem permissão de crédito, com cobr ICMS por Subst Trib',21,6, 1477075035443, 'System'),
     ('203', '203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST','203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST',21,6, 1477075035443, 'System'),
     ('300', '300: Imune','300: Imune',21,6, 1477075035443, 'System'),
     ('400', '400: Não tributada','400: Não tributada',21,6, 1477075035443, 'System'),
     ('500', '500: ICMS cobrado antes por subst trib ou antecipação','500: ICMS cobrado antes por subst trib ou antecipação',21,6, 1477075035443, 'System'),
     ('900', '900: Outros','900: Outros',21,6, 1477075035443, 'System'),
      if(imposto.icms.sitTributaria.value == "00")
      {
          imposto.icms.icms00.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms00 = fModels.amont(imposto.icms.icms00,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "10")
      {
          imposto.icms.icms10.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms10 = fModels.amont(imposto.icms.icms10,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "20")
      {
          imposto.icms.icms20.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms20 = fModels.amont(imposto.icms.icms20,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "30")
      {
          imposto.icms.icms30.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms30 = fModels.amont(imposto.icms.icms30,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "40")
      {
          imposto.icms.icms40.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms40 = fModels.amont(imposto.icms.icms40,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "41")
      {
          imposto.icms.icms41.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms41 = fModels.amont(imposto.icms.icms41,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "50")
      {
          imposto.icms.icms50.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms50 = fModels.amont(imposto.icms.icms50,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "51")
      {
          imposto.icms.icms51.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms51 = fModels.amont(imposto.icms.icms51,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "60")
      {
          imposto.icms.icms60.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms60 = fModels.amont(imposto.icms.icms60,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "70")
      {
          imposto.icms.icms70.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms70 = fModels.amont(imposto.icms.icms70,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "90")
      {
          imposto.icms.icms90.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icms90 = fModels.amont(imposto.icms.icms90,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "10Part")
      {
          imposto.icms.icmsPartilhado.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmsPartilhado = fModels.amont(imposto.icms.icmsPartilhado,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "90Part")
      {
          imposto.icms.icmsPartilhado.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmsPartilhado = fModels.amont(imposto.icms.icmsPartilhado,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "41ST")
      {
          imposto.icms.icmsst.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmsst = fModels.amont(imposto.icms.icmsst,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "101")
      {
          imposto.icms.icmssn101.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn101 = fModels.amont(imposto.icms.icmssn101,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "102")
      {
          imposto.icms.icmssn102.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn102 = fModels.amont(imposto.icms.icmssn102,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "103")
      {
          imposto.icms.icmssn103.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn103 = fModels.amont(imposto.icms.icmssn103,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "201")
      {
          imposto.icms.icmssn201.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn201 = fModels.amont(imposto.icms.icmssn201,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "202")
      {
          imposto.icms.icmssn202.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn202 = fModels.amont(imposto.icms.icmssn202,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "203")
      {
          imposto.icms.icmssn203.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn203 = fModels.amont(imposto.icms.icmssn203,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "300")
      {
          imposto.icms.icmssn300.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn300 = fModels.amont(imposto.icms.icmssn300,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "400")
      {
          imposto.icms.icmssn400.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn400 = fModels.amont(imposto.icms.icmssn400,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "500")
      {
          imposto.icms.icmssn500.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn500 = fModels.amont(imposto.icms.icmssn500,action) ;
      }
      else if(imposto.icms.sitTributaria.value == "900")
      {
          imposto.icms.icmssn900.situacaoTributaria = imposto.icms.sitTributaria
          imposto.icms.icmssn900 = fModels.amont(imposto.icms.icmssn900,action) ;
      }


      imposto.ipi = fModels.amont(imposto.ipi,action) ;


      //private NFNotaInfoItemImpostoPISAliquota aliquota;
      if(pis.pISSituaTributaria == "01")
      {
        imposto.pis.aliquota.situacaoTributaria = pis.pISSituaTributaria;
        imposto.pis.aliquota.valorBaseCalculo = 0;
        imposto.pis.aliquota.percentualAliquota = pis.aliquota;
        imposto.pis.aliquota.valorTributo = 0;

        imposto.pis.aliquota = fModels.amont(imposto.pis.aliquota,action) ;
      }

      //private NFNotaInfoItemImpostoPISQuantidade quantidade;
      if(pis.pISSituaTributaria == "02")
      {
        imposto.pis.quantidade.situacaoTributaria = pis.pISSituaTributaria;
        imposto.pis.quantidade.quantidadeVendida = 0;
        imposto.pis.quantidade.valorAliquota = pis.valorUnidade;
        imposto.pis.quantidade.valorTributo = 0;

        imposto.pis.quantidade = fModels.amont(imposto.pis.quantidade,action) ;
      }

      //NFNotaInfoItemImpostoPISNaoTributado naoTributado
      if(pis.pISSituaTributaria == "03")
      {
          imposto.pis.naoTributavel.situacaoTributaria = pis.pISSituaTributaria;

          imposto.pis.naoTributavel = fModels.amont(imposto.pis.naoTributavel,action) ;
      }

      //NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
      if(pis.pISSituaTributaria == "04")
      {
        imposto.pis.outrasOperacoes.situacaoTributaria = pis.pISSituaTributaria;
        imposto.pis.outrasOperacoes.percentualAliquota = pis.aliquota;
        imposto.pis.outrasOperacoes.quantidadeVendida = 0;
        imposto.pis.outrasOperacoes.valorAliquota = pis.valorUnidade;
        imposto.pis.outrasOperacoes.valorTributo = 0;

        imposto.pis.outrasOperacoes = fModels.amont(imposto.pis.outrasOperacoes,action) ;
      }

      imposto.pis = fModels.amont(imposto.pis,action) ;

      imposto.pisst = fModels.amont(imposto.pisst,action) ;


      //COFINS
      //private NFNotaInfoItemImpostoPISAliquota aliquota;
      if(cofins.pISSituaTributaria == "01")
      {
        imposto.cofins.aliquota.situacaoTributaria = cofins.pISSituaTributaria;
        imposto.cofins.aliquota.valorBaseCalculo = 0;
        imposto.cofins.aliquota.percentualAliquota = cofins.aliquota;
        imposto.cofins.aliquota.valorTributo = 0;

        imposto.cofins.aliquota = fModels.amont(imposto.cofins.aliquota,action) ;
      }

      //private NFNotaInfoItemImpostoPISQuantidade quantidade;
      if(cofins.pISSituaTributaria == "02")
      {
        imposto.cofins.quantidade.situacaoTributaria = cofins.pISSituaTributaria;
        imposto.cofins.quantidade.quantidadeVendida = 0;
        imposto.cofins.quantidade.valorAliquota = cofins.valorUnidade;
        imposto.cofins.quantidade.valorTributo = 0;

        imposto.cofins.quantidade = fModels.amont(imposto.cofins.quantidade,action) ;
      }

      //NFNotaInfoItemImpostoPISNaoTributado naoTributado
      if(cofins.pISSituaTributaria == "03")
      {
          imposto.cofins.naoTributavel.situacaoTributaria = cofins.pISSituaTributaria;

          imposto.cofins.naoTributavel = fModels.amont(imposto.cofins.naoTributavel,action) ;
      }

      //NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
      if(cofins.pISSituaTributaria == "04")
      {
        imposto.cofins.outrasOperacoes.situacaoTributaria = cofins.pISSituaTributaria;
        imposto.cofins.outrasOperacoes.percentualAliquota = cofins.aliquota;
        imposto.cofins.outrasOperacoes.quantidadeVendida = 0;
        imposto.cofins.outrasOperacoes.valorAliquota = cofins.valorUnidade;
        imposto.cofins.outrasOperacoes.valorTributo = 0;

        imposto.cofins.outrasOperacoes = fModels.amont(imposto.cofins.outrasOperacoes,action) ;
      }

      imposto.cofins   = fModels.amont(imposto.cofins,action) ;
      imposto.cofinsst = fModels.amont(imposto.cofinsst,action) ;


      imposto.icmsUfDestino = fModels.amont(icmsUfDestino,action) ;

      SysMgmtData.processPostPageData("main/api/request", {
          url: url,
          token: $rootScope.authToken,
          request: new qat.model.reqProduto(oObject, true, true)
      }, function(res) {
          callBack(res);
      });
  }

	factory.fnDelete = function() {
			//..
		}


	return factory;
	}]);
})();


