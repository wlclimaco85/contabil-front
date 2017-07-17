(function() {
    angular.module('wdApp.apps.email', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('EmailControllers', emailController);

    function emailController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData) {
        var vm = this;

        //$scope.forms = [{nome : 'form1',email :{emailTypeEnum : 1}}];

        $scope.createForm = function(type){

            $scope.emails.push({ nome : 'form1' + ($scope.emails.length + 1),email :{emailTypeEnum : type}});

        };

        $scope.fnEmailType = function(type){

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
//debugger
            delete $scope.emails(formScope);
        }

        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
        };

    }
})();
