(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.pessoa', []);

	commonAuth.factory('fPessoa', ['$rootScope','fModels','SysMgmtData' ,function($rootScope,fModels,SysMgmtData){
		var factory = {};
//fPessoa.fnMontaObjeto($scope.empresa, $scope.enderecos,scope.emails,scope.telefones, 'INSERT', "pessoa/api/cliente/insert", fnCallBack);
	factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,action,url,callBack){

            debugger
         //===============Documentos====================
         var documentos = [];
         for(var x=0;x < empresa.documentos.length;x++)
         {
            if(empresa.documentos[x].numero == undefined || empresa.documentos[x].numero == undefined )
            {
                delete empresa.documentos[x]
            }
            else
            {
                if((empresa.documentos[x].id != null)&&(empresa.documentos[x].id != undefined))
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"UPDATE",$rootScope.user.user),"UPDATE"));
                }
                else
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"INSERT",$rootScope.user.user),"INSERT"));
                }
                
            }

         }
         empresa.documentos =[];
         empresa.documentos = documentos;

         //=================== ENDERECO
         empresa.enderecos =[];
         empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
        
         //==================Telefone==================================
         var telefonesAux = [];
         for(var x=0;x < telefones.length;x++)
         {
            if(telefones[x].telefone == undefined || telefones[x].telefone == undefined )
            {
                
                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"DELETE"),"DELETE"));
                }
                delete telefones[x].telefone
            }
            else
            {
                if((telefones[x].telefone.id != null)&&(telefones[x].telefone.id != undefined))
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"UPDATE"),"UPDATE"));
                }
                else
                {
                    telefonesAux.push(fModels.amont(qat.model.fnTelefones(telefones[x].telefone,"INSERT"),"INSERT"));
                }
                
            }

         }
         empresa.telefones =[];
         empresa.telefones = telefonesAux;

         //==================EMAIL==================================
         var emailsAux = [];
         var email = {};
         for(var x=0;x < emails.length;x++)
         {
            email = emails[x].email;

            if(email == undefined || email == undefined )
            {
                
                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"DELETE"),"DELETE"));
                }
                delete emails[x].email;
            }
            else
            {
                if((email.id != null)&&(email.id != undefined))
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"UPDATE"),"UPDATE"));
                }
                else
                {
                    emailsAux.push(fModels.amont(qat.model.fnEmails(email,"INSERT"),"INSERT"));
                }
                
            }

         }
         empresa.emails =[];
         empresa.emails = emailsAux;


            var oObject = fModels.amont(empresa,action);

                SysMgmtData.processPostPageData("main/api/request", {
                    url: url,
                    token: $rootScope.authToken,
                    request: new qat.model.reqCliente(oObject, true, true)
                }, function(res) {
                    callBack(res);
                });
        }

	factory.fnDelete = function() {
			//..
		}

    factory.fnTableCliente = function() {
            //..
        }

	factory.fnOpenView = function() {
			//..
		}

    factory.fnMontObject = function(_object,enderecos,action) {
            _object.enderecos =[];
            _object.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,$rootScope.user.user),action));
            var count = 0;
            var bb = [];

            $('.gugu').each(function() {
                if($(this).val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnTelefones($(this).val(),null,1,action),action));
                    count = count + 1;
                }
            });
            _object.telefones = bb;

            // email
            count = 0;
            bb = [];
            $('.emails:visible').each(function() {
                if($(this).find('.input-email').val() != "")
                {
                    bb.push(fModels.amont(qat.model.fnEmails($(this).find('.input-email').val(),$(this).find('.input-id').val(),1,action),action));
                    count = count + 1;
                }
            });

            _object.emails = bb;

            return _object;
        }

	return factory;
	}]);
})();


