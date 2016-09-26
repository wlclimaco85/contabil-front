(function() {
    angular.module('wdApp.apps.telefone', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('TelefoneControllers', telefoneController);

    function telefoneController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData) {
        var vm = this;



        $scope.createForm = function(type){

            $scope.forms.push({ nome : 'form1' + ($scope.forms.length + 1),telefone :{telefoneTypeEnum : type}});

        };

        $scope.fnTelefoneType = function(type){

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

        $scope.deleteForm = function(formScope){
debugger
            delete $scope.forms(formScope);
        }

        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
        };

    }
})();
