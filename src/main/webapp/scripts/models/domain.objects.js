/**
 * Initialize the main namespaces and constants.
 */

var qat = {
	model:
	{
		select:
		{},
		dialog:
		{}
	},
	base:
	{
		model:
		{}
	}
};

//County Object
qat.model.county = function(_countyId, _countyDesc)
{
	this.id = _countyId;
	this.cfop = _countyDesc;
};

//Procedure Object
qat.model.procedure = function(_procId, _procCode, _procDesc, _procPrice,
	_version)
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}
/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//ServicoByPlano Object
qat.model.ServicoByPlano = function(_oObjet)
{
	this.id = _oObjet.id;
	this.parentId = _oObjet.parentId;
	this.servico = _oObjet.servico;
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Site Object
qat.model.Site = function(_oObjet)
{

	this.id = _oObjet ? _oObjet.id : null;
	this.nome = _oObjet ? _oObjet.nome : null;
	this.url = _oObjet ? _oObjet.url : null;
	this.quemSomos = _oObjet ? _oObjet.quemSomos : null;
	this.missao = _oObjet ? _oObjet.missao : null;
	this.visao = _oObjet ? _oObjet.visao : null;
	this.titulo = _oObjet ? _oObjet.titulo : null;
	this.logo = _oObjet ? _oObjet.logo : null;
	this.atorization = _oObjet ? _oObjet.atorization : null;;
	this.siteTypeEnum = _oObjet ? _oObjet.siteTypeEnum : null;;
	this.servicoList = _oObjet ? _oObjet.servicoList : null;;
	this.planoList = _oObjet ? _oObjet.planoList : null;;
	this.parentId = _oObjet ? _oObjet.parentId : null;;
	this.empresa = _oObjet ? _oObjet.empresa : null;;
	this.emprId = _oObjet ? _oObjet.emprId : null;;
	this.processId = _oObjet ? _oObjet.processId : null;;
	this.tableEnumValue = _oObjet ? _oObjet.tableEnumValue : null;;
	this.modelAction = _oObjet ? _oObjet.modelAction : null;;
	this.createUser = 'sysrem'; //'sysrem';//'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//OrdemServicoItens Object
qat.model.OrdemServicoItens = function(_oObjet)
{
	this.id = _oObjet.id;
	this.data = _oObjet.data;
	this.texto = _oObjet.texto;
	this.parentId = _oObjet.parentId;
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem'; //$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem'; //$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.transaction = function(_user, _token, modelAction)
{

	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return {

		token: _token,
		inicioSession: (new Date()).getTime(),
		userId: _user,
		emprId: _emprId,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime(),

	}
}

qat.model.fnCnae = function(_oObjet, _modelAction, _user)
{
	if (_oObjet)
	{
		return idCnae = {

			id: _oObjet.id,
			modelAction: _modelAction,
			createUser: _user,
			createDateUTC: (new Date()).getTime(),
			modifyUser: _user,
			modifyDateUTC: (new Date()).getTime(),

		}
	}
	else
	{
		return {}
	}

}
qat.model.fnRegime = function(_oObjet, modelAction)
{
	if (_oObjet.id)
	{
		return regime = {

			id: _oObjet.id,
			nome: _oObjet.nome,
			descricao: _oObjet.descricao,
			createUser: "System",
			createDateUTC: (new Date()).getTime(),
			modifyUser: "System",
			modifyDateUTC: (new Date()).getTime(),

		}
	}
	else
	{
		return {}
	}

}

qat.model.fnCnaeEmpresa = function(_oObjet, modelAction, user)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return cnaes = {
		idCnae: _oObjet,
		emprId: _emprId,
		modelAction: modelAction,
		createUser: user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: user,
		modifyDateUTC: (new Date()).getTime(),
	}
}

qat.model.fnFormaReceber = function(_oObjet, _action)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var _fornecedor = {};
	if (_oObjet.cliente)
	{
		if (_oObjet.cliente.description)
		{
			_fornecedor = _oObjet.cliente.description
		}
		else if (_oObjet.cliente.id)
		{
			_fornecedor = _oObjet.cliente;
		}
	}
	return cnaes = {
		id: _oObjet.id ? _oObjet.id : null,
		descricao: _oObjet.descricao,
		numero: _oObjet.numero,
		cliente: _fornecedor,
		parcela: _oObjet.parcela,
		formapg: _oObjet.formapg ?
		{
			id: _oObjet.formapg ? _oObjet.formapg.id : null
		} : null,
		dataEmissao: _oObjet.dataEmissao ? new Date(_oObjet.dataEmissao)
			.getTime() : null,
		dataVencimento: _oObjet.dataVencimento ? new Date(
			_oObjet.dataVencimento).getTime() : null,
		dataPagamento: _oObjet.dataPagamento ? new Date(_oObjet.dataPagamento)
			.getTime() : null,
		docId: _oObjet.docId,
		tipoDoc: _oObjet.tipoDoc ? qat.model.fnDoisValor(
			_oObjet.tipoDoc ? _oObjet.tipoDoc :
			{}, _action) : null,
		formaCadastro: _oObjet.formaCadastro ? qat.model.fnDoisValor(
			_oObjet.formaCadastro ? _oObjet.formaCadastro :
			{}, _action) : null,
		intervalo: _oObjet.intervalo ? qat.model.fnDoisValor(
			_oObjet.intervalo ? _oObjet.intervalo :
			{}, _action) : null,
		categoria: _oObjet.categoria ? qat.model.fnDoisValor(
			_oObjet.categoria ? _oObjet.categoria :
			{}, _action) : null,
		situacao: _oObjet.situacao ? qat.model.fnDoisValor(
			_oObjet.situacao ? _oObjet.situacao :
			{}, _action) : null,
		listBaixa: _oObjet.listBaixa[0] ? [qat.model.fnBaixaTitulo(
			_oObjet.listBaixa[0], _action)] : [],
		observacao: _oObjet.observacao,
		valor: _oObjet.valor,
		financeiroEnum: _oObjet.financeiroEnum,
		emprId: _emprId,
		modelAction: _action,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime(),
	}
}

qat.model.fnFormaPagar = function(_oObjet, _action)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var _fornecedor = {};
	if (_oObjet.fornecedor)
	{
		if (_oObjet.fornecedor.description)
		{
			_fornecedor = _oObjet.fornecedor.description
		}
		else if (_oObjet.fornecedor.id)
		{
			_fornecedor = _oObjet.fornecedor;
		}
	}
	return cnaes = {
		id: _oObjet.id ? _oObjet.id : null,
		descricao: _oObjet.descricao,
		numero: _oObjet.numero,
		fornecedor: _fornecedor,
		parcela: _oObjet.parcela,
		formapg: _oObjet.formapg ?
		{
			id: _oObjet.formapg ? _oObjet.formapg.id : null
		} : null,
		dataEmissao: _oObjet.dataEmissao ? new Date(_oObjet.dataEmissao)
			.getTime() : null,
		dataVencimento: _oObjet.dataVencimento ? new Date(
			_oObjet.dataVencimento).getTime() : null,
		dataPagamento: _oObjet.dataPagamento ? new Date(_oObjet.dataPagamento)
			.getTime() : null,
		docId: _oObjet.docId,
		tipoDoc: _oObjet.tipoDoc ? qat.model.fnDoisValor(
			_oObjet.tipoDoc ? _oObjet.tipoDoc :
			{}, _action) : null,
		formaCadastro: _oObjet.formaCadastro ? qat.model.fnDoisValor(
			_oObjet.formaCadastro ? _oObjet.formaCadastro :
			{}, _action) : null,
		intervalo: _oObjet.intervalo ? qat.model.fnDoisValor(
			_oObjet.intervalo ? _oObjet.intervalo :
			{}, _action) : null,
		categoria: _oObjet.categoria ? qat.model.fnDoisValor(
			_oObjet.categoria ? _oObjet.categoria :
			{}, _action) : null,
		situacao: _oObjet.situacao ? qat.model.fnDoisValor(
			_oObjet.situacao ? _oObjet.situacao :
			{}, _action) : null,
		listBaixa: _oObjet.listBaixa[0] ? [qat.model.fnBaixaTitulo(
			_oObjet.listBaixa[0], _action)] : [],
		observacao: _oObjet.observacao,
		valor: _oObjet.valor,
		financeiroEnum: _oObjet.financeiroEnum,
		emprId: _emprId,
		modelAction: _action,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime(),
	}
}

qat.model.fnBaixaTitulo = function(_oObjet, _action)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return cnaes = {

		id: _oObjet.id,
		finanId: _oObjet.finanId,
		dataBaixa: _oObjet.dataBaixa,
		observacao: _oObjet.observacao,
		valor: _oObjet.valor,
		juros: _oObjet.juros,
		multa: _oObjet.multa,
		desconto: _oObjet.desconto,
		conta:
		{
			id: _oObjet.conta ? _oObjet.conta.id : null
		},
		emprId: _emprId,
		modelAction: _action,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime(),
	}
}

qat.model.fnNote = function(_oObjet)
{
	return note = {
		id: _oObjet.id,
		noteText: _oObjet.noteText,
		parentId: JSON.parse(localStorage.getItem('empresa')).id,
		tabelaEnumValue: _oObjet.tabelaEnumValue,
		modelAction: "NONE",
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime(),
	}
}

qat.model.fnDoisValores = function(id, _value, _nome, _tabela, modelAction, _user, _descricao, _type, _page)
{

	telefones = {
		id: id,
		value: _value,
		descricao: _descricao,
		nome: _nome,
		parentId: 0,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		processId: 0,
		doisValorType:
		{
			id: _type
		},
		pagina:
		{
			id: _page
		},
		modelAction: 0,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnDoisValor = function(_oObjet, modelAction)
{

	telefones = {
		id: _oObjet.id,
	}

	return telefones;
}

qat.model.fnPreco = function(id, _value, _tabela, modelAction)
{

	telefones = {
		id: id,
		valor: _value,
		precoTypeEnumValue: 5,
		parentId: 0,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		processId: 0,
		tabelaEnumValue: _tabela,
		modelAction: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnTelefones = function(_telefone, modelAction, _user)
{
	var _id = null;
	if (_telefone)
	{
		if (_telefone.id == "" || _telefone.id == " ")
		{
			_id = null;
		}
		else
		{
			_id = _telefone.id;
		}
		var _emprId = null;
		if (localStorage.getItem('empresa') == null ||
			localStorage.getItem('empresa') == "")
		{
			_emprId = null;
		}
		else
		{
			_emprId = JSON.parse(localStorage.getItem('empresa')).id;
		}

		telefones = {
			id: _id,
			typeValue: _telefone.typeValue,
			ddd: '',
			numero: _telefone.numero,
			telefoneTypeEnumValue: _telefone.telefoneTypeEnumValue,
			parentId: 0,
			emprId: 0,
			processId: 0,
			tableEnumValue: 0,
			modelAction: 0,
			modelAction: modelAction,
			createUser: _user ? _user : "System",
			createDateUTC: (new Date()).getTime(),
			modifyUser: _user ? _user : "System",
			modifyDateUTC: (new Date()).getTime()
		}

		return telefones;
	}
	else
	{
		return {};
	}
}

qat.model.fnEmails = function(_email, modelAction, _user)
{

	if (_email)
	{
		var _id = null;
		if (_email.id == "" || _email.id == " ")
		{
			_id = null;
		}
		else
		{
			_id = _email.id;
		}
		var _emprId = null;
		if (localStorage.getItem('empresa') == null ||
			localStorage.getItem('empresa') == "")
		{
			_emprId = null;
		}
		else
		{
			_emprId = JSON.parse(localStorage.getItem('empresa')).id;
		}
		emails = {
			id: _id,
			typeValue: 0,
			email: _email.email,
			emailTypeEnumValue: _email.emailTypeEnumValue,
			parentId: 0,
			emprId: 0,
			processId: 0,
			tableEnumValue: 0,
			modelAction: modelAction,
			createUser: _user ? _user : "System",
			createDateUTC: (new Date()).getTime(),
			modifyUser: _user ? _user : "System",
			modifyDateUTC: (new Date()).getTime()

		}
		return emails;
	}
	else
	{
		return {};
	}
}

qat.model.fnSocios = function(_cota, _por, _adm, _nome, _cpf, id, type,
	modelAction)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	socio = {
		id: id,
		pessoa:
		{
			nome: _nome,
			pessoaTypeEnumValue: 6,
			documentos: [
			{
				documentoTypeEnumValue: 2,
				numero: _cpf
            }],
			emprId: _emprId,
			modelAction: modelAction,
			createUser: "System",
			createDateUTC: (new Date()).getTime(),
			modifyUser: "System",
			modifyDateUTC: (new Date()).getTime()
		},
		porcentagem: _por,
		socioAdm: _adm,
		parentId: 0,
		emprId: 0,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return socio;
}

qat.model.fnPlanoByServico = function(_id, _modelAction)
{
	emails = {
		typeValue: 0,
		servico:
		{
			id: _id
		},
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return emails;
}

qat.model.fnDoisValoress = function(_DoisValores, _modelAction)
{
	doisValores = {
		id: _DoisValores.id,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return doisValores;
}

qat.model.fnNFNotaInfoItemImpostoIPI = function(_Ipi, _modelAction, _user)
{
	NFNotaInfoItemImpostoIPI = {
		id: _Ipi.id,
		classeEnquadramento: _Ipi.classeEnquadramento,
		cnpjProdutor: _Ipi.cnpjProdutor,
		codigoSelo: _Ipi.codigoSelo,
		quantidadeSelo: _Ipi.quantidadeSelo,
		codigoEnquadramento: _Ipi.codigoEnquadramento,
		tributado: _Ipi.tributado,
		naoTributado: _Ipi.naoTributado,
		tipoCalculo : _oObjet.tipoCalculo ? _oObjet.tipoCalculo : null,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIPI;
}

qat.model.fnNFNotaInfoItemImpostoPIS = function(_Pis, _modelAction, _user)
{
	NFNotaInfoItemImpostoIPI = {
		id: _Pis.id,
		aliquota: _Pis.aliquota ? _Pis.aliquota :
		null,
		quantidade: _Pis.quantidade ? _Pis.quantidade :
		null,
		naoTributado: _Pis.naoTributado ? _Pis.naoTributado :
		null,
		outrasOperacoes: _Pis.outrasOperacoes ? _Pis.outrasOperacoes :
		null,
		tipoCalculo : (_Pis.tipoCalculo ? _Pis.tipoCalculo : null),
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIPI;
}

qat.model.fnNFNotaInfoItemImpostoCOFINS = function(_Cofins, _modelAction, _user)
{
	NFNotaInfoItemImpostoCOFINS = {
		id: _Cofins.id,
		aliquota: _Cofins.aliquota ? _Cofins.aliquota :
		null,
		quantidade: _Cofins.quantidade ? _Cofins.quantidade :
		null,
		naoTributado: _Cofins.naoTributado ? _Cofins.naoTributado :
		null,
		outrasOperacoes: _Cofins.outrasOperacoes ? _Cofins.outrasOperacoes :
		null,
		tipoCalculo : _Cofins.tipoCalculo ? _Cofins.tipoCalculo : null,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoCOFINS;
}

qat.model.fnNFNotaInfoItemImpostoIcmsUfDest = function(_IcmsUfDest,
	_modelAction)
{
	NFNotaInfoItemImpostoIcmsUfDest = {
		id: _IcmsUfDest.id,
		valorBaseCalculoDestino: _IcmsUfDest.valorBaseCalculoDestino,
		percentualRelativoFundoCombatePobrezaDestino: _IcmsUfDest.percentualRelativoFundoCombatePobrezaDestino,
		percentualAliquotaInternaDestino: _IcmsUfDest.percentualAliquotaInternaDestino,
		percentualInterestadual: _IcmsUfDest.percentualInterestadual ? _IcmsUfDest.percentualInterestadual.value : null,
		percentualProvisorioPartilha: _IcmsUfDest.percentualProvisorioPartilha ? _IcmsUfDest.percentualProvisorioPartilha.value : null,
		valorRelativoFundoCombatePobrezaDestino: _IcmsUfDest.valorRelativoFundoCombatePobrezaDestino,
		valorICMSInterestadualDestino: _IcmsUfDest.valorICMSInterestadualDestino,
		valorICMSInterestadualRemetente: _IcmsUfDest.valorICMSInterestadualRemetente,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIcmsUfDest;
}

qat.model.fnNFNotaInfoItemImpostoICMS = function(_NFNotaInfoItemImpostoICMS,
	_modelAction, _user)
{
	notaInfoItemImpostoICMS = {
		id: _NFNotaInfoItemImpostoICMS.id,
		icms00: _NFNotaInfoItemImpostoICMS.icms00 ? _NFNotaInfoItemImpostoICMS.icms00 : null,
		icms10: _NFNotaInfoItemImpostoICMS.icms10 ? _NFNotaInfoItemImpostoICMS.icms10 : null,
		icms20: _NFNotaInfoItemImpostoICMS.icms20 ? _NFNotaInfoItemImpostoICMS.icms20 : null,
		icms30: _NFNotaInfoItemImpostoICMS.icms30 ? _NFNotaInfoItemImpostoICMS.icms30 : null,
		icms40: _NFNotaInfoItemImpostoICMS.icms40 ? _NFNotaInfoItemImpostoICMS.icms40 : null,
		icms51: _NFNotaInfoItemImpostoICMS.icms51 ? _NFNotaInfoItemImpostoICMS.icms51 : null,
		icms60: _NFNotaInfoItemImpostoICMS.icms60 ? _NFNotaInfoItemImpostoICMS.icms60 : null,
		icms70: _NFNotaInfoItemImpostoICMS.icms70 ? _NFNotaInfoItemImpostoICMS.icms70 : null,
		icms90: _NFNotaInfoItemImpostoICMS.icms90 ? _NFNotaInfoItemImpostoICMS.icms90 : null,
		icmsPartilhado: _NFNotaInfoItemImpostoICMS.icmsPartilhado ? _NFNotaInfoItemImpostoICMS.icmsPartilhado : null,
		icmsst: _NFNotaInfoItemImpostoICMS.icmsst ? _NFNotaInfoItemImpostoICMS.icmsst : null,
		icmssn101: _NFNotaInfoItemImpostoICMS.icmssn101 ? _NFNotaInfoItemImpostoICMS.icmssn101 : null,
		icmssn102: _NFNotaInfoItemImpostoICMS.icmssn102 ? _NFNotaInfoItemImpostoICMS.icmssn102 : null,
		icmssn201: _NFNotaInfoItemImpostoICMS.icmssn201 ? _NFNotaInfoItemImpostoICMS.icmssn201 : null,
		icmssn202: _NFNotaInfoItemImpostoICMS.icmssn202 ? _NFNotaInfoItemImpostoICMS.icmssn202 : null,
		icmssn500: _NFNotaInfoItemImpostoICMS.icmssn500 ? _NFNotaInfoItemImpostoICMS.icmssn500 : null,
		icmssn900: _NFNotaInfoItemImpostoICMS.icmssn900 ? _NFNotaInfoItemImpostoICMS.icmssn900 : null,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return notaInfoItemImpostoICMS;
}

qat.model.fnPlanoByEmpresa = function(_Valor, _planoServicoId, _type,
	_modelAction)
{
	PlanoByEmpresa = {
		numContrato: null,
		valor: _Valor,
		dataInicio: (new Date()).getTime(),
		planoServicoList: _planoServicoId,
		modelAction: _modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()
	}
	return PlanoByEmpresa;
}

qat.model.fnServicoAndPlano = function(_campo, _modelAction)
{

	return {
		id: _campo.id,
		numContrato: _campo.numContrato,
		valor: _campo.valor,
		dataInicio: (new Date()).getTime(),
		dataFim: _campo.dataFim,
		planoServicoList: _campo.planoServicoList,
		tableEnumValue: 53,
		modelAction: _modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()
	};

}




qat.model.fnProduto = function(_produto, _modelAction, _userId)
{
	//debugger
	var _id = null;
	if (_produto.id == "" || _produto.id == " " || _produto.id == null)
	{
		_id = null;
	}
	else
	{
		_id = _produto.id;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	produto = {
		id: _id,
		ncm: _produto.ncm,
		cdBarras: _produto.cdBarras,
		dataCreate: _produto.dataCreate,
		excTabIPI: _produto.excTabIPI,
		cEST: _produto.cEST,
		quant: _produto.quant,
		uniMed: _produto.uniMed ?
		{
			id: _produto.uniMed.id
		} :
		{},
		marca: _produto.marca ?
		{
			id: _produto.marca.id
		} :
		{},
		parentId: 0,
		emprId: _emprId,
		produto: _produto.produto,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	return produto;
}

qat.model.fnTributacao = function(_tributacao, _modelAction, _userId)
{
	var _id = null;
	if (_tributacao.id == "" || _tributacao.id == " ")
	{
		_id = null;
	}
	else
	{
		_id = _tributacao.id;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	tributacao = {
		id: _id,
		prodId: _tributacao.prodId,
		//    cfop           :  qat.model.fnCfop(_tributacao.cfop,_modelAction,_userId),
		icms: _tributacao.icms,
		pis: _tributacao.pis,
		cofins: _tributacao.cofins,
		ipi: _tributacao.ipi,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return tributacao;
}

qat.model.fnPessoaTipo = function(_pessoaTypeEnum, _modelAction, _userId)
{
	var _id = null;

	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	tributacao = {
		id: _id,
		pessoaTypeEnum: _pessoaTypeEnum,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return tributacao;
}

qat.model.fnEstoque = function(_estoque, _modelAction, _userId)
{
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ")
	{
		_id = null;
	}
	else
	{
		_id = _estoque.id;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id: _id,
		estoqueTypeEnumValue: _estoque.estoqueTypeEnumValue,
		ultimoMov: _estoque.ultimoMov,
		quant: _estoque.quant,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnDocumento = function(_documento, _modelAction, _userId)
{
	var _id = null;
	if (_documento.id == "" || _documento.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	estoque = {
		id: _id,
		documentoType: _documento.documentoType,
		data: _documento.data,
		estado: _documento.estado,
		documentoTypeEnumValue: _documento.documentoTypeEnumValue,
		numero: _documento.numero,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnPrecoProd = function(_estoque, _modelAction, _userId)
{
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ")
	{
		_id = null;
	}
	else
	{
		_id = _estoque.id;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id: _id,
		precoTypeEnumValue: _estoque.precoTypeEnumValue,
		dataMarcacao: _estoque.dataMarcacao,
		valor: _estoque.valor,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnCusto = function(_estoque, _modelAction, _userId)
{
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id: _id,
		valor: _estoque.valor,

		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnCfop = function(_cfop, _modelAction, _userId)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var cfop = {
		id: _cfop.id,
		cfop: _cfop.cfop,
		natureza: _cfop.natureza,
		simplificado: _cfop.simplificado,
		cfopTypeEnum: _cfop.cfopTypeEnum,
		icms: _cfop.icms,
		icmsReduzido: _cfop.icmsReduzido,
		margemAgregadaST: _cfop.margemAgregadaST,
		cstPrincipal: _cfop.cstPrincipal,
		classFiscal: _cfop.classFiscal,
		observacao: _cfop.observacao,
		emprId: _emprId,
		tableEnumValue: 53,
		userId: _userId,
		modelAction: _modelAction,
		createUser: _userId,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _userId,
		modifyDateUTC: (new Date()).getTime()

	}
	return cfop;
}

qat.model.fnConta = function(_conta, _modelAction)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var conta = {
		id: _conta.id,
		descricao: _conta.descricao,
		saldo: _conta.saldo,
		dataUltLanc: _conta.dataUltLanc,
		numeroConta: _conta.numeroConta,
		tipoConta: qat.model.fnDoisValor(_conta.tipoConta, _modelAction),
		observacao: _conta.observacao,
		emprId: _emprId,
		tableEnumValue: 53,
		userId: "_userId",
		modelAction: _modelAction,
		createUser: "_userId",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "_userId",
		modifyDateUTC: (new Date()).getTime()

	}
	return conta;
}

qat.model.fnICMS = function(_cfop, _modelAction, _userId)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
		_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
		_cfop.createDateUTC = (new Date()).getTime(),
		_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
		.getTime()

	return _cfop;
}

qat.model.fnPIS = function(_cfop, _modelAction, _userId)
{
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
		_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
		_cfop.createDateUTC = (new Date()).getTime(),
		_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
		.getTime()

	return _cfop;
}

qat.model.fnCOFINS = function(_cfop, _modelAction, _userId)
{

	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
		_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
		_cfop.createDateUTC = (new Date()).getTime(),
		_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
		.getTime()

	return _cfop;
}

qat.model.fnIPI = function(_cfop, _modelAction, _userId)
{

	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
		_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
		_cfop.createDateUTC = (new Date()).getTime(),
		_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
		.getTime()

	return _cfop;
}

//Endereco Object
qat.model.fnEndereco = function(_oObjet, modelAction, user)
{
	var _emprId = null;

	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	var _id = null;
	if (_oObjet !== undefined)
	{
		if (_oObjet.id == "" || _oObjet.id == " " || _oObjet.id == null || _oObjet.id == undefined)
		{
			_id = null;
		}
		else
		{
			_id = _oObjet.id;
		}

		return {
			id: _id,
			codIbge: _oObjet.codIbge,
			logradouro: _oObjet.logradouro,
			bairro: _oObjet.bairro,
			numero: _oObjet.numero,
			enderecoTypeValue: _oObjet.enderecoTypeValue,
			cep: _oObjet.cep,
			latitude: _oObjet.latitude,
			longitude: _oObjet.longitude,
			complemento: _oObjet.complemento,
			cidade:
			{
				id: _oObjet.cidade ? _oObjet.cidade.id : null
			},
			parentId: _oObjet.parentId,
			emprId: _emprId,
			processId: _oObjet.processId,
			tableEnumValue: _oObjet.tableEnumValue,
			modelAction: modelAction,
			createUser: user,
			createDateUTC: (new Date()).getTime(),
			modifyUser: user,
			modifyDateUTC: (new Date()).getTime()
		}
	}
}

qat.model.fnUsuario = function(_oObjet, modelAction, user)
{

	return {
		id: _oObjet.id,
		email: _oObjet.email,
		senha: _oObjet.senha,
		cpf:
		{
			numero: _oObjet.numero,
			documentoTypeEnumValue: 2,
			modelAction: modelAction,
			createUser: user,
			createDateUTC: (new Date()).getTime(),
			modifyUser: user,
			modifyDateUTC: (new Date()).getTime()
		},
		pergunta: _oObjet.pergunta,
		role: _oObjet.role,
		telefone: _oObjet.telefone,
		language: "pt-br",
		parentId: _oObjet.parentId,
		emprId: _oObjet.emprId,
		processId: _oObjet.processId,
		tableEnumValue: _oObjet.tableEnumValue,
		modelAction: modelAction,
		createUser: user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: user,
		modifyDateUTC: (new Date()).getTime()
	}
}

qat.model.fnDocumentos = function(_documentos, _modelAction, _userId)
{
	debugger
	var _emprId = null;
	var estoques = [];
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	for (var x = 0; x < _documentos.length; x++)
	{
		var _id = null;
		if (_documentos[x].id == "" || _documentos[x].id == " " || _documentos[x].id == undefined || _documentos[x].id == null)
		{
			_id = null;
		}
		else
		{
			_id = _documentos[x].id;
		}
		estoque = {
			id: _id,
			documentoType: _documentos[x].documentoType,
			data: _documentos[x].data,
			estado: _documentos[x].estado,
			documentoTypeEnumValue: _documentos[x].documentoTypeEnumValue,
			numero: _documentos[x].numero,
			parentId: 0,
			emprId: _emprId,
			processId: 0,
			tableEnumValue: 0,
			userId: _userId,
			modelAction: _id ? _modelAction : "INSERT",
			createUser: _userId,
			createDateUTC: (new Date()).getTime(),
			modifyUser: _userId,
			modifyDateUTC: (new Date()).getTime()

		}
		estoques.push(estoque);
	}
	//////debugger
	return estoques;
}


//Endereco Object
qat.model.fnEnderecos = function(_oObjets, _modelAction, _user)
{
	var _emprId = null;
	var endereco = {}
	var enderecos = [];
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == "")
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	for (var x = 0; x < _oObjets.length; x++)
	{
		var _id = null;
		if ((_oObjets[x] !== undefined) && (_oObjets[x].id !== undefined))
		{
			if (_oObjets[x].id == "" || _oObjets[x].id == " ")
			{
				_id = null;
			}
			else
			{
				_id = _oObjets[x].id;
			}

			endereco = {
				id: _id,
				codIbge: _oObjets[x].codIbge,
				logradouro: _oObjets[x].logradouro,
				bairro: _oObjets[x].bairro,
				numero: _oObjets[x].numero,
				enderecoTypeValue: _oObjets[x].enderecoTypeValue,
				cep: _oObjets[x].cep,
				latitude: _oObjets[x].latitude,
				longitude: _oObjets[x].longitude,
				complemento: _oObjets[x].complemento,
				cidade:
				{
					id: _oObjets[x].cidade ? _oObjets[x].cidade.id : null
				},
				parentId: _oObjets[x].parentId,
				emprId: _emprId,
				processId: _oObjets[x].processId,
				tableEnumValue: _oObjets[x].tableEnumValue,
				modelAction: _id ? _modelAction : "INSERT",
				createUser: _user,
				createDateUTC: (new Date()).getTime(),
				modifyUser: _user,
				modifyDateUTC: (new Date()).getTime()
			}


			enderecos.push(endereco);
		}
	}
	return enderecos;
}

qat.model.Emails = function(_oObjet, _modelAction, _user)
{
	var email = {};
	var emails = [];
	for (var x = 0; x < _oObjet.length; x++)
	{
		email = qat.model.Email(_oObjet[x], _oObjet[x].id ? _modelAction : "INSERT", _user)
		emails.push(email)
	}

	return emails;
}


qat.model.Telefones = function(_oObjet, _modelAction, _user)
{
	var email = {};
	var emails = [];
	for (var x = 0; x < _oObjet.length; x++)
	{
		email = qat.model.Telefone(_oObjet[x], _oObjet[x].id ? _modelAction : "INSERT", _user)
		emails.push(email)
	}

	return emails;
}

qat.model.Cnaes = function(_oObjet, _modelAction, _user)
{
	debugger
	var email = {};
	var emails = [];
	for (var x = 0; x < _oObjet.length; x++)
	{
		email = qat.model.fnCnae(_oObjet[x], _oObjet[x].id ? _modelAction : "INSERT", _user)
		emails.push(qat.model.fnCnaeEmpresa(email, email.id ? _modelAction : "INSERT", _user))
	}

	return emails;
}

qat.model.NFNotaInfoItemProdutoDeclaracaoImportacaoAdicao = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.numero = _oObjet.numero;
	this.sequencial = _oObjet.sequencial;
	this.codigoFabricante = _oObjet.codigoFabricante;
	this.desconto = _oObjet.desconto;
	this.numeroAtoConcessorioDrawback = _oObjet.numeroAtoConcessorioDrawback;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.fnDoisValores = function(id, _value, _nome, _tabela, modelAction, _user, _descricao, _type, _page)
{

	telefones = {
		id: id,
		value: _value,
		descricao: _descricao,
		nome: _nome,
		parentId: 0,
		emprId: JSON.parse(localStorage.getItem('empresa')).id,
		processId: 0,
		doisValorType:
		{
			id: _type
		},
		pagina:
		{
			id: _page
		},
		modelAction: 0,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnDoisValor1 = function(_oObjet, _modelAction, _user)
{

	this.id = _oObjet ? _oObjet.id : null;
	/*    this.value = _oObjet.value;
	    this.descricao = _oObjet.descricao;
	    this.nome = _oObjet.nome;
	    this.doisValorType = _oObjet.doisValorType;
	    this.pagina = _oObjet.pagina;
	    this.parentId = _oObjet.parentId;
	    this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    this.processId = _oObjet.processId;
	    this.tableEnumValue = _oObjet.tableEnumValue;
	    this.modelAction = _modelAction;
	    this.createUser = _user;
	    this.createDateUTC = (new Date()).getTime();
	    this.modifyUser = _user;
	    this.modifyDateUTC = (new Date()).getTime();*/
}

qat.model.EmpresaProduto = function(_oObjet, _modelAction, _user)
{
	//debugger
	this.id = _oObjet.id;
	this.prodId = _oObjet.prodId;
	this.codigo = _oObjet.codigo;
	this.informAdicionaisParaNFe = _oObjet.informAdicionaisParaNFe;
	this.anotainternas = _oObjet.anotainternas;
	this.dataCadastro = _oObjet.dataCadastro;
	this.margemLucro = _oObjet.margemLucro;
	this.estoqueList = _oObjet.estoqueList;
	this.tributacao = _oObjet.tributacao ?
	{
		id: _oObjet.tributacao.id
	} :
	{};
	this.precoList = _oObjet.precoList;
	this.custoList = _oObjet.custoList;
	this.porcaoList = _oObjet.porcaoList;
	this.rentabilidadeList = _oObjet.rentabilidadeList;
	this.aplicacao = _oObjet.aplicacao;
	this.fracao = _oObjet.fracao;
	this.pesoBruto = _oObjet.pesoBruto;
	this.pesoLiquido = _oObjet.pesoLiquido;
	this.modoUso = _oObjet.modoUso;
	this.InfaddNFe = _oObjet.InfaddNFe;
	this.AnotInt = _oObjet.AnotInt;
	this.categoria = _oObjet.categoria;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.Marca = function(_oObjet, _modelAction, _user)
{

	this.id = _oObjet.id;
	this.marca = _oObjet.marca
	this.fabricante = _oObjet.fabricante
	this.emailList = [];
	this.emailList.push(qat.model.fnEmails(_oObjet.emailList ? _oObjet.emailList[0] :
	{}, (_oObjet.emailList[0] && _oObjet.emailList[0].id) ? _modelAction : 'INSERT', _user));
	this.enderecoList = [];
	this.enderecoList.push(qat.model.fnEndereco(_oObjet.enderecoList ? _oObjet.enderecoList[0] :
	{}, (_oObjet.enderecoList && _oObjet.emailList[0].id) ? _modelAction : 'INSERT', _user));
	this.telefoneList = [];
	this.telefoneList.push(qat.model.fnTelefones(_oObjet.telefoneList ? _oObjet.telefoneList[0] :
	{}, (_oObjet.telefoneList[0] && _oObjet.telefoneList[0].id) ? _modelAction : 'INSERT', _user));
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.UniMed = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.unimed = _oObjet.unimed;
	this.sigla = _oObjet.sigla;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.Categoria = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.categoria = _oObjet.categoria;
	this.margem = _oObjet.margem;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoDeclaracaoImportacao = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.numeroRegistro = _oObjet.numeroRegistro;
	this.dataRegistro = _oObjet.dataRegistro;
	this.localDesembaraco = _oObjet.localDesembaraco;
	this.ufDesembaraco = _oObjet.ufDesembaraco;
	this.dataDesembaraco = _oObjet.dataDesembaraco;
	this.transporteInternacional = _oObjet.transporteInternacional ?
	{
		id: _oObjet.transporteInternacional.id
	} :
	{};
	this.valorAFRMM = _oObjet.valorAFRMM;
	this.formaImportacaoIntermediacao = _oObjet.formaImportacaoIntermediacao ?
	{
		id: _oObjet.formaImportacaoIntermediacao.id
	} :
	{};
	this.cnpj = _oObjet.cnpj;
	this.ufTerceiro = _oObjet.ufTerceiro;
	this.codigoExportador = _oObjet.codigoExportador;
	this.adicoes = _oObjet.adicoes ? new qat.model.NFNotaInfoItemProdutoDeclaracaoImportacaoAdicao(_oObjet.adicoes, _oObjet.adicoes.id ? _modelAction : "INSERT", _user) : [];
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemExportacaoIndireta = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.numeroRegistroExportacao = _oObjet.numeroRegistroExportacao;
	this.chaveAcessoNFe = _oObjet.chaveAcessoNFe;
	this.quantidadeItemEfetivamenteExportado = _oObjet.quantidadeItemEfetivamenteExportado;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}


qat.model.NFNotaInfoItemDetalheExportacao = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.atoConcessorioDrawback = _oObjet.atoConcessorioDrawback;
	this.exportacaoIndireta = _oObjet.exportacaoIndireta ? new qat.model.NFNotaInfoItemExportacaoIndireta(_oObjet.exportacaoIndireta, _oObjet.exportacaoIndireta.id ? _modelAction :
		"INSERT", _user) :
	{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoVeiculo = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.tipoOperacao = _oObjet.tipoOperacao ?
	{
		id: _oObjet.tipoOperacao.id
	} :
	{};
	this.chassi = _oObjet.chassi;
	this.codigoCor = _oObjet.codigoCor;
	this.descricaoCor = _oObjet.descricaoCor;
	this.potencia = _oObjet.potencia;
	this.cilindrada = _oObjet.cilindrada;
	this.pesoLiquido = _oObjet.pesoLiquido;
	this.pesoBruto = _oObjet.pesoBruto;
	this.numeroSerie = _oObjet.numeroSerie;
	this.tipoCombustivel = _oObjet.tipoCombustivel ?
	{
		id: _oObjet.tipoCombustivel.id
	} :
	{};
	this.numeroMotor = _oObjet.numeroMotor;
	this.capacidadeMaximaTracao = _oObjet.capacidadeMaximaTracao;
	this.distanciaEntreEixos = _oObjet.distanciaEntreEixos;
	this.anoModeloFabricacao = _oObjet.anoModeloFabricacao;
	this.anoFabricacao = _oObjet.anoFabricacao;
	this.tipoPintura = _oObjet.tipoPintura;
	this.tipoVeiculo = _oObjet.tipoVeiculo ?
	{
		id: _oObjet.tipoVeiculo.id
	} :
	{};
	this.especieVeiculo = _oObjet.especieVeiculo;
	this.condicaoChassi = _oObjet.condicaoChassi ?
	{
		id: _oObjet.condicaoChassi.id
	} :
	{};
	this.condicao = _oObjet.condicao ?
	{
		id: _oObjet.condicao.id
	} :
	{};
	this.codigoMarcaModelo = _oObjet.codigoMarcaModelo;
	this.corDENATRAN = _oObjet.corDENATRAN ?
	{
		id: _oObjet.corDENATRAN.id
	} :
	{};
	this.lotacao = _oObjet.lotacao;
	this.restricao = _oObjet.restricao ?
	{
		id: _oObjet.restricao.id
	} :
	{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoMedicamento = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.lote = _oObjet.lote;
	this.quantidade = _oObjet.quantidade;
	this.dataFabricacao = _oObjet.dataFabricacao;
	this.dataValidade = _oObjet.dataValidade;
	this.precoMaximoConsumidor = _oObjet.precoMaximoConsumidor;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoArmamento = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.tipo = _oObjet.tipo ?
	{
		id: _oObjet.tipo.id
	} :
	{};
	this.numeroSerieArma = _oObjet.numeroSerieArma;
	this.numeroSerieCano = _oObjet.numeroSerieCano;
	this.descricao = _oObjet.descricao;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoCombustivelCIDE = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.quantidadeBCCIDE = _oObjet.quantidadeBCCIDE;
	this.valorAliquota = _oObjet.valorAliquota;
	this.valor = _oObjet.valor;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProdutoCombustivel = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.codigoProdutoANP = _oObjet.codigoProdutoANP;
	this.percentualGasNatural = _oObjet.percentualGasNatural;
	this.codigoAutorizacaoCOFIF = _oObjet.codigoAutorizacaoCOFIF;
	this.quantidade = _oObjet.quantidade;
	this.uf = _oObjet.uf;
	this.cide = _oObjet.cide ? new qat.model.NFNotaInfoItemProdutoCombustivelCIDE(_oObjet.cide, _oObjet.cide.id ? _modelAction : "INSERT", _user) :
	{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemProduto = function(_oObjet, _modelAction, _user)
{

	this.id = _oObjet.id;
	this.codigo = _oObjet.codigo;
	this.codigoDeBarras = _oObjet.codigoDeBarras;
	this.descricao = _oObjet.descricao;
	this.ncm = _oObjet.ncm;
	this.nomeclaturaValorAduaneiroEstatistica = _oObjet.nomeclaturaValorAduaneiroEstatistica;
	this.codigoEspecificadorSituacaoTributaria = _oObjet.codigoEspecificadorSituacaoTributaria;
	this.extipi = _oObjet.extipi;
	this.cfop = _oObjet.cfop;
	this.unidadeComercial = _oObjet.unidadeComercial;
	this.quantidadeComercial = _oObjet.quantidadeComercial;
	this.valorUnitario = _oObjet.valorUnitario;
	this.valorTotalBruto = _oObjet.valorTotalBruto;
	this.codigoDeBarrasTributavel = _oObjet.codigoDeBarrasTributavel;
	this.unidadeTributavel = _oObjet.unidadeTributavel;
	this.quantidadeTributavel = _oObjet.quantidadeTributavel;
	this.valorUnitarioTributavel = _oObjet.valorUnitarioTributavel;
	this.valorFrete = _oObjet.valorFrete;
	this.valorSeguro = _oObjet.valorSeguro;
	this.valorDesconto = _oObjet.valorDesconto;
	this.valorOutrasDespesasAcessorias = _oObjet.valorOutrasDespesasAcessorias;
	this.compoeValorNota = _oObjet.tipoVeiculo ?
	{
		id: _oObjet.tipoVeiculo.id
	} :
	{};
	this.declaracoesImportacao = _oObjet.declaracoesImportacao ? new qat.model.NFNotaInfoItemProdutoDeclaracaoImportacao(_oObjet.declaracoesImportacao, _modelAction, _user) : [];
	this.detalhesExportacao = _oObjet.detalhesExportacao ? new qat.model.NFNotaInfoItemDetalheExportacao(_oObjet.detalhesExportacao, _modelAction, _user) : [];
	this.numeroPedidoCliente = _oObjet.numeroPedidoCliente;
	this.numeroPedidoItemCliente = _oObjet.numeroPedidoItemCliente;
	this.numeroControleFCI = _oObjet.numeroControleFCI;
	this.veiculo = _oObjet.veiculo ? new qat.model.NFNotaInfoItemProdutoVeiculo(_oObjet.veiculo, _oObjet.veiculo.id ? _modelAction : "INSERT", _user) :
	{};
	this.medicamentos = _oObjet.medicamentos ? new qat.model.NFNotaInfoItemProdutoMedicamento(_oObjet.armamentos, _modelAction, _user) : [];
	this.armamentos = _oObjet.armamentos ? new qat.model.NFNotaInfoItemProdutoArmamento(_oObjet.armamentos, _modelAction, _user) : [];
	this.combustivel = _oObjet.combustivel ? new qat.model.NFNotaInfoItemProdutoCombustivel(_oObjet.combustivel, _oObjet.combustivel.id ? _modelAction : "INSERT", _user) :
	{};
	this.numeroRECOPI = _oObjet.numeroRECOPI;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();

}

qat.model.NFNotaInfoItemImpostoImportacao = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorBaseCalculo = _oObjet.valorBaseCalculo;
	this.valorDespesaAduaneira = _oObjet.valorDespesaAduaneira;
	this.valorImpostoImportacao = _oObjet.valorImpostoImportacao;
	this.valorIOF = _oObjet.valorIOF;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemImpostoPISST = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorBaseCalculo = _oObjet.valorBaseCalculo;
	this.percentualAliquota = _oObjet.percentualAliquota;
	this.quantidadeVendida = _oObjet.quantidadeVendida;
	this.valorAliquota = _oObjet.valorAliquota;
	this.valorTributo = _oObjet.valorTributo;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemImpostoICMSUFDestino = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorBaseCalculoDestino = _oObjet.valorBaseCalculoDestino;
	this.percentualRelativoFundoCombatePobrezaDestino = _oObjet.percentualRelativoFundoCombatePobrezaDestino;
	this.percentualAliquotaInternaDestino = _oObjet.percentualAliquotaInternaDestino;
	this.percentualInterestadual = _oObjet.percentualInterestadual;
	this.percentualProvisorioPartilha = _oObjet.percentualProvisorioPartilha;
	this.valorRelativoFundoCombatePobrezaDestino = _oObjet.valorRelativoFundoCombatePobrezaDestino;
	this.valorICMSInterestadualDestino = _oObjet.valorICMSInterestadualDestino;
	this.valorICMSInterestadualRemetente = _oObjet.valorICMSInterestadualRemetente;
	this.parentId = _oObjet.parentId = _oObjet.id;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemImpostoISSQN = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorBaseCalculo = _oObjet.valorBaseCalculo;
	this.valorAliquota = _oObjet.valorAliquota;
	this.valor = _oObjet.valor;
	this.codigoMunicipio = _oObjet.codigoMunicipio;
	this.itemListaServicos = _oObjet.itemListaServicos;
	this.valorDeducao = _oObjet.valorDeducao;
	this.valorOutro = _oObjet.valorOutro;
	this.valorDescontoIncondicionado = _oObjet.valorDescontoIncondicionado;
	this.valorDescontoCondicionado = _oObjet.valorDescontoCondicionado;
	this.valorRetencaoISS = _oObjet.valorRetencaoISS;
	this.indicadorExigibilidadeISS = _oObjet.indicadorExigibilidadeISS ?
	{
		id: _oObjet.indicadorExigibilidadeISS.id
	} :
	null;
	this.codigoServico = _oObjet.codigoServico;
	this.codigoMunicipioIncidenciaImposto = _oObjet.codigoMunicipioIncidenciaImposto;
	this.codigoPais = _oObjet.codigoPais;
	this.numeroProcesso = _oObjet.numeroProcesso;
	this.indicadorIncentivoFiscal = _oObjet.indicadorIncentivoFiscals;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFNotaInfoItemImposto = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorTotalTributos;
	this.icms = _oObjet.icms ? qat.model.fnNFNotaInfoItemImpostoICMS(_oObjet.icms, _oObjet.icms.id ? _modelAction : "INSERT", _user) :
	{};
	this.ipi = _oObjet.ipi ? qat.model.fnNFNotaInfoItemImpostoIPI(_oObjet.ipi, _oObjet.ipi.id ? _modelAction : "INSERT", _user) :
	{};
	this.impostoImportacao = _oObjet.impostoImportacao ? new qat.model.NFNotaInfoItemImpostoImportacao(_oObjet.impostoImportacao, _oObjet.impostoImportacao.id ? _modelAction :
		"INSERT", _user) :
	{};
	this.issqn = _oObjet.veiculo ? new qat.model.NFNotaInfoItemImpostoISSQN(_oObjet.veiculo, _oObjet.veiculo.id ? _modelAction : "INSERT", _user) :
	{};
	this.pis = _oObjet.pis ? qat.model.fnNFNotaInfoItemImpostoPIS(_oObjet.pis, _oObjet.pis.id ? _modelAction : "INSERT", _user) :
	{};
	this.pisst = _oObjet.pisst ? new qat.model.NFNotaInfoItemImpostoPISST(_oObjet.pisst, _oObjet.pisst.id ? _modelAction : "INSERT", _user) :
	{};
	this.cofins = _oObjet.cofins ? qat.model.fnNFNotaInfoItemImpostoCOFINS(_oObjet.cofins, _oObjet.cofins.id ? _modelAction : "INSERT", _user) :
	{};
	this.cofinsst = _oObjet.cofinsst ? new qat.model.NFNotaInfoItemImpostoCOFINSST(_oObjet.cofinsst, _oObjet.cofinsst.id ? _modelAction : "INSERT", _user) :
	{};
	this.icmsUfDestino = _oObjet.icmsUfDestino ? new qat.model.NFNotaInfoItemImpostoICMSUFDestino(_oObjet.icmsUfDestino, _oObjet.icmsUfDestino.id ? _modelAction : "INSERT", _user) :
		{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.NFInformacaoImpostoDevolvido = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorIPIDevolvido = _oObjet.valorIPIDevolvido;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}


qat.model.NFImpostoDevolvido = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.percentualDevolucao;
	this.informacaoIPIDevolvido = _oObjet.informacaoIPIDevolvido ? new qat.model.NFInformacaoImpostoDevolvido(_oObjet.informacaoIPIDevolvido, _oObjet.informacaoIPIDevolvido.id ?
		_modelAction : "INSERT", _user) :
	{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.itens = function(_oObjet, _modelAction, _user)
{

	this.id = _oObjet.id;
	this.numeroItem = _oObjet.numeroItem;
	this.produto = _oObjet.produto ? new qat.model.NFNotaInfoItemProduto(_oObjet.produto, _oObjet.produto.id ? _modelAction : "INSERT", _user) :
	{};
	this.imposto = _oObjet.imposto ? new qat.model.NFNotaInfoItemImposto(_oObjet.imposto, _oObjet.imposto.id ? _modelAction : "INSERT", _user) :
	{};
	this.impostoDevolvido = _oObjet.impostoDevolvido ? new qat.model.NFImpostoDevolvido(_oObjet.impostoDevolvido, _oObjet.impostoDevolvido.id ? _modelAction : "INSERT", _user) :
	{};
	this.informacoesAdicionais = _oObjet.informacoesAdicionais;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();

}

qat.model.confGeral = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.fusoHorario = _oObjet.fusoHorario;
	this.casasDecimais = _oObjet.casasDecimais;
	this.diasCartaCobr = _oObjet.diasCartaCobr;
	this.infPosicionarMouse = _oObjet.infPosicionarMouse;
	this.cnpjCPFUnico = _oObjet.cnpjCPFUnico;
	this.ativNFCe = _oObjet.ativNFCe;
	this.impCodPersonalizado = _oObjet.impCodPersonalizado;
	this.logListRelImp = _oObjet.logListRelImp;
	this.obsProdFinProd = _oObjet.obsProdFinProd;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confFiscal = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.princAtividade = _oObjet.princAtividade ?
	{
		id: _oObjet.princAtividade.id
	} :
	{};
	this.regime = _oObjet.regime ?
	{
		id: _oObjet.regime.id
	} :
	{};
	this.aliqSimples = _oObjet.aliqSimples;
	this.aliqICMS = _oObjet.aliqICMS;
	this.aliqPIS = _oObjet.aliqPIS;
	this.aliqCONFINS = _oObjet.aliqCONFINS;
	this.aliqIRPJ = _oObjet.aliqIRPJ;
	this.aliqCLSS = _oObjet.aliqCLSS;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confProd = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.cfop = _oObjet.cfop ?
	{
		id: _oObjet.cfop.id
	} :
	{};
	this.icmsSitTrib = _oObjet.icmsSitTrib ?
	{
		id: _oObjet.icmsSitTrib.id
	} :
	{};
	this.icmsOrigem = _oObjet.icmsOrigem ?
	{
		id: _oObjet.icmsOrigem.id
	} :
	{};
	this.icmsModalidadeBC = _oObjet.icmsModalidadeBC ?
	{
		id: _oObjet.icmsModalidadeBC.id
	} :
	{};
	this.icmsRedBaseCalc = _oObjet.icmsRedBaseCalc
	this.icmsAliq = _oObjet.icmsAliq;
	this.icmsMotDesoneracao = _oObjet.icmsMotDesoneracao ?
	{
		id: _oObjet.icmsMotDesoneracao.id
	} :
	{};
	this.icmsModBCST = _oObjet.icmsModBCST ?
	{
		id: _oObjet.icmsModBCST.id
	} :
	{};
	this.icmsMargValAdic = _oObjet.icmsMargValAdic;
	this.icmsRedBaseCalcST = _oObjet.icmsRedBaseCalcST;
	this.icmsPrecoUnitPautaST = _oObjet.icmsPrecoUnitPautaST;
	this.icmsAliqST = _oObjet.icmsAliqST;
	this.ipiSitTrib = _oObjet.ipiSitTrib ?
	{
		id: _oObjet.ipiSitTrib.id
	} :
	{};
	this.ipiClasCigarroBebida = _oObjet.ipiClasCigarroBebida;
	this.ipiCNPJProd = _oObjet.ipiCNPJProd;
	this.ipiCodSeloCont = _oObjet.ipiCodSeloCont;
	this.ipiQtdSelo = _oObjet.ipiQtdSelo;
	this.ipiCodEnquad = _oObjet.ipiCodEnquad;
	this.ipiTipCalc = oObjet.ipiTipCalc ?
	{
		id: _oObjet.ipiTipCalc.id
	} :
	{};
	this.ipiAliq = _oObjet.ipiAliq;
	this.pisSitTrib = _oObjet.pisSitTrib ?
	{
		id: _oObjet.pisSitTrib.id
	} :
	{};
	this.pisAliq = _oObjet.pisAliq;
	this.pisValUnidtrib = _oObjet.pisValUnidtrib;
	this.pistipoCalcSubstTrib = _oObjet.pistipoCalcSubstTrib ?
	{
		id: _oObjet.pistipoCalcSubstTrib.id
	} :
	{};
	this.pisAliqST = _oObjet.pisAliqST;
	this.pisValorAliqST = _oObjet.pisValorAliqST;
	this.cofinsSubstTrib = _oObjet.cofinsSubstTrib ?
	{
		id: _oObjet.cofinsSubstTrib.id
	} :
	{};
	this.cofinsAliq = _oObjet.cofinsAliq;
	this.cofinsValorAliq = _oObjet.cofinsValorAliq;
	this.cofinsTipoCalcSubstTrib = _oObjet.cofinsTipoCalcSubstTrib ?
	{
		id: _oObjet.cofinsTipoCalcSubstTrib.id
	} :
	{};
	this.cofinsAliqST = _oObjet.cofinsAliqST;
	this.cofinsValorAliqST = _oObjet.cofinsValorAliqST;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confVendas = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.descontoMaxVenda = _oObjet.descontoMaxVenda;
	this.observacao = _oObjet.observacao;
	this.imprSegVia = _oObjet.imprSegVia;
	this.imprAssinatura = _oObjet.imprAssinatura;
	this.imprResumoFinanc = _oObjet.imprResumoFinanc;
	this.atuaPrecoClonar = _oObjet.atuaPrecoClonar;
	this.imprColUnidade = _oObjet.imprColUnidade;
	this.bloquearvendProdSemEstoq = _oObjet.bloquearvendProdSemEstoq;
	this.addDespCalcImposto = _oObjet.addDespCalcImposto;
	this.retSubstTribICMS = _oObjet.retSubstTribICMS;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confSMTP = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.ativSMTP = _oObjet.ativSMTP;
	this.servSMTP = _oObjet.servSMTP;
	this.porta = _oObjet.porta;
	this.endEmail = _oObjet.endEmail;
	this.usuario = _oObjet.usuario;
	this.senha = _oObjet.senha;
	this.seguranca = {
		id: _oObjet.seguranca
	};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.configOS = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.impr2Via = _oObjet.impr2Via;
	this.imprAss = _oObjet.imprAss;
	this.imprResumo = _oObjet.imprResumo;
	this.imprDetHorz = _oObjet.imprDetHorz;
	this.diasGarantia = _oObjet.diasGarantia;
	this.observ = _oObjet.observ;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confEntrada = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.valorTotalFixo = _oObjet.valorTotalFixo;
	this.manterPrecoVendaProd = _oObjet.manterPrecoVendaProd;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confCarne = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.carneBotelo = _oObjet.carneBotelo;
	this.carneNormal = _oObjet.carneNormal;
	this.localPag = _oObjet.localPag;
	this.instr1 = _oObjet.instr1;
	this.instr2 = _oObjet.instr2;
	this.instr3 = _oObjet.instr3;
	this.instr4 = _oObjet.instr4;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confNFe = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.presCompr = _oObjet.presCompr ?
	{
		id: _oObjet.presCompr.id
	} :
	{};
	this.destConsFinal = _oObjet.destConsFinal ?
	{
		id: _oObjet.destConsFinal.id
	} :
	{};
	this.preencherDataHora = _oObjet.preencherDataHora;
	this.icmsPadrao = _oObjet.icmsPadrao;
	this.ipiPadrao = _oObjet.ipiPadrao;
	this.pisPadrao = _oObjet.pisPadrao;
	this.cofinsPadrao = _oObjet.cofinsPadrao;
	this.ambienteEnvio = _oObjet.ambienteEnvio ?
	{
		id: _oObjet.ambienteEnvio.id
	} :
	{};
	this.tipo = _oObjet.tipo ?
	{
		id: _oObjet.tipo.id
	} :
	{};
	this.servMsmNota = _oObjet.servMsmNota ?
	{
		id: _oObjet.servMsmNota.id
	} :
	{};
	this.serieEnvio = _oObjet.serieEnvio ?
	{
		id: _oObjet.serieEnvio.id
	} :
	{};
	this.anexarXmlEmail = _oObjet.anexarXmlEmail == true ? 1 : 0;
	this.idCSC = _oObjet.idCSC;
	this.cSC = _oObjet.cSC;
	this.informacaoAdd = _oObjet.informacaoAdd;
	this.certificado = _oObjet.certificado;
	this.senha = _oObjet.senha;
	this.tokenNFCe = _oObjet.tokenNFCe;
	this.logoDanfe = _oObjet.logoDanfe;
	this.salvarSenha = _oObjet.salvarSenha;
	this.cfopPadrao = _oObjet.cfopPadrao ?
	{
		id: _oObjet.cfopPadrao.id
	} :
	{};
	this.modelo = _oObjet.modelo ?
	{
		id: _oObjet.modelo.id
	} :
	{};
	this.tipoImpressao = _oObjet.tipoImpressao ?
	{
		id: _oObjet.tipoImpressao.id
	} :
	{};
	this.tipoEmissao = _oObjet.tipoEmissao ?
	{
		id: _oObjet.tipoEmissao.id
	} :
	{};
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confAlertas = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.estoqMin = _oObjet.estoqMin;
	this.estoqMax = _oObjet.estoqMax;
	this.erroNFe = _oObjet.erroNFe;
	this.pdCompra = _oObjet.pdCompra;
	this.nvCliente = _oObjet.nvCliente;
	this.retCaixa = _oObjet.retCaixa;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.confBlueSoft = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.ativBlue = _oObjet.ativBlue;
	this.url = _oObjet.url;
	this.token = _oObjet.token;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.boleto = function(_oObjet, _modelAction, _user)
{
	this.id = _oObjet.id;
	this.ativarBolOnLine = _oObjet.ativarBolOnLine;
	this.tipoBoleto = _oObjet.tipoBoleto ?
	{
		id: _oObjet.tipoBoleto.id
	} :
	{};
	this.agencia = _oObjet.agencia;
	this.cedente = _oObjet.cedente;
	this.juros = _oObjet.juros;
	this.tipoCalcMora = _oObjet.tipoCalcMora ?
	{
		id: _oObjet.tipoCalcMora.id
	} :
	{};
	this.mora = _oObjet.mora;
	this.instrucoes = _oObjet.instrucoes;
	this.demonstrativo = _oObjet.demonstrativo;
	this.impJuros = _oObjet.impJuross;
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.configuracao = function(_oObjet, _modelAction, _user)
{
	//debugger
	this.id = _oObjet.id;
	this.confCabecalho = _oObjet.confCabecalho;
	this.confGeral = _oObjet.confGeral ? new qat.model.confGeral(_oObjet.confGeral, _oObjet.confGeral.id ? _modelAction : "INSERT", _user) :
	{};
	this.confFiscal = _oObjet.confFiscal ? new qat.model.confFiscal(_oObjet.confFiscal, _oObjet.confFiscal.id ? _modelAction : "INSERT", _user) :
	{};
	this.confProd = _oObjet.confProd ? new qat.model.confProd(_oObjet.confProd, _oObjet.confProd.id ? _modelAction : "INSERT", _user) :
	{};
	this.confVendas = _oObjet.confVendas ? new qat.model.confVendas(_oObjet.confVendas, _oObjet.confVendas.id ? _modelAction : "INSERT", _user) :
	{};
	this.confSMTP = _oObjet.confSMTP ? new qat.model.confSMTP(_oObjet.confSMTP, _oObjet.confSMTP.id ? _modelAction : "INSERT", _user) :
	{};
	this.configOS = _oObjet.configOS ? new qat.model.configOS(_oObjet.configOS, _oObjet.configOS.id ? _modelAction : "INSERT", _user) :
	{};
	this.confEntrada = _oObjet.confEntrada ? new qat.model.confEntrada(_oObjet.confEntrada, _oObjet.confEntrada.id ? _modelAction : "INSERT", _user) :
	{};
	this.confCarne = _oObjet.confCarne ? new qat.model.confCarne(_oObjet.confCarne, _oObjet.confCarne.id ? _modelAction : "INSERT", _user) :
	{};
	this.confNFe = _oObjet.confNFe ? new qat.model.confNFe(_oObjet.confNFe, _oObjet.confNFe.id ? _modelAction : "INSERT", _user) :
	{};
	this.confAlertas = _oObjet.confAlertas ? new qat.model.confAlertas(_oObjet.confAlertas, _oObjet.confAlertas.id ? _modelAction : "INSERT", _user) :
	{};
	this.confBlueSoft = _oObjet.confBlueSoft ? new qat.model.confBlueSoft(_oObjet.confBlueSoft, _oObjet.confBlueSoft.id ? _modelAction : "INSERT", _user) :
	{};
	this.boletoList = [_oObjet.boletoList ? new qat.model.boleto(_oObjet.boletoList, _oObjet.boletoList.id ? _modelAction : "INSERT", _user) :
	{}];
	this.parentId = _oObjet.parentId;
	this.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.id ? _modelAction : "INSERT";
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}


//Empresa
/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Empresa Object
qat.model.Empresa = function(_oObjet, _modelAction, _user)
{

	if (_oObjet != undefined)
	{
		this.id = _oObjet.id;
		this.nome = _oObjet.nome;
		this.razao = _oObjet.razao;
		this.statusEmpresa = _oObjet.statusEmpresa;
		this.dtAbertura = _oObjet.dtAbertura;
		this.entidadeId = _oObjet.entidadeId;
		this.entidadeEnum = _oObjet.entidadeEnum;
		this.configuracao = _oObjet.configuracao ? new qat.model.configuracao(_oObjet.configuracao, _modelAction, _user) :
		{};
		this.usuarios = _oObjet.usuarios;
		this.bancos = _oObjet.bancos;
		this.socios = _oObjet.socios;
		//	this.siteList = _oObjet.siteList;
		this.responsavel = _oObjet.responsavel;
		this.notificacoes = _oObjet.notificacoes;
		this.entidadeId = _oObjet.entidadeId;
		this.numFunc = _oObjet.numFunc;
		this.statusInicial = _oObjet.statusInicial;
		this.entidadeEnumValue = _oObjet.entidadeEnumValue;
		this.regime = _oObjet.regime ? qat.model.fnRegime(_oObjet.regime, _oObjet.regime.id ? _modelAction : "INSERT", _user) :
		{};
		this.documentos = _oObjet.documentos ? qat.model.fnDocumentos(_oObjet.documentos, _modelAction, _user) : [];
		this.enderecos = _oObjet.enderecos ? qat.model.fnEnderecos(_oObjet.enderecos, _modelAction, _user) :
		{};
		this.emails = _oObjet.emails ? qat.model.Emails(_oObjet.emails, _modelAction, _user) : [];
		this.telefones = _oObjet.telefones ? qat.model.Telefones(_oObjet.telefones, _modelAction, _user) : [];
		this.cnaes = _oObjet.cnaes ? qat.model.Cnaes(_oObjet.cnaes, _modelAction, _user) : []
		this.statusList = _oObjet.statusList;
		this.notes = _oObjet.notes;
		this.parentId = _oObjet.parentId;
		this.emprId = _oObjet.emprId;
		this.processId = _oObjet.processId;
		this.tableEnumValue = _oObjet.tableEnumValue;
		this.modelAction = _modelAction;
		this.createUser = _user;
		this.createDateUTC = (new Date()).getTime();
		this.modifyUser = _user;
		this.modifyDateUTC = (new Date()).getTime();
	}
	else
	{
		this.id = 0;
		this.nome = '';
		this.entidadeId = 0;
		this.numFunc = 0;
		this.statusInicial = null;
		this.entidadeEnumValue = 1;
		this.regime = [];
		this.documentos = [];
		this.enderecos = [];
		this.emails = [];
		this.telefones = [];
		this.cnaes = [];
		this.statusList = [];
		this.notes = [];
		this.parentId = 0;
		this.emprId = 0;
		this.processId = 0;
		this.tableEnumValue = 1;
		this.modelAction = 'NONE';
		this.createUser = _user;
		this.createDateUTC = (new Date()).getTime();
		this.modifyUser = _user;
		this.modifyDateUTC = (new Date()).getTime();
	}
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Filial Object
qat.model.Filial = function(_oObjet, _user)
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = $rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = $rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Usuario Object
qat.model.Usuario = function(_oObjet, _user)
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Advocacia Object
qat.model.Advocacia = function(_oObjet, _user)
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = _user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = _user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = $rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = $rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
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
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = $rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = $rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 15:1 : 45*/

/** create by system gera-java version 1.0.0 01/06/2016 15:2 : 48*/

//Email Object
qat.model.Email = function(_oObjet, _modelAction, _user)
{
	var email = {};
	email.id = _oObjet.id;
	email.typeValue = _oObjet.typeValue;
	email.email = _oObjet.email;
	email.emailTypeEnumValue = _oObjet.emailTypeEnumValue;
	email.parentId = _oObjet.parentId;
	email.emprId = _oObjet.emprId;
	email.processId = _oObjet.processId;
	email.tableEnumValue = _oObjet.tableEnumValue;
	email.emprId = JSON.parse(localStorage.getItem('empresa')).id
	email.modelAction = _modelAction;
	email.createUser = _user;
	email.createDateUTC = (new Date()).getTime();
	email.modifyUser = _user;
	email.modifyDateUTC = (new Date()).getTime();

	return email;
}

/** create by system gera-java version 1.0.0 01/06/2016 15:3 : 11*/

//Telefone Object
qat.model.Telefone = function(_oObjet, _modelAction, _user)
{
	var telefone = {};
	telefone.id = _oObjet.id;
	telefone.typeValue = _oObjet.typeValue;
	telefone.ddd = _oObjet.ddd;
	telefone.numero = _oObjet.numero;
	telefone.telefoneTypeEnumValue = _oObjet.telefoneTypeEnumValue;
	telefone.parentId = _oObjet.parentId;
	telefone.emprId = JSON.parse(localStorage.getItem('empresa')).id;
	telefone.processId = _oObjet.processId;
	telefone.tableEnumValue = _oObjet.tableEnumValue;
	telefone.modelAction = _modelAction;
	telefone.createUser = _user;
	telefone.createDateUTC = (new Date()).getTime();
	telefone.modifyUser = _user;
	telefone.modifyDateUTC = (new Date()).getTime();

	return telefone;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNota = function(_NFNota, modelAction)
{

	var _id = null;
	if (_NFNota.id == "" || _NFNota.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNota = {
		id: _id,
		identificadorLocal: _NFNota.identificadorLocal,
		info: qat.model.fnNFNotaInfo(_NFNota.info, modelAction),
		infoSuplementar: _NFNota.infoSuplementar,
		assinatura: _NFNota.assinatura,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNota;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfo = function(_NFNotaInfo, modelAction)
{

	var _id = null;
	if (_NFNotaInfo.id == "" || _NFNotaInfo.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfo = {
		id: _id,
		identificador: _NFNotaInfo.identificador,
		versao: _NFNotaInfo.versao,
		identificacao: _NFNotaInfo.identificacao,
		emitente: _NFNotaInfo.emitente,
		avulsa: _NFNotaInfo.avulsa,
		destinatario: _NFNotaInfo.destinatario,
		retirada: _NFNotaInfo.retirada,
		entrega: _NFNotaInfo.entrega,
		pessoasAutorizadasDownloadNFe: _NFNotaInfo.pessoasAutorizadasDownloadNFe,
		itens: _NFNotaInfo.itens,
		total: _NFNotaInfo.total,
		transporte: _NFNotaInfo.transporte,
		cobranca: _NFNotaInfo.cobranca,
		pagamentos: _NFNotaInfo.pagamentos,
		informacoesAdicionais: _NFNotaInfo.informacoesAdicionais,
		exportacao: _NFNotaInfo.exportacao,
		compra: _NFNotaInfo.compra,
		cana: _NFNotaInfo.cana,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfo;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoCupomFiscalReferenciado = function(
	_NFInfoCupomFiscalReferenciado, modelAction)
{

	var _id = null;
	if (_NFInfoCupomFiscalReferenciado.id == "" ||
		_NFInfoCupomFiscalReferenciado.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoCupomFiscalReferenciado = {
		id: _id,
		modeloDocumentoFiscal: _NFInfoCupomFiscalReferenciado.modeloDocumentoFiscal,
		numeroOrdemSequencialECF: _NFInfoCupomFiscalReferenciado.numeroOrdemSequencialECF,
		numeroContadorOrdemOperacao: _NFInfoCupomFiscalReferenciado.numeroContadorOrdemOperacao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFInfoCupomFiscalReferenciado;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoIdentificacao = function(_NFNotaInfoIdentificacao,
	modelAction)
{

	var _id = null;
	if (_NFNotaInfoIdentificacao.id == "" || _NFNotaInfoIdentificacao.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoIdentificacao = {
		id: _id,
		uf: _NFNotaInfoIdentificacao.uf,
		codigoRandomico: _NFNotaInfoIdentificacao.codigoRandomico,
		naturezaOperacao: _NFNotaInfoIdentificacao.naturezaOperacao,
		formaPagamento: _NFNotaInfoIdentificacao.formaPagamento,
		modelo: _NFNotaInfoIdentificacao.modelo ? qat.model.fnDoisValor(_NFNotaInfoIdentificacao.modelo, modelAction) :
		{
			id: 10
		},
		serie: _NFNotaInfoIdentificacao.serie ? qat.model.fnDoisValor(_NFNotaInfoIdentificacao.serie, modelAction) :
		{
			id: 10
		},
		numeroNota: _NFNotaInfoIdentificacao.numeroNota,
		dataHoraEmissao: _NFNotaInfoIdentificacao.dataHoraEmissao,
		dataHoraSaidaOuEntrada: _NFNotaInfoIdentificacao.dataHoraSaidaOuEntrada,
		tipo: _NFNotaInfoIdentificacao.tipo,
		identificadorLocalDestinoOperacao: _NFNotaInfoIdentificacao.identificadorLocalDestinoOperacao,
		codigoMunicipio: _NFNotaInfoIdentificacao.codigoMunicipio,
		tipoImpressao: _NFNotaInfoIdentificacao.tipoImpressao,
		tipoEmissao: _NFNotaInfoIdentificacao.tipoEmissao,
		digitoVerificador: _NFNotaInfoIdentificacao.digitoVerificador,
		ambiente: _NFNotaInfoIdentificacao.ambiente,
		finalidade: _NFNotaInfoIdentificacao.finalidade,
		operacaoConsumidorFinal: _NFNotaInfoIdentificacao.operacaoConsumidorFinal,
		indicadorPresencaComprador: _NFNotaInfoIdentificacao.indicadorPresencaComprador,
		programaEmissor: _NFNotaInfoIdentificacao.programaEmissor,
		versaoEmissor: _NFNotaInfoIdentificacao.versaoEmissor,
		dataHoraContigencia: _NFNotaInfoIdentificacao.dataHoraContigencia,
		justificativaEntradaContingencia: _NFNotaInfoIdentificacao.justificativaEntradaContingencia,
		referenciadas: _NFNotaInfoIdentificacao.referenciadas,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoIdentificacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoModelo1Por1AReferenciada = function(
	_NFInfoModelo1Por1AReferenciada, modelAction)
{

	var _id = null;
	if (_NFInfoModelo1Por1AReferenciada.id == "" ||
		_NFInfoModelo1Por1AReferenciada.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoModelo1Por1AReferenciada = {
		id: _id,
		uf: _NFInfoModelo1Por1AReferenciada.uf,
		anoMesEmissaoNFe: _NFInfoModelo1Por1AReferenciada.anoMesEmissaoNFe,
		cnpj: _NFInfoModelo1Por1AReferenciada.cnpj,
		modeloDocumentoFiscal: _NFInfoModelo1Por1AReferenciada.modeloDocumentoFiscal,
		serie: _NFInfoModelo1Por1AReferenciada.serie,
		numeroDocumentoFiscal: _NFInfoModelo1Por1AReferenciada.numeroDocumentoFiscal,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFInfoModelo1Por1AReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoReferenciada = function(_NFInfoReferenciada, modelAction)
{

	var _id = null;
	if (_NFInfoReferenciada.id == "" || _NFInfoReferenciada.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoReferenciada = {
		id: _id,
		chaveAcesso: _NFInfoReferenciada.chaveAcesso,
		modelo1por1Referenciada: _NFInfoReferenciada.modelo1por1Referenciada,
		infoNFProdutorRuralReferenciada: _NFInfoReferenciada.infoNFProdutorRuralReferenciada,
		chaveAcessoCTReferenciada: _NFInfoReferenciada.chaveAcessoCTReferenciada,
		cupomFiscalReferenciado: _NFInfoReferenciada.cupomFiscalReferenciado,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFInfoReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoProdutorRuralReferenciada = function(
	_NFInfoProdutorRuralReferenciada, modelAction)
{

	var _id = null;
	if (_NFInfoProdutorRuralReferenciada.id == "" ||
		_NFInfoProdutorRuralReferenciada.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoProdutorRuralReferenciada = {
		id: _id,
		ufEmitente: _NFInfoProdutorRuralReferenciada.ufEmitente,
		anoMesEmissao: _NFInfoProdutorRuralReferenciada.anoMesEmissao,
		cnpjEmitente: _NFInfoProdutorRuralReferenciada.cnpjEmitente,
		cpfEmitente: _NFInfoProdutorRuralReferenciada.cpfEmitente,
		ieEmitente: _NFInfoProdutorRuralReferenciada.ieEmitente,
		modeloDocumentoFiscal: _NFInfoProdutorRuralReferenciada.modeloDocumentoFiscal,
		serieDocumentoFiscal: _NFInfoProdutorRuralReferenciada.serieDocumentoFiscal,
		numeroDocumentoFiscal: _NFInfoProdutorRuralReferenciada.numeroDocumentoFiscal,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFInfoProdutorRuralReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoEmitente = function(_NFNotaInfoEmitente, modelAction)
{
	var _id = null;
	if (_NFNotaInfoEmitente.id == "" || _NFNotaInfoEmitente.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoEmitente = {
		id: _id,
		cnpj: _NFNotaInfoEmitente.cnpj,
		cpf: _NFNotaInfoEmitente.cpf,
		razaoSocial: _NFNotaInfoEmitente.razaosocial,
		nomeFantasia: _NFNotaInfoEmitente.nomefantasia,
		endereco: _NFNotaInfoEmitente.endereco,
		inscricaoEstadual: _NFNotaInfoEmitente.inscricaoestadual,
		inscricaoEstadualSubstituicaoTributaria: _NFNotaInfoEmitente.inscricaoestadualsubstituicaotributaria,
		inscricaoMunicipal: _NFNotaInfoEmitente.inscricaomunicipal,
		classificacaoNacionalAtividadesEconomicas: _NFNotaInfoEmitente.classificacaonacionalatividadeseconomicas,
		regimeTributario: _NFNotaInfoEmitente.regimetributario,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoEmitente;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoAvulsa = function(_NFNotaInfoAvulsa, modelAction)
{

	var _id = null;
	if (_NFNotaInfoAvulsa.id == "" || _NFNotaInfoAvulsa.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoAvulsa = {
		id: _id,
		cnpj: _NFNotaInfoAvulsa.cnpj,
		orgaoEmitente: _NFNotaInfoAvulsa.orgaoEmitente,
		matriculaAgente: _NFNotaInfoAvulsa.matriculaAgente,
		nomeAgente: _NFNotaInfoAvulsa.nomeAgente,
		fone: _NFNotaInfoAvulsa.fone,
		uf: _NFNotaInfoAvulsa.uf,
		numeroDocumentoArrecadacaoReceita: _NFNotaInfoAvulsa.numeroDocumentoArrecadacaoReceita,
		dataEmissaoDocumentoArrecadacao: _NFNotaInfoAvulsa.dataEmissaoDocumentoArrecadacao,
		valorTotalConstanteDocumentoArrecadacaoReceita: _NFNotaInfoAvulsa.valorTotalConstanteDocumentoArrecadacaoReceita,
		reparticaoFiscalEmitente: _NFNotaInfoAvulsa.reparticaoFiscalEmitente,
		dataPagamentoDocumentoArrecadacao: _NFNotaInfoAvulsa.dataPagamentoDocumentoArrecadacao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoAvulsa;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoDestinatario = function(_NFNotaInfoDestinatario,
	modelAction)
{

	var _id = null;
	if (_NFNotaInfoDestinatario.id == "" || _NFNotaInfoDestinatario.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoDestinatario = {
		id: _id,
		cnpj: _NFNotaInfoDestinatario.cnpj,
		cpf: _NFNotaInfoDestinatario.cpf,
		idEstrangeiro: _NFNotaInfoDestinatario.idEstrangeiro,
		razaoSocial: _NFNotaInfoDestinatario.razaoSocial,
		endereco: _NFNotaInfoDestinatario.endereco,
		indicadorIEDestinatario: _NFNotaInfoDestinatario.indicadorIEDestinatario,
		inscricaoEstadual: _NFNotaInfoDestinatario.inscricaoEstadual,
		inscricaoSuframa: _NFNotaInfoDestinatario.inscricaoSuframa,
		inscricaoMunicipal: _NFNotaInfoDestinatario.inscricaoMunicipal,
		email: _NFNotaInfoDestinatario.email,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoDestinatario;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoLocal = function(_NFNotaInfoLocal, modelAction)
{

	var _id = null;
	if (_NFNotaInfoLocal.id == "" || _NFNotaInfoLocal.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoLocal = {
		id: _id,
		cnpj: _NFNotaInfoLocal.cnpj,
		cpf: _NFNotaInfoLocal.cpf,
		logradouro: _NFNotaInfoLocal.logradouro,
		numero: _NFNotaInfoLocal.numero,
		complemento: _NFNotaInfoLocal.complemento,
		bairro: _NFNotaInfoLocal.bairro,
		codigoMunicipio: _NFNotaInfoLocal.codigoMunicipio,
		nomeMunicipio: _NFNotaInfoLocal.nomeMunicipio,
		uf: _NFNotaInfoLocal.uf,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoLocal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFPessoaAutorizadaDownloadNFe = function(
	_NFPessoaAutorizadaDownloadNFe, modelAction)
{

	var _id = null;
	if (_NFPessoaAutorizadaDownloadNFe.id == "" ||
		_NFPessoaAutorizadaDownloadNFe.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFPessoaAutorizadaDownloadNFe = {
		id: _id,
		cnpj: _NFPessoaAutorizadaDownloadNFe.cnpj,
		cpf: _NFPessoaAutorizadaDownloadNFe.cpf,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFPessoaAutorizadaDownloadNFe;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTotal = function(_NFNotaInfoTotal, modelAction, _user)
{

	var _id = null;
	if (_NFNotaInfoTotal && (_NFNotaInfoTotal.id == "" || _NFNotaInfoTotal.id == " "))
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTotal = {
		id: _id,
		icmsTotal: _NFNotaInfoTotal.icmsTotal ? qat.model.fnNFNotaInfoICMSTotal(_NFNotaInfoTotal.icmsTotal, modelAction, _user) :
		{},
		issqnTotal: _NFNotaInfoTotal.issqnTotal ? qat.model.fnNFNotaInfoISSQNTotal(_NFNotaInfoTotal.issqnTotal, modelAction, _user) :
		{},
		retencoesTributos: _NFNotaInfoTotal.retencoesTributos ? qat.model.fnNFNotaInfoRetencoesTributos(_NFNotaInfoTotal.retencoesTributos, modelAction, _user) :
		{},
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoICMSTotal = function(_NFNotaInfoICMSTotal, modelAction, _user)
{

	var _id = null;
	if (_NFNotaInfoICMSTotal.id == "" || _NFNotaInfoICMSTotal.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoICMSTotal = {
		id: _id,
		baseCalculoICMS: _NFNotaInfoICMSTotal.baseCalculoICMS,
		valorTotalICMS: _NFNotaInfoICMSTotal.valorTotalICMS,
		valorICMSDesonerado: _NFNotaInfoICMSTotal.valorICMSDesonerado,
		valorICMSFundoCombatePobreza: _NFNotaInfoICMSTotal.valorICMSFundoCombatePobreza,
		valorICMSPartilhaDestinatario: _NFNotaInfoICMSTotal.valorICMSPartilhaDestinatario,
		valorICMSPartilhaRementente: _NFNotaInfoICMSTotal.valorICMSPartilhaRementente,
		baseCalculoICMSST: _NFNotaInfoICMSTotal.baseCalculoICMSST,
		valorTotalICMSST: _NFNotaInfoICMSTotal.valorTotalICMSST,
		valorTotalDosProdutosServicos: _NFNotaInfoICMSTotal.valorTotalDosProdutosServicos,
		valorTotalFrete: _NFNotaInfoICMSTotal.valorTotalFrete,
		valorTotalSeguro: _NFNotaInfoICMSTotal.valorTotalSeguro,
		valorTotalDesconto: _NFNotaInfoICMSTotal.valorTotalDesconto,
		valorTotalII: _NFNotaInfoICMSTotal.valorTotalII,
		valorTotalIPI: _NFNotaInfoICMSTotal.valorTotalIPI,
		valorPIS: _NFNotaInfoICMSTotal.valorPIS,
		valorCOFINS: _NFNotaInfoICMSTotal.valorCOFINS,
		outrasDespesasAcessorias: _NFNotaInfoICMSTotal.outrasDespesasAcessorias,
		valorTotalNFe: _NFNotaInfoICMSTotal.valorTotalNFe,
		valorTotalTributos: _NFNotaInfoICMSTotal.valorTotalTributos,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoICMSTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoISSQNTotal = function(_NFNotaInfoISSQNTotal, modelAction)
{

	var _id = null;
	if (_NFNotaInfoISSQNTotal.id == "" || _NFNotaInfoISSQNTotal.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoISSQNTotal = {
		id: _id,
		valorTotalServicosSobNaoIncidenciaNaoTributadosICMS: _NFNotaInfoISSQNTotal.valorTotalServicosSobNaoIncidenciaNaoTributadosICMS,
		baseCalculoISS: _NFNotaInfoISSQNTotal.baseCalculoISS,
		valorTotalISS: _NFNotaInfoISSQNTotal.valorTotalISS,
		valorPISsobreServicos: _NFNotaInfoISSQNTotal.valorPISsobreServicos,
		valorCOFINSsobreServicos: _NFNotaInfoISSQNTotal.valorCOFINSsobreServicos,
		dataPrestacaoServico: _NFNotaInfoISSQNTotal.dataPrestacaoServico,
		valorDeducao: _NFNotaInfoISSQNTotal.valorDeducao,
		valorOutros: _NFNotaInfoISSQNTotal.valorOutros,
		valorTotalDescontoIncondicionado: _NFNotaInfoISSQNTotal.valorTotalDescontoIncondicionado,
		valorTotalDescontoCondicionado: _NFNotaInfoISSQNTotal.valorTotalDescontoCondicionado,
		valorTotalRetencaoISS: _NFNotaInfoISSQNTotal.valorTotalRetencaoISS,
		tributacao: _NFNotaInfoISSQNTotal.tributacao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoISSQNTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoRetencoesTributos = function(
	_NFNotaInfoRetencoesTributos, modelAction, _user)
{

	var _id = null;
	if (_NFNotaInfoRetencoesTributos.id == "" ||
		_NFNotaInfoRetencoesTributos.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoRetencoesTributos = {
		id: _id,
		valorRetidoPIS: _NFNotaInfoRetencoesTributos.valorRetidoPIS,
		valorRetidoCOFINS: _NFNotaInfoRetencoesTributos.valorRetidoCOFINS,
		valorRetidoCSLL: _NFNotaInfoRetencoesTributos.valorRetidoCSLL,
		baseCalculoIRRF: _NFNotaInfoRetencoesTributos.baseCalculoIRRF,
		valorRetidoIRRF: _NFNotaInfoRetencoesTributos.valorRetidoIRRF,
		baseCalculoRetencaoPrevidenciaSocial: _NFNotaInfoRetencoesTributos.baseCalculoRetencaoPrevidenciaSocial,
		valorRetencaoPrevidenciaSocial: _NFNotaInfoRetencoesTributos.valorRetencaoPrevidenciaSocial,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: _user,
		createDateUTC: (new Date()).getTime(),
		modifyUser: _user,
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoRetencoesTributos;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTransporte = function(_NFNotaInfoTransporte, modelAction)
{

	var _id = null;
	if (_NFNotaInfoTransporte.id == "" || _NFNotaInfoTransporte.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTransporte = {
		id: _id,
		modalidadeFrete: _NFNotaInfoTransporte.modalidadeFrete,
		transportador: _NFNotaInfoTransporte.transportador,
		icmsTransporte: _NFNotaInfoTransporte.icmsTransporte,
		veiculo: _NFNotaInfoTransporte.veiculo,
		reboques: _NFNotaInfoTransporte.reboques,
		vagao: _NFNotaInfoTransporte.vagao,
		balsa: _NFNotaInfoTransporte.balsa,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoTransporte;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoRetencaoICMSTransporte = function(
	_NFNotaInfoRetencaoICMSTransporte, modelAction)
{

	var _id = null;
	if (_NFNotaInfoRetencaoICMSTransporte.id == "" ||
		_NFNotaInfoRetencaoICMSTransporte.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoRetencaoICMSTransporte = {
		id: _id,
		valorServico: _NFNotaInfoRetencaoICMSTransporte.valorServico,
		bcRetencaoICMS: _NFNotaInfoRetencaoICMSTransporte.bcRetencaoICMS,
		aliquotaRetencao: _NFNotaInfoRetencaoICMSTransporte.aliquotaRetencao,
		valorICMSRetido: _NFNotaInfoRetencaoICMSTransporte.valorICMSRetido,
		cfop: _NFNotaInfoRetencaoICMSTransporte.cfop,
		codigoMunicipioOcorrenciaFatoGeradorICMSTransporte: _NFNotaInfoRetencaoICMSTransporte.codigoMunicipioOcorrenciaFatoGeradorICMSTransporte,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoRetencaoICMSTransporte;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTransportador = function(_NFNotaInfoTransportador,
	modelAction)
{

	var _id = null;
	if (_NFNotaInfoTransportador.id == "" || _NFNotaInfoTransportador.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTransportador = {
		id: _id,
		cnpj: _NFNotaInfoTransportador.cnpj,
		cpf: _NFNotaInfoTransportador.cpf,
		razaoSocial: _NFNotaInfoTransportador.razaoSocial,
		inscricaoEstadual: _NFNotaInfoTransportador.inscricaoEstadual,
		enderecoComplemento: _NFNotaInfoTransportador.enderecoComplemento,
		nomeMunicipio: _NFNotaInfoTransportador.nomeMunicipio,
		uf: _NFNotaInfoTransportador.uf,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoTransportador;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoVeiculo = function(_NFNotaInfoVeiculo, modelAction)
{

	var _id = null;
	if (_NFNotaInfoVeiculo.id == "" || _NFNotaInfoVeiculo.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoVeiculo = {
		id: _id,
		placaVeiculo: _NFNotaInfoVeiculo.placaVeiculo,
		uf: _NFNotaInfoVeiculo.uf,
		registroNacionalTransportadorCarga: _NFNotaInfoVeiculo.registroNacionalTransportadorCarga,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoVeiculo;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoReboque = function(_NFNotaInfoReboque, modelAction)
{

	var _id = null;
	if (_NFNotaInfoReboque.id == "" || _NFNotaInfoReboque.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoReboque = {
		id: _id,
		placaVeiculo: _NFNotaInfoReboque.placaVeiculo,
		uf: _NFNotaInfoReboque.uf,
		registroNacionalTransportadorCarga: _NFNotaInfoReboque.registroNacionalTransportadorCarga,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoReboque;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCobranca = function(_NFNotaInfoCobranca, modelAction)
{

	var _id = null;
	if (_NFNotaInfoCobranca.id == "" || _NFNotaInfoCobranca.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCobranca = {
		id: _id,
		fatura: _NFNotaInfoCobranca.fatura,
		duplicatas: _NFNotaInfoCobranca.duplicatas,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCobranca;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoDuplicata = function(_NFNotaInfoDuplicata, modelAction)
{

	var _id = null;
	if (_NFNotaInfoDuplicata.id == "" || _NFNotaInfoDuplicata.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoDuplicata = {
		id: _id,
		numeroDuplicata: _NFNotaInfoDuplicata.numeroDuplicata,
		dataVencimento: _NFNotaInfoDuplicata.dataVencimento,
		valorDuplicata: _NFNotaInfoDuplicata.valorDuplicata,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoDuplicata;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoFatura = function(_NFNotaInfoFatura, modelAction)
{

	var _id = null;
	if (_NFNotaInfoFatura.id == "" || _NFNotaInfoFatura.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoFatura = {
		id: _id,
		numeroFatura: _NFNotaInfoFatura.numeroFatura,
		valorOriginalFatura: _NFNotaInfoFatura.valorOriginalFatura,
		valorDesconto: _NFNotaInfoFatura.valorDesconto,
		valorLiquidoFatura: _NFNotaInfoFatura.valorLiquidoFatura,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoFatura;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCartao = function(_NFNotaInfoCartao, modelAction)
{

	var _id = null;
	if (_NFNotaInfoCartao.id == "" || _NFNotaInfoCartao.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCartao = {
		id: _id,
		tipoIntegracao: _NFNotaInfoCartao.tipoIntegracao,
		cnpj: _NFNotaInfoCartao.cnpj,
		operadoraCartao: _NFNotaInfoCartao.operadoraCartao,
		numeroAutorizacaoOperacaoCartao: _NFNotaInfoCartao.numeroAutorizacaoOperacaoCartao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCartao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoPagamento = function(_NFNotaInfoPagamento, modelAction)
{

	var _id = null;
	if (_NFNotaInfoPagamento.id == "" || _NFNotaInfoPagamento.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoPagamento = {
		id: _id,
		formaPagamentoMoeda: _NFNotaInfoPagamento.formaPagamentoMoeda,
		valorPagamento: _NFNotaInfoPagamento.valorPagamento,
		cartao: _NFNotaInfoPagamento.cartao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoPagamento;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoInformacoesAdicionais = function(
	_NFNotaInfoInformacoesAdicionais, modelAction)
{

	var _id = null;
	if (_NFNotaInfoInformacoesAdicionais.id == "" ||
		_NFNotaInfoInformacoesAdicionais.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoInformacoesAdicionais = {
		id: _id,
		informacoesAdicionaisInteresseFisco: _NFNotaInfoInformacoesAdicionais.informacoesAdicionaisInteresseFisco,
		informacoesComplementaresInteresseContribuinte: _NFNotaInfoInformacoesAdicionais.informacoesComplementaresInteresseContribuinte,
		observacoesContribuinte: _NFNotaInfoInformacoesAdicionais.observacoesContribuinte,
		observacoesFisco: _NFNotaInfoInformacoesAdicionais.observacoesFisco,
		processosRefenciado: _NFNotaInfoInformacoesAdicionais.processosRefenciado,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoInformacoesAdicionais;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoObservacao = function(_NFNotaInfoObservacao, modelAction)
{

	var _id = null;
	if (_NFNotaInfoObservacao.id == "" || _NFNotaInfoObservacao.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoObservacao = {
		id: _id,
		identificacaoCampo: _NFNotaInfoObservacao.identificacaoCampo,
		conteudoCampo: _NFNotaInfoObservacao.conteudoCampo,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoObservacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoProcessoReferenciado = function(
	_NFNotaInfoProcessoReferenciado, modelAction)
{

	var _id = null;
	if (_NFNotaInfoProcessoReferenciado.id == "" ||
		_NFNotaInfoProcessoReferenciado.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoProcessoReferenciado = {
		id: _id,
		identificadorProcessoOuAtoConcessorio: _NFNotaInfoProcessoReferenciado.identificadorProcessoOuAtoConcessorio,
		indicadorOrigemProcesso: _NFNotaInfoProcessoReferenciado.indicadorOrigemProcesso,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoProcessoReferenciado;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoExportacao = function(_NFNotaInfoExportacao, modelAction)
{

	var _id = null;
	if (_NFNotaInfoExportacao.id == "" || _NFNotaInfoExportacao.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoExportacao = {
		id: _id,
		ufEmbarqueProduto: _NFNotaInfoExportacao.ufEmbarqueProduto,
		localEmbarqueProdutos: _NFNotaInfoExportacao.localEmbarqueProdutos,
		localDespachoProdutos: _NFNotaInfoExportacao.localDespachoProdutos,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoExportacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCompra = function(_NFNotaInfoCompra, modelAction)
{

	var _id = null;
	if (_NFNotaInfoCompra.id == "" || _NFNotaInfoCompra.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCompra = {
		id: _id,
		notaDeEmpenho: _NFNotaInfoCompra.notaDeEmpenho,
		pedido: _NFNotaInfoCompra.pedido,
		contrato: _NFNotaInfoCompra.contrato,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCompra;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCana = function(_NFNotaInfoCana, modelAction)
{

	var _id = null;
	if (_NFNotaInfoCana.id == "" || _NFNotaInfoCana.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCana = {
		id: _id,
		safra: _NFNotaInfoCana.safra,
		referencia: _NFNotaInfoCana.referencia,
		fornecimentosDiario: _NFNotaInfoCana.fornecimentosDiario,
		deducoes: _NFNotaInfoCana.deducoes,
		quantidadeTotalMes: _NFNotaInfoCana.quantidadeTotalMes,
		quantidadeTotalAnterior: _NFNotaInfoCana.quantidadeTotalAnterior,
		quantidadeTotalGeral: _NFNotaInfoCana.quantidadeTotalGeral,
		valorFornecimento: _NFNotaInfoCana.valorFornecimento,
		valorTotalDeducao: _NFNotaInfoCana.valorTotalDeducao,
		valorLiquidoFornecimento: _NFNotaInfoCana.valorLiquidoFornecimento,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCana;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCanaFornecimentoDiario = function(
	_NFNotaInfoCanaFornecimentoDiario, modelAction)
{

	var _id = null;
	if (_NFNotaInfoCanaFornecimentoDiario.id == "" ||
		_NFNotaInfoCanaFornecimentoDiario.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCanaFornecimentoDiario = {
		id: _id,
		dia: _NFNotaInfoCanaFornecimentoDiario.dia,
		quantidade: _NFNotaInfoCanaFornecimentoDiario.quantidade,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCanaFornecimentoDiario;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCanaDeducao = function(_NFNotaInfoCanaDeducao,
	modelAction)
{

	var _id = null;
	if (_NFNotaInfoCanaDeducao.id == "" || _NFNotaInfoCanaDeducao.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCanaDeducao = {
		id: _id,
		descricaoDeducao: _NFNotaInfoCanaDeducao.descricaoDeducao,
		valorDeducao: _NFNotaInfoCanaDeducao.valorDeducao,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}
	return NFNotaInfoCanaDeducao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoSuplementar = function(_NFNotaInfoSuplementar,
	modelAction)
{

	var _id = null;
	if (_NFNotaInfoSuplementar.id == "" || _NFNotaInfoSuplementar.id == " ")
	{
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null ||
		localStorage.getItem('empresa') == '')
	{
		_emprId = null;
	}
	else
	{
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoSuplementar = {
		id: _id,
		qrCode: _NFNotaInfoSuplementar.qrCode,
		parentId: 0,
		emprId: _emprId,
		processId: 0,
		tableEnumValue: 0,
		modelAction: modelAction,
		createUser: "System",
		createDateUTC: (new Date()).getTime(),
		modifyUser: "System",
		modifyDateUTC: (new Date()).getTime()

	}

	return NFNotaInfoSuplementar;
}