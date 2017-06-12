 (function() {
     angular.module('wdApp.apps.produto', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
         .controller('ProdutoController', produtoController);

     function produtoController($q, $http, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate, Datatablessss, tableOptionsFactory, tableColumnsFactory, FiltersFactory, validationFactory, $filter, dialogFactory) {
         var vm = this;
         vm.selected = {};
         vm.dtInstanceProduto = {};
         vm.persons = {};
         vm.selectAll = false;
         vm.button = 'Novo'
         vm.fnDelete = fnDelete;
         vm.fnEdit = fnEdit;

         function parseDate(input) {
             var parts = input.split('-');
             return new Date(parts[2], parts[1] - 1, parts[0]);
         }

         function callback(json) {
             console.log(json);
         }

         var reloadData = function() {

             var resetPaging = false;
             vm.dtInstanceProduto.reloadData(callback, resetPaging);
         }

         $rootScope.reloadDataSit = function(_callback) {

             var resetPaging = false;
             vm.dtInstanceProduto.reloadData(_callback, resetPaging);
         }

         function fnEdit(person) {
             $rootScope.produto = person;

             dialogFactory.dialog('views/produto/dialog/dProduto.html', "ProdutoUpdateController", validationFactory.contasPagar(), reloadData());
         }

         function fnDelete(person) {
             $rootScope.produto = person;
             dialogFactory.dialog('views/util/dialog/dDelete.html', "ProdutoDeleteController", validationFactory.contasPagar(), reloadData());
         }

         function actionsHtml(data, type, full, meta) {
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
             json['recordsTotal'] = json.produtoParentList.length
             json['recordsFiltered'] = json.produtoParentList.length
             json['draw'] = 1

             return json.produtoParentList;
         }

         Datatablessss.getTable('/produto/api/produtoParent/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.produtoEmpresa(vm, createdRow, $scope, FiltersFactory.produtoEmpresa(), reloadData), tableColumnsFactory.produtoEmpresa(vm, "", actionsHtml));


     }
 })();
 (function() {
     angular.module('wdApp.apps.produto.insert', ['angucomplete', 'inputactions', 'ngSanitize', 'ui.select']).filter('propsFilter', function() {
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
     }).controller('ProdutoInsertController', function($rootScope, $scope, fModels, SysMgmtData, toastr, $element, close, fProduto, $templateCache, $http, $timeout, $interval,doisValorFactory) {
         var vm = this;


         $scope.produto = {};
         $scope.tributacao = {};
         $scope.produtoEmpresa = {
             precoList: []
         };
         $scope.details = 0;
         $scope.teste = 1;
         $scope.produtoEmpresa.dataCreate = (new Date()).getTime();
         $scope.produtoEmpresa.estoqueList = [{
                 estoqueTypeEnumValue: 1,
                 quant: 0,
                 ultimoMov: (new Date()).getTime()
             },
             {
                 estoqueTypeEnumValue: 4,
                 quant: 0,
                 ultimoMov: (new Date()).getTime()
             },
             {
                 estoqueTypeEnumValue: 3,
                 quant: 0,
                 ultimoMov: (new Date()).getTime()
             }
         ];

         doisValorFactory.produto($scope);
         console.log($scope)
         //
         $scope.tributacao = {}


         var callbackBanco = function(res) {
             var planos = "";

             if (res.operationSuccess == true) {

                 $scope.countries = res.produtoList;

             }
         }

         //  qat.model.select.anonimo("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);
         qat.model.select.util("produto/api/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, null), callbackBanco);

         vm.icmsST = [];
         vm.icmsOri = [];
         vm.icmsMBC = [];
         vm.icmsMD = [];

         $scope.icmsST = [];

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
         var fnCallBack = function(res) {
             if (res.operationSuccess == true) {
                 $element.modal('hide');
                 close(null, 500);
                 toastr.success('Deu Certo seu tanga.', 'Sucess');
                 $rootScope.reloadDataSit(function(data) {})
             }
         }
         $scope.selectedCountry = function(selected) {

             console.log(selected)
             if (selected) {

                 $scope.produto = selected.originalObject;
                 $scope.visibled = true;
             } else {
                 console.log('cleared');
             }
         };
         $scope.saveProduto = function() {
             fProduto.fnMontaObjeto($scope.produto, $scope.tributacao, $scope.produtoEmpresa, 'INSERT', "produto/api/produtoParent/insert/", fnCallBack);
         };
     });
 })();
 (function() {
     angular.module('wdApp.apps.produto.update', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
         .controller('ProdutoUpdateController', function($rootScope, $scope, fModels, SysMgmtData, fProduto, toastr, $element, close) {
             var vm = this;

             var callbackBanco = function(res) {
                 var planos = "";

                 if (res.operationSuccess == true) {

                     $scope.countries = res.produtoList;

                 }
             }

             qat.model.select.util("produto/api/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, null), callbackBanco);

             var fnCallBack = function(res) {
                 if (res.operationSuccess == true) {
                     $element.modal('hide');
                     close(null, 500);
                     toastr.success('Deu Certo seu tanga.', 'Sucess');
                     $rootScope.reloadDataSit(function(data) {})
                 }
             }

             $scope.produtoEmpresa = {};
             $scope.produtoEmpresa = $rootScope.produto;
             $scope.produto = $rootScope.produto.prodId;
             console.log($rootScope.produtoEmpresa)
             $scope.saveProduto = function() {
                 fProduto.fnMontaObjeto($scope.produto, $scope.produtoEmpresa.tributacao, $scope.produtoEmpresa, 'UPDATE', "produto/api/produtoParent/update/", fnCallBack);
             }
         });
 })();
 (function() {
     angular.module('wdApp.apps.produto.delete', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
         .controller('ProdutoDeleteController', function($rootScope, $scope, fModels, SysMgmtData, fProduto, toastr, $element, close) {
             var vm = this;
             var em = " "

             $scope.produtoEmpresa = {};
             $scope.produtoEmpresa = $rootScope.produto;
             $scope.produto = $rootScope.produto.prodId;
             $scope.deleteMessage = 'Deseja Realmente Deletar o produto #' + ($scope.produtoEmpresa.codigo ? $scope.produtoEmpresa.codigo : em) + ' ' + ($scope.produto.produto ? $scope.produto.produto : em) + '.';
             var sHtml = '<div class="container-fluid"><p> Deseja Realmente Deletar o produto #' + $scope.produto.codigo + ' ' + $scope.produto.produto + '.</p></div>'
             $('#delete').append(sHtml);
             $scope.delete = function() {
                 var oObject = fModels.amont(new qat.model.EmpresaProduto({ id: $scope.produtoEmpresa.id, prodId: $rootScope.produto.prodId.id }, 'DELETE', $rootScope.user.user), 'DELETE');
                 SysMgmtData.processPostPageData("main/api/request", {
                     url: "produto/api/produtoParent/delete",
                     token: $rootScope.authToken,
                     request: new qat.model.reqProduto(oObject, true, true)
                 }, function(res) {
                     if (res.operationSuccess == true) {
                         $element.modal('hide');
                         close(null, 500);
                         toastr.success('Deu Certo seu tanga.', 'Sucess');
                         $rootScope.reloadDataSit(function(data) {})
                     }

                 });
             }
         });
 })();
 (function() {
     angular.module('wdApp.apps.produto.view', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
         .controller('ProdutoViewController', function($rootScope, $scope, fModels, SysMgmtData, fProduto) {
             var vm = this;
             $scope.produto = {};
             $scope.produto = $rootScope.produto;
             console.log($rootScope.produto)
             $scope.saveProduto = function() {
                 fProduto.fnOpenView($scope.produto, "site/api/produto/update/", function() { console.log('aqui') });
             }
         });
 })();
 (function() {
     angular.module('wdApp.apps.produto.select', ['ngSanitize', 'ui.select'])
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
         }).controller('ProdutoSelectController', produtoSelectController);

     function produtoSelectController($scope, $http, $timeout, $interval, doisValorFactory) {
         var vm = this;


         $scope.forms = [{ nome: 'form1', cnae: { id: 0 } }];
         $scope.createForm = function(type) {

             $scope.forms.push({ nome: 'form1' + ($scope.forms.length + 1), cnae: { id: type } });

         };

         doisValorFactory.tributacao($scope);

         $scope.fnTelefoneType = function(type) {


             var typeEnum
             switch (new Date().getDay()) {
                 case "":
                     day = "Sunday";
                     break;
                 case "":
                     day = "Monday";
                     break;
                 case 2:
                     day = "Tuesday";
                     break;
                 case 3:
                     day = "Wednesday";
                     break;
                 case 4:
                     day = "Thursday";
                     break;
                 case 5:
                     day = "Friday";
                     break;
                 case 6:
                     day = "Saturday";
             }

         }

         $scope.deleteForm = function(formScope) {

             delete $scope.forms(formScope);
         }

         $scope.saveForm = function(formScope) {
             alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
         };


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
                 { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
                 { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
                 { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
                 { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
                 { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
                 { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
                 { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
                 { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
                 { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
                 { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
             ];
         }, 3000);

         vm.counter = 0;


         vm.onSelectCallback = function(item, model) {
             console.log(item);
         }


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
             '1': { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
             '2': { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
             '3': { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
             '4': { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
             '5': { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
             '6': { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
             '7': { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
             '8': { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
             '9': { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
             '10': { name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia' }
         };

         vm.person = {};

         vm.person.selectedValue = vm.peopleObj[3];
         vm.person.selectedSingle = 'Samantha';
         vm.person.selectedSingleKey = '5';
         // To run the demos with a preselected person object, uncomment the line below.
         //vm.person.selected = vm.person.selectedValue;

         vm.produto = [
             //    { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
             //    { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
             //    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
             //    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
             //   { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
             //   { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
             //   { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
             //    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
             //   { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
             //   { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
         ];

         var callbackBanco = function(res) {
             var planos = "";

             if (res.operationSuccess == true) {

                 vm.produto = res.produtoParentList;
                 console.log(res.produtoParentList);
             }
         }

         //qat.model.select.anonimo("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, null),callbackBanco);
         qat.model.select.util("produto/api/produtoParent/fetchPage", true, new qat.model.planoInquiryRequest(100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id), callbackBanco);
         vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

         vm.singleDemo = {};
         vm.singleDemo.color = '';
         vm.multipleDemo = {};
         vm.multipleDemo.colors = ['Blue', 'Red'];
         vm.multipleDemo.colors2 = ['Blue', 'Red'];
         vm.multipleDemo.selectedPeople = [vm.produto[5], vm.produto[4]];
         vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
         vm.multipleDemo.selectedPeopleWithGroupBy = [vm.produto[8], vm.produto[6]];
         vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
         vm.multipleDemo.removeSelectIsFalse = [vm.produto[2], vm.produto[0]];

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
                 vm.produto.push(item);
             }
         }

         vm.country = {};
         vm.countries = [ // Taken from https://gist.github.com/unceus/6501985

         ];

     }
 })();


 (function() {
     angular.module('wdApp.apps.produto.selects', ['ngSanitize', 'ui.select'])
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
         }).controller('ProdutoSelectControllers', produtoSelectControllers);

     function produtoSelectControllers($scope, $http, $timeout, $interval) {
         var vm = this;


         $scope.forms = [{ nome: 'form1', cnae: { id: 0 } }];
         $scope.createForm = function(type) {

             $scope.forms.push({ nome: 'form1' + ($scope.forms.length + 1), cnae: { id: type } });


         };

         $scope.fnTelefoneType = function(type) {

             var typeEnum
             switch (new Date().getDay()) {
                 case "":
                     day = "Sunday";
                     break;
                 case "":
                     day = "Monday";
                     break;
                 case 2:
                     day = "Tuesday";
                     break;
                 case 3:
                     day = "Wednesday";
                     break;
                 case 4:
                     day = "Thursday";
                     break;
                 case 5:
                     day = "Friday";
                     break;
                 case 6:
                     day = "Saturday";
             }

         }

         $scope.deleteForm = function(formScope) {

             delete $scope.forms(formScope);
         }

         $scope.saveForm = function(formScope) {
             alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
         };


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
                 { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
                 { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
                 { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
                 { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
                 { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
                 { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
                 { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
                 { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
                 { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
                 { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
             ];
         }, 3000);

         vm.counter = 0;


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
             '1': { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
             '2': { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
             '3': { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
             '4': { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
             '5': { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
             '6': { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
             '7': { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
             '8': { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
             '9': { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
             '10': { name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia' }
         };

         vm.person = {};

         vm.person.selectedValue = vm.peopleObj[3];
         vm.person.selectedSingle = 'Samantha';
         vm.person.selectedSingleKey = '5';
         // To run the demos with a preselected person object, uncomment the line below.
         //vm.person.selected = vm.person.selectedValue;

         vm.produto = [
             //    { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
             //    { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
             //    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
             //    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
             //   { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
             //   { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
             //   { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
             //    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
             //   { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
             //   { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
         ];
         vm.icmsST = [];
         vm.icmsOri = [];

         var fnCallbackDoisValor = function(res) {
             var planos = "";



             if (res.operationSuccess == true) {
                 for (var x = 0; x < res.doisValoresList.length; x++) {
                     planos = res.doisValoresList[x];
                     if (planos.doisValorType != null) {
                         switch (planos.doisValorType.tipo) {
                             case 'ICMS - SITUAÇÃO TRIBUTARIA':
                                 vm.icmsST.push(planos);
                                 break;
                             case 'ICMS - ORIGEM':
                                 vm.icmsOri.push(planos)
                                 break;
                         }
                     }
                 }


             }
         }

         qat.model.select.util("entidade/api/doisValores/fetchPage", true, new qat.model.doisValoresInquiryRequest(2, 100 / 20, true, JSON.parse(localStorage.getItem("empresa")).id), fnCallbackDoisValor);

         vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

         vm.singleDemo = {};
         vm.singleDemo.color = '';
         vm.multipleDemo = {};
         vm.multipleDemo.colors = ['Blue', 'Red'];
         vm.multipleDemo.colors2 = ['Blue', 'Red'];
         vm.multipleDemo.selectedPeople = [vm.produto[5], vm.produto[4]];
         vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
         vm.multipleDemo.selectedPeopleWithGroupBy = [vm.produto[8], vm.produto[6]];
         vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
         vm.multipleDemo.removeSelectIsFalse = [vm.produto[2], vm.produto[0]];

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
                 vm.produto.push(item);
             }
         }

         vm.country = {};
         vm.countries = [ // Taken from https://gist.github.com/unceus/6501985

         ];

     }
 })();