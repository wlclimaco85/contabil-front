(function() {
    angular.module('wdApp.apps.contasPagar.view2', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AngularWayChangeDataCtrl', AngularWayChangeDataCtrl);

function AngularWayChangeDataCtrl($q,$http,$scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData, TableCreate,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory,validationFactory,$filter,dialogFactory) {
    var vm = this;
        vm.selected = {};
        vm.dtInstance = {};
        vm.persons = {};
        vm.selectAll = false;

    var url = '/entidade/api/doisValores/fetchPage';// 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage'; qat.model.doisValoresInquiryRequest = function (_page, _iStartPage, _bCount,_emprId,_doisValorType)
    var request =  new qat.model.doisValoresInquiryRequest(101,0,true,null,106);//new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)
    //===================================


    //========================================


    vm.personsss = {};//$resource($rootScope.getTableData());


    function actionsHtml(data, type, full, meta) {
        debugger
        vm.persons[data.id] = data;

        return ' <div class="dropdown" >'+
          '<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+
           ' Açoes'+
            '<span class="caret"></span>'+
          '</button>'+
          '<ul class="dropdown-menu" style="height:120px" aria-labelledby="dropdownMenu1">'+
            '<li><a href="javaScript:;" ng-click="showCase.fnDelete(showCase.persons[' + data.id + '])"><span class="fa fa-trash"></span> Deletar</a></li>'+
            '<li><a href="javaScript:;" ng-click="showCase.fnEdit(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-edit"></span> Alterar</a></li>'+
            '<li><a href="javaScript:;" ng-click="showCase.fnRecibo(showCase.persons[' + data.id + '])"><span class="glyphicon glyphicon-print"></span> Emitir Recibo</a></li>'+
            '<li><a href="javaScript:;" ng-click="showCase.fnBaixar(showCase.persons[' + data.id + '])"><span class="fa fa-usd">                </span> Pagar</a></li>'+
          '</ul>'+
        '</div>'
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
    var fnDataSRC = function(json) {debugger
        console.log(json)
        json['recordsTotal'] = json.doisValoresList.length
        json['recordsFiltered'] = json.doisValoresList.length
        json['draw'] = 1

        return json.doisValoresList;
    }

    Datatablessss.getTable(url, fnDataSRC, request, this, rCallback, null, recompile, tableOptionsFactory.doisValores(vm,createdRow,$scope,FiltersFactory.doisValores()) , tableColumnsFactory.doisValores(vm,"",actionsHtml));

    function _buildPerson2Add(id) {
        return {
            id: id,
            descricao: 'Foo' + id,
            createUser: 'Bar' + id
        };
    }
    function addPerson() {
        vm.persons.push(angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function modifyPerson(index) {
        debugger
        vm.persons.splice(index, 1, angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function removePerson(index) {
        debugger
        vm.persons.splice(index, 1);
    }
}
})();