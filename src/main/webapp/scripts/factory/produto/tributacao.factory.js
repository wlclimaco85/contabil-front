(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.tributacao', []);

	commonAuth.factory('fTributacao', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(tributacao,action,url,callBack){
      var oObject = fModels.amont(produtoEmpresa,action);


      if(imposto.icms.sitTributaria.value == "00")
      {

      }
      else if(imposto.icms.sitTributaria.value == "10")
      {

      }
      else if(imposto.icms.sitTributaria.value == "20")
      {

      }
      else if(imposto.icms.sitTributaria.value == "30")
      {

      }
      else if(imposto.icms.sitTributaria.value == "40")
      {

      }
      else if(imposto.icms.sitTributaria.value == "50")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
       }
      else if(imposto.icms.sitTributaria.value == "")
      {
      }
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


	return factory;
	}]);
})();


