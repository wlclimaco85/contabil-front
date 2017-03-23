package org.talesolutions.cep;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.junit.Assert;
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
import com.qat.samples.sysmgmt.advocacia.request.AdvogadoInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.response.AdvogadoResponse;
import com.qat.samples.sysmgmt.clinica.model.request.MedicoInquiryRequest;
import com.qat.samples.sysmgmt.clinica.model.request.PacienteInquiryRequest;
import com.qat.samples.sysmgmt.clinica.model.response.MedicoResponse;
import com.qat.samples.sysmgmt.clinica.model.response.PacienteResponse;
import com.qat.samples.sysmgmt.condominio.model.request.InquilinoInquiryRequest;
import com.qat.samples.sysmgmt.condominio.model.request.SindicoInquiryRequest;
import com.qat.samples.sysmgmt.condominio.model.response.InquilinoResponse;
import com.qat.samples.sysmgmt.condominio.model.response.SindicoResponse;
import com.qat.samples.sysmgmt.dp.model.request.FuncionarioInquiryRequest;
import com.qat.samples.sysmgmt.dp.model.response.FuncionarioResponse;
import com.qat.samples.sysmgmt.pessoa.model.request.ClienteInquiryRequest;
import com.qat.samples.sysmgmt.pessoa.model.request.FornecedorInquiryRequest;
import com.qat.samples.sysmgmt.pessoa.model.request.TransportadorInquiryRequest;
import com.qat.samples.sysmgmt.pessoa.model.response.ClienteResponse;
import com.qat.samples.sysmgmt.pessoa.model.response.FornecedorResponse;
import com.qat.samples.sysmgmt.pessoa.model.response.TransportadorResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.emmanuelneri.app.model.ModelToken;

public class PessoaTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllAdvogado() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new AdvogadoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		AdvogadoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/advogado/fetchPage/",
				entitys, AdvogadoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getAdvogadoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertAdvogado(id, TabelaEnum.ADVOCACIA, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"advogado\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/advogado/insert/", entitys,
				AdvogadoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertAdvogado(id, TabelaEnum.ADVOCACIA, PersistenceActionEnum.UPDATE));
		requestJson = "{\"advogado\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/advogado/update/", entitys,
				AdvogadoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		AdvogadoInquiryRequest request001 = new AdvogadoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/advogado/fetchPage/", entitys,
				AdvogadoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getAdvogadoList().size(), 1);

		//Assert.assertEquals(result.getAdvogadoList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getAdvogadoList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getAdvogadoList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getAdvogadoList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		// //Assert.assertEquals(result.getAdvogadoList().get(0).getEstadoCivil(),(1005);
		// //Assert.assertEquals(result.getAdvogadoList().get(0).getTipoPessoa(),(1006);
		// //Assert.assertEquals(result.getAdvogadoList().get(0).getDatanasc(),(new
		// Long());
		//Assert.assertEquals(result.getAdvogadoList().get(0).getFoto(), "foto_8 - UPDATE");
		// //Assert.assertEquals(result.getAdvogadoList().get(0).getPessoaTypeEnum(),(1009);
		// //Assert.assertEquals(result.getAdvogadoList().get(0).getSexo(),(1010);
		// objeto.setEnderecos(new ArrayList<List<Endereco>> ())
		// objeto.get().add(new List<Endereco>());
		// objeto.setDocumentos(new ArrayList<List<Documento>> ())
		// objeto.get().add(new List<Documento>());
		// objeto.setEmails(new ArrayList<List<Email>> ())
		// objeto.get().add(new List<Email>());
		// objeto.setTelefones(new ArrayList<List<Telefone>> ())
		// objeto.get().add(new List<Telefone>());
		// objeto.setBancos(new ArrayList<List<BancoPessoa>> ())
		// objeto.get().add(new List<BancoPessoa>());
		// objeto.setFormaPagamentoList(new ArrayList<List<FormaPgPessoa>> ())
		// objeto.get().add(new List<FormaPgPessoa>());
		// objeto.setCondPagList(new ArrayList<List<CondPagPessoa>> ())
		// objeto.get().add(new List<CondPagPessoa>());
		// objeto.setContatoList(new ArrayList<List<Contato>> ())
		// objeto.get().add(new List<Contato>());

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertAdvogado(id, TabelaEnum.ADVOCACIA, PersistenceActionEnum.DELETE));
		requestJson = "{\"advogado\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/advogado/delete/", entitys,
				AdvogadoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getAdvogadoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllCliente() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new ClienteInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		ClienteResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/cliente/fetchPage/", entitys,
				ClienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getClienteList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertCliente(id, TabelaEnum.CLIENTE, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"cliente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/cliente/insert/", entitys,
				ClienteResponse.class);
		Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertCliente(id, TabelaEnum.CLIENTE, PersistenceActionEnum.UPDATE));
		requestJson = "{\"cliente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/cliente/update/", entitys,
				ClienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		ClienteInquiryRequest request001 = new ClienteInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/cliente/fetchPage/", entitys,
				ClienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getClienteList().size(), 1);

		//Assert.assertEquals(result.getClienteList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getClienteList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getClienteList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getClienteList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getClienteList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertCliente(id, TabelaEnum.CLIENTE, PersistenceActionEnum.DELETE));
		requestJson = "{\"cliente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/cliente/delete/", entitys,
				ClienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getClienteList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllFornecedor() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new FornecedorInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		FornecedorResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/fornecedor/fetchPage/",
				entitys, FornecedorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getFornecedorList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertFornecedor(id, TabelaEnum.FORNECEDOR, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"fornecedor\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/fornecedor/insert/", entitys,
				FornecedorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertFornecedor(id, TabelaEnum.FORNECEDOR, PersistenceActionEnum.UPDATE));
		requestJson = "{\"fornecedor\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/fornecedor/update/", entitys,
				FornecedorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		FornecedorInquiryRequest request001 = new FornecedorInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/fornecedor/fetchPage/", entitys,
				FornecedorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getFornecedorList().size(), 1);

		//Assert.assertEquals(result.getFornecedorList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getFornecedorList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getFornecedorList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getFornecedorList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getFornecedorList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertFornecedor(id, TabelaEnum.FORNECEDOR, PersistenceActionEnum.DELETE));
		requestJson = "{\"fornecedor\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/fornecedor/delete/", entitys,
				FornecedorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getFornecedorList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllTransportador() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new TransportadorInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		TransportadorResponse result = restTemplate.postForObject(
				REST_SERVICE_URI + "pessoa/api/transportador/fetchPage/", entitys, TransportadorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getTransportadorList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper.writeValueAsString(
				Objects.insertTransportador(id, TabelaEnum.TRANSPORTADOR, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"transportador\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/transportador/insert/", entitys,
				TransportadorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper.writeValueAsString(
				Objects.insertTransportador(id, TabelaEnum.TRANSPORTADOR, PersistenceActionEnum.UPDATE));
		requestJson = "{\"transportador\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/transportador/update/", entitys,
				TransportadorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		TransportadorInquiryRequest request001 = new TransportadorInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/transportador/fetchPage/", entitys,
				TransportadorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getTransportadorList().size(), 1);

		//Assert.assertEquals(result.getTransportadorList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getTransportadorList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getTransportadorList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getTransportadorList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getTransportadorList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper.writeValueAsString(
				Objects.insertTransportador(id, TabelaEnum.TRANSPORTADOR, PersistenceActionEnum.DELETE));
		requestJson = "{\"transportador\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/transportador/delete/", entitys,
				TransportadorResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getTransportadorList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllMedico() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new MedicoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		MedicoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/medico/fetchPage/", entitys,
				MedicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getMedicoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertMedico(id, TabelaEnum.MEDICO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"medico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/medico/insert/", entitys,
				MedicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertMedico(id, TabelaEnum.MEDICO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"medico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/medico/update/", entitys,
				MedicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		MedicoInquiryRequest request001 = new MedicoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/medico/fetchPage/", entitys,
				MedicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getMedicoList().size(), 1);

		//Assert.assertEquals(result.getMedicoList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getMedicoList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getMedicoList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getMedicoList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getMedicoList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertMedico(id, TabelaEnum.MEDICO, PersistenceActionEnum.DELETE));
		requestJson = "{\"medico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/medico/delete/", entitys,
				MedicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getMedicoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllPaciente() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new PacienteInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		PacienteResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/paciente/fetchPage/",
				entitys, PacienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getPacienteList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertPaciente(id, TabelaEnum.PACIENTE, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"paciente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/paciente/insert/", entitys,
				PacienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertPaciente(id, TabelaEnum.PACIENTE, PersistenceActionEnum.UPDATE));
		requestJson = "{\"paciente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/paciente/update/", entitys,
				PacienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		PacienteInquiryRequest request001 = new PacienteInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/paciente/fetchPage/", entitys,
				PacienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getPacienteList().size(), 1);

		//Assert.assertEquals(result.getPacienteList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getPacienteList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getPacienteList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getPacienteList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getPacienteList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertPaciente(id, TabelaEnum.PACIENTE, PersistenceActionEnum.DELETE));
		requestJson = "{\"paciente\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/paciente/delete/", entitys,
				PacienteResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getPacienteList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllSindico() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new SindicoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		SindicoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/sindico/fetchPage/", entitys,
				SindicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getSindicoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertSindico(id, TabelaEnum.SINDICO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"sindico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/sindico/insert/", entitys,
				SindicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertSindico(id, TabelaEnum.SINDICO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"sindico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/sindico/update/", entitys,
				SindicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		SindicoInquiryRequest request001 = new SindicoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/sindico/fetchPage/", entitys,
				SindicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getSindicoList().size(), 1);

		//Assert.assertEquals(result.getSindicoList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getSindicoList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getSindicoList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getSindicoList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getSindicoList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertSindico(id, TabelaEnum.SINDICO, PersistenceActionEnum.DELETE));
		requestJson = "{\"sindico\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/sindico/delete/", entitys,
				SindicoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getSindicoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllInquilino() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new InquilinoInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		InquilinoResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/inquilino/fetchPage/",
				entitys, InquilinoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getInquilinoList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertInquilino(id, TabelaEnum.INQUILINO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"inquilino\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/inquilino/insert/", entitys,
				InquilinoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper
				.writeValueAsString(Objects.insertInquilino(id, TabelaEnum.INQUILINO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"inquilino\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/inquilino/update/", entitys,
				InquilinoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		InquilinoInquiryRequest request001 = new InquilinoInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/inquilino/fetchPage/", entitys,
				InquilinoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getInquilinoList().size(), 1);

		//Assert.assertEquals(result.getInquilinoList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getInquilinoList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getInquilinoList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getInquilinoList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getInquilinoList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper
				.writeValueAsString(Objects.insertInquilino(id, TabelaEnum.INQUILINO, PersistenceActionEnum.DELETE));
		requestJson = "{\"inquilino\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/inquilino/delete/", entitys,
				InquilinoResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getInquilinoList().size(), count.intValue());

	}

	// create by system gera-java version 1.0.0 02/08/2016 11:26 : 6//

	@Test
	public void listAllFuncionario() throws JsonParseException, JsonMappingException, IOException {

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
		String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:pessoa/api/cfop/fetchPage/";
		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);

		// =========== fetch
		// ================================================================
		System.out.println("==================================FetchALL==============================================");
		String jsonInString = mapper.writeValueAsString(new FuncionarioInquiryRequest());
		System.out.println(jsonInString);
		HttpEntity<String> entitys = new HttpEntity<String>(jsonInString, headers);
		FuncionarioResponse result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/funcionario/fetchPage/",
				entitys, FuncionarioResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		count = result.getFuncionarioList().size();

		// =========== Insert
		// ================================================================
		System.out.println("==================================INSERT==============================================");
		jsonInString = mapper.writeValueAsString(
				Objects.insertFuncionario(id, TabelaEnum.FUNCIONARIO, PersistenceActionEnum.INSERT));
		System.out.println(jsonInString);
		String requestJson = "{\"funcionario\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/funcionario/insert/", entitys,
				FuncionarioResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== Update
		// ================================================================
		System.out.println("==================================UPDATE==============================================");

		jsonInString = mapper.writeValueAsString(
				Objects.insertFuncionario(id, TabelaEnum.FUNCIONARIO, PersistenceActionEnum.UPDATE));
		requestJson = "{\"funcionario\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/funcionario/update/", entitys,
				FuncionarioResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);

		// =========== FetchbyID
		// ================================================================
		System.out.println("==================================FetchID==============================================");

		FuncionarioInquiryRequest request001 = new FuncionarioInquiryRequest();
		request001.setId(id);
		jsonInString = mapper.writeValueAsString(request001);
		System.out.println(jsonInString);
		entitys = new HttpEntity<String>(jsonInString, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/funcionario/fetchPage/", entitys,
				FuncionarioResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getFuncionarioList().size(), 1);

		//Assert.assertEquals(result.getFuncionarioList().get(0).getNome(), "nome_1 - UPDATE");
		//Assert.assertEquals(result.getFuncionarioList().get(0).getNomePai(), "nomePai_2 - UPDATE");
		//Assert.assertEquals(result.getFuncionarioList().get(0).getNomeMae(), "nomeMae_3 - UPDATE");
		//Assert.assertEquals(result.getFuncionarioList().get(0).getNomeConjugue(), "nomeConjugue_4 - UPDATE");
		//Assert.assertEquals(result.getFuncionarioList().get(0).getFoto(), "foto_8 - UPDATE");

		// =======================
		System.out.println("==================================DELETE==============================================");
		jsonInString = mapper.writeValueAsString(
				Objects.insertFuncionario(id, TabelaEnum.FUNCIONARIO, PersistenceActionEnum.DELETE));
		requestJson = "{\"funcionario\":" + jsonInString + "}";
		entitys = new HttpEntity<String>(requestJson, headers);
		result = restTemplate.postForObject(REST_SERVICE_URI + "pessoa/api/funcionario/delete/", entitys,
				FuncionarioResponse.class);
		//Assert.assertEquals(result.isOperationSuccess(), true);
		//Assert.assertEquals(result.getFuncionarioList().size(), count.intValue());

	}

	// =====================================TESTE===========================================================
}
