console.log("angular object",angular); //used for debugging and training only do not put in production
var WebDaptiveAppConfig = {
	//Main area for config URLs for WebDaptive

	/* When set to false a query parameter is used to pass on the auth token.
	 * This might be desirable if headers don't work correctly in some
	 * environments and is still secure when using https. */
	useAuthTokenHeader: true,
	//string to check for rest calls to jDpative Back-end so the angular http provider can inject x-auth token
	restAuthBase: 'qat-sysmgmt-controller-rest',
	authenticationURL: 'http://localhost:8080/springmvc-angularjs/api/authenticate',
	base_county_url: 'http://localhost:8080/qat-sysmgmt-controller-rest/county/api',
	base_procedure_url: 'http://localhost:8080/qat-sysmgmt-controller-rest/procedure/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	//site
	base_site_url: 'http://localhost:8080/qat-sysmgmt-controller-rest/site/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	//produto
	base_site_url: 'http://localhost:8080/qat-sysmgmt-controller-rest/produto/api',
	fetch_url: '/fetchPage',
	refresh_url: '/refresh',
	create_url: '/insert',
	update_url: '/update',
	delete_url: '/delete',

	base_empresa_url: 'http://localhost:8080/qat-sysmgmt-controller-rest/entidade/api',

};

(function() {
  'use strict';
		var wdApp = angular.module('wdApp',
				['ngRoute', 'ngAnimate', 'ngSanitize',  'ui.bootstrap', 'easypiechart', 'textAngular',
				'ui.tree', 'ngMap', 'ngTagsInput', 'toastr', 'angular-loading-bar', 'chart.js', 'ngecharts',
				'agGrid', 'base64', 'LocalStorageModule', 'wdApp.controllers', 'wdApp.directives', 'wdApp.httpint',
				'wdApp.localization', 'wdApp.ui.controllers', 'wdApp.forms.controllers',
				'wdApp.forms.directives', 'wdApp.tables.controllers', 'wdApp.tasks',
				'wdApp.charts.flot.controllers', 'wdApp.charts.morris.controllers', 'wdApp.charts.chartjs.controllers',
				'wdApp.charts.other.controllers', 'wdApp.charts.echarts.controllers', 'wdApp.charts.directives', 'wdApp.authentication',
				'wdApp.pages.controllers', 'wdApp.demodata', 'wdApp.apps.stocks', 'wdApp.apps.stocksdata',
				'wdApp.apps.counties','datatables','datatables.bootstrap', 'wdApp.apps.procedures','wdApp.apps.sysmgmt.data','wdApp.apps.site','wdApp.apps.empresa','wdApp.apps.produtos','wdApp.apps.produtoss','wdApp.apps.produto','wdApp.apps.notaFiscal',
				'wdApp.apps.pdCompras','wdApp.apps.orcamento','wdApp.apps.ordemServico','wdApp.apps.nfEntrada','wdApp.apps.pdCompras'
				,'wdApp.apps.cotacao','wdApp.apps.pdVendas','wdApp.apps.funcionario',
				'wdApp.ajaxCall'
				,'wdApp.apps.cliente'
				,'wdApp.apps.cliente.insert'
	            ,'wdApp.apps.cliente.update'
	            ,'wdApp.apps.cliente.delete'
	            ,'wdApp.apps.cliente.view'
				,'wdApp.apps.fornecedor'
				,'wdApp.apps.fornecedor.insert'
				,'wdApp.apps.fornecedor.update'
	            ,'wdApp.apps.fornecedor.delete'
	            ,'wdApp.apps.fornecedor.view'
				,'wdApp.apps.convenio'
				,'wdApp.apps.deposito'
				,'wdApp.apps.filial'
				,'wdApp.apps.transportador.table'
				,'wdApp.apps.transportador.insert'
				,'wdApp.apps.transportador.update'
	            ,'wdApp.apps.transportador.delete'
	            ,'wdApp.apps.transportador.view'


				,'wdApp.apps.ordemProducao'

				,'wdApp.apps.telefone'

				,'wdApp.apps.funcionarios'
				,'wdApp.apps.compras'
				,'wdApp.apps.pagamentos'
				,'wdApp.apps.convenio'
				,'wdApp.apps.util'
				,'wdApp.apps.cidade'
				,'wdApp.apps.filial'
				,'wdApp.apps.almoxarifado'
				,'wdApp.apps.processo'
			 	,'wdApp.apps.cadempresa'
	            ,'wdApp.apps.site'
	            ,'wdApp.apps.sites'
	            ,'wdApp.apps.plano'

	            ,'wdApp.apps.usuarios'
	            ,'wdApp.apps.contatos'
	            ,'wdApp.apps.historico'
	            ,'wdApp.apps.permissoes'
	            /*   ,'wdApp.apps.tabelas'
	            ,'wdApp.apps.campos'
	            ,'wdApp.apps.tela'
	            ,'wdApp.apps.relatorios'*/
	            ,'wdApp.models'
	            ,'wdApp.apps.site.update'
	            ,'wdApp.apps.site.insert'
	            ,'wdApp.apps.plano.insert'
	            ,'wdApp.apps.plano.update'

	            ,'wdApp.apps.servico'
	            ,'wdApp.apps.servico.insert'
	            ,'wdApp.apps.servico.update'
	            ,'wdApp.apps.servico.delete'
	            ,'wdApp.apps.servico.view'

	            ,'wdApp.apps.servicos'
	            ,'wdApp.apps.servicos.insert'
	            ,'wdApp.apps.servicos.update'
	            ,'wdApp.apps.servicos.delete'
	            ,'wdApp.apps.servicos.view'


	            ,'wdApp.apps.contato.insert'
	            ,'wdApp.apps.contato.update'
	            ,'wdApp.ajaxCall.empresa'
	            ,'wdApp.ajaxCall.pessoa'
	            ,'wdApp.ajaxCalls'
	            ,'wdApp.apps.produto.insert'
				,'wdApp.apps.produto.update'
	            ,'wdApp.apps.produto.delete'
	            ,'wdApp.apps.produto.view'
	            ,'wdApp.apps.produto.select'
	            ,'wdApp.ajaxCall.produto'

	            ,'wdApp.apps.agencia'
	            ,'wdApp.apps.agencia.insert'
				,'wdApp.apps.agencia.update'
	            ,'wdApp.apps.agencia.delete'
	            ,'wdApp.apps.agencia.view'

	            ,'wdApp.apps.almoxarifado.insert'
				,'wdApp.apps.almoxarifado.update'
	            ,'wdApp.apps.almoxarifado.delete'
	            ,'wdApp.apps.almoxarifado.view'

	            ,'wdApp.apps.cidade.insert'
				,'wdApp.apps.cidade.update'
	            ,'wdApp.apps.cidade.delete'
	            ,'wdApp.apps.cidade.view'

	            ,'wdApp.apps.newEmpresa'
	            ,'wdApp.apps.newEmpresa.insert'
				,'wdApp.apps.newEmpresa.update'
	            ,'wdApp.apps.newEmpresa.delete'
	            ,'wdApp.apps.newEmpresa.view'

	            ,'wdApp.apps.convenio.insert'
				,'wdApp.apps.convenio.update'
	            ,'wdApp.apps.convenio.delete'
	            ,'wdApp.apps.convenio.view'

	            ,'wdApp.ajaxCalls.initPage'

	            ,'wdApp.apps.pedidoVenda.insert'
				,'wdApp.apps.pedidoVenda.update'
	            ,'wdApp.apps.pedidoVenda.delete'
	            ,'wdApp.apps.pedidoVenda.view'

	            ,'wdApp.apps.categoria'
	            ,'wdApp.apps.categoria.insert'
				,'wdApp.apps.categoria.update'
	            ,'wdApp.apps.categoria.delete'
	            ,'wdApp.apps.categoria.view'

	            ,'wdApp.apps.marca'
	            ,'wdApp.apps.marca.insert'
				,'wdApp.apps.marca.update'
	            ,'wdApp.apps.marca.delete'
	            ,'wdApp.apps.marca.view'

	            ,'wdApp.apps.uniMed'
	            ,'wdApp.apps.uniMed.insert'
				,'wdApp.apps.uniMed.update'
	            ,'wdApp.apps.uniMed.delete'
	            ,'wdApp.apps.uniMed.view'


	            ,'wdApp.apps.usuarios'
				,'wdApp.apps.usuarios.insert'
	            ,'wdApp.apps.usuarios.update'
	            ,'wdApp.apps.usuarios.delete'
	            ,'wdApp.apps.usuarios.view'



	            ,'wdApp.apps.banco'
	            ,'wdApp.apps.banco.insert'
	            ,'wdApp.apps.banco.update'
	            ,'wdApp.apps.banco.delete'
	            ,'wdApp.apps.banco.view'

	            ,'wdApp.apps.estado'
	            ,'wdApp.apps.estado.insert'
	            ,'wdApp.apps.estado.update'
	            ,'wdApp.apps.estado.delete'
	            ,'wdApp.apps.estado.view'

	            ,'wdApp.apps.contasPagar'
	            ,'wdApp.apps.contasPagar.insert'
	            ,'wdApp.apps.contasPagar.update'
	            ,'wdApp.apps.contasPagar.delete'
	            ,'wdApp.apps.contasPagar.view'


	            ,'wdApp.apps.formaPg',
	            ,'wdApp.apps.formaPg.insert'
	            ,'wdApp.apps.formaPg.update'
	            ,'wdApp.apps.formaPg.delete'
	            ,'wdApp.apps.formaPg.view'

	            ,'wdApp.apps.nfSaida'
	            ,'wdApp.apps.nfSaida.insert'
	            ,'wdApp.apps.nfSaida.update'
	            ,'wdApp.apps.nfSaida.delete'
	            ,'wdApp.apps.nfSaida.view'

	            ,'wdApp.apps.contasReceber'
	            ,'wdApp.apps.contasReceber.insert'
	            ,'wdApp.apps.contasReceber.update'
	            ,'wdApp.apps.contasReceber.delete'
	            ,'wdApp.apps.contasReceber.view'

	            ,'wdApp.apps.conta'
	            ,'wdApp.apps.conta.insert'
	            ,'wdApp.apps.conta.update'
	            ,'wdApp.apps.conta.delete'
	            ,'wdApp.apps.conta.view'

	            ,'wdApp.apps.field'
	            ,'wdApp.apps.field.insert'
	            ,'wdApp.apps.field.update'
	            ,'wdApp.apps.field.delete'
	            ,'wdApp.apps.field.view'

	            ,'wdApp.apps.help'
	            ,'wdApp.apps.help.insert'
	            ,'wdApp.apps.help.update'
	            ,'wdApp.apps.help.delete'
	            ,'wdApp.apps.help.view'

	            ,'wdApp.apps.menu'
	            ,'wdApp.apps.menu.insert'
	            ,'wdApp.apps.menu.update'
	            ,'wdApp.apps.menu.delete'
	            ,'wdApp.apps.menu.view'

	            ,'wdApp.apps.pagina'
	            ,'wdApp.apps.pagina.insert'
	            ,'wdApp.apps.pagina.update'
	            ,'wdApp.apps.pagina.delete'
	            ,'wdApp.apps.pagina.view'

	            ,'wdApp.apps.validacao'
	            ,'wdApp.apps.validacao.insert'
	            ,'wdApp.apps.validacao.update'
	            ,'wdApp.apps.validacao.delete'
	            ,'wdApp.apps.validacao.view'

	            ,'wdApp.apps.roles'
	            ,'wdApp.apps.roles.insert'
	            ,'wdApp.apps.roles.update'
	            ,'wdApp.apps.roles.delete'
	            ,'wdApp.apps.roles.view'


				]);

	wdApp.config(['$routeProvider',
		function($routeProvider) {
			var routes, setRoutes;
			//all available routes

			routes = ['dashboard','principal', 'ui/typography', 'ui/buttons','index3',
			'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components',
			'ui/timeline', 'ui/tree', 'ui/pricing-tables', 'ui/maps',
			'tables/static', 'tables/dynamic', 'tables/responsive',
			'forms/elements', 'forms/layouts', 'forms/validation', 'forms/wizard',
			'charts/charts', 'charts/flot', 'charts/morris', 'charts/chartjs', 'charts/echarts',
			'pages/404', 'pages/500', 'pages/blank', 'pages/invoice', 'pages/profile',
			'pages/signin', 'mail/compose', 'mail/inbox', 'mail/single', 'tasks/tasks','empresa/cadEmpresa',
			'apps/stocks', 'apps/counties', 'apps/procedures', 'estado/apps/estado', 'produto/tables/produto', 'vendas/forms/cadNotaFiscal',
			'fiscal/forms/CadCfop','fiscal/tables/cfop','fiscal/forms/CadCnae','fiscal/tables/cnae',
			'vendas/forms/CadOrcamento','vendas/tables/orcamento','vendas/forms/CadOrdemServico','vendas/tables/ordemServico','vendas/tables/pedidoVendas',
			'compras/forms/CadCotacao','compras/forms/CadNfEntrada','compras/forms/CadPedCompras','compras/forms/CadAprovPedidoCompra',
			'compras/tables/aprovarPedCompras','compras/tables/cotacao','compras/tables/nfEntrada','compras/tables/pedCompras',
			'financeiro/tables/baixaTitulo','financeiro/tables/banco','financeiro/tables/caixa','vendas/tables/notaFiscalSaida',
			'financeiro/tables/contaCC','financeiro/tables/contasPagar','financeiro/tables/contasReceber','financeiro/tables/formaPg','financeiro/tables/agencia',
			'funcionario/tables/folhaPonto','funcionario/tables/funcionario','funcionario/forms/CadFolhaPonto','funcionario/forms/funcionario',
			'ordemServico/tables/ordemServico','ordemServico/forms/CadOrdemServico',
			'cadastros/tables/almoxarifado','cadastros/tables/cidade','cadastros/tables/cliente','cadastros/tables/convenio',
			'cadastros/tables/estado','cadastros/tables/filial','cadastros/tables/fornecedor','cadastros/tables/transportador',
			'produto/tables/categoria','produto/tables/marca','produto/tables/uniMed','produto/tables/servico',
			'produto/forms/CadCategoria','produto/forms/CadMarca','produto/forms/CadUniMed','produto/forms/CadProduto'
			,'advogado/tables/processo'
			,'advogado/details/processo'
			,'compras/details/cotacao'
			,'advogado/forms/advogadoAgenda'
			,'clinica/cadConsulta'
			,'clinica/cadMedico'
			,'clinica/cadPaciente'
			,'clinica/cadPlanoSaude'
			,'gerencia/tables/empresa'
            ,'gerencia/tables/site'
            ,'gerencia/tables/plano'
            ,'gerencia/tables/servico'
            ,'gerencia/tables/usuarios'
            ,'gerencia/tables/contatos'
            ,'gerencia/tables/historico'
            ,'gerencia/tables/permissoes'
            ,'dicionario/tables/tabelas'
            ,'dicionario/tables/campos'
            ,'dicionario/tables/tela'
            ,'dicionario/tables/relatorios'
            ,'gerencia/details/empresa'
			];

			//geeric routeine for building route from array
			setRoutes = function(route) {
				var config, url;
				url = '/' + route;
				config = {
				templateUrl: 'views/' + route + '.html'
				};
				$routeProvider.when(url, config);
				return $routeProvider;
			};

			//build routes for this application
			routes.forEach(function(route) {
				return setRoutes(route);
			});

			//routes not automatically built specified here
			return $routeProvider.when('/', {
				templateUrl: 'views/login/login.html'
			}).when('/404', {
				templateUrl: 'views/pages/404.html'
			}).otherwise({
				redirectTo: '/404'
			});

	}]);

	//config
	wdApp.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
		//sets local storage application prefix for all keys
		localStorageServiceProvider.setPrefix('wdAppLS');
	}]);

	//config
	wdApp.config(['$httpProvider', function($httpProvider) {
			//register WebDaptive interceptor factory
			$httpProvider.interceptors.push('WDHttpInterceptors');
	}]);

	//run each time angular app comes up (runs only once)
	wdApp.run(function($rootScope, $location, localStorageService) {

		$rootScope.main = {
			brand: 'E-Contábil',
			name: 'Jonh Snow'
		};

		/* Reset error when a new view is loaded */
		$rootScope.$on('$viewContentLoaded', function() {
			delete $rootScope.error;
		});

		//the hasRole method that drives the hide/show of html
		$rootScope.hasRole = function(role) {

			if ($rootScope.user === undefined) {
				return false;
			}

			if ($rootScope.user.roles[role] === undefined) {
				return false;
			}

			return $rootScope.user.roles[role];
		};

		//logout function clears all relevant presistent storage
		$rootScope.logout = function() {
			delete $rootScope.user;
			delete $rootScope.authToken;
			delete $rootScope.callingPath;
			delete $rootScope.displayRoles;
			$rootScope.main.name = "Jonh Snow";
			localStorageService.clearAll();
		};


		/* Try getting valid user from localStorage */
		if (localStorageService.get('authToken') !==  null){
			$rootScope.authToken = localStorageService.get('authToken');
			$rootScope.user = localStorageService.get('currentUser');
			if($rootScope.user != undefined)
				$rootScope.main.name = 	$rootScope.user.user;
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
