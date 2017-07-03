package br.com.emmanuelneri.app.controller;


import java.io.IOException;
import java.util.Arrays;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.emmanuelneri.app.model.ModelToken;

@Controller
@RequestMapping("/api")
public class Autentication {


//	public static Properties getProp() throws IOException {
//		Properties props = new Properties();
//		FileInputStream file = new FileInputStream(
//				"././properties/dados.properties");
//		props.load(file);
//		return props;
//
//	}


    private static final String URL = "http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate";

   // private static final String URL = "http://191.243.199.205/qat-sysmgmt-controller-rest/auth/api/authenticate";
	@ResponseBody
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ModelToken fetchtoken(@RequestParam("username") String username,
			@RequestParam("password") String password) throws JsonParseException, JsonMappingException, IOException {

		//	Properties prop = getProp();

//			System.out.println();
//			System.out.println("[" + prop.getProperty("prop.version") + "]");

	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Header", "value");
	        headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Other-Header", "othervalue");
	        headers.set("username", "taz@qat.com" );

		    RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", username);
		    paramss.set("password", password);
		  //  URI tgtUrl = rest.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, Collections.emptyMap());

		    ResponseEntity<String> st = rest.postForEntity(URL, paramss, String.class);

		//    ResponseEntity<String> st = rest.postForEntity("http://191.243.199.205/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, String.class);
		    System.out.println("[" + st.getBody() + "]");
		    System.out.println("[" + st + "]");
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");

		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		    return obj;
	}

	@RequestMapping(value = "/methodAauthenticate", method = RequestMethod.POST)
	@ResponseBody
	public ModelToken methodAauthenticate(@RequestBody String username, String password) throws JsonParseException, JsonMappingException, IOException {



	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Header", "value");
	        headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Other-Header", "othervalue");
	        headers.set("username", "taz@qat.com" );

		    RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "taz@qat.com");
		    paramss.set("password", "devil");
		   /// URI tgtUrl = rest.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, Collections.emptyMap());

		    ResponseEntity<String> st = rest.postForEntity(URL, paramss, String.class);
		    System.out.println("[" + st.getBody() + "]");
		    System.out.println("[" + st + "]");
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");

		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		    return obj;

	}
	@RequestMapping(value = "/method", method = RequestMethod.POST)
	@ResponseBody
	public ModelToken fetchMethod(@RequestBody String username, String password) throws JsonParseException, JsonMappingException, IOException {



	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Header", "value");
	        headers.setContentType(MediaType.APPLICATION_JSON);
	        headers.set("Other-Header", "othervalue");
	        headers.set("username", "taz@qat.com" );

		    RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "taz@qat.com");
		    paramss.set("password", "devil");
		   /// URI tgtUrl = rest.postForLocation("http://localhost:8080/qat-sysmgmt-controller-rest/auth/api/authenticate", paramss, Collections.emptyMap());

		    ResponseEntity<String> st = rest.postForEntity(URL, paramss, String.class);
		    System.out.println("[" + st.getBody() + "]");
		    System.out.println("[" + st + "]");
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");

		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

		    return obj;
	}

}