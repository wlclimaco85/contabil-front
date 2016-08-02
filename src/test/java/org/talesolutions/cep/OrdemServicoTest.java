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
import com.qat.samples.sysmgmt.ordemServico.model.request.OrdemServicoInquiryRequest;
import com.qat.samples.sysmgmt.ordemServico.model.response.OrdemServicoResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.PagedInquiryRequest;

import br.com.emmanuelneri.app.model.ModelToken;

public class OrdemServicoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 02/08/2016 10:59 : 19//

	@Test
	public void listAllOrdemServico() throws JsonParseException, JsonMappingException, IOException{

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



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new OrdemServicoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        OrdemServicoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/fetchPage/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getOrdemServicoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"ordemservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/insert/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"ordemservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/update/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        OrdemServicoInquiryRequest request001 = new OrdemServicoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/fetchPage/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoList().size(), 1);


	Assert.assertEquals(result.getOrdemServicoList().get(0).getUserId(),"userId_1 - UPDATE");
	Assert.assertEquals(result.getOrdemServicoList().get(0).getNome(),"nome_2 - UPDATE");
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getData(),(new Long());
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getAssunto(),""assunto_4" - UPDATE");
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getStatusValue(),(1005);
//	objeto.setOrdemServicoItensList(new ArrayList<List<OrdemServicoItens>> ())



	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"ordemservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/delete/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:59 : 19//

	@Test
	public void listAllOrdemServicoType() throws JsonParseException, JsonMappingException, IOException{

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



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        OrdemServicoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicotype/fetchPage/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getOrdemServicoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"ordemservicotype\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicotype/insert/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"ordemservicotype\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicotype/update/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicotype/fetchPage/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoList().size(), 1);




	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"ordemservicotype\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicotype/delete/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:59 : 19//

//	@Test
//	public void listAllOrdemServicoStatus() throws JsonParseException, JsonMappingException, IOException{
//
//	    Integer count =0;
//	    Integer id =10000;
//	    RestTemplate restTemplate = new RestTemplate();
//
//	    HttpHeaders headers = new HttpHeaders();
//	    headers.set("Header", "value");
//	    headers.setContentType(MediaType.APPLICATION_JSON);
//	    headers.set("Other-Header", "othervalue");
//	    headers.set("username", "taz@qat.com" );
//
//	    Map<String, String> params = new HashMap<String, String>();
//	    params.put("username", "taz@qat.com");
//	    params.put("password", "taz@qat.com");
//
//	    RestTemplate rest = new RestTemplate();
//	    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//	    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//	    paramss.set("username", "taz@qat.com");
//	    paramss.set("password", "devil");
//	    URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//	    System.out.println("[" + tgtUrl + "]");
//
//
//	    System.out.println("[" + tgtUrl + "]");
//
//
//	    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
//	    System.out.println("[" + st.getBody() + "]");
//	    System.out.println("[" + st + "]");
//	    String tk = st.getBody();
//	    Class<? extends String> mt = tk.getClass();
//	    System.out.println("[" + mt + "]");
//	    ObjectMapper mapper = new ObjectMapper();
//	    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//	    System.out.println("[" + obj.getToken() + "]");
//
//	    headers = new HttpHeaders();
//	    headers.set("Header", "value");
//	    headers.setContentType(MediaType.APPLICATION_JSON);
//	    headers.set("Other-Header", "othervalue");
//	    headers.set("X-Auth-Token", obj.getToken() );
//	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:fiscal/api/cfop/fetchPage/";
//	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
//
//
//
//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new OrdemServicoStatusInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        OrdemServicoStatusResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicostatus/fetchPage/",entitys,  OrdemServicoStatusResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getOrdemServicoStatusList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoStatus(id,TabelaEnum.ORDEMSERVICOSTATUS,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"ordemservicostatus\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicostatus/insert/",entitys,  OrdemServicoStatusResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoStatus(id,TabelaEnum.ORDEMSERVICOSTATUS,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"ordemservicostatus\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicostatus/update/",entitys,  OrdemServicoStatusResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        OrdemServicoStatusInquiryRequest request001 = new OrdemServicoStatusInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicostatus/fetchPage/",entitys,  OrdemServicoStatusResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getOrdemServicoStatusList().size(), 1);
//
//
//	Assert.assertEquals(result.getOrdemServicoStatusList().get(0).getNome(),(1001);
//	Assert.assertEquals(result.getOrdemServicoStatusList().get(0).getCota(),(1002);
//	Assert.assertEquals(result.getOrdemServicoStatusList().get(0).getPorcentagem(),(1003);
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoStatus(id,TabelaEnum.ORDEMSERVICOSTATUS,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"ordemservicostatus\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicostatus/delete/",entitys,  OrdemServicoStatusResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getOrdemServicoStatusList().size(), count.intValue());
//
//
//	    }
//
//
//
//
//	// create by system gera-java version 1.0.0 02/08/2016 10:59 : 19//
//
//	@Test
//	public void listAllOrdemServicoItens() throws JsonParseException, JsonMappingException, IOException{
//
//	    Integer count =0;
//	    Integer id =10000;
//	    RestTemplate restTemplate = new RestTemplate();
//
//	    HttpHeaders headers = new HttpHeaders();
//	    headers.set("Header", "value");
//	    headers.setContentType(MediaType.APPLICATION_JSON);
//	    headers.set("Other-Header", "othervalue");
//	    headers.set("username", "taz@qat.com" );
//
//	    Map<String, String> params = new HashMap<String, String>();
//	    params.put("username", "taz@qat.com");
//	    params.put("password", "taz@qat.com");
//
//	    RestTemplate rest = new RestTemplate();
//	    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
//	    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
//	    paramss.set("username", "taz@qat.com");
//	    paramss.set("password", "devil");
//	    URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
//	    System.out.println("[" + tgtUrl + "]");
//
//
//	    System.out.println("[" + tgtUrl + "]");
//
//
//	    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
//	    System.out.println("[" + st.getBody() + "]");
//	    System.out.println("[" + st + "]");
//	    String tk = st.getBody();
//	    Class<? extends String> mt = tk.getClass();
//	    System.out.println("[" + mt + "]");
//	    ObjectMapper mapper = new ObjectMapper();
//	    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);
//
//	    System.out.println("[" + obj.getToken() + "]");
//
//	    headers = new HttpHeaders();
//	    headers.set("Header", "value");
//	    headers.setContentType(MediaType.APPLICATION_JSON);
//	    headers.set("Other-Header", "othervalue");
//	    headers.set("X-Auth-Token", obj.getToken() );
//	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:fiscal/api/cfop/fetchPage/";
//	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
//
//
//
//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new OrdemServicoItensInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        OrdemServicoItensResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/fetchPage/",entitys,  OrdemServicoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getOrdemServicoItensList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/insert/",entitys,  OrdemServicoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/update/",entitys,  OrdemServicoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        OrdemServicoItensInquiryRequest request001 = new OrdemServicoItensInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/fetchPage/",entitys,  OrdemServicoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getOrdemServicoItensList().size(), 1);
//
//
//	Assert.assertEquals(result.getOrdemServicoItensList().get(0).getData(),(new Long());
//	Assert.assertEquals(result.getOrdemServicoItensList().get(0).getTexto(),""texto_2" - UPDATE");
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/delete/",entitys,  OrdemServicoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getOrdemServicoItensList().size(), count.intValue());
//
//
//	    }
//

//	=====================================TESTE===========================================================
}
