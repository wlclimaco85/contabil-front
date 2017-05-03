(function() {
    'use strict';
    var commonAuth = angular.module('wdApp.ajaxCalls.filters', ['angularModalService']);

    commonAuth.factory('FiltersFactory', ['ModalService', function(ModalService) {
        return {
            //County Object
            categoria: function() {},
            uniMed: function() {},
            cfop: function() {},
            regime: function() {},
            cliente: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            fornecedor: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            transportador: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            pdVendas: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            orcamento: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            ordemServico: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            nfSaida: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            nfEntrada: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            tributacao: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }, {
                    type: 'select',
                    values: ['Entrada', 'Saida']
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }];
            },
            contasPagar: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            contasReceber: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            conta: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            doisValores: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            },
            formaPg: function() {
                return [{
                    type: 'number'
                }, {
                    type: 'number',
                }];
            }
        };
    }]);
})();