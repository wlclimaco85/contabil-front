package br.com.emmanuelneri.app.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.ResourceBundle;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;


public class PropertiesLoader {


    //Crio uma instancia da classe properties
    private static Properties prop = new Properties();

    @Autowired
    ServletContext servletContext;

    public ServletContext getServletContext() {
		return servletContext;
	}

	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}

	//Crio um método estático que pode ser acessado por outras classes da aplicação sem a necessidade de instanciar
    public static Properties propertiesLoader() {

    	System.out.println();


    	ClassLoader classLoader = PropertiesLoader.propertiesLoader().getClass().getClassLoader();
    	File file = new File(classLoader.getResource("files/test.xml").getFile());

   // 	File rootDir = new File( getServletContext().getRealPath("/WEB-INF/") );
    	try {
    		//InputStream is = getClass().getClassLoader().getResourceAsStream("arquivo.properties");

FileInputStream in = new FileInputStream("dados.properties");
		//	FileInputStream file = new FileInputStream(Thread.currentThread().getContextClassLoader().getResource("\\classes\\dados.properties").getPath());
			//System.out.println("/  -> " + new File("/").getCanonicalPath());
		//	ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
			//System.out.println(".. -> " +new FileInputStream("classes/dados.properties"));
			//System.out.println(".. -> " + file.toString());
		System.out.println(".. -> " + new File("..").getPath());
		System.out.println(".  -> " + new File(".").getCanonicalPath());
		System.out.println(".  -> " + new File("../webapps/springmvc-angularjs/WEB-INF/classes/dados.properties").getCanonicalPath());
    	} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        //Informo o caminho onde se encontra meu arquivo properties de forma dinâmica
        //Poderia fazer isso de forma estática passando o diretório completo mas obviamente isso não é muito interessante.
        String atualDir = new File(".").getAbsolutePath() + "\\WEB-INF\\classes\\dados.properties";
        try {   //Tento recuperar as informações do arquivo de propriedades

            //Apenas para testar imprimo o diretório atual do meu arquivo properties
            System.out.println(atualDir);
            //Crio uma instância de File passando o meu arquivo .properties via construtor
            File files = new File(atualDir);
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            FileInputStream fileInputStream = new FileInputStream(files);
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(fileInputStream);
            //Fecho o fileInputStream
            fileInputStream.close();
        } catch (Exception e) {
            //Trato possíveis exceções
        }
        return prop;
        //Retorno um objeto prop com o mapa correspondente ao meu arquivo properties
    }

}