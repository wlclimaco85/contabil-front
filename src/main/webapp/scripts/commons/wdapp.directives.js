(function()
{
	'use strict';
	var commonDirectives = angular.module('wdApp.directives', []);
	commonDirectives.directive('toggleNavCollapsedMin', ['$rootScope', function($rootScope)
		{
			return {
				restrict: 'A',
				link: function(scope, ele, attrs)
				{
					var wdApp;
					wdApp = $('#wdApp');
					return ele.on('click', function(e)
					{
						if (wdApp.hasClass('nav-collapsed-min'))
						{
							wdApp.removeClass('nav-collapsed-min');
						}
						else
						{
							wdApp.addClass('nav-collapsed-min');
							$rootScope.$broadcast('nav:reset');
						}
						return e.preventDefault();
					});
				}
			};
	}]);



	commonDirectives.directive('validcpf', [
    function()
		{
			return {
				restrict: 'A',
				require: 'ngModel',
				scope:
				{
					'validcpf': '=',
				},
				link: function($scope, $elem, $attrs, modelCtrl)
				{

						var check = function(cpf)
						{

					if ($attrs.tipopessoa == 1)
					{
							if (!cpf)
								return false;

							var numeros, digitos, soma, i, resultado, digitos_iguais;
							digitos_iguais = 1;
							if (cpf.length < 11)
								return false;
							for (i = 0; i < cpf.length - 1; i++)
								if (cpf.charAt(i) != cpf.charAt(i + 1))
								{
									digitos_iguais = 0;
									break;
								}
							if (!digitos_iguais)
							{
								numeros = cpf.substring(0, 9);
								digitos = cpf.substring(9);
								soma = 0;
								for (i = 10; i > 1; i--)
									soma += numeros.charAt(10 - i) * i;
								resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
								if (resultado != digitos.charAt(0))
									return false;
								numeros = cpf.substring(0, 10);
								soma = 0;
								for (i = 11; i > 1; i--)
									soma += numeros.charAt(11 - i) * i;
								resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
								if (resultado != digitos.charAt(1))
									return false;
								return true;
							}
							else
								return false;
						}
							else
						{
							return	true;
						}
					}



					//For DOM -> model validation
					modelCtrl.$parsers.unshift(function(value)
					{
						var valid = check(value);
						modelCtrl.$setValidity('validcpf', valid);

						return value;
					});
					//For model -> DOM validation
					modelCtrl.$formatters.unshift(function(value)
					{
						modelCtrl.$setValidity('validcpf', check(value));
						return value;
					});
				}
			};
    }
]);


		commonDirectives.directive('validcnpj', [
    function()
		{
			return {
				restrict: 'A',
				require: 'ngModel',
				scope:
				{
					'validcnpj': '=',
				},
				link: function($scope, $elem, $attrs, modelCtrl)
				{

						var validcnpjs = function(cnpj)
						{

					if ($attrs.tipopessoa == 2)
					{
							if (!cnpj)
								return false;

							  if (cnpj.length < 14) {
            return false
          }

          cnpj = cnpj.replace(/[^\d]+/g, '')

          if (cnpj == '') return false

          if (cnpj.length != 14)
            return false

          // Elimina CNPJs invalidos conhecidos
          if (cnpj == '00000000000000' ||
            cnpj == '11111111111111' ||
            cnpj == '22222222222222' ||
            cnpj == '33333333333333' ||
            cnpj == '44444444444444' ||
            cnpj == '55555555555555' ||
            cnpj == '66666666666666' ||
            cnpj == '77777777777777' ||
            cnpj == '88888888888888' ||
            cnpj == '99999999999999') {
            return false
          }
          // Valida DVs
          var tamanho = cnpj.length - 2
          var numeros = cnpj.substring(0, tamanho)
          var digitos = cnpj.substring(tamanho)
          var soma = 0
          var pos = tamanho - 7
          for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2)
              pos = 9
          }
          var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
          if (resultado != digitos.charAt(0)) {
            return false
          }
          tamanho = tamanho + 1
          numeros = cnpj.substring(0, tamanho)
          soma = 0
          pos = tamanho - 7
          for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2)
              pos = 9
          }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
          if (resultado != digitos.charAt(1)) {
            return false
          }
          return true
						}
							else
						{
							return true;
						}
					}
				//For DOM -> model validation
					modelCtrl.$parsers.unshift(function(value)
					{
						var valid = validcnpjs(value);
						modelCtrl.$setValidity('validcnpj', valid);

						return value;
					});
					//For model -> DOM validation
					modelCtrl.$formatters.unshift(function(value)
					{
						modelCtrl.$setValidity('validcnpj', validcnpjs(value));
						return value;
					});
				}
			};
    }
]);

	commonDirectives.directive('collapseNav', [function()
		{
			return {
				restrict: 'A',
				link: function(scope, ele, attrs)
				{
					var $a, $aRest, $wdApp, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
					$window = $(window);
					$lists = ele.find('ul').parent('li');
					$lists.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>');
					$a = $lists.children('a');
					$listsRest = ele.children('li').not($lists);
					$aRest = $listsRest.children('a');
					$wdApp = $('#wdApp');
					$nav = $('#nav-container');
					$a.on('click', function(event)
					{
						var $parent, $this;
						if ($wdApp.hasClass('nav-collapsed-min') || ($nav.hasClass('nav-horizontal') && $window.width() >= 768))
						{
							return false;
						}
						$this = $(this);
						$parent = $this.parent('li');
						$lists.not($parent).removeClass('open').find('ul').slideUp();
						$parent.toggleClass('open').find('ul').slideToggle();
						return event.preventDefault();
					});
					$aRest.on('click', function(event)
					{
						return $lists.removeClass('open').find('ul').slideUp();
					});
					scope.$on('nav:reset', function(event)
					{
						return $lists.removeClass('open').find('ul').slideUp();
					});
					Timer = void 0;
					prevWidth = $window.width();
					updateClass = function()
					{
						var currentWidth;
						currentWidth = $window.width();
						if (currentWidth < 768)
						{
							$wdApp.removeClass('nav-collapsed-min');
						}
						if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass('nav-horizontal'))
						{
							$lists.removeClass('open').find('ul').slideUp();
						}
						return prevWidth = currentWidth;
					};
					return $window.resize(function()
					{
						var t;
						clearTimeout(t);
						return t = setTimeout(updateClass, 300);
					});
				}
			};
    }]);

	commonDirectives.directive('highlightActive', [function()
		{
			return {
				restrict: "A",
				controller: [
			  '$scope', '$element', '$attrs', '$location',
				function($scope, $element, $attrs, $location)
					{
						var highlightActive, links, path;
						links = $element.find('a');
						path = function()
						{
							return $location.path();
						};
						highlightActive = function(links, path)
						{
							path = '#' + path;
							return angular.forEach(links, function(link)
							{
								var $li, $link, href;
								$link = angular.element(link);
								$li = $link.parent('li');
								href = $link.attr('href');
								if ($li.hasClass('active'))
								{
									$li.removeClass('active');
								}
								if (path.indexOf(href) === 0)
								{
									return $li.addClass('active');
								}
							});
						};
						highlightActive(links, $location.path());
						return $scope.$watch(path, function(newVal, oldVal)
						{
							if (newVal === oldVal)
							{
								return;
							}
							return highlightActive(links, $location.path());
						});
			  }
			]
			};
    }]);

	commonDirectives.directive('uiFooter', [function()
		{
			return {
				restrict: 'A',
				replace: true,
				templateUrl: "views/ui/footer.html",
				controller: ['$scope', function($scope)
					{
						$scope.cDate = new Date().getFullYear();
			}]
			};
    }]);

	commonDirectives.directive('slimScroll', [function()
		{
			return {
				restrict: 'A',
				link: function(scope, ele, attrs)
				{
					return ele.slimScroll(
					{
						height: attrs.scrollHeight || '100%'
					});
				}
			};
    }]);

	commonDirectives.directive('focus', ['$timeout', function($timeout)
		{
			return {
				scope:
				{
					trigger: '@focus'
				},
				link: function(scope, element)
				{
					scope.$watch('trigger', function(value)
					{
						if (value === "true")
						{
							$timeout(function()
							{
								element[0].focus();
							});
						}
					});
				}
			};
    }]);

})();