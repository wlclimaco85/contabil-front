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
import com.qat.samples.sysmgmt.historico.model.request.HistoricoInquiryRequest;
import com.qat.samples.sysmgmt.historico.model.response.HistoricoResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.emmanuelneri.app.model.ModelToken;

public class HistoricoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 02/08/2016 10:55 : 19//

	@Test
	public void listAllHistoricoUtil() throws JsonParseException, JsonMappingException, IOException{

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


//
//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new HistoricoUtilInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        HistoricoUtilResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoutil/fetchPage/",entitys,  HistoricoUtilResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getHistoricoUtilList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoUtil(id,TabelaEnum.HISTORICOUTIL,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"historicoutil\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoutil/insert/",entitys,  HistoricoUtilResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoUtil(id,TabelaEnum.HISTORICOUTIL,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"historicoutil\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoutil/update/",entitys,  HistoricoUtilResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        HistoricoUtilInquiryRequest request001 = new HistoricoUtilInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoutil/fetchPage/",entitys,  HistoricoUtilResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoUtilList().size(), 1);
//
//
//	Assert.assertEquals(result.getHistoricoUtilList().get(0).getDataMovimento(),(new Long());
//	Assert.assertEquals(result.getHistoricoUtilList().get(0).getHistoricoUtilType(),(1002);
//	Assert.assertEquals(result.getHistoricoUtilList().get(0).getQuantidade(),(1003);
//	Assert.assertEquals(result.getHistoricoUtilList().get(0).getTabelaEnumValue(),(1004);
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoUtil(id,TabelaEnum.HISTORICOUTIL,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"historicoutil\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoutil/delete/",entitys,  HistoricoUtilResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoUtilList().size(), count.intValue());
//
//
//	    }
//
//
//
//
//	// create by system gera-java version 1.0.0 02/08/2016 10:55 : 19//
//
//	@Test
//	public void listAllHistorico() throws JsonParseException, JsonMappingException, IOException{
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
//	        String jsonInString = mapper.writeValueAsString(new HistoricoInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        HistoricoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historico/fetchPage/",entitys,  HistoricoResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getHistoricoList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistorico(id,TabelaEnum.HISTORICO,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"historico\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historico/insert/",entitys,  HistoricoResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistorico(id,TabelaEnum.HISTORICO,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"historico\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historico/update/",entitys,  HistoricoResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        HistoricoInquiryRequest request001 = new HistoricoInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historico/fetchPage/",entitys,  HistoricoResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoList().size(), 1);
//
//
//	Assert.assertEquals(result.getHistoricoList().get(0).getData(),(new Long());
//	Assert.assertEquals(result.getHistoricoList().get(0).getUserId(),(1002);
//	Assert.assertEquals(result.getHistoricoList().get(0).getAcaoEnumValue(),(1003);
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistorico(id,TabelaEnum.HISTORICO,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"historico\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historico/delete/",entitys,  HistoricoResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoList().size(), count.intValue());
//
//
//	    }
//
//
//
//
//	// create by system gera-java version 1.0.0 02/08/2016 10:55 : 19//
//
//	@Test
//	public void listAllHistoricoItens() throws JsonParseException, JsonMappingException, IOException{
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
//	        String jsonInString = mapper.writeValueAsString(new HistoricoItensInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        HistoricoItensResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoitens/fetchPage/",entitys,  HistoricoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getHistoricoItensList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoItens(id,TabelaEnum.HISTORICOITENS,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"historicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoitens/insert/",entitys,  HistoricoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoItens(id,TabelaEnum.HISTORICOITENS,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"historicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoitens/update/",entitys,  HistoricoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        HistoricoItensInquiryRequest request001 = new HistoricoItensInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoitens/fetchPage/",entitys,  HistoricoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoItensList().size(), 1);
//
//
//	Assert.assertEquals(result.getHistoricoItensList().get(0).getAcaoEnumValue(),(1001);
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertHistoricoItens(id,TabelaEnum.HISTORICOITENS,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"historicoitens\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/historicoitens/delete/",entitys,  HistoricoItensResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getHistoricoItensList().size(), count.intValue());


	    }


	//=====================================TESTE===========================================================
}
