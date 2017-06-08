(function()
{
	angular.module('wdApp.apps.tributacao', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'datatables.bootstrap',
			'datatables.columnfilter'])
		.controller('TributacaoController', RowSelect);

	function RowSelect($q, $http, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory,
		tableColumnsFactory, FiltersFactory, validationFactory, $filter, dialogFactory)
	{
		var vm = this;
		vm.selected = {};
		vm.dtInstanceTrib = {};
		vm.persons = {};
		vm.selectAll = false;
		vm.button = 'Novo'
		vm.fnDelete = fnDelete;
		vm.fnEdit = fnEdit;


		function parseDate(input)
		{
			var parts = input.split('-');
			return new Date(parts[2], parts[1] - 1, parts[0]);
		}


		function reloadData()
		{
			var resetPaging = false;
			vm.dtInstanceTrib.reloadData(callback, resetPaging);
		}

		function callback(json)
		{
			console.log(json);
		}

		$rootScope.reloadDataSit = function(_callback)
		{

			var resetPaging = false;
			vm.dtInstanceTrib.reloadData(_callback, resetPaging);
		}

		function fnEdit(person)
		{
			//debugger
			$rootScope.tributacao = person;
			dialogFactory.dialog('views/gerencia/dialog/dTributacao.html', "TributacaoUpdateController", validationFactory.tributacao(), reloadData());
		}

		function fnDelete(person)
		{
			$rootScope.tributacao = person;
			dialogFactory.dialog('views/util/dialog/dDelete.html', "TributacaoDeleteController", validationFactory.tributacao(), reloadData());
		}

		var url = '/entidade/api/doisValores/fetchPage'; // 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage'; qat.model.doisValoresInquiryRequest = function (_page, _iStartPage, _bCount,_emprId,_doisValorType)
		var request = new qat.model.doisValoresInquiryRequest(101, 0, true, null, 106); //new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)

		vm.personsss = {}; //$resource($rootScope.getTableData());




		function actionsHtml(data, type, full, meta)
		{
			vm.persons[data.id] = data;
			return '<button class="btn btn-warning" ng-click="showCase.fnEdit(showCase.persons[' + data.id + '])">' +
				'   <i class="fa fa-edit"></i>' +
				'</button>&nbsp;' +
				'<button class="btn btn-danger" ng-click="showCase.fnDelete(showCase.persons[' + data.id + '])">' +
				'   <i class="fa fa-trash-o"></i>' +
				'</button>';
		}

		var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
			'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

		function rCallback(nRow, aData)
		{
			// console.log('row');
		}

		function recompile(row, data, dataIndex)
		{
			$compile(angular.element(row).contents())($scope);
		}

		function createdRow(row, data, dataIndex)
		{
			// Recompiling so we can bind Angular directive to the DT
			$compile(angular.element(row).contents())($scope);
		}
		var fnDataSRC = function(json)
		{

			console.log(json)
			json['recordsTotal'] = json.tributacaoList.length
			json['recordsFiltered'] = json.tributacaoList.length
			json['draw'] = 1
			console.log(json)
			return json.tributacaoList;
		}




		Datatablessss.getTable('/produto/api/tributacao/fetchPage', fnDataSRC, request, this, rCallback, null, recompile, tableOptionsFactory.tributacao(vm, createdRow, $scope,
			FiltersFactory.tributacao(), reloadData), tableColumnsFactory.tributacao(vm, "", actionsHtml));

	}
})();
(function()
{
	angular.module('wdApp.apps.tributacao.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('TributacaoInsertController', function(localStorageService, $rootScope, $scope, fModels, SysMgmtData, doisValorFactory, fTributacao, toastr, $element)
		{
			var vm = this;
			$scope.notaFiscalSaida = {

			};
			$scope.tributacao = {
				imposto:
				{
					icms:
					{
						icms00:
						null,
						icms10:
						{
							situacaoTributaria:
							null
						},
						icms20:
						null,
						icms30:
						null,
						icms40:
						null,
						icms51:
						null,
						icms60:
						null,
						icms70:
						null,
						icms90:
						null,
						icmsPartilhado:
						null,
						icmsst:
						null,
						icmssn101:
						null,
						icmssn102:
						null,
						icmssn201:
						null,
						icmssn202:
						null,
						icmssn500:
						null,
						icmssn900:
						null,
						sitTributaria:
						null,
					},

					ipi:
					{
						tributado:
						null,
						naoTributado:
						null,

					},
					pis:
					{
						aliquota:
						null,
						quantidade:
						null,
						naoTributado:
						null,
						outrasOperacoes:
						null
					},
					cofins:
					{
						aliquota:
						null,
						quantidade:
						null,
						naoTributavel:
						null,
						outrasOperacoes:
						null
					},
					impostoImportacao:
					null,
					pisst:
					null,
					cofinsst:
					null,
					icmsUfDestino:
					null

				},

			};
			$scope.formaPg = {};
			$scope.endereco = null;
			$scope.pessoa = {};

			var fnHidePIS = function()
			{
				$('#pis-Aliquota').hide()
				$('#pis-Aliquota-unid').hide()
			}

			var fnHideCOFINS = function()
			{
				$('#cofins-por-aliq').hide()
				$('#cofins-val-aliq').hide()
			}

			$scope.getInputsCOFINS = function(oObject)
			{
				fnHidePIS();
				if (oObject.value == "01" || oObject.value == "02")
				{
					$('#cofins-por-aliq').show()
				}
				else if (oObject.value == "03")
				{
					$('#cofins-val-aliq').show()
				}

			}

			$scope.getInputsPIS = function(oObject)
			{
				fnHidePIS();
				if (oObject.value == "01" || oObject.value == "02")
				{
					$('#pis-Aliquota').show()
				}
				else if (oObject.value == "03")
				{
					$('#pis-Aliquota-unid').show()
				}

			}

			$scope.getInputsIPI = function(oObject)
			{
				if (oObject.value == "-1")
				{
					$('#Classe-cigarros-bebidas').hide();
					$('#cnpj-produtor').hide();
					$('#cod-selo').hide();
					$('#quant-selo').hide();
					$('#cod-enquadramento').hide();
					$('#ipi-tipo-calc').hide();
					$('#ipi-aliq').hide();
					$('#ipi-valor').hide();
				}
				else
				{
					$('#Classe-cigarros-bebidas').show();
					$('#cnpj-produtor').show();
					$('#cod-selo').show();
					$('#quant-selo').show();
					$('#cod-enquadramento').show();
					$('#ipi-tipo-calc').show();
					$('#ipi-aliq').show();
					$('#ipi-valor').show();
				}
				if (oObject.value == "-1" || oObject.value == "01" || oObject.value == "02" || oObject.value == "03" || oObject.value == "04" || oObject.value == "05")
				{
					$('#ipi-tipo-calc').hide();
					$('#ipi-aliq').hide();
					$('#ipi-valor').hide();
				}
				else
				{
					$('#ipi-tipo-calc').show();
					$('#ipi-aliq').show();
					$('#ipi-valor').show();
				}

			}

			doisValorFactory.tributacao($scope);

			$scope.visibled = false
			//   $scope.cliente = [];

			$scope.countrySelected = function(selected)
			{
				// //debugger
				if (selected)
				{

					$scope.pessoa = selected.originalObject;
					$scope.visibled = true;
				}
				else
				{
					console.log('cleared');
				}
			};

			SysMgmtData.processPostPageData("main/api/request",
			{
				url: "pessoa/api/cliente/fetchPage",
				token: $rootScope.authToken,
				request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
			}, function(res)
			{
				//  //debugger
				$scope.cliente = res.clienteList;
			});


			$scope.produtosSelect = "";
			$scope.produto = {};

			$scope.produtos = [
				{
					form: 'form',
					produto:
					{}
			}];

			$scope.clientes = [];

			$scope.calcProd = function(quant, valor)
			{
				return quant * valor;
			}


			$scope.createForm2 = function()
			{

				$scope.produtos.push(
				{
					nome: 'form1' + ($scope.produtos.length + 1),
					produto:
					{}
				});

			};



			$scope.forms = [
				{
					id: 0,
					produto: "",
					ddd: 'form1',
					notaFiscalSaidaItens:
					{}
            }];
			$scope.count = 0;

			$scope.createForm = function(type)
			{
				$scope.forms.push(
				{
					id: 0,
					produto: "",
					ddd: 'form2',
					notaFiscalSaidaItens:
					{}
				});

				$(".produto").select2("destroy");


				$(".produto").select2(
				{
					placeholder: "Selecione o BANCO",
					allowClear: true
				});
			};

			$scope.changeProd = function(form)
			{
				//debugger
				console.log(form);

				for (var x = 0; $scope.produtos.length > x; x++)
				{
					if ($scope.produtos[x].id == form.produto)
					{
						form.quantidade = 100;
					}
				}
			}

			var fnFunction = function()
			{
				//debugger
			}


			$scope.deleteForm = function(formScope)
			{


				delete $scope.forms(formScope);
			}


			$scope.today = function()
			{
				return $scope.dt = new Date();
			};
			$scope.today();
			$scope.clear = function()
			{
				return $scope.dt = null;
			};
			$scope.open = function($event)
			{
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

			var fnFunction = function(res)
			{
				if (res.operationSuccess == true)
				{
					$element.modal('hide');
					close(null, 500);
					toastr.success('Deu Certo seu tanga.', 'Sucess');
					$rootScope.reloadDataSit(function(data)
					{
						//debugger
					})
				}
			}
			$scope.saveTributacao = function()
			{debugger
				fTributacao.fnMontaObjeto($scope.tributacao, 'INSERT', 'produto/api/tributacao/insert', fnFunction);
			};
		});
})();
(function()
{
	angular.module('wdApp.apps.tributacao.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('TributacaoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, toastr, $element, close, fTributacao, doisValorFactory)
		{
			var vm = this;
			//debugger
			$scope.tributacao = null;
			$scope.tributacao = $rootScope.tributacao;


			var fnFunction = function()
			{
				if ($scope.tributacao.imposto != undefined)
				{
					if ($scope.tributacao.imposto.icms != undefined)
					{
						var keys = Object.keys($scope.tributacao.imposto.icms);

						for (var i = 0, len = keys.length; i < len; i++)
						{
							if (keys[i].includes('icms'))
							{
								if ($scope.tributacao.imposto.icms[keys[i]] != null)
								{
									if (keys[i] == "icms00")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms10")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms11")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms20")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms30")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms40")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms50")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms51")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms60")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms70")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icms90")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icmsPartilhado")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icmsst")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[0];
									}
									else if (keys[i] == "icmssn101")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn102")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn103")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn201")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn202")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn203")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn300")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn400")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn500")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
									else if (keys[i] == "icmssn900")
									{
										$scope.tributacao.imposto.icms.sitTributaria = $scope.tributacao.imposto.icms[keys[i]].situacaoTributaria;
										$scope.tributacao.imposto.icms.regime = $scope.regime[1];
									}
								}

							}
						}
					}
					if ($scope.tributacao.imposto.ipi != undefined)
					{
						if ($scope.tributacao.imposto.ipi.tributado != undefined)
						{
							$scope.tributacao.imposto.ipi.sitTributaria = $scope.tributacao.imposto.ipi.tributado.situacaoTributaria;
						}
						if ($scope.tributacao.imposto.ipi.naoTributado != undefined)
						{
							$scope.tributacao.imposto.ipi.sitTributaria = $scope.tributacao.imposto.ipi.naoTributado.situacaoTributaria;
						}

					}
				}
			}
			doisValorFactory.tributacao($scope, fnFunction);
			console.log($scope.tributacao)
			$scope.saveTributacao = function()
			{
				fTributacao.fnMontaObjeto($scope.tributacao, 'UPDATE', 'produto/api/tributacao/update', fnFunction);
			}
		});
})();
(function()
{
	angular.module('wdApp.apps.tributacao.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('TributacaoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, toastr, $element, close)
		{
			var vm = this;
			$scope.pedidoVenda = {};
			$scope.pedidoVenda = $rootScope.pedidoVenda;
			console.log($rootScope.pedidoVenda)
			$scope.saveTributacao = function()
			{
				fPessoa.fnMontaObjeto($scope.pedidoVenda, "site/api/pedidoVenda/update/", function()
				{
					console.log('ddda   aqui')
				});
			}
		});
})();
(function()
{
	angular.module('wdApp.apps.tributacao.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('TributacaoViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa)
		{
			var vm = this;
			$scope.tributacao = {};
			$scope.tributacao = $rootScope.tributacao;
			console.log($rootScope.tributacao)
			$scope.saveTributacao = function()
			{
				fTributacao.fnMontaObjeto($scope.tributacao, 'DELETE', 'produto/api/tributacao/delete', fnFunction);
			}
		});
})();
(function()
{
	angular.module('wdApp.apps.tributacao.select', ['ngSanitize', 'ui.select', 'angularModalService'])
		.filter('propsFilter', function()
		{
			return function(items, props)
			{
				var out = [];

				if (angular.isArray(items))
				{
					var keys = Object.keys(props);

					items.forEach(function(item)
					{
						var itemMatches = false;

						for (var i = 0; i < keys.length; i++)
						{
							var prop = keys[i];
							var text = props[prop].toLowerCase();
							if (item[prop].toString().toLowerCase().indexOf(text) !== -1)
							{
								itemMatches = true;
								break;
							}
						}

						if (itemMatches)
						{
							out.push(item);
						}
					});
				}
				else
				{
					// Let the output be the input untouched
					out = items;
				}

				return out;
			};
		}).controller('TributacaoSelectController', tributacaoSelectController);

	function tributacaoSelectController($scope, $http, $timeout, $interval, dialogFactory)
	{
		var vm = this;


		var openDialogUpdateCreate = function()
		{
			bookIndex = 0;
			$('.MarcaForm')
				.formValidation(
				{
					framework: 'bootstrap',
					icon:
					{
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
					},
					fields:
					{
						'marca': notEmptyStringMinMaxRegexp,
						'fabricante': integerNotEmptyValidation,
						'email': integerNotEmptyValidation,
					}
				});
		}

		var closee = function()
		{

			var callbackBanco = function(res)
			{
				var planos = "";

				if (res.operationSuccess == true)
				{

					vm.tributacao = res.tributacaoList;

				}
			}

			qat.model.select.util("produto/api/tributacao/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id),
				callbackBanco);
		}
		vm.addTributacao = function()
		{

			dialogFactory.dialog('views/produto/dialog/dTributacao.html', "TributacaoInsertController", openDialogUpdateCreate, closee);


		}

		vm.disabled = undefined;
		vm.searchEnabled = undefined;

		vm.setInputFocus = function()
		{
			$scope.$broadcast('UiSelectDemo1');
		};

		vm.enable = function()
		{
			vm.disabled = false;
		};

		vm.disable = function()
		{
			vm.disabled = true;
		};

		vm.enableSearch = function()
		{
			vm.searchEnabled = true;
		};

		vm.disableSearch = function()
		{
			vm.searchEnabled = false;
		};

		vm.clear = function()
		{
			vm.person.selected = undefined;
			vm.address.selected = undefined;
			vm.country.selected = undefined;
		};

		vm.someGroupFn = function(item)
		{

			if (item.name[0] >= 'A' && item.name[0] <= 'M')
				return 'From A - M';

			if (item.name[0] >= 'N' && item.name[0] <= 'Z')
				return 'From N - Z';

		};

		vm.firstLetterGroupFn = function(item)
		{
			return item.name[0];
		};

		vm.reverseOrderFilterFn = function(groups)
		{
			return groups.reverse();
		};

		vm.personAsync = {
			selected: "wladimir@email.com"
		};
		vm.peopleAsync = [];

		$timeout(function()
		{
			vm.peopleAsync = [

            ];
		}, 3000);

		vm.counter = 0;
		vm.onSelectCallback = function(item, model)
		{
			vm.counter++;
			vm.eventResult = {
				item: item,
				model: model
			};
		};

		vm.removed = function(item, model)
		{
			vm.lastRemoved = {
				item: item,
				model: model
			};
		};

		vm.tagTransform = function(newTag)
		{
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

		vm.marca = [

        ];

		closee();

		vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

		vm.singleDemo = {};
		vm.singleDemo.color = '';
		vm.multipleDemo = {};
		vm.multipleDemo.colors = ['Blue', 'Red'];
		vm.multipleDemo.colors2 = ['Blue', 'Red'];
		vm.multipleDemo.selectedPeople = [vm.marca[5], vm.marca[4]];
		vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
		vm.multipleDemo.selectedPeopleWithGroupBy = [vm.marca[8], vm.marca[6]];
		vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
		vm.multipleDemo.removeSelectIsFalse = [vm.marca[2], vm.marca[0]];

		vm.appendToBodyDemo = {
			remainingToggleTime: 0,
			present: true,
			startToggleTimer: function()
			{
				var scope = vm.appendToBodyDemo;
				var promise = $interval(function()
				{
					if (scope.remainingTime < 1000)
					{
						$interval.cancel(promise);
						scope.present = !scope.present;
						scope.remainingTime = 0;
					}
					else
					{
						scope.remainingTime -= 1000;
					}
				}, 1000);
				scope.remainingTime = 3000;
			}
		};

		vm.address = {};
		vm.refreshAddresses = function(address)
		{
			var params = {
				address: address,
				sensor: false
			};
			return $http.get(
				'http://maps.googleapis.com/maps/api/geocode/json',
				{
					params: params
				}
			).then(function(response)
			{
				vm.addresses = response.data.results;
			});
		};

		vm.addPerson = function(item, model)
		{
			if (item.hasOwnProperty('isTag'))
			{
				delete item.isTag;
				vm.marca.push(item);
			}
		}


	}


})();