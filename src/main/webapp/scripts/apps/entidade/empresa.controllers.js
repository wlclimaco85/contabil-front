(function()
{
	angular.module('wdApp.apps.newEmpresa', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('NewEmpresaController', newEmpresaController);

	function newEmpresaController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, Datatablessss, dialogFactory)
	{
		var vm = this;
		vm.selected = {};
		vm.selectAll = false;
		vm.toggleAll = toggleAll;
		vm.toggleOne = toggleOne;
		vm.status = status;
		vm.message = '';
		vm.edit = edit;
		vm.delete = deleteRow;
		vm.dtInstance = {};
		vm.persons = {};

		$scope.newEmpresa = {
			tipoPessoa: 2
		};



		var openDialogUpdateCreate = function()
		{
			bookIndex = 0;
			$('.newEmpresaForm')
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
						'banco': notEmpty,
						'numero': notEmptyStringMinMaxRegexp,
					}
				});
		}

		$scope.toggle = function()
		{
			$scope.state = !$scope.state;
		};
		var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
			'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';
		var oOptions = DTOptionsBuilder.newOptions()
			.withDOM('frtip')
			.withPaginationType('full_numbers')
			.withOption('createdRow', createdRow)
			.withOption('headerCallback', function(header)
			{
				if (!vm.headerCompiled)
				{
					// Use this headerCompiled field to only compile header once
					vm.headerCompiled = true;
					$compile(angular.element(header).contents())($scope);
				}
			})
			.withPaginationType('full_numbers')
			.withColumnFilter(
			{
				aoColumns: [
					{
						type: 'number'
                },
					{
						type: 'number',
                },
					{
						type: 'select',
						values: ['Entrada', 'Saida']
                },
					{
						type: 'text'
                },
					{
						type: 'text'
                },
					{
						type: 'text'
                }]
			})
			.withOption('initComplete', function(settings, json)
			{
				$('.dt-buttons').find('.dt-button:eq(1)').before(
					'<select class="form-control col-sm-3 btn btn-primary dropdown-toggle" data-ng-options="t.name for t in vm.types"' +
					'data-ng-model="vm.object.type" style="height: 32px;margin-left: 8px;margin-right: 6px;width: 200px !important;">' +
					'<option><a href="#">AÃƒÂ§ÃƒÂµes <span class="badge selected badge-danger main-badge" data-ng-show="{{showCase.countSeleted()}}"</span></a></option>' +
					'<option><a href="#">Remover Todos <span class="badge selected badge-danger main-badge"  data-ng-show="{{showCase.countSeleted()}}"></span></a></option>' +
					'</select>'
				)
			})
			.withOption('processing', true)
			.withOption('language',
			{
				paginate:
				{ // Set up pagination text
					first: "&laquo;",
					last: "&raquo;",
					next: "&rarr;",
					previous: "&larr;"
				},
				lengthMenu: "_MENU_ records per page"
			})
			.withButtons([
				{
					extend: "colvis",
					fileName: "Data_Analysis",
					exportOptions:
					{
						columns: ':visible'
					},
					exportData:
					{
						decodeEntities: true
					}
            },
				{
					extend: "csvHtml5",
					fileName: "Data_Analysis",
					exportOptions:
					{
						columns: ':visible'
					},
					exportData:
					{
						decodeEntities: true
					}
            },
				{
					extend: "pdfHtml5",
					fileName: "Data_Analysis",
					title: "Data Analysis Report",
					exportOptions:
					{
						columns: ':visible'
					},
					exportData:
					{
						decodeEntities: true
					}
            },
				{
					extend: "copy",
					fileName: "Data_Analysis",
					title: "Data Analysis Report",
					exportOptions:
					{
						columns: ':visible'
					},
					exportData:
					{
						decodeEntities: true
					}
            },
				{
					extend: "print",
					//text: 'Print current page',
					autoPrint: true,
					exportOptions:
					{
						columns: ':visible'
					}
            },
				{
					extend: "excelHtml5",
					filename: "Data_Analysis",
					title: "Data Analysis Report",
					exportOptions:
					{
						columns: ':visible'
					},
					//CharSet: "utf8",
					exportData:
					{
						decodeEntities: true
					}
            },
				{
					text: 'Novo Empresa',
					key: '1',
					action: function(e, dt, node, config)
					{

						dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html', "NewEmpresaInsertController", openDialogUpdateCreate);

					}
            }]);
		var aColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta)
			{
				vm.selected[full.id] = false;
				return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
			}).withOption('width', '10px'),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible().withOption('width', '10px'),
        DTColumnBuilder.newColumn('banco').withTitle('Banco'),
        DTColumnBuilder.newColumn('numAgencia').withTitle('NÃ‚Âº Agencia'),
        DTColumnBuilder.newColumn('cep').withTitle('Cep'),
        DTColumnBuilder.newColumn('logradouro').withTitle('Logradouro'),
        DTColumnBuilder.newColumn('numero').withTitle('Numero'),
        DTColumnBuilder.newColumn('cidade').withTitle('Cidade'),
        DTColumnBuilder.newColumn('estado').withTitle('Estado').notVisible(),
        DTColumnBuilder.newColumn('pais').withTitle('Pais').notVisible(),
        DTColumnBuilder.newColumn('telefone').withTitle('Telefone'),
        DTColumnBuilder.newColumn('email').withTitle('Email').notVisible(),
        DTColumnBuilder.newColumn('obs').withTitle('ObservaÃƒÂ§ÃƒÂµes').notVisible(),
        DTColumnBuilder.newColumn('modifyUser').withTitle('modifyUser').notVisible(),
        DTColumnBuilder.newColumn('modifyDateUTC').withTitle('modifyDateUTC').notVisible(),
        DTColumnBuilder.newColumn(null).withTitle('AÃƒÂ§ÃƒÂµes').notSortable().renderWith(actionsHtml).withOption('width', '140px'),
    ];

		function rCallback(nRow, aData)
		{
			// console.log('row');
		}

		function recompile(row, data, dataIndex)
		{
			$compile(angular.element(row).contents())($scope);
		}
		var fnDataSRC = function(json)
		{
			console.log(json)
			json['recordsTotal'] = json.newEmpresaList.length
			json['recordsFiltered'] = json.newEmpresaList.length
			json['draw'] = 1
			console.log(json)
			return json.newEmpresaList;
		}
		Datatablessss.getTable('/financeiro/api/newEmpresa/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile,
			oOptions, aColumns);

		function edit(person)
		{
			$rootScope.Agencia = person;
			dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html', "NewEmpresaUpdateController", openDialogUpdateCreate);
		}

		function deleteRow(person)
		{
			dialogFactory.dialog('views/cadastros/dialog/dNewEmpresa.html', "NewEmpresaDeleteController", openDialogUpdateCreate);
		}

		function createdRow(row, data, dataIndex)
		{
			// Recompiling so we can bind Angular directive to the DT
			$compile(angular.element(row).contents())($scope);
		}

		function actionsHtml(data, type, full, meta)
		{
			vm.persons[data.id] = data;
			return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
				'   <i class="glyphicon glyphicon-save"></i>' +
				'</button>&nbsp;' +
				'<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
				'   <i class="fa fa-trash-o"></i>' +
				'</button>';
		}

		function toggleAll(selectAll, selectedItems)
		{
			for (var id in selectedItems)
			{
				if (selectedItems.hasOwnProperty(id))
				{
					selectedItems[id] = selectAll;
				}
			}
		}

		function status()
		{}

		function toggleOne(selectedItems)
		{
			for (var id in selectedItems)
			{
				if (selectedItems.hasOwnProperty(id))
				{
					if (!selectedItems[id])
					{
						vm.selectAll = false;
						return;
					}
				}
			}
			vm.selectAll = true;
		}

		function toggle()
		{
			$scope.state = !$scope.state;
		};
	}
})();
(function()
{
	angular.module('wdApp.apps.newEmpresa.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'ui.bootstrap'])
		.controller('NewEmpresaInsertController', function($rootScope, $scope, fModels, SysMgmtData, fEmpresa, $location)
		{
			var vm = this;

			var $window;
			$window = $(window);

			$scope.doIfChecked = function(_ckecked, _value, _nome)
			{

				var value = 0;
				var sHtml = "",
					count = 1;
				$('.planos').each(function()
				{
					if ($(this).find('.plano').is(":checked") == true)
					{
						value = value + parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2));
						sHtml = sHtml + "<tr>";
						sHtml = sHtml + "  <th scope='row'>" + count + "</th>";
						sHtml = sHtml + "  <td>" + $(this).find('.mbr-header__text').text() + "</td>";
						sHtml = sHtml + "  <td>" + parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)) + "</td>";
						sHtml = sHtml + "</tr>";
						count = count + 1
					}
				});


				sHtml = sHtml + "<tr style='background-color : red;color:black'>";
				sHtml = sHtml + "  <th scope='row'></th>";
				sHtml = sHtml + "  <td colspan='2'>Total</td>";
				sHtml = sHtml + "  <td id='total-plano'>" + value + "</td>";
				sHtml = sHtml + "</tr>";
				$('#table-plano').empty();
				$('#table-plano').append(sHtml);
				console.log(value);
				vm.total = value;
			}

			$scope.emails = [
				{
					nome: 'form1',
					email:
					{
						emailTypeEnum: 1
					}
			}];
			$scope.telefones = [
				{
					nome: 'form1',
					telefone:
					{
						telefoneTypeEnum: 1
					}
			}];
			$scope.cnaes = [
				{
					nome: 'cnae1',
					cnae:
					{
						id: 0
					}
			}];

			$scope.empresa = {
				usuarios: [],
				documentos: [
					{
						documentoTypeEnumValue: 1,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 2,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 12,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 4,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 14,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 10,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 3,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    },
					{
						documentoTypeEnumValue: 11,
						tableEnumValue: 1,
						createUser: "System",
						createDateUTC: (new Date()).getTime(),
						modifyUser: "System",
						modifyDateUTC: (new Date()).getTime(),

                    }]
			};

			$scope.enderecos = [];


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


			$scope.format = 'yyyy/MM/dd';
			$scope.date = new Date();

			$scope.today = function()
			{
				$scope.dt = new Date();
			};
			$scope.today();

			$scope.clear = function()
			{
				$scope.dt = null;
			};

			$scope.inlineOptions = {
				customClass: getDayClass,
				minDate: new Date(),
				showWeeks: true
			};

			$scope.dateOptions = {
				dateDisabled: disabled,
				formatYear: 'yy',
				maxDate: new Date(2020, 5, 22),
				minDate: new Date(),
				startingDay: 1
			};

			// Disable weekend selection
			function disabled(data)
			{
				var date = data.date,
					mode = data.mode;
				return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
			}

			$scope.toggleMin = function()
			{
				$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
				$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
			};

			$scope.toggleMin();

			$scope.open1 = function()
			{

				$scope.popup1.opened = true;
			};

			$scope.open2 = function()
			{

				$scope.popup2.opened = true;
			};

			$scope.setDate = function(year, month, day)
			{
				$scope.dt = new Date(year, month, day);
			};

			$scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			$scope.format = $scope.formats[1];
			$scope.altInputFormats = ['M!/d!/yyyy'];

			$scope.popup1 = {
				opened: false
			};

			$scope.popup2 = {
				opened: false
			};

			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			var afterTomorrow = new Date();
			afterTomorrow.setDate(tomorrow.getDate() + 1);
			$scope.events = [
				{
					date: tomorrow,
					status: 'full'
    },
				{
					date: afterTomorrow,
					status: 'partially'
    }
  ];

			function getDayClass(data)
			{
				var date = data.date,
					mode = data.mode;
				if (mode === 'day')
				{
					var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

					for (var i = 0; i < $scope.events.length; i++)
					{
						var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

						if (dayToCheck === currentDay)
						{
							return $scope.events[i].status;
						}
					}
				}

				return '';
			}

			var fnCallBack = function(oResponse)
			{

				console.log(oResponse)
			}
			$scope.saveEmpresa = function()
			{

				$scope.empresa.dtInicio = (new Date($scope.empresa.dtInicio)).getTime();
				$scope.empresa.dtAbertura = (new Date($scope.empresa.dtAbertura)).getTime();

				fEmpresa.fnMontaObjeto2($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, $scope.cnaes, $scope.usuario, "INSERT", fnCallBack)
				// factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,cnaes,action){

			};
		});
})();
(function()
{
	angular.module('wdApp.apps.newEmpresa.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('NewEmpresaUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fEmpresa, $log, doisValorFactory)
		{

			var vm = this;
			var createForm3;

			var $window;
			$window = $(window);

			$scope.empresa = JSON.parse(localStorage.getItem('empresa'));

			$scope.cnaes;
			$scope.enderecos = [];
			$scope.emails = [];
			$scope.telefones = [];

			$scope.buscaRCep = function(_cepValue)
			{
				var cepValue = _cepValue;
				var formatedCep;

				$.getJSON("//viacep.com.br/ws/" + _cepValue + "/json/?callback=?", function(res)
				{
					$scope.empresa.enderecos[0].bairro = res.bairro;
					$scope.empresa.enderecos[0].complemento = res.complemento;
					$scope.empresa.enderecos[0].cidade = {
						nome: res.localidade,
						estado:
						{
							abreviacao: res.uf
						},
						codIbge: res.ibge
					};
					$scope.empresa.enderecos[0].logradouro = "";
					$scope.empresa.enderecos[0].logradouro = res.logradouro;
				});
			}

			$scope.createFormTelefone = function(sType)
			{
				$scope.empresa.telefones.push(
				{
					telefoneTypeEnum: sType
				})
			}

			//
			var callbackEstado = function(res)
			{

				if (res.operationSuccess == true)
				{
					$scope.estados = res.estadoList;
				}

			}

			var callbackCidade = function(res)
			{
				if (res.operationSuccess == true)
				{
					$scope.cidades = res.cidadeList
				}

			}

			var callbackRoles = function(res)
			{

				if (res.operationSuccess == true)
				{
					$scope.roles = res.userRolesList;
				}

			}

			qat.model.select.anonimo("entidade/api/userRoles/fetchPage", true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackRoles);

			doisValorFactory.empresa($scope);

			qat.model.select.anonimo("cadastros/api/estado/fetchPage", true, new qat.model.estadoInquiryRequest(100 / 20, true, null), callbackEstado);

			$scope.countrySelected = function(selected)
			{
				if (selected)
				{
					qat.model.select.anonimo("cadastros/api/cidade/fetchPage", true, new qat.model.cidadeInquiryRequest(100 / 20, true, selected.id), callbackCidade);
				}
			}


			$scope.createForm3 = function()
			{
				$scope.empresa.usuarios.push(
				{})
			}


			var bCPF = false;
			var bCNPJ = false;
			var bIM = false;
			var bIES = false;
			var bIIE = false;
			var bIE = false;
			var bIF = false;
			var bINSCRESTSUBSTTRIB = false;
			var bINDICADORIE = false;
			var bNUNINSJUNTCOMERCIAL = false;
			for (var x = 0; x < $scope.empresa.documentos.length; x++)
			{
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 1)
				{
					bCNPJ = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 2)
				{
					bCPF = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 3)
				{
					bIM = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 8)
				{
					bIES = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 9)
				{
					bIIE = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 10)
				{
					bIE = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 11)
				{
					bIF = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 12)
				{
					bINSCRESTSUBSTTRIB = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 14)
				{
					bINDICADORIE = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 16)
				{
					bNUNINSJUNTCOMERCIAL = true;
				}
				if ($scope.empresa.documentos[x].documentoTypeEnumValue == 17)
				{
					bCRC = true;
				}
			}

			if (!bCPF)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 2,
					numero: ""
				})
			};
			if (!bCNPJ)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 1,
					numero: ""
				})
			};
			if (!bIM)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 3,
					numero: ""
				})
			};
			if (!bIES)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 8,
					numero: ""
				})
			};
			if (!bIIE)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 9,
					numero: ""
				})
			};
			if (!bIE)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 10,
					numero: ""
				})
			};
			if (!bIF)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 11,
					numero: ""
				})
			};
			if (!bINSCRESTSUBSTTRIB)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 12,
					numero: ""
				})
			};
			if (!bINDICADORIE)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 14,
					numero: ""
				})
			};
			if (!bNUNINSJUNTCOMERCIAL)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 16,
					numero: ""
				})
			};
			if (!bCRC)
			{
				$scope.empresa.documentos.push(
				{
					documentoTypeEnumValue: 17,
					numero: ""
				})
			};

			if (!($scope.empresa.enderecos && $scope.empresa.enderecos[0]))
			{
				$scope.empresa.enderecos.push(
				{
					bairro: "",
					complemento: "",
					cidade:
					{
						nome: "",
						estado:
						{
							abreviacao: ""
						},
						codIbge: ""
					},
					logradouro: ""
				})
			}
			if (!($scope.empresa.emails && $scope.empresa.emails[0]))
			{
				$scope.empresa.emails.push(
				{
					email: ""
				});
			}
			$scope.telefones = $scope.empresa.telefones;
			if ($scope.empresa.socios.length == 0)
				$scope.empresa.socios.push(
				{
					pessoa:
					{}
				})
			if ($scope.empresa.cnaes.length == 0)
				$scope.empresa.cnaes = [
					{
						idCnae:
						{}
					}];

			if (!$scope.empresa.socios.length > 0)
			{
				$scope.empresa.socios.push(
				{
					emprId: $scope.empresa.id
				})
			}

			$scope.validationNomeRazao = function() {}

			//================

			$scope.validationCPF = function(tipo, value)
			{
				console.log("empresa tipo = " + tipo);
				if (value && tipo == 1)
				{
					var i;
					s = value;
					var c = s.substr(0, 9);
					var dv = s.substr(9, 2);
					var d1 = 0;
					var v = false;

					for (i = 0; i < 9; i++)
					{
						d1 += c.charAt(i) * (10 - i);
					}
					if (d1 == 0)
					{

						return true;
					}
					d1 = 11 - (d1 % 11);
					if (d1 > 9) d1 = 0;
					if (dv.charAt(0) != d1)
					{
						return true;
					}

					d1 *= 2;
					for (i = 0; i < 9; i++)
					{
						d1 += c.charAt(i) * (11 - i);
					}
					d1 = 11 - (d1 % 11);
					if (d1 > 9) d1 = 0;
					if (dv.charAt(1) != d1)
					{
						return true;
					}
					if (!v)
					{
						return false;
					}
					return true;
				}
			}

			$scope.validationDtNasc = function(tipo) {}

			$scope.validationInscJunt = function() {}

			//=====================

			$scope.validationCNPJ = function(tipo, cnpj)
			{
				if(tipo && tipo == 2 && cnpj.length < 14)
				{
					return false;
				}
				if (tipo && tipo == 2)
				{
					console.log("Pessoa Tipo " + tipo);
					cnpj = cnpj.replace(/[^\d]+/g, '');

					if (cnpj == '') return false;

					if (cnpj.length != 14)
						return false;

					// Elimina CNPJs invalidos conhecidos
					if (cnpj == "00000000000000" ||
						cnpj == "11111111111111" ||
						cnpj == "22222222222222" ||
						cnpj == "33333333333333" ||
						cnpj == "44444444444444" ||
						cnpj == "55555555555555" ||
						cnpj == "66666666666666" ||
						cnpj == "77777777777777" ||
						cnpj == "88888888888888" ||
						cnpj == "99999999999999")
					{
						return false;
					}
					// Valida DVs
					tamanho = cnpj.length - 2
					numeros = cnpj.substring(0, tamanho);
					digitos = cnpj.substring(tamanho);
					soma = 0;
					pos = tamanho - 7;
					for (i = tamanho; i >= 1; i--)
					{
						soma += numeros.charAt(tamanho - i) * pos--;
						if (pos < 2)
							pos = 9;
					}
					resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
					if (resultado != digitos.charAt(0))
					{
						return false;
					}
					tamanho = tamanho + 1;
					numeros = cnpj.substring(0, tamanho);
					soma = 0;
					pos = tamanho - 7;
					for (i = tamanho; i >= 1; i--)
					{
						soma += numeros.charAt(tamanho - i) * pos--;
						if (pos < 2)
							pos = 9;
					}
					resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
					if (resultado != digitos.charAt(1))
					{
						return false;
					}
					return true;
				}
				else
				{
					return true;
				}
			}
			$scope.validationInsEst = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return true

					}
					else
					{
						return false

					}
				}
				else
				{
					return false
				}
			}
			$scope.validationInsEstSubTrib = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return true
				}
			}
			$scope.validationIndIE = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return true
				}
			}
			$scope.validationIncriMun = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return true
				}
			}
			$scope.validationInsSuf = function(tipo, value)
			{
				if (tipo && tipo == 2)
				{
					if (value)
					{
						return false

					}
					else
					{
						return true

					}
				}
				else
				{
					return true
				}
			}

			//=====================
			$scope.validationEstado = function() {}
			$scope.validationMunicipio = function() {}

			$scope.empresa.usuarios[0].multipleDemo = {
				colors: []
			};
			//$scope.multipleDemo.colors = ['Blue','Red'];

			$scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

			console.log($scope.empresa);

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


			$scope.format = 'yyyy/MM/dd';
			$scope.date = new Date();

			$scope.today = function()
			{
				$scope.dt = new Date();
			};
			$scope.today();

			$scope.clear = function()
			{
				$scope.dt = null;
			};

			$scope.inlineOptions = {
				customClass: getDayClass,
				minDate: new Date(),
				showWeeks: true
			};

			$scope.dateOptions = {
				dateDisabled: disabled,
				formatYear: 'yy',
				maxDate: new Date(2020, 5, 22),
				minDate: new Date(),
				startingDay: 1
			};

			// Disable weekend selection
			function disabled(data)
			{
				var date = data.date,
					mode = data.mode;
				return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
			}

			$scope.toggleMin = function()
			{
				$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
				$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
			};

			$scope.toggleMin();

			$scope.open1 = function()
			{

				$scope.popup1.opened = true;
			};

			$scope.open2 = function()
			{

				$scope.popup2.opened = true;
			};

			$scope.setDate = function(year, month, day)
			{
				$scope.dt = new Date(year, month, day);
			};

			$scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			$scope.format = $scope.formats[1];
			$scope.altInputFormats = ['M!/d!/yyyy'];

			$scope.popup1 = {
				opened: false
			};

			$scope.popup2 = {
				opened: false
			};

			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			var afterTomorrow = new Date();
			afterTomorrow.setDate(tomorrow.getDate() + 1);
			$scope.events = [
				{
					date: tomorrow,
					status: 'full'
    },
				{
					date: afterTomorrow,
					status: 'partially'
    }
  ];

			function getDayClass(data)
			{
				var date = data.date,
					mode = data.mode;
				if (mode === 'day')
				{
					var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

					for (var i = 0; i < $scope.events.length; i++)
					{
						var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

						if (dayToCheck === currentDay)
						{
							return $scope.events[i].status;
						}
					}
				}

				return '';
			}

			var fnCallBack = function(oResponse)
			{

				//  $location.path("advogado/forms/advogadoAgenda");


				console.log(oResponse)
			}
			$scope.saveEmpresa = function()
			{
				$log.info("init processo de add empresa");
				$scope.empresa.dtInicio = (new Date($scope.empresa.dtInicio)).getTime();
				$scope.empresa.dtAbertura = (new Date($scope.empresa.dtAbertura)).getTime();

				fEmpresa.fnMontaObjeto2($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, $scope.cnaes, "INSERT", fnCallBack)
				// factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,cnaes,action){

			};

			$scope.saveContador = function()
			{
				$log.info("init processo de add Contador");
				$scope.empresa.dtInicio = (new Date($scope.empresa.dtInicio)).getTime();
				$scope.empresa.dtAbertura = (new Date($scope.empresa.dtAbertura)).getTime();
				$scope.empresa.permissaoTypeEnumValue = ($scope.empresa.tipoContabil == 1 ? 3 : 2 );

				fEmpresa.fnMontaObjeto2($scope.empresa, $scope.enderecos, $scope.emails, $scope.telefones, $scope.cnaes, "INSERT", fnCallBack)
				// factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,cnaes,action){

			};
		});
})();
(function()
{
	angular.module('wdApp.apps.newEmpresa.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
		.controller('NewEmpresaDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa)
		{
			var vm = this;
			$scope.newEmpresa = {};
			$scope.newEmpresa = $rootScope.newEmpresa;
			console.log($rootScope.newEmpresa)
			$scope.saveNewEmpresa = function()
			{
				fPessoa.fnDelete($scope.newEmpresa, "site/api/newEmpresa/update/", function()
				{
					console.log('ddda   aqui')
				});
			}
		});
})();

(function()
{
	angular.module('wdApp.apps.newEmpresa.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter', 'angularModalService'])
		.controller('NewEmpresaViewController', function($rootScope, $scope, fModels, SysMgmtData, fPessoa, localStorageService, $location, fEmpresa, ModalService)
		{
			var vm = this;

			vm.alterStatus = alterStatus;
			vm.addSocios = addSocios;
			vm.addCnae = addCnae;
			vm.addPlano = addPlano;
			vm.addSite = addSite;
			vm.addColaborador = addColaborador;
			vm.addPlanoContas = addPlanoContas;
			vm.addFilial = addFilial;
			vm.gravarNote = gravarNote;
			$scope.text = "";

			$scope.empresa = {
				configuracao:
				{
					confGeral:
					{},
					confVendas:
					{},
					confEntrada:
					{},
					configOS:
					{},
					confCarne:
					{},
					confFiscal:
					{},
					confNFe:
					{},
					confAlertas:
					{},
					confCMTP:
					{},
					confBlueSoft:
					{}

				}
			};
			$scope.enderecos = [];

			$scope.configuracao = {
				confGeral:
				{},
				confVendas:
				{},
				confEntrada:
				{},
				configOS:
				{},
				confCarne:
				{},
				confFiscal:
				{},
				confNFe:
				{},
				confAlertas:
				{},
				confCMTP:
				{},
				confBlueSoft:
				{}

			}

			function gravarNote()
			{

				SysMgmtData.processPostPageData("main/api/request",
				{
					url: "entidade/api/note/insert",
					token: $rootScope.authToken,
					request: new qat.model.reqNote(fModels.amont(qat.model.fnNote(
					{
						id: null,
						noteText: $scope.text,
						tabelaEnumValue: 1
					}), "INSERT"), true, true)
				}, function(res)
				{
					//qat.model.empresaInquiryRequest = function ( _iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
					//new qat.model.empresaInquiryRequest(0, true,null,null,null)
					console.log(res)

					if (res.operationSuccess == true)
					{

						console.log(res)
					}

				});

			}


			function alterStatus()
			{
				ModalService.showModal(
				{
					templateUrl: 'views/util/dialog/dAlterStatus.html',
					controller: "SocioInsertController",
				}).then(function(modal)
				{
					modal.element.modal();
					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addSocios()
			{

				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: "SocioInsertController"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addPlano()
			{

				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: function($scope) {

					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addSite()
			{

				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: function($scope) {

					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addColaborador()
			{
				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: function($scope) {

					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addPlanoContas()
			{
				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: function($scope) {

					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			function addFilial()
			{
				ModalService.showModal(
				{

					templateUrl: 'views/gerencia/dialog/dSocios.html',
					controller: function($scope) {

					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();



					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}



			function addCnae()
			{
				ModalService.showModal(
				{
					templateUrl: 'views/gerencia/dialog/dCnae.html',
					controller: function($scope) {



					},
					controllerAs: "futurama"
				}).then(function(modal)
				{
					modal.element.modal();

					$(".selectd").select2(
					{
						placeholder: "Select a state"
					});
					modal.close.then(function(result)
					{
						$scope.message = "You said " + result;
					});
				});
			}

			$scope.toggle = function()
			{
				$scope.state = !$scope.state;
			};

			$scope.toggle1 = function()
			{
				$scope.state1 = !$scope.state1;
			};

			$scope.toggle2 = function()
			{
				$scope.state2 = !$scope.state2;
			};

			var searchObject = $location.search();
			var _emprId = null;
			if ((localStorage.getItem('empresa') !== undefined) && (localStorage.getItem('empresa') !== null))
			{
				_emprId = JSON.parse(localStorage.getItem('empresa')).id;
			}



			SysMgmtData.processPostPageData("main/api/request",
			{
				url: "entidade/api/empresa/fetchPage",
				token: $rootScope.authToken,
				request: new qat.model.empresaInquiryRequest(0, true, null, parseInt(searchObject.id, 10), null, null)
			}, function(res)
			{
				//qat.model.empresaInquiryRequest = function ( _iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
				//new qat.model.empresaInquiryRequest(0, true,null,null,null)
				console.log(res)

				if (res.operationSuccess == true)
				{

					$scope.empresa = res.empresaList[0];
					$scope.enderecos = res.empresaList[0].enderecos;
					$scope.configuracao = res.empresaList[0].configuracao;
					if ((res.empresaList[0].documentos != null) && (res.empresaList[0].documentos.length == 0))
					{
						$scope.empresa.documentos = [
							{
								documentoTypeEnumValue: 2,
								numero: ""
							},
							{
								documentoTypeEnumValue: 4,
								numero: ""
							},
							{
								documentoTypeEnumValue: 1,
								numero: ""
							},
							{
								documentoTypeEnumValue: 12,
								numero: ""
							},
							{
								documentoTypeEnumValue: 14,
								numero: ""
							},
							{
								documentoTypeEnumValue: 10,
								numero: ""
							},
							{
								documentoTypeEnumValue: 11,
								numero: ""
							},
							{
								documentoTypeEnumValue: 3,
								numero: ""
							}

                        ]
					}
					console.log($scope.empresa)
				}

			});


			// save
			$scope.updateEmpresa = function()
			{

				if ($scope.forms != undefined)
				{
					for (x = 0; x < $scope.forms.length; x++)
					{
						$scope.empresa.telefones.push(fModels.amont($scope.forms[x].telefone, "INSERT"));
					}
				}

				if (($scope.configuracao == undefined) && ($scope.configuracao == null))
				{
					$scope.empresa.configuracao = {
						confGeral:
						{},
						confVendas:
						{},
						confEntrada:
						{},
						configOS:
						{},
						confCarne:
						{},
						confFiscal:
						{},
						confNFe:
						{},
						confAlertas:
						{},
						confCMTP:
						{},
						confBlueSoft:
						{}

					};

					$scope.configuracao = {
						confGeral:
						{},
						confVendas:
						{},
						confEntrada:
						{},
						configOS:
						{},
						confCarne:
						{},
						confFiscal:
						{},
						confNFe:
						{},
						confAlertas:
						{},
						confCMTP:
						{},
						confBlueSoft:
						{}

					};
				}
				if (($scope.configuracao.id !== undefined) && ($scope.configuracao.id !== null))
				{
					$scope.empresa.configuracao = fModels.amont($scope.configuracao, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao = fModels.amont($scope.configuracao, "INSERT");
				}
				//-------------------
				if ($scope.configuracao.confGeral && $scope.configuracao.confGeral.id !== undefined)
				{
					$scope.empresa.configuracao.confGeral = fModels.amont($scope.configuracao.confGeral, "UPDATE");
				}
				else
				{
					//$scope.empresa.configuracao = {confGeral : {}};
					$scope.empresa.configuracao.confGeral = fModels.amont($scope.configuracao.confGeral, "INSERT");
				}
				//-------------------
				if ($scope.configuracao.confVendas && $scope.configuracao.confVendas.id !== undefined)
				{
					$scope.empresa.configuracao.confVendas = fModels.amont($scope.configuracao.confVendas, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao.confVendas = fModels.amont($scope.configuracao.confVendas, "INSERT");
				}


				//-------------------
				if ($scope.configuracao.confEntrada && $scope.configuracao.confEntrada.id !== undefined)
				{
					$scope.empresa.configuracao.confEntrada = fModels.amont($scope.configuracao.confEntrada, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao.confEntrada = fModels.amont($scope.configuracao.confEntrada, "INSERT");
				}


				//-------------------
				if (($scope.configuracao.configOS !== undefined) && ($scope.configuracao.configOS !== null))
				{
					$scope.empresa.configuracao.configOS = fModels.amont($scope.configuracao.configOS, "UPDATE");
				}
				else
				{
					$scope.configuracao.configOS = {}
					$scope.empresa.configuracao.configOS = fModels.amont($scope.configuracao.configOS, "INSERT");
				}

				//-------------------
				if ($scope.configuracao.confCarne && $scope.configuracao.confCarne.id !== undefined)
				{
					$scope.empresa.configuracao.confCarne = fModels.amont($scope.configuracao.confCarne, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao.confCarne = fModels.amont($scope.configuracao.confCarne, "INSERT");
				}

				//-------------------
				if ($scope.configuracao.confFiscal && $scope.configuracao.confFiscal.id !== undefined)
				{
					$scope.empresa.configuracao.confFiscal = fModels.amont($scope.configuracao.confFiscal, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao.confFiscal = fModels.amont($scope.configuracao.confFiscal, "INSERT");
				}

				//-------------------
				if ($scope.configuracao.confNFe && $scope.configuracao.confNFe.id !== undefined)
				{
					$scope.empresa.configuracao.confNFe = fModels.amont($scope.configuracao.confNFe, "UPDATE");
				}
				else
				{
					$scope.empresa.configuracao.confNFe = fModels.amont($scope.configuracao.confNFe, "INSERT");
				}
				//-------------------

				if (($scope.configuracao.confAlertas !== undefined) && ($scope.configuracao.confAlertas !== null))
				{
					$scope.empresa.configuracao.confAlertas = fModels.amont($scope.configuracao.confAlertas, "UPDATE");
				}
				else
				{
					$scope.configuracao.confAlertas = {};
					$scope.empresa.configuracao.confAlertas = fModels.amont($scope.configuracao.confAlertas, "INSERT");
				}
				//-------------------
				if (($scope.configuracao.confCMTP !== undefined) && ($scope.configuracao.confCMTP !== null))
				{
					if ($scope.configuracao.confCMTP.id !== undefined)
					{
						$scope.empresa.configuracao.confCMTP = fModels.amont($scope.configuracao.confCMTP, "UPDATE");
					}
				}
				else
				{
					$scope.configuracao.confCMTP = {};
					$scope.empresa.configuracao.confCMTP = fModels.amont($scope.configuracao.confCMTP, "INSERT");
				}
				//-------------------

				if (($scope.configuracao.confBlueSoft !== undefined) && ($scope.configuracao.confBlueSoft !== null))
				{
					$scope.empresa.configuracao.confBlueSoft = fModels.amont($scope.configuracao.confBlueSoft, "UPDATE");
				}
				else
				{
					$scope.configuracao.confBlueSoft = {}
					$scope.empresa.configuracao.confBlueSoft = fModels.amont($scope.configuracao.confBlueSoft, "INSERT");
				}


				fEmpresa.fnMontaObjeto($scope.empresa, $scope.enderecos, "UPDATE", 'PRINCIPAL')

				var oObject = fModels.amont($scope.empresa, "UPDATE");

				oObject.cnaes = [];
				oObject.planosServicos = {};
				oObject.siteList = [];



				if ($scope.usuario != undefined)
				{
					oObject.usuarios.push(fModels.amont(qat.model.fnUsuario($scope.usuario, "UPDATE", "system")));
				}

				SysMgmtData.processPostPageData("main/api/request",
				{
					url: "entidade/api/empresa" + WebDaptiveAppConfig.update_url,
					token: $rootScope.authToken,
					request: new qat.model.reqEmpr(oObject, true, true)
				}, function(res)
				{
					if (res.operationSuccess == true)
					{

					}

				});
			};
		});
})();

/*
(function() {
angular.module('ui.bootstrap.demo').controller('DateParserDemoCtrl', function ($scope, uibDateParser) {
  $scope.format = 'yyyy/MM/dd';
  $scope.date = new Date();
});
})();*/