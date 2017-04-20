package br.com.emmanuelneri.app.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;

import com.fincatto.nfe310.NFeConfig;
import com.fincatto.nfe310.classes.NFUnidadeFederativa;

//Exemplo de configuracao para acesso aos serviços da Sefaz.
public class NFeConfigTeste extends NFeConfig {

 private KeyStore keyStoreCertificado = null;
 private KeyStore keyStoreCadeia = null;
 private String cert;
 private String senha;
 private NFUnidadeFederativa estado;





 public NFeConfigTeste(String cert, String senha, NFUnidadeFederativa estado) {
	super();
	setCert(cert);
	setSenha(senha);
	setEstado(estado);
}

public String getCert() {
	return cert;
}

public void setCert(String cert) {
	this.cert = cert;
}

public String getSenha() {
	return senha;
}

public void setSenha(String senha) {
	this.senha = senha;
}

public NFUnidadeFederativa getEstado() {
	return estado;
}

public void setEstado(NFUnidadeFederativa estado) {
	this.estado = estado;
}

@Override
 public NFUnidadeFederativa getCUF() {
     return getEstado();
 }

 @Override
 public String getCertificadoSenha() {
     return getSenha();
 }

 @Override
 public String getCadeiaCertificadosSenha() {
     return "senha";
 }
//"C:\\QATEclipseWorkSpace\\contabil-front\\src\\main\\java\\br\\com\\emmanuelneri\\app\\controller\\laticinios.pfx"
 @Override
 public KeyStore getCertificadoKeyStore() throws KeyStoreException {
     if (this.keyStoreCertificado == null) {
         this.keyStoreCertificado = KeyStore.getInstance("PKCS12");
         try (InputStream certificadoStream = new FileInputStream(getCert())) {
             this.keyStoreCertificado.load(certificadoStream, this.getCertificadoSenha().toCharArray());
         } catch (CertificateException | NoSuchAlgorithmException | IOException e) {
             this.keyStoreCadeia = null;
             throw new KeyStoreException("Nao foi possibel montar o KeyStore com a cadeia de certificados", e);
         }
     }
     return this.keyStoreCertificado;
 }

 @Override
 public KeyStore getCadeiaCertificadosKeyStore() throws KeyStoreException {
     if (this.keyStoreCadeia == null) {
         this.keyStoreCadeia = KeyStore.getInstance("JKS");
         try (InputStream cadeia = new FileInputStream("C:\\QATEclipseWorkSpace\\contabil-front\\src\\main\\java\\br\\com\\emmanuelneri\\app\\controller\\homologacao.cacerts")) {
             this.keyStoreCadeia.load(cadeia, this.getCadeiaCertificadosSenha().toCharArray());
         } catch (CertificateException | NoSuchAlgorithmException | IOException e) {
             this.keyStoreCadeia = null;
             throw new KeyStoreException("Nao foi possibel montar o KeyStore com o certificado", e);
         }
     }
     return this.keyStoreCadeia;
 }
}
