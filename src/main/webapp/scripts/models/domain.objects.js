/**
 * Initialize the main namespaces and constants.
 */

var qat = {
	model : {
		select : {},
		dialog : {}
	},
	base : {
		model : {}
	}
};

//County Object
qat.model.county = function(_countyId, _countyDesc) {
	this.id = _countyId;
	this.cfop = _countyDesc;
};

//Procedure Object
qat.model.procedure = function(_procId, _procCode, _procDesc, _procPrice,
		_version) {
	this.id = _procId;
	this.code = _procCode;
	this.description = _procDesc;
	this.price = _procPrice;
	this.version = _version;
};

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Servico Object
qat.model.Servico = function(_oObjet) {
	this.id = _oObjet.id;
	this.nome = _oObjet.nome;
	this.descricao = _oObjet.descricao;
	this.preco = _oObjet.preco;
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//ServicoByPlano Object
qat.model.ServicoByPlano = function(_oObjet) {
	this.id = _oObjet.id;
	this.parentId = _oObjet.parentId;
	this.servico = _oObjet.servico;
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Site Object
qat.model.Site = function(_oObjet) {
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
	this.parentId = _oObjet.parentId;
	this.empresa = _oObjet.empresa;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem';//'sysrem';//'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Contato Object
qat.model.Contato = function(_oObjet) {
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
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//ContatoItens Object
qat.model.ContatoItens = function(_oObjet) {
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
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//OrdemServico Object
qat.model.OrdemServico = function(_oObjet) {
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
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//OrdemServicoItens Object
qat.model.OrdemServicoItens = function(_oObjet) {
	this.id = _oObjet.id;
	this.data = _oObjet.data;
	this.texto = _oObjet.texto;
	this.parentId = _oObjet.parentId;
	this.parentId = _oObjet.parentId;
	this.emprId = _oObjet.emprId;
	this.processId = _oObjet.processId;
	this.tableEnumValue = _oObjet.tableEnumValue;
	this.modelAction = _oObjet.modelAction;
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 19/05/2016 15:9 : 2*/

//Plano Object
qat.model.Plano = function(_oObjet) {
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
	this.createUser = 'sysrem';//$rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = 'sysrem';//$rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

qat.model.transaction = function(_user, _token, modelAction) {

	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return {

		token : _token,
		inicioSession : (new Date()).getTime(),
		userId : _user,
		emprId : _emprId,
		modelAction : modelAction,
		createUser : _user,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _user,
		modifyDateUTC : (new Date()).getTime(),

	}
}

qat.model.fnCnae = function(_oObjet) {
	return idCnae = {

		id : _oObjet.id,
		modelAction : _oObjet.modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),

	}

}
qat.model.fnRegime = function(_oObjet, modelAction) {
	return regime = {

		id : _oObjet.id,
		nome : _oObjet.nome,
		descricao : _oObjet.descricao,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),

	}

}

qat.model.fnCnaeEmpresa = function(_oObjet) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return cnaes = {
		idCnae : _oObjet,
		emprId : _emprId,
		modelAction : "INSERT",
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),
	}
}

qat.model.fnFormaReceber = function(_oObjet, _action) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var _fornecedor = {};
	if (_oObjet.cliente) {
		if (_oObjet.cliente.description) {
			_fornecedor = _oObjet.cliente.description
		} else if (_oObjet.cliente.id) {
			_fornecedor = _oObjet.cliente;
		}
	}
	return cnaes = {
		id : _oObjet.id ? _oObjet.id : null,
		descricao : _oObjet.descricao,
		numero : _oObjet.numero,
		cliente : _fornecedor,
		parcela : _oObjet.parcela,
		formapg : _oObjet.formapg ? {
			id : _oObjet.formapg ? _oObjet.formapg.id : null
		} : null,
		dataEmissao : _oObjet.dataEmissao ? new Date(_oObjet.dataEmissao)
				.getTime() : null,
		dataVencimento : _oObjet.dataVencimento ? new Date(
				_oObjet.dataVencimento).getTime() : null,
		dataPagamento : _oObjet.dataPagamento ? new Date(_oObjet.dataPagamento)
				.getTime() : null,
		docId : _oObjet.docId,
		tipoDoc : _oObjet.tipoDoc ? qat.model.fnDoisValor(
				_oObjet.tipoDoc ? _oObjet.tipoDoc : {}, _action) : null,
		formaCadastro : _oObjet.formaCadastro ? qat.model.fnDoisValor(
				_oObjet.formaCadastro ? _oObjet.formaCadastro : {}, _action)
				: null,
		intervalo : _oObjet.intervalo ? qat.model.fnDoisValor(
				_oObjet.intervalo ? _oObjet.intervalo : {}, _action) : null,
		categoria : _oObjet.categoria ? qat.model.fnDoisValor(
				_oObjet.categoria ? _oObjet.categoria : {}, _action) : null,
		situacao : _oObjet.situacao ? qat.model.fnDoisValor(
				_oObjet.situacao ? _oObjet.situacao : {}, _action) : null,
		listBaixa : _oObjet.listBaixa[0] ? [ qat.model.fnBaixaTitulo(
				_oObjet.listBaixa[0], _action) ] : [],
		observacao : _oObjet.observacao,
		valor : _oObjet.valor,
		financeiroEnum : _oObjet.financeiroEnum,
		emprId : _emprId,
		modelAction : _action,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),
	}
}

qat.model.fnFormaPagar = function(_oObjet, _action) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var _fornecedor = {};
	if (_oObjet.fornecedor) {
		if (_oObjet.fornecedor.description) {
			_fornecedor = _oObjet.fornecedor.description
		} else if (_oObjet.fornecedor.id) {
			_fornecedor = _oObjet.fornecedor;
		}
	}
	return cnaes = {
		id : _oObjet.id ? _oObjet.id : null,
		descricao : _oObjet.descricao,
		numero : _oObjet.numero,
		fornecedor : _fornecedor,
		parcela : _oObjet.parcela,
		formapg : _oObjet.formapg ? {
			id : _oObjet.formapg ? _oObjet.formapg.id : null
		} : null,
		dataEmissao : _oObjet.dataEmissao ? new Date(_oObjet.dataEmissao)
				.getTime() : null,
		dataVencimento : _oObjet.dataVencimento ? new Date(
				_oObjet.dataVencimento).getTime() : null,
		dataPagamento : _oObjet.dataPagamento ? new Date(_oObjet.dataPagamento)
				.getTime() : null,
		docId : _oObjet.docId,
		tipoDoc : _oObjet.tipoDoc ? qat.model.fnDoisValor(
				_oObjet.tipoDoc ? _oObjet.tipoDoc : {}, _action) : null,
		formaCadastro : _oObjet.formaCadastro ? qat.model.fnDoisValor(
				_oObjet.formaCadastro ? _oObjet.formaCadastro : {}, _action)
				: null,
		intervalo : _oObjet.intervalo ? qat.model.fnDoisValor(
				_oObjet.intervalo ? _oObjet.intervalo : {}, _action) : null,
		categoria : _oObjet.categoria ? qat.model.fnDoisValor(
				_oObjet.categoria ? _oObjet.categoria : {}, _action) : null,
		situacao : _oObjet.situacao ? qat.model.fnDoisValor(
				_oObjet.situacao ? _oObjet.situacao : {}, _action) : null,
		listBaixa : _oObjet.listBaixa[0] ? [ qat.model.fnBaixaTitulo(
				_oObjet.listBaixa[0], _action) ] : [],
		observacao : _oObjet.observacao,
		valor : _oObjet.valor,
		financeiroEnum : _oObjet.financeiroEnum,
		emprId : _emprId,
		modelAction : _action,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),
	}
}

qat.model.fnBaixaTitulo = function(_oObjet, _action) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	return cnaes = {

		id : _oObjet.id,
		finanId : _oObjet.finanId,
		dataBaixa : _oObjet.dataBaixa,
		observacao : _oObjet.observacao,
		valor : _oObjet.valor,
		juros : _oObjet.juros,
		multa : _oObjet.multa,
		desconto : _oObjet.desconto,
		conta : {
			id : _oObjet.conta ? _oObjet.conta.id : null
		},
		emprId : _emprId,
		modelAction : _action,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),
	}
}

qat.model.fnNote = function(_oObjet) {
	return note = {
		id : _oObjet.id,
		noteText : _oObjet.noteText,
		parentId : JSON.parse(localStorage.getItem('empresa')).id,
		tabelaEnumValue : _oObjet.tabelaEnumValue,
		modelAction : "NONE",
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime(),
	}
}

qat.model.fnDoisValores = function(id, _value, _nome, _tabela, modelAction,_user,_descricao,_type,_page) {

	telefones = {
		id : id,
		value : _value,
		descricao : _descricao,
		nome : _nome,
		parentId : 0,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		processId : 0,
		doisValorType :{id : _type},
		pagina : { id : _page},
		modelAction : 0,
		modelAction : modelAction,
		createUser : _user,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _user,
		modifyDateUTC : (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnDoisValor = function(_oObjet, modelAction) {

	telefones = {
		id : _oObjet.id,
	}

	return telefones;
}

qat.model.fnPreco = function(id, _value, _tabela, modelAction) {

	telefones = {
		id : id,
		valor : _value,
		precoTypeEnumValue : 5,
		parentId : 0,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		processId : 0,
		tabelaEnumValue : _tabela,
		modelAction : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnTelefones = function(_telefone, modelAction) {
	var _id = null;
	if (_telefone.id == "" || _telefone.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	telefones = {
		id : _id,
		typeValue : _telefone.typeValue,
		ddd : '',
		numero : _telefone.numero,
		telefoneTypeEnumValue : _telefone.telefoneTypeEnumValue,
		parentId : 0,
		emprId : 0,
		processId : 0,
		tableEnumValue : 0,
		modelAction : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()
	}

	return telefones;
}

qat.model.fnEmails = function(_email, modelAction) {

	var _id = null;
	if (_email.id == "" || _email.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	emails = {
		id : _id,
		typeValue : 0,
		email : _email.email,
		emailTypeEnumValue : _email.emailTypeEnumValue,
		parentId : 0,
		emprId : 0,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return emails;
}

qat.model.fnSocios = function(_cota, _por, _adm, _nome, _cpf, id, type,
		modelAction) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	socio = {
		id : id,
		pessoa : {
			nome : _nome,
			pessoaTypeEnumValue : 6,
			documentos : [ {
				documentoTypeEnumValue : 2,
				numero : _cpf
			} ],
			emprId : _emprId,
			modelAction : modelAction,
			createUser : "System",
			createDateUTC : (new Date()).getTime(),
			modifyUser : "System",
			modifyDateUTC : (new Date()).getTime()
		},
		porcentagem : _por,
		socioAdm : _adm,
		parentId : 0,
		emprId : 0,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return socio;
}

qat.model.fnPlanoByServico = function(_id, _modelAction) {
	emails = {
		typeValue : 0,
		servico : {
			id : _id
		},
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return emails;
}

qat.model.fnDoisValoress = function(_DoisValores, _modelAction) {
	doisValores = {
		id : _DoisValores.id,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return doisValores;
}

qat.model.fnNFNotaInfoItemImpostoIPI = function(_Ipi, _modelAction) {
	NFNotaInfoItemImpostoIPI = {
		id : _Ipi.id,
		classeEnquadramento : _Ipi.classeEnquadramento,
		cnpjProdutor : _Ipi.cnpjProdutor,
		codigoSelo : _Ipi.codigoSelo,
		quantidadeSelo : _Ipi.quantidadeSelo,
		codigoEnquadramento : _Ipi.codigoEnquadramento,
		tributado : _Ipi.tributado,
		naoTributado : _Ipi.naoTributado,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIPI;
}

qat.model.fnNFNotaInfoItemImpostoPIS = function(_Pis, _modelAction) {
	NFNotaInfoItemImpostoIPI = {
		id : _Pis.id,
		aliquota : _Pis.aliquota,
		quantidade : _Pis.quantidade,
		naoTributado : _Pis.naoTributado,
		outrasOperacoes : _Pis.outrasOperacoes,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIPI;
}

qat.model.fnNFNotaInfoItemImpostoCOFINS = function(_Cofins, _modelAction) {
	NFNotaInfoItemImpostoCOFINS = {
		id : _Cofins.id,
		aliquota : _Cofins.aliquota,
		quantidade : _Cofins.quantidade,
		naoTributado : _Cofins.naoTributado,
		outrasOperacoes : _Cofins.outrasOperacoes,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoCOFINS;
}

qat.model.fnNFNotaInfoItemImpostoIcmsUfDest = function(_IcmsUfDest,
		_modelAction) {
	NFNotaInfoItemImpostoIcmsUfDest = {
		id : _IcmsUfDest.id,
		valorBaseCalculoDestino : _IcmsUfDest.valorBaseCalculoDestino,
		percentualRelativoFundoCombatePobrezaDestino : _IcmsUfDest.percentualRelativoFundoCombatePobrezaDestino,
		percentualAliquotaInternaDestino : _IcmsUfDest.percentualAliquotaInternaDestino,
		percentualInterestadual : _IcmsUfDest.percentualInterestadual.value,
		percentualProvisorioPartilha : _IcmsUfDest.percentualProvisorioPartilha.value,
		valorRelativoFundoCombatePobrezaDestino : _IcmsUfDest.valorRelativoFundoCombatePobrezaDestino,
		valorICMSInterestadualDestino : _IcmsUfDest.valorICMSInterestadualDestino,
		valorICMSInterestadualRemetente : _IcmsUfDest.valorICMSInterestadualRemetente,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoItemImpostoIcmsUfDest;
}

qat.model.fnNFNotaInfoItemImpostoICMS = function(_NFNotaInfoItemImpostoICMS,
		_modelAction) {
	notaInfoItemImpostoICMS = {
		id : _NFNotaInfoItemImpostoICMS.id,
		icms00 : _NFNotaInfoItemImpostoICMS.icms00,
		icms10 : _NFNotaInfoItemImpostoICMS.icms10,
		icms20 : _NFNotaInfoItemImpostoICMS.icms20,
		icms30 : _NFNotaInfoItemImpostoICMS.icms30,
		icms40 : _NFNotaInfoItemImpostoICMS.icms40,
		icms51 : _NFNotaInfoItemImpostoICMS.icms51,
		icms60 : _NFNotaInfoItemImpostoICMS.icms60,
		icms70 : _NFNotaInfoItemImpostoICMS.icms70,
		icms90 : _NFNotaInfoItemImpostoICMS.icms90,
		icmsPartilhado : _NFNotaInfoItemImpostoICMS.icmsPartilhado,
		icmsst : _NFNotaInfoItemImpostoICMS.icmsst,
		icmssn101 : _NFNotaInfoItemImpostoICMS.icmssn101,
		icmssn102 : _NFNotaInfoItemImpostoICMS.icmssn102,
		icmssn201 : _NFNotaInfoItemImpostoICMS.icmssn201,
		icmssn202 : _NFNotaInfoItemImpostoICMS.icmssn202,
		icmssn500 : _NFNotaInfoItemImpostoICMS.icmssn500,
		icmssn900 : _NFNotaInfoItemImpostoICMS.icmssn900,
		emprId : JSON.parse(localStorage.getItem('empresa')).id,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return notaInfoItemImpostoICMS;
}

qat.model.fnPlanoByEmpresa = function(_Valor, _planoServicoId, _type,
		_modelAction) {
	PlanoByEmpresa = {
		numContrato : null,
		valor : _Valor,
		dataInicio : (new Date()).getTime(),
		planoServicoList : _planoServicoId,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()
	}
	return PlanoByEmpresa;
}

qat.model.fnServicoAndPlano = function(_campo, _modelAction) {

	return {
		id : _campo.id,
		numContrato : _campo.numContrato,
		valor : _campo.valor,
		dataInicio : (new Date()).getTime(),
		dataFim : _campo.dataFim,
		planoServicoList : _campo.planoServicoList,
		tableEnumValue : 53,
		modelAction : _modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()
	};

}

qat.model.fnProduto = function(_produto, _modelAction, _userId) {
	//////debugger
	var _id = null;
	if (_produto.id != "" || _produto.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	produto = {
		id : _id,
		ncm : _produto.ncm,
		cdBarras : _produto.cdBarras,
		dataCreate : _produto.dataCreate,
		//    produto        :_produto.produto,
		excTabIPI : _produto.excTabIPI,
		cEST : _produto.cEST,
		quant : _produto.quant,
		uniMed : _produto.uniMed,
		marca : _produto.marca,
		parentId : 0,
		emprId : _emprId,
		prodId : _produto.prodId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	return produto;
}

qat.model.fnTributacao = function(_tributacao, _modelAction, _userId) {
	var _id = null;
	if (_tributacao.id == "" || _tributacao.id == " ") {
		_id = null;
	} else {
		_id = _tributacao.id;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	tributacao = {
		id : _id,
		prodId : _tributacao.prodId,
		//    cfop           :  qat.model.fnCfop(_tributacao.cfop,_modelAction,_userId),
		icms : _tributacao.icms,
		pis : _tributacao.pis,
		cofins : _tributacao.cofins,
		ipi : _tributacao.ipi,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return tributacao;
}

qat.model.fnPessoaTipo = function(_pessoaTypeEnum, _modelAction, _userId) {
	var _id = null;

	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	tributacao = {
		id : _id,
		pessoaTypeEnum : _pessoaTypeEnum,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return tributacao;
}

qat.model.fnEstoque = function(_estoque, _modelAction, _userId) {
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id : _id,
		estoqueTypeEnumValue : _estoque.estoqueTypeEnumValue,
		ultimoMov : _estoque.ultimoMov,
		quant : _estoque.quant,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnDocumento = function(_documento, _modelAction, _userId) {
	var _id = null;
	if (_documento.id == "" || _documento.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	estoque = {
		id : _id,
		documentoType : _documento.documentoType,
		data : _documento.data,
		estado : _documento.estado,
		documentoTypeEnumValue : _documento.documentoTypeEnumValue,
		numero : _documento.numero,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnPrecoProd = function(_estoque, _modelAction, _userId) {
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id : _id,
		precoTypeEnumValue : _estoque.precoTypeEnumValue,
		dataMarcacao : _estoque.dataMarcacao,
		valor : _estoque.valor,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnCusto = function(_estoque, _modelAction, _userId) {
	var _id = null;
	if (_estoque.id == "" || _estoque.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	//  //////debugger
	estoque = {
		id : _id,
		valor : _estoque.valor,

		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	//////debugger
	return estoque;
}

qat.model.fnCfop = function(_cfop, _modelAction, _userId) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var cfop = {
		id : _cfop.id,
		cfop : _cfop.cfop,
		natureza : _cfop.natureza,
		simplificado : _cfop.simplificado,
		cfopTypeEnum : _cfop.cfopTypeEnum,
		icms : _cfop.icms,
		icmsReduzido : _cfop.icmsReduzido,
		margemAgregadaST : _cfop.margemAgregadaST,
		cstPrincipal : _cfop.cstPrincipal,
		classFiscal : _cfop.classFiscal,
		observacao : _cfop.observacao,
		emprId : _emprId,
		tableEnumValue : 53,
		userId : _userId,
		modelAction : _modelAction,
		createUser : _userId,
		createDateUTC : (new Date()).getTime(),
		modifyUser : _userId,
		modifyDateUTC : (new Date()).getTime()

	}
	return cfop;
}

qat.model.fnConta = function(_conta, _modelAction) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	var conta = {
		id : _conta.id,
		descricao : _conta.descricao,
		saldo : _conta.saldo,
		dataUltLanc : _conta.dataUltLanc,
		numeroConta : _conta.numeroConta,
		tipoConta : qat.model.fnDoisValor(_conta.tipoConta, _modelAction),
		observacao : _conta.observacao,
		emprId : _emprId,
		tableEnumValue : 53,
		userId : "_userId",
		modelAction : _modelAction,
		createUser : "_userId",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "_userId",
		modifyDateUTC : (new Date()).getTime()

	}
	return conta;
}

qat.model.fnICMS = function(_cfop, _modelAction, _userId) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
			_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
			_cfop.createDateUTC = (new Date()).getTime(),
			_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
					.getTime()

	return _cfop;
}

qat.model.fnPIS = function(_cfop, _modelAction, _userId) {
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
			_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
			_cfop.createDateUTC = (new Date()).getTime(),
			_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
					.getTime()

	return _cfop;
}

qat.model.fnCOFINS = function(_cfop, _modelAction, _userId) {

	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	_cfop.emprId = _emprId, _cfop.tableEnumValue = 53, _cfop.userId = _userId,
			_cfop.modelAction = _modelAction, _cfop.createUser = _userId,
			_cfop.createDateUTC = (new Date()).getTime(),
			_cfop.modifyUser = _userId, _cfop.modifyDateUTC = (new Date())
					.getTime()

	return _cfop;
}

qat.model.fnIPI = function(_cfop, _modelAction, _userId) {

	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
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
qat.model.fnEndereco = function(_oObjet, modelAction, user) {
	var _emprId = null;

	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == "") {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}

	var _id = null;
	if ((_oObjet !== undefined) && (_oObjet.id !== undefined)) {
		if (_oObjet.id == "" || _oObjet.id == " ") {
			_id = null;
		}

		return {
			id : _id,
			codIbge : _oObjet.codIbge,
			logradouro : _oObjet.logradouro,
			bairro : _oObjet.bairro,
			numero : _oObjet.numero,
			enderecoTypeValue : _oObjet.enderecoTypeValue,
			cep : _oObjet.cep,
			latitude : _oObjet.latitude,
			longitude : _oObjet.longitude,
			complemento : _oObjet.complemento,
			cidade : {
				id : _oObjet.cidade.id
			},
			parentId : _oObjet.parentId,
			emprId : _emprId,
			processId : _oObjet.processId,
			tableEnumValue : _oObjet.tableEnumValue,
			modelAction : modelAction,
			createUser : user,
			createDateUTC : (new Date()).getTime(),
			modifyUser : user,
			modifyDateUTC : (new Date()).getTime()
		}
	}
}

qat.model.fnUsuario = function(_oObjet, modelAction, user) {

	return {
		id : _oObjet.id,
		email : _oObjet.email,
		senha : _oObjet.senha,
		cpf : {
			numero : _oObjet.numero,
			documentoTypeEnumValue : 2,
			modelAction : modelAction,
			createUser : user,
			createDateUTC : (new Date()).getTime(),
			modifyUser : user,
			modifyDateUTC : (new Date()).getTime()
		},
		pergunta : _oObjet.pergunta,
		role : _oObjet.role,
		telefone : _oObjet.telefone,
		language : "pt-br",
		parentId : _oObjet.parentId,
		emprId : _oObjet.emprId,
		processId : _oObjet.processId,
		tableEnumValue : _oObjet.tableEnumValue,
		modelAction : modelAction,
		createUser : user,
		createDateUTC : (new Date()).getTime(),
		modifyUser : user,
		modifyDateUTC : (new Date()).getTime()
	}
}

//Empresa
/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Empresa Object
qat.model.Empresa = function(_oObjet) {
	if (_oObjet != undefined) {
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
	} else {
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
		this.createUser = $rootScope.user;
		this.createDateUTC = (new Date()).getTime();
		this.modifyUser = $rootScope.user;
		this.modifyDateUTC = (new Date()).getTime();
	}
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Filial Object
qat.model.Filial = function(_oObjet) {
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

//Deposito Object
qat.model.Deposito = function(_oObjet) {
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
qat.model.Usuario = function(_oObjet) {
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
	this.createUser = $rootScope.user;
	this.createDateUTC = (new Date()).getTime();
	this.modifyUser = $rootScope.user;
	this.modifyDateUTC = (new Date()).getTime();
}

/** create by system gera-java version 1.0.0 01/06/2016 14:44 : 36*/

//Advocacia Object
qat.model.Advocacia = function(_oObjet) {
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

//Clinica Object
qat.model.Clinica = function(_oObjet) {
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
qat.model.Condominio = function(_oObjet) {
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
qat.model.Email = function(_oObjet) {
	this.id = _oObjet.id;
	this.typeValue = _oObjet.typeValue;
	this.email = _oObjet.email;
	this.emailTypeEnumValue = _oObjet.emailTypeEnumValue;
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

/** create by system gera-java version 1.0.0 01/06/2016 15:3 : 11*/

//Telefone Object
qat.model.Telefone = function(_oObjet) {
	this.id = _oObjet.id;
	this.typeValue = _oObjet.typeValue;
	this.ddd = _oObjet.ddd;
	this.numero = _oObjet.numero;
	this.telefoneTypeEnumValue = _oObjet.telefoneTypeEnumValue;
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

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNota = function(_NFNota, modelAction) {

	var _id = null;
	if (_NFNota.id == "" || _NFNota.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNota = {
		id : _id,
		identificadorLocal : _NFNota.identificadorLocal,
		info : qat.model.fnNFNotaInfo(_NFNota.info,modelAction),
		infoSuplementar : _NFNota.infoSuplementar,
		assinatura : _NFNota.assinatura,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNota;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfo = function(_NFNotaInfo, modelAction) {

	var _id = null;
	if (_NFNotaInfo.id == "" || _NFNotaInfo.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfo = {
		id : _id,
		identificador : _NFNotaInfo.identificador,
		versao : _NFNotaInfo.versao,
		identificacao : _NFNotaInfo.identificacao,
		emitente : _NFNotaInfo.emitente,
		avulsa : _NFNotaInfo.avulsa,
		destinatario : _NFNotaInfo.destinatario,
		retirada : _NFNotaInfo.retirada,
		entrega : _NFNotaInfo.entrega,
		pessoasAutorizadasDownloadNFe : _NFNotaInfo.pessoasAutorizadasDownloadNFe,
		itens : _NFNotaInfo.itens,
		total : _NFNotaInfo.total,
		transporte : _NFNotaInfo.transporte,
		cobranca : _NFNotaInfo.cobranca,
		pagamentos : _NFNotaInfo.pagamentos,
		informacoesAdicionais : _NFNotaInfo.informacoesAdicionais,
		exportacao : _NFNotaInfo.exportacao,
		compra : _NFNotaInfo.compra,
		cana : _NFNotaInfo.cana,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfo;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoCupomFiscalReferenciado = function(
		_NFInfoCupomFiscalReferenciado, modelAction) {

	var _id = null;
	if (_NFInfoCupomFiscalReferenciado.id == ""
			|| _NFInfoCupomFiscalReferenciado.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoCupomFiscalReferenciado = {
		id : _id,
		modeloDocumentoFiscal : _NFInfoCupomFiscalReferenciado.modeloDocumentoFiscal,
		numeroOrdemSequencialECF : _NFInfoCupomFiscalReferenciado.numeroOrdemSequencialECF,
		numeroContadorOrdemOperacao : _NFInfoCupomFiscalReferenciado.numeroContadorOrdemOperacao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFInfoCupomFiscalReferenciado;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoIdentificacao = function(_NFNotaInfoIdentificacao,
		modelAction) {

	var _id = null;
	if (_NFNotaInfoIdentificacao.id == "" || _NFNotaInfoIdentificacao.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoIdentificacao = {
		id : _id,
		uf : _NFNotaInfoIdentificacao.uf,
		codigoRandomico : _NFNotaInfoIdentificacao.codigoRandomico,
		naturezaOperacao : _NFNotaInfoIdentificacao.naturezaOperacao,
		formaPagamento : _NFNotaInfoIdentificacao.formaPagamento,
		modelo : _NFNotaInfoIdentificacao.modelo,
		serie : _NFNotaInfoIdentificacao.serie,
		numeroNota : _NFNotaInfoIdentificacao.numeroNota,
		dataHoraEmissao : _NFNotaInfoIdentificacao.dataHoraEmissao,
		dataHoraSaidaOuEntrada : _NFNotaInfoIdentificacao.dataHoraSaidaOuEntrada,
		tipo : _NFNotaInfoIdentificacao.tipo,
		identificadorLocalDestinoOperacao : _NFNotaInfoIdentificacao.identificadorLocalDestinoOperacao,
		codigoMunicipio : _NFNotaInfoIdentificacao.codigoMunicipio,
		tipoImpressao : _NFNotaInfoIdentificacao.tipoImpressao,
		tipoEmissao : _NFNotaInfoIdentificacao.tipoEmissao,
		digitoVerificador : _NFNotaInfoIdentificacao.digitoVerificador,
		ambiente : _NFNotaInfoIdentificacao.ambiente,
		finalidade : _NFNotaInfoIdentificacao.finalidade,
		operacaoConsumidorFinal : _NFNotaInfoIdentificacao.operacaoConsumidorFinal,
		indicadorPresencaComprador : _NFNotaInfoIdentificacao.indicadorPresencaComprador,
		programaEmissor : _NFNotaInfoIdentificacao.programaEmissor,
		versaoEmissor : _NFNotaInfoIdentificacao.versaoEmissor,
		dataHoraContigencia : _NFNotaInfoIdentificacao.dataHoraContigencia,
		justificativaEntradaContingencia : _NFNotaInfoIdentificacao.justificativaEntradaContingencia,
		referenciadas : _NFNotaInfoIdentificacao.referenciadas,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoIdentificacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoModelo1Por1AReferenciada = function(
		_NFInfoModelo1Por1AReferenciada, modelAction) {

	var _id = null;
	if (_NFInfoModelo1Por1AReferenciada.id == ""
			|| _NFInfoModelo1Por1AReferenciada.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoModelo1Por1AReferenciada = {
		id : _id,
		uf : _NFInfoModelo1Por1AReferenciada.uf,
		anoMesEmissaoNFe : _NFInfoModelo1Por1AReferenciada.anoMesEmissaoNFe,
		cnpj : _NFInfoModelo1Por1AReferenciada.cnpj,
		modeloDocumentoFiscal : _NFInfoModelo1Por1AReferenciada.modeloDocumentoFiscal,
		serie : _NFInfoModelo1Por1AReferenciada.serie,
		numeroDocumentoFiscal : _NFInfoModelo1Por1AReferenciada.numeroDocumentoFiscal,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFInfoModelo1Por1AReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoReferenciada = function(_NFInfoReferenciada, modelAction) {

	var _id = null;
	if (_NFInfoReferenciada.id == "" || _NFInfoReferenciada.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoReferenciada = {
		id : _id,
		chaveAcesso : _NFInfoReferenciada.chaveAcesso,
		modelo1por1Referenciada : _NFInfoReferenciada.modelo1por1Referenciada,
		infoNFProdutorRuralReferenciada : _NFInfoReferenciada.infoNFProdutorRuralReferenciada,
		chaveAcessoCTReferenciada : _NFInfoReferenciada.chaveAcessoCTReferenciada,
		cupomFiscalReferenciado : _NFInfoReferenciada.cupomFiscalReferenciado,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFInfoReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFInfoProdutorRuralReferenciada = function(
		_NFInfoProdutorRuralReferenciada, modelAction) {

	var _id = null;
	if (_NFInfoProdutorRuralReferenciada.id == ""
			|| _NFInfoProdutorRuralReferenciada.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFInfoProdutorRuralReferenciada = {
		id : _id,
		ufEmitente : _NFInfoProdutorRuralReferenciada.ufEmitente,
		anoMesEmissao : _NFInfoProdutorRuralReferenciada.anoMesEmissao,
		cnpjEmitente : _NFInfoProdutorRuralReferenciada.cnpjEmitente,
		cpfEmitente : _NFInfoProdutorRuralReferenciada.cpfEmitente,
		ieEmitente : _NFInfoProdutorRuralReferenciada.ieEmitente,
		modeloDocumentoFiscal : _NFInfoProdutorRuralReferenciada.modeloDocumentoFiscal,
		serieDocumentoFiscal : _NFInfoProdutorRuralReferenciada.serieDocumentoFiscal,
		numeroDocumentoFiscal : _NFInfoProdutorRuralReferenciada.numeroDocumentoFiscal,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFInfoProdutorRuralReferenciada;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoEmitente = function(_NFNotaInfoEmitente, modelAction) {

	var _id = null;
	if (_NFNotaInfoEmitente.id == "" || _NFNotaInfoEmitente.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoEmitente = {
		id : _id,
		cnpj : _NFNotaInfoEmitente.cnpj,
		cpf : _NFNotaInfoEmitente.cpf,
		razaoSocial : _NFNotaInfoEmitente.razaoSocial,
		nomeFantasia : _NFNotaInfoEmitente.nomeFantasia,
		endereco : _NFNotaInfoEmitente.endereco,
		inscricaoEstadual : _NFNotaInfoEmitente.inscricaoEstadual,
		inscricaoEstadualSubstituicaoTributaria : _NFNotaInfoEmitente.inscricaoEstadualSubstituicaoTributaria,
		inscricaoMunicipal : _NFNotaInfoEmitente.inscricaoMunicipal,
		classificacaoNacionalAtividadesEconomicas : _NFNotaInfoEmitente.classificacaoNacionalAtividadesEconomicas,
		regimeTributario : _NFNotaInfoEmitente.regimeTributario,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoEmitente;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoAvulsa = function(_NFNotaInfoAvulsa, modelAction) {

	var _id = null;
	if (_NFNotaInfoAvulsa.id == "" || _NFNotaInfoAvulsa.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoAvulsa = {
		id : _id,
		cnpj : _NFNotaInfoAvulsa.cnpj,
		orgaoEmitente : _NFNotaInfoAvulsa.orgaoEmitente,
		matriculaAgente : _NFNotaInfoAvulsa.matriculaAgente,
		nomeAgente : _NFNotaInfoAvulsa.nomeAgente,
		fone : _NFNotaInfoAvulsa.fone,
		uf : _NFNotaInfoAvulsa.uf,
		numeroDocumentoArrecadacaoReceita : _NFNotaInfoAvulsa.numeroDocumentoArrecadacaoReceita,
		dataEmissaoDocumentoArrecadacao : _NFNotaInfoAvulsa.dataEmissaoDocumentoArrecadacao,
		valorTotalConstanteDocumentoArrecadacaoReceita : _NFNotaInfoAvulsa.valorTotalConstanteDocumentoArrecadacaoReceita,
		reparticaoFiscalEmitente : _NFNotaInfoAvulsa.reparticaoFiscalEmitente,
		dataPagamentoDocumentoArrecadacao : _NFNotaInfoAvulsa.dataPagamentoDocumentoArrecadacao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoAvulsa;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoDestinatario = function(_NFNotaInfoDestinatario,
		modelAction) {

	var _id = null;
	if (_NFNotaInfoDestinatario.id == "" || _NFNotaInfoDestinatario.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoDestinatario = {
		id : _id,
		cnpj : _NFNotaInfoDestinatario.cnpj,
		cpf : _NFNotaInfoDestinatario.cpf,
		idEstrangeiro : _NFNotaInfoDestinatario.idEstrangeiro,
		razaoSocial : _NFNotaInfoDestinatario.razaoSocial,
		endereco : _NFNotaInfoDestinatario.endereco,
		indicadorIEDestinatario : _NFNotaInfoDestinatario.indicadorIEDestinatario,
		inscricaoEstadual : _NFNotaInfoDestinatario.inscricaoEstadual,
		inscricaoSuframa : _NFNotaInfoDestinatario.inscricaoSuframa,
		inscricaoMunicipal : _NFNotaInfoDestinatario.inscricaoMunicipal,
		email : _NFNotaInfoDestinatario.email,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoDestinatario;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoLocal = function(_NFNotaInfoLocal, modelAction) {

	var _id = null;
	if (_NFNotaInfoLocal.id == "" || _NFNotaInfoLocal.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoLocal = {
		id : _id,
		cnpj : _NFNotaInfoLocal.cnpj,
		cpf : _NFNotaInfoLocal.cpf,
		logradouro : _NFNotaInfoLocal.logradouro,
		numero : _NFNotaInfoLocal.numero,
		complemento : _NFNotaInfoLocal.complemento,
		bairro : _NFNotaInfoLocal.bairro,
		codigoMunicipio : _NFNotaInfoLocal.codigoMunicipio,
		nomeMunicipio : _NFNotaInfoLocal.nomeMunicipio,
		uf : _NFNotaInfoLocal.uf,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoLocal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFPessoaAutorizadaDownloadNFe = function(
		_NFPessoaAutorizadaDownloadNFe, modelAction) {

	var _id = null;
	if (_NFPessoaAutorizadaDownloadNFe.id == ""
			|| _NFPessoaAutorizadaDownloadNFe.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFPessoaAutorizadaDownloadNFe = {
		id : _id,
		cnpj : _NFPessoaAutorizadaDownloadNFe.cnpj,
		cpf : _NFPessoaAutorizadaDownloadNFe.cpf,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFPessoaAutorizadaDownloadNFe;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTotal = function(_NFNotaInfoTotal, modelAction) {

	var _id = null;
	if (_NFNotaInfoTotal.id == "" || _NFNotaInfoTotal.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTotal = {
		id : _id,
		icmsTotal : _NFNotaInfoTotal.icmsTotal,
		issqnTotal : _NFNotaInfoTotal.issqnTotal,
		retencoesTributos : _NFNotaInfoTotal.retencoesTributos,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoICMSTotal = function(_NFNotaInfoICMSTotal, modelAction) {

	var _id = null;
	if (_NFNotaInfoICMSTotal.id == "" || _NFNotaInfoICMSTotal.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoICMSTotal = {
		id : _id,
		baseCalculoICMS : _NFNotaInfoICMSTotal.baseCalculoICMS,
		valorTotalICMS : _NFNotaInfoICMSTotal.valorTotalICMS,
		valorICMSDesonerado : _NFNotaInfoICMSTotal.valorICMSDesonerado,
		valorICMSFundoCombatePobreza : _NFNotaInfoICMSTotal.valorICMSFundoCombatePobreza,
		valorICMSPartilhaDestinatario : _NFNotaInfoICMSTotal.valorICMSPartilhaDestinatario,
		valorICMSPartilhaRementente : _NFNotaInfoICMSTotal.valorICMSPartilhaRementente,
		baseCalculoICMSST : _NFNotaInfoICMSTotal.baseCalculoICMSST,
		valorTotalICMSST : _NFNotaInfoICMSTotal.valorTotalICMSST,
		valorTotalDosProdutosServicos : _NFNotaInfoICMSTotal.valorTotalDosProdutosServicos,
		valorTotalFrete : _NFNotaInfoICMSTotal.valorTotalFrete,
		valorTotalSeguro : _NFNotaInfoICMSTotal.valorTotalSeguro,
		valorTotalDesconto : _NFNotaInfoICMSTotal.valorTotalDesconto,
		valorTotalII : _NFNotaInfoICMSTotal.valorTotalII,
		valorTotalIPI : _NFNotaInfoICMSTotal.valorTotalIPI,
		valorPIS : _NFNotaInfoICMSTotal.valorPIS,
		valorCOFINS : _NFNotaInfoICMSTotal.valorCOFINS,
		outrasDespesasAcessorias : _NFNotaInfoICMSTotal.outrasDespesasAcessorias,
		valorTotalNFe : _NFNotaInfoICMSTotal.valorTotalNFe,
		valorTotalTributos : _NFNotaInfoICMSTotal.valorTotalTributos,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoICMSTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoISSQNTotal = function(_NFNotaInfoISSQNTotal, modelAction) {

	var _id = null;
	if (_NFNotaInfoISSQNTotal.id == "" || _NFNotaInfoISSQNTotal.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoISSQNTotal = {
		id : _id,
		valorTotalServicosSobNaoIncidenciaNaoTributadosICMS : _NFNotaInfoISSQNTotal.valorTotalServicosSobNaoIncidenciaNaoTributadosICMS,
		baseCalculoISS : _NFNotaInfoISSQNTotal.baseCalculoISS,
		valorTotalISS : _NFNotaInfoISSQNTotal.valorTotalISS,
		valorPISsobreServicos : _NFNotaInfoISSQNTotal.valorPISsobreServicos,
		valorCOFINSsobreServicos : _NFNotaInfoISSQNTotal.valorCOFINSsobreServicos,
		dataPrestacaoServico : _NFNotaInfoISSQNTotal.dataPrestacaoServico,
		valorDeducao : _NFNotaInfoISSQNTotal.valorDeducao,
		valorOutros : _NFNotaInfoISSQNTotal.valorOutros,
		valorTotalDescontoIncondicionado : _NFNotaInfoISSQNTotal.valorTotalDescontoIncondicionado,
		valorTotalDescontoCondicionado : _NFNotaInfoISSQNTotal.valorTotalDescontoCondicionado,
		valorTotalRetencaoISS : _NFNotaInfoISSQNTotal.valorTotalRetencaoISS,
		tributacao : _NFNotaInfoISSQNTotal.tributacao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoISSQNTotal;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoRetencoesTributos = function(
		_NFNotaInfoRetencoesTributos, modelAction) {

	var _id = null;
	if (_NFNotaInfoRetencoesTributos.id == ""
			|| _NFNotaInfoRetencoesTributos.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoRetencoesTributos = {
		id : _id,
		valorRetidoPIS : _NFNotaInfoRetencoesTributos.valorRetidoPIS,
		valorRetidoCOFINS : _NFNotaInfoRetencoesTributos.valorRetidoCOFINS,
		valorRetidoCSLL : _NFNotaInfoRetencoesTributos.valorRetidoCSLL,
		baseCalculoIRRF : _NFNotaInfoRetencoesTributos.baseCalculoIRRF,
		valorRetidoIRRF : _NFNotaInfoRetencoesTributos.valorRetidoIRRF,
		baseCalculoRetencaoPrevidenciaSocial : _NFNotaInfoRetencoesTributos.baseCalculoRetencaoPrevidenciaSocial,
		valorRetencaoPrevidenciaSocial : _NFNotaInfoRetencoesTributos.valorRetencaoPrevidenciaSocial,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoRetencoesTributos;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTransporte = function(_NFNotaInfoTransporte, modelAction) {

	var _id = null;
	if (_NFNotaInfoTransporte.id == "" || _NFNotaInfoTransporte.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTransporte = {
		id : _id,
		modalidadeFrete : _NFNotaInfoTransporte.modalidadeFrete,
		transportador : _NFNotaInfoTransporte.transportador,
		icmsTransporte : _NFNotaInfoTransporte.icmsTransporte,
		veiculo : _NFNotaInfoTransporte.veiculo,
		reboques : _NFNotaInfoTransporte.reboques,
		vagao : _NFNotaInfoTransporte.vagao,
		balsa : _NFNotaInfoTransporte.balsa,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoTransporte;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoRetencaoICMSTransporte = function(
		_NFNotaInfoRetencaoICMSTransporte, modelAction) {

	var _id = null;
	if (_NFNotaInfoRetencaoICMSTransporte.id == ""
			|| _NFNotaInfoRetencaoICMSTransporte.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoRetencaoICMSTransporte = {
		id : _id,
		valorServico : _NFNotaInfoRetencaoICMSTransporte.valorServico,
		bcRetencaoICMS : _NFNotaInfoRetencaoICMSTransporte.bcRetencaoICMS,
		aliquotaRetencao : _NFNotaInfoRetencaoICMSTransporte.aliquotaRetencao,
		valorICMSRetido : _NFNotaInfoRetencaoICMSTransporte.valorICMSRetido,
		cfop : _NFNotaInfoRetencaoICMSTransporte.cfop,
		codigoMunicipioOcorrenciaFatoGeradorICMSTransporte : _NFNotaInfoRetencaoICMSTransporte.codigoMunicipioOcorrenciaFatoGeradorICMSTransporte,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoRetencaoICMSTransporte;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoTransportador = function(_NFNotaInfoTransportador,
		modelAction) {

	var _id = null;
	if (_NFNotaInfoTransportador.id == "" || _NFNotaInfoTransportador.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoTransportador = {
		id : _id,
		cnpj : _NFNotaInfoTransportador.cnpj,
		cpf : _NFNotaInfoTransportador.cpf,
		razaoSocial : _NFNotaInfoTransportador.razaoSocial,
		inscricaoEstadual : _NFNotaInfoTransportador.inscricaoEstadual,
		enderecoComplemento : _NFNotaInfoTransportador.enderecoComplemento,
		nomeMunicipio : _NFNotaInfoTransportador.nomeMunicipio,
		uf : _NFNotaInfoTransportador.uf,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoTransportador;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoVeiculo = function(_NFNotaInfoVeiculo, modelAction) {

	var _id = null;
	if (_NFNotaInfoVeiculo.id == "" || _NFNotaInfoVeiculo.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoVeiculo = {
		id : _id,
		placaVeiculo : _NFNotaInfoVeiculo.placaVeiculo,
		uf : _NFNotaInfoVeiculo.uf,
		registroNacionalTransportadorCarga : _NFNotaInfoVeiculo.registroNacionalTransportadorCarga,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoVeiculo;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoReboque = function(_NFNotaInfoReboque, modelAction) {

	var _id = null;
	if (_NFNotaInfoReboque.id == "" || _NFNotaInfoReboque.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoReboque = {
		id : _id,
		placaVeiculo : _NFNotaInfoReboque.placaVeiculo,
		uf : _NFNotaInfoReboque.uf,
		registroNacionalTransportadorCarga : _NFNotaInfoReboque.registroNacionalTransportadorCarga,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoReboque;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCobranca = function(_NFNotaInfoCobranca, modelAction) {

	var _id = null;
	if (_NFNotaInfoCobranca.id == "" || _NFNotaInfoCobranca.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCobranca = {
		id : _id,
		fatura : _NFNotaInfoCobranca.fatura,
		duplicatas : _NFNotaInfoCobranca.duplicatas,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCobranca;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoDuplicata = function(_NFNotaInfoDuplicata, modelAction) {

	var _id = null;
	if (_NFNotaInfoDuplicata.id == "" || _NFNotaInfoDuplicata.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoDuplicata = {
		id : _id,
		numeroDuplicata : _NFNotaInfoDuplicata.numeroDuplicata,
		dataVencimento : _NFNotaInfoDuplicata.dataVencimento,
		valorDuplicata : _NFNotaInfoDuplicata.valorDuplicata,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoDuplicata;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoFatura = function(_NFNotaInfoFatura, modelAction) {

	var _id = null;
	if (_NFNotaInfoFatura.id == "" || _NFNotaInfoFatura.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoFatura = {
		id : _id,
		numeroFatura : _NFNotaInfoFatura.numeroFatura,
		valorOriginalFatura : _NFNotaInfoFatura.valorOriginalFatura,
		valorDesconto : _NFNotaInfoFatura.valorDesconto,
		valorLiquidoFatura : _NFNotaInfoFatura.valorLiquidoFatura,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoFatura;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCartao = function(_NFNotaInfoCartao, modelAction) {

	var _id = null;
	if (_NFNotaInfoCartao.id == "" || _NFNotaInfoCartao.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCartao = {
		id : _id,
		tipoIntegracao : _NFNotaInfoCartao.tipoIntegracao,
		cnpj : _NFNotaInfoCartao.cnpj,
		operadoraCartao : _NFNotaInfoCartao.operadoraCartao,
		numeroAutorizacaoOperacaoCartao : _NFNotaInfoCartao.numeroAutorizacaoOperacaoCartao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCartao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoPagamento = function(_NFNotaInfoPagamento, modelAction) {

	var _id = null;
	if (_NFNotaInfoPagamento.id == "" || _NFNotaInfoPagamento.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoPagamento = {
		id : _id,
		formaPagamentoMoeda : _NFNotaInfoPagamento.formaPagamentoMoeda,
		valorPagamento : _NFNotaInfoPagamento.valorPagamento,
		cartao : _NFNotaInfoPagamento.cartao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoPagamento;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoInformacoesAdicionais = function(
		_NFNotaInfoInformacoesAdicionais, modelAction) {

	var _id = null;
	if (_NFNotaInfoInformacoesAdicionais.id == ""
			|| _NFNotaInfoInformacoesAdicionais.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoInformacoesAdicionais = {
		id : _id,
		informacoesAdicionaisInteresseFisco : _NFNotaInfoInformacoesAdicionais.informacoesAdicionaisInteresseFisco,
		informacoesComplementaresInteresseContribuinte : _NFNotaInfoInformacoesAdicionais.informacoesComplementaresInteresseContribuinte,
		observacoesContribuinte : _NFNotaInfoInformacoesAdicionais.observacoesContribuinte,
		observacoesFisco : _NFNotaInfoInformacoesAdicionais.observacoesFisco,
		processosRefenciado : _NFNotaInfoInformacoesAdicionais.processosRefenciado,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoInformacoesAdicionais;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoObservacao = function(_NFNotaInfoObservacao, modelAction) {

	var _id = null;
	if (_NFNotaInfoObservacao.id == "" || _NFNotaInfoObservacao.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoObservacao = {
		id : _id,
		identificacaoCampo : _NFNotaInfoObservacao.identificacaoCampo,
		conteudoCampo : _NFNotaInfoObservacao.conteudoCampo,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoObservacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoProcessoReferenciado = function(
		_NFNotaInfoProcessoReferenciado, modelAction) {

	var _id = null;
	if (_NFNotaInfoProcessoReferenciado.id == ""
			|| _NFNotaInfoProcessoReferenciado.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoProcessoReferenciado = {
		id : _id,
		identificadorProcessoOuAtoConcessorio : _NFNotaInfoProcessoReferenciado.identificadorProcessoOuAtoConcessorio,
		indicadorOrigemProcesso : _NFNotaInfoProcessoReferenciado.indicadorOrigemProcesso,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoProcessoReferenciado;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoExportacao = function(_NFNotaInfoExportacao, modelAction) {

	var _id = null;
	if (_NFNotaInfoExportacao.id == "" || _NFNotaInfoExportacao.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoExportacao = {
		id : _id,
		ufEmbarqueProduto : _NFNotaInfoExportacao.ufEmbarqueProduto,
		localEmbarqueProdutos : _NFNotaInfoExportacao.localEmbarqueProdutos,
		localDespachoProdutos : _NFNotaInfoExportacao.localDespachoProdutos,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoExportacao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCompra = function(_NFNotaInfoCompra, modelAction) {

	var _id = null;
	if (_NFNotaInfoCompra.id == "" || _NFNotaInfoCompra.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCompra = {
		id : _id,
		notaDeEmpenho : _NFNotaInfoCompra.notaDeEmpenho,
		pedido : _NFNotaInfoCompra.pedido,
		contrato : _NFNotaInfoCompra.contrato,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCompra;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCana = function(_NFNotaInfoCana, modelAction) {

	var _id = null;
	if (_NFNotaInfoCana.id == "" || _NFNotaInfoCana.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCana = {
		id : _id,
		safra : _NFNotaInfoCana.safra,
		referencia : _NFNotaInfoCana.referencia,
		fornecimentosDiario : _NFNotaInfoCana.fornecimentosDiario,
		deducoes : _NFNotaInfoCana.deducoes,
		quantidadeTotalMes : _NFNotaInfoCana.quantidadeTotalMes,
		quantidadeTotalAnterior : _NFNotaInfoCana.quantidadeTotalAnterior,
		quantidadeTotalGeral : _NFNotaInfoCana.quantidadeTotalGeral,
		valorFornecimento : _NFNotaInfoCana.valorFornecimento,
		valorTotalDeducao : _NFNotaInfoCana.valorTotalDeducao,
		valorLiquidoFornecimento : _NFNotaInfoCana.valorLiquidoFornecimento,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCana;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCanaFornecimentoDiario = function(
		_NFNotaInfoCanaFornecimentoDiario, modelAction) {

	var _id = null;
	if (_NFNotaInfoCanaFornecimentoDiario.id == ""
			|| _NFNotaInfoCanaFornecimentoDiario.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCanaFornecimentoDiario = {
		id : _id,
		dia : _NFNotaInfoCanaFornecimentoDiario.dia,
		quantidade : _NFNotaInfoCanaFornecimentoDiario.quantidade,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCanaFornecimentoDiario;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoCanaDeducao = function(_NFNotaInfoCanaDeducao,
		modelAction) {

	var _id = null;
	if (_NFNotaInfoCanaDeducao.id == "" || _NFNotaInfoCanaDeducao.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoCanaDeducao = {
		id : _id,
		descricaoDeducao : _NFNotaInfoCanaDeducao.descricaoDeducao,
		valorDeducao : _NFNotaInfoCanaDeducao.valorDeducao,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}
	return NFNotaInfoCanaDeducao;
}

/** create by system gera-java version 1.0.0 03/11/2016 18:34 : 4*/
qat.model.fnNFNotaInfoSuplementar = function(_NFNotaInfoSuplementar,
		modelAction) {

	var _id = null;
	if (_NFNotaInfoSuplementar.id == "" || _NFNotaInfoSuplementar.id == " ") {
		_id = null;
	}
	var _emprId = null;
	if (localStorage.getItem('empresa') == null
			|| localStorage.getItem('empresa') == '') {
		_emprId = null;
	} else {
		_emprId = JSON.parse(localStorage.getItem('empresa')).id;
	}
	NFNotaInfoSuplementar = {
		id : _id,
		qrCode : _NFNotaInfoSuplementar.qrCode,
		parentId : 0,
		emprId : _emprId,
		processId : 0,
		tableEnumValue : 0,
		modelAction : modelAction,
		createUser : "System",
		createDateUTC : (new Date()).getTime(),
		modifyUser : "System",
		modifyDateUTC : (new Date()).getTime()

	}

	return NFNotaInfoSuplementar;
}
