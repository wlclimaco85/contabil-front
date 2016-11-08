(function() {
    angular.module('wdApp.apps.endereco', ['datatables', 'angularModalService', 'datatables.buttons', 'datatables.light-columnfilter'])
        .controller('EnderecoControllers', enderecoController);

    function enderecoController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, ModalService, $rootScope, SysMgmtData,$http, $q) {
        var vm = this;

        //$scope.forms = [{nome : 'form1',endereco :{enderecoTypeEnum : 1}}];

        $scope.createForm = function(type){

            $scope.enderecos.push({ nome : 'form1' + ($scope.enderecos.length + 1),endereco :{enderecoTypeEnum : type}});

        };



       // qat.model.select.anonimo("cadastros/api/estado/fetchPage",true,new qat.model.estadoInquiryRequest( 100/20, true,null),callbackEstado);

        vm.buscaRCep = function(_cepValue){

             var cepValue = _cepValue;
             var formatedCep;
            //formatedCep = cepValue.replace(/\D/g, '');
         //   var formatedCep = cepValue.replace(/\D/g, '');

          //  SysMgmtData.processPostPageData("main/api/fetchCep",{
            //        request: {'cep': '38082243'}}, function(res){
            $.getJSON("//viacep.com.br/ws/"+_cepValue+"/json/?callback=?", function(res) {console.log(res)
              //  debugger
             //  if(res.operationSuccess == true)
            //   {
                  //  initLoad = true;
                  //  toastr.success('Deu Certo seu tanga.', 'Sucess');
                    //$scope.enderecos[0].cep = raw.cep;
                    $scope.enderecos[0].bairro = res.bairro;
                    $scope.enderecos[0].complemento = res.complemento;
                    $scope.enderecos[0].codIbge = res.ibge;
                    $scope.enderecos[0].cidade = {nome : res.localidade,estado :{abreviacao : res.uf  }};
                    $scope.enderecos[0].logradouro = res.logradouro;

            //   }
            //   else
             //  {
             //      toastr.error('County form error, please correct and resubmit.', 'Error');
             //  }

            });

/*
            var config = {headers: {
            'X-Cosmos-Token': 'T9pFIi3coAXpypnWF4miGw',
            'Content-Type': 'application/json',
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
             'Access-Control-Allow-Credentials': 'true',
             'Accept': 'application/json;odata=verbose'
            }}
            var cepValue = _cepValue;
            var formatedCep;
            //formatedCep = cepValue.replace(/\D/g, '');
            var formatedCep = cepValue.replace(/\D/g, '');
            var viaCepUrl = "https://viacep.com.br/ws/" + formatedCep + "/json/";
            $http.get(viaCepUrl,config).then(function(response) {
                var raw;
                debugger
                raw = response.data;
                console.log(raw)
                $scope.enderecos[0].cep = raw.cep;
                $scope.enderecos[0].bairro = raw.bairro;
                $scope.enderecos[0].complemento = raw.complemento;
                $scope.enderecos[0].codIbge = raw.ibge;
                $scope.enderecos[0].cidade.nome = raw.localidade;
                $scope.enderecos[0].logradouro = raw.logradouro;
                $scope.enderecos[0].estado.abreviacao = raw.uf;

            });*/
        }

        $scope.deleteForm = function(formScope){

            delete $scope.enderecos(formScope);
        }

        $scope.saveForm = function(formScope){
            alert("Save called for " + formScope.name + ", myInputValue = " + formScope.myInputValue);
        };

    }
})();
