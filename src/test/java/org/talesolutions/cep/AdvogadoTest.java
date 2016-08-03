package org.talesolutions.cep;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
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
import com.qat.samples.sysmgmt.advocacia.Advogado;
import com.qat.samples.sysmgmt.advocacia.Audiencia;
import com.qat.samples.sysmgmt.advocacia.request.AudienciaInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.request.ProcessoInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.response.AudienciaResponse;
import com.qat.samples.sysmgmt.advocacia.response.ProcessoResponse;
import com.qat.samples.sysmgmt.pessoa.model.Cliente;
import com.qat.samples.sysmgmt.util.model.Note;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.emmanuelneri.app.model.ModelToken;

public class AdvogadoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	// create by system gera-java version 1.0.0 02/08/2016 9:43 : 1//

	@Test
	public void listAllAudiencia() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

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

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
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
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:advocacia/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new AudienciaInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		AudienciaResponse result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/audiencia/fetchPage/",
				entitys, AudienciaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getAudienciaList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertAudiencia(id, TabelaEnum.AUDIENCIA, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"audiencia\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/audiencia/insert/", entitys,
				AudienciaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertAudiencia(id, TabelaEnum.AUDIENCIA, PersistenceActionEnum.UPDATE));
		requestJson = "{\"audiencia\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/audiencia/update/", entitys,
				AudienciaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		AudienciaInquiryRequest request001 = new AudienciaInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/audiencia/fetchPage/", entitys,
				AudienciaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getAudienciaList().size(), 1);

		// Assert.assertEquals(result.getAudienciaList().get(0).getDataAudiencia(),(1001);
		// Assert.assertEquals(result.getAudienciaList().get(0).getValor(),(10.00);
		Assert.assertEquals(result.getAudienciaList().get(0).getDescricao(), "descricao_3 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertAudiencia(id, TabelaEnum.AUDIENCIA, PersistenceActionEnum.DELETE));
		requestJson = "{\"audiencia\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/audiencia/delete/", entitys,
				AudienciaResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getAudienciaList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 9:43 : 1//

	@Test
	public void listAllProcesso() throws JsonParseException, JsonMappingException, IOException {

		Integer count = 0;
		Integer id = 10000;
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Header", "value");
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Other-Header", "othervalue");
		headers.set("username", "taz@qat.com");

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

		ResponseEntity<String> st = rest.postForEntity(REST_SERVICE_URI + "auth/api/authenticate", paramss,
				String.class);
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
		headers.set("X-Auth-Token", obj.getToken());
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:advocacia/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new ProcessoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		ProcessoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/processo/fetchPage/",
				entitys, ProcessoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getProcessoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertProcesso(id, TabelaEnum.PROCESSO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"processo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/processo/insert/", entitys,
				ProcessoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertProcesso(id, TabelaEnum.PROCESSO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"processo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/processo/update/", entitys,
				ProcessoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		ProcessoInquiryRequest request001 = new ProcessoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/processo/fetchPage/", entitys,
				ProcessoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getProcessoList().size(), 1);

		// Assert.assertEquals(result.getProcessoList().get(0).getDataProcess(),(1001);
		// Assert.assertEquals(result.getProcessoList().get(0).getValor(),(10.00);

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertProcesso(id, TabelaEnum.PROCESSO, PersistenceActionEnum.DELETE));
		requestJson = "{\"processo\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "advocacia/api/processo/delete/", entitys,
				ProcessoResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);
		Assert.assertEquals(result.getProcessoList().size(), count.intValue());

	}

}
