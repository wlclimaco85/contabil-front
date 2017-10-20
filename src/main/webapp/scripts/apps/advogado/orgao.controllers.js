(function() {
  angular.module('wdApp.apps.orgao', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoController', orgaoController);

  function orgaoController($scope, fModels, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory, $filter, toastr) {
      var vm = this;
      $scope.orgaos = [];

      SysMgmtData.processPostPageData("main/api/request", {
          url: 'produto/api/orgao/fetchPage',
          token: $rootScope.authToken,
          request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
      }, function(res) {
          if (res.operationSuccess == true) {
              $scope.orgaos = res.orgaoList;
              console.log($scope.orgaos);
          }
      });

      $scope.checkName = function(data, id) {
          if (id === 2 && data !== 'awesome') {
              return "Username 2 should be `awesome`";
          }
      };

      $scope.saveUser = function(data, orgao) {
          //$scope.user not updated yet

          var sUrl = "";
          if (orgao.id) {
              sUrl = "produto/api/orgao/update"
          } else {
              sUrl = "produto/api/orgao/insert"
          }
          //angular.extend(data, new qat.model.Orgao(fModels.amont(data, 'INSERT'), 'INSERT', $rootScope.user.user));
          var orgao = {
              id: orgao.id ? orgao.id : null,
              orgao: data.orgao,
              fabricante: data.fabricante,
              emailList: [{ id: (orgao.emailList.length > 0 ? orgao.emailList[0].id : null), email: data.email }],
              telefoneList: [{ id: (orgao.telefoneList.length > 0 ? orgao.telefoneList[0].id : null), numero: data.numero }]
          }
          var oObject = new qat.model.Orgao(fModels.amont(orgao, orgao.id ? 'UPDATE' : 'INSERT'), orgao.id ? 'UPDATE' : 'INSERT', $rootScope.user.user);

          SysMgmtData.processPostPageData("main/api/request", {
              url: sUrl,
              token: $rootScope.authToken,
              request: new qat.model.reqOrgao(oObject, true, true)
          }, function(res) {
              if (res.operationSuccess == true) {
                  toastr.success('Deu Certo seu tanga.', 'Sucess');
                  $scope.orgaos = res.orgaoList;
              }

          });
      };

      // remove user
      $scope.removeUser = function(orgao) {
          var oObject = new qat.model.Orgao(fModels.amont(orgao, 'DELETE'), 'DELETE', $rootScope.user.user);

          SysMgmtData.processPostPageData("main/api/request", {
              url: "produto/api/orgao/delete",
              token: $rootScope.authToken,
              request: new qat.model.reqOrgao(oObject, true, true)
          }, function(res) {
              toastr.success('Deu Certo seu tanga.', 'Sucess');
              $scope.orgaos = res.orgaoList;
          });
      };

      // add user
      $scope.addUser = function() {

          $scope.inserted = new qat.model.Orgao({}, 'INSERT', $rootScope.user.user);
          var test = [];
          test[0] = $scope.inserted

          for (var x = 0; x < $scope.orgaos.length; x++) {
              test.push($scope.orgaos[x]);
          }

          $scope.orgaos = [];
          $scope.orgaos = test;

      };
  }
})();
(function() {
  angular.module('wdApp.apps.orgao.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoInsertController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, ModalService, close) {
          var vm = this;
          $scope.orgao = {};
          $scope.orgao.emailList = [];
          $scope.orgao.telefoneList = [];
          $scope.sac = {};
          $scope.email = {};

          $scope.today = function() {
              return $scope.dt = new Date();
          };
          $scope.today();
          $scope.clear = function() {
              return $scope.dt = null;
          };
          $scope.open = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return $scope.opened = true;
          };
          $scope.dateOptions = {
              'year-format': "'yy'",
              'starting-day': 0
          };
          $scope.formats = ['MMMM-dd-yyyy', 'MM/dd/yyyy', 'yyyy/MM/dd'];
          $scope.format = $scope.formats[1];
          $scope.close = function(result) {
              //debugger
              close(result, 500); // close, but give 500ms for bootstrap to animate
          };
          var fnCallBack = function(oResponse) {

              console.log(oResponse)
          }
          $scope.saveOrgao = function(nfClose) {


              $scope.orgao.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'INSERT'), 'INSERT'))
              $scope.orgao.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'INSERT'), 'INSERT'))

              var oObject = fModels.amont($scope.orgao, 'INSERT');

              SysMgmtData.processPostPageData("main/api/request", {
                  url: "produto/api/orgao/insert",
                  token: $rootScope.authToken,
                  request: new qat.model.reqOrgao(oObject, true, true)
              }, function(res) {
                  //debugger
                  fnCallBack(res);
                  $scope.close();
              });
          };
      });
})();
(function() {
  angular.module('wdApp.apps.orgao.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {
          var vm = this;
          $scope.orgao = {};
          $scope.orgao = $rootScope.orgao;
          console.log($rootScope.orgao)
          $scope.saveOrgao = function() {
              $scope.orgao.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'UPDATE'), 'UPDATE'))
              $scope.orgao.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'UPDATE'), 'UPDATE'))

              var oObject = fModels.amont($scope.orgao, 'UPDATE');

              SysMgmtData.processPostPageData("main/api/request", {
                  url: "produto/api/orgao/update",
                  token: $rootScope.authToken,
                  request: new qat.model.reqOrgao(oObject, true, true)
              }, function(res) {

              });
          }
      });
})();
(function() {
  angular.module('wdApp.apps.orgao.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoDeleteController', function($rootScope, $scope, fModels, SysMgmtData) {
          var vm = this;
          $scope.orgao = {};
          $scope.orgao = $rootScope.orgao;
          console.log($rootScope.orgao)
          $scope.saveOrgao = function() {
              $scope.orgao.emailList.push(fModels.amont(qat.model.fnEmails($scope.email.email, $scope.email.id, 1, 'DELETE'), 'DELETE'))
              $scope.orgao.telefoneList.push(fModels.amont(qat.model.fnTelefones($scope.sac.numero, $scope.sac.id, 1, 'DELETE'), 'DELETE'))

              var oObject = fModels.amont($scope.orgao, 'DELETE');

              SysMgmtData.processPostPageData("main/api/request", {
                  url: "produto/api/orgao/insert",
                  token: $rootScope.authToken,
                  request: new qat.model.reqOrgao(oObject, true, true)
              }, function(res) {

              });
          }
      });
})();
(function() {
  angular.module('wdApp.apps.orgao.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
      .controller('OrgaoViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
          var vm = this;
          $scope.orgao = {};
          $scope.orgao = $rootScope.orgao;
          console.log($rootScope.orgao)
          $scope.saveOrgao = function() {
              fPessoa.fnOpenView($scope.orgao, "produto/api/orgao/update/", function() { console.log('aqui') });
          }
      });
})();

(function() {
  angular.module('wdApp.apps.orgao.select', ['ngSanitize', 'ui.select', 'angularModalService'])
      .filter('propsFilter', function() {
          return function(items, props) {
              var out = [];

              if (angular.isArray(items)) {
                  var keys = Object.keys(props);

                  items.forEach(function(item) {
                      var itemMatches = false;

                      for (var i = 0; i < keys.length; i++) {
                          var prop = keys[i];
                          var text = props[prop].toLowerCase();
                          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                              itemMatches = true;
                              break;
                          }
                      }

                      if (itemMatches) {
                          out.push(item);
                      }
                  });
              } else {
                  // Let the output be the input untouched
                  out = items;
              }

              return out;
          };
      }).controller('OrgaoSelectController', orgaoSelectController);

  function orgaoSelectController($scope, $http, $timeout, $interval, dialogFactory) {
      var vm = this;

      var openDialogUpdateCreate = function() {
          bookIndex = 0;
          $('.OrgaoForm')
              .formValidation({
                  framework: 'bootstrap',
                  icon: {
                      valid: 'glyphicon glyphicon-ok',
                      invalid: 'glyphicon glyphicon-remove',
                      validating: 'glyphicon glyphicon-refresh'
                  },
                  fields: {
                      'orgao': notEmptyStringMinMaxRegexp,
                      'fabricante': integerNotEmptyValidation,
                      'email': integerNotEmptyValidation,
                  }
              });
      }

      var closee = function() {
          var callbackBanco = function(res) {
              var planos = "";

              if (res.operationSuccess == true) {

                  vm.orgao = res.orgaoList;

              }
          }

          qat.model.select.util("produto/api/orgao/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id), callbackBanco);
      }
      vm.addOrgao = function() {

          dialogFactory.dialog('views/produto/dialog/dOrgao.html', "OrgaoInsertController", openDialogUpdateCreate, closee);


      }

      vm.disabled = undefined;
      vm.searchEnabled = undefined;

      vm.setInputFocus = function() {
          $scope.$broadcast('UiSelectDemo1');
      };

      vm.enable = function() {
          vm.disabled = false;
      };

      vm.disable = function() {
          vm.disabled = true;
      };

      vm.enableSearch = function() {
          vm.searchEnabled = true;
      };

      vm.disableSearch = function() {
          vm.searchEnabled = false;
      };

      vm.clear = function() {
          vm.person.selected = undefined;
          vm.address.selected = undefined;
          vm.country.selected = undefined;
      };

      vm.someGroupFn = function(item) {

          if (item.name[0] >= 'A' && item.name[0] <= 'M')
              return 'From A - M';

          if (item.name[0] >= 'N' && item.name[0] <= 'Z')
              return 'From N - Z';

      };

      vm.firstLetterGroupFn = function(item) {
          return item.name[0];
      };

      vm.reverseOrderFilterFn = function(groups) {
          return groups.reverse();
      };

      vm.personAsync = { selected: "wladimir@email.com" };
      vm.peopleAsync = [];

      $timeout(function() {
          vm.peopleAsync = [

          ];
      }, 3000);

      vm.counter = 0;
      vm.onSelectCallback = function(item, model) {
          vm.counter++;
          vm.eventResult = { item: item, model: model };
      };

      vm.removed = function(item, model) {
          vm.lastRemoved = {
              item: item,
              model: model
          };
      };

      vm.tagTransform = function(newTag) {
          var item = {
              name: newTag,
              email: newTag.toLowerCase() + '@email.com',
              age: 'unknown',
              country: 'unknown'
          };

          return item;
      };

      vm.peopleObj = {

      };

      vm.person = {};

      vm.person.selectedValue = vm.peopleObj[3];
      vm.person.selectedSingle = 'Samantha';
      vm.person.selectedSingleKey = '5';
      // To run the demos with a preselected person object, uncomment the line below.
      //vm.person.selected = vm.person.selectedValue;

      vm.orgao = [

      ];

      closee();

      vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

      vm.singleDemo = {};
      vm.singleDemo.color = '';
      vm.multipleDemo = {};
      vm.multipleDemo.colors = ['Blue', 'Red'];
      vm.multipleDemo.colors2 = ['Blue', 'Red'];
      vm.multipleDemo.selectedPeople = [vm.orgao[5], vm.orgao[4]];
      vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
      vm.multipleDemo.selectedPeopleWithGroupBy = [vm.orgao[8], vm.orgao[6]];
      vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
      vm.multipleDemo.removeSelectIsFalse = [vm.orgao[2], vm.orgao[0]];

      vm.appendToBodyDemo = {
          remainingToggleTime: 0,
          present: true,
          startToggleTimer: function() {
              var scope = vm.appendToBodyDemo;
              var promise = $interval(function() {
                  if (scope.remainingTime < 1000) {
                      $interval.cancel(promise);
                      scope.present = !scope.present;
                      scope.remainingTime = 0;
                  } else {
                      scope.remainingTime -= 1000;
                  }
              }, 1000);
              scope.remainingTime = 3000;
          }
      };

      vm.address = {};
      vm.refreshAddresses = function(address) {
          var params = { address: address, sensor: false };
          return $http.get(
              'http://maps.googleapis.com/maps/api/geocode/json', { params: params }
          ).then(function(response) {
              vm.addresses = response.data.results;
          });
      };

      vm.addPerson = function(item, model) {
          if (item.hasOwnProperty('isTag')) {
              delete item.isTag;
              vm.orgao.push(item);
          }
      }


  }


})();