(function() {
'use strict';
  var commonAuth = angular.module('wdApp.ajaxCall.table.create', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);

    commonAuth.factory('TableCreate', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log','$compile','Datatablessss','tableOptionsFactory','tableColumnsFactory','FiltersFactory'
      ,function($rootScope,DTOptionsBuilder, DTColumnBuilder, $log,$compile,Datatablessss,tableOptionsFactory,tableColumnsFactory,FiltersFactory){
     var rowCallback = '';
  var _vm = {};
  // var _scope = {};
  return {
     getCliente: function(vm,scope){

        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};

       function rCallback(nRow, aData) {
            // console.log('row');
        }

        function recompile(row, data, dataIndex) {
            $compile(angular.element(row).contents())(scope);
        }
        

        var createdRow = function (row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())(scope);
        }

       var fnDataSRC = function(json) {
            console.log(json)
            json['recordsTotal'] = json.clienteList.length
            json['recordsFiltered'] = json.clienteList.length
            json['draw'] = 1
            console.log(json)
            return json.clienteList;
        }

       var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
            'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

       var actionsHtml = function (data, type, full, meta) {

            return '<button class="btn btn-info" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="glyphicon glyphicon-save"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }

        function edit(person) {
            $rootScope.cliente = person;
            dialogFactory.dialog('views/cadastros/dialog/dCliente.html',"ClienteUpdateController",openDialogUpdateCreate);
        }

        function deleteRow(person) {
           $rootScope.cliente = person; 
           dialogFactory.dialog('views/cadastros/dialog/dCliente.html',"ClienteDeleteController",openDialogUpdateCreate);
        } 

       

            return Datatablessss.getTable('/pessoa/api/cliente/fetchPage', fnDataSRC, new qat.model.empresaInquiryRequest(0, true, null, null, null), this, rCallback, null, recompile, tableOptionsFactory.cliente(vm,createdRow,scope,FiltersFactory.cliente()), tableColumnsFactory.cliente(vm,titleHtml,actionsHtml));
          
          //return vm;
      }
  };
  }]);
  })();