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
import com.qat.samples.sysmgmt.advocacia.request.AdvocaciaInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.response.AdvocaciaResponse;
import com.qat.samples.sysmgmt.clinica.model.request.ClinicaInquiryRequest;
import com.qat.samples.sysmgmt.clinica.model.response.ClinicaResponse;
import com.qat.samples.sysmgmt.condominio.model.request.CondominioInquiryRequest;
import com.qat.samples.sysmgmt.condominio.model.response.CondominioResponse;
import com.qat.samples.sysmgmt.entidade.model.request.DepositoInquiryRequest;
import com.qat.samples.sysmgmt.entidade.model.request.EmpresaInquiryRequest;
import com.qat.samples.sysmgmt.entidade.model.request.FilialInquiryRequest;
import com.qat.samples.sysmgmt.entidade.model.response.DepositoResponse;
import com.qat.samples.sysmgmt.entidade.model.response.EmpresaResponse;
import com.qat.samples.sysmgmt.entidade.model.response.FilialResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.UsuarioInquiryRequest;
import com.qat.samples.sysmgmt.util.model.response.UsuarioResponse;

import br.com.emmanuelneri.app.model.ModelToken;

public class EmpresaTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllEmpresa() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new EmpresaInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        EmpresaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/empresa/fetchPage/",entitys,  EmpresaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getEmpresaList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertEmpresa(id,TabelaEnum.EMPRESA,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"empresa\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/empresa/insert/",entitys,  EmpresaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertEmpresa(id,TabelaEnum.EMPRESA,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"empresa\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/empresa/update/",entitys,  EmpresaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        EmpresaInquiryRequest request001 = new EmpresaInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/empresa/fetchPage/",entitys,  EmpresaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getEmpresaList().size(), 1);


	Assert.assertEquals(result.getEmpresaList().get(0).getNome(),"nome_1 - UPDATE");
//	Assert.assertEquals(result.getEmpresaList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getEmpresaList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getEmpresaList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getEmpresaList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getEmpresaList().get(0).getRegime(),(new Regime());
//	objeto.setDocumentos(new ArrayList<List<Documento>> ())
//	objeto.get().add(new List<Documento>());
//	objeto.setEnderecos(new ArrayList<List<Endereco>> ())
//	objeto.get().add(new List<Endereco>());
//	objeto.setEmails(new ArrayList<List<Email>> ())
//	objeto.get().add(new List<Email>());
//	objeto.setTelefones(new ArrayList<List<Telefone>> ())
//	objeto.get().add(new List<Telefone>());
//	objeto.setCnaes(new ArrayList<List<CnaeEmpresa>> ())
//	objeto.get().add(new List<CnaeEmpresa>());
//	objeto.setStatusList(new ArrayList<List<Status>> ())
//	objeto.get().add(new List<Status>());
//	objeto.setNotes(new ArrayList<List<Note>> ())
//	objeto.get().add(new List<Note>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertEmpresa(id,TabelaEnum.EMPRESA,PersistenceActionEnum.DELETE));
	        requestJson = "{\"empresa\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/empresa/delete/",entitys,  EmpresaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getEmpresaList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllFilial() throws JsonParseException, JsonMappingException, IOException{

	    Integer count =0;
	    Integer id =9990;
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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new FilialInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        FilialResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/filial/fetchPage/",entitys,  FilialResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getFilialList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertFilial(id,TabelaEnum.FILIAL,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"filial\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/filial/insert/",entitys,  FilialResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertFilial(id,TabelaEnum.FILIAL,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"filial\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/filial/update/",entitys,  FilialResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        FilialInquiryRequest request001 = new FilialInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/filial/fetchPage/",entitys,  FilialResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getFilialList().size(), 1);


	Assert.assertEquals(result.getFilialList().get(0).getNome(),"nome_1 - UPDATE");
//	Assert.assertEquals(result.getFilialList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getFilialList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getFilialList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getFilialList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getFilialList().get(0).getRegime(),(new Regime());



	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertFilial(id,TabelaEnum.FILIAL,PersistenceActionEnum.DELETE));
	        requestJson = "{\"filial\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/filial/delete/",entitys,  FilialResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getFilialList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllDeposito() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new DepositoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        DepositoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/deposito/fetchPage/",entitys,  DepositoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getDepositoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertDeposito(id,TabelaEnum.DEPOSITO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"deposito\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/deposito/insert/",entitys,  DepositoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertDeposito(id,TabelaEnum.DEPOSITO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"deposito\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/deposito/update/",entitys,  DepositoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        DepositoInquiryRequest request001 = new DepositoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/deposito/fetchPage/",entitys,  DepositoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getDepositoList().size(), 1);


	Assert.assertEquals(result.getDepositoList().get(0).getNome(),"nome_1 - UPDATE");
//	Assert.assertEquals(result.getDepositoList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getDepositoList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getDepositoList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getDepositoList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getDepositoList().get(0).getRegime(),(new Regime());
//	objeto.setDocumentos(new ArrayList<List<Documento>> ())
//	objeto.get().add(new List<Documento>());
//	objeto.setEnderecos(new ArrayList<List<Endereco>> ())
//	objeto.get().add(new List<Endereco>());
//	objeto.setEmails(new ArrayList<List<Email>> ())
//	objeto.get().add(new List<Email>());
//	objeto.setTelefones(new ArrayList<List<Telefone>> ())
//	objeto.get().add(new List<Telefone>());
//	objeto.setCnaes(new ArrayList<List<CnaeEmpresa>> ())
//	objeto.get().add(new List<CnaeEmpresa>());
//	objeto.setStatusList(new ArrayList<List<Status>> ())
//	objeto.get().add(new List<Status>());
//	objeto.setNotes(new ArrayList<List<Note>> ())
//	objeto.get().add(new List<Note>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertDeposito(id,TabelaEnum.DEPOSITO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"deposito\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/deposito/delete/",entitys,  DepositoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getDepositoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllUsuario() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new UsuarioInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        UsuarioResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/usuario/fetchPage/",entitys,  UsuarioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getUsuarioList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertUsuario(id,TabelaEnum.USUARIO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"usuario\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/usuario/insert/",entitys,  UsuarioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertUsuario(id,TabelaEnum.USUARIO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"usuario\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/usuario/update/",entitys,  UsuarioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        UsuarioInquiryRequest request001 = new UsuarioInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/usuario/fetchPage/",entitys,  UsuarioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getUsuarioList().size(), 1);


//	Assert.assertEquals(result.getUsuarioList().get(0).getNome(),(1001);
//	Assert.assertEquals(result.getUsuarioList().get(0).getCpf(),(1002);
//	Assert.assertEquals(result.getUsuarioList().get(0).getEmail(),""email_3" - UPDATE");
//	Assert.assertEquals(result.getUsuarioList().get(0).getSenha(),""senha_4" - UPDATE");
//	Assert.assertEquals(result.getUsuarioList().get(0).getPergunta(),""pergunta_5" - UPDATE");
//	Assert.assertEquals(result.getUsuarioList().get(0).getRole(),""role_6" - UPDATE");
//	Assert.assertEquals(result.getUsuarioList().get(0).getLanguage(),(1007);
//	Assert.assertEquals(result.getUsuarioList().get(0).getUltAcesso(),(new Long());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertUsuario(id,TabelaEnum.USUARIO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"usuario\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/usuario/delete/",entitys,  UsuarioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getUsuarioList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllAdvocacia() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new AdvocaciaInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        AdvocaciaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/advocacia/fetchPage/",entitys,  AdvocaciaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getAdvogadoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertAdvocacia(id,TabelaEnum.ADVOCACIA,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"advocacia\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/advocacia/insert/",entitys,  AdvocaciaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertAdvocacia(id,TabelaEnum.ADVOCACIA,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"advocacia\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/advocacia/update/",entitys,  AdvocaciaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        AdvocaciaInquiryRequest request001 = new AdvocaciaInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/advocacia/fetchPage/",entitys,  AdvocaciaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getAdvogadoList().size(), 1);


//	Assert.assertEquals(result.getAdvocaciaList().get(0).getNome(),""nome_1" - UPDATE");
//	Assert.assertEquals(result.getAdvocaciaList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getAdvocaciaList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getAdvocaciaList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getAdvocaciaList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getAdvocaciaList().get(0).getRegime(),(new Regime());
//	objeto.setDocumentos(new ArrayList<List<Documento>> ())
//	objeto.get().add(new List<Documento>());
//	objeto.setEnderecos(new ArrayList<List<Endereco>> ())
//	objeto.get().add(new List<Endereco>());
//	objeto.setEmails(new ArrayList<List<Email>> ())
//	objeto.get().add(new List<Email>());
//	objeto.setTelefones(new ArrayList<List<Telefone>> ())
//	objeto.get().add(new List<Telefone>());
//	objeto.setCnaes(new ArrayList<List<CnaeEmpresa>> ())
//	objeto.get().add(new List<CnaeEmpresa>());
//	objeto.setStatusList(new ArrayList<List<Status>> ())
//	objeto.get().add(new List<Status>());
//	objeto.setNotes(new ArrayList<List<Note>> ())
//	objeto.get().add(new List<Note>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertAdvocacia(id,TabelaEnum.ADVOCACIA,PersistenceActionEnum.DELETE));
	        requestJson = "{\"advocacia\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/advocacia/delete/",entitys,  AdvocaciaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getAdvogadoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllClinica() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new ClinicaInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        ClinicaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/clinica/fetchPage/",entitys,  ClinicaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getClinicaList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertClinica(id,TabelaEnum.CLINICA,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"clinica\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/clinica/insert/",entitys,  ClinicaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertClinica(id,TabelaEnum.CLINICA,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"clinica\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/clinica/update/",entitys,  ClinicaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        ClinicaInquiryRequest request001 = new ClinicaInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/clinica/fetchPage/",entitys,  ClinicaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getClinicaList().size(), 1);


	Assert.assertEquals(result.getClinicaList().get(0).getNome(),"nome_1 - UPDATE");
//	Assert.assertEquals(result.getClinicaList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getClinicaList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getClinicaList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getClinicaList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getClinicaList().get(0).getRegime(),(new Regime());
//	objeto.setDocumentos(new ArrayList<List<Documento>> ())
//	objeto.get().add(new List<Documento>());
//	objeto.setEnderecos(new ArrayList<List<Endereco>> ())
//	objeto.get().add(new List<Endereco>());
//	objeto.setEmails(new ArrayList<List<Email>> ())
//	objeto.get().add(new List<Email>());
//	objeto.setTelefones(new ArrayList<List<Telefone>> ())
//	objeto.get().add(new List<Telefone>());
//	objeto.setCnaes(new ArrayList<List<CnaeEmpresa>> ())
//	objeto.get().add(new List<CnaeEmpresa>());
//	objeto.setStatusList(new ArrayList<List<Status>> ())
//	objeto.get().add(new List<Status>());
//	objeto.setNotes(new ArrayList<List<Note>> ())
//	objeto.get().add(new List<Note>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertClinica(id,TabelaEnum.CLINICA,PersistenceActionEnum.DELETE));
	        requestJson = "{\"clinica\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/clinica/delete/",entitys,  ClinicaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getClinicaList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 10:38 : 16//

	@Test
	public void listAllCondominio() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:entidade/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new CondominioInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        CondominioResponse result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/condominio/fetchPage/",entitys,  CondominioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getCondominioList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCondominio(id,TabelaEnum.CONDOMINIO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"condominio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/condominio/insert/",entitys,  CondominioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertCondominio(id,TabelaEnum.CONDOMINIO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"condominio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/condominio/update/",entitys,  CondominioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        CondominioInquiryRequest request001 = new CondominioInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/condominio/fetchPage/",entitys,  CondominioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCondominioList().size(), 1);


//	Assert.assertEquals(result.getCondominioList().get(0).getNome(),""nome_1" - UPDATE");
//	Assert.assertEquals(result.getCondominioList().get(0).getEntidadeId(),(1002);
//	Assert.assertEquals(result.getCondominioList().get(0).getNumFunc(),(1003);
//	Assert.assertEquals(result.getCondominioList().get(0).getStatusInicial(),(1004);
//	Assert.assertEquals(result.getCondominioList().get(0).getEntidadeEnumValue(),(1005);
//	Assert.assertEquals(result.getCondominioList().get(0).getRegime(),(new Regime());
//	objeto.setDocumentos(new ArrayList<List<Documento>> ())
//	objeto.get().add(new List<Documento>());
//	objeto.setEnderecos(new ArrayList<List<Endereco>> ())
//	objeto.get().add(new List<Endereco>());
//	objeto.setEmails(new ArrayList<List<Email>> ())
//	objeto.get().add(new List<Email>());
//	objeto.setTelefones(new ArrayList<List<Telefone>> ())
//	objeto.get().add(new List<Telefone>());
//	objeto.setCnaes(new ArrayList<List<CnaeEmpresa>> ())
//	objeto.get().add(new List<CnaeEmpresa>());
//	objeto.setStatusList(new ArrayList<List<Status>> ())
//	objeto.get().add(new List<Status>());
//	objeto.setNotes(new ArrayList<List<Note>> ())
//	objeto.get().add(new List<Note>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCondominio(id,TabelaEnum.CONDOMINIO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"condominio\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "entidade/api/condominio/delete/",entitys,  CondominioResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCondominioList().size(), count.intValue());


	    }


//	=====================================TESTE===========================================================
}
