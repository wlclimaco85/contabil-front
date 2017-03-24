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
import com.qat.samples.sysmgmt.dp.model.response.ConvenioResponse;
import com.qat.samples.sysmgmt.estado.model.Estado;
import com.qat.samples.sysmgmt.estado.model.request.EstadoInquiryRequest;
import com.qat.samples.sysmgmt.estado.model.response.EstadoResponse;
import com.qat.samples.sysmgmt.pessoa.model.request.ConvenioInquiryRequest;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.CidadeInquiryRequest;
import com.qat.samples.sysmgmt.util.model.request.TarefaInquiryRequest;
import com.qat.samples.sysmgmt.util.model.response.CidadeResponse;
import com.qat.samples.sysmgmt.util.model.response.TarefaResponse;

import br.com.emmanuelneri.app.model.ModelToken;

public class CadastroTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 01/08/2016 21:13 : 5//

	@Test
	public void listAllConvenio() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:cadastros/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new ConvenioInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConvenioResponse result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/convenio/fetchPage/",entitys,  ConvenioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConvenioList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConvenio(id,TabelaEnum.CONVENIO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"convenio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/convenio/insert/",entitys,  ConvenioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConvenio(id,TabelaEnum.CONVENIO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"convenio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/convenio/update/",entitys,  ConvenioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        ConvenioInquiryRequest request001 = new ConvenioInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/convenio/fetchPage/",entitys,  ConvenioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConvenioList().size(), 1);




	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConvenio(id,TabelaEnum.CONVENIO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"convenio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/convenio/delete/",entitys,  ConvenioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConvenioList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 21:13 : 5//

	@Test
	public void listAllCidade() throws JsonParseException, JsonMappingException, IOException{

	    Integer count =0;
	    Integer id =10101;
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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:cadastros/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new CidadeInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        CidadeResponse result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/cidade/fetchPage/",entitys,  CidadeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getCidadeList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCidade(id,TabelaEnum.CIDADE,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"cidade\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/cidade/insert/",entitys,  CidadeResponse.class);
	      //  Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertCidade(id,TabelaEnum.CIDADE,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"cidade\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/cidade/update/",entitys,  CidadeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        CidadeInquiryRequest request001 = new CidadeInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/cidade/fetchPage/",entitys,  CidadeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	   //     Assert.assertEquals(result.getCidadeList().size(), 1);


//	Assert.assertEquals(result.getCidadeList().get(0).getCodigo(),"codigo_1 - UPDATE");
//	Assert.assertEquals(result.getCidadeList().get(0).getNome(),"nome_2 - UPDATE");
//	Assert.assertEquals(result.getCidadeList().get(0).getCdIBGE(),"cdIBGE_3 - UPDATE");
//	Assert.assertEquals(result.getCidadeList().get(0).getCep(),"cep_4 - UPDATE");
//	Assert.assertEquals(result.getCidadeList().get(0).getEstado(),(new Estado());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCidade(id,TabelaEnum.CIDADE,PersistenceActionEnum.DELETE));
	        requestJson = "{\"cidade\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/cidade/delete/",entitys,  CidadeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	    //    Assert.assertEquals(result.getCidadeList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 21:13 : 5//

	@Test
	public void listAllEstado() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:cadastros/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new EstadoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        EstadoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/estado/fetchPage/",entitys,  EstadoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getEstadoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertEstado(id,TabelaEnum.ESTADO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"estado\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/estado/insert/",entitys,  EstadoResponse.class);
	      //  Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertEstado(id,TabelaEnum.ESTADO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"estado\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/estado/update/",entitys,  EstadoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        EstadoInquiryRequest request001 = new EstadoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/estado/fetchPage/",entitys,  EstadoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	     //   Assert.assertEquals(result.getEstadoList().size(), 1);


//	Assert.assertEquals(result.getEstadoList().get(0).getNome(),"nome_1 - UPDATE");
//	Assert.assertEquals(result.getEstadoList().get(0).getAbreviacao(),"abreviacao_2 - UPDATE");


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertEstado(id,TabelaEnum.ESTADO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"estado\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/estado/delete/",entitys,  EstadoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	    //    Assert.assertEquals(result.getEstadoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 21:13 : 5//
//
//	@Test
//	public void listAllTarefa() throws JsonParseException, JsonMappingException, IOException{
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
//	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:cadastros/api/cfop/fetchPage/";
//	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
//
//
//
//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new TarefaInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        TarefaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/tarefa/fetchPage/",entitys,  TarefaResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getTarefaList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertTarefa(id,TabelaEnum.TAREFA,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"tarefa\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/tarefa/insert/",entitys,  TarefaResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertTarefa(id,TabelaEnum.TAREFA,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"tarefa\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/tarefa/update/",entitys,  TarefaResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        TarefaInquiryRequest request001 = new TarefaInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/tarefa/fetchPage/",entitys,  TarefaResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getTarefaList().size(), 1);
//
//
//	Assert.assertEquals(result.getTarefaList().get(0).getNome(),""nome_1" - UPDATE");
//	Assert.assertEquals(result.getTarefaList().get(0).getDescricao(),""descricao_2" - UPDATE");
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertTarefa(id,TabelaEnum.TAREFA,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"tarefa\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "cadastros/api/tarefa/delete/",entitys,  TarefaResponse.class);
//	        Assert.assertEquals(result.isOperationSuccess(), true);
//	        Assert.assertEquals(result.getTarefaList().size(), count.intValue());
//
//
//	    }
//
//
//	=====================================TESTE===========================================================

}
