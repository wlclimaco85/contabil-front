(function() {
    angular.module('wdApp.apps.contasPagar.view2', ['datatables','ngResource', 'datatables.scroller', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('AngularWayChangeDataCtrl', AngularWayChangeDataCtrl);

function AngularWayChangeDataCtrl($q,$compile,$http,$rootScope,$scope,$resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;

    var url = 'financeiro/api/contasReceber/fetchPage'// '/entidade/api/doisValores/fetchPage';
    var request =  request = new qat.model.contasPagarInquiryRequest(null,null,null,null,0, true, null, null, null)//new qat.model.doisValoresInquiryRequest(null, 0, null,null,null) //new qat.model.doisValoresInquiryRequest(101, 0, null,null,106)
    //===================================




        $scope.open = function(id) {
        var reqId = id;
        var requestedData;
        var getData = function userDetails(){
            var defer = $q.defer();
                        $http({
                        method: 'POST',
                        url: 'main/api/request',
                        dataType: "json",
                        data: JSON.stringify({
                                "url": url,
                                "token": $rootScope.authToken,
                                "request": request}),
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        }
                    })
                    .then(function(data) {

                           defer.resolve(data.data.contasReceberList);
                    });

            return defer.promise;
        }
            getData().then(function(data){
                $rootScope.jsonData = data;
                $scope.state.submittedClick = false;
                $scope.state.submittedClickButton = true;
            });

    };
    var vm = this;
    $scope.$on('handleRequest', function(){
        $scope.request = requestService.request;
        $rootScope.requestValue = $scope.request;
        console.log($scope.request);
        $rootScope.getTableData();
    });

    $rootScope.getTableData = function serverData() {
        console.log($rootScope.requestValue);
        var req = $rootScope.requestValue;
        var defer = $q.defer();


        $http({
                        method: 'POST',
                        url: 'main/api/request',
                        dataType: "json",
                        data: JSON.stringify({
                                "url": url,
                                "token": $rootScope.authToken,
                                "request": request}),
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        }
                    })
                    .then(function(data) {

                        defer.resolve(data.data.contasReceberList);
                        console.log(data.data.contasReceberList);
                        vm.personss = data.data.contasReceberList
                        return data.data.contasReceberList;
                    });




    }

    //========================================


    vm.personsss = $resource($rootScope.getTableData());
    debugger
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];
    vm.person2Add = _buildPerson2Add(1);
    vm.addPerson = addPerson;
    vm.modifyPerson = modifyPerson;
    vm.removePerson = removePerson;

    function _buildPerson2Add(id) {
        return {
            id: id,
            firstName: 'Foo' + id,
            lastName: 'Bar' + id
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