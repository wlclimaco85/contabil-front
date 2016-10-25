  /**
   * Initialize the main namespaces and constants.
   */

  var qat = {
    model   : {
               select: {},
               dialog: {}
          },
    base  : {
      model : {}
    }
  };


  //County Object
  qat.model.county = function(_countyId, _countyDesc)
  {
    this.id = _countyId;
    this.cfop = _countyDesc;
  };

  //Procedure Object
  qat.model.procedure = function(_procId, _procCode, _procDesc, _procPrice, _version)
  {
    this.id = _procId;
    this.code = _procCode;
    this.description = _procDesc;
    this.price = _procPrice;
    this.version = _version;
  };

  /** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Servico Object
qat.model.Servico = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.descricao = _oObjet.descricao;
     this.preco = _oObjet.preco;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//ServicoByPlano Object
qat.model.ServicoByPlano = function(_oObjet)
{
     this.id = _oObjet.id;
     this.parentId = _oObjet.parentId;
     this.servico = _oObjet.servico;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Site Object
qat.model.Site = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.url = _oObjet.url;
     this.quemSomos = _oObjet.quemSomos;
     this.missao = _oObjet.missao;
     this.visao = _oObjet.visao;
     this.titulo = _oObjet.titulo;
     this.logo = _oObjet.logo;
     this.atorization = _oObjet.atorization;
     this.siteTypeEnum = _oObjet.siteTypeEnum;
     this.servicoList = _oObjet.servicoList;
     this.planoList = _oObjet.planoList;
     this.parentId       = _oObjet.parentId;
     this.empresa         = _oObjet.empresa;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//'sysrem';//'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Contato Object
qat.model.Contato = function(_oObjet)
{
     this.id = _oObjet.id;
     this.parentId = _oObjet.parentId;
     this.dataContato = _oObjet.dataContato;
     this.nome = _oObjet.nome;
     this.motivoValue = _oObjet.motivoValue;
     this.contatoItensList = _oObjet.contatoItensList;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//ContatoItens Object
qat.model.ContatoItens = function(_oObjet)
{
     this.id = _oObjet.id;
     this.dataAlt = _oObjet.dataAlt;
     this.texto = _oObjet.texto;
     this.titulo = _oObjet.titulo;
     this.contatoStatus = _oObjet.contatoStatus;
     this.visto = _oObjet.visto;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//OrdemServico Object
qat.model.OrdemServico = function(_oObjet)
{
     this.id = _oObjet.id;
     this.emprId = _oObjet.emprId;
     this.userId = _oObjet.userId;
     this.nome = _oObjet.nome;
     this.data = _oObjet.data;
     this.assunto = _oObjet.assunto;
     this.statusValue = _oObjet.statusValue;
     this.OrdemServicoItensList = _oObjet.OrdemServicoItensList;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//OrdemServicoItens Object
qat.model.OrdemServicoItens = function(_oObjet)
{
     this.id = _oObjet.id;
     this.data = _oObjet.data;
     this.texto = _oObjet.texto;
     this.parentId = _oObjet.parentId;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Plano Object
qat.model.Plano = function(_oObjet)
{
     this.id = _oObjet.id;
     this.dataInicio = _oObjet.dataInicio;
     this.dataFinal = _oObjet.dataFinal;
     this.numeroContrato = _oObjet.numeroContrato;
     this.descricao = _oObjet.descricao;
     this.titulo = _oObjet.titulo;
     this.precoList = _oObjet.precoList;
     this.servicoList = _oObjet.servicoList;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = 'sysrem';//$rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = 'sysrem';//$rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

qat.model.transaction = function(_user,_token,modelAction)
{

   var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  return {

     token :_token,
     inicioSession:(new Date()).getTime(),
     userId : _user,
     emprId : _emprId,
     modelAction    : modelAction,
     createUser     : _user,
     createDateUTC  : (new Date()).getTime(),
     modifyUser     : _user,
     modifyDateUTC  : (new Date()).getTime(),

 }
}

qat.model.fnCnae = function(_oObjet){
    return idCnae = {

                           id : _oObjet.id,
                           modelAction    : _oObjet.modelAction,
                           createUser     : "System",
                           createDateUTC  : (new Date()).getTime(),
                           modifyUser     : "System",
                           modifyDateUTC  : (new Date()).getTime(),

                       }

}
qat.model.fnCnaeEmpresa = function(_oObjet)
        {
          var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
            return     cnaes    = {
                       idCnae : _oObjet,
                       emprId : _emprId,
                       modelAction    : "INSERT",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),
                    }
        }

qat.model.fnNote = function(_oObjet)
        {
            return     note    = {
                       id : _oObjet.id,
                       noteText : _oObjet.noteText,
                       parentId : JSON.parse(localStorage.getItem('empresa')).id,
                       tabelaEnumValue: _oObjet.tabelaEnumValue,
                       modelAction    : "NONE",
                       createUser     : "System",
                       createDateUTC  : (new Date()).getTime(),
                       modifyUser     : "System",
                       modifyDateUTC  : (new Date()).getTime(),
                    }
        }

qat.model.fnDoisValores =function(id,_value,_nome,_tabela,modelAction)
        {

            telefones = {
               id : id,
               value : _value,
               nome : _nome,
               parentId       : 0,
               emprId         : JSON.parse(localStorage.getItem('empresa')).id,
               processId      : 0,
               tabelaEnumValue : _tabela,
               modelAction    : 0,
               modelAction    : modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()
            }

            return telefones;
        }


        qat.model.fnPreco =function(id,_value,_tabela,modelAction)
        {

            telefones = {
               id : id,
               valor : _value,
               precoTypeEnumValue : 5,
               parentId       : 0,
               emprId         : JSON.parse(localStorage.getItem('empresa')).id,
               processId      : 0,
               tabelaEnumValue : _tabela,
               modelAction    : 0,
               modelAction    : modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()
            }

            return telefones;
        }

qat.model.fnTelefones =function(_telefone,modelAction)
        {
    var _id = null;
    if(_telefone.id == "" || _telefone.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }

            telefones = {
               id : _id,
               typeValue : _telefone.typeValue,
               ddd : '',
               numero : _telefone.numero,
               telefoneTypeEnumValue : _telefone.telefoneTypeEnumValue,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : 0,
               modelAction    : modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()
            }

            return telefones;
        }


          

  qat.model.fnEmails =function(_email,modelAction)
        {

          var _id = null;
    if(_email.id == "" || _email.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
            emails  = {
               id : _id,
               typeValue : 0,
               email : _email.email,
               emailTypeEnumValue : _email.emailTypeEnumValue,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()

            }
            return emails;
        }

  qat.model.fnSocios =function(_cota,_por,_adm,_nome,_cpf,id,type,modelAction)
        {
          var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  
            socio  = {
               id : id,
               pessoa : {
                  nome : _nome,
                  pessoaTypeEnumValue : 6,
                  documentos : [{
                    documentoTypeEnumValue :  2,
                    numero : _cpf
                 }],
                 emprId         : _emprId,
                 modelAction    : modelAction,
                 createUser     : "System",
                 createDateUTC  : (new Date()).getTime(),
                 modifyUser     : "System",
                 modifyDateUTC  : (new Date()).getTime()
               },
               porcentagem : _por,
               socioAdm : _adm,
               parentId       : 0,
               emprId         : 0,
               processId      : 0,
               tableEnumValue : 0,
               modelAction    : modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()

            }
            return socio;
        }


  qat.model.fnPlanoByServico=function(_id,_modelAction)
        {
            emails  = {
               typeValue : 0,
               servico : {id : _id},
               emprId         : JSON.parse(localStorage.getItem('empresa')).id,
               tableEnumValue : 53,
               modelAction    : _modelAction,
               createUser     : "System",
               createDateUTC  : (new Date()).getTime(),
               modifyUser     : "System",
               modifyDateUTC  : (new Date()).getTime()

            }
            return emails;
        }

  qat.model.fnPlanoByEmpresa=function(_Valor,_planoServicoId,_type,_modelAction)
  {
      PlanoByEmpresa = {
        numContrato : null,
        valor : _Valor,
        dataInicio : (new Date()).getTime(),
        planoServicoList : _planoServicoId,
        modelAction    : _modelAction,
        createUser     : "System",
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : "System",
        modifyDateUTC  : (new Date()).getTime()
      }
      return PlanoByEmpresa;
  }

  qat.model.fnServicoAndPlano=function(_Valor,_planoServicoId,_type,_modelAction)
  {


      if(_type == 1)
      {
          servicoAndPlano  = {
             valor : _Valor,
             planoList    : {id : _planoServicoId},
             emprId         : 0,
             dataInicio     : (new Date()).getTime(),
             tableEnumValue : 53,
             servicoPlanoEnumValue : 2,
             modelAction    : _modelAction,
             createUser     : "System",
             createDateUTC  : (new Date()).getTime(),
             modifyUser     : "System",
             modifyDateUTC  : (new Date()).getTime()

          }
        }else{
          servicoAndPlano  = {
             valor : _Valor,
             servicoList      : {id : _planoServicoId},
             emprId         : 0,
             dataInicio     : (new Date()).getTime(),
             servicoPlanoEnumValue : 1,
             tableEnumValue : 53,
             modelAction    : _modelAction,
             createUser     : "System",
             createDateUTC  : (new Date()).getTime(),
             modifyUser     : "System",
             modifyDateUTC  : (new Date()).getTime()

          }

        }
      return servicoAndPlano;
  }


  qat.model.fnProduto =function(_produto,_modelAction,_userId)
  {
    //////debugger
    var _id=null;
    if(_produto.id != "" || _produto.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  
      produto  = {
        id             : _id,
        ncm            : _produto.ncm,
        cdBarras       :_produto.cdBarras,
        dataCreate     :_produto.dataCreate,
        produto        :_produto.produto,
        excTabIPI      :_produto.excTabIPI,
        cEST           : _produto.cEST,
        quant          :_produto.quant,
        uniMed         :_produto.uniMed,
        marca          : _produto.marca,
        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      return produto;
  }

  qat.model.fnTributacao =function(_tributacao,_modelAction,_userId)
  {
    var _id = null;
    if(_tributacao.id == "" || _tributacao.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  //  //////debugger
      tributacao  = {
        id             : _id,
        prodId         : _tributacao.prodId,
        cfop           : qat.model.fnCfop(_tributacao.cfop,_modelAction,_userId),
        icms           : _tributacao.icms,
        pis            : _tributacao.pis,
        cofins         : _tributacao.cofins,
        ipi            : _tributacao.ipi,
        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      //////debugger
      return tributacao;
  }

  qat.model.fnEstoque =function(_estoque,_modelAction,_userId)
  {
    var _id = null;
    if(_estoque.id == "" || _estoque.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  //  //////debugger
      estoque  = {
        id                           : _id,
        estoqueTypeEnumValue         : _estoque.estoqueTypeEnumValue,
        ultimoMov                    : _estoque.ultimoMov,
        quant                        : _estoque.quant,
        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      //////debugger
      return estoque;
  }



  qat.model.fnDocumento =function(_documento,_modelAction,_userId)
  {
    var _id = null;
    if(_documento.id == "" || _documento.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
      estoque  = {
        id                     : _id,
        documentoType          : _documento.documentoType,
        data                   : _documento.data,
        estado                 : _documento.estado,
        documentoTypeEnumValue : _documento.documentoTypeEnumValue,
        numero                 : _documento.numero,
        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      //////debugger
      return estoque;
  }

  qat.model.fnPrecoProd =function(_estoque,_modelAction,_userId)
  {
    var _id = null;
    if(_estoque.id == "" || _estoque.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  //  //////debugger
      estoque  = {
        id                    : _id,
        precoTypeEnumValue    : _estoque.precoTypeEnumValue,
        dataMarcacao          : _estoque.dataMarcacao,
        valor                 : _estoque.valor,
        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      //////debugger
      return estoque;
  }

   qat.model.fnCusto =function(_estoque,_modelAction,_userId)
  {
    var _id = null;
    if(_estoque.id == "" || _estoque.id == " "){
      _id = null;
    }
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
  //  //////debugger
      estoque  = {
        id                    : _id,
        valor    : _estoque.valor,

        parentId       : 0,
        emprId         : _emprId,
        processId      : 0,
        tableEnumValue : 0,
        userId         : _userId,
        modelAction    : _modelAction,
        createUser     : _userId,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : _userId,
        modifyDateUTC  : (new Date()).getTime()

      }
      //////debugger
      return estoque;
  }



  qat.model.fnCfop = function(_cfop,_modelAction,_userId)
  {
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
      var cfop  = {
         id               : _cfop.id,
         cfop             : _cfop.cfop,
         natureza         : _cfop.natureza,
         simplificado     : _cfop.simplificado,
         cfopTypeEnum     : _cfop.cfopTypeEnum,
         icms             : _cfop.icms,
         icmsReduzido     : _cfop.icmsReduzido,
         margemAgregadaST : _cfop.margemAgregadaST,
         cstPrincipal     : _cfop.cstPrincipal,
         classFiscal      : _cfop.classFiscal,
         observacao       : _cfop.observacao,
         emprId           : _emprId,
         tableEnumValue   : 53,
         userId           : _userId,
         modelAction      : _modelAction,
         createUser       : _userId,
         createDateUTC    : (new Date()).getTime(),
         modifyUser       : _userId,
         modifyDateUTC    : (new Date()).getTime()

      }
      return cfop;
  }

  qat.model.fnICMS = function(_cfop,_modelAction,_userId)
  {
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }
         _cfop.emprId         = _emprId,
         _cfop.tableEnumValue = 53,
         _cfop.userId         = _userId,
         _cfop.modelAction    = _modelAction,
         _cfop.createUser     = _userId,
         _cfop.createDateUTC  = (new Date()).getTime(),
         _cfop.modifyUser     = _userId,
         _cfop.modifyDateUTC  = (new Date()).getTime()


      return _cfop;
  }

  qat.model.fnPIS = function(_cfop,_modelAction,_userId)
  {
    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }


         _cfop.emprId         = _emprId,
         _cfop.tableEnumValue = 53,
         _cfop.userId         = _userId,
         _cfop.modelAction    = _modelAction,
         _cfop.createUser     = _userId,
         _cfop.createDateUTC  = (new Date()).getTime(),
         _cfop.modifyUser     = _userId,
         _cfop.modifyDateUTC  = (new Date()).getTime()


      return _cfop;
  }

  qat.model.fnCOFINS = function(_cfop,_modelAction,_userId)
  {

var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }

         _cfop.emprId         = _emprId,
         _cfop.tableEnumValue = 53,
         _cfop.userId         = _userId,
         _cfop.modelAction    = _modelAction,
         _cfop.createUser     = _userId,
         _cfop.createDateUTC  = (new Date()).getTime(),
         _cfop.modifyUser     = _userId,
         _cfop.modifyDateUTC  = (new Date()).getTime()

  
      return _cfop;
  }

  qat.model.fnIPI = function(_cfop,_modelAction,_userId)
  {

    var _emprId = null;
    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
      _emprId = null;
    }else{
      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
    }

         _cfop.emprId         = _emprId,
         _cfop.tableEnumValue = 53,
         _cfop.userId         = _userId,
         _cfop.modelAction    = _modelAction,
         _cfop.createUser     = _userId,
         _cfop.createDateUTC  = (new Date()).getTime(),
         _cfop.modifyUser     = _userId,
         _cfop.modifyDateUTC  = (new Date()).getTime()


      return _cfop;
  }

        //Endereco Object
qat.model.fnEndereco = function(_oObjet,modelAction,user)
{

    return { id : _oObjet.id,
     codIbge : _oObjet.codIbge,
     logradouro : _oObjet.logradouro,
     bairro : _oObjet.bairro,
     numero : _oObjet.numero,
     enderecoTypeValue : _oObjet.enderecoTypeValue,
     cep : _oObjet.cep,
     latitude : _oObjet.latitude,
     longitude : _oObjet.longitude,
     complemento : _oObjet.complemento,
     cidade : {id : _oObjet.cidade.id},
     parentId       : _oObjet.parentId,
     emprId         : _oObjet.emprId,
     processId      : _oObjet.processId,
     tableEnumValue : _oObjet.tableEnumValue,
     modelAction    : modelAction,
     createUser     : user,
     createDateUTC  : (new Date()).getTime(),
     modifyUser     : user,
     modifyDateUTC  : (new Date()).getTime()
     }
}

qat.model.fnUsuario = function(_oObjet,modelAction,user)
{

    return {
     id       : _oObjet.id,
     email    : _oObjet.email,
     senha    : _oObjet.senha,
     cpf      : {
        numero         : _oObjet.numero,
        documentoTypeEnumValue : 2,
        modelAction    : modelAction,
        createUser     : user,
        createDateUTC  : (new Date()).getTime(),
        modifyUser     : user,
        modifyDateUTC  : (new Date()).getTime()
     },
     pergunta : _oObjet.pergunta,
     role     : _oObjet.role,
     telefone : _oObjet.telefone,
     language : "pt-br",
     parentId       : _oObjet.parentId,
     emprId         : _oObjet.emprId,
     processId      : _oObjet.processId,
     tableEnumValue : _oObjet.tableEnumValue,
     modelAction    : modelAction,
     createUser     : user,
     createDateUTC  : (new Date()).getTime(),
     modifyUser     : user,
     modifyDateUTC  : (new Date()).getTime()
     }
}

//Empresa
/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Empresa Object
qat.model.Empresa = function(_oObjet)
{
     if (_oObjet != undefined){
          this.id                  = _oObjet.id;
          this.nome                = _oObjet.nome;
          this.entidadeId          = _oObjet.entidadeId;
          this.numFunc             = _oObjet.numFunc;
          this.statusInicial       = _oObjet.statusInicial;
          this.entidadeEnumValue   = _oObjet.entidadeEnumValue;
          this.regime              = _oObjet.regime;
          this.documentos          = _oObjet.documentos;
          this.enderecos           = _oObjet.enderecos;
          this.emails              = _oObjet.emails;
          this.telefones           = _oObjet.telefones;
          this.cnaes               = _oObjet.cnaes;
          this.statusList          = _oObjet.statusList;
          this.notes               = _oObjet.notes;
          this.parentId            = _oObjet.parentId;
          this.emprId              = _oObjet.emprId;
          this.processId           = _oObjet.processId;
          this.tableEnumValue      = _oObjet.tableEnumValue;
          this.modelAction         = _oObjet.modelAction;
          this.createUser          = $rootScope.user;
          this.createDateUTC       = (new Date()).getTime();
          this.modifyUser          = $rootScope.user;
          this.modifyDateUTC       = (new Date()).getTime();
     }else{
          this.id                  = 0;
          this.nome                = '';
          this.entidadeId          = 0;
          this.numFunc             = 0;
          this.statusInicial       = null;
          this.entidadeEnumValue   = 1;
          this.regime              = [];
          this.documentos          = [];
          this.enderecos           = [];
          this.emails              = [];
          this.telefones           = [];
          this.cnaes               = [];
          this.statusList          = [];
          this.notes               = [];
          this.parentId            = 0;
          this.emprId              = 0;
          this.processId           = 0;
          this.tableEnumValue      = 1;
          this.modelAction         = 'NONE';
          this.createUser          = $rootScope.user;
          this.createDateUTC       = (new Date()).getTime();
          this.modifyUser          = $rootScope.user;
          this.modifyDateUTC       = (new Date()).getTime();
     }
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Filial Object
qat.model.Filial = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.entidadeId = _oObjet.entidadeId;
     this.numFunc = _oObjet.numFunc;
     this.statusInicial = _oObjet.statusInicial;
     this.entidadeEnumValue = _oObjet.entidadeEnumValue;
     this.regime = _oObjet.regime;
     this.documentos = _oObjet.documentos;
     this.enderecos = _oObjet.enderecos;
     this.emails = _oObjet.emails;
     this.telefones = _oObjet.telefones;
     this.cnaes = _oObjet.cnaes;
     this.statusList = _oObjet.statusList;
     this.notes = _oObjet.notes;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Deposito Object
qat.model.Deposito = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.entidadeId = _oObjet.entidadeId;
     this.numFunc = _oObjet.numFunc;
     this.statusInicial = _oObjet.statusInicial;
     this.entidadeEnumValue = _oObjet.entidadeEnumValue;
     this.regime = _oObjet.regime;
     this.documentos = _oObjet.documentos;
     this.enderecos = _oObjet.enderecos;
     this.emails = _oObjet.emails;
     this.telefones = _oObjet.telefones;
     this.cnaes = _oObjet.cnaes;
     this.statusList = _oObjet.statusList;
     this.notes = _oObjet.notes;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Usuario Object
qat.model.Usuario = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.cpf = _oObjet.cpf;
     this.email = _oObjet.email;
     this.senha = _oObjet.senha;
     this.pergunta = _oObjet.pergunta;
     this.role = _oObjet.role;
     this.language = _oObjet.language;
     this.ultAcesso = _oObjet.ultAcesso;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Advocacia Object
qat.model.Advocacia = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.entidadeId = _oObjet.entidadeId;
     this.numFunc = _oObjet.numFunc;
     this.statusInicial = _oObjet.statusInicial;
     this.entidadeEnumValue = _oObjet.entidadeEnumValue;
     this.regime = _oObjet.regime;
     this.documentos = _oObjet.documentos;
     this.enderecos = _oObjet.enderecos;
     this.emails = _oObjet.emails;
     this.telefones = _oObjet.telefones;
     this.cnaes = _oObjet.cnaes;
     this.statusList = _oObjet.statusList;
     this.notes = _oObjet.notes;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Clinica Object
qat.model.Clinica = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.entidadeId = _oObjet.entidadeId;
     this.numFunc = _oObjet.numFunc;
     this.statusInicial = _oObjet.statusInicial;
     this.entidadeEnumValue = _oObjet.entidadeEnumValue;
     this.regime = _oObjet.regime;
     this.documentos = _oObjet.documentos;
     this.enderecos = _oObjet.enderecos;
     this.emails = _oObjet.emails;
     this.telefones = _oObjet.telefones;
     this.cnaes = _oObjet.cnaes;
     this.statusList = _oObjet.statusList;
     this.notes = _oObjet.notes;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Condominio Object
qat.model.Condominio = function(_oObjet)
{
     this.id = _oObjet.id;
     this.nome = _oObjet.nome;
     this.entidadeId = _oObjet.entidadeId;
     this.numFunc = _oObjet.numFunc;
     this.statusInicial = _oObjet.statusInicial;
     this.entidadeEnumValue = _oObjet.entidadeEnumValue;
     this.regime = _oObjet.regime;
     this.documentos = _oObjet.documentos;
     this.enderecos = _oObjet.enderecos;
     this.emails = _oObjet.emails;
     this.telefones = _oObjet.telefones;
     this.cnaes = _oObjet.cnaes;
     this.statusList = _oObjet.statusList;
     this.notes = _oObjet.notes;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 15:1 : 45*/



/** create by system gera-java version 1.0.0 01/06/2016 15:2 : 48*/

//Email Object
qat.model.Email = function(_oObjet)
{
     this.id = _oObjet.id;
     this.typeValue = _oObjet.typeValue;
     this.email = _oObjet.email;
     this.emailTypeEnumValue = _oObjet.emailTypeEnumValue;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 15:3 : 11*/

//Telefone Object
qat.model.Telefone = function(_oObjet)
{
     this.id = _oObjet.id;
     this.typeValue = _oObjet.typeValue;
     this.ddd = _oObjet.ddd;
     this.numero = _oObjet.numero;
     this.telefoneTypeEnumValue = _oObjet.telefoneTypeEnumValue;
     this.parentId       = _oObjet.parentId;
     this.emprId         = _oObjet.emprId;
     this.processId      = _oObjet.processId;
     this.tableEnumValue = _oObjet.tableEnumValue;
     this.modelAction    = _oObjet.modelAction;
     this.createUser     = $rootScope.user;
     this.createDateUTC  = (new Date()).getTime();
     this.modifyUser     = $rootScope.user;
     this.modifyDateUTC  = (new Date()).getTime();
}








