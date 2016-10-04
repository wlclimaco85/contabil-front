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
  return {

     token :_token,
     inicioSession:(new Date()).getTime(),
     userId : _user,
     emprId :JSON.parse(localStorage.getItem('empresa')).id,
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
            return     cnaes    = {
                       idCnae : _oObjet.idCnae,
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

qat.model.fnTelefones =function(numero,id,type,modelAction)
        {

            telefones = {
               id : id,
               typeValue : 0,
               ddd : '',
               numero : numero,
               telefoneTypeEnumValue : type,
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

  qat.model.fnEmails =function(email,id,type,modelAction)
        {
            emails  = {
               id : id,
               typeValue : 0,
               email : email,
               emailTypeEnumValue : type,
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
            socio  = {
               id : id,
               nome : _nome,
               porcentagem : _por,
               socioAdm : _adm,
               pessoaTypeEnumValue : 6,
               documentos : [{
                  documentoTypeEnumValue :  2,
                  numero : _cpf
               }],
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
     cidade : _oObjet.cidade,
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








