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
import com.qat.samples.sysmgmt.cfop.model.CfopTypeEnum;
import com.qat.samples.sysmgmt.cfop.model.request.CfopInquiryRequest;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;

import br.com.emmanuelneri.app.model.ModelToken;


public class BuscaURLTest {


	 public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	// public static final String REST_SERVICE_URI = "http://prod001.mybluemix.net/auth/api/authenticate/";

	 	@Test
	 	public void listAllUsers() throws JsonParseException, JsonMappingException, IOException{
	        System.out.println("Testing listAllUsers API-----------");

	        Integer count =0;
	        Integer id =999993;
	        RestTemplate restTemplate = new RestTemplate();

	        //http://localhost:8080/qat-sysmgmt-controller-rest/site/api/fetchPage
	        //['X-Auth-Token'] = "anonimo@aninimo.com:1464222873542:eb86a5e265cbdd54d63a03efece46935";

	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Header", "value");
	        headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Other-Header", "othervalue");
	        headers.set("username", "taz@qat.com" );

			Map<String, String> params = new HashMap<String, String>();
		    params.put("username", "taz@qat.com");
		    params.put("password", "taz@qat.com");
		   // HTTPClient<HashMap<String,Object>> http = new HTTPClient<>();
		 // GET TGT
		    RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "taz@qat.com");
		    paramss.set("password", "devil");
		    URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		    System.out.println("[" + tgtUrl + "]");

		 //   TokenModel tgtUrls = rest.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, Collections.emptyMap(),  TokenModel.class);
		    System.out.println("[" + tgtUrl + "]");


		    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
		    System.out.println("[" + st.getBody() + "]");
		    System.out.println("[" + st + "]");
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");
		  // Gson gson = new Gson();
		   // MyObject = gson.fromJson(decodedString , MyObjectClass.class);
		   // Class<? extends TokenModel> c = st.getBody().getClass();
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

	      //Convert object to JSON string
			//String jsonInString = mapper.writeValueAsString(new Cfop(1000,PersistenceActionEnum.INSERT));
			//System.out.println(jsonInString);


	     //   String result = restTemplate.postForObject("http://localhost:8080/springmvc-angularjs/main/api/request", entity, String.class,HttpMethod.GET,a);

			Cfop cfop = new Cfop();
			cfop.setId(id);
			cfop.setCfop("CFOP - INSERT");
			cfop.setNatureza("NATUREZA - INSERT");
			cfop.setSimplificado("Simplificado - INSERT");
			cfop.setCfopTypeEnum(CfopTypeEnum.ENTRADA);
			cfop.setIcms(new Double(1.99));
			cfop.setIcmsReduzido(new Double(1.99));
			cfop.setMargemAgregadaST(new Double(1.99));
			cfop.setCstPrincipal(new Double(1.99));
			cfop.setClassFiscal(new Double(1.99));
			cfop.setObservacao("OBSERVACAO - INSERT");
			cfop.setModelAction(PersistenceActionEnum.INSERT);

			//=========== fetch ================================================================
			System.out.println("==================================FetchALL==============================================");
			String jsonInString = mapper.writeValueAsString(new CfopInquiryRequest());
			System.out.println(jsonInString);
			HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);
			CfopResponse result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/fetchPage/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        count = result.getCfopList().size();

	      //=========== Insert ================================================================
	        System.out.println("==================================INSERT==============================================");
	        jsonInString = mapper.writeValueAsString(cfop);
			System.out.println(jsonInString);

	        String requestJson = "{\"cfop\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);

	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/insert/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);

	      //=========== Update ================================================================
	        System.out.println("==================================UPDATE==============================================");
	        cfop.setObservacao("OBSERVACAO - UPDATE");
			cfop.setModelAction(PersistenceActionEnum.UPDATE);
			cfop.setModifyDateUTC((new Date()).getTime());
			cfop.setModifyUser("rod");
			cfop.setModelAction(PersistenceActionEnum.UPDATE);

	        jsonInString = mapper.writeValueAsString(cfop);
	        requestJson = "{\"cfop\":"+jsonInString+"}";
	        entitys = new HttpEntity<String>(requestJson,headers);

	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/update/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);

	       //===========  FetchbyID  ================================================================
	        System.out.println("==================================FetchID==============================================");

	        cfop = new Cfop();
			cfop.setId(id);
			cfop.setCfop("CFOP - UPDATE");
			cfop.setNatureza("NATUREZA - UPDATE");
			cfop.setSimplificado("Simplificado - UPDATE");
			cfop.setCfopTypeEnum(CfopTypeEnum.SAIDA);
			cfop.setIcms(new Double(0.99));
			cfop.setIcmsReduzido(new Double(0.99));
			cfop.setMargemAgregadaST(new Double(0.99));
			cfop.setCstPrincipal(new Double(0.99));
			cfop.setClassFiscal(new Double(0.99));
			cfop.setObservacao("OBSERVACAO - UPDATE");
			cfop.setModifyDateUTC((new Date()).getTime());
			cfop.setModifyUser("rod");
			cfop.setModelAction(PersistenceActionEnum.UPDATE);

	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/update/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);

	        CfopInquiryRequest cfopRequest = new CfopInquiryRequest();
	        cfopRequest.setId(id);
	        jsonInString = mapper.writeValueAsString(cfopRequest);
			System.out.println(jsonInString);
			entitys = new HttpEntity<String>(jsonInString,headers);
			result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/fetchPage/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCfopList().size(), 1);
	        Assert.assertEquals(result.getCfopList().get(0).getCfop(),"CFOP - UPDATE");
	        Assert.assertEquals(result.getCfopList().get(0).getNatureza(),"NATUREZA - UPDATE");
	        Assert.assertEquals(result.getCfopList().get(0).getSimplificado(),"Simplificado - UPDATE");
	        Assert.assertEquals(result.getCfopList().get(0).getCfopTypeEnum(),CfopTypeEnum.SAIDA);
	        Assert.assertEquals(result.getCfopList().get(0).getIcms().toString(),"0.99");
	        Assert.assertEquals(result.getCfopList().get(0).getIcmsReduzido().toString(),"0.99");
	        Assert.assertEquals(result.getCfopList().get(0).getMargemAgregadaST().toString(),"0.99");
	        Assert.assertEquals(result.getCfopList().get(0).getCstPrincipal().toString(),"0.99");
	        Assert.assertEquals(result.getCfopList().get(0).getClassFiscal().toString(),"0.99");
	        Assert.assertEquals(result.getCfopList().get(0).getObservacao().toString(),"OBSERVACAO - UPDATE");

	        //=======================
	        System.out.println("==================================DELETE==============================================");

	        result = restTemplate.postForObject( REST_SERVICE_URI + "fiscal/api/cfop/delete/",entitys,  CfopResponse.class);
	        Assert.assertEquals(result.isOperationSuccess(), true);
	        Assert.assertEquals(result.getCfopList().size(), count.intValue());


	    }


	 	@Test
	 	public void listAutentication() throws JsonParseException, JsonMappingException, IOException{
	        System.out.println("Testing listAllUsers API-----------");

	        RestTemplate restTemplate = new RestTemplate();

	        //http://localhost:8080/qat-sysmgmt-controller-rest/site/api/fetchPage
	        //['X-Auth-Token'] = "anonimo@aninimo.com:1464222873542:eb86a5e265cbdd54d63a03efece46935";

	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Header", "value");
	        headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Other-Header", "othervalue");
	        headers.set("username", "taz@qat.com" );

			Map<String, String> params = new HashMap<String, String>();
		    params.put("username", "taz@qat.com");
		    params.put("password", "taz@qat.com");
		   // HTTPClient<HashMap<String,Object>> http = new HTTPClient<>();
		 // GET TGT
		    RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "taz@qat.com");
		    paramss.set("password", "devil");
		    URI tgtUrl = rest.postForLocation(REST_SERVICE_URI + "auth/api/authenticate", paramss, Collections.emptyMap());
		    System.out.println("[" + tgtUrl + "]");

		 //   TokenModel tgtUrls = rest.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, Collections.emptyMap(),  TokenModel.class);
		    System.out.println("[" + tgtUrl + "]");


		    ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss, String.class);
		    System.out.println("[" + st.getBody() + "]");
		    System.out.println("[" + st + "]");
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");
		  // Gson gson = new Gson();
		   // MyObject = gson.fromJson(decodedString , MyObjectClass.class);
		   // Class<? extends TokenModel> c = st.getBody().getClass();
		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		    System.out.println("[" + obj.getToken() + "]");

//	        HttpEntity<String> entity = new HttpEntity<String>(headers);
//	        URI location = restTemplate.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate","username=taz@qat.com");
//	        String result = restTemplate.exchange("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate",entity, HttpMethod.POST,  String.class);
//	        ResponseEntity<Map> response=restTemplate.exchange("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", HttpMethod.POST, entity, Map.class);
//	        System.out.println("No user exist----------"+response.getBody());
//              String result = restTemplate.postForObject("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", entity, String.class,HttpMethod.POST,paramss);
//	      //  HttpEntity<String> response = restTemplate.exchange(REST_SERVICE_URI+"/site/api/fetchPage/",HttpMethod.GET, entity,List.class,null);
//	      //  List<LinkedHashMap<String, Object>> usersMap = restTemplate.getForObject(REST_SERVICE_URI+"/site/api/fetchPage/", entity,List.class,HttpMethod.GET,{"teste:teste"});
//
//	      //  if(usersMap!=null){
//	      //      for(LinkedHashMap<String, Object> map : usersMap){
//	       //         System.out.println("User : id="+map.get("id")+", Name="+map.get("name")+", Age="+map.get("age")+", Salary="+map.get("salary"));;
//	      //      }
//	       // }else{
//	            System.out.println("No user exist----------");
//	     //   }
	    }

//	 	@Test
//	 	public void getUser(){
//	        System.out.println("Testing getUser API----------");
//	        RestTemplate restTemplate = new RestTemplate();
//	        User user = restTemplate.getForObject(REST_SERVICE_URI+"/user/1", User.class);
//	        System.out.println(user);
//	    }
//
//	 	@Test
//	 	public void createUser() {
//	        System.out.println("Testing create User API----------");
//	        RestTemplate restTemplate = new RestTemplate();
//	        User user = new User(0,"Sarah",51,134);
//	        URI uri = restTemplate.postForLocation(REST_SERVICE_URI+"/user/", user, User.class);
//	        System.out.println("Location : "+uri.toASCIIString());
//	    }
//
//	 	@Test
//	 	public void updateUser() {
//	        System.out.println("Testing update User API----------");
//	        RestTemplate restTemplate = new RestTemplate();
//	        User user  = new User(1,"Tomy",33, 70000);
//	        restTemplate.put(REST_SERVICE_URI+"/user/1", user);
//	        System.out.println(user);
//	    }
//
//	 	@Test
//	 	public void deleteUser() {
//	        System.out.println("Testing delete User API----------");
//	        RestTemplate restTemplate = new RestTemplate();
//	        restTemplate.delete(REST_SERVICE_URI+"/user/3");
//	    }
//
//
//	 	@Test
//	 	public void deleteAllUsers() {
//	        System.out.println("Testing all delete Users API----------");
//	        RestTemplate restTemplate = new RestTemplate();
//	        restTemplate.delete(REST_SERVICE_URI+"/user/");
//	    }


}
