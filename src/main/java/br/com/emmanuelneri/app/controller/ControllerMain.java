package br.com.emmanuelneri.app.controller;


import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.talesolutions.cep.CEP;
import org.talesolutions.cep.CEPService;
import org.talesolutions.cep.CEPServiceFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qat.framework.model.BaseModel.PersistenceActionEnum;
import com.qat.samples.sysmgmt.advocacia.request.AudienciaInquiryRequest;
import com.qat.samples.sysmgmt.advocacia.response.AudienciaResponse;
import com.qat.samples.sysmgmt.cfop.model.Cfop;
import com.qat.samples.sysmgmt.cfop.model.request.CfopMaintenanceRequest;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;

import br.com.emmanuelneri.app.model.ModelToken;
import br.com.emmanuelneri.app.model.UtilRequest;

@Controller
@RequestMapping("/main/api")
public class ControllerMain {

//	private static final String URL = "http://prod001.mybluemix.net/";
	private static final String URL = "http://localhost:8080/qat-sysmgmt-controller-rest/";
	private CEPService buscaCEP;



	@RequestMapping(value = "/fetchCep", method = RequestMethod.POST)
	@ResponseBody
	public CEP fetchCep(@RequestBody String cep) {
		buscaCEP = CEPServiceFactory.getCEPService();
		return buscaCEP.obtemPorNumeroCEP(cep);
	}

	@ResponseBody
    @RequestMapping(value = "/request", method = RequestMethod.POST)
    public String listar(@RequestBody UtilRequest request) {

        RestTemplate restTemplate = new RestTemplate();
        String result ="";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Header", "value");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Other-Header", "othervalue");
        headers.set("X-Auth-Token", request.getToken() );
        
        ObjectMapper mapper = new ObjectMapper();
        //HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
        String jsonInString = null;
		try {
			jsonInString = mapper.writeValueAsString(request.getRequest());
		
        HttpEntity<String> entity = new HttpEntity<String>(jsonInString, headers);
        result = restTemplate.postForObject(URL + request.getUrl(), entity, String.class,HttpMethod.GET);

        
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		return result;
    }

	@ResponseBody
    @RequestMapping(value = "/requests", method = RequestMethod.POST)
    public String listard(@RequestBody UtilRequest request) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Header", "value");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Other-Header", "othervalue");
        headers.set("X-Auth-Token", request.getToken() );

        HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
        String result = restTemplate.postForObject(URL + request.getUrl(), entity, String.class,HttpMethod.POST,request.getRequest());
      //  HttpEntity<String> response = restTemplate.exchange(REST_SERVICE_URI+"/site/api/fetchPage/",HttpMethod.GET, entity,List.class,null);
      //  List<LinkedHashMap<String, Object>> usersMap = restTemplate.getForObject(REST_SERVICE_URI+"/site/api/fetchPage/", entity,List.class,HttpMethod.GET,{"teste:teste"});

      //  if(usersMap!=null){
      //      for(LinkedHashMap<String, Object> map : usersMap){
       //         System.out.println("User : id="+map.get("id")+", Name="+map.get("name")+", Age="+map.get("age")+", Salary="+map.get("salary"));;
      //      }
       // }else{
            System.out.println("No user exist----------");
     //   }
            return result;
    }
	@ResponseBody
    @RequestMapping(value = "/cfop", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public String listarCFOP(@RequestBody UtilRequest request) throws JsonProcessingException {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Header", "value");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Other-Header", "othervalue");
        headers.set("X-Auth-Token", request.getToken() );

//        System.out.println("[" + request.getRequest() + "]");
//	    System.out.println("[" + request + "]");
//	    Object tk = request.getRequest();
//	    Class<? extends Object> mt = tk.getClass();
//	    System.out.println("[" + mt + "]");
	    ObjectMapper mapper = new ObjectMapper();
//
	  //Convert object to JSON string and pretty print
		String jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(request.getRequest());
		System.out.println(jsonInString);
//
//	    Cfop cfop = new Cfop();
//
//        cfop.setCfop("teste");
//        cfop.setId(64);
//        cfop.setNatureza("testando");
//        cfop.setObservacao("Observação 123");
//
//        CfopMaintenanceRequest requess = new CfopMaintenanceRequest();
//        requess.setCfop(cfop);


      //Convert object to JSON string
      //  String requestJson = "{\"cfop\":"+jsonInString+"}";
        HttpEntity<String> entitys = new HttpEntity<String>(jsonInString,headers);

        CfopResponse result = restTemplate.postForObject( URL + request.getUrl(),entitys,  CfopResponse.class);
//        HttpEntity<String> entity = new HttpEntity<String>("{}",headers);
//        String result = restTemplate.postForObject(URL + "fiscal/api/cfop/insert/", entity, String.class,HttpMethod.GET,requess);
//
//        CfopMaintenanceRequest resulta = restTemplate.postForObject(URL + "fiscal/api/cfop/insert/", entity, CfopMaintenanceRequest.class,HttpMethod.GET,requess);
//        System.out.println("No user exist----------"+resulta);

        System.out.println("No user exist----------");

            return mapper.writeValueAsString(result);
    }



}