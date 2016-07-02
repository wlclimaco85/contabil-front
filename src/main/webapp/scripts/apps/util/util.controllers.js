
(function() {
angular.module('wdApp.apps.util', ['angularModalService'])
    .controller('UtilController', utilControllers);

function utilControllers($scope,ModalService) {
    

    var vm = this;


    ModalService.showModal({
        templateUrl: 'dashboardDialog.html',
        controller: "RowSelectCtrl"
    }).then(function(modal) {

        modal.element.modal();
        modal.close.then(function(result) {
            $scope.message = "You said " + result;
        });
    });

}
})();