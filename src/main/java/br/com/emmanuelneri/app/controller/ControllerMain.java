package br.com.emmanuelneri.app.controller;


import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.talesolutions.cep.CEP;
import org.talesolutions.cep.CEPService;
import org.talesolutions.cep.CEPServiceFactory;

import com.aronkatona.FileManager.FileManager;
import com.aronkatona.model.Item;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;

import br.com.emmanuelneri.app.model.ModelToken;
import br.com.emmanuelneri.app.model.UploadedFile;
import br.com.emmanuelneri.app.model.UtilRequest;

@Controller
@RequestMapping("/main/api")
public class ControllerMain {

    UploadedFile ufile;
    public ControllerMain(){
      System.out.println("init RestController");
      ufile = new UploadedFile();
    }


//	private static final String URL = "http://prod001.mybluemix.net/";
	private static final String URL = "http://localhost:8080/qat-sysmgmt-controller-rest/";
	private CEPService buscaCEP;

	private FileManager fileManager = new FileManager();



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
    @RequestMapping(value = "/anonimo", method = RequestMethod.POST)
    public String anonimo(@RequestBody UtilRequest request) throws JsonParseException, JsonMappingException, IOException {

		 RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "anonimo@aninimo.com");
		    paramss.set("password", "anonimo");
		    ResponseEntity<String> st = rest.postForEntity(URL + "auth/api/authenticate", paramss, String.class);
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");
		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);

        RestTemplate restTemplate = new RestTemplate();
        String result ="";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Header", "value");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Other-Header", "othervalue");
        headers.set("X-Auth-Token", obj.getToken() );

        mapper = new ObjectMapper();
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
    @RequestMapping(value = "/anonimoFile", method = RequestMethod.POST)
    public String anonimoFile(@RequestBody UtilRequest request ,MultipartHttpServletRequest requestFile, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {


		///fffffffffffff
		 RestTemplate rest = new RestTemplate();
		    rest.setMessageConverters(Arrays.asList(new StringHttpMessageConverter(), new FormHttpMessageConverter()));
		    MultiValueMap<String, String> paramss = new LinkedMultiValueMap<String, String>();
		    paramss.set("username", "anonimo@aninimo.com");
		    paramss.set("password", "anonimo");
		    ResponseEntity<String> st = rest.postForEntity(URL + "auth/api/authenticate", paramss, String.class);
		    String tk = st.getBody();
		    Class<? extends String> mt = tk.getClass();
		    System.out.println("[" + mt + "]");
		    ObjectMapper mapper = new ObjectMapper();
		    ModelToken obj = mapper.readValue(st.getBody(), ModelToken.class);


		    //==================================

		  //0. notice, we have used MultipartHttpServletRequest

		       //1. get the files from the request object
		       Iterator<String> itr =  requestFile.getFileNames();

		       MultipartFile mpf = requestFile.getFile(itr.next());
		       System.out.println(mpf.getOriginalFilename() +" uploaded!");

		       try {
		                  //just temporary save file info into ufile
		          ufile.length = mpf.getBytes().length;
		          ufile.bytes= mpf.getBytes();
		          ufile.type = mpf.getContentType();
		          ufile.name = mpf.getOriginalFilename();
		          response.setContentType(ufile.type);
		          response.setContentLength(ufile.length);
		          FileCopyUtils.copy(ufile.bytes, response.getOutputStream());

		      } catch (IOException e) {
		          // TODO Auto-generated catch block
		          e.printStackTrace();
		      }

		    //====================================

        RestTemplate restTemplate = new RestTemplate();
        String result ="";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Header", "value");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Other-Header", "othervalue");
        headers.set("X-Auth-Token", obj.getToken() );

        mapper = new ObjectMapper();
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

	@RequestMapping(value="/error404")
	public String errorPage(Locale locale){
		return "error";
	}

	@RequestMapping(value = "/upload", method = RequestMethod.GET)
    public String uploadFileForm() {
        return "uploadItem";
    }

	@RequestMapping(value = "/saveFiles", method = RequestMethod.POST)
    public String uploadFile( @RequestParam("name") String[] itemNames,
    						  @RequestParam("owner") String[] itemOwners,
    						  @RequestParam("date") String[] buyDates,
    						  @RequestParam("file") MultipartFile[] files) throws IllegalStateException, IOException{

		fileManager.uploadFiles(itemNames,itemOwners,buyDates,files);
		return "uploadSuccess";
	}

    @RequestMapping(value="/files")
    public String files(Model model){

    	File folder = new File("F:/springMVC/FileUploadVelocity/src/main/webapp/resources/files");
    	List<File> files = new ArrayList<>(Arrays.asList(folder.listFiles()));
    	model.addAttribute("files", files);

    	String[] fileNames = new String[files.size()];
    	int i = 0;
    	for(File file : files){
    		fileNames[i++] = file.getName();
    	}
    	model.addAttribute("fileNames", fileNames);

    	return "files";
    }

    @RequestMapping(value="/items")
    public String items(Model model,HttpSession session){

    	if(session.getAttribute("editItemId") != null && !session.getAttribute("editItemId").equals("")){
    //		Item item = this.itemService.getItemById(Integer.parseInt(session.getAttribute("editItemId").toString()));
    		model.addAttribute("editItem", "editItem");
    	//	model.addAttribute("item", item);
    		session.setAttribute("editItemId", "");
    	}

    //	List<Item> items = this.itemService.getItems();
    //	model.addAttribute("items", items);
    	return "items";
    }

    @RequestMapping(value="/editItem.{itemId}")
    public String editItem(@PathVariable int itemId,HttpSession session){
    	session.setAttribute("editItemId", itemId);
    	return "redirect:/items";
    }

    @RequestMapping(value="/editItemExecute.{itemId}")
    public String editItemExecute(@PathVariable int itemId ,@RequestParam Map<String, String> reqPar){
    	Item item = new Item();//this.itemService.getItemById(itemId);
    	item.setName(reqPar.get("name"));
    	item.setOwner(reqPar.get("owner"));
    	//item.setBuyTime(Cal);
    	item.setBuyTime(new Date(reqPar.get("date")));
    //	this.itemService.updateItem(item);

    	return "redirect:/items";
    }

    @RequestMapping(value="/deleteItem.{itemId}")
    public String deleteItem(@PathVariable int itemId){
    	fileManager.deleteFile(itemId);
    	return "redirect:/items";
    }



    @RequestMapping(value="/downloadFile.{fileName}" )
    @ResponseBody
    public void downloadFile(@PathVariable String fileName,HttpServletResponse response,  HttpServletRequest request){

    	fileManager.downloadFiles(fileName, response);

    }
//==============================


    @RequestMapping(value = "/get/{value}", method = RequestMethod.GET)
    public void get(HttpServletResponse response,@PathVariable String value){
          try {

              response.setContentType(ufile.type);
              response.setContentLength(ufile.length);
              FileCopyUtils.copy(ufile.bytes, response.getOutputStream());

          } catch (IOException e) {
              // TODO Auto-generated catch block
              e.printStackTrace();
          }
    }

     @RequestMapping(value = "/upload", method = RequestMethod.POST)
     public @ResponseBody String upload(MultipartHttpServletRequest request, HttpServletResponse response) {

       //0. notice, we have used MultipartHttpServletRequest

       //1. get the files from the request object
       Iterator<String> itr =  request.getFileNames();

       MultipartFile mpf = request.getFile(itr.next());
       System.out.println(mpf.getOriginalFilename() +" uploaded!");

       try {
                  //just temporary save file info into ufile
          ufile.length = mpf.getBytes().length;
          ufile.bytes= mpf.getBytes();
          ufile.type = mpf.getContentType();
          ufile.name = mpf.getOriginalFilename();
          response.setContentType(ufile.type);
          response.setContentLength(ufile.length);
          FileCopyUtils.copy(ufile.bytes, response.getOutputStream());

      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }

       //2. send it back to the client as <img> that calls get method
       //we are using getTimeInMillis to avoid server cached image

       return "<img src='http://localhost:8080/springmvc-angularjs/main/api/get/"+Calendar.getInstance().getTimeInMillis()+"' />";

    }




}