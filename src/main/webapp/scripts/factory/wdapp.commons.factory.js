(function() {
    'use strict';
    var commonAuth = angular.module('wdApp.ajaxCalls', ['angularModalService']);

    commonAuth.factory('dialogFactory', ['ModalService', function(ModalService) {
        return {
            //County Object
            dialog: function(_url, _controller, _callback, _close) {
                ModalService.showModal({
                    templateUrl: _url,
                    controller: _controller
                }).then(function(modal) {
                    modal.element.modal();
                    if (_callback)
                        _callback();
                    modal.close.then(function(result) {
                        if ((_close != null) && (_close != undefined))
                            _close();
                    });
                });
            },
            icms00: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.modalidadeBCICMS ? oObject.modalidadeBCICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + (oObject ? oObject.percentualAliquota : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms10: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.modalidadeBCICMS ? oObject.modalidadeBCICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS ST</td><td>" + (oObject.modalidadeBCICMSST ? oObject.modalidadeBCICMSST.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Red. da BC ICMS ST</td><td>" + oObject.percentualReducaoBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Mar. de vr adic ICMS ST</td><td>" + oObject.percentualMargemValorICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms11: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + oObject.modalidadeBCICMS ? oObject.modalidadeBCICMS.descricao : "" + "</td></tr>"
                retorno = retorno + "<tr><td>BC ICMS</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>ICMS</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>BC da operação própria</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>ICMS</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS ST</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS ST</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota ST</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>UF do ICMS ST devido na operaçao</td><td>" + oObject.percentualAliquota + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms20: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.modalidadeBCICMS ? oObject.modalidadeBCICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Desoneracao ICMS</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms30: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + (oObject.modalidadeBCICMS ? oObject.modalidadeBCICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de Valor adic. do ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota ICMS ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"

                return retorno + '</tbody></table>';
            },
            icms40: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo da desoneração ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms41: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo da desoneração ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms42: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo da desoneração ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms50: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo da desoneração ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms51: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade de determ. da BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Perc. Red. da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS</td><td>" + oObject.percentualICMS + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms60: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms70: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + (oObject.percentualReducaoBC ? oObject.percentualReducaoBC : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" +(oObject.desoneracao ? oObject.desoneracao.descricao : "")+ "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icms90: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" +(oObject.desoneracao ? oObject.desoneracao.descricao :"")+ "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            icmsPartilhado: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + +(oObject.desoneracao ? oObject.desoneracao.descricao :"")+ + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmsst: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + +(oObject.desoneracao ? oObject.desoneracao.descricao :"")+ + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn101: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn102: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn103: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn201: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn202: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn203: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn300: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn400: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn500: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },

            icmssn900: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            tributado: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            },
            tributados: function(oObject) {
                var retorno = '<table class="table"><thead></thead><tbody>';
                retorno = retorno + "<tr><td>CST</td><td>" + (oObject.situacaoTributaria ? oObject.situacaoTributaria.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade BC ICMS</td><td>" + (oObject.motivoDesoneracaoICMS ? oObject.motivoDesoneracaoICMS.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Redução da BC ICMS</td><td>" + oObject.percentualReducaoBC + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota</td><td>" + oObject.percentualAliquota + "</td></tr>"
                retorno = retorno + "<tr><td>Motivo desoneração</td><td>" + (oObject.desoneracao ? oObject.desoneracao.descricao : "") + "</td></tr>"
                retorno = retorno + "<tr><td>Modalidade da BC ST</td><td>" + oObject.modalidadeBCICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Margem de valor adic ICMS ST</td><td>" + oObject.percentualMargemValorAdicionadoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Aliquota do ICMS ST</td><td>" + oObject.valorBCST + "</td></tr>"
                retorno = retorno + "<tr><td>Redução Base Calc ST</td><td>" + oObject.percentualAliquotaImpostoICMSST + "</td></tr>"
                retorno = retorno + "<tr><td>Preço unit. Pauta ST</td><td>" + oObject.valorICMSST + "</td></tr>"
                return retorno + '</tbody></table>';
            }

        };
    }]);
})();