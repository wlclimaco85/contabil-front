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
import com.qat.samples.sysmgmt.cotacao.request.CotacaoInquiryRequest;
import com.qat.samples.sysmgmt.cotacao.response.CotacaoResponse;
import com.qat.samples.sysmgmt.nf.model.request.NotaFiscalInquiryRequest;
import com.qat.samples.sysmgmt.nf.model.request.PedidoComprasInquiryRequest;
import com.qat.samples.sysmgmt.nf.model.response.NotaFiscalEntradaResponse;
import com.qat.samples.sysmgmt.nf.model.response.PedidoComprasResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.emmanuelneri.app.model.ModelToken;

public class ComprasTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";



	// create by system gera-java version 1.0.0 01/08/2016 22:32 : 16//

	@Test
	public void listAllNotaFiscalEntrada() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:compras/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new NotaFiscalInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        NotaFiscalEntradaResponse result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/notacomprasentrada/fetchPage/",entitys,  NotaFiscalEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getNotaFiscalList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalEntrada(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"notacomprasentrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/notacomprasentrada/insert/",entitys,  NotaFiscalEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalEntrada(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"notacomprasentrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/notacomprasentrada/update/",entitys,  NotaFiscalEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        NotaFiscalInquiryRequest request001 = new NotaFiscalInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/notacomprasentrada/fetchPage/",entitys,  NotaFiscalEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getNotaFiscalList().size(), 1);




	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertNotaFiscalEntrada(id,TabelaEnum.NOTAFISCAL,PersistenceActionEnum.DELETE));
	        requestJson = "{\"notacomprasentrada\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/notacomprasentrada/delete/",entitys,  NotaFiscalEntradaResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getNotaFiscalList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:32 : 16//

	@Test
	public void listAllPedidoCompras() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:compras/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new PedidoComprasInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        PedidoComprasResponse result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/pedidocompras/fetchPage/",entitys,  PedidoComprasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getPedidoComprasList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPedidoCompras(id,TabelaEnum.PEDIDOCOMPRAS,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"pedidocompras\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/pedidocompras/insert/",entitys,  PedidoComprasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertPedidoCompras(id,TabelaEnum.PEDIDOCOMPRAS,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"pedidocompras\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/pedidocompras/update/",entitys,  PedidoComprasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        PedidoComprasInquiryRequest request001 = new PedidoComprasInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/pedidocompras/fetchPage/",entitys,  PedidoComprasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPedidoComprasList().size(), 1);




	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertPedidoCompras(id,TabelaEnum.PEDIDOCOMPRAS,PersistenceActionEnum.DELETE));
	        requestJson = "{\"pedidocompras\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/pedidocompras/delete/",entitys,  PedidoComprasResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getPedidoComprasList().size(), count.intValue());


	    }




	// create by system gera-java version 1.0.0 01/08/2016 22:32 : 16//

	@Test
	public void listAllCotacao() throws JsonParseException, JsonMappingException, IOException{

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
	    String a ="request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:compras/api/cfop/fetchPage/";
	    HttpEntity<String> entity = new HttpEntity<String>("{}",headers);



	//=========== fetch ================================================================
	        System.out.println("==================================FetchALL==============================================");
	        String jsonInString = mapper.writeValueAsString(new CotacaoInquiryRequest());
	        System.out.println(jsonInString);
	        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
	        CotacaoResponse result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/cotacao/fetchPage/",entitys,  CotacaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getCotacaoList().size();


	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCotacao(id,TabelaEnum.COTACAO,PersistenceActionEnum.INSERT));
	        System.out.println(jsonInString);
	        String requestJson = "{\"cotacao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/cotacao/insert/",entitys,  CotacaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");


	        jsonInString = mapper.writeValueAsString(Objects.insertCotacao(id,TabelaEnum.COTACAO,PersistenceActionEnum.UPDATE));
	        requestJson = "{\"cotacao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/cotacao/update/",entitys,  CotacaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);


	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");


	        CotacaoInquiryRequest request001 = new CotacaoInquiryRequest();
	        request001.setId(id);
	        jsonInString = mapper.writeValueAsString(request001);
	        System.out.println(jsonInString);
	        entitys = new HttpEntity<String>(jsonInString,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/cotacao/fetchPage/",entitys,  CotacaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCotacaoList().size(), 1);




	        //=======================
	        System.out.println("==================================DELETE==============================================");
	        jsonInString = mapper.writeValueAsString(Objects.insertCotacao(id,TabelaEnum.COTACAO,PersistenceActionEnum.DELETE));
	        requestJson = "{\"cotacao\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);
	        result = restTemplate.postForObject( REST_SERVICE_URI + "compras/api/cotacao/delete/",entitys,  CotacaoResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCotacaoList().size(), count.intValue());


	    }

}
