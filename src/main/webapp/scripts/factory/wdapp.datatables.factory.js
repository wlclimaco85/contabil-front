(function() {
'use strict';
  var commonAuth = angular.module('wdApp.ajaxCall', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);

    commonAuth.factory('Datatablessss', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log','$compile',function($rootScope,DTOptionsBuilder, DTColumnBuilder, $log,$compile){
     var rowCallback = '';
  var _vm = {};
  // var _scope = {};
  return {

      getTable: function(endpoint, vm, rCallback, cCallback, recompile,oOption,oColluns){

        var _this = this;
        console.log(recompile);
        vm.dtOptions = oOption;
        vm.dtColumns = oColluns;
        // _vm = vm;
        // debugger;
        // _scope = scope;
         vm.dtOptions.withOption('ajax', {
                dataSrc: function(json) {
                    console.log(json)
                    json['recordsTotal'] = json.sites.length
                    json['recordsFiltered'] = json.sites.length
                    json['draw'] = 1
                    console.log(json)
                    return json.sites;
                },
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    return JSON.stringify({
                        "url": "site/api/fetchPage",
                        "token": $rootScope.authToken,
                        "request": new qat.model.empresaInquiryRequest(0, true,null,null,null)
                    });
                }
            })
        vm.dtOptions.withOption('rowCallback', rCallback)
        vm.dtOptions.withOption('fnRowCallback', cCallback)
        rowCallback = rCallback;
        // debugger;
        // $interval(_this.reloadData(vm), 3000);

    //    $rootScope.$on('$translateChangeSuccess', function (event, lang) {
    //      vm.dtOptions.withLanguageSource('http://cdn.datatables.net/plug-ins/1.10.11/i18n/'+(lang.language == 'de' ? 'German' : 'English')+'.json');
    //      vm.dtColumns = _this.genererateColumnDef(endpoint);
    //    });
        return vm;
      },


    formatCell: function(data, type, full, meta) {
        console.log(full);
        return data;
    },

    rowCallback: function(nRow, aData){

    },

    reloadData: function(vm){
      var resetPaging = false;
      vm.dtInstance.reloadData(resetPaging);

      $rootScope.$on('$translateChangeSuccess', function (event, lang) {
        vm.dtOptions.withLanguageSource('http://cdn.datatables.net/plug-ins/1.10.11/i18n/'+(lang.language == 'de' ? 'German' : 'English')+'.json');
        vm.dtColumns = vm.dtColumns = Datatables.genererateColumnDef('getFlavorings');
      });
    }
  };
  }]);
  })();