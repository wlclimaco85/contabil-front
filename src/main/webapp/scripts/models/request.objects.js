	//FetchAllRequest Object
	qat.model.pageSize = 10;
	qat.model.fetchAllRequest = function() {

	};

	//FetchByIdRequest Object
	qat.model.fetchByIdRequest = function(_iInt) {
	    this.fetchId = _iInt;
	};

	//FetchByIdRequest Object
	qat.model.PagedInquiryRequest = function(_iEmprId) {
	    var _emprId = null;

	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "") {
	        _emprId = null;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    }
	    this.emprId = _emprId;

	};

	//RefreshRequest Object
	qat.model.refreshRequest = function(_iInt, _bList, _bPagedList) {
	    this.refreshInt = _iInt;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	//RefreshRequest Object
	qat.model.refreshRequest = function(_iInt, _bList, _bPagedList) {
	    this.refreshInt = _iInt;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	//CountyMaintenanceRequest Object
	qat.model.reqCounty = function(_oCounty, _bList, _bPagedList) {
	    this.cfop = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqNote = function(_oNote, _bList, _bPagedList) {
	    this.note = _oNote;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	//CountyMaintenanceRequest Object
	qat.model.reqSite = function(_oCounty, _bList, _bPagedList) {
	    this.site = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqConta = function(_oCounty, _bList, _bPagedList) {
	    this.conta = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqRegime = function(_oCounty, _bList, _bPagedList) {
	    this.regime = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqRoles = function(_oCounty, _bList, _bPagedList) {
	    this.role = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqPlano = function(_oCounty, _bList, _bPagedList) {
	    this.plano = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqSocio = function(_oCounty, _bList, _bPagedList) {
	    this.empresa = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqProduto = function(_oCounty, _bList, _bPagedList) {
	    this.produtoEmpresa = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqNFSAIDA = function(_oCounty, _bList, _bPagedList) {
	    this.notafiscal = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqCliente = function(_oCounty, _bList, _bPagedList) {
	    this.cliente = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqAgencia = function(_oCounty, _bList, _bPagedList) {
	    this.agencia = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqNote = function(_oCounty, _bList, _bPagedList) {
	    this.note = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqStatus = function(_oCounty, _bList, _bPagedList) {
	    this.status = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqFormaPg = function(_oCounty, _bList, _bPagedList) {
	    this.formaPg = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqEmpresa = function(_oCounty, _bList, _bPagedList) {
	    this.formaPg = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqProcesso = function(_oCounty, _bList, _bPagedList) {
	    this.processo = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqMarca = function(_oCounty, _bList, _bPagedList) {
	    this.marca = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqUniMed = function(_oCounty, _bList, _bPagedList) {
	    this.uniMed = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqCategoria = function(_oCounty, _bList, _bPagedList) {
	    this.categoria = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqTributacao = function(_oCounty, _bList, _bPagedList) {
	    this.tributacao = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};


	qat.model.reqBanco = function(_oCounty, _bList, _bPagedList) {
	    this.banco = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqContasPagar = function(_oCounty, _bList, _bPagedList) {
	    this.contasPagar = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqDoisValor = function(_oCounty, _bList, _bPagedList) {
	    //debugger
	    this.doisValor = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};


	qat.model.reqContasReceber = function(_oCounty, _bList, _bPagedList) {
	    this.contasReceber = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqAgencia = function(_oCounty, _bList, _bPagedList) {
	    this.agencia = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqContato = function(_oCounty, _bList, _bPagedList) {
	    this.contato = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqServico = function(_oCounty, _bList, _bPagedList) {
	    this.servico = _oCounty;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	//ProcedureMaintenanceRequest
	qat.model.reqProc = function(_oProc, _bList, _bPagedList) {
	    this.procedure = _oProc;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	//PagedInquryRequest
	qat.model.pagedInquiryRequest = function(_iStartPage, _bCount) {
	    this.pageSize = qat.model.pageSize;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.siteInquiryRequest = function(_iStartPage, _bCount, _url) {
	    this.pageSize = qat.model.pageSize;
	    this.url = _url
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.planoInquiryRequest = function(_iStartPage, _bCount, _emprId) {
	    this.pageSize = qat.model.pageSize;
	    this.emprId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};


	qat.model.cidadeInquiryRequest = function(_estadoId, _iStartPage, _bCount, _emprId) {
	    //this.pageSize = qat.model.pageSize;
	    this.estadoId = parseInt(_estadoId, 10);
	    //this.startPage = _iStartPage;
	    //this.sortExpressions = null;
	    //this.preQueryCount = _bCount;
	    //this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.doisValoresInquiryRequest = function(_page, _iStartPage, _bCount, _emprId, _doisValorType, _id) {
	    var _emprId = null;
	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "") {
	        _emprId = null;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    }
	    this.pageSize = qat.model.pageSize;
	    this.paginaId = _page;
	    this.doisValorType = _doisValorType;
	    this.emprId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.Especialidade = function(_oCounty, _user, _bCount, _emprId, _doisValorType, _id) {
	    var _emprId = null;
	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "") {
	        _emprId = null;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    }
	    this.especialidade = _oCounty;
	    this.emprId = _emprId;

	};

	qat.model.estadoInquiryRequest = function(_iStartPage, _bCount, _emprId) {
	    this.pageSize = qat.model.pageSize;
	    this.estadoId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.empresaInquiryRequest = function(_iStartPage, _bCount, _userId, _id, _emprId, _permissaoType) {
		var _emprId = null;
		//	debugger
	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "" || localStorage.getItem('empresa') == "undefined"){
	        _emprId = null;
			_permissaoType = 4;
			_emprIds = null;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
			_permissaoType = JSON.parse(localStorage.getItem('empresa')).permissaoTypeEnumValue;
			_emprIds = JSON.parse(localStorage.getItem('empresa')).emprIds;;
		}
		this.emprIds = _emprIds;
		this.pageSize = qat.model.pageSize;
		this.permissaoTypeEnumValue = _permissaoType;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.notaFiscalInquiryRequest = function(_iStartPage, _bCount, _userId, _id, _emprId, _permissaoType,_notaType) {
		var _emprId = null;
		//	debugger
	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "" || localStorage.getItem('empresa') == "undefined"){
	        _emprId = null;
			_permissaoType = 4;
			_emprIds = null;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
			_permissaoType = JSON.parse(localStorage.getItem('empresa')).permissaoTypeEnumValue;
			_emprIds = JSON.parse(localStorage.getItem('empresa')).emprIds;;
		}
		this.parentId = _notaType;
		this.emprIds = _emprIds;
		this.pageSize = qat.model.pageSize;
		this.permissaoTypeEnumValue = _permissaoType;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.produtoInquiryRequest = function(_iStartPage, _bCount, _userId, _id, _emprId, _permissaoType) {
	    var _emprId = null;
	    if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "" || localStorage.getItem('empresa') == "undefined"){
	        _emprId = null;
			_permissaoType = 4;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
			_permissaoType = JSON.parse(localStorage.getItem('empresa')).permissaoTypeEnumValue;
	    }
	    this.pageSize = qat.model.pageSize;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	qat.model.contasPagarInquiryRequest = function(_descricao, _dataInicial, _dataFinal, _conta, _iStartPage, _bCount, _userId, _id, _emprId, _permissaoType) {
	    var _emprId = null;
	   if (localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == "") {
	        _emprId = null;
			_permissaoType = 4;
	    } else {
	        _emprId = JSON.parse(localStorage.getItem('empresa')).id;
			_permissaoType = JSON.parse(localStorage.getItem('empresa')).permissaoTypeEnumValue;
	    }
	    if (_descricao)
	        this.descricao = _descricao
	    if (_dataInicial && _dataFinal) {
	        this.dataInicial = _dataInicial
	        this.dataFinal = _dataFinal
	    }
	    if (_conta)
	        this.conta = _conta

	    this.pageSize = qat.model.pageSize;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.permissaoTypeEnumValue = _permissaoType;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	qat.model.doisValorInquiryRequest = function(_pageId, typeId, _iStartPage, _bCount, _userId, _permissaoType) {

	    this.paginaId = _pageId;
	    this.doisValorType = typeId;
	    this.pageSize = qat.model.pageSize;
	    this.userId = _userId;
	    this.id = _id;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.transactionInquiryRequest = function(_transaction, _iStartPage, _bCount, _userId, _id, _emprId, _permissaoType) {
	    //this.transaction = _transaction;
	    this.pageSize = qat.model.pageSize;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.permissaoTypeEnumValue = _permissaoType;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;
	};

	//PageData Object
	qat.model.pageData = function(_pageSize, _startPage, _bRowsAvailable, _totalRows) {
	    this.pageSize = _pageSize;
	    this.startPage = _startPage;
	    this.moreRowsAvailable = _bRowsAvailable;
	    this.totalRowsAvailable = _totalRows;
	};

	//=========================
	qat.model.siteCriteria = function(_url, _nome) {
	    this.nome = _nome;
	    this.url = _url;
	}

	//ProcedureMaintenanceRequest
	qat.model.reqEmpr = function(_oEmpr, _bList, _bPagedList) {
	    this.empresa = _oEmpr;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqNotaFiscal = function(_oEmpr, _bList, _bPagedList) {
	    this.notafiscal = _oEmpr;
	    this.returnList = _bList;
	    this.returnListPaged = _bPagedList;
	};

	qat.model.reqEspecialidade = function(_oEmpr, _bList, _bPagedList) {
	    this.especialidade   = _oEmpr;
	    this.returnList      = _bList;
	    this.returnListPaged = _bPagedList;
	};


	//empresaInquryRequest
	qat.model.transactionInquiryRequest = function(_transaction, _iStartPage, _bCount, _userId, _id, _emprId, _permissaoType) {

	    this.transaction = _transaction;
	    this.pageSize = qat.model.pageSize;
	    this.userId = _userId;
	    this.id = _id;
	    this.emprId = _emprId;
	    this.permissaoTypeEnumValue = _permissaoType;
	    this.startPage = _iStartPage;
	    this.sortExpressions = null;
	    this.preQueryCount = _bCount;
	    this.maxPreQueryCount = 0;

	};