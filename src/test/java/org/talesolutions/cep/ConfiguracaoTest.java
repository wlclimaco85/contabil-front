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
import com.qat.samples.sysmgmt.entidade.model.response.BoletoResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigAlertasResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigCarneResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigEntradaResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigFiscalResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigGeralResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigProdutoResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigSMTPResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfigVendasResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfiguracaoNFeResponse;
import com.qat.samples.sysmgmt.entidade.model.response.ConfiguracaoResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.PagedInquiryRequest;

import br.com.emmanuelneri.app.model.ModelToken;

public class ConfiguracaoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfiguracao() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfiguracaoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracao/fetchPage/",entitys,  ConfiguracaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfiguracaoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracao(id,TabelaEnum.CONFIGURACAO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configuracao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracao/insert/",entitys,  ConfiguracaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracao(id,TabelaEnum.CONFIGURACAO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configuracao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracao/update/",entitys,  ConfiguracaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracao/fetchPage/",entitys,  ConfiguracaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfiguracaoList().size(), 1);


//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfGeral(),(new ConfigGeral());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfNFe(),(new ConfiguracaoNFe());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfFiscal(),(new ConfigFiscal());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfProd(),(new ConfigProduto());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfVendas(),(new ConfigVendas());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfCMTP(),(new ConfigSMTP());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfEntrada(),(new ConfigEntrada());
//	Assert.assertEquals(result.getConfiguracaoList().get(0).getConfCarne(),(new ConfigCarne());



	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracao(id,TabelaEnum.CONFIGURACAO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configuracao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracao/delete/",entitys,  ConfiguracaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfiguracaoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllBoleto() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        BoletoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/boleto/fetchPage/",entitys,  BoletoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getBoletoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertBoleto(id,TabelaEnum.BOLETO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"boleto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/boleto/insert/",entitys,  BoletoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertBoleto(id,TabelaEnum.BOLETO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"boleto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/boleto/update/",entitys,  BoletoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/boleto/fetchPage/",entitys,  BoletoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getBoletoList().size(), 1);


//	Assert.assertEquals(result.getBoletoList().get(0).getAtivarBolOnLine(),(1001);
//	Assert.assertEquals(result.getBoletoList().get(0).getTipoBoleto(),(new DoisValores());
//	Assert.assertEquals(result.getBoletoList().get(0).getAgencia(),(1003);
//	Assert.assertEquals(result.getBoletoList().get(0).getCedente(),(1004);
//	Assert.assertEquals(result.getBoletoList().get(0).getJuros(),(10.00);
//	Assert.assertEquals(result.getBoletoList().get(0).getTipoCalcMora(),(new DoisValores());
//	Assert.assertEquals(result.getBoletoList().get(0).getMora(),(10.00);
//	Assert.assertEquals(result.getBoletoList().get(0).getInstrucoes(),""instrucoes_8" - UPDATE");
//	Assert.assertEquals(result.getBoletoList().get(0).getDemonstrativo(),""demonstrativo_9" - UPDATE");
//	Assert.assertEquals(result.getBoletoList().get(0).getImpJuros(),(1010);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertBoleto(id,TabelaEnum.BOLETO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"boleto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/boleto/delete/",entitys,  BoletoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getBoletoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigCarne() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigCarneResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configCarne/fetchPage/",entitys,  ConfigCarneResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigCarneList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigCarne(id,TabelaEnum.CONFIGCARNE,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configCarne\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configCarne/insert/",entitys,  ConfigCarneResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigCarne(id,TabelaEnum.CONFIGCARNE,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configCarne\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configCarne/update/",entitys,  ConfigCarneResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configCarne/fetchPage/",entitys,  ConfigCarneResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigCarneList().size(), 1);


	//Assert.assertEquals(result.getConfigCarneList().get(0).getCarneBotelo(),(1001);
	//Assert.assertEquals(result.getConfigCarneList().get(0).getCarneNormal(),(1002);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigCarne(id,TabelaEnum.CONFIGCARNE,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configCarne\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configCarne/delete/",entitys,  ConfigCarneResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigCarneList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigEntrada() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigEntradaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configEntrada/fetchPage/",entitys,  ConfigEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigEntradaList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigEntrada(id,TabelaEnum.CONFIGENTRADA,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configEntrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configEntrada/insert/",entitys,  ConfigEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigEntrada(id,TabelaEnum.CONFIGENTRADA,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configEntrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configEntrada/update/",entitys,  ConfigEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configEntrada/fetchPage/",entitys,  ConfigEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigEntradaList().size(), 1);


	//Assert.assertEquals(result.getConfigEntradaList().get(0).getValorTotalFixo(),(1001);
	//Assert.assertEquals(result.getConfigEntradaList().get(0).getManterPrecoVendaProd(),(1002);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigEntrada(id,TabelaEnum.CONFIGENTRADA,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configEntrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configEntrada/delete/",entitys,  ConfigEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigEntradaList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigFiscal() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigFiscalResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configFiscal/fetchPage/",entitys,  ConfigFiscalResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigFiscalList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigFiscal(id,TabelaEnum.CONFIGFISCAL,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configFiscal\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configFiscal/insert/",entitys,  ConfigFiscalResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigFiscal(id,TabelaEnum.CONFIGFISCAL,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configFiscal\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configFiscal/update/",entitys,  ConfigFiscalResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configFiscal/fetchPage/",entitys,  ConfigFiscalResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigFiscalList().size(), 1);


	//Assert.assertEquals(result.getConfigFiscalList().get(0).getPrincAtividade(),(new DoisValores());
	//Assert.assertEquals(result.getConfigFiscalList().get(0).getRegime(),(new Regime());
	//Assert.assertEquals(result.getConfigFiscalList().get(0).getAliqSimples(),(10.00);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigFiscal(id,TabelaEnum.CONFIGFISCAL,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configFiscal\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configFiscal/delete/",entitys,  ConfigFiscalResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigFiscalList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigAlertas() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigAlertasResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configAlertas/fetchPage/",entitys,  ConfigAlertasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigAlertasList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigAlertas(id,TabelaEnum.CONFIGALERTAS,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configAlertas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configAlertas/insert/",entitys,  ConfigAlertasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigAlertas(id,TabelaEnum.CONFIGALERTAS,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configAlertas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configAlertas/update/",entitys,  ConfigAlertasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configAlertas/fetchPage/",entitys,  ConfigAlertasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigAlertasList().size(), 1);


	///Assert.assertEquals(result.getConfigAlertasList().get(0).getEstoqMin(),(1001);
	//Assert.assertEquals(result.getConfigAlertasList().get(0).getEstoqMax(),(1002);
	//Assert.assertEquals(result.getConfigAlertasList().get(0).getErroNFe(),(1003);
	//Assert.assertEquals(result.getConfigAlertasList().get(0).getPdCompra(),(1004);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigAlertas(id,TabelaEnum.CONFIGALERTAS,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configAlertas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configAlertas/delete/",entitys,  ConfigAlertasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigAlertasList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigGeral() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigGeralResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configGeral/fetchPage/",entitys,  ConfigGeralResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigGeralList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigGeral(id,TabelaEnum.CONFIGGERAL,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configGeral\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configGeral/insert/",entitys,  ConfigGeralResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigGeral(id,TabelaEnum.CONFIGGERAL,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configGeral\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configGeral/update/",entitys,  ConfigGeralResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configGeral/fetchPage/",entitys,  ConfigGeralResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigGeralList().size(), 1);
//
//
//	Assert.assertEquals(result.getConfigGeralList().get(0).getFusoHorario(),(1001);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getCasasDecimais(),(1002);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getDiasCartaCobr(),(1003);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getInfPosicionarMouse(),(1004);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getCnpjCPFUnico(),(1005);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getImpCodPersonalizado(),(1006);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getLogListRelImp(),(1007);
//	Assert.assertEquals(result.getConfigGeralList().get(0).getObsProdFinProd(),(1008);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigGeral(id,TabelaEnum.CONFIGGERAL,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configGeral\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configGeral/delete/",entitys,  ConfigGeralResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigGeralList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigProduto() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigProdutoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configProduto/fetchPage/",entitys,  ConfigProdutoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigProdutoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigProduto(id,TabelaEnum.CONFIGPRODUTO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configProduto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configProduto/insert/",entitys,  ConfigProdutoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigProduto(id,TabelaEnum.CONFIGPRODUTO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configProduto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configProduto/update/",entitys,  ConfigProdutoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configProduto/fetchPage/",entitys,  ConfigProdutoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigProdutoList().size(), 1);


//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCfop(),(new Cfop());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsSitTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsOrigem(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsModalidadeBC(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsRedBaseCalc(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsAliq(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsMotDesoneracao(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsModBCST(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsMargValAdic(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsRedBaseCalcST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsPrecoUnitPautaST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIcmsAliqST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiSitTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiClasCigarroBebida(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiCNPJProd(),""ipiCNPJProd_15" - UPDATE");
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiCodSeloCont(),""ipiCodSeloCont_16" - UPDATE");
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiQtdSelo(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiCodEnquad(),(1018);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiTipCalc(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getIpiAliq(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPisSitTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPisAliq(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPisValUnidtrib(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPistipoCalcSubstTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPisAliqST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getPisValorAliqST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsSubstTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsAliq(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsValorAliq(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsTipoCalcSubstTrib(),(new DoisValores());
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsAliqST(),(10.00);
//	Assert.assertEquals(result.getConfigProdutoList().get(0).getCofinsValorAliqST(),(10.00);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigProduto(id,TabelaEnum.CONFIGPRODUTO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configProduto\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configProduto/delete/",entitys,  ConfigProdutoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigProdutoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigSMTP() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigSMTPResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configSMTP/fetchPage/",entitys,  ConfigSMTPResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigSMTPList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigSMTP(id,TabelaEnum.CONFIGSMTP,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configSMTP\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configSMTP/insert/",entitys,  ConfigSMTPResponse.class);
	       // Assert.assertEquals(result.isOperationSuccess(), false);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigSMTP(id,TabelaEnum.CONFIGSMTP,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configSMTP\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configSMTP/update/",entitys,  ConfigSMTPResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configSMTP/fetchPage/",entitys,  ConfigSMTPResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigSMTPList().size(), 2);


//	Assert.assertEquals(result.getConfigSMTPList().get(0).getServSMTP(),""servSMTP_1" - UPDATE");
//	Assert.assertEquals(result.getConfigSMTPList().get(0).getPorta(),""porta_2" - UPDATE");
//	Assert.assertEquals(result.getConfigSMTPList().get(0).getEndEmail(),""endEmail_3" - UPDATE");
//	Assert.assertEquals(result.getConfigSMTPList().get(0).getUsuario(),""usuario_4" - UPDATE");
//	Assert.assertEquals(result.getConfigSMTPList().get(0).getSenha(),""senha_5" - UPDATE");
//	Assert.assertEquals(result.getConfigSMTPList().get(0).getSeguranca(),(new DoisValores());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigSMTP(id,TabelaEnum.CONFIGSMTP,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configSMTP\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configSMTP/delete/",entitys,  ConfigSMTPResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	  //      Assert.assertEquals(result.getConfigSMTPList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfiguracaoNFe() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfiguracaoNFeResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracaoNFe/fetchPage/",entitys,  ConfiguracaoNFeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfiguracaoNFeList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracaoNFe(id,TabelaEnum.CONFIGURACAONFE,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configuracaoNFe\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracaoNFe/insert/",entitys,  ConfiguracaoNFeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracaoNFe(id,TabelaEnum.CONFIGURACAONFE,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configuracaoNFe\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracaoNFe/update/",entitys,  ConfiguracaoNFeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracaoNFe/fetchPage/",entitys,  ConfiguracaoNFeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfiguracaoNFeList().size(), 1);


//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getPresCompr(),(new DoisValores());
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getDestConsFinal(),(1002);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getPreencherDataHora(),(1003);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getIcmsPadrao(),(10.00);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getIpiPadrao(),(10.00);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getPisPadrao(),(10.00);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getCofinsPadrao(),(10.00);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getAmbienteEnvio(),(new DoisValores());
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getServMsmNota(),(10.00);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getSerieEnvio(),""serieEnvio_10" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getAnexarXmlEmail(),(1011);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getIdCSC(),""idCSC_12" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getCSC(),""cSC_13" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getInformacaoAdd(),""informacaoAdd_14" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getCertificado(),""certificado_15" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getSenha(),""senha_16" - UPDATE");
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getSalvarSenha(),(1017);
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getCfopPadrao(),(new Cfop());
//	Assert.assertEquals(result.getConfiguracaoNFeList().get(0).getConfSMTP(),(new ConfigSMTP());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfiguracaoNFe(id,TabelaEnum.CONFIGURACAONFE,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configuracaoNFe\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configuracaoNFe/delete/",entitys,  ConfiguracaoNFeResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfiguracaoNFeList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:39 : 56//

	@Test
	public void listAllConfigVendas() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:configuracao/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PagedInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ConfigVendasResponse result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configVendas/fetchPage/",entitys,  ConfigVendasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getConfigVendasList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigVendas(id,TabelaEnum.CONFIGVENDAS,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"configVendas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configVendas/insert/",entitys,  ConfigVendasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertConfigVendas(id,TabelaEnum.CONFIGVENDAS,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"configVendas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configVendas/update/",entitys,  ConfigVendasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PagedInquiryRequest request001 = new PagedInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configVendas/fetchPage/",entitys,  ConfigVendasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigVendasList().size(), 1);

//
//	Assert.assertEquals(result.getConfigVendasList().get(0).getDescontoMaxVenda(),(10.00);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getObservacao(),""observacao_2" - UPDATE");
//	Assert.assertEquals(result.getConfigVendasList().get(0).getImprSegVia(),(1003);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getImprAssinatura(),(1004);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getImprResumoFinanc(),(1005);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getAtuaPrecoClonar(),(1006);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getImprColUnidade(),(1007);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getBloquearvendProdSemEstoq(),(1008);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getAddDespCalcImposto(),(1009);
//	Assert.assertEquals(result.getConfigVendasList().get(0).getRetSubstTribICMS(),(1010);


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertConfigVendas(id,TabelaEnum.CONFIGVENDAS,PersistenceActionEnum.DELETE));
	        requestJson = "{\"configVendas\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "configuracao/api/configVendas/delete/",entitys,  ConfigVendasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getConfigVendasList().size(), count.intValue());


	    }


	//=====================================TESTE===========================================================
}
