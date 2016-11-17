(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.notaFiscal', []);

	commonAuth.factory('fNotaFiscal', ['$rootScope','fModels','SysMgmtData','toastr' ,function($rootScope,fModels,SysMgmtData,toastr){
		var factory = {};

	factory.fnCreateObjectPdVendas = function(emitente,remetente,endereco,produtos,formaPg,notaFiscal,type,action){

            action = "INSERT";
             var oEmitente = {
                id                              : null,
                cnpj : null,
                cpf : null,
                razaosocial: emitente.razao,
                nomefantasia : emitente.nome,
                endereco : qat.model.fnEndereco(emitente.enderecos[0],'INSERT'),
                inscricaoestadual : null,
                inscricaoestadualsubstituicaotributaria : null,
                inscricaomunicipal : null,
                classificacaonacionalatividadeseconomicas: null,
               // regimetributario: emitente.regime,

            }


            for(var x = 0;x < emitente.documentos.length; x++)
            {
                if(emitente.documentos[x].documentoTypeEnumValue == 1)
                {
                    oEmitente.cnpj = emitente.documentos[x].numero;
                }
                else if (emitente.documentos[x].documentoTypeEnumValue == 2)
                {
                    oEmitente.cpf = emitente.documentos[x].numero;
                }
                else if (emitente.documentos[x].documentoTypeEnumValue == 10)
                {
                    oEmitente.inscricaoestadual = emitente.documentos[x].numero;
                }
                else if (emitente.documentos[x].documentoTypeEnumValue == 12)
                {
                    oEmitente.inscricaoestadualsubstituicaotributaria = emitente.documentos[x].numero;
                }
                else if (emitente.documentos[x].documentoTypeEnumValue == 3)
                {
                    oEmitente.inscricaomunicipal = emitente.documentos[x].numero;
                }
            }

            var oDestinatario = {
                id                              : null,
                cnpj : null,
                cpf : null,
                idestrangeiro: null,
                razaosocial : remetente.razao,
                endereco : remetente.endereco,
                indicadoriedestinatario : {id : 1},
                inscricaoestadual : null,
                inscricaosuframa : null,
                inscricaomunicipal : null,
                email : remetente.emails[0].email
            }

            for(var x = 0;x < remetente.documentos.length; x++)
            {
                if(remetente.documentos[x].documentoTypeEnumValue == 1)
                {
                    oDestinatario.cnpj = remetente.documentos[x].numero;
                }
                else if (remetente.documentos[x].documentoTypeEnumValue == 2)
                {
                    oDestinatario.cpf = remetente.documentos[x].numero;
                }
                else if (remetente.documentos[x].documentoTypeEnumValue == 15)
                {
                    oDestinatario.idestrangeiro = remetente.documentos[x].numero;
                }
                else if (remetente.documentos[x].documentoTypeEnumValue == 10)
                {
                    oDestinatario.inscricaoestadual = remetente.documentos[x].numero;
                }
                else if (remetente.documentos[x].documentoTypeEnumValue == 11)
                {
                    oDestinatario.inscricaosuframa = remetente.documentos[x].numero;
                }
                else if (remetente.documentos[x].documentoTypeEnumValue == 3)
                {
                    oDestinatario.inscricaomunicipal = remetente.documentos[x].numero;
                }
            }

            var oEndEntrega = null;
            if((endereco == null)||(endereco == undefined)){
                oEndEntrega = remetente.enderecos[0];
            }
            else
            {
                oEndEntrega = endereco;
            }
            var oEntrega = {
                id                              : null,
                cnpj            : null,
                cpf             : null,
                logradouro      : oEndEntrega.logradouro,
                numero          : oEndEntrega.numero,
                complemento     : oEndEntrega.complemento,
                bairro          : oEndEntrega.bairro,
                codigomunicipio : oEndEntrega.codIbge,
                nomemunicipio   : oEndEntrega.cidade.nome,
                uf              : oEndEntrega.cidade.estado.abreviacao
            }
            var oItens = [];
            var oIten = {

            //    datainicio                      : null,
            //    valor                           : null,
            //    servicoplanoenumvalue           : null,
           //     servicolist                     : null,
           //     planolist                       : null,
           //     numeroregistro                  : null,
           //     dataregistro                    : null,
           //     localdesembaraco                : null,
           //     ufdesembaraco                   : null,
            //    datadesembaraco                 : null,
            //    transporteinternacional         : null,
            //    valorafrmm                      : null,
            //    tpintermedio                    : null,
            //    cnpj                            : null,
            //    ufterceiro                      : null,
            //    codigoexportador                : null,
            //    descricao                       : null,
                produto                         : null,
                cfop                            : null,
                valorunitario                   : null,
                valortotalbruto                 : null,
            //    valorfrete                      : null,
           //     valorseguro                     : null,
             //   valordesconto                   : null,
            //    valoroutrasdespesasacessorias   : null,
            //    numerorecopi                    : null,
                quantidade                      : null
            }

            for(var x = 0;x<produtos.length;x++)
            {

                oIten.produto          = qat.model.fnProduto(produtos[x].produto,'INSERT','system');
              // oIten.cfop             = produtos[x].produto.tributacao.cfop;
               oIten.valortotalbruto  = (produtos[x].produto.quantidade * produtos[x].produto.precoList[0].valor),
                oIten.valorunitario    = produtos[x].produto.precoList[0].valor,
               oIten.valordesconto    = 0,
               oIten.quantidade       = produtos[x].produto.quantidade;
                oItens.push(fModels.amont(oIten,'INSERT'));
            }

            var oInfosuplementar = {
             //   id                              : null

            }

            var oTransporte = {
                id                              : null,
                modalidadefrete : notaFiscal.frete.tipoFrete,
                transportador   : null,
                icmstransporte  : null,
                veiculo         : null,
                reboques        : null,
                vagao           : null,
                balsa           : null
            }



            var oIcmstotal = {
                id                              : null,
                basecalculoicms                 : notaFiscal.vrtotal,
                valortotalicms                  : null,
                valoricmsdesonerado             : null,
                valoricmsfundocombatepobreza    : null,
                valoricmspartilhadestinatario   : null,
                valoricmspartilharementente     : null,
                basecalculoicmsst               : null,
                valortotalicmsst                : null,
                valortotaldosprodutosservicos   : null,
                valortotalfrete                 : notaFiscal.frete.vrFrete,
                valortotalseguro                : null,
                valortotaldesconto              : notaFiscal.vrDesconto,
                valortotalii                    : null,
                valortotalipi                   : null,
                valorpis                        : null,
                valorcofins                     : null,
                outrasdespesasacessorias        : null,
                valortotalnfe                   : notaFiscal.vrtotal,
                valortotaltributos              : null

            }

            var oTotal = {
                id                 : null,
                icmstotal          : fModels.amont(qat.model.fnNFNotaInfoICMSTotal(oIcmstotal,action)),
                issqntotal         : null,
                retencoestributos  : null
            }


            var oNFNotaInfoIdentificacao = {
                id                                  : null,
                uf                                  : emitente.enderecos[0].cidade.estado,
                codigorandomico                     : 555,
                naturezaoperacao                    : '5011',//emitente.configuracao.confNFe.cfopPadrao.cfop,
                formapagamento                      : formaPg,
                modelo                              : {id : 1 },//emitente.configuracao.confNFe.modelo.value,
                serie                               : emitente.configuracao.confNFe.serieEnvio,
                numeronota                          : null,
                datahoraemissao                     : null,
                datahorasaidaouentrada              : null,
                tipo                                : {id : 5},
                identificadorlocaldestinooperacao   : {value : 1},
                codigomunicipio                     : emitente.enderecos[0].cidade.codIbge,
                tipoimpressao                       : {value : 1},
                tipoemissao                         : {value : 1},
                digitoverificador                   : 0,
                ambiente                            : emitente.configuracao.confNFe.ambienteEnvio,
                finalidade                          : {value : 1},
                operacaoconsumidorfinal             : {value : 1},
                indicadorpresencacomprador          : {value : 1},
                programaemissor                     : {value : 1},
                versaoemissor                       : {value : 1},
                datahoracontigencia                 : null,
                justificativaentradacontingencia    : null,
                referenciadas                       : null
            }


            //NFNote
            var oNFNotaInfo = {
                id                              : null,
                identificador                   : '10',
                versao                          : '3.4',
                identificacao                   : fModels.amont(qat.model.fnNFNotaInfoIdentificacao(oNFNotaInfoIdentificacao,action)),
                emitente                        : fModels.amont(qat.model.fnNFNotaInfoEmitente(oEmitente,action)),
                avulsa                          : null,
                destinatario                    : fModels.amont(qat.model.fnNFNotaInfoDestinatario(oDestinatario,action)),
                retirada                        : null,
                entrega                         : fModels.amont(qat.model.fnNFNotaInfoLocal(oEntrega,action)),
                pessoasautorizadasdownloadnfe   : null,
                itens                           : oItens,
                total                           : fModels.amont(qat.model.fnNFNotaInfoTotal(oTotal,action)),
                transporte                      : fModels.amont(qat.model.fnNFNotaInfoTransporte(oTransporte,action)),
                cobranca                        : null,
                pagamentos                      : null,
                informacoesadicionais           : null,
                exportacao                      : null,
                compra                          : null,
                cana                            : null
            }




              //NFNote
            var oNFNote = {
                identificadorlocal : null,
                info : fModels.amont(qat.model.fnNFNotaInfo(oNFNotaInfo,action)),
                infosuplementar : oInfosuplementar,
                assinatura :{ value : 'teste'}
            };
            console.log(oNFNote);
            var initLoad = true; //used to ensure not calling server multiple times
            var user = "system";
            if(($rootScope.user != null)&&($rootScope.user !=undefined))
            {
                user = $rootScope.user.user;
            }

            //=================== ENDERECO
         //   var enderecos =[];
          //  enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,user),action));

   //    debugger  //notafiscal
console.log(oNFNote);

     //   var oObject = fModels.amont(empresa,"INSERT");
    //    oObject.usuarios.push(fModels.amont(qat.model.fnUsuario(usuario,"INSERT","system")));
        SysMgmtData.processPostPageData("main/api/request",{
                url: "vendas/api/nfSaidas/insert",
                token: $rootScope.authToken,
                request: new qat.model.reqNotaFiscal(fModels.amont(oNFNote,action) ,true, true)}, function(res){
               debugger
           if(res.operationSuccess == true)
           {
                initLoad = true;
                toastr.success('Deu Certo seu tanga.', 'Sucess');
           }
           else
           {
               toastr.error('County form error, please correct and resubmit.', 'Error');
           }

        });
        }

	factory.method1 = function() {
			//..

		}

	factory.method2 = function() {
			//..
		}

	return factory;
	}]);
})();