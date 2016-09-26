(function() {
    'use strict';

    var commonAuth = angular.module('dCnae', []);

    commonAuth.directive('dCnae', dCnae);

    function dCnae($window) {
debugger
        var directive = {
            restrict: "E",
            templateUrl: "views/fiscal/apps/cnae.html",
            //require: 'ngModel',
            controller: dCnaeController,
            scope: {
                confirmAction: '=',
                model: '=',
                propertyName: '='
            },
            link: fnLink
        };


        return directive;
    }

    dCnaeController.$inject = ['$scope', '$timeout'];

    function dCnaeController($scope, $timeout) {

        $scope.forms = [{id : 0,
               typeValue : 0,
               ddd : 'form1',
               numero : "",
               telefoneTypeEnumValue : 0,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()}];
        $scope.count = 0;

        $scope.createForm = function(type){
            $scope.forms.push({id : 0,
               typeValue : 0,
               ddd : 'form1' + ($scope.forms.length + 1),
               numero : "",
               telefoneTypeEnum : type,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : "INSERT",
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()});
        };

        $scope.deleteForm = function(formScope){
debugger
            delete $scope.forms(formScope);
        }


        var callbackBanco = function(res){
                var planos = "";
debugger
               if(res.operationSuccess == true)
               {

                   $scope.produtos = res.produtoParentList;

                   $(".produto").select2({
                      placeholder: "Selecione o BANCO",
                      allowClear: true
                    });
               }

            }

            qat.model.select.util("fiscal/api/cnae/fetchPage",true,new qat.model.planoInquiryRequest( 100/20, true, JSON.parse(localStorage.getItem("empresa")).id),callbackBanco);

    }

}).call(this);