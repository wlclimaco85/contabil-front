console.log("angular object", angular); //used for debugging and training only do not put in production
var WebDaptiveAppConfig = {
	//Main area for config URLs for WebDaptive

	/* When set to false a query parameter is used to pass on the auth token.
	 * This might be desirable if headers don't work correctly in some
	 * environments and is still secure when using https. */
	useAuthTokenHeader: true,
	//string to 191.243.199.158 10.100.18.176check for rest calls to jDpative Back-end so the angular http provider can inject x-auth token
	restAuthBase: '',
//	authenticationURL: 'http://env-8258850.jelastic.saveincloud.net/springmvc-angularjs/api/authenticate',
	authenticationURL: '/springmvc-angularjs/api/authenticate',
	base_county_url: 'http://front01.eu-gb.mybluemix.net/county/api',
	base_procedure_url: 'http://front01.eu-gb.mybluemix.net/procedure/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	//site
	base_site_url: 'https://back.eu-gb.mybluemix.net/site/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	//produto
	base_site_url: 'https://back.eu-gb.mybluemix.net/produto/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	base_empresa_url: 'https://back.eu-gb.mybluemix.net/entidade/api',

};


(function()
{
	'use strict';
	var wdAppSite = angular.module('wdAppSite', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngTouch', 'hl.sticky', 'mwl.calendar',
		'ui.bootstrap', 'easypiechart', 'textAngular', 'ui.mask','wdApp.ajaxCall.datas','wdApp.ajaxCall.email','wdApp.ajaxCall.telefone','wdApp.ajaxCall.documento','wdApp.ajaxCall.endereco',
        'mgcrea.ngStrap', 'ui.tree', 'ngMap', 'ui.toggle', 'ngTagsInput', 'toastr', 'angular-loading-bar', 'chart.js', 'ngecharts',
        'agGrid', 'base64', 'LocalStorageModule', 'wdApp.controllers', 'wdApp.directives', 'wdApp.httpint','wdApp.ajaxCalls.doisValores','wdApp.ajaxCalls.validation',
        'wdApp.localization', 'wdApp.ui.controllers', 'wdApp.forms.controllers','wdApp.apps.sysmgmt.data','wdApp.ajaxCall.empresa','wdApp.models',
        'wdApp.forms.directives','wdApp.apps.principal','wdApp.apps.principal.insert','wdApp.apps.principal.update','wdApp.apps.principal.delete','wdApp.apps.principal.view'

    ]);

	wdAppSite.config(['$routeProvider',
        function($routeProvider)
		{
			var routes, setRoutes;
			//all available routes

			routes = ['dashboard', 'principal', 'ui/typography', 'ui/buttons', 'index3'

            ];

			//geeric routeine for building route from array
			setRoutes = function(route)
			{
				var config, url;
				url = '/' + route;
				config = {
					templateUrl: 'views/' + route + '.html'
				};
				$routeProvider.when(url, config);
				return $routeProvider;
			};

			//build routes for this application
			routes.forEach(function(route)
			{
				return setRoutes(route);
			});

			//routes not automatically built specified here
			return $routeProvider.when('/',
			{
				templateUrl: 'views/login/login.html'
			}).when('/404',
			{
				templateUrl: 'views/pages/404.html'
			}).otherwise(
			{
				redirectTo: '/404'
			});

        }
    ]);

	//config
	wdAppSite.config(['localStorageServiceProvider', function(localStorageServiceProvider)
		{
			//sets local storage application prefix for all keys
			localStorageServiceProvider.setPrefix('wdAppLS');
    }]);

	//config
	wdAppSite.config(['$httpProvider', function($httpProvider)
		{
			//register WebDaptive interceptor factory
			$httpProvider.interceptors.push('WDHttpInterceptors');
    }]);

	//run each time angular app comes up (runs only once)
	wdAppSite.run(function($rootScope, $location, localStorageService)
	{

		$rootScope.main = {
			brand: (localStorage.getItem('empresa') && localStorage.getItem('empresa') !="undefined" ? (JSON.parse(localStorage.getItem('empresa')).nome ? JSON.parse(localStorage.getItem('empresa')).razao : '') :
				'E-Contábil'),
			name: ''
		};

		/* Reset error when a new view is loaded */
		$rootScope.$on('$viewContentLoaded', function()
		{
			delete $rootScope.error;
		});

		//the hasRole method that drives the hide/show of html
		$rootScope.hasRole = function(role)
		{

			if ($rootScope.user === undefined)
			{
				return false;
			}

			if ($rootScope.user.roles[role] === undefined)
			{
				return false;
			}

			return $rootScope.user.roles[role];
		};

		//logout function clears all relevant presistent storage
		$rootScope.logout = function()
		{
			delete $rootScope.user;
			delete $rootScope.authToken;
			delete $rootScope.callingPath;
			delete $rootScope.displayRoles;
			$rootScope.main.name = "";
			localStorageService.clearAll();
		};


		/* Try getting valid user from localStorage */
		if (localStorageService.get('authToken') !== null)
		{
			$rootScope.authToken = localStorageService.get('authToken');
			$rootScope.user = localStorageService.get('currentUser');
			if ($rootScope.user != undefined)
				$rootScope.main.name = $rootScope.user.user;
			else
				$rootScope.main.name = "Anonimo";
			$rootScope.displayRoles = localStorageService.get('displayRoles');
		}
		//flag to let us know everything is full initialized can be referenced anywhere
		$rootScope.initialized = true;
		$rootScope.empresa_type = 0;
		localStorageService.set('empresaType', 0);
	});

})();