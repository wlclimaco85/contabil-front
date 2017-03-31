(function() {
    angular.module('wdApp.apps.contasReceber', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberController', contasReceberController);

    function contasReceberController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
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
        vm.fnCopiar  = fnCopiar;
        vm.fnPagarAgora = fnPagarAgora;

        vm.dtInstanceCR = {};

        function reloadData() {
            var resetPaging = false;
            vm.dtInstanceCR.reloadData(callback, resetPaging);
        }

        function callback(json) {
            console.log(json);
        }

       var reloadData = function() {

            var resetPaging = false;
            vm.dtInstanceCR.reloadData(callback, resetPaging);
        }

        $rootScope.reloadDataCR = function(_callback) {

            var resetPaging = false;
            vm.dtInstanceCR.reloadData(_callback, resetPaging);
        }



        $scope.contasReceber = {
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
            json['recordsTotal'] = json.contasReceberList.length
            json['recordsFiltered'] = json.contasReceberList.length
            json['draw'] = 1
            console.log(json)
            return json.contasReceberList;
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
         function fnPagarAgora(person) {
            return

         }
        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;

            return ' <div class="dropdown" >'+
              '<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
               ' Açoes'+
                '<span class="caret"></span>'+
              '</button>'+
              '<ul class="dropdown-menu" style="height:140px" aria-labelledby="dropdownMenu1">'+
                '<li><a href="javaScript:;" ng-click="showCase.fnDelete(showCase.persons[' + data.id + '])"><span class="fa fa-trash"></span> Deletar</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.fnEdit(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-edit"></span> Alterar</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.fnCopiar(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-edit"></span> Copiar</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.fnRecibo(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-print"></span> Emitir Recibo</a></li>'+
                '<li><a href="javaScript:;" ng-click="showCase.fnBaixar(showCase.persons[' + data.id + '])"><span class="fa fa-usd">                </span> Pagar</a></li>'+
              '</ul>'+
            '</div>'
        }

        function fnDelete(person) {

             $rootScope.contaPagar = person;

            dialogFactory.dialog('views/util/dialog/dDelete.html',"ContasReceberDeleteController",validationFactory.contasReceber(),reloadData());
        }

        function fnDeleteBaixa(person) {

             $rootScope.contaPagar = person;


        }

        function fnCopiar(person) {

             $rootScope.contaPagar = person;

            dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberCloneController",validationFactory.contasReceber(),reloadData());
        }

        function fnEdit(person) {

             $rootScope.contaPagar = person;

            dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberUpdateController",validationFactory.contasReceber(),reloadData());
        }

        function fnRecibo(person) {

            console.log($(this))

            dialogFactory.dialog('views/financeiro/dialog/dTituloImprimir.html',"ContasReceberReciboController",validationFactory.contasReceber(),reloadData());
        }

        function fnBaixar(person) {

             $rootScope.contaPagar = person;

            dialogFactory.dialog('views/financeiro/dialog/dBaixarContasPagar.html',"ContasReceberBaixaController",validationFactory.contasReceber(),reloadData());
        }

        function deleteRow(person) {
           $rootScope.contasReceber = person;
           dialogFactory.dialog('views/financeiro/dialog/dContasReceber.html',"ContasReceberDeleteController",validationFactory.contasReceber(),reloadData());
        }

        Datatablessss.getTable('/financeiro/api/contasReceber/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.contasReceber(vm,createdRow,$scope,FiltersFactory.contasReceber(),reloadData), tableColumnsFactory.contasReceber(vm,"",actionsHtml));
      //  Datatablessss.getTable('/fiscal/api/cfop/fetchPage           ', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cfop(vm,createdRow,$scope,FiltersFactory.cfop()), tableColumnsFactory.cfop(vm,titleHtml,actionsHtml));

        function toggleAll(selectAll, selectedItems) {

            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }

        function toggleAlls(selectAll, selectedItems) {
            $rootScope.baixa = selectAll;

                 dialogFactory.dialog('views/financeiro/dialog/dBaixa.html',"ContasReceberBaixasController",function(){});

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
    angular.module('wdApp.apps.contasReceber.insert', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberInsertController', function($rootScope, $scope, fModels, SysMgmtData,doisValorFactory,toastr,$element, close) {
            var vm = this;

            $scope.titulo.pagarAgora = false;

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
                maisopcoes : false,
                dataEmissao : new Date(),
                dataPagamento : new Date(),
                dataVencimento : new Date()
            }

            function edit(person) {

            }

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //
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


               if(res.operationSuccess == true)
               {
                    $scope.conta = res.bancoList;
               }
            }


            qat.model.select.util("financeiro/api/conta/fetchPage",true,new qat.model.doisValoresInquiryRequest(0, 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),fnCallbackConta);

            $scope.enderecos = [];




            var fnCallBack = function(res,scope) {

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
                                url: "financeiro/api/contasReceber/insert",
                                token: $rootScope.authToken,
                                request: new qat.model.reqContasReceber(oObject, true, true)
                            }, function(res) {
                                if(res.operationSuccess == true)
                                {
                                    toastr.success(scope.titulo.docId+'-' + x, 'Sucess');
                                }
                            });
                        }
                    }

                    $element.modal('hide');
                    close(null, 500);
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                    $rootScope.reloadDataCR(function(data){debugger})
                }
            }
            $scope.saveContasReceber = function() {
debugger
                if($scope.titulo.pagarAgora)
                {
                    $scope.titulo.listBaixa[0].dataBaixa = $scope.titulo ? $scope.titulo.dataPagamento.getTime() : (new Date()).getTime();
                    $scope.titulo.listBaixa[0].observacao = "";
                    $scope.titulo.listBaixa[0].juros  = 0;
                    $scope.titulo.listBaixa[0].multa = 0;
                    $scope.titulo.listBaixa[0].desconto = 0;

                    fModels.amont($scope.titulo.listBaixa[0],"INSERT");
                }

                $scope.titulo.situacao = { id : 392}
                var oObject = fModels.amont(qat.model.fnFormaReceber($scope.titulo,"INSERT"),"INSERT");


                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    fnCallBack(res,$scope);
                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberUpdateController', function($rootScope, $scope, fModels, SysMgmtData,doisValorFactory,toastr,$element, close) {
            var vm = this;

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //
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

            $scope.titulo = {};

            $scope.titulo = $rootScope.contaPagar;
            $scope.fornecedor = $rootScope.contaPagar.fornecedor
            console.log($rootScope.contasReceber)
            $scope.saveContasReceber = function() {

/*
                $scope.titulo.listBaixa[0].dataBaixa = $scope.titulo ? $scope.titulo.dataPagamento.getTime() : (new Date()).getTime();
                $scope.titulo.listBaixa[0].observacao = "";
                $scope.titulo.listBaixa[0].juros  = 0;
                $scope.titulo.listBaixa[0].multa = 0;
                $scope.titulo.listBaixa[0].desconto = 0;

                fModels.amont($scope.titulo.listBaixa[0],"INSERT");
*/
             //   $scope.titulo.situacao = { id : 392}

                var oObject = fModels.amont(qat.model.fnFormaPagar($scope.titulo,"UPDATE"),"UPDATE");


                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/update",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {

                  if(res.operationSuccess == true){
                    $element.modal('hide');
                    close(null, 500);
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                    $rootScope.reloadDataCR(function(data){debugger})
                  }

                });
            };
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberDeleteController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            $scope.titulo = $rootScope.contaPagar;
            SysMgmtData.processPostPageData("main/api/request", {
                url: "financeiro/api/contasReceber/fetchPage",
                token: $rootScope.authToken,          //_iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
                request: new qat.model.empresaInquiryRequest(0, true, $rootScope.user.user, $scope.titulo.id, null,null)
            }, function(res) {

                var oContasReceber = res.contasReceberList;
                var valorPago = 0;
                var sTbody = "<tr></tr>"
                if(oContasReceber.listBaixa)
                {
                	sTbody = "";
	                for(var x=0;x<oContasReceber.listBaixa.length;x++)
	                {
	                	  valorPago = valorPago + oContasReceber.listBaixa[x].valor;
	                      var aListBaixa = oContasReceber[0].listBaixa[x];
	                      sTbody = sTbody +'<tr>'+
	                        '<td>'+aListBaixa.id+'</td>'+
	                        '<td>'+aListBaixa.createUser+'</td>'+
	                        '<td>'+moment(aListBaixa.dataBaixa).format('DD/MM/YYYY')+'</td>'+
	                        '<td>'+aListBaixa.conta.descricao+'</td>'+
	                        '<td>'+numeral(aListBaixa.valor).format('$0.0')+'</td>'+
	                      '</tr>';
                    }
                }
//<a href="#" class="btn btn-link active" type="button">Button</a>
                  var sHtml = '<div class="container-fluid">'+
  '<div class="row" style="font-size:100%!important">'+
    '<div class="col-md-12">'+
      '<div class="row">'+
        '<div class="col-md-12">'+
           '<span style="display : block;font-size:100%!important" class="label label-info">Deseja Realmente deletar o Titulo a PAGAR #<a href="#" class="btn btn-link active" type="button">'+oContasReceber.id+'</a></span>'+
        '</div>'+
      '</div>'+
      '<div class="row"></div>'+
      '<div class="row">'+
        '<div class="row"></div>'+
        '<div class="col-md-12" style="font-size:100%!important">'+
            '<div class="row">'+
            '<div class="col-md-3">'+
                  '<div class="row"><span class="label label-default">Descrição :</span></div>'+
                  '<div class="row"><span class="label label-default">N° Doc :</span></div>'+
                  '<div class="row"><span class="label label-default">Valor :</span></div>'+
            '</div>'+
            '<div class="col-md-3">'+
               '<div class="row"><span class="label label-warning">'+oContasReceber.descricao+'</span></div>'+
               '<div class="row"><span class="label label-warning">'+oContasReceber.docId+'</span></div>'+
               '<div class="row"><span class="label label-warning">'+numeral(oContasReceber.valor).format('$0.0')+'</span></div>'+
            '</div>'+
            '<div class="col-md-3">'+
                  '<div class="row"><span class="label label-default">Data Vencimento :</span></div>'+
                  '<div class="row"><span class="label label-default">Valor Pago :</span></div>'+
                  '<div class="row"><span class="label label-default">Status :</span></div>'+
            '</div>'+
            '<div class="col-md-3">'+
               '<div class="row"><span class="label label-warning">'+moment(oContasReceber.dataVencimento).format("DD/MM/YYYY")+'</span></div>'+
               '<div class="row"><span class="label label-warning">'+numeral(valorPago).format('$0.0')+'</span></div>'+
               '<div class="row"><span class="label label-warning">'+oContasReceber.situacao.descricao+'</span></div>'+
            '</div>'+
        '</div>'+
      '</div>'+
      '<div class="row"></div>'+
      '<div class="row">'+
        '<div class="col-md-12">'+
           '<div class="col-md-4"></div>'+
           '<div class="col-md-4">'+
           '<h4>Baixas</h4></div>'+
           '<div class="col-md-4"></div>'+
        '</div>'+
        '<div class="col-md-12">'+
          '<table class="table table-bordered table-hover table-condensed">'+
            '<thead>'+
              '<tr>'+
            		'<th>#</th>'+
            		'<th>Usuario</th>'+
	                '<th>Data Pagamento</th>'+
	                '<th>Conta</th>'+
	                '<th>Valor</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>'+
            sTbody +
            '</tbody>'+
          '</table>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
$('#delete').append(sHtml);
               });

            $scope.saveContasReceber = function() {
                var oObject = fModels.amont(qat.model.fnFormaPagar($scope.titulo,"DELETE"),"DELETE");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/delete",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                	if(res.operationSuccess == true){
  	                  $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataCR(function(data){debugger})
	                }
                });
            }
        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberViewController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;
            $scope.contasReceber = {};
            $scope.contasReceber = $rootScope.contasReceber;
            console.log($rootScope.contasReceber)
            $scope.saveContasReceber = function() {
                var oObject = fModels.amont($scope.contasReceber,"INSERT");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                });
            }
        });
})();

(function() {
    angular.module('wdApp.apps.contasReceber.baixas', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberBaixasController', function($rootScope, $scope, fModels, SysMgmtData,dialogFactory) {
            var vm = this;
          //  $("#teste").append(table)

             vm.fnDeleteBaixa  = fnDeleteBaixa;

            function fnDeleteBaixa(person) {

                $rootScope.contaPagar = person;


            }

            SysMgmtData.processPostPageData("main/api/request", {
                url: "financeiro/api/contasReceber/fetchPage",
                token: $rootScope.authToken,          //_iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
                request: new qat.model.empresaInquiryRequest(0, true, $rootScope.user.user, $rootScope.baixa, null,null)
            }, function(res) {
              //
                var oContasReceber = res.contasReceberList;

                    var sTbody = "";

                    for(var x= 0;x < oContasReceber[0].listBaixa.length;x++ )
                    {
                      var aListBaixa = oContasReceber[0].listBaixa[x];
                      sTbody = sTbody +'<tr>'+
                        '<td>'+aListBaixa.id+'</td>'+
                        '<td>'+aListBaixa.createUser+'</td>'+
                        '<td>'+moment(aListBaixa.dataBaixa).format('DD/MM/YYYY')+'</td>'+
                        '<td>'+aListBaixa.conta.descricao+'</td>'+
                        '<td>'+numeral(aListBaixa.valor).format('$0.0')+'</td>'+
                        '<td><a href="javaScript:;" class="fnDeleteBaixa" id="' + aListBaixa.id + '"><span class="fa fa-trash"></span></a></td>'
                      '</tr>';
                    }

                    var table = '<table class="table table-bordered">'+
                    '<thead>'+
                      '<tr>'+
                        '<th>Id</th>'+
                        '<th>Usuario</th>'+
                        '<th>Data Baixa</th>'+
                        '<th>Conta</th>'+
                        '<th>Valor Baixa</th>'+
                        '<th></th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                    sTbody +

                    '</tbody>'+
                 '</table>'

                 $("#teste").append(table);

                 $( ".table tbody" ).off();
            $( ".table tbody" ).on( "click", ".fnDeleteBaixa", function() {

              var iId =  $( this ).attr('id')
              dialogFactory.dialog('views/util/dialog/dDelete.html',"ContasReceberBaixasController",function(){

                a= '<small>Deseja remover baixa com ID</small><strong> : '+iId+'</strong>'
                $("#delete").append(a);
/*
                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {

                });
*/
              });
            });

               });



        });
})();

(function() {
    angular.module('wdApp.apps.contasReceber.Baixa', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberBaixaController', function($rootScope, $scope, fModels, SysMgmtData,toastr,$element, close) {
            var vm = this;

            $scope.contasReceber = {};
            $scope.titulo = $rootScope.contaPagar;
            dataVencimento =   moment($scope.titulo.dataVencimento).format('DD/MM/YYYY');
            $scope.dataPagamento =   moment(new Date()).format('DD/MM/YYYY');
            $scope.saveBaixaContasPagar = function() {
debugger
                $scope.titulo.listBaixa[0].id = null;
                $scope.titulo.listBaixa[0].dataBaixa = (new Date()).getTime();
                $scope.titulo.listBaixa[0].dataVencimento = $scope.titulo.dataVencimento
                $scope.titulo.listBaixa[0].modelAction = "INSERT"
                var oObject = fModels.amont(qat.model.fnFormaPagar($scope.titulo,"NONE"),"NONE");

                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {
                    if(res.operationSuccess == true){
                      $element.modal('hide');
                      close(null, 500);
                      toastr.success('Deu Certo seu tanga.', 'Sucess');
                      $rootScope.reloadDataCR(function(data){debugger})
                  }
                });
            }
        });
})();

(function() {
    angular.module('wdApp.apps.contasReceber.Recibo', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberReciboController', function($rootScope, $scope, fModels, SysMgmtData) {
            var vm = this;

        });
})();
(function() {
    angular.module('wdApp.apps.contasReceber.copiar', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('ContasReceberCloneController', function($rootScope, $scope, fModels, SysMgmtData,doisValorFactory,toastr,$element, close) {
            var vm = this;

            SysMgmtData.processPostPageData("main/api/request", {
                url: "pessoa/api/cliente/fetchPage",
                token: $rootScope.authToken,
                request: new qat.model.empresaInquiryRequest(0, true, null, null, null)
            }, function(res) {
              //
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

            $scope.titulo = {};

            $scope.titulo = $rootScope.contaPagar;
            $scope.cliente = $rootScope.contaPagar.cliente

            $scope.saveContasReceber = function() {

                if($scope.titulo.pagarAgora)
                {
                    $scope.titulo.listBaixa = [{}];
                    $scope.titulo.listBaixa[0].dataBaixa = (new Date()).getTime();
                    $scope.titulo.listBaixa[0].observacao = "";
                    $scope.titulo.listBaixa[0].juros  = 0;
                    $scope.titulo.listBaixa[0].multa = 0;
                    $scope.titulo.listBaixa[0].desconto = 0;
                    fModels.amont($scope.titulo.listBaixa[0],"INSERT");
                }



                $scope.titulo.situacao = { id : 392}
                $scope.titulo.id = null;
                var oObject = fModels.amont(qat.model.fnFormaReceber($scope.titulo,"INSERT"),"INSERT");


                SysMgmtData.processPostPageData("main/api/request", {
                    url: "financeiro/api/contasReceber/insert",
                    token: $rootScope.authToken,
                    request: new qat.model.reqContasReceber(oObject, true, true)
                }, function(res) {

                  if(res.operationSuccess == true){
                    $element.modal('hide');
                    close(null, 500);
                    toastr.success('Deu Certo seu tanga.', 'Sucess');
                    $rootScope.reloadDataCR(function(data){debugger})
                  }

                });
            };
        });
})();