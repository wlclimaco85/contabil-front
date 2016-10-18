(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.produto', []);

	commonAuth.factory('fProduto', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};

	factory.fnMontaObjeto = function(produto,tributacao,produtoEmpresa,action,url,callBack){

          //  produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,action,$rootScope.user.user),action);

debugger

            
            //================ Estoque ======================
            for (var x = 0;x<produtoEmpresa.estoqueList.length;x++){

                if((produtoEmpresa.estoqueList[x] !== undefined)&&(produtoEmpresa.estoqueList[x] !== null))
                {
                    if((produtoEmpresa.estoqueList[x].id !== undefined )&&(produtoEmpresa.estoqueList[x].id !== 0 ))
                    {
                        produtoEmpresa.estoqueList[x] = fModels.amont(qat.model.fnEstoque(produtoEmpresa.estoqueList[x],"UPDATE",$rootScope.user.user),"UPDATE");
                    }
                    else{
                        produtoEmpresa.estoqueList[x] = fModels.amont(qat.model.fnEstoque(produtoEmpresa.estoqueList[x],"INSERT",$rootScope.user.user),"INSERT");
                    }
                }
                else
                {
                    produtoEmpresa.estoqueList[x] = fModels.amont(qat.model.fnEstoque(produtoEmpresa.estoqueList[x],"INSERT",$rootScope.user.user),"INSERT");
                }
            }

            //-----------------------Preco -----------------------
            for (var x = 0;x<produtoEmpresa.precoList.length;x++){

                if((produtoEmpresa.precoList[x] !== undefined)&&(produtoEmpresa.precoList[x] !== null))
                {
                    if((produtoEmpresa.precoList[x].id !== undefined )&&(produtoEmpresa.precoList[x].id !== 0 ))
                    {
                        produtoEmpresa.precoList[x] = fModels.amont(qat.model.fnPrecoProd(produtoEmpresa.precoList[x],"UPDATE",$rootScope.user.user),"UPDATE");
                    }
                    else{
                        produtoEmpresa.precoList[x] = fModels.amont(qat.model.fnPrecoProd(produtoEmpresa.precoList[x],"INSERT",$rootScope.user.user),"INSERT");
                    }
                }
                else
                {
                    produtoEmpresa.precoList[x] = fModels.amont(qat.model.fnPrecoProd(produtoEmpresa.precoList[x],"INSERT",$rootScope.user.user),"INSERT");
                }
            }
            //--------------------------Custo
            for (var x = 0;x<produtoEmpresa.custoList.length;x++){

                if((produtoEmpresa.custoList[x] !== undefined)&&(produtoEmpresa.custoList[x] !== null))
                {
                    if((produtoEmpresa.custoList[x].id !== undefined )&&(produtoEmpresa.custoList[x].id !== 0 ))
                    {
                        produtoEmpresa.custoList[x] = fModels.amont(qat.model.fnCusto(produtoEmpresa.custoList[x],"UPDATE",$rootScope.user.user),"UPDATE");
                    }
                    else{
                        produtoEmpresa.custoList[x] = fModels.amont(qat.model.fnCusto(produtoEmpresa.custoList[x],"INSERT",$rootScope.user.user),"INSERT");
                    }
                }
                else
                {
                    produtoEmpresa.custoList[x] = fModels.amont(qat.model.fnCusto(produtoEmpresa.custoList[x],"INSERT",$rootScope.user.user),"INSERT");
                }
            }
            if((produto !== undefined)&&(produto !== null))
              {
                  if((produto.id !== undefined )&&(produto.id !== 0 ))
                  {
                      produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,"UPDATE",$rootScope.user.user),"UPDATE");
                  }
                  else{
                      produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,"INSERT",$rootScope.user.user),"INSERT");
                  }
              }
              else
              {
                  produtoEmpresa.prodId = fModels.amont(qat.model.fnProduto(produto,action,$rootScope.user.user),action);
              }

           //------------------- ICMS ---------------------------//
              if((tributacao.icms !== undefined)&&(tributacao.icms !== null))
              {
                  if((tributacao.icms.id !== undefined )&&(tributacao.icms.id !== 0 ))
                  {
                      tributacao.icms = fModels.amont(qat.model.fnICMS(tributacao.icms,"UPDATE",null),"UPDATE");
                  }
                  else{
                      tributacao.icms = fModels.amont(qat.model.fnICMS(tributacao.icms,"INSERT",null),"INSERT");
                  }
              }
              else
              {
                  tributacao.icms = fModels.amont(qat.model.fnICMS(tributacao.icms,"INSERT",null),"INSERT");
              }

              //------------------- PIS ---------------------------//
              if((tributacao.pis !== undefined)&&(tributacao.pis !== null))
              {
                  if((tributacao.pis.id !== undefined )&&(tributacao.pis.id !== 0 ))
                  {
                      tributacao.pis = fModels.amont(qat.model.fnPIS(tributacao.pis,"UPDATE",null),"UPDATE");
                  }
                  else{
                      tributacao.pis = fModels.amont(qat.model.fnPIS(tributacao.pis,"INSERT",null),"INSERT");
                  }
              }
              else
              {
                  tributacao.pis = fModels.amont(qat.model.fnPIS(tributacao.pis,"INSERT",null),"INSERT");
              }

              //------------------- ICMS ---------------------------//
              if((tributacao.cofins !== undefined)&&(tributacao.cofins !== null))
              {
                  if((tributacao.cofins.id !== undefined )&&(tributacao.cofins.id !== 0 ))
                  {
                      tributacao.cofins = fModels.amont(qat.model.fnCOFINS(tributacao.cofins,"UPDATE",null),"UPDATE");
                  }
                  else{
                      tributacao.cofins = fModels.amont(qat.model.fnCOFINS(tributacao.cofins,"INSERT",null),"INSERT");
                  }
              }
              else
              {
                  tributacao.cofins = fModels.amont(qat.model.fnCOFINS(tributacao.cofins,"INSERT",null),"INSERT");
              }

              //------------------- ICMS ---------------------------//
              if((tributacao.ipi !== undefined)&&(tributacao.ipi !== null))
              {
                  if((tributacao.ipi.id !== undefined )&&(tributacao.ipi.id !== 0 ))
                  {
                      tributacao.ipi = fModels.amont(qat.model.fnIPI(tributacao.ipi,"UPDATE",null),"UPDATE");
                  }
                  else{
                      tributacao.ipi = fModels.amont(qat.model.fnIPI(tributacao.ipi,"INSERT",null),"INSERT");
                  }
              }
              else
              {
                  tributacao.ipi = fModels.amont(qat.model.fnIPI(tributacao.ipi,"INSERT",null),"INSERT");
              }

              if((tributacao !== undefined)&&(tributacao !== null))
              {
                  if((tributacao.id !== undefined )&&(tributacao.id !== 0 ))
                  {
                       produtoEmpresa.tributacao = fModels.amont(qat.model.fnTributacao(tributacao,"UPDATE",$rootScope.user.user),"UPDATE");
                  }
                  else{
                       produtoEmpresa.tributacao = fModels.amont(qat.model.fnTributacao(tributacao,"INSERT",$rootScope.user.user),"INSERT");
                  }
              }
              else
              {
                   produtoEmpresa.tributacao = fModels.amont(qat.model.fnTributacao(tributacao,"INSERT",$rootScope.user.user),"INSERT");
              }


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


