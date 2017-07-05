(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope', 'fModels', 'SysMgmtData', 'toastr', 'doisValorFactory','validationFactory' ,function($rootScope, fModels, SysMgmtData, toastr, doisValorFactory,validationFactory){
		var factory = {};
//fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
	factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,action,url,callBack){

         //===============Documentos====================
         var documentos = [];
         for(var x=0;x < empresa.documentos.length;x++)
         {
            if(empresa.documentos[x].numero == undefined || empresa.documentos[x].numero == undefined )
            {
                delete empresa.documentos[x]
            }
            else
            {
                if((empresa.documentos[x].id != null)&&(empresa.documentos[x].id != undefined))
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"UPDATE",$rootScope.user.user),"UPDATE"));
                }
                else
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"INSERT",$rootScope.user.user),"INSERT"));
                }

            }

         }
         empresa.documentos =[];
         empresa.documentos = documentos;

         //=================== ENDERECO
         empresa.enderecos =[];
         empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));

         //==================Telefone==================================
         var telefonesAux = [];
         for(var x=0;x < telefones.length;x++)
         {
            if(telefones[x].telefone == undefined || telefones[x].telefone == undefined )
            {

                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"DELETE"),"DELETE"));
                }
                delete telefones[x].telefone
            }
            else
            {
                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"UPDATE"),"UPDATE"));
                }
                else
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"INSERT"),"INSERT"));
                }

            }

         }
         empresa.telefones =[];
         empresa.telefones = telefonesAux;

         //==================EMAIL==================================
         var emailsAux = [];
         var email = {};
         for(var x=0;x < emails.length;x++)
         {
            email = emails[x].email;

            if(email == undefined || email == undefined )
            {

                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"DELETE"),"DELETE"));
                }
                delete emails[x].email;
            }
            else
            {
                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"UPDATE"),"UPDATE"));
                }
                else
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"INSERT"),"INSERT"));
                }

            }

         }
         empresa.emails =[];
         empresa.emails = emailsAux;


            var oObject = fModels.amont(empresa,action);

                SysMgmtData.processPostPageData("main/api/request", {
                    url: url,
                    token: $rootScope.authToken,
                    request: new qat.model.reqCliente(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
        }

	factory.fnDelete = function() {
			//..
		}

    factory.fnTableCliente = function() {
            //..
        }

	factory.fnOpenView = function(vm,scope) {


      scope.today = function () {
        scope.dt = new Date()
      }
      scope.today()

      scope.clear = function () {
        scope.dt = null
      }

      scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      }

      scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      }

      // Disable weekend selection
      function disabled (data) {
        var date = data.date,
          mode = data.mode
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6)
      }

      scope.toggleMin = function () {
        scope.inlineOptions.minDate = scope.inlineOptions.minDate ? null : new Date()
        scope.dateOptions.minDate = scope.inlineOptions.minDate
      }

      scope.toggleMin()

      scope.open1 = function () {
        scope.popup1.opened = true
      }

      scope.open2 = function () {
        scope.popup2.opened = true
      }

      scope.setDate = function (year, month, day) {
        scope.dt = new Date(year, month, day)
      }

      scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate']
      scope.format = scope.formats[1]
      scope.altInputFormats = ['M!/d!/yyyy']

      scope.popup1 = {
        opened: false
      }

      scope.popup2 = {
        opened: false
      }

      var tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      var afterTomorrow = new Date()
      afterTomorrow.setDate(tomorrow.getDate() + 1)
      scope.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ]

      function getDayClass (data) {
        var date = data.date,
          mode = data.mode
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0)

          for (var i = 0; i < scope.events.length; i++) {
            var currentDay = new Date(scope.events[i].date).setHours(0, 0, 0, 0)

            if (dayToCheck === currentDay) {
              return scope.events[i].status
            }
          }
        }

        return ''
      }

      scope.emails = [
        {
          nome: 'form1',
          email: {
            emailTypeEnum: 1
          }
        }]
      scope.telefones = [
        {
          nome: 'form1',
          telefone: {
            telefoneTypeEnum: 1
          }
        }]
      scope.confirmed = ''
      scope.empresa = {
        tipoPessoa: 1,
        pessoaTipo: [],
        documentos: [
          {
            documentoTypeEnumValue: 1,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 2,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 12,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 4,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 14,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 10,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 3,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          },
          {
            documentoTypeEnumValue: 11,
            tableEnumValue: 1,
            createUser: 'System',
            createDateUTC: (new Date()).getTime(),
            modifyUser: 'System',
            modifyDateUTC: (new Date()).getTime()

          }]
      }

      scope.cliente = {
        pessoaTipos: [
          {
            pessoaTypeEnum: 'CLIENTE',
            label: 'Cliente'
          },
          {
            pessoaTypeEnum: 'FORNECEDOR',
            label: 'Fornecedor'
          },
          {
            pessoaTypeEnum: 'TRANSPORTADOR',
            label: 'Transportador'
          },
          {
            pessoaTypeEnum: 'CONSFINAL',
            label: 'Consumidor Final'
          }]
      }

      scope.changes = function ($event, id) {
        var checkbox = $event.target
        if (checkbox.checked) {
          scope.empresa.pessoaTipo.push(qat.model.fnPessoaTipo(id.pessoaTypeEnum, 'INSERT', 'System'))
        }else {
          for (x = 0; x < scope.empresa.pessoaTipo.length; x++) {
            if (scope.empresa.pessoaTipo[x].pessoaTypeEnum == id.pessoaTypeEnum) {
              scope.empresa.pessoaTipo.splice(x, 1)
            }
          }
        //  scope.empresa.pessoaTipo.remove(qat.model.fnPessoaTipo(id.pessoaTypeEnum,"INSERT","System"))
        }
        console.log(scope.empresa.pessoaTipo)
      }

      // Endereço
      scope.enderecos = []
      scope.enderecos[0] = {
        bairro: '',
        complemento: '',
        codIbge: '',
        cidade: {},
        logradouro: ''
      }

      var callbackEstado = function (res) {
        if (res.operationSuccess == true) {
          scope.estados = res.estadoList
        }
      }

      var callbackCidade = function (res) {
        if (res.operationSuccess == true) {
          scope.cidades = res.cidadeList
        }
      }

      doisValorFactory.empresa(scope)

      qat.model.select.anonimo('cadastros/api/estado/fetchPage', true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado)

      scope.countrySelected = function (selected) {
        if (selected) {
          qat.model.select.anonimo('cadastros/api/cidade/fetchPage', true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade)
        }
      }

      scope.buscaRCep = function (_cepValue) {
        var cepValue = _cepValue
        var formatedCep

        $.getJSON('//viacep.com.br/ws/' + _cepValue + '/json/?callback=?', function (res) {

          scope.enderecos[0].bairro = res.bairro
          scope.enderecos[0].complemento = res.complemento
          scope.enderecos[0].codIbge = res.ibge
          scope.enderecos[0].cidade = {
            nome: res.localidade,
            estado: {
              abreviacao: res.uf
            }
          }
          scope.enderecos[0].logradouro = res.logradouro
        })
      }
      // ========================================

      // ============== Validation ====================
      scope.validationCPF = function(tipo, value)
			{
				if (value && tipo == 1)
				{
					validationFactory.cpf(value);
				}
        else
          return true;

			}

			scope.validationCNPJ = function(tipo, cnpj)
			{

	/*			if (tipo && tipo == 2)
				{
					validationFactory.cnpj(cnpj);
				}
				else
				{
					return false;
				} */
        return false;
			}
			scope.validationInsEst = function(tipo, value)
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
					return false
				}
			}
      scope.validationInsMun = function(tipo, value)
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
					return false
				}
			}
     // ===========================================

		}

    factory.fnMontObject = function(_object,enderecos,action) {
            _object.enderecos =[];
            _object.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnTelefones($(this).val(),null,1,action),action));
                    count = count + 1;
                }
            });
            _object.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.emails:visible').each(function() {
                if($(this).find('.input-email').val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnEmails($(this).find('.input-email').val(),$(this).find('.input-id').val(),1,action),action));
                    count = count + 1;
                }
            });

            _object.emails = bb;

            return _object;
        }

	return factory;
	}]);
})();


