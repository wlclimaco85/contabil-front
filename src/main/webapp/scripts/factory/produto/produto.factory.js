(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.produto', []);

	commonAuth.factory('fProduto', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(produto,tributacao,produtoEmpresa,action,url,callBack){

            produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,action,$rootScope.user.user),action);

            produtoEmpresa.tributacao = fModels.amont(qat.model.fnTributacao(tributacao,action,$rootScope.user.user),action);


            var oObject = fModels.amont(produtoEmpresa,action);

                SysMgmtData.processPostPageData("main/api/request", {
                    url: url,
                    token: $rootScope.authToken,
                    request: new qat.model.reqProduto(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
        }

	factory.fnDelete = function() {
			//..
		}

	factory.fnOpenView = function() {
			//..
		}

    factory.fnSelectProduto = function() {
        
        var callbackProduto = function(res){
                var planos = "";

               if(res.operationSuccess == true)
               {

                   for(var x = 0 ;x < res.produtoParentList.length;x++)
                   {
                       planos = planos + "<option value='"+res.produtoParentList[x].id+"'> "+ res.produtoParentList[x].prodId.ncm + " " + res.produtoParentList[x].prodId.produto +" </option>";
                   }

                    $('.produto').empty();
                    $('.produto').append(planos);

                    $(".selectProduto").select2({
                          placeholder: "Selecione o ESTADO",
                          allowClear: true
                        });


               }

            }

qat.model.select.util("produto/api/produtoParent/fetchPage",true,new  qat.model.PagedInquiryRequest(10),callbackProduto);
    }

	return factory;
	}]);
})();


