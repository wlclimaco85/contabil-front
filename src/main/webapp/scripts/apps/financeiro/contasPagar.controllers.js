(function() {
    angular.module('wdApp.apps.contasPagar', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasPagarController', contasPagarController);

    function contasPagarController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
        var vm = this;
        vm.selected = {};
        vm.selectAll = false;
        vm.toggleAll = toggleAll;
        vm.toggleAlls = toggleAlls;
        vm.toggleOne = toggleOne;
        vm.status = status;
        vm.message = '';
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};
        vm.baixas = [];

        vm.fnDelete  = fnDelete;
        vm.fnEdit    = fnEdit;
        vm.fnRecibo  = fnRecibo;
        vm.fnBaixar  = fnBaixar;

        $scope.contasPagar = {
        };

        $scope.formatterDate = function(iDate) {
            return $filter('date')(new Date(iDate), 'dd/MM/yyyy');
        };

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };
        var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

        function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        }

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }
        var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.contasPagarList.length
            json['recordsFiltered'] = json.contasPagarList.length
            json['draw'] = 1
            console.log(json)
            return json.contasPagarList;
        }

     /*   function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }
*/

        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;

            return ' <div class="dropdown" >'+
              '<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
               ' Açoes'+
                '<span class="caret"></span>'+
              '</button>'+
              '<ul class="dropdown-menu" style="height:120px" aria-labelledby="dropdownMenu1">'+
                '<li><a href="javaScript:;" ng-click="showCase.delete(showCase.persons[' + data.id + '])"><span class="fa fa-trash"></span> Deletar</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.edit(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-edit"></span> Alterar</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.recibo(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-print"></span> Emitir Recibo</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.baixar(showCase.persons[' + data.id + '])"><span class="fa fa-usd">                </span> Pagar</a></li>'+
              '</ul>'+
            '</div>'
        }

        function fnDelete(person) {
            debugger
            console.log($(this))

            dialogFactory.dialog('views/financeiro/dialog/dBaixa.html',"ContasPagarUpdateController",function(){$("#teste").append('<p> teste </p>')});
        }

        function fnEdit(person) {
            debugger
            console.log($(this))

            dialogFactory.dialog('views/financeiro/dialog/dBaixa.html',"ContasPagarUpdateController",function(){$("#teste").append('<p> teste </p>')});
        }

        function fnRecibo(person) {
            debugger
            console.log($(this))

            dialogFactory.dialog('views/financeiro/dialog/dBaixa.html',"ContasPagarUpdateController",function(){$("#teste").append('<p> teste </p>')});
        }

        function fnBaixar(person) {
            debugger
            console.log($(this))

            dialogFactory.dialog('views/financeiro/dialog/dBaixaTitulo.html',"ContasPagarUpdateController",function(){$("#teste").append('<p> teste </p>')});
        }

        function deleteRow(person) {
           $rootScope.contasPagar = person;
           dialogFactory.dialog('views/financeiro/dialog/dContasPagar.html',"ContasPagarDeleteController",openDialogUpdateCreate);
        }

        Datatablessss.getTable('/financeiro/api/contasPagar/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.contasPagar(vm,createdRow,$scope,FiltersFactory.contasPagar()), tableColumnsFactory.contasPagar(vm,"",actionsHtml));
      //  Datatablessss.getTable('/fiscal/api/cfop/fetchPage           ', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cfop(vm,createdRow,$scope,FiltersFactory.cfop()), tableColumnsFactory.cfop(vm,titleHtml,actionsHtml));

        function toggleAll(selectAll, selectedItems) {

            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }

        function toggleAlls(selectAll, selectedItems) {

                    var sTbody = "";

                    for(var x= 0;x < selectAll.length;x++ )
                    {
                      sTbody = sTbody +'<tr>'+
                        '<td>'+selectAll[x].id+'</td>'+
                        '<td>'+moment(selectAll[x].dataBaixa).format('DD/MM/YYYY')+'</td>'+
                        '<td>'+selectAll[x].conta.descricao+'</td>'+
                        '<td>'+numeral(selectAll[x].valor).format('$0.0')+'</td>'+
                      '</tr>';
                    }

                    var table = '<table class="table table-bordered">'+
                    '<thead>'+
                      '<tr>'+
                        '<th>Id</th>'+
                        '<th>Data Baixa</th>'+
                        '<th>Conta</th>'+
                        '<th>Valor Baixa</th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                    sTbody +

                    '</tbody>'+
                 '</table>'

                 dialogFactory.dialog('views/financeiro/dialog/dBaixa.html',"ContasPagarUpdateController",function(){$("#teste").append(table)});
        }

        function status() {
        }

        function toggleOne(selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    if (!selectedItems[id]) {
                        vm.selectAll = false;
                        return;
                    }
                }
            }
            vm.selectAll = true;
        }

        function toggle() {
            $scope.state = !$scope.state;
        };
    }
})();
(function() {
    angular.module('wdApp.apps.contasPagar.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasPagarInsertController', function($rootScope, $scope, fModels, SysMgmtData,doisValorFactory,toastr) {
            var vm = this;

            $scope.formatterDate = function(iDate) {
                return $filter('date')(new Date(iDate), 'dd/MM/yyyy');
              };

            $scope.today = function() {
                $scope.dt = new Date();
              };
              $scope.today();

              $scope.clear = function() {
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
              function disabled(data) {
                var date = data.date,
                  mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
              }

              $scope.toggleMin = function() {
                $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
                $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
              };

              $scope.toggleMin();

              $scope.open1 = function() {

                $scope.popup1.opened = true;
              };

              $scope.open2 = function() {

                $scope.popup2.opened = true;
              };

              $scope.open3 = function() {

                $scope.popup3.opened = true;
              };

              $scope.setDate = function(year, month, day) {
                $scope.dt = new Date(year, month, day);
              };

              $scope.formats = ['dd-MMMM-yyyy','dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
              $scope.format = $scope.formats[1];
              $scope.altInputFormats = ['M!/d!/yyyy'];

              $scope.popup1 = {
                opened: false
              };

              $scope.popup2 = {
                opened: false
              };

              $scope.popup3 = {
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

              function getDayClass(data) {
                var date = data.date,
                  mode = data.mode;
                if (mode === 'day') {
                  var dayToCheck = new Date(date).setHours(0,0,0,0);

                  for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                      return $scope.events[i].status;
                    }
                  }
                }

                return '';
              }

            $scope.titulo = {
                listBaixa : [],
                dataEmissao : moment(new Date()).format('DD/MM/YYYY'),
                dataPagamento : moment(new Date()).format('DD/MM/YYYY'),
                dataVencimento : moment(new Date()).format('DD/MM/YYYY')
            }

            function edit(person) {
               debugger
            }

           // $('.toggle-ones').bootstrapToggle('toggle')

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //  debugger
                $scope.cliente = res.clienteList;
            });
            var fnFunctionCallback = function (res){
               $scope.categoria = [];
               $scope.tipoDocumento = [];
               $scope.cadastro = [];
               $scope.intervalo = [];
               $scope.situacao = [];

               if(res.operationSuccess == true)
                   {
                        for(var x=0;x<res.doisValoresList.length;x++)
                        {
                            planos = res.doisValoresList[x] ;
                            if(planos.doisValorType != null)
                            {
                                switch (planos.doisValorType.tipo)
                                {
                                    case 'TIPO DOCUMENTO':
                                        $scope.tipoDocumento.push(planos);
                                        break;
                                    case 'CATEGORIA':
                                        $scope.categoria.push(planos);
                                        break;
                                    case 'CADASTROMAIS':
                                        $scope.cadastro.push(planos);
                                        break;
                                    case 'INTERVALO':
                                        $scope.intervalo.push(planos);
                                        break;
                                    case 'SITUACAO':
                                        $scope.situacao.push(planos);
                                        break;
                                }
                            }
                        }
                    }
                console.log(res);
            }

            doisValorFactory.financeiro(101,$scope,fnFunctionCallback);

            var fnCallbackConta = function (res){
               $scope.conta = [];
               debugger

               if(res.operationSuccess == true)
               {
                    $scope.conta = res.bancoList;
               }
            }


            qat.model.select.util("financeiro/api/conta/fetchPage",true,new qat.model.doisValoresInquiryRequest(0, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackConta);

            $scope.enderecos = [];




            var fnCallBack = function(res,scope) {
                debugger
                if(res.operationSuccess == true)
                {
                    var ultDate = new Date();
                    initLoad = true;
                    var dDate  = new Date();
                    var dDocId = scope.titulo.docId;
                    if((scope.titulo)&&(scope.titulo.formaCadastro) && (scope.titulo.formaCadastro.value))
                    {
                        for(x=0;x < parseInt(scope.titulo.formaCadastro.value,10);x++)
                        {
                            if(parseInt(scope.titulo.intervalo.value,10) < 29)
                            {
                                dDate
                                ultDate.setDate(dDate.getDate() + parseInt(scope.titulo.intervalo.value,10));
                            }
                            else
                            {
                                ultDate.setMonth(dDate.getMonth() + parseInt(scope.titulo.intervalo.value,10)/30)
                            }
                            dDate = ultDate;
                            scope.titulo.situacao = { id : 392}
                            scope.titulo.docId = dDocId + "/"+ x;
                            scope.titulo.dataVencimento = ultDate;
                            var oObject = fModels.amont(qat.model.fnFormaPagar(scope.titulo,"INSERT"),"INSERT");

                            SysMgmtData.processPostPageData("main/api/request", {
                                url: "financeiro/api/contasPagar/insert",
                                token: $rootScope.authToken,
                                request: new qat.model.reqContasPagar(oObject, true, true)
                            }, function(res) {
                                if(res.operationSuccess == true)
                                {
                                    toastr.success(scope.titulo.docId+'-' + x, 'Sucess');
                                }
                            });
                        }
                    }
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                }
                else
                {
                   toastr.error('County form error, please correct and resubmit.', 'Error');
                }
            }
            $scope.saveContasPagar = function() {


                $scope.titulo.listBaixa[0].dataBaixa = $scope.titulo ? $scope.titulo.dataPagamento.getTime() : (new Date()).getTime();
                $scope.titulo.listBaixa[0].observacao = "";
                $scope.titulo.listBaixa[0].juros  = 0;
                $scope.titulo.listBaixa[0].multa = 0;
                $scope.titulo.listBaixa[0].desconto = 0;

                fModels.amont($scope.titulo.listBaixa[0],"INSERT");

                $scope.titulo.situacao = { id : 392}
                var oObject = fModels.amont(qat.model.fnFormaPagar($scope.titulo,"INSERT"),"INSERT");


                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasPagar/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasPagar(oObject, true, true)
                }, function(res) {
                    fnCallBack(res,$scope);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.contasPagar.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasPagarUpdateController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveContasPagar = function() {
                var oObject = fModels.amont($scope.contasPagar,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasPagar/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasPagar(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.contasPagar.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasPagarDeleteController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveContasPagar = function() {
                var oObject = fModels.amont($scope.contasPagar,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasPagar/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasPagar(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.contasPagar.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasPagarViewController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasPagar = {};
            $scope.contasPagar = $rootScope.contasPagar;
            console.log($rootScope.contasPagar)
            $scope.saveContasPagar = function() {
                var oObject = fModels.amont($scope.contasPagar,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasPagar/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasPagar(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
            }
        });
})();