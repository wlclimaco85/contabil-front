(function() {
  angular.module('wdApp.apps.especialidade', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('EspecialidadeController', especialidadeController);

  function especialidadeController($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {
      var vm = this;
      $scope.especialidades = [];

      SysMgmtData.processPostPageData("main/api/request", {
          url: 'pessoa/api/especialidade/fetchPage',
          token: $rootScope.authToken,
          request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
      }, function(res) {
          if (res.operationSuccess == true) {
              $scope.especialidades = res.especialidadeList;
              console.log($scope.especialidades);
          }
      });

      $scope.checkName = function(data, id) {
          if (id === 2 && data !== 'awesome') {
              return "Username 2 should be `awesome`";
          }
      };

      $scope.saveUser = function(data, especialidade) {
          //$scope.user not updated yet

          var sUrl = "";
          if (especialidade.id) {
              sUrl = "pessoa/api/especialidade/update"
          } else {
              sUrl = "pessoa/api/especialidade/insert"
          }
          //angular.extend(data, new qat.model.Especialidade(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user));
          var especialidade = {
              id: especialidade.id ? especialidade.id : null,
              especialidade: data.especialidade,
              fabricante: data.fabricante,
              emailList: [{ id: (especialidade.emailList.length > 0 ? especialidade.emailList[0].id : null), email: data.email }],
              telefoneList: [{ id: (especialidade.telefoneList.length > 0 ? especialidade.telefoneList[0].id : null), numero: data.numero }]
          }
          var oObject = new qat.model.Especialidade(fModels.amont(especialidade, especialidade.id ? 'UPDATE' : 'INSERT'), especialidade.id ? 'UPDATE' : 'INSERT', $rootScope.user.user);

          SysMgmtData.processPostPageData("main/api/request", {
              url: sUrl,
              token: $rootScope.authToken,
              request: new qat.model.reqEspecialidade(oObject, true, true)
          }, function(res) {
              if (res.operationSuccess == true) {
                  toastr.success('Deu Certo seu tanga.', 'Sucess');
                  $scope.especialidades = res.especialidadeList;
              }

          });
      };

      // remove user
      $scope.removeUser = function(especialidade) {
          var oObject = new qat.model.Especialidade(fModels.amont(especialidade, 'DELETE'), 'DELETE', $rootScope.user.user);

          SysMgmtData.processPostPageData("main/api/request", {
              url: "produto/api/especialidade/delete",
              token: $rootScope.authToken,
              request: new qat.model.reqEspecialidade(oObject, true, true)
          }, function(res) {
              toastr.success('Deu Certo seu tanga.', 'Sucess');
              $scope.especialidades = res.especialidadeList;
          });
      };

      // add user
      $scope.addUser = function() {

          $scope.inserted = new qat.model.Especialidade({}, 'INSERT', $rootScope.user.user);
          var test = [];
          test[0] = $scope.inserted

          for (var x = 0; x < $scope.especialidades.length; x++) {
              test.push($scope.especialidades[x]);
          }

          $scope.especialidades = [];
          $scope.especialidades = test;

      };
  }
})();