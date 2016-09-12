	//FetchAllRequest Object
	qat.model.fetchAllRequest = function()
	{

	};

	//FetchByIdRequest Object
	qat.model.fetchByIdRequest = function( _iInt)
	{
		this.fetchId = _iInt;
	};

	//FetchByIdRequest Object
	qat.model.PagedInquiryRequest = function( _iEmprId)
	{
		var _emprId = null;

	    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
	      _emprId = null;
	    }else{
	      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    }
		this.emprId = _emprId;

	};

	//RefreshRequest Object
	qat.model.refreshRequest = function( _iInt, _bList, _bPagedList)
	{
		this.refreshInt = _iInt;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	//RefreshRequest Object
	qat.model.refreshRequest = function( _iInt, _bList, _bPagedList)
	{
		this.refreshInt = _iInt;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	//CountyMaintenanceRequest Object
	qat.model.reqCounty = function(_oCounty, _bList, _bPagedList)
	{
		this.cfop = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

		//CountyMaintenanceRequest Object
	qat.model.reqSite = function(_oCounty, _bList, _bPagedList)
	{
		this.site = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqPlano = function(_oCounty, _bList, _bPagedList)
	{
		this.plano = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqProduto  = function(_oCounty, _bList, _bPagedList)
	{
		this.produtoEmpresa = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqCliente = function(_oCounty, _bList, _bPagedList)
	{
		this.cliente = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqFormaPg = function(_oCounty, _bList, _bPagedList)
	{
		this.formaPg = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqMarca = function(_oCounty, _bList, _bPagedList)
	{
		this.marca = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};


	qat.model.reqBanco = function(_oCounty, _bList, _bPagedList)
	{
		this.banco = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqContasPagar = function(_oCounty, _bList, _bPagedList)
	{
		this.financeiro = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqContasReceber = function(_oCounty, _bList, _bPagedList)
	{
		this.financeiro = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqAgencia = function(_oCounty, _bList, _bPagedList)
	{
		this.agencia = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqContato = function(_oCounty, _bList, _bPagedList)
	{
		this.contato = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	qat.model.reqServico = function(_oCounty, _bList, _bPagedList)
	{
		this.servico = _oCounty;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	//ProcedureMaintenanceRequest
	qat.model.reqProc = function ( _oProc, _bList, _bPagedList)
	{
		this.procedure = _oProc;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

	//PagedInquryRequest
	qat.model.pagedInquiryRequest = function ( _iStartPage, _bCount)
	{
		this.pageSize = 20;
		this.startPage = _iStartPage;
		this.sortExpressions = null;
		this.preQueryCount = _bCount;
		this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.siteInquiryRequest = function ( _iStartPage, _bCount,_url)
	{
		this.pageSize = 20;
		this.url = _url
		this.startPage = _iStartPage;
		this.sortExpressions = null;
		this.preQueryCount = _bCount;
		this.maxPreQueryCount = 0;
	};

	//siteInquryRequest
	qat.model.planoInquiryRequest = function ( _iStartPage, _bCount,_emprId)
	{
		this.pageSize = 20;
		this.emprId =  _emprId;
		this.startPage = _iStartPage;
		this.sortExpressions = null;
		this.preQueryCount = _bCount;
		this.maxPreQueryCount = 0;
	};

	qat.model.estadoInquiryRequest = function ( _iStartPage, _bCount,_emprId)
	{
		this.pageSize = 20;
		this.estadoId =  _emprId;
		this.startPage = _iStartPage;
		this.sortExpressions = null;
		this.preQueryCount = _bCount;
		this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.empresaInquiryRequest = function ( _iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
	{
		var _emprId = null;
	    if(localStorage.getItem('empresa') == null || localStorage.getItem('empresa') == ""){
	      _emprId = null;
	    }else{
	      _emprId = JSON.parse(localStorage.getItem('empresa')).id;
	    }
		this.pageSize = 20;
		this.userId = _userId;
		this.id = _id;
		this.emprId = _emprId;
		this.permissaoTypeEnumValue = _permissaoType;
		this.startPage = _iStartPage;
		this.sortExpressions = null;
		this.preQueryCount = _bCount;
		this.maxPreQueryCount = 0;
	};

	//empresaInquryRequest
	qat.model.transactionInquiryRequest = function ( _transaction ,_iStartPage, _bCount,_userId,_id,_emprId,_permissaoType)
	{
		this.transaction = _transaction;
		this.pageSize = 20;
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
	qat.model.pageData = function(_pageSize, _startPage, _bRowsAvailable, _totalRows)
	{
	 	this.pageSize =  _pageSize;
	 	this.startPage =  _startPage;
	 	this.moreRowsAvailable =  _bRowsAvailable;
	 	this.totalRowsAvailable = _totalRows;
	};

	//=========================
	qat.model.siteCriteria = function ( _url,_nome){
		this.nome =  _nome;
	 	this.url =  _url;
	}

		//ProcedureMaintenanceRequest
	qat.model.reqEmpr = function ( _oEmpr, _bList, _bPagedList)
	{
		this.empresa = _oEmpr;
		this.returnList = _bList;
		this.returnListPaged = _bPagedList;
	};

