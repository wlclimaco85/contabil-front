package br.com.emmanuelneri.app.model;

public class BuscaCep  {


    private Integer id;


    private String cep;


	public BuscaCep() {
		super();
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}


	@Override
	public String toString() {
		return "BuscaCep [getId()=" + getId() + ", getCep()=" + getCep() + ", toString()=" + super.toString() + "]";
	}


   
}
