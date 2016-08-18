
(function() {
angular.module('wdApp.apps.util', ['angularModalService'])
    .controller('UtilController', utilControllers);

function utilControllers($scope,ModalService,SysMgmtData) {
    
    $scope.empresaType  = 0 
    var vm = this;
/*


    ModalService.showModal({
        templateUrl: 'dashboardDialog.html',
        controller: "NavController"
    }).then(function(modal) {

        modal.element.modal();
        modal.close.then(function(result) {
            $scope.message = "You said " + result;
        });
    });
*/

    vm.buscaRCep = function(cepValue) {
debugger
        var formatedCep;
            //formatedCep = cepValue.replace(/\D/g, '');
            var formatedCep = cepValue.replace(/\D/g, '');
            var viaCepUrl = "main/api/buscaCep" + formatedCep + "/json/";
        SysMgmtData.processPostPageData("main/api/anonimo",{
            url: viaCepUrl,
            function(res){
                debugger
                var raw;
                //debugger
                raw = res.data;
                console.log(raw)
                $scope.enderecos[0].cep = raw.cep;
                $scope.enderecos[0].bairro = raw.bairro;
                $scope.enderecos[0].complemento = raw.complemento;
                $scope.enderecos[0].codIbge = raw.ibge;
                $scope.enderecos[0].cidade.nome = raw.localidade;
                $scope.enderecos[0].logradouro = raw.logradouro;
                $scope.enderecos[0].estado.abreviacao = raw.uf;

            }

        });

    }

}
})();