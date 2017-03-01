package org.talesolutions.cep;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
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
import com.qat.samples.sysmgmt.cfop.model.Cfop;
import com.qat.samples.sysmgmt.cfop.model.request.CfopInquiryRequest;
import com.qat.samples.sysmgmt.cnae.model.Cnae;
import com.qat.samples.sysmgmt.cnae.model.request.CnaeInquiryRequest;
import com.qat.samples.sysmgmt.cnae.model.response.CnaeResponse;
import com.qat.samples.sysmgmt.fiscal.model.Regime;
import com.qat.samples.sysmgmt.fiscal.model.request.RegimeInquiryRequest;
import com.qat.samples.sysmgmt.fiscal.model.response.RegimeResponse;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.emmanuelneri.app.model.ModelToken;

public class FiscalTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	// public static final String REST_SERVICE_URI =
	// "http://prod001.mybluemix.net/auth/api/authenticate/";

	// create by system gera-java version 1.0.0 31/07/2016 20:36 : 27//


	// create by system gera-java version 1.0.0 31/07/2016 21:29 : 16//



	// create by system gera-java version 1.0.0 31/07/2016 21:34 : 57//

	@Test
	public void listAllRegime() throws JsonParseException, JsonMappingException, IOException{

	    Integer count =0;
	    Integer id =10000;
	    RestTemplate restTemplate = new RestTemplate();

	    HttpHeaders headers = new HttpHeaders();
	    headers.set("Header", "value");
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.set("Other-Header", "othervalue");
	    headers.set("username", "taz@qat.com" );

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


	    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
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
	    headers.set("X-Auth-Token", obj.getToken() );
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:fiscal/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);

	 Regime objeto = new Regime();
	objeto.setId(id);
	objeto.setNome("'nome_1' - INSERT");
	objeto.setDescricao("'descricao_2' - INSERT");
	objeto.setModelAction(PersistenceActionEnum.INSERT);


	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new RegimeInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        RegimeResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/regime/fetchPage/",entitys,  RegimeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getRegimeList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(objeto);
	        System.out.println(jsonInString);
	        String requestJson = "{\"regime\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/regime/insert/",entitys,  RegimeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");

	 objeto = new Regime();
	objeto.setId(id);
	objeto.setNome("'nome_1' - UPDATE");
	objeto.setDescricao("'descricao_2' - UPDATE");
	objeto.setModelAction(PersistenceActionEnum.UPDATE);

	        objeto.setModifyDateUTC((new Date()).getTime());
	        objeto.setModifyUser("rod");
	        jsonInString = mapper.writeValueAsString(objeto);
	        requestJson = "{\"regime\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/regime/update/",entitys,  RegimeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        RegimeInquiryRequest request001 = new RegimeInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/regime/fetchPage/",entitys,  RegimeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getRegimeList().size(), 1);


	Assert.assertEquals(result.getRegimeList().get(0).getNome(),"'nome_1' - UPDATE");
	Assert.assertEquals(result.getRegimeList().get(0).getDescricao(),"'descricao_2' - UPDATE");


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        objeto.setModelAction(PersistenceActionEnum.DELETE);
	        jsonInString = mapper.writeValueAsString(objeto);
	        requestJson = "{\"regime\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/regime/delete/",entitys,  RegimeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	       // Assert.assertEquals(result.getRegimeList().size(), 19);


	    }




	@Test
	public void listAllCfop() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 1001;
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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:fiscal/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new CfopInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		CfopResponse result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/fetchPage/", entitys,
				CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getCfopList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"cfop\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/insert/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.UPDATE));
		requestJson = "{\"cfop\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/update/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.UPDATE));
		requestJson = "{\"cfop\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);

		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/update/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		CfopInquiryRequest request001 = new CfopInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/fetchPage/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getCfopList().size(), 1);

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper.writeValueAsString(Objects.insertCfop(id, TabelaEnum.CFOP, PersistenceActionEnum.DELETE));
		requestJson = "{\"cfop\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/delete/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		//=====================
		request001 = new CfopInquiryRequest();
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "fiscal/api/cfop/fetchPage/", entitys, CfopResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(new Long(result.getCfopList().size()), new Long(count));

	}



	// create by system gera-java version 1.0.0 31/07/2016 21:5 : 55//

	@Test
	public void listAllCnae() throws JsonParseException, JsonMappingException, IOException{

	    Integer count =0;
	    Integer id =103;
	    RestTemplate restTemplate = new RestTemplate();

	    HttpHeaders headers = new HttpHeaders();
	    headers.set("Header", "value");
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.set("Other-Header", "othervalue");
	    headers.set("username", "taz@qat.com" );

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


	    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
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
	    headers.set("X-Auth-Token", obj.getToken() );
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:fiscal/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);

	 Cnae objeto = new Cnae();
	objeto.setId(id);
	objeto.setCodigo("'codigo_1' - INSERT");
	objeto.setCnae("'cnae_2' - INSERT");
	objeto.setDescricao("'descricao_3' - INSERT");
	objeto.setAbreviado("'abreviado_4' - INSERT");
	objeto.setModelAction(PersistenceActionEnum.INSERT);


	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new CnaeInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        CnaeResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/fetchPage/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getCnaeList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(objeto);
	        System.out.println(jsonInString);
	        String requestJson = "{\"cnae\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/insert/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");
	        objeto.setDescricao("OBSERVACAO - UPDATE");
	        objeto.setModelAction(PersistenceActionEnum.UPDATE);
	        objeto.setModifyDateUTC((new Date()).getTime());
	        objeto.setModifyUser("rod");
	        objeto.setModelAction(PersistenceActionEnum.UPDATE);
	        jsonInString = mapper.writeValueAsString(objeto);
	        requestJson = "{\"cnae\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/update/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");

	 objeto = new Cnae();
	objeto.setId(id);
	objeto.setCodigo("'codigo_1' - UPDATE");
	objeto.setCnae("'cnae_2' - UPDATE");
	objeto.setDescricao("'descricao_3' - UPDATE");
	objeto.setAbreviado("'abreviado_4' - UPDATE");
	objeto.setModelAction(PersistenceActionEnum.UPDATE);


	        jsonInString = mapper.writeValueAsString(Objects.insertCnae(id, TabelaEnum.CNAE, PersistenceActionEnum.UPDATE));
	        requestJson = "{\"cnae\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);

	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/update/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);

	        CnaeInquiryRequest request001 = new CnaeInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/fetchPage/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCnaeList().size(), 1);


	objeto.setId(id);
	objeto.setCodigo("'codigo_1' - UPDATE");
	objeto.setCnae("'cnae_2' - UPDATE");
	objeto.setDescricao("'descricao_3' - UPDATE");
	objeto.setAbreviado("'abreviado_4' - UPDATE");


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        objeto.setModelAction(PersistenceActionEnum.DELETE);
	        jsonInString = mapper.writeValueAsString(objeto);
	        requestJson = "{\"cnae\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cnae/delete/",entitys,  CnaeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	    //    Assert.assertEquals(result.getCnaeList().size(), count.intValue());


	    }




}
