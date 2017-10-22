;(function () {
    angular.module('wdApp.apps.grupoTrabalho', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('GrupoTrabalhoController', grupoTrabalhoController)

    function grupoTrabalhoController ($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {
      var vm = this
      $scope.grupoTrabalhos = []

    var requestInitial = function()
    {
        SysMgmtData.processPostPageData("main/api/request", {
            url: 'entidade/api/doisValores/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.doisValoresInquiryRequest(null, 100 / 20, true, JSON.parse(localStorage.getItem('empresa')).id,152)
        }, function(res) {
            if (res.operationSuccess == true) {
                $scope.grupoTrabalhos = res.doisValoresList;
                console.log($scope.grupoTrabalhos);
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

      $scope.saveUser = function (data, grupoTrabalho) {
        // $scope.user not updated yet

        var sUrl = ''
        if (grupoTrabalho.id) {
          sUrl = 'entidade/api/doisValores/update'
        } else {
          sUrl = 'entidade/api/doisValores/insert'
        }
        // angular.extend(data, new qat.model.GrupoTrabalho(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user))
        var grupoTrabalho = {
          id: grupoTrabalho.id ? grupoTrabalho.id : null,
          nome : data.nome,
          value : data.nome,
          descricao : data.nome,
          doisValorType : {id : 152},
          pagina :{id :  3}
        }
        var oObject = new qat.model.fnDoisValor(fModels.amont(grupoTrabalho, grupoTrabalho.id ? 'UPDATE' : 'INSERT'), grupoTrabalho.id ? 'UPDATE' : 'INSERT', $rootScope.user.user)

        SysMgmtData.processPostPageData('main/api/request', {
          url: sUrl,
          token: $rootScope.authToken,
          request: new qat.model.reqDoisValor(oObject, false, false)
        }, function (res) {
          if (res.operationSuccess == true) {
            toastr.success('Deu Certo seu tanga.', 'Sucess')
            requestInitial();
          }
        })
      }

      // remove user
      $scope.removeUser = function (grupoTrabalho) {
        var oObject = new qat.model.fnDoisValor(fModels.amont(grupoTrabalho, 'DELETE'), 'DELETE', $rootScope.user.user)

        SysMgmtData.processPostPageData('main/api/request', {
          url: 'entidade/api/doisValores/delete',
          token: $rootScope.authToken,
          request: new qat.model.reqDoisValor(oObject, false, false)
        }, function (res) {
          toastr.success('Deu Certo seu tanga.', 'Sucess')
          requestInitial();
        })
      }

      // add user
      $scope.addUser = function () {

        $scope.inserted = new qat.model.fnDoisValor({}, 'INSERT', $rootScope.user.user)
        var test = []
        test[0] = $scope.inserted

        for (var x = 0; x < $scope.grupoTrabalhos.length; x++) {
          test.push($scope.grupoTrabalhos[x])
        }

        $scope.grupoTrabalhos = []
        $scope.grupoTrabalhos = test
      }
    }
  })()
