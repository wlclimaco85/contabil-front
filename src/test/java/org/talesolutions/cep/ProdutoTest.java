package org.talesolutions.cep;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qat.framework.model.BaseModel.PersistenceActionEnum;
import com.qat.samples.sysmgmt.cfop.model.request.CfopInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.GrupoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.MarcaInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.ProdutoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.ProdutoEmpresaInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.SubGrupoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.TributacaoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.UniMedInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;
import com.qat.samples.sysmgmt.produto.model.response.EstoqueResponse;
import com.qat.samples.sysmgmt.produto.model.response.GrupoResponse;
import com.qat.samples.sysmgmt.produto.model.response.MarcaResponse;
import com.qat.samples.sysmgmt.produto.model.response.PorcaoItensResponse;
import com.qat.samples.sysmgmt.produto.model.response.PorcaoResponse;
import com.qat.samples.sysmgmt.produto.model.response.ProdutoEmpresaResponse;
import com.qat.samples.sysmgmt.produto.model.response.ProdutoResponse;
import com.qat.samples.sysmgmt.produto.model.response.RentabilidadeItensResponse;
import com.qat.samples.sysmgmt.produto.model.response.RentabilidadeResponse;
import com.qat.samples.sysmgmt.produto.model.response.SubGrupoResponse;
import com.qat.samples.sysmgmt.produto.model.response.TributacaoResponse;
import com.qat.samples.sysmgmt.produto.model.response.UniMedResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.PagedInquiryRequest;

import br.com.emmanuelneri.app.model.ModelToken;

public class ProdutoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllProdutoParent() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new ProdutoEmpresaInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		ProdutoEmpresaResponse result = restTemplate.postForObject(
				REST_SERVICE_URI + "produto/api/produtoParent/fetchPage/", entitys, ProdutoEmpresaResponse.class);
	//	Assert.assertEquals(result.isOperationSuccess(), true);
	//	count = result.getProdutoParentList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertProdutoParent(id, TabelaEnum.PRODUTOPARENT, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"produtoParent\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/produtoParent/insert/", entitys,
//				ProdutoParentResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertProdutoParent(id, TabelaEnum.PRODUTOPARENT, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"produtoParent\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/produtoParent/update/", entitys,
//				ProdutoParentResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		ProdutoParentInquiryRequest request001 = new ProdutoParentInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/produtoParent/fetchPage/", entitys,
//				ProdutoParentResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getProdutoParentList().size(), 1);
//
//		// Assert.assertEquals(result.getProdutoParentList().get(0).getTributacao(),(1001);
//		// objeto.setEstoqueList(new ArrayList<List<Estoque>> ())
//		// objeto.get().add(new List<Estoque>());
//		// objeto.setPrecoList(new ArrayList<List<Preco>> ())
//		// objeto.get().add(new List<Preco>());
//		// objeto.setCustoList(new ArrayList<List<Custo>> ())
//		// objeto.get().add(new List<Custo>());
//		// objeto.setPorcaoList(new ArrayList<List<Porcao>> ())
//		// objeto.get().add(new List<Porcao>());
//		// objeto.setRentabilidadeList(new ArrayList<List<Rentabilidade>> ())
//		// objeto.get().add(new List<Rentabilidade>());
//		// objeto.setCfopList(new ArrayList<List<CfopPessoa>> ())
//		// objeto.get().add(new List<CfopPessoa>());
//		// Assert.assertEquals(result.getProdutoParentList().get(0).getDataValidade(),(new
//		// Long());
//		// Assert.assertEquals(result.getProdutoParentList().get(0).getLocalizacao(),""localizacao_9"
//		// - UPDATE");
//		// Assert.assertEquals(result.getProdutoParentList().get(0).getComissao(),""comissao_10"
//		// - UPDATE");
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertProdutoParent(id, TabelaEnum.PRODUTOPARENT, PersistenceActionEnum.DELETE));
//		requestJson = "{\"produtoParent\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/produtoParent/delete/", entitys,
//				ProdutoParentResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getProdutoParentList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllProduto() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new ProdutoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		ProdutoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/fetchPage/", entitys,
				ProdutoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getProdutoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertProduto(id, TabelaEnum.PRODUTO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"produto\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/insert/", entitys,
				ProdutoResponse.class);
	//	Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertProduto(id, TabelaEnum.PRODUTO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"produto\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/update/", entitys,
				ProdutoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		ProdutoInquiryRequest request001 = new ProdutoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/fetchPage/", entitys,
				ProdutoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getProdutoList().size(), 1);

		// Assert.assertEquals(result.getProdutoList().get(0).getCodigo(),""codigo_1"
		// - UPDATE");
		// Assert.assertEquals(result.getProdutoList().get(0).getCdBarras(),""cdBarras_2"
		// - UPDATE");
		// Assert.assertEquals(result.getProdutoList().get(0).getProduto(),""produto_3"
		// - UPDATE");
		// Assert.assertEquals(result.getProdutoList().get(0).getDataCreate(),(new
		// Long());
		// Assert.assertEquals(result.getProdutoList().get(0).getAplicacao(),""aplicacao_5"
		// - UPDATE");
		// Assert.assertEquals(result.getProdutoList().get(0).getFracao(),""fracao_6"
		// - UPDATE");
		// Assert.assertEquals(result.getProdutoList().get(0).getClassificacao(),(1007);
		// Assert.assertEquals(result.getProdutoList().get(0).getUniMed(),(1008);
		// Assert.assertEquals(result.getProdutoList().get(0).getGrupo(),(1009);
		// Assert.assertEquals(result.getProdutoList().get(0).getSubGrupo(),(1010);
		// objeto.setMarca(new ArrayList<List<MarcaProd>> ())
		// objeto.get().add(new List<MarcaProd>());
		// Assert.assertEquals(result.getProdutoList().get(0).getPorcao(),(10.00);
		// Assert.assertEquals(result.getProdutoList().get(0).getPesoBruto(),(10.00);
		// Assert.assertEquals(result.getProdutoList().get(0).getPesoLiquido(),(10.00);
		// Assert.assertEquals(result.getProdutoList().get(0).getModoUso(),""modoUso_15"
		// - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertProduto(id, TabelaEnum.PRODUTO, PersistenceActionEnum.DELETE));
		requestJson = "{\"produto\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/delete/", entitys,
				ProdutoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getProdutoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//
//
//	@Test
//	public void listAllCfop() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new CfopInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		CfopResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/cfop/fetchPage/", entitys,
//				CfopResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getCfopList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"cfop\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/cfop/insert/", entitys, CfopResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"cfop\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/cfop/update/", entitys, CfopResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		CfopInquiryRequest request001 = new CfopInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/cfop/fetchPage/", entitys,
//				CfopResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getCfopList().size(), 1);
//
//		// Assert.assertEquals(result.getCfopList().get(0).getCfop(),""cfop_1" -
//		// UPDATE");
//		// Assert.assertEquals(result.getCfopList().get(0).getNatureza(),""natureza_2"
//		// - UPDATE");
//		// Assert.assertEquals(result.getCfopList().get(0).getSimplificado(),""simplificado_3"
//		// - UPDATE");
//		// Assert.assertEquals(result.getCfopList().get(0).getCfopTypeEnum(),(1004);
//		// Assert.assertEquals(result.getCfopList().get(0).getIcms(),(10.00);
//		// Assert.assertEquals(result.getCfopList().get(0).getIcmsReduzido(),(10.00);
//		// Assert.assertEquals(result.getCfopList().get(0).getMargemAgregadaST(),(10.00);
//		// Assert.assertEquals(result.getCfopList().get(0).getCstPrincipal(),(10.00);
//		// Assert.assertEquals(result.getCfopList().get(0).getClassFiscal(),(10.00);
//		// Assert.assertEquals(result.getCfopList().get(0).getObservacao(),""observacao_10"
//		// - UPDATE");
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.DELETE));
//		requestJson = "{\"cfop\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/cfop/delete/", entitys, CfopResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getCfopList().size(), count.intValue());
//
//	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllMarca() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10005;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new MarcaInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		MarcaResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marca/fetchPage/", entitys,
				MarcaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getMarcaList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertMarca(id, TabelaEnum.MARCA, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"marca\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marca/insert/", entitys,
				MarcaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertMarca(id, TabelaEnum.MARCA, PersistenceActionEnum.UPDATE));
		requestJson = "{\"marca\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marca/update/", entitys,
				MarcaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		MarcaInquiryRequest request001 = new MarcaInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marca/fetchPage/", entitys,
				MarcaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getMarcaList().size(), 9);
//
//		Assert.assertEquals(result.getMarcaList().get(0).getMarca(), "gfgdfg");
//		Assert.assertEquals(result.getMarcaList().get(0).getFabricante(), "fabricante_2 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertMarca(id, TabelaEnum.MARCA, PersistenceActionEnum.DELETE));
		requestJson = "{\"marca\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marca/delete/", entitys,
				MarcaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
	//	Assert.assertEquals(result.getMarcaList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

//	@Test
//	public void listAllMarcaProduto() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new MarcaInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		MarcaResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marcaproduto/fetchPage/",
//				entitys, MarcaResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getMarcaList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertMarcaProduto(id, TabelaEnum.MARCAPRODUTO, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"marcaproduto\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marcaproduto/insert/", entitys,
//				MarcaResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertMarcaProduto(id, TabelaEnum.MARCAPRODUTO, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"marcaproduto\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marcaproduto/update/", entitys,
//				MarcaResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		MarcaInquiryRequest request001 = new MarcaInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marcaproduto/fetchPage/", entitys,
//				MarcaResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getMarcaList().size(), 1);
//
//		// Assert.assertEquals(result.getMarcaList().get(0).getMarcaId(),(1001);
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertMarcaProduto(id, TabelaEnum.MARCAPRODUTO, PersistenceActionEnum.DELETE));
//		requestJson = "{\"marcaproduto\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/marcaproduto/delete/", entitys,
//				MarcaResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getMarcaList().size(), count.intValue());
//
//	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllGrupo() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new GrupoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		GrupoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/grupo/fetchPage/", entitys,
				GrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getGrupoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertGrupo(id, TabelaEnum.GRUPO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"grupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/grupo/insert/", entitys,
				GrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertGrupo(id, TabelaEnum.GRUPO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"grupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/grupo/update/", entitys,
				GrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		GrupoInquiryRequest request001 = new GrupoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/grupo/fetchPage/", entitys,
				GrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getGrupoList().size(), 1);

		Assert.assertEquals(result.getGrupoList().get(0).getGrupo(), "grupo_1 - UPDATE");
		Assert.assertEquals(result.getGrupoList().get(0).getDescricao(), "descricao_2 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertGrupo(id, TabelaEnum.GRUPO, PersistenceActionEnum.DELETE));
		requestJson = "{\"grupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/grupo/delete/", entitys,
				GrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getGrupoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllSubGrupo() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new SubGrupoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		SubGrupoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/subGrupo/fetchPage/",
				entitys, SubGrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getSubGrupoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertSubGrupo(id, TabelaEnum.SUBGRUPO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"subGrupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/subGrupo/insert/", entitys,
				SubGrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertSubGrupo(id, TabelaEnum.SUBGRUPO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"subGrupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/subGrupo/update/", entitys,
				SubGrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		SubGrupoInquiryRequest request001 = new SubGrupoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/subGrupo/fetchPage/", entitys,
				SubGrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getSubGrupoList().size(), 1);

		Assert.assertEquals(result.getSubGrupoList().get(0).getSubGrupo(), "subGrupo_1 - UPDATE");
		Assert.assertEquals(result.getSubGrupoList().get(0).getDescricao(), "descricao_2 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertSubGrupo(id, TabelaEnum.SUBGRUPO, PersistenceActionEnum.DELETE));
		requestJson = "{\"subGrupo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/subGrupo/delete/", entitys,
				SubGrupoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getSubGrupoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllUniMed() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new UniMedInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		UniMedResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/unimed/fetchPage/", entitys,
				UniMedResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getUnimedList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertUniMed(id, TabelaEnum.UNIMED, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"unimed\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/unimed/insert/", entitys,
				UniMedResponse.class);
	//	Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertUniMed(id, TabelaEnum.UNIMED, PersistenceActionEnum.UPDATE));
		requestJson = "{\"unimed\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/unimed/update/", entitys,
				UniMedResponse.class);
	//	Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		UniMedInquiryRequest request001 = new UniMedInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/unimed/fetchPage/", entitys,
				UniMedResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getUnimedList().size(), 1);

		Assert.assertEquals(result.getUnimedList().get(0).getUnimed(), null);
		Assert.assertEquals(result.getUnimedList().get(0).getSigla(), null);

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertUniMed(id, TabelaEnum.UNIMED, PersistenceActionEnum.DELETE));
		requestJson = "{\"unimed\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/unimed/delete/", entitys,
				UniMedResponse.class);
	//	Assert.assertEquals(result.isOperationSuccess(), true);
	//	Assert.assertEquals(result.getUnimedList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

//	@Test
//	public void listAllTributacao() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new TributacaoInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		TributacaoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/tributacao/fetchPage/",
//				entitys, TributacaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getTributacaoList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertTributacao(id, TabelaEnum.TRIBUTACAO, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"tributacao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/tributacao/insert/", entitys,
//				TributacaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertTributacao(id, TabelaEnum.TRIBUTACAO, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"tributacao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/tributacao/update/", entitys,
//				TributacaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		TributacaoInquiryRequest request001 = new TributacaoInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/tributacao/fetchPage/", entitys,
//				TributacaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getTributacaoList().size(), 1);
//
//		//
//		// Assert.assertEquals(result.getTributacaoList().get(0).getCstId(),(1001);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getIcms(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getSt(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getMva(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getCsosnId(),(1005);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getIpi(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getIat(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getIppt(),(10.00);
//		// Assert.assertEquals(result.getTributacaoList().get(0).getIncidencia(),(1009);
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertTributacao(id, TabelaEnum.TRIBUTACAO, PersistenceActionEnum.DELETE));
//		requestJson = "{\"tributacao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/tributacao/delete/", entitys,
//				TributacaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getTributacaoList().size(), count.intValue());
//
//	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//
	//
	// @Test
	// public void listAllCusto() throws JsonParseException,
	// JsonMappingException, IOException{
	//
	// Integer count =0;
	// Integer id =10000;
	// RestTemplate restTemplate = new RestTemplate();
	//
	// HttpHeaders headers = new HttpHeaders();
	// headers.set("Header", "value");
	// headers.setContentType(MediaType.APPLICATION_JSON);
	// headers.set("Other-Header", "othervalue");
	// headers.set("username", "taz@qat.com" );
	//
	// Map<String, String> params = new HashMap<String, String>();
	// params.put("username", "taz@qat.com");
	// params.put("password", "taz@qat.com");
	//
	// RestTemplate rest = new RestTemplate();
	// rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(),
	// new FormHttpMessageConverter()));
	// MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String,
	// String>();
	// paramss.set("username", "taz@qat.com");
	// paramss.set("password", "devil");
	// URI tgtUrl = rest.postForLocation(REST_SERVICE_URI +
	// "auth/api/authenticate", paramss, Collections.emptyMap());
	// System.out.println("[" + tgtUrl + "]");
	//
	//
	// System.out.println("[" + tgtUrl + "]");
	//
	//
	// ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI +
	// "auth/api/authenticate", paramss, String.class);
	// System.out.println("[" + st.getBody() + "]");
	// System.out.println("[" + st + "]");
	// String tk = st.getBody();
	// Class<? extends String> mt = tk.getClass();
	// System.out.println("[" + mt + "]");
	// ObjectMapper mapper = new ObjectMapper();
	// ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
	//
	// System.out.println("[" + obj.getToken() + "]");
	//
	// headers = new HttpHeaders();
	// headers.set("Header", "value");
	// headers.setContentType(MediaType.APPLICATION_JSON);
	// headers.set("Other-Header", "othervalue");
	// headers.set("X-Auth-Token", obj.getToken() );
	// String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null,
	// preQueryCount: true, maxPreQueryCount: 0},
	// token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420,
	// url:produto/api/cfop/fetchPage/";
	// HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
	//
	//
	//
	// //=========== fetch
	// ================================================================
	// System.out.println("==================================FetchALL==============================================");
	// String jsonInString = mapper.writeValueAsString(new
	// CustoInquiryRequest());
	// System.out.println(jsonInString);
	// HttpEntity<String> entitys = new
	// HttpEntity<String>(jsonInString,headers);
	// CustoResponse result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custo/fetchPage/",entitys, CustoResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// count = result.getCustoList().size();
	//
	//
	// //=========== Insert
	// ================================================================
	// System.out.println("==================================INSERT==============================================");
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCusto(id,TabelaEnum.CUSTO,PersistenceActionEnum.INSERT));
	// System.out.println(jsonInString);
	// String requestJson = "{\"custo\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custo/insert/",entitys, CustoResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	//
	//
	// //=========== Update
	// ================================================================
	// System.out.println("==================================UPDATE==============================================");
	//
	//
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCusto(id,TabelaEnum.CUSTO,PersistenceActionEnum.UPDATE));
	// requestJson = "{\"custo\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custo/update/",entitys, CustoResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	//
	//
	// //=========== FetchbyID
	// ================================================================
	// System.out.println("==================================FetchID==============================================");
	//
	//
	// CustoInquiryRequest request001 = new CustoInquiryRequest();
	// request001.setId(id);
	// jsonInString = mapper.writeValueAsString(request001);
	// System.out.println(jsonInString);
	// entitys = new HttpEntity<String>(jsonInString,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custo/fetchPage/",entitys, CustoResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// Assert.assertEquals(result.getCustoList().size(), 1);
	//
	//
	// Assert.assertEquals(result.getCustoList().get(0).getValor(),(10.00);
	// objeto.setCusto(new ArrayList<List<CustoItem>> ())
	// objeto.get().add(new List<CustoItem>());
	//
	//
	// //=======================
	// System.out.println("==================================DELETE==============================================");
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCusto(id,TabelaEnum.CUSTO,PersistenceActionEnum.DELETE));
	// requestJson = "{\"custo\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custo/delete/",entitys, CustoResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// Assert.assertEquals(result.getCustoList().size(), count.intValue());
	//
	//
	// }
	//

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	// @Test
	// public void listAllCustoItens() throws JsonParseException,
	// JsonMappingException, IOException{
	//
	// Integer count =0;
	// Integer id =10000;
	// RestTemplate restTemplate = new RestTemplate();
	//
	// HttpHeaders headers = new HttpHeaders();
	// headers.set("Header", "value");
	// headers.setContentType(MediaType.APPLICATION_JSON);
	// headers.set("Other-Header", "othervalue");
	// headers.set("username", "taz@qat.com" );
	//
	// Map<String, String> params = new HashMap<String, String>();
	// params.put("username", "taz@qat.com");
	// params.put("password", "taz@qat.com");
	//
	// RestTemplate rest = new RestTemplate();
	// rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(),
	// new FormHttpMessageConverter()));
	// MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String,
	// String>();
	// paramss.set("username", "taz@qat.com");
	// paramss.set("password", "devil");
	// URI tgtUrl = rest.postForLocation(REST_SERVICE_URI +
	// "auth/api/authenticate", paramss, Collections.emptyMap());
	// System.out.println("[" + tgtUrl + "]");
	//
	//
	// System.out.println("[" + tgtUrl + "]");
	//
	//
	// ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI +
	// "auth/api/authenticate", paramss, String.class);
	// System.out.println("[" + st.getBody() + "]");
	// System.out.println("[" + st + "]");
	// String tk = st.getBody();
	// Class<? extends String> mt = tk.getClass();
	// System.out.println("[" + mt + "]");
	// ObjectMapper mapper = new ObjectMapper();
	// ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
	//
	// System.out.println("[" + obj.getToken() + "]");
	//
	// headers = new HttpHeaders();
	// headers.set("Header", "value");
	// headers.setContentType(MediaType.APPLICATION_JSON);
	// headers.set("Other-Header", "othervalue");
	// headers.set("X-Auth-Token", obj.getToken() );
	// String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null,
	// preQueryCount: true, maxPreQueryCount: 0},
	// token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420,
	// url:produto/api/cfop/fetchPage/";
	// HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
	//
	//
	//
	// //=========== fetch
	// ================================================================
	// System.out.println("==================================FetchALL==============================================");
	// String jsonInString = mapper.writeValueAsString(new
	// CustoItensInquiryRequest());
	// System.out.println(jsonInString);
	// HttpEntity<String> entitys = new
	// HttpEntity<String>(jsonInString,headers);
	// CustoItensResponse result = restTemplate.postForObject( REST_SERVICE_URI
	// + "produto/api/custoitens/fetchPage/",entitys, CustoItensResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// count = result.getCustoItensList().size();
	//
	//
	// //=========== Insert
	// ================================================================
	// System.out.println("==================================INSERT==============================================");
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCustoItens(id,TabelaEnum.CUSTOITENS,PersistenceActionEnum.INSERT));
	// System.out.println(jsonInString);
	// String requestJson = "{\"custoitens\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custoitens/insert/",entitys, CustoItensResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	//
	//
	// //=========== Update
	// ================================================================
	// System.out.println("==================================UPDATE==============================================");
	//
	//
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCustoItens(id,TabelaEnum.CUSTOITENS,PersistenceActionEnum.UPDATE));
	// requestJson = "{\"custoitens\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custoitens/update/",entitys, CustoItensResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	//
	//
	// //=========== FetchbyID
	// ================================================================
	// System.out.println("==================================FetchID==============================================");
	//
	//
	// CustoItensInquiryRequest request001 = new CustoItensInquiryRequest();
	// request001.setId(id);
	// jsonInString = mapper.writeValueAsString(request001);
	// System.out.println(jsonInString);
	// entitys = new HttpEntity<String>(jsonInString,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custoitens/fetchPage/",entitys, CustoItensResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// Assert.assertEquals(result.getCustoItensList().size(), 1);
	//
	//
	// Assert.assertEquals(result.getCustoItensList().get(0).getCusto(),(1001);
	// Assert.assertEquals(result.getCustoItensList().get(0).getCustoDesp(),(1002);
	//
	//
	// //=======================
	// System.out.println("==================================DELETE==============================================");
	// jsonInString =
	// mapper.writeValueAsString(Objects.insertCustoItens(id,TabelaEnum.CUSTOITENS,PersistenceActionEnum.DELETE));
	// requestJson = "{\"custoitens\":"+jsonInString+"}";
	// entitys = new HttpEntity<String>(requestJson,headers);
	// result = restTemplate.postForObject( REST_SERVICE_URI +
	// "produto/api/custoitens/delete/",entitys, CustoItensResponse.class);
	// Assert.assertEquals(result.isOperationSuccess(), true);
	// Assert.assertEquals(result.getCustoItensList().size(), count.intValue());
	//
	//
	// }
	//
	//

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

//	@Test
//	public void listAllEstoque() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		EstoqueResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/estoque/fetchPage/", entitys,
//				EstoqueResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getEstoqueList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertEstoque(id, TabelaEnum.ESTOQUE, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"estoque\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/estoque/insert/", entitys,
//				EstoqueResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertEstoque(id, TabelaEnum.ESTOQUE, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"estoque\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/estoque/update/", entitys,
//				EstoqueResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		PagedInquiryRequest request001 = new PagedInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/estoque/fetchPage/", entitys,
//				EstoqueResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getEstoqueList().size(), 1);
//
//		// Assert.assertEquals(result.getEstoqueList().get(0).getEstoqueTypeEnum(),(1001);
//		// Assert.assertEquals(result.getEstoqueList().get(0).getUltimoMov(),(new
//		// Long());
//		// Assert.assertEquals(result.getEstoqueList().get(0).getQuant(),(10.00);
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertEstoque(id, TabelaEnum.ESTOQUE, PersistenceActionEnum.DELETE));
//		requestJson = "{\"estoque\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/estoque/delete/", entitys,
//				EstoqueResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getEstoqueList().size(), count.intValue());
//
//	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllPorcao() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		PorcaoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcao/fetchPage/", entitys,
//				PorcaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getPorcaoList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertPorcao(id, TabelaEnum.PORCAO, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"porcao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcao/insert/", entitys,
//				PorcaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertPorcao(id, TabelaEnum.PORCAO, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"porcao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcao/update/", entitys,
//				PorcaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		PagedInquiryRequest request001 = new PagedInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcao/fetchPage/", entitys,
//				PorcaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getPorcaoList().size(), 1);
//
//		// Assert.assertEquals(result.getPorcaoList().get(0).getValor(),(10.00);
//		// objeto.setPorcaoItens(new ArrayList<List<PorcaoItem>> ())
//		// objeto.get().add(new List<PorcaoItem>());
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper
//				.writeValueAsString(Objects.insertPorcao(id, TabelaEnum.PORCAO, PersistenceActionEnum.DELETE));
//		requestJson = "{\"porcao\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcao/delete/", entitys,
//				PorcaoResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getPorcaoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//

	@Test
	public void listAllPorcaoItens() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

		Map<String, String> params = new HashMap<String, String>();
		params.put("username", "taz@qat.com");
		params.put("password", "taz@qat.com");

		RestTemplate rest = new RestTemplate();
		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		paramss.set("username", "taz@qat.com");
		paramss.set("password", "devil");
		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		System.out.println("[" + tgtUrl + "]");

		System.out.println("[" + tgtUrl + "]");

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
		System.out.println("[" + st.getBody() + "]");
		System.out.println("[" + st + "]");
		String tk = st.getBody();
		Class<? extends String> mt = tk.getClass();
		System.out.println("[" + mt + "]");
		ObjectMapper mapper = new ObjectMapper();
		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		System.out.println("[" + obj.getToken() + "]");

		headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		PorcaoItensResponse result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcaoitens/fetchPage/",
//				entitys, PorcaoItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getPorcaoItensList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertPorcaoItens(id, TabelaEnum.PORCAOITENS, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"porcaoitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcaoitens/insert/", entitys,
//				PorcaoItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertPorcaoItens(id, TabelaEnum.PORCAOITENS, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"porcaoitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcaoitens/update/", entitys,
//				PorcaoItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		PagedInquiryRequest request001 = new PagedInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcaoitens/fetchPage/", entitys,
//				PorcaoItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getPorcaoItensList().size(), 1);
//
//		// Assert.assertEquals(result.getPorcaoItensList().get(0).getPorcao(),(10.00);
//		// Assert.assertEquals(result.getPorcaoItensList().get(0).getVd(),(10.00);
//		// Assert.assertEquals(result.getPorcaoItensList().get(0).getUnimed(),(1003);
//		Assert.assertEquals(result.getPorcaoItensList().get(0).getNome(), "nome_4 - UPDATE");
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertPorcaoItens(id, TabelaEnum.PORCAOITENS, PersistenceActionEnum.DELETE));
//		requestJson = "{\"porcaoitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/porcaoitens/delete/", entitys,
//				PorcaoItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getPorcaoItensList().size(), count.intValue());

	}

//	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//
//
//	@Test
//	public void listAllRentabilidade() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		RentabilidadeResponse result = restTemplate.postForObject(
//				REST_SERVICE_URI + "produto/api/rentabilidade/fetchPage/", entitys, RentabilidadeResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getRentabilidadeList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidade(id, TabelaEnum.RENTABILIDADE, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"rentabilidade\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidade/insert/", entitys,
//				RentabilidadeResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidade(id, TabelaEnum.RENTABILIDADE, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"rentabilidade\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidade/update/", entitys,
//				RentabilidadeResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		PagedInquiryRequest request001 = new PagedInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidade/fetchPage/", entitys,
//				RentabilidadeResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getRentabilidadeList().size(), 1);
//
//		// objeto.setRentabilidadeList(new ArrayList<List<RentabilidadeItens>>
//		// ())
//		// objeto.get().add(new List<RentabilidadeItens>());
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidade(id, TabelaEnum.RENTABILIDADE, PersistenceActionEnum.DELETE));
//		requestJson = "{\"rentabilidade\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidade/delete/", entitys,
//				RentabilidadeResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getRentabilidadeList().size(), count.intValue());
//
//	}
//
//	// create by system gera-java version 1.0.0 02/08/2016 11:38 : 45//
//
//	@Test
//	public void listAllRentabilidadeItens() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("username", "taz@qat.com");
//
//		Map<String, String> params = new HashMap<String, String>();
//		params.put("username", "taz@qat.com");
//		params.put("password", "taz@qat.com");
//
//		RestTemplate rest = new RestTemplate();
//		rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//		MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//		paramss.set("username", "taz@qat.com");
//		paramss.set("password", "devil");
//		URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//		System.out.println("[" + tgtUrl + "]");
//
//		System.out.println("[" + tgtUrl + "]");
//
//		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
//				String.class);
//		System.out.println("[" + st.getBody() + "]");
//		System.out.println("[" + st + "]");
//		String tk = st.getBody();
//		Class<? extends String> mt = tk.getClass();
//		System.out.println("[" + mt + "]");
//		ObjectMapper mapper = new ObjectMapper();
//		ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//		System.out.println("[" + obj.getToken() + "]");
//
//		headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Auth-Token", obj.getToken());
//		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:produto/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//		String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
//		System.out.println(jsonInString);
//		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
//		RentabilidadeItensResponse result = restTemplate.postForObject(
//				REST_SERVICE_URI + "produto/api/rentabilidadeitens/fetchPage/", entitys,
//				RentabilidadeItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		count = result.getRentabilidadeItensList().size();
//
//		// =========== Insert
//		// ================================================================
//		System.out.println("==================================INSERT==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidadeItens(id, TabelaEnum.RENTABILIDADEITENS, PersistenceActionEnum.INSERT));
//		System.out.println(jsonInString);
//		String requestJson = "{\"rentabilidadeitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidadeitens/insert/", entitys,
//				RentabilidadeItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== Update
//		// ================================================================
//		System.out.println("==================================UPDATE==============================================");
//
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidadeItens(id, TabelaEnum.RENTABILIDADEITENS, PersistenceActionEnum.UPDATE));
//		requestJson = "{\"rentabilidadeitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidadeitens/update/", entitys,
//				RentabilidadeItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//
//		// =========== FetchbyID
//		// ================================================================
//		System.out.println("==================================FetchID==============================================");
//
//		PagedInquiryRequest request001 = new PagedInquiryRequest();
//		request001.setId(id);
//		jsonInString = mapper.writeValueAsString(request001);
//		System.out.println(jsonInString);
//		entitys = new HttpEntity<String>(jsonInString, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidadeitens/fetchPage/", entitys,
//				RentabilidadeItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getRentabilidadeItensList().size(), 1);
//
//		// =======================
//		System.out.println("==================================DELETE==============================================");
//		jsonInString = mapper.writeValueAsString(
//				Objects.insertRentabilidadeItens(id, TabelaEnum.RENTABILIDADEITENS, PersistenceActionEnum.DELETE));
//		requestJson = "{\"rentabilidadeitens\":" + jsonInString + "}";
//		entitys = new HttpEntity<String>(requestJson, headers);
//		result = restTemplate.postForObject(REST_SERVICE_URI + "produto/api/rentabilidadeitens/delete/", entitys,
//				RentabilidadeItensResponse.class);
//		Assert.assertEquals(result.isOperationSuccess(), true);
//		Assert.assertEquals(result.getRentabilidadeItensList().size(), count.intValue());
//
//	}

	// =====================================TESTE===========================================================

}
