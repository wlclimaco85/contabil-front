package org.talesolutions.cep;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

//Assert;
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
import com.qat.samples.sysmgmt.nf.model.request.NotaFiscalInquiryRequest;
import com.qat.samples.sysmgmt.nf.model.request.OrcamentoInquiryRequest;
import com.qat.samples.sysmgmt.nf.model.response.NotaFiscalSaidaResponse;
import com.qat.samples.sysmgmt.nf.model.response.OrcamentoResponse;
import com.qat.samples.sysmgmt.ordemServico.model.request.OrdemServicoInquiryRequest;
import com.qat.samples.sysmgmt.ordemServico.model.response.OrdemServicoResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;
import com.qat.samples.sysmgmt.util.model.request.PagedInquiryRequest;

import br.com.emmanuelneri.app.model.ModelToken;

public class VendasTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 02/08/2016 12:27 : 46//

	@Test
	public void listAllNotaFiscalSaida() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:vendas/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new NotaFiscalInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        NotaFiscalSaidaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/nfSaidas/fetchPage/",entitys,  NotaFiscalSaidaResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getArquivoList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalSaida(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"nfSaidas\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/nfSaidas/insert/",entitys,  NotaFiscalSaidaResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalSaida(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"nfSaidas\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/nfSaidas/update/",entitys,  NotaFiscalSaidaResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        PagedInquiryRequest request001 = new PagedInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/nfSaidas/fetchPage/",entitys,  NotaFiscalSaidaResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        //Assert.assertEquals(result.getArquivoList().size(), 1);
//
//
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalSaida(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"nfSaidas\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/nfSaidas/delete/",entitys,  NotaFiscalSaidaResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        //Assert.assertEquals(result.getArquivoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:27 : 46//

	@Test
	public void listAllOrcamento() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:vendas/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



//	//=========== fetch ================================================================
//	        System.out.println("==================================FetchALL==============================================");
//	        String jsonInString = mapper.writeValueAsString(new OrcamentoInquiryRequest());
//	        System.out.println(jsonInString);
//	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
//	        OrcamentoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/orcamento/fetchPage/",entitys,  OrcamentoResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        count = result.getOrcamentoList().size();
//
//
//	      //=========== Insert ================================================================
//	        System.out.println("==================================INSERT==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrcamento(id,TabelaEnum.ORCAMENTO,PersistenceActionEnum.INSERT));
//	        System.out.println(jsonInString);
//	        String requestJson = "{\"orcamento\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/orcamento/insert/",entitys,  OrcamentoResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	      //=========== Update ================================================================
//	        System.out.println("==================================UPDATE==============================================");
//
//
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrcamento(id,TabelaEnum.ORCAMENTO,PersistenceActionEnum.UPDATE));
//	        requestJson = "{\"orcamento\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/orcamento/update/",entitys,  OrcamentoResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//
//
//	       //===========  FetchbyID  ================================================================
//	        System.out.println("==================================FetchID==============================================");
//
//
//	        OrcamentoInquiryRequest request001 = new OrcamentoInquiryRequest();
//	        request001.setId(id);
//	        jsonInString = mapper.writeValueAsString(request001);
//	        System.out.println(jsonInString);
//	        entitys = new HttpEntity<String>(jsonInString,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/orcamento/fetchPage/",entitys,  OrcamentoResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        //Assert.assertEquals(result.getOrcamentoList().size(), 1);
//
//
//
//
//	        //=======================
//	        System.out.println("==================================DELETE==============================================");
//	        jsonInString = mapper.writeValueAsString(Objects.insertOrcamento(id,TabelaEnum.ORCAMENTO,PersistenceActionEnum.DELETE));
//	        requestJson = "{\"orcamento\":"+jsonInString+"}";
//	        entitys = new HttpEntity<String>(requestJson,headers);
//	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/orcamento/delete/",entitys,  OrcamentoResponse.class);
//	        //Assert.assertEquals(result.isOperationSuccess(), true);
//	        //Assert.assertEquals(result.getOrcamentoList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 02/08/2016 12:27 : 46//

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:vendas/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new OrdemServicoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        OrdemServicoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/ordemServico/fetchPage/",entitys,  OrdemServicoResponse.class);
	        //Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getOrdemServicoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"ordemServico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/ordemServico/insert/",entitys,  OrdemServicoResponse.class);
	        //Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"ordemServico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/ordemServico/update/",entitys,  OrdemServicoResponse.class);
	        //Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        OrdemServicoInquiryRequest request001 = new OrdemServicoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/ordemServico/fetchPage/",entitys,  OrdemServicoResponse.class);
	        //Assert.assertEquals(result.isOperationSuccess(), true);
	        //Assert.assertEquals(result.getOrdemServicoList().size(), 1);


//	//Assert.assertEquals(result.getOrdemServicoList().get(0).getUserId(),""userId_1" - UPDATE");
//	//Assert.assertEquals(result.getOrdemServicoList().get(0).getNome(),""nome_2" - UPDATE");
//	//Assert.assertEquals(result.getOrdemServicoList().get(0).getData(),(new Long());
//	//Assert.assertEquals(result.getOrdemServicoList().get(0).getAssunto(),""assunto_4" - UPDATE");
//	//Assert.assertEquals(result.getOrdemServicoList().get(0).getStatusValue(),(1005);
//	objeto.setOrdemServicoItensList(new ArrayList<List<OrdemServicoItens>> ())
//	objeto.get().add(new List<OrdemServicoItens>());


	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertOrdemServico(id,TabelaEnum.ORDEMSERVICO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"ordemServico\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "vendas/api/ordemServico/delete/",entitys,  OrdemServicoResponse.class);
	        //Assert.assertEquals(result.isOperationSuccess(), true);
	        //Assert.assertEquals(result.getOrdemServicoList().size(), count.intValue());


	    }


	//=====================================TESTE===========================================================
}
