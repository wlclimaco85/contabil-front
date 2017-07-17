(function() {
  'use strict';
	var commonControllers =  angular.module('wdApp.controllers', []);

	commonControllers.controller('WDAppController', ['$scope', '$rootScope', function($scope, $rootScope) {
		var $window;
		$window = $(window);

		$scope.admin = {
			layout: 'wide',
			menu: 'vertical',
			fixedHeader: true,
			fixedSidebar: true
		};

		$scope.$watch('admin', function(newVal, oldVal) {
			if (newVal.menu === 'vertical' && oldVal.menu === 'horizontal') {
			  $rootScope.$broadcast('nav:reset');
			  return;
			}
			if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
			  if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
				$scope.admin.fixedHeader = true;
				$scope.admin.fixedSidebar = true;
			  }
			  if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
				$scope.admin.fixedHeader = false;
				$scope.admin.fixedSidebar = false;
			  }
			  return;
			}
			if (newVal.fixedSidebar === true) {
			  $scope.admin.fixedHeader = true;
			}
			if (newVal.fixedHeader === false) {
			  $scope.admin.fixedSidebar = false;
			}
		}, true);

		return $scope.color = {
			primary: '#00475B',
			success: '#94B758',
			info: '#56BDF1',
			infoAlt: '#7F6EC7',
			warning: '#F3C536',
			danger: '#FFDC54'
		 };
    }]);

	commonControllers.controller('NavContainerController', ['$scope', function($scope) {}]);

	commonControllers.controller('NavController', ['$scope', 'TaskStorage', 'filterFilter','localStorageService', function($scope, TaskStorage, filterFilter,localStorageService) {
		var vm = this;
		var tasks;

		vm.test = 0;
	  $scope.empresa = {
        types: []
      };

      $scope.empresaType = 1

      function visible(){
      	//debugger
      	return true
      }

      $scope.change = function() {
      };

      $scope.submit = function() {
	      if($scope.empresaType == 1)
	      {
	      		$('.fiscal').hide();
	      }
      };


		tasks = $scope.tasks = TaskStorage.get();
		$scope.taskRemainingCount = filterFilter(tasks, {
			completed: false
		}).length;


		return $scope.empresaType;
    }]);

	commonControllers.controller('DashboardController', ['$scope', function($scope) {

	}]);

	commonControllers.controller('LoginController', ['$scope', '$rootScope', '$location', 'localStorageService','WDAuthentication','SysMgmtData', 'toastr','ModalService',
		function($scope, $rootScope, $location, localStorageService, WDAuthentication,SysMgmtData, toastr,ModalService) {

			$scope.login = function() {
				WDAuthentication.processLogin(WebDaptiveAppConfig.authenticationURL, $.param({username: $scope.username, password: $scope.password}), function(authenticationResult) {

					var authToken = authenticationResult.token;
					if (authToken !== undefined){
						$rootScope.authToken = authToken;
						localStorageService.set('authToken', authToken);
						var currentUser = {user: authenticationResult.name, roles: authenticationResult.roles};
						$rootScope.user = currentUser;

						SysMgmtData.processPostPageData("main/api/request",{
		                    url: "entidade/api/empresa/fetchUser",
							token : authToken,
		                    request: new qat.model.empresaInquiryRequest( 100/20, true,currentUser.user,null,null)}, function(res){
								if(res.operationSuccess == true)
								{
									localStorageService.set('empresa', res.empresaList[0]);
									localStorage.setItem("empresa", JSON.stringify(res.empresaList[0]));
									if(res.empresaList[0].primeiroAcesso == 0)
									{
											if(res.empresaList[0].tipo == 1)
											{
												dialogFactory.dialog('views/util/dialog/dPrimeiraAdvocacia.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}else if(res.empresaList[0].tipo == 2){
												dialogFactory.dialog('views/cadastros/dialog/dPrimeiraClinica.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}
											else if(res.empresaList[0].tipo == 3){
												dialogFactory.dialog('views/cadastros/dialog/dPrimeiraCondominio.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}
											else if(res.empresaList[0].tipo == 4){
												dialogFactory.dialog('views/cadastros/dialog/dPrimeiraContador.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}
											else if(res.empresaList[0].tipo == 5){
												dialogFactory.dialog('views/cadastros/dialog/dPrimeiraEmpresa.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}
											else if(res.empresaList[0].tipo == 6){
											//	dialogFactory.dialog('views/util/dialog/dPrimeiraEmpresa.html', "ClienteInsertController", validationFactory.cliente, function(){});
											 var _close = function(){console .log('close')};
												 ModalService.showModal({
													templateUrl: 'views/util/dialog/dPrimeiraEmpresa.html',
													controller: "NewEmpresaUpdateController"
													}).then(function(modal) {
															modal.element.modal();
															modal.close.then(function(result) {
																	if ((_close != null) && (_close != undefined))
																			_close();
															});
													});
											}
											else
											{
												dialogFactory.dialog('views/cadastros/dialog/dPrimeiraEmpresa.html', "ClienteInsertController", validationFactory.cliente, function(){});
											}
										}
								}
					          });


						SysMgmtData.processPostPageData("main/api/request",{
		                    url: "entidade/api/transaction/fetch",
							token : authToken,
							request: new qat.model.transactionInquiryRequest(new  qat.model.transaction(currentUser.user,authToken), 100/20, true,currentUser.user,null,null)}, function(res){
								if(res.operationSuccess == true)
								{
									localStorageService.set('transaction', res.transactionList[0].id);
									localStorage.setItem("transaction", JSON.stringify(res.transactionList[0]));
								}
					          });


						$rootScope.main.name = authenticationResult.name;
						localStorageService.set('currentUser', $rootScope.user);
						var tempRole = "";
						for (var prop in authenticationResult.roles) {
							tempRole += prop + " ";
						}
						$rootScope.displayRoles = tempRole;
						localStorageService.set('displayRoles', $rootScope.displayRoles);

						if ($rootScope.callingPath !== undefined){
							if ($rootScope.callingPath === '/pages/signin'){
								$rootScope.callingPath = "/principal";

							}
							$location.path($rootScope.callingPath);
						}
						else{
							$location.path( "/dashboard" );
						}
					}
					else{
							$location.path( "/pages/signin" );
					}
				});
			};
    }]);

})();
