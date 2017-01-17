(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.tributacao', []);

	commonAuth.factory('fTributacao', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(tributacao,action,url,callBack){

      var oObject = fModels.amont(tributacao,action);

      tributacao.imposto.modelAction    = action;
      tributacao.imposto.createUser     = "System";
      tributacao.imposto.createDateUTC  = (new Date()).getTime();
      tributacao.imposto.modifyUser     = "System";
      tributacao.imposto.modifyDateUTC  = (new Date()).getTime();

      if(tributacao.imposto.icms.sitTributaria.value == "00")
      {
          tributacao.imposto.icms.icms00.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms00 = fModels.amont(tributacao.imposto.icms.icms00,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "10")
      {
          tributacao.imposto.icms.icms10.situacaoTributaria.id = tributacao.imposto.icms.sitTributaria.id
          tributacao.imposto.icms.icms10 = fModels.amont(tributacao.imposto.icms.icms10,action) ;
          tributacao.imposto.icms.icms10.modalidadeBCICMS = qat.model.fnDoisValores(tributacao.imposto.icms.icms10.modalidadeBCICMS,action)
          tributacao.imposto.icms.icms10.modalidadeBCICMSST =  qat.model.fnDoisValores(tributacao.imposto.icms.icms10.modalidadeBCICMSST,action)
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "20")
      {
          tributacao.imposto.icms.icms20.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms20 = fModels.amont(tributacao.imposto.icms.icms20,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "30")
      {
          tributacao.imposto.icms.icms30.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms30 = fModels.amont(tributacao.imposto.icms.icms30,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "40")
      {
          tributacao.imposto.icms.icms40.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms40 = fModels.amont(tributacao.imposto.icms.icms40,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "41")
      {
          tributacao.imposto.icms.icms41.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms41 = fModels.amont(tributacao.imposto.icms.icms41,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "50")
      {
          tributacao.imposto.icms.icms50.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms50 = fModels.amont(tributacao.imposto.icms.icms50,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "51")
      {
          tributacao.imposto.icms.icms51.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms51 = fModels.amont(tributacao.imposto.icms.icms51,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "60")
      {
          tributacao.imposto.icms.icms60.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms60 = fModels.amont(tributacao.imposto.icms.icms60,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "70")
      {
          tributacao.imposto.icms.icms70.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms70 = fModels.amont(tributacao.imposto.icms.icms70,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "90")
      {
          tributacao.imposto.icms.icms90.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icms90 = fModels.amont(tributacao.imposto.icms.icms90,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "10Part")
      {
          tributacao.imposto.icms.icmsPartilhado.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmsPartilhado = fModels.amont(tributacao.imposto.icms.icmsPartilhado,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "90Part")
      {
          tributacao.imposto.icms.icmsPartilhado.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmsPartilhado = fModels.amont(tributacao.imposto.icms.icmsPartilhado,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "41ST")
      {
          tributacao.imposto.icms.icmsst.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmsst = fModels.amont(tributacao.imposto.icms.icmsst,action) ;
      }
      else if(sitTributaria.value == "101")
      {
          tributacao.imposto.icms.icmssn101.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn101 = fModels.amont(tributacao.imposto.icms.icmssn101,action) ;
      }
      else if(sitTributaria.value == "102")
      {
          tributacao.imposto.icms.icmssn102.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn102 = fModels.amont(tributacao.imposto.icms.icmssn102,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "103")
      {
          tributacao.imposto.icms.icmssn103.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn103 = fModels.amont(tributacao.imposto.icms.icmssn103,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "201")
      {
          tributacao.imposto.icms.icmssn201.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn201 = fModels.amont(tributacao.imposto.icms.icmssn201,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "202")
      {
          tributacao.imposto.icms.icmssn202.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn202 = fModels.amont(tributacao.imposto.icms.icmssn202,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "203")
      {
          tributacao.imposto.icms.icmssn203.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn203 = fModels.amont(tributacao.imposto.icms.icmssn203,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "300")
      {
          tributacao.imposto.icms.icmssn300.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn300 = fModels.amont(tributacao.imposto.icms.icmssn300,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "400")
      {
          tributacao.imposto.icms.icmssn400.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn400 = fModels.amont(tributacao.imposto.icms.icmssn400,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "500")
      {
          tributacao.imposto.icms.icmssn500.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn500 = fModels.amont(tributacao.imposto.icms.icmssn500,action) ;
      }
      else if(tributacao.imposto.icms.sitTributaria.value == "900")
      {
          tributacao.imposto.icms.icmssn900.situacaoTributaria = tributacao.imposto.icms.sitTributaria
          tributacao.imposto.icms.icmssn900 = fModels.amont(tributacao.imposto.icms.icmssn900,action) ;
      }

      tributacao.imposto.icms.modelAction    = action;
      tributacao.imposto.icms.createUser     = "System";
      tributacao.imposto.icms.createDateUTC  = (new Date()).getTime();
      tributacao.imposto.icms.modifyUser     = "System";
      tributacao.imposto.icms.modifyDateUTC  = (new Date()).getTime();


      if((tributacao.imposto.ipi.sitTributaria.value == "00") || (tributacao.imposto.ipi.sitTributaria.value == "49")|| (tributacao.imposto.ipi.sitTributaria.value == "50")|| (tributacao.imposto.ipi.sitTributaria.value == "99"))
      {
            tributacao.imposto.ipi.tributado = {
                percentualAliquota : tributacao.imposto.ipi.percentualAliquota,
                quantidade         : tributacao.imposto.ipi.valorTributo,
                situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.ipi.sitTributaria,action),
                modelAction        : action,
                createUser         : "System",
                createDateUTC      : (new Date()).getTime(),
                modifyUser         : "System",
                modifyDateUTC      : (new Date()).getTime(),

            }
      }
      else
      {
          tributacao.imposto.ipi.naoTributado = {
                situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.ipi.sitTributaria,action),
                modelAction        : action,
                createUser         : "System",
                createDateUTC      : (new Date()).getTime(),
                modifyUser         : "System",
                modifyDateUTC      : (new Date()).getTime(),

            }
      }

      tributacao.imposto.ipi = qat.model.fnNFNotaInfoItemImpostoIPI(tributacao.imposto.ipi,action) ;


      //private NFNotaInfoItemImpostoPISAliquota aliquota;
      if((tributacao.imposto.pis.pISSituaTributaria.value == "01")||(tributacao.imposto.pis.pISSituaTributaria.value == "02"))
      {
          tributacao.imposto.pis.aliquota = {
              situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.pis.pISSituaTributaria,action),
              percentualAliquota : tributacao.imposto.pis.percentualAliquota,
              modelAction        : action,
              createUser         : "System",
              createDateUTC      : (new Date()).getTime(),
              modifyUser         : "System",
              modifyDateUTC      : (new Date()).getTime(),
        }

      }

      //private NFNotaInfoItemImpostoPISQuantidade quantidade;
      if(tributacao.imposto.pis.pISSituaTributaria.value  == "03")
      {
        tributacao.imposto.pis.quantidade = {
            situacaoTributaria  : qat.model.fnDoisValores(tributacao.imposto.pis.pISSituaTributaria,action),
            valorAliquota       : tributacao.imposto.pis.valorUnidade,
            modelAction        : action,
            createUser         : "System",
            createDateUTC      : (new Date()).getTime(),
            modifyUser         : "System",
            modifyDateUTC      : (new Date()).getTime(),
        }

      }

      //NFNotaInfoItemImpostoPISNaoTributado naoTributado
      if((tributacao.imposto.pis.pISSituaTributaria.value  == "04")||(tributacao.imposto.pis.pISSituaTributaria.value == "05")||(tributacao.imposto.pis.pISSituaTributaria.value == "06")
        ||(tributacao.imposto.pis.pISSituaTributaria.value == "07")||(tributacao.imposto.pis.pISSituaTributaria.value == "08")||(tributacao.imposto.pis.pISSituaTributaria.value == "09"))
      {
          tributacao.imposto.pis.naoTributavel = {

            situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.pis.pISSituaTributaria,action),
            modelAction        : action,
            createUser         : "System",
            createDateUTC      : (new Date()).getTime(),
            modifyUser         : "System",
            modifyDateUTC      : (new Date()).getTime(),
          }
      }

      //NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
      if(tributacao.imposto.pis.pISSituaTributaria.value  == "99")
      {
        tributacao.imposto.pis.outrasOperacoes = {
            situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.pis.pISSituaTributaria,action),
            percentualAliquota : tributacao.imposto.pis.percentualAliquota,
            valorAliquota      : tributacao.imposto.pis.valorUnidade,
            modelAction        : action,
            createUser         : "System",
            createDateUTC      : (new Date()).getTime(),
            modifyUser         : "System",
            modifyDateUTC      : (new Date()).getTime(),
        }
      }

      tributacao.imposto.pis = qat.model.fnNFNotaInfoItemImpostoPIS(tributacao.imposto.pis,action);

      if( tributacao.imposto.pisst  != undefined)
      {
          tributacao.imposto.pisst = fModels.amont(tributacao.imposto.pisst,action) ;
      }

      //COFINS
      if((tributacao.imposto.cofins.pISSituaTributaria.value  == "01")||(tributacao.imposto.cofins.pISSituaTributaria.value  == "02"))
      {
        tributacao.imposto.cofins.aliquota = {
            situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.cofins.pISSituaTributaria,action),
            percentualAliquota : tributacao.imposto.cofins.percentualAliquota,

        }
        tributacao.imposto.cofins.aliquota = fModels.amont(tributacao.imposto.cofins.aliquota,action) ;
      }

      //private NFNotaInfoItemImpostoPISQuantidade quantidade;
      if(tributacao.imposto.cofins.pISSituaTributaria.value  == "03")
      {
        tributacao.imposto.cofins.quantidade = {
            situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.cofins.pISSituaTributaria,action),
            valorAliquota      : tributacao.imposto.cofins.valorUnidade,
        }

        tributacao.imposto.cofins.quantidade = fModels.amont(tributacao.imposto.cofins.quantidade,action) ;
      }

      //NFNotaInfoItemImpostoPISNaoTributado naoTributado
      if((tributacao.imposto.cofins.pISSituaTributaria.value  == "04")||(tributacao.imposto.cofins.pISSituaTributaria.value  == "05")||(tributacao.imposto.cofins.pISSituaTributaria.value  == "06")||
        (tributacao.imposto.cofins.pISSituaTributaria.value  == "07")||(tributacao.imposto.cofins.pISSituaTributaria.value  == "08") ||(tributacao.imposto.cofins.pISSituaTributaria.value  == "09"))
      {
          tributacao.imposto.cofins.naoTributavel = {
              situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.cofins.pISSituaTributaria,action),
          }

          tributacao.imposto.cofins.naoTributavel = fModels.amont(tributacao.imposto.cofins.naoTributavel,action) ;
      }

      //NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
      if(tributacao.imposto.cofins.pISSituaTributaria.value == "99")
      {
        tributacao.imposto.cofins.outrasOperacoes = {
            situacaoTributaria : qat.model.fnDoisValores(tributacao.imposto.cofins.pISSituaTributaria,action),
            percentualAliquota : tributacao.imposto.cofins.percentualAliquota,
            valorAliquota      : tributacao.imposto.cofins.valorUnidade,
        }



        tributacao.imposto.cofins.outrasOperacoes = fModels.amont(tributacao.imposto.cofins.outrasOperacoes,action) ;
      }

      tributacao.imposto.cofins = qat.model.fnNFNotaInfoItemImpostoCOFINS(tributacao.imposto.cofins,action);

      tributacao.imposto.cofinsst = fModels.amont(tributacao.imposto.cofinsst,action) ;


      tributacao.imposto.icmsUfDestino = qat.model.fnNFNotaInfoItemImpostoIcmsUfDest(tributacao.imposto.icmsUfDestino,action) ;

      tributacao.imposto.icms = qat.model.fnNFNotaInfoItemImpostoICMS(tributacao.imposto.icms,action);

      var oObject = fModels.amont(tributacao,action);

      SysMgmtData.processPostPageData("main/api/request", {
          url: 'produto/api/tributacao/insert',
          token: $rootScope.authToken,
          request: new qat.model.reqTributacao(oObject, true, true)
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


