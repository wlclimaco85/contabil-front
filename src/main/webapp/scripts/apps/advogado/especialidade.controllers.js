;(function () {
  angular.module('wdApp.apps.especialidade', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
    .controller('EspecialidadeController', especialidadeController)

  function especialidadeController ($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr,localStorageService) {
    var vm = this
    $scope.especialidades = []

    var requestInitial = function()
    {
        SysMgmtData.processPostPageData("main/api/request", {
            url: 'entidade/api/doisValores/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.doisValoresInquiryRequest(null, 100 / 20, true, JSON.parse(localStorage.getItem('empresa')).id,null)
        }, function(res) {
            if (res.operationSuccess == true) {
              var processos = res.doisValoresList;
              $scope.especialidades = []
              for (var x = 0; x < processos.length; x++) {
                var planos = processos[x]
                if (planos.doisValorType != null) {
                  switch (planos.doisValorType.tipo) {
                    case 'ESPECIALIDADE':
                        $scope.especialidades.push(planos)
                    break
                  }
                }
              }
              localStorageService.set('doisValores', res.doisValoresList);
            }
        });
    }

    requestInitial();
    $scope.checkName = function (data, id) {
      if (id === 2 && data !== 'awesome') {
        return 'Username 2 should be `awesome`'
      }
    }

    $scope.fnShow = function (date) {
        if(date.modifyDateUTC)
            return moment(date.modifyDateUTC).format('DD/MM/YYYY - HH:mm:s');
        else
            return moment(date.createDateUTC).format('DD/MM/YYYY - HH:mm:s');
    }

    $scope.fnShow2 = function (date) {
        if(date.modifyUser)
            return date.modifyUser;
        else
            return date.createUser;
    }

    $scope.saveUser = function (data, especialidade) {debugger
      // $scope.user not updated yet
      var sUrl = ''
      if (especialidade.id) {
        sUrl = 'entidade/api/doisValores/update'
      } else {
        sUrl = 'entidade/api/doisValores/insert'
      }
      // angular.extend(data, new qat.model.GrupoTrabalho(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user))
      var especialidade = {
        id: especialidade.id ? especialidade.id : null,
        nome : data.nome,
        value : data.nome,
        descricao : data.nome,
        doisValorType : {id : 156},
        pagina :{id :  3}
      }
      var oObject = new qat.model.fnDoisValor1(fModels.amont(especialidade, especialidade.id ? 'UPDATE' : 'INSERT'), especialidade.id ? 'UPDATE' : 'INSERT', $rootScope.user.user)

      SysMgmtData.processPostPageData('main/api/request', {
        url: sUrl,
        token: $rootScope.authToken,
        request: new qat.model.reqDoisValor(oObject, false, false)
      }, function (res) {
        if (res.operationSuccess == true) {
          toastr.success('Deu Certo seu tanga.', 'Sucess');debugger
          
          requestInitial();
        }
      })
    }

    // remove user
    $scope.removeUser = function (especialidade) {
      var oObject = new qat.model.Especialidade(fModels.amont(especialidade, 'DELETE'), 'DELETE', $rootScope.user.user)

      SysMgmtData.processPostPageData('main/api/request', {
        url: 'produto/api/especialidade/delete',
        token: $rootScope.authToken,
        request: new qat.model.reqEspecialidade(oObject, true, true)
      }, function (res) {
        toastr.success('Deu Certo seu tanga.', 'Sucess')
        $scope.especialidades = res.especialidadeList
      })
    }

    // add user
    $scope.addUser = function () {
      debugger
      $scope.inserted = new qat.model.Especialidade({}, 'INSERT', $rootScope.user.user)
      var test = []
      test[0] = $scope.inserted

      for (var x = 0; x < $scope.especialidades.length; x++) {
        test.push($scope.especialidades[x])
      }

      $scope.especialidades = []
      $scope.especialidades = test
    }
  }
})()
