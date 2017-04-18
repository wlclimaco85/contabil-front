package org.talesolutions.cep;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.ws.WebServiceContext;

import org.apache.commons.io.IOUtils;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.ClassUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fincatto.nfe310.parsers.NotaParser;
import com.qat.framework.model.BaseModel.PersistenceActionEnum;
import com.qat.samples.sysmgmt.advocacia.request.AudienciaInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.request.ProcessoInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.response.AudienciaResponse;
import com.qat.samples.sysmgmt.advocacia.response.ProcessoResponse;
import com.qat.samples.sysmgmt.util.model.TabelaEnum;

import br.com.certisign.certisignon.test.CertificadoBean;
import br.com.certisign.certisignon.tools.certificados.CryptoLogin;
import br.com.certisign.certisignon.tools.certificados.NewCripto2;
import br.com.emmanuelneri.app.model.ModelToken;



public class AdvogadoTest {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";
	private HttpServletRequest request;

	// create by system gera-java version 1.0.0 02/08/2016 9:43 : 1//


    @Test
    public void deveParsearCorretamenteArquivoDaNota310() throws Exception {
    	System.out.println("teste");
      //  Assert.assertNotNull(new NotaParser().notaParaObjeto(new File(new URI(AdvogadoTest.class.getResource("nota.xml").getFile()).getPath())));
    }


    @Test
    public void deveParsearCorretamenteArquivoDaNotaProcessada310() throws Exception {
     //   Assert.assertNotNull(new NotaParser().notaProcessadaParaObjeto(new File(new URI(AdvogadoTest.class.getResource("notaprocessada.xml").getFile()).getPath())));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmArquivoInvalidoParaNotaProcessada() {
        new NotaParser().notaProcessadaParaObjeto(new File(""));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmArquivoInvalidoParaNota() {
        new NotaParser().notaParaObjeto(new File(""));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmaStringInvalidaParaNotaProcessada() {
        new NotaParser().notaProcessadaParaObjeto("");
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmaStringInvalidaParaNota() {
        new NotaParser().notaParaObjeto("");
    }

    @Test
    public void deveParsearCorretamenteArquivoDoNFEnviaEventoCartaCorrecao() throws Exception {
      //  Assert.assertNotNull(new NotaParser().enviaEventoCartaCorrecaoParaObjeto(new File(new URI(AdvogadoTest.class.getResource("enviaEventoCartaCorrecao.xml").getFile()).getPath())));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmaStringInvalidaParaEnviaEventoCartaCorrecao() {
        new NotaParser().enviaEventoCartaCorrecaoParaObjeto("");
    }


    @Test
    public void deveParsearCorretamenteArquivoDoNFEnviaEventoCancelamento() throws Exception {
       // Assert.assertNotNull(new NotaParser().enviaEventoCancelamentoParaObjeto(new File(new URI(AdvogadoTest.class.getResource("enviaEventoCancelamento.xml").getFile()).getPath())));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmaStringInvalidaParaEnviaEventoCancelamento() {
        new NotaParser().enviaEventoCancelamentoParaObjeto("");
    }


    @Test
    public void deveParsearCorretamenteArquivoDoNFEnviaEventoInutilizacao() throws Exception {
     //   Assert.assertNotNull(new NotaParser().enviaEventoInutilizacaoParaObjeto(new File(new URI(NotaParser.class.getResource("enviaEventoInutilizacao.xml").getFile()).getPath())));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoCasoRecebaUmaStringInvalidaParaEnviaEventoInutilizacao() {
        new NotaParser().enviaEventoInutilizacaoParaObjeto("");
    }
    public void setServletRequest(javax.servlet.http.HttpServletRequest request){
        this.request = request;
    }

    public HttpSession getSession(){
        return request.getSession();
    }
	@Test
	public void listAllAudiencia() throws JsonParseException, JsonMappingException, IOException, URISyntaxException, ServletException {


		HttpServletRequest request = null;//HttpServletRequest();
		HttpServletResponse response = null;
		// obter retorno encriptado da resposta
		 	//	String ret = request.getParameter("cb");
		 		WebServiceContext wsContext;
		 	//	ret = ret.replace(" ", "");

		 	//	System.out.println("ret: " + ret);

		 		String decriptado = "";

		 		try {
		 		//	((HttpSession) request).getServletContext();
		 			HttpSession session = request.getSession();
		 			InputStream chave =
		 					session.getServletContext().getResourceAsStream("2830.pk");

		 			File outputFile = new File("2830.pk");
		 			outputFile.createNewFile();
		 			FileWriter outfile = new FileWriter(outputFile);

		 			InputStream sourcess = ClassUtils.getDefaultClassLoader()
		 		    .getResourceAsStream("2830.pk");

		 			InputStream sources = this.getClass().getClassLoader().getResourceAsStream("2830.pk");

		 			InputStream source = this.getClass().getResourceAsStream("2830.pk");
		 			// obter chave que foi feito o download
		 			//ServletContext sc = this.getServletContext();
		 			//FileInputStream fis = new FileInputStream(getServletContext().getRealPath("/")
		         //           + "");
		 			ServletContext context = null;

		 			String schaves = IOUtils.toString(source, "UTF-8");
		 		//	Object arg0;
					// ServletContext ctx = getServletContext();
		 			//ServletContext context = getServletContext();
		 		//	Object sContext= wsContext.getMessageContext()
		         //           .get(arg0);

		 			//InputStream chave =context.getResourceAsStream("CERTISIGNON_PROD_4.pk"); //getServletContext().getResourceAsStream("/WEB-INF/keys/CERTISIGNON_PROD_4.pk");

		 		//	String schave = IOUtils.toString(chaves, "UTF-8");

		 			System.out.println("Resource Stream is : "+schaves);

		 			String decriptadod = CryptoLogin.decrypt("teste", schaves);

		 			// usar client e chave para decriptar o retorno encriptado
		 			decriptado = NewCripto2.decrypt("teste", schaves);

		 			System.out.println(decriptado);

		 		} catch (Exception e) {
		 			e.printStackTrace();
		 		}

		 		decriptado = decriptado.replace("CertificadoBean : ", "");
		 		decriptado = decriptado.replace("'", "\"");

		 		System.out.println(decriptado);

		 		// transformando JSON em Objeto
		 		ObjectMapper mapper = new ObjectMapper();
		 		//CertificadoBean certificado = mapper.readValue(decriptado, CertificadoBean.class);

		 	//	request.setAttribute("ret", "rest");
		 //		request.setAttribute("decriptado", decriptado);
		 	//	request.setAttribute("certificado", certificado);

	//	 		request.getRequestDispatcher("/retorno.jsp").forward(request, response);






//		String s = "C:\\uploads\\nota.xml";

	//	File temp = new File(new URI(AdvogadoTest.class.getResource(s).getFile()));
	//	temp.createNewFile();
	//   File myhtml = new File("C:\\uploads\\nota.xml");
  //     File f = new File (s); // esta é a tal "conversão que você queria :P
 //      String str = FileUtils.readFileToString(f, "UTF-8");
//       FileInputStream fis = new FileInputStream (f);
//       MultipartHttpServletRequest requestFile = null;
//       requestFile.setCharacterEncoding(str);
//       Iterator<String> itr =  requestFile.getFileNames();
//
//       MultipartFile mpf = requestFile.getFile(itr.next());
//
//       UploadedFile ufile = new UploadedFile();
//       ufile.length = mpf.getBytes().length;
//       ufile.bytes= mpf.getBytes();
   //    ufile.type = mpf.getContentType();
 //      ufile.name = mpf.getOriginalFilename();

     //  FileCopyUtils.copy(ufile.bytes, response.getOutputStream());

//       BufferedReader reader = new BufferedReader(
//    		    new InputStreamReader(
//    		        new FileInputStream("c:\\uploads\\nota.xml"),
//    		        "UTF-8"
//    		    )
//    		);
//       reader.readLine();
//       reader.toString();
 //      Document docFile1 = XMLDocumentStore.getDoc("/path/to/File1.xml");
   //    final NFNota nota = new NotaParser().notaParaObjeto(FileUtils.readFileToString(f, "UTF-8"));

    //   final NFNotaProcessada notass = new NotaParser().notaProcessadaParaObjeto(new File(new URI(AdvogadoTest.class.getResource("notaprocessada.xml").getFile()).getPath()));

 //      Assert.assertNotNull(new NotaParser().notaParaObjeto(str));

   //    File fss = new File(new URI(AdvogadoTest.class.getResource(s).getFile()).getPath());
    //   File fs = new File(new URI(AdvogadoTest.class.getResource(s).getFile()).getPath());



       //NFNota contact = serializer.read(NFNota.class, s, false);

       //FileCopyUtils.copy(f, new File("c:/uploads/teste/" + f));
   //    final NFNota notas = new NotaParser().notaParaObjeto(fss);
     //  final NFNota notas = new NotaParser().notaParaObjeto(fs);

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
		ObjectMapper mappers = new ObjectMapper();
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


//	@Test
//	public void listAllAudiencia2() throws JsonParseException, JsonMappingException, IOException {
//
//		Integer count = 0;
//		Integer id = 10000;
//		RestTemplate restTemplate = new RestTemplate();
//
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Header", "value");
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("Other-Header", "othervalue");
//		headers.set("X-Cosmos-Token", "zOqsaXajQATQpmUY9dJdOA");
//		//String a = "request:{pageSize: 20, startPage: 2, sortExpressions: null, preQueryCount: true, maxPreQueryCount: 0}, token:taz@qat.com:1469815365580:33f9281620d9dc7df079e056ad235420, url:advocacia/api/cfop/fetchPage/";
//		HttpEntity<String> entity = new HttpEntity<String>("{}", headers);
//
//
//		// =========== fetch
//		// ================================================================
//		System.out.println("==================================FetchALL==============================================");
//
//		HttpEntity<String> entitys = new HttpEntity<String>(null, headers);
//		//String result = restTemplate.postForObject("https://api.cosmos.bluesoft.com.br/gtins/7891910000197",
//		//		entity, String.class);
//		String result = restTemplate.getForObject("https://api.cosmos.bluesoft.com.br/gtins/7891910000197.json",String.class,HttpMethod.GET,entity) ;
//		System.out.println(result);
//		//Assert.assertEquals(result.isOperationSuccess(), true);
//		//count = result.getAudienciaList().size();
//
//
//
//	}





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
