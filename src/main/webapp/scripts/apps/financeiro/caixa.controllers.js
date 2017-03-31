(function() {
    angular.module('wdApp.apps.caixa', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('CaixaController', CaixaController).filter("myfilter", function() {
          return function(items, from, to) {
                var df = parseDate(from);
                var dt = parseDate(to);
                var result = [];
                for (var i=0; i<items.length; i++){
                    var tf = new Date(items[i].date1 * 1000),
                        tt = new Date(items[i].date2 * 1000);
                    if (tf > df && tt < dt)  {
                        result.push(items[i]);
                    }
                }
                return result;
          };
        });

function CaixaController($q,$http,$scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
    var vm = this;
        vm.selected = {};
        vm.dtInstance = {};
        vm.persons = {};
        vm.selectAll = false;
        vm.button='Novo'
        vm.fnDelete  = fnDelete;
        vm.fnEdit    = fnEdit;


        function parseDate(input) {
          var parts = input.split('-');
          return new Date(parts[2], parts[1]-1, parts[0]);
        }


        function reloadData() {
            var resetPaging = false;
            vm.dtInstance.reloadData(callback, resetPaging);
        }

        function callback(json) {
            console.log(json);
        }

       var reloadData = function() {

            var resetPaging = false;
            vm.dtInstance.reloadData(callback, resetPaging);
        }

        $rootScope.reloadDataSit = function(_callback) {

            var resetPaging = false;
            vm.dtInstance.reloadData(_callback, resetPaging);
        }

        function fnEdit(person) {

             $rootScope.doisValor = person;

            dialogFactory.dialog('views/financeiro/dialog/dCaixa.html',"CaixaUpdateController",validationFactory.contasPagar(),reloadData());
        }

        function fnDelete(person) {
           $rootScope.doisValor = person;
           dialogFactory.dialog('views/util/dialog/dDelete.html',"CaixaDeleteController",validationFactory.contasPagar(),reloadData());
        }

    var url = '/entidade/api/doisValores/fetchPage';// 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage'; qat.model.doisValoresInquiryRequest = function (_page, _iStartPage, _bCount,_emprId,_doisValorType)
    var request =  new qat.model.doisValoresInquiryRequest(101,0,true,null,106);//new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)
    //===================================


    //========================================


    vm.personsss = {};//$resource($rootScope.getTableData());


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
        json['recordsTotal'] = json.doisValoresList.length
        json['recordsFiltered'] = json.doisValoresList.length
        json['draw'] = 1

        return json.doisValoresList;
    }




    Datatablessss.getTable(url, fnDataSRC, request, this, rCallback, null, recompile, tableOptionsFactory.doisValores(vm,createdRow,$scope,FiltersFactory.doisValores(),reloadData) , tableColumnsFactory.doisValores(vm,"",actionsHtml));

}
})();
