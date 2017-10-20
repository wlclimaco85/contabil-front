;(function () {
  'use strict'
  var commonAuth = angular.module('wdApp.ajaxCalls.validation', [])

  commonAuth.factory('validationFactory', [
    function (ModalService) {
      return {
        cpf: function (value) {
          var i
          var s = value
          var c = s.substr(0, 9)
          var dv = s.substr(9, 2)
          var d1 = 0
          var v = false

          for (i = 0; i < 9; i++) {
            d1 += c.charAt(i) * (10 - i)
          }
          if (d1 == 0) {
            return true
          }
          d1 = 11 - (d1 % 11)
          if (d1 > 9) d1 = 0
          if (dv.charAt(0) != d1) {
            return true
          }

          d1 *= 2
          for (i = 0; i < 9; i++) {
            d1 += c.charAt(i) * (11 - i)
          }
          d1 = 11 - (d1 % 11)
          if (d1 > 9) d1 = 0
          if (dv.charAt(1) != d1) {
            return true
          }
          if (!v) {
            return false
          }
          return true
        },
        cnpj: function (cnpj) {
          if (cnpj.length < 14) {
            return false
          }

          cnpj = cnpj.replace(/[^\d]+/g, '')

          if (cnpj == '') return false

          if (cnpj.length != 14)
            return false

          // Elimina CNPJs invalidos conhecidos
          if (cnpj == '00000000000000' ||
            cnpj == '11111111111111' ||
            cnpj == '22222222222222' ||
            cnpj == '33333333333333' ||
            cnpj == '44444444444444' ||
            cnpj == '55555555555555' ||
            cnpj == '66666666666666' ||
            cnpj == '77777777777777' ||
            cnpj == '88888888888888' ||
            cnpj == '99999999999999') {
            return false
          }
          // Valida DVs
          var tamanho = cnpj.length - 2
          var numeros = cnpj.substring(0, tamanho)
          var digitos = cnpj.substring(tamanho)
          var soma = 0
          var pos = tamanho - 7
          for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2)
              pos = 9
          }
          var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
          if (resultado != digitos.charAt(0)) {
            return false
          }
          tamanho = tamanho + 1
          numeros = cnpj.substring(0, tamanho)
          soma = 0
          pos = tamanho - 7
          for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2)
              pos = 9
          }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
          if (resultado != digitos.charAt(1)) {
            return false
          }
          return true
        },
        // County Object
        categoria: function () {
          $('.CategoriaForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp
            }
          })
        },
        uniMed: function () {
          $('.UniMedForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        produtoEmpresa: function () {
          $('.ProdutoEmpresaForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        cfop: function () {
          $('.cfopForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'firstName': notEmptyStringMinMaxRegexp,
              'lastName': integerNotEmptyValidation
            }
          })
        },
        processo: function () {
          $('.cfopForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'firstName': notEmptyStringMinMaxRegexp,
              'lastName': integerNotEmptyValidation
            }
          })
        },
        cliente: function () {
          $('.clienteForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nomeResponsavel': notEmptyStringMinMaxRegexp,
              'cpf': integerNotEmptyValidation
            }
          })
        },
        advogado: function () {
          $('.advogadoForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nomeResponsavel': notEmptyStringMinMaxRegexp,
              'cpf': integerNotEmptyValidation
            }
          })
        },
        pdVendas: function () {
          $('.nfSaidaForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        regime: function () {
          $('.regimeForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'descricao': integerNotEmptyValidation
            }
          })
        },
        orcamento: function () {
          $('.orcamentoForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        ordemServico: function () {
          $('.ordemServicoForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        nfSaida: function () {
          $('.nfSaidaForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        nfEntrada: function () {
          $('.nfEntradaForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        empresa: function (vm,scope) {

          scope.validationInsEst = function(tipo, value)
          {
            if (tipo && tipo == 2)
            {
              if (value)
              {
                return true

              }
              else
              {
                return false

              }
            }
            else
            {
              return false
            }
          }
          scope.validationInsEstSubTrib = function(tipo, value)
          {
            if (tipo && tipo == 2)
            {
              if (value)
              {
                return false

              }
              else
              {
                return true

              }
            }
            else
            {
              return true
            }
          }
          scope.validationIndIE = function(tipo, value)
          {
            if (tipo && tipo == 2)
            {
              if (value)
              {
                return false

              }
              else
              {
                return true

              }
            }
            else
            {
              return true
            }
          }
          scope.validationIncriMun = function(tipo, value)
          {
            if (tipo && tipo == 2)
            {
              if (value)
              {
                return false

              }
              else
              {
                return true

              }
            }
            else
            {
              return true
            }
          }
          scope.validationInsSuf = function(tipo, value)
          {
            if (tipo && tipo == 2)
            {
              if (value)
              {
                return false

              }
              else
              {
                return true

              }
            }
            else
            {
              return true
            }
          }

          //=====================
          scope.validationEstado = function() {}
          scope.validationMunicipio = function() {}

        },
        tributacao: function () {
          $('.tributacaoForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'email': integerNotEmptyValidation,
              'texto': integerNotEmptyValidation
            }
          })
        },
        contasPagar: function () {
          $('.contasPagarForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              '#ex1': notEmptyStringMinMaxRegexp,
              '#descricao': notEmptyStringMinMaxRegexp,
              '#dataVencimento': notEmptyStringMinMaxRegexp,
              '#conta': notEmptyStringMinMaxRegexp,
              '#fin_valor': notEmptyStringMinMaxRegexp
            }
          })
        },
        contasReceber: function () {
          $('.contasReceberForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              '#ex1': notEmptyStringMinMaxRegexp,
              '#descricao': notEmptyStringMinMaxRegexp,
              '#dataVencimento': notEmptyStringMinMaxRegexp,
              '#conta': notEmptyStringMinMaxRegexp,
              '#fin_valor': notEmptyStringMinMaxRegexp
            }
          })
        },
        conta: function () {
          $('.regimeForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'descricao': integerNotEmptyValidation
            }
          })
        },
        formaPg: function () {
          $('.formaPgForm').formValidation({
            framework: 'bootstrap',
            icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              'nome': notEmptyStringMinMaxRegexp,
              'descricao': integerNotEmptyValidation
            }
          })
        }
      }
    }
  ])
})()
