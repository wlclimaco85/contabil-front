(function() {
'use strict';
  var commonAuth = angular.module('wdApp.ajaxCall', ['datatables','angularModalService', 'datatables.buttons', 'datatables.light-columnfilter']);

    commonAuth.factory('Datatablessss', ['$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log','$compile',function($rootScope,DTOptionsBuilder, DTColumnBuilder, $log,$compile){
     var rowCallback = '';
  var _vm = {};
  // var _scope = {};
  return {

      getTable: function(url,dataSrc,request, vm, rCallback, cCallback, recompile,oOption,oColluns){

          var  serverData = function(sSource, aoData, fnCallback, oSettings) {
debugger
            //All the parameters you need is in the aoData variable
            var draw = aoData[0].value;
            var order = aoData[2].value;
            var start = aoData[3].value;
            var length = aoData[4].value;

            //Then just call your service to get the records from server side
            filterService.execute(start, length, order).then(function(result){

                var records = {
                        'draw': draw,
                        'recordsTotal': result.total,
                        'recordsFiltered': result.filtered,
                        'data': result.records  
                    };
                fnCallback(records);
            });
        }
        var _this = this;
        console.log(recompile);
        vm.dtOptions = oOption;
        vm.dtColumns = oColluns;
        // _vm = vm;
        // debugger;
        // _scope = scope;
        vm.dtOptions.withFnServerData(serverData);
         vm.dtOptions.withOption('ajax', {
                dataSrc: dataSrc,
                "contentType": "application/json; charset=utf-8",
                "dataType": "json",
                "url": "main/api/request",
                "type": "POST",
                "data": function(d) {
                  debugger
                    //   console.log("data");
                    //    d.search = $scope.searchData || {}; //search criteria
                    var dir = d.order[0].dir;
                    if(dir == "asc")
                    {
                        dir = "Ascending"
                    }
                    else
                    {
                        dir = "Descending"
                    }
                    request.pageSize = d.length;
                    request.startPage = d.start;
                    request.columnName1 = (d.order[0].column + 1);
                    request.direction1 = dir;

                    return JSON.stringify({
                        "url": url,
                        "token": $rootScope.authToken,
                        "request": request
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