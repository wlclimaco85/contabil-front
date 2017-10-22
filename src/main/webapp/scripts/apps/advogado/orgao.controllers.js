;(function () {
    angular.module('wdApp.apps.orgao', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoController', orgaoController)

    function orgaoController ($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {
      var vm = this
      $scope.orgaos = []

    var requestInitial = function()
    {
        SysMgmtData.processPostPageData("main/api/request", {
            url: 'entidade/api/doisValores/fetchPage',
            token: $rootScope.authToken,
            request: new qat.model.doisValoresInquiryRequest(null, 100 / 20, true, JSON.parse(localStorage.getItem('empresa')).id,155)
        }, function(res) {
            if (res.operationSuccess == true) {
                $scope.orgaos = res.doisValoresList;
                console.log($scope.orgaos);
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

      $scope.saveUser = function (data, orgao) {
        // $scope.user not updated yet

        var sUrl = ''
        if (orgao.id) {
          sUrl = 'entidade/api/doisValores/update'
        } else {
          sUrl = 'entidade/api/doisValores/insert'
        }
        // angular.extend(data, new qat.model.Orgao(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user))
        var orgao = {
          id: orgao.id ? orgao.id : null,
          nome : data.nome,
          value : data.nome,
          descricao : data.nome,
          doisValorType : {id : 155},
          pagina :{id :  3}
        }
        var oObject = new qat.model.fnDoisValor(fModels.amont(orgao, orgao.id ? 'UPDATE' : 'INSERT'), orgao.id ? 'UPDATE' : 'INSERT', $rootScope.user.user)

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
      $scope.removeUser = function (orgao) {
        var oObject = new qat.model.fnDoisValor(fModels.amont(orgao, 'DELETE'), 'DELETE', $rootScope.user.user)

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

        for (var x = 0; x < $scope.orgaos.length; x++) {
          test.push($scope.orgaos[x])
        }

        $scope.orgaos = []
        $scope.orgaos = test
      }
    }
  })()
