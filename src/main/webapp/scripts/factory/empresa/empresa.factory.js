(function() {
'use strict';
	var commonAuth = angular.module('wdApp.ajaxCall.empresa', []);

	commonAuth.factory('fEmpresa', ['$rootScope','fModels','SysMgmtData','toastr' ,function($rootScope,fModels,SysMgmtData,toastr){
		var factory = {};

	factory.fnMontaObjeto = function(empresa,enderecos,emails,telefones,cnaes,usuario,action,fnCallBack){

            var initLoad = true; //used to ensure not calling server multiple times
            var user = "system";
            if(($rootScope.user != null)&&($rootScope.user !=undefined))
            {
                user = $rootScope.user.user;
            }
             // socios
           var count = 0;
           var bb = [];
            $('.socios').each(function() {
                if($(this).find('.nome-socio').val() !="")
                {
                    var a = 0
                    if($(this).find('.check-socio').is(":checked"))
                    {
                        a = 1
                    }
                    //cota,_por,_adm,_nome,_cpf,id,type,modelAction
                    bb.push(qat.model.fnSocios("",$(this).find('.cota-socio').val(),a,$(this).find('.nome-socio').val(),$(this).find('.cpf-socio').val(),"","",action));
                    count = count + 1;
                }
            });
            empresa.socios = bb;
      // empresa.socios = []

            //plano
            count = 0;
          var  fValor = 0;
            bb = [];
           var  oServicoAndPlano = [];
           var  oPlanoByEmpresa  = {
                numContrato : 0,
                valor        : 0,
                dataInicio     : (new Date()).getTime(),
                dataFim        : null,
                planoServicoList : null,
            }
            $('.planos').each(function()
            {

                if($(this).find('.plano').is(":checked") == true)
                {   //_id,_Valor,_planoServicoId,_type,_modelAction
                    oServicoAndPlano.push({
                        servicoPlanoEnum  : 1,
                        servicoList       : null,
                        planoList         : {id : parseInt($(this).find('.plano-id').text())},
                        valor             : parseFloat($(this).find('.valor').text()).toFixed(2),
                        modelAction       : action,
                        tableEnumValue : 53,
                        createUser     : "System",
                        createDateUTC  : (new Date()).getTime(),
                        modifyUser     : "System",
                        modifyDateUTC  : (new Date()).getTime()
                    })
                    fValor = fValor + parseFloat($(this).find('.valor').text()).toFixed(2);
                  //  bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });
            $('.planos').each(function()
            {
                if($(this).find('.Servico').is(":checked") == true)
                {
                    oServicoAndPlano.push({
                        servicoPlanoEnum  : 2,
                        servicoList       : {id : parseInt($(this).find('.plano-id').text(),10)},
                        planoList         : null,
                        valor             : parseFloat($(this).find('.valor').text()).toFixed(2),
                        modelAction       : action,
                        tableEnumValue : 53,
                        createUser     : "System",
                        createDateUTC  : (new Date()).getTime(),
                        modifyUser     : "System",
                        modifyDateUTC  : (new Date()).getTime()
                    })

                    //bb.push(qat.model.fnServicoAndPlano(parseFloat(parseFloat($(this).find('.valor').text()).toFixed(2)),$(this).find('.plano-id').text(),$(this).find('.plano-type').text()));
                    count = count + 1;
                }
            });//(_Valor,_planoServicoId,_type,_modelAction)
debugger
            oPlanoByEmpresa.planoServicoList = oServicoAndPlano ;
            oPlanoByEmpresa.valor = parseFloat(parseFloat($('#total-plano').text()).toFixed(2));
            empresa.planosServicos = qat.model.fnServicoAndPlano(oPlanoByEmpresa,action);
           // empresa.planosServicos = {}


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
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"UPDATE",user),"UPDATE"));
                }
                else
                {
                    documentos.push(fModels.amont(qat.model.fnDocumento(empresa.documentos[x],"INSERT",user),"INSERT"));
                }

            }

         }
         empresa.documentos =[];
         empresa.documentos = documentos;

         //=================== ENDERECO
         empresa.enderecos =[];
         empresa.enderecos.push(fModels.amont(qat.model.fnEndereco(enderecos[0],action,user),action));

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


         //==================cnae==================================
         var cnaesAux = [];
         for(var x=0;x < cnaes.length;x++)
         {
            if(cnaes[x].cnae == undefined || cnaes[x].cnae == undefined )
            {

                if((cnaes[x].cnae.id != null)&&(cnaes[x].cnae.id != undefined))
                {
                    cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae,"DELETE"),"DELETE"));
                }
                delete cnaes[x].cnae
            }
            else
            {
                if((cnaes[x].cnae.id != null)&&(cnaes[x].cnae.id != undefined))
                {
                    cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae,"UPDATE"),"UPDATE"));
                }
                else
                {
                    cnaesAux.push(fModels.amont(qat.model.fnCnaeEmpresa(cnaes[x].cnae,"INSERT"),"INSERT"));
                }

            }

         }

         empresa.cnaes =[];
         empresa.cnaes = cnaesAux;

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


        var oObject = fModels.amont(empresa,"INSERT");
        var oUsuario = fModels.amont(qat.model.fnUsuario(usuario,"INSERT","system"),"INSERT");
        oObject.usuarios = [];
        oObject.usuarios.push(oUsuario);
        debugger
        SysMgmtData.processPostPageData("main/api/anonimo",{
                url: "entidade/api/empresa"+   WebDaptiveAppConfig.create_url,
                request: new qat.model.reqEmpr(oObject ,true, true)}, function(res){

           if(res.operationSuccess == true)
           {
                initLoad = true;
                toastr.success('Deu Certo seu tanga.', 'Sucess');
                fnCallBack(res);
                //$location.path("#/pages/signin");

           }
           else
           {
               toastr.error('County form error, please correct and resubmit.', 'Error');
           }

        });
        }

	factory.method1 = function() {
			//..

		}

	factory.method2 = function() {
			//..
		}

	return factory;
	}]);
})();