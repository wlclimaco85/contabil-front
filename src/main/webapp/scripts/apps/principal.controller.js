(function() {
    angular.module('wdApp.apps.principal', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PrincipalController', principalController);

    function principalController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory) {
        var vm = this;

      SysMgmtData.processPostPageData("main/api/anonimo",{
                url: "site/api/fetchPage",
                request: new qat.model.siteInquiryRequest( 100/20, true, "http://localhost:8080/webSite/")}, function(res){
           console.log(res)

           vm.site = new qat.model.Site(res.sites[0]);
      });


    }
})();
(function() {
    angular.module('wdApp.apps.principal.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PrincipalInsertController', function($rootScope, $scope, fModels, SysMgmtData, fEmpresa) {
            var vm = this;

            $scope.forms = [{ nome : 'form1',telefone :{}}];
            $scope.count = 0;

            $scope.empresa = {
            telefones :[],
            enderecos : [{
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),
            }],
            documentos          : [{
                       documentoTypeEnumValue : 1,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 2,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 3,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 4,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 5,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    },
                    {
                       documentoTypeEnumValue : 6,
                       numero : 0,
                       tableEnumValue : 1,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),

                    }]
        };
        $scope.enderecos = [];


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
            var fnCallBack = function(oResponse) {
                debugger
                console.log(oResponse)
            }
            $scope.saveEmpresa = function() {

                debugger
                for(x = 0;x< $scope.forms.length; x++ )
                {
                    $scope.empresa.telefones.push(fModels.amont($scope.forms[x].telefone,"INSERT"));

                }


                console.log($scope.empresa);
                console.log($scope.enderecos);
                fEmpresa.fnMontaObjeto($scope.empresa,$scope.enderecos,"INSERT")
             //   fnMontaObjeto();
                debugger
                console.log($scope.empresa)

                var oObject = fModels.amont($scope.empresa,"INSERT");

                SysMgmtData.processPostPageData("main/api/anonimo",{
                        url: "entidade/api/empresa"+   WebDaptiveAppConfig.create_url,
                        request: new qat.model.reqEmpr(oObject ,true, true)}, function(res){
                   console.log(res)
                   debugger
                   if(res.operationSuccess == true)
                   {
                      debugger
                   }

                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.principal.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PrincipalUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.principal = {};
            $scope.principal = $rootScope.principal;
            console.log($rootScope.principal)
            $scope.savePrincipal = function() {
                fPessoa.fnMontaObjeto($scope.principal, null, 'UPDATE', "site/api/principal/update/", fnCallBack);
            }
        });
})();
(function() {
    angular.module('wdApp.apps.principal.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PrincipalDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.principal = {};
            $scope.principal = $rootScope.principal;
            console.log($rootScope.principal)
            $scope.savePrincipal = function() {
                fPessoa.fnDelete($scope.principal, "site/api/principal/update/", function(){console.log('ddda   aqui')});
            }
        });
})();
(function() {
    angular.module('wdApp.apps.principal.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('PrincipalViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa) {
            var vm = this;
            $scope.principal = {};
            $scope.principal = $rootScope.principal;
            console.log($rootScope.principal)
            $scope.savePrincipal = function() {
                fPessoa.fnOpenView($scope.principal,"site/api/principal/update/", function(){console.log('aqui')});
            }
        });
})();