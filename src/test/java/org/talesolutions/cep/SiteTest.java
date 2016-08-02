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
import com.qat.samples.sysmgmt.contabilidade.model.Plano;
import com.qat.samples.sysmgmt.contabilidade.response.PlanoByServicoResponse;
import com.qat.samples.sysmgmt.contato.model.request.ContatoInquiryRequest;
import com.qat.samples.sysmgmt.contato.model.response.ContatoResponse;
import com.qat.samples.sysmgmt.ordemServico.model.request.OrdemServicoInquiryRequest;
import com.qat.samples.sysmgmt.ordemServico.model.response.OrdemServicoResponse;
import com.qat.samples.sysmgmt.produto.model.Servico;
import com.qat.samples.sysmgmt.produto.model.request.PlanoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.request.ServicoInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.response.PlanoResponse;
import com.qat.samples.sysmgmt.produto.model.response.ServicoResponse;
import com.qat.samples.sysmgmt.site.model.request.SiteInquiryRequest;
import com.qat.samples.sysmgmt.site.model.response.ContatoItensResponse;
import com.qat.samples.sysmgmt.site.model.response.OrdemServicoItensResponse;
import com.qat.samples.sysmgmt.site.model.response.ServicoAndPlanoResponse;
import com.qat.samples.sysmgmt.site.model.response.SiteResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.PagedInquiryRequest;

import br.com.emmanuelneri.app.model.ModelToken;

public class SiteTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllServico() throws JsonParseException, JsonMappingException, IOException{

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
	        String jsonInString = mapper.writeValueAsString(new ServicoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ServicoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servico/fetchPage/",entitys,  ServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getServicoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertServico(id,TabelaEnum.SERVICO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"servico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servico/insert/",entitys,  ServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertServico(id,TabelaEnum.SERVICO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"servico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servico/update/",entitys,  ServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        ServicoInquiryRequest request001 = new ServicoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servico/fetchPage/",entitys,  ServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getServicoList().size(), 1);


	Assert.assertEquals(result.getServicoList().get(0).getNome(),"nome_1 - UPDATE");
	Assert.assertEquals(result.getServicoList().get(0).getDescricao(),"descricao_2 - UPDATE");



	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertServico(id,TabelaEnum.SERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"servico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servico/delete/",entitys,  ServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getServicoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllPlanoByServico() throws JsonParseException, JsonMappingException, IOException{

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
	        PlanoByServicoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/planobyservico/fetchPage/",entitys,  PlanoByServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getPlanoByServicoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPlanoByServico(id,TabelaEnum.PLANO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"planobyservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/planobyservico/insert/",entitys,  PlanoByServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertPlanoByServico(id,TabelaEnum.PLANO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"planobyservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/planobyservico/update/",entitys,  PlanoByServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/planobyservico/fetchPage/",entitys,  PlanoByServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPlanoByServicoList().size(), 1);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPlanoByServico(id,TabelaEnum.PLANO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"planobyservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/planobyservico/delete/",entitys,  PlanoByServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPlanoByServicoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllSite() throws JsonParseException, JsonMappingException, IOException{

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
	        String jsonInString = mapper.writeValueAsString(new SiteInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        SiteResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/site/fetchPage/",entitys,  SiteResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getSites().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertSite(id,TabelaEnum.SITE,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"site\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/site/insert/",entitys,  SiteResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertSite(id,TabelaEnum.SITE,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"site\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/site/update/",entitys,  SiteResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        SiteInquiryRequest request001 = new SiteInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/site/fetchPage/",entitys,  SiteResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getSites().size(), 1);


	Assert.assertEquals(result.getSites().get(0).getNome(),"nome_1 - UPDATE");
	Assert.assertEquals(result.getSites().get(0).getUrl(),"url_2 - UPDATE");
	Assert.assertEquals(result.getSites().get(0).getQuemSomos(),"quemSomos_3 - UPDATE");
	Assert.assertEquals(result.getSites().get(0).getMissao(),"missao_4 - UPDATE");
//	Assert.assertEquals(result.getSites.get(0).getVisao(),"visao_5 - UPDATE");
//	Assert.assertEquals(result.getSites.get(0).getTitulo(),"titulo_6 - UPDATE");
//	Assert.assertEquals(result.getSites.get(0).getLogo(),"logo_7 - UPDATE");



	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertSite(id,TabelaEnum.SITE,PersistenceActionEnum.DELETE));
	        requestJson = "{\"site\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/site/delete/",entitys,  SiteResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getSites().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllContato() throws JsonParseException, JsonMappingException, IOException{

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
	        String jsonInString = mapper.writeValueAsString(new ContatoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ContatoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contato/fetchPage/",entitys,  ContatoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getContatoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertContato(id,TabelaEnum.CONTATO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"contato\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contato/insert/",entitys,  ContatoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertContato(id,TabelaEnum.CONTATO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"contato\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contato/update/",entitys,  ContatoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        ContatoInquiryRequest request001 = new ContatoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contato/fetchPage/",entitys,  ContatoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoList().size(), 1);

	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertContato(id,TabelaEnum.CONTATO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"contato\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contato/delete/",entitys,  ContatoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllContatoItens() throws JsonParseException, JsonMappingException, IOException{

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
	        ContatoItensResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contatoitens/fetchPage/",entitys,  ContatoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getContatoItenList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertContatoItens(id,TabelaEnum.CONTATOITENS,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"contatoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contatoitens/insert/",entitys,  ContatoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertContatoItens(id,TabelaEnum.CONTATOITENS,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"contatoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contatoitens/update/",entitys,  ContatoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contatoitens/fetchPage/",entitys,  ContatoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoItenList().size(), 1);


//	Assert.assertEquals(result.getContatoItensList().get(0).getDataAlt(),(new Long());
//	Assert.assertEquals(result.getContatoItensList().get(0).getTexto(),""texto_2" - UPDATE");
//	Assert.assertEquals(result.getContatoItensList().get(0).getTitulo(),""titulo_3" - UPDATE");
//	Assert.assertEquals(result.getContatoItensList().get(0).getContatoStatus(),(1004);
//	Assert.assertEquals(result.getContatoItensList().get(0).getVisto(),(true);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertContatoItens(id,TabelaEnum.CONTATOITENS,PersistenceActionEnum.DELETE));
	        requestJson = "{\"contatoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/contatoitens/delete/",entitys,  ContatoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoItenList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

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


//	Assert.assertEquals(result.getOrdemServicoList().get(0).getUserId(),""userId_1" - UPDATE");
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getNome(),""nome_2" - UPDATE");
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getData(),(new Long());
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getAssunto(),""assunto_4" - UPDATE");
//	Assert.assertEquals(result.getOrdemServicoList().get(0).getStatusValue(),(1005);
//	objeto.setOrdemServicoItensList(new ArrayList<List<OrdemServicoItens>> ())
//	objeto.get().add(new List<OrdemServicoItens>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"ordemservico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservico/delete/",entitys,  OrdemServicoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllOrdemServicoItens() throws JsonParseException, JsonMappingException, IOException{

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
	        OrdemServicoItensResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/fetchPage/",entitys,  OrdemServicoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getOrdemServicoItenss().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/insert/",entitys,  OrdemServicoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/update/",entitys,  OrdemServicoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/fetchPage/",entitys,  OrdemServicoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoItenss().size(), 1);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServicoItens(id,TabelaEnum.ORDEMSERVICOITENS,PersistenceActionEnum.DELETE));
	        requestJson = "{\"ordemservicoitens\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/ordemservicoitens/delete/",entitys,  OrdemServicoItensResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getOrdemServicoItenss().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllPlano() throws JsonParseException, JsonMappingException, IOException{

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
	        String jsonInString = mapper.writeValueAsString(new PlanoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        PlanoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/plano/fetchPage/",entitys,  PlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getPlanoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPlano(id,TabelaEnum.PLANO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"plano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/plano/insert/",entitys,  PlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertPlano(id,TabelaEnum.PLANO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"plano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/plano/update/",entitys,  PlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PlanoInquiryRequest request001 = new PlanoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/plano/fetchPage/",entitys,  PlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPlanoList().size(), 1);


//	Assert.assertEquals(result.getPlanoList().get(0).getDataInicio(),(new Long());
//	Assert.assertEquals(result.getPlanoList().get(0).getDataFinal(),(new Long());
//	Assert.assertEquals(result.getPlanoList().get(0).getNumeroContrato(),(1003);
//	Assert.assertEquals(result.getPlanoList().get(0).getDescricao(),""descricao_4" - UPDATE");
//	Assert.assertEquals(result.getPlanoList().get(0).getTitulo(),""titulo_5" - UPDATE");
//	Assert.assertEquals(result.getPlanoList().get(0).getCor(),""cor_6" - UPDATE");
//	objeto.setPrecoList(new ArrayList<List<Preco>> ())
//	objeto.get().add(new List<Preco>());
//	objeto.setServicoList(new ArrayList<List<PlanoByServico>> ())
//	objeto.get().add(new List<PlanoByServico>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPlano(id,TabelaEnum.PLANO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"plano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/plano/delete/",entitys,  PlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPlanoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:4 : 0//

	@Test
	public void listAllServicoAndPlano() throws JsonParseException, JsonMappingException, IOException{

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
	        ServicoAndPlanoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servicoandplano/fetchPage/",entitys,  ServicoAndPlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getContatoItenList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertServicoAndPlano(id,TabelaEnum.SERVICO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"servicoandplano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servicoandplano/insert/",entitys,  ServicoAndPlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertServicoAndPlano(id,TabelaEnum.SERVICO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"servicoandplano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servicoandplano/update/",entitys,  ServicoAndPlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servicoandplano/fetchPage/",entitys,  ServicoAndPlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoItenList().size(), 1);

//
//	Assert.assertEquals(result.getServicoAndPlanoList().get(0).getDataInicio(),(new Long());
//	Assert.assertEquals(result.getServicoAndPlanoList().get(0).getValor(),(10.00);
//	Assert.assertEquals(result.getServicoAndPlanoList().get(0).getServicoPlanoEnumValue(),(1003);
//	Assert.assertEquals(result.getServicoAndPlanoList().get(0).getServicoList(),(new Servico());
//	Assert.assertEquals(result.getServicoAndPlanoList().get(0).getPlanoList(),(new Plano());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertServicoAndPlano(id,TabelaEnum.SERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"servicoandplano\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/servicoandplano/delete/",entitys,  ServicoAndPlanoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getContatoItenList().size(), count.intValue());


	    }


	//=====================================TESTE===========================================================
}
