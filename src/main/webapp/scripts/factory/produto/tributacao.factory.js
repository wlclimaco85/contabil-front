(function()
{
	'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.tributacao', []);

	commonAuth.factory('fTributacao', ['$rootScope', 'fModels', 'SysMgmtData', function($rootScope, fModels, SysMgmtData)
	{
		var factory = {};

		factory.fnMontaObjeto = function(tributacao, action, sUrl, callBack)
		{


			var oObject = fModels.amont(tributacao, action);

			tributacao.imposto.modelAction = action;
			tributacao.imposto.createUser = $rootScope.user.user;
			tributacao.imposto.createDateUTC = (new Date()).getTime();
			tributacao.imposto.modifyUser = $rootScope.user.user;
			tributacao.imposto.modifyDateUTC = (new Date()).getTime();

			if (tributacao.imposto.icms != undefined)
			{
				if (tributacao.imposto.icms.sitTributaria != undefined)
				{

					if (tributacao.imposto.icms.sitTributaria.value == "00")
					{

						tributacao.imposto.icms.icms00.situacaoTributaria = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms00.modalidadeBCICMS, action, $rootScope.user.user);
						tributacao.imposto.icms.icms00.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms00.modalidadeBCICMS, $rootScope.user.user);
						tributacao.imposto.icms.icms00 = fModels.amont(tributacao.imposto.icms.icms00, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "10")
					{
						tributacao.imposto.icms.icms10.situacaoTributaria = new qat.model.fnDoisValor1(tributacao.imposto.icms.sitTributaria, action, $rootScope.user.user)
						tributacao.imposto.icms.icms10.modalidadeBCICMS = tributacao.imposto.icms.icms10.modalidadeBCICMS ? new qat.model.fnDoisValor1(tributacao.imposto.icms.icms10.modalidadeBCICMS,
							action, $rootScope.user.user) :
						{};
						tributacao.imposto.icms.icms10.modalidadeBCICMSST = tributacao.imposto.icms.icms10.modalidadeBCICMSST ? new qat.model.fnDoisValor1(tributacao.imposto.icms.icms10.modalidadeBCICMSST,
							action, $rootScope.user.user) :
						{};
						tributacao.imposto.icms.icms10 = fModels.amont(tributacao.imposto.icms.icms10, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "20")
					{
						tributacao.imposto.icms.icms20.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms20.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms20.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms20.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms20.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icms20 = fModels.amont(tributacao.imposto.icms.icms20, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "30")
					{
						tributacao.imposto.icms.icms30.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms30.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms30.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms30.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms30.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icms30 = fModels.amont(tributacao.imposto.icms.icms30, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "40")
					{
						tributacao.imposto.icms.icms40.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms40.motivoDesoneracaoICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms40.motivoDesoneracaoICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms40 = fModels.amont(tributacao.imposto.icms.icms40, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "41")
					{
						tributacao.imposto.icms.icms41.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms41 = fModels.amont(tributacao.imposto.icms.icms41, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "50")
					{
						tributacao.imposto.icms.icms50.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms50 = fModels.amont(tributacao.imposto.icms.icms50, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "51")
					{
						tributacao.imposto.icms.icms51.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms51.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms51.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms51 = fModels.amont(tributacao.imposto.icms.icms51, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "60")
					{
						tributacao.imposto.icms.icms60.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms60 = fModels.amont(tributacao.imposto.icms.icms60, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "70")
					{
						tributacao.imposto.icms.icms70.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms70.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms70.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icms70.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms70.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icms70.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms70.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms70 = fModels.amont(tributacao.imposto.icms.icms70, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "90")
					{
						tributacao.imposto.icms.icms90.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icms90.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms90.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icms90.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms90.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icms90.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icms90.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icms90 = fModels.amont(tributacao.imposto.icms.icms90, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "10Part")
					{

						tributacao.imposto.icms.icmsPartilhado.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmsPartilhado.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMSST, action, $rootScope.user
							.user)
						tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icmsPartilhado = fModels.amont(tributacao.imposto.icms.icmsPartilhado, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "90Part")
					{

						tributacao.imposto.icms.icmsPartilhado.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmsPartilhado.desoneracao = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.desoneracao, action, $rootScope.user.user)
						tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMSST, action, $rootScope.user
							.user)
						tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmsPartilhado.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icmsPartilhado = fModels.amont(tributacao.imposto.icms.icmsPartilhado, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "41ST")
					{
						tributacao.imposto.icms.icmsst.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmsst = fModels.amont(tributacao.imposto.icms.icmsst, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "101")
					{
						tributacao.imposto.icms.icmssn101.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn101 = fModels.amont(tributacao.imposto.icms.icmssn101, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "102")
					{
						tributacao.imposto.icms.icmssn102.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn102 = fModels.amont(tributacao.imposto.icms.icmssn102, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "103")
					{
						tributacao.imposto.icms.icmssn103.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn103 = fModels.amont(tributacao.imposto.icms.icmssn103, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "201")
					{
						tributacao.imposto.icms.icmssn201.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn201.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmssn201.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icmssn201 = fModels.amont(tributacao.imposto.icms.icmssn201, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "202")
					{
						tributacao.imposto.icms.icmssn202.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn202.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmssn202.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icmssn202 = fModels.amont(tributacao.imposto.icms.icmssn202, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "203")
					{
						tributacao.imposto.icms.icmssn203.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn203.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmssn203.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icmssn203 = fModels.amont(tributacao.imposto.icms.icmssn203, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "300")
					{
						tributacao.imposto.icms.icmssn300.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn300 = fModels.amont(tributacao.imposto.icms.icmssn300, action);

					}
					else if (tributacao.imposto.icms.sitTributaria.value == "400")
					{
						tributacao.imposto.icms.icmssn400.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn400 = fModels.amont(tributacao.imposto.icms.icmssn400, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "500")
					{
						tributacao.imposto.icms.icmssn500.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn500 = fModels.amont(tributacao.imposto.icms.icmssn500, action);
					}
					else if (tributacao.imposto.icms.sitTributaria.value == "900")
					{
						tributacao.imposto.icms.icmssn900.situacaoTributaria = {
							id: tributacao.imposto.icms.sitTributaria.id
						};
						tributacao.imposto.icms.icmssn900.modalidadeBCICMS = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmssn900.modalidadeBCICMS, action, $rootScope.user.user)
						tributacao.imposto.icms.icmssn900.modalidadeBCICMSST = new qat.model.fnDoisValor1(tributacao.imposto.icms.icmssn203.modalidadeBCICMSST, action, $rootScope.user.user)
						tributacao.imposto.icms.icmssn900 = fModels.amont(tributacao.imposto.icms.icmssn900, action);
					}
                  //  debugger;
					tributacao.imposto.icms.modelAction = tributacao.imposto.icms.id ? action : "INSERT";
					tributacao.imposto.icms.createUser = $rootScope.user.user;
					tributacao.imposto.icms.createDateUTC = (new Date()).getTime();
					tributacao.imposto.icms.modifyUser = $rootScope.user.user;
					tributacao.imposto.icms.modifyDateUTC = (new Date()).getTime();


				}
			}

			if ((tributacao.imposto.ipi != undefined) && (tributacao.imposto.ipi.sitTributaria != undefined))
			{

				if ((tributacao.imposto.ipi.sitTributaria.value == "00") || (tributacao.imposto.ipi.sitTributaria.value == "49") || (tributacao.imposto.ipi.sitTributaria.value == "50") ||
					(tributacao.imposto.ipi.sitTributaria.value == "99"))
				{
					tributacao.imposto.ipi.tributado = {
						percentualAliquota: tributacao.imposto.ipi.percentualAliquota,
						quantidade: tributacao.imposto.ipi.valorTributo,
						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.ipi.sitTributaria, action, $rootScope.user.user),
						modelAction: tributacao.imposto.ipi.tributado ? action : "INSERT",
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),

					}
				}
				else
				{
					tributacao.imposto.ipi.naoTributado = {
						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.ipi.sitTributaria, action),
						modelAction: tributacao.imposto.ipi.naoTributado ? action : "INSERT",
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),

					}
				}
				tributacao.imposto.ipi.tipoCalculo = new qat.model.fnDoisValor1(tributacao.imposto.ipi.tipoCalculo, action),
				tributacao.imposto.ipi = qat.model.fnNFNotaInfoItemImpostoIPI(tributacao.imposto.ipi, tributacao.imposto.ipi.id ? action : "INSERT",$rootScope.user.user);
			}


			if ((tributacao.imposto.pis != undefined) && (tributacao.imposto.pis.pISSituaTributaria != undefined))
			{
				if ((tributacao.imposto.pis.pISSituaTributaria.value == "01") || (tributacao.imposto.pis.pISSituaTributaria.value == "02"))
				{
					tributacao.imposto.pis.aliquota = {
						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.pis.pISSituaTributaria, action),
						modelAction: action,
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),
					}

				}

				//private NFNotaInfoItemImpostoPISQuantidade quantidade;
				if (tributacao.imposto.pis.pISSituaTributaria.value == "03")
				{
					tributacao.imposto.pis.quantidade = {
						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.pis.pISSituaTributaria, action),
						modelAction: action,
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),
					}

				}

				//NFNotaInfoItemImpostoPISNaoTributado naoTributado
				if ((tributacao.imposto.pis.pISSituaTributaria.value == "04") || (tributacao.imposto.pis.pISSituaTributaria.value == "06") || (tributacao.imposto.pis.pISSituaTributaria.value ==
						"07") || (tributacao.imposto.pis.pISSituaTributaria.value == "08") || (tributacao.imposto.pis.pISSituaTributaria.value == "09")  ||
					(tributacao.imposto.pis.pISSituaTributaria.value == "49") || (tributacao.imposto.pis.pISSituaTributaria.value == "50") || (tributacao.imposto.pis.pISSituaTributaria.value ==
						"51")|| (tributacao.imposto.pis.pISSituaTributaria.value == "52") || (tributacao.imposto.pis.pISSituaTributaria.value == "53")|| (tributacao.imposto.pis.pISSituaTributaria.value == "54")|| (tributacao.imposto.pis.pISSituaTributaria.value == "55")|| (tributacao.imposto.pis.pISSituaTributaria.value == "56")|| (tributacao.imposto.pis.pISSituaTributaria.value == "60")|| (tributacao.imposto.pis.pISSituaTributaria.value == "61")|| (tributacao.imposto.pis.pISSituaTributaria.value == "62")|| (tributacao.imposto.pis.pISSituaTributaria.value == "63")|| (tributacao.imposto.pis.pISSituaTributaria.value == "64")|| (tributacao.imposto.pis.pISSituaTributaria.value == "65")|| (tributacao.imposto.pis.pISSituaTributaria.value == "66")|| (tributacao.imposto.pis.pISSituaTributaria.value == "67")|| (tributacao.imposto.pis.pISSituaTributaria.value == "70")|| (tributacao.imposto.pis.pISSituaTributaria.value == "71")|| (tributacao.imposto.pis.pISSituaTributaria.value == "72")|| (tributacao.imposto.pis.pISSituaTributaria.value == "73")|| (tributacao.imposto.pis.pISSituaTributaria.value == "74")|| (tributacao.imposto.pis.pISSituaTributaria.value == "75"))
				{
					tributacao.imposto.pis.naoTributavel = {

						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.pis.pISSituaTributaria, action),
						modelAction: action,
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),
					}
				}

				//NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
				if (tributacao.imposto.pis.pISSituaTributaria.value == "99")
				{
					tributacao.imposto.pis.outrasOperacoes = {
						situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.pis.pISSituaTributaria, action),
						modelAction: action,
						createUser: $rootScope.user.user,
						createDateUTC: (new Date()).getTime(),
						modifyUser: $rootScope.user.user,
						modifyDateUTC: (new Date()).getTime(),
					}
				}

			tributacao.imposto.pis = qat.model.fnNFNotaInfoItemImpostoPIS(tributacao.imposto.pis, tributacao.imposto.pis.id ? action:"INSERT",$rootScope.user.user);
			}

			if (tributacao.imposto.pisst != undefined)
			{
				tributacao.imposto.pisst = fModels.amont(tributacao.imposto.pisst, action);
			}

			//COFINS
			if ((tributacao.imposto.cofins) && (tributacao.imposto.cofins.pISSituaTributaria))
			{
				if (tributacao.imposto.cofins.pISSituaTributaria)
				{
					if ((tributacao.imposto.cofins.pISSituaTributaria.value == "01") || (tributacao.imposto.cofins.pISSituaTributaria.value == "02"))
					{
						tributacao.imposto.cofins.aliquota = {
							situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.cofins.pISSituaTributaria, action),
							percentualAliquota: tributacao.imposto.cofins.percentualAliquota,

						}
						tributacao.imposto.cofins.aliquota = fModels.amont(tributacao.imposto.cofins.aliquota, action);
					}

					//private NFNotaInfoItemImpostoPISQuantidade quantidade;
					if (tributacao.imposto.cofins.pISSituaTributaria.value == "03")
					{
						tributacao.imposto.cofins.quantidade = {
							situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.cofins.pISSituaTributaria, action),
							valorAliquota: tributacao.imposto.cofins.valorUnidade,
						}

						tributacao.imposto.cofins.quantidade = fModels.amont(tributacao.imposto.cofins.quantidade, action);
					}

					//NFNotaInfoItemImpostoPISNaoTributado naoTributado
					if ((tributacao.imposto.cofins.pISSituaTributaria.value == "04") || (tributacao.imposto.cofins.pISSituaTributaria.value == "05") || (tributacao.imposto.cofins.pISSituaTributaria
							.value == "06") ||
						(tributacao.imposto.cofins.pISSituaTributaria.value == "07") || (tributacao.imposto.cofins.pISSituaTributaria.value == "08") || (tributacao.imposto.cofins.pISSituaTributaria
							.value == "09"))
					{
						tributacao.imposto.cofins.naoTributavel = {
							situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.cofins.pISSituaTributaria, action),
						}

						tributacao.imposto.cofins.naoTributavel = fModels.amont(tributacao.imposto.cofins.naoTributavel, action);
					}

					//NFNotaInfoItemImpostoPISOutrasOperacoes outrasOperacoes
					if (tributacao.imposto.cofins.pISSituaTributaria.value == "99")
					{
						tributacao.imposto.cofins.outrasOperacoes = {
							situacaoTributaria: new qat.model.fnDoisValor1(tributacao.imposto.cofins.pISSituaTributaria, action),
							percentualAliquota: tributacao.imposto.cofins.percentualAliquota,
							valorAliquota: tributacao.imposto.cofins.valorUnidade,
						}



						tributacao.imposto.cofins.outrasOperacoes = fModels.amont(tributacao.imposto.cofins.outrasOperacoes, action);
					}

					tributacao.imposto.cofins = qat.model.fnNFNotaInfoItemImpostoCOFINS(tributacao.imposto.cofins, action);
				}
				tributacao.imposto.cofinsst = fModels.amont(tributacao.imposto.cofinsst, action);
			}

			tributacao.imposto.icms = qat.model.fnNFNotaInfoItemImpostoICMS(tributacao.imposto.icms, tributacao.imposto.icms.id ? action : "INSERT",$rootScope.user.user);

			if (tributacao.cfop)
			{
				var iId = tributacao.cfop.id

				tributacao.cfop = {
					id: iId
				};
			}
			else
			{
				tributacao.cfop = null;
			}
			var oObject = fModels.amont(tributacao, action);

			SysMgmtData.processPostPageData("main/api/request",
			{
				url: sUrl,
				token: $rootScope.authToken,
				request: new qat.model.reqTributacao(oObject, true, true)
			}, function(res)
			{
				callBack(res);
			});
		}

		factory.fnDelete = function()
		{
			//..
		}


		return factory;
    }]);
})();