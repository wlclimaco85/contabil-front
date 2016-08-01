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
import com.qat.samples.sysmgmt.cfop.model.request.CfopInquiryRequest;
import com.qat.samples.sysmgmt.cnae.model.Cnae;
import com.qat.samples.sysmgmt.cnae.model.request.CnaeInquiryRequest;
import com.qat.samples.sysmgmt.cnae.model.response.CnaeResponse;
import com.qat.samples.sysmgmt.fiscal.model.Regime;
import com.qat.samples.sysmgmt.fiscal.model.request.RegimeInquiryRequest;
import com.qat.samples.sysmgmt.fiscal.model.response.RegimeResponse;
import com.qat.samples.sysmgmt.produto.model.response.CfopResponse;

import br.com.emmanuelneri.app.model.ModelToken;

public class Objects {

	public static final String REST_SERVICE_URI = "http://localhost:8080/qat-sysmgmt-controller-rest/";

	

 
 public static Advogado insertAdvogado(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Advogado advogado = new Advogado();
         Date a = new Date();
         advogado.setId(id);
         advogado.setNome('nome_1');
         advogado.setNomePai('nomePai_2');
         advogado.setNomeMae('nomeMae_3');
         advogado.setNomeConjugue('nomeConjugue_4');
         advogado.setEstadoCivil(1005);
         advogado.setTipoPessoa(1006);
         advogado.setDatanasc(b.getTime());
         advogado.setFoto('foto_8');
         advogado.setPessoaTypeEnum(1009);
         advogado.setSexo(1010);
         advogado.setEnderecos(new ArrayList<Enderecos>());
         advogado.getEnderecos().add(insertEnderecos(id,TabelaEnum.ADVOGADO,action));
         advogado.setDocumentos(new ArrayList<Documentos>());
         advogado.getDocumentos().add(insertDocumentos(id,TabelaEnum.ADVOGADO,action));
         advogado.setEmails(new ArrayList<Emails>());
         advogado.getEmails().add(insertEmails(id,TabelaEnum.ADVOGADO,action));
         advogado.setTelefones(new ArrayList<Telefones>());
         advogado.getTelefones().add(insertTelefones(id,TabelaEnum.ADVOGADO,action));
         advogado.setBancos(new ArrayList<Bancos>());
         advogado.getBancos().add(insertBancos(id,TabelaEnum.ADVOGADO,action));
         advogado.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         advogado.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.ADVOGADO,action));
         advogado.setCondPagList(new ArrayList<CondPagList>());
         advogado.getCondPagList().add(insertCondPagList(id,TabelaEnum.ADVOGADO,action));
         advogado.setContatoList(new ArrayList<ContatoList>());
         advogado.getContatoList().add(insertContatoList(id,TabelaEnum.ADVOGADO,action));
         advogado.setTabelaEnum(tabela);
         advogado.setParentId(id);
         advogado.setEmprId(1);
         advogado.setModifyDateUTC(a.getTime());
         advogado.setCreateDateUTC(a.getTime());
         advogado.setCreateUser("system");
         advogado.setModifyUser("system");
         advogado.setProcessId(1);
         advogado.setModelAction(action);
 
 
         return advogado;
     }

 
 public static Cliente insertCliente(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cliente cliente = new Cliente();
         Date a = new Date();
         cliente.setId(id);
         cliente.setNome('nome_1');
         cliente.setNomePai('nomePai_2');
         cliente.setNomeMae('nomeMae_3');
         cliente.setNomeConjugue('nomeConjugue_4');
         cliente.setEstadoCivil(1005);
         cliente.setTipoPessoa(1006);
         cliente.setDatanasc(b.getTime());
         cliente.setFoto('foto_8');
         cliente.setPessoaTypeEnum(1009);
         cliente.setSexo(1010);
         cliente.setEnderecos(new ArrayList<Enderecos>());
         cliente.getEnderecos().add(insertEnderecos(id,TabelaEnum.CLIENTE,action));
         cliente.setDocumentos(new ArrayList<Documentos>());
         cliente.getDocumentos().add(insertDocumentos(id,TabelaEnum.CLIENTE,action));
         cliente.setEmails(new ArrayList<Emails>());
         cliente.getEmails().add(insertEmails(id,TabelaEnum.CLIENTE,action));
         cliente.setTelefones(new ArrayList<Telefones>());
         cliente.getTelefones().add(insertTelefones(id,TabelaEnum.CLIENTE,action));
         cliente.setBancos(new ArrayList<Bancos>());
         cliente.getBancos().add(insertBancos(id,TabelaEnum.CLIENTE,action));
         cliente.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         cliente.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.CLIENTE,action));
         cliente.setCondPagList(new ArrayList<CondPagList>());
         cliente.getCondPagList().add(insertCondPagList(id,TabelaEnum.CLIENTE,action));
         cliente.setContatoList(new ArrayList<ContatoList>());
         cliente.getContatoList().add(insertContatoList(id,TabelaEnum.CLIENTE,action));
         cliente.setTabelaEnum(tabela);
         cliente.setParentId(id);
         cliente.setEmprId(1);
         cliente.setModifyDateUTC(a.getTime());
         cliente.setCreateDateUTC(a.getTime());
         cliente.setCreateUser("system");
         cliente.setModifyUser("system");
         cliente.setProcessId(1);
         cliente.setModelAction(action);
 
         return cliente;
     }

 
 public static Fornecedor insertFornecedor(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Fornecedor fornecedor = new Fornecedor();
         Date a = new Date();
         fornecedor.setId(id);
         fornecedor.setNome('nome_1');
         fornecedor.setNomePai('nomePai_2');
         fornecedor.setNomeMae('nomeMae_3');
         fornecedor.setNomeConjugue('nomeConjugue_4');
         fornecedor.setEstadoCivil(1005);
         fornecedor.setTipoPessoa(1006);
         fornecedor.setDatanasc(b.getTime());
         fornecedor.setFoto('foto_8');
         fornecedor.setPessoaTypeEnum(1009);
         fornecedor.setSexo(1010);
         fornecedor.setEnderecos(new ArrayList<Enderecos>());
         fornecedor.getEnderecos().add(insertEnderecos(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setDocumentos(new ArrayList<Documentos>());
         fornecedor.getDocumentos().add(insertDocumentos(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setEmails(new ArrayList<Emails>());
         fornecedor.getEmails().add(insertEmails(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setTelefones(new ArrayList<Telefones>());
         fornecedor.getTelefones().add(insertTelefones(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setBancos(new ArrayList<Bancos>());
         fornecedor.getBancos().add(insertBancos(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         fornecedor.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setCondPagList(new ArrayList<CondPagList>());
         fornecedor.getCondPagList().add(insertCondPagList(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setContatoList(new ArrayList<ContatoList>());
         fornecedor.getContatoList().add(insertContatoList(id,TabelaEnum.FORNECEDOR,action));
         fornecedor.setTabelaEnum(tabela);
         fornecedor.setParentId(id);
         fornecedor.setEmprId(1);
         fornecedor.setModifyDateUTC(a.getTime());
         fornecedor.setCreateDateUTC(a.getTime());
         fornecedor.setCreateUser("system");
         fornecedor.setModifyUser("system");
         fornecedor.setProcessId(1);
         fornecedor.setModelAction(action);
 
         return fornecedor;
     }

 
 public static Transportador insertTransportador(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Transportador transportador = new Transportador();
         Date a = new Date();
         transportador.setId(id);
         transportador.setNome('nome_1');
         transportador.setNomePai('nomePai_2');
         transportador.setNomeMae('nomeMae_3');
         transportador.setNomeConjugue('nomeConjugue_4');
         transportador.setEstadoCivil(1005);
         transportador.setTipoPessoa(1006);
         transportador.setDatanasc(b.getTime());
         transportador.setFoto('foto_8');
         transportador.setPessoaTypeEnum(1009);
         transportador.setSexo(1010);
         transportador.setEnderecos(new ArrayList<Enderecos>());
         transportador.getEnderecos().add(insertEnderecos(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setDocumentos(new ArrayList<Documentos>());
         transportador.getDocumentos().add(insertDocumentos(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setEmails(new ArrayList<Emails>());
         transportador.getEmails().add(insertEmails(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setTelefones(new ArrayList<Telefones>());
         transportador.getTelefones().add(insertTelefones(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setBancos(new ArrayList<Bancos>());
         transportador.getBancos().add(insertBancos(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         transportador.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setCondPagList(new ArrayList<CondPagList>());
         transportador.getCondPagList().add(insertCondPagList(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setContatoList(new ArrayList<ContatoList>());
         transportador.getContatoList().add(insertContatoList(id,TabelaEnum.TRANSPORTADOR,action));
         transportador.setTabelaEnum(tabela);
         transportador.setParentId(id);
         transportador.setEmprId(1);
         transportador.setModifyDateUTC(a.getTime());
         transportador.setCreateDateUTC(a.getTime());
         transportador.setCreateUser("system");
         transportador.setModifyUser("system");
         transportador.setProcessId(1);
         transportador.setModelAction(action);
 
         return transportador;
     }

 
 public static Medico insertMedico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Medico medico = new Medico();
         Date a = new Date();
         medico.setId(id);
         medico.setNome('nome_1');
         medico.setNomePai('nomePai_2');
         medico.setNomeMae('nomeMae_3');
         medico.setNomeConjugue('nomeConjugue_4');
         medico.setEstadoCivil(1005);
         medico.setTipoPessoa(1006);
         medico.setDatanasc(b.getTime());
         medico.setFoto('foto_8');
         medico.setPessoaTypeEnum(1009);
         medico.setSexo(1010);
         medico.setEnderecos(new ArrayList<Enderecos>());
         medico.getEnderecos().add(insertEnderecos(id,TabelaEnum.MEDICO,action));
         medico.setDocumentos(new ArrayList<Documentos>());
         medico.getDocumentos().add(insertDocumentos(id,TabelaEnum.MEDICO,action));
         medico.setEmails(new ArrayList<Emails>());
         medico.getEmails().add(insertEmails(id,TabelaEnum.MEDICO,action));
         medico.setTelefones(new ArrayList<Telefones>());
         medico.getTelefones().add(insertTelefones(id,TabelaEnum.MEDICO,action));
         medico.setBancos(new ArrayList<Bancos>());
         medico.getBancos().add(insertBancos(id,TabelaEnum.MEDICO,action));
         medico.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         medico.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.MEDICO,action));
         medico.setCondPagList(new ArrayList<CondPagList>());
         medico.getCondPagList().add(insertCondPagList(id,TabelaEnum.MEDICO,action));
         medico.setContatoList(new ArrayList<ContatoList>());
         medico.getContatoList().add(insertContatoList(id,TabelaEnum.MEDICO,action));
         medico.setTabelaEnum(tabela);
         medico.setParentId(id);
         medico.setEmprId(1);
         medico.setModifyDateUTC(a.getTime());
         medico.setCreateDateUTC(a.getTime());
         medico.setCreateUser("system");
         medico.setModifyUser("system");
         medico.setProcessId(1);
         medico.setModelAction(action);
 
         return medico;
     }

 
 public static Paciente insertPaciente(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Paciente paciente = new Paciente();
         Date a = new Date();
         paciente.setId(id);
         paciente.setNome('nome_1');
         paciente.setNomePai('nomePai_2');
         paciente.setNomeMae('nomeMae_3');
         paciente.setNomeConjugue('nomeConjugue_4');
         paciente.setEstadoCivil(1005);
         paciente.setTipoPessoa(1006);
         paciente.setDatanasc(b.getTime());
         paciente.setFoto('foto_8');
         paciente.setPessoaTypeEnum(1009);
         paciente.setSexo(1010);
         paciente.setEnderecos(new ArrayList<Enderecos>());
         paciente.getEnderecos().add(insertEnderecos(id,TabelaEnum.PACIENTE,action));
         paciente.setDocumentos(new ArrayList<Documentos>());
         paciente.getDocumentos().add(insertDocumentos(id,TabelaEnum.PACIENTE,action));
         paciente.setEmails(new ArrayList<Emails>());
         paciente.getEmails().add(insertEmails(id,TabelaEnum.PACIENTE,action));
         paciente.setTelefones(new ArrayList<Telefones>());
         paciente.getTelefones().add(insertTelefones(id,TabelaEnum.PACIENTE,action));
         paciente.setBancos(new ArrayList<Bancos>());
         paciente.getBancos().add(insertBancos(id,TabelaEnum.PACIENTE,action));
         paciente.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         paciente.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.PACIENTE,action));
         paciente.setCondPagList(new ArrayList<CondPagList>());
         paciente.getCondPagList().add(insertCondPagList(id,TabelaEnum.PACIENTE,action));
         paciente.setContatoList(new ArrayList<ContatoList>());
         paciente.getContatoList().add(insertContatoList(id,TabelaEnum.PACIENTE,action));
         paciente.setTabelaEnum(tabela);
         paciente.setParentId(id);
         paciente.setEmprId(1);
         paciente.setModifyDateUTC(a.getTime());
         paciente.setCreateDateUTC(a.getTime());
         paciente.setCreateUser("system");
         paciente.setModifyUser("system");
         paciente.setProcessId(1);
         paciente.setModelAction(action);
 
         return paciente;
     }

 
 public static Sindico insertSindico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Sindico sindico = new Sindico();
         Date a = new Date();
         sindico.setId(id);
         sindico.setNome('nome_1');
         sindico.setNomePai('nomePai_2');
         sindico.setNomeMae('nomeMae_3');
         sindico.setNomeConjugue('nomeConjugue_4');
         sindico.setEstadoCivil(1005);
         sindico.setTipoPessoa(1006);
         sindico.setDatanasc(b.getTime());
         sindico.setFoto('foto_8');
         sindico.setPessoaTypeEnum(1009);
         sindico.setSexo(1010);
         sindico.setEnderecos(new ArrayList<Enderecos>());
         sindico.getEnderecos().add(insertEnderecos(id,TabelaEnum.SINDICO,action));
         sindico.setDocumentos(new ArrayList<Documentos>());
         sindico.getDocumentos().add(insertDocumentos(id,TabelaEnum.SINDICO,action));
         sindico.setEmails(new ArrayList<Emails>());
         sindico.getEmails().add(insertEmails(id,TabelaEnum.SINDICO,action));
         sindico.setTelefones(new ArrayList<Telefones>());
         sindico.getTelefones().add(insertTelefones(id,TabelaEnum.SINDICO,action));
         sindico.setBancos(new ArrayList<Bancos>());
         sindico.getBancos().add(insertBancos(id,TabelaEnum.SINDICO,action));
         sindico.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         sindico.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.SINDICO,action));
         sindico.setCondPagList(new ArrayList<CondPagList>());
         sindico.getCondPagList().add(insertCondPagList(id,TabelaEnum.SINDICO,action));
         sindico.setContatoList(new ArrayList<ContatoList>());
         sindico.getContatoList().add(insertContatoList(id,TabelaEnum.SINDICO,action));
         sindico.setTabelaEnum(tabela);
         sindico.setParentId(id);
         sindico.setEmprId(1);
         sindico.setModifyDateUTC(a.getTime());
         sindico.setCreateDateUTC(a.getTime());
         sindico.setCreateUser("system");
         sindico.setModifyUser("system");
         sindico.setProcessId(1);
         sindico.setModelAction(action);
 
         return sindico;
     }

 
 public static Inquilino insertInquilino(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Inquilino inquilino = new Inquilino();
         Date a = new Date();
         inquilino.setId(id);
         inquilino.setNome('nome_1');
         inquilino.setNomePai('nomePai_2');
         inquilino.setNomeMae('nomeMae_3');
         inquilino.setNomeConjugue('nomeConjugue_4');
         inquilino.setEstadoCivil(1005);
         inquilino.setTipoPessoa(1006);
         inquilino.setDatanasc(b.getTime());
         inquilino.setFoto('foto_8');
         inquilino.setPessoaTypeEnum(1009);
         inquilino.setSexo(1010);
         inquilino.setEnderecos(new ArrayList<Enderecos>());
         inquilino.getEnderecos().add(insertEnderecos(id,TabelaEnum.INQUILINO,action));
         inquilino.setDocumentos(new ArrayList<Documentos>());
         inquilino.getDocumentos().add(insertDocumentos(id,TabelaEnum.INQUILINO,action));
         inquilino.setEmails(new ArrayList<Emails>());
         inquilino.getEmails().add(insertEmails(id,TabelaEnum.INQUILINO,action));
         inquilino.setTelefones(new ArrayList<Telefones>());
         inquilino.getTelefones().add(insertTelefones(id,TabelaEnum.INQUILINO,action));
         inquilino.setBancos(new ArrayList<Bancos>());
         inquilino.getBancos().add(insertBancos(id,TabelaEnum.INQUILINO,action));
         inquilino.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         inquilino.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.INQUILINO,action));
         inquilino.setCondPagList(new ArrayList<CondPagList>());
         inquilino.getCondPagList().add(insertCondPagList(id,TabelaEnum.INQUILINO,action));
         inquilino.setContatoList(new ArrayList<ContatoList>());
         inquilino.getContatoList().add(insertContatoList(id,TabelaEnum.INQUILINO,action));
         inquilino.setTabelaEnum(tabela);
         inquilino.setParentId(id);
         inquilino.setEmprId(1);
         inquilino.setModifyDateUTC(a.getTime());
         inquilino.setCreateDateUTC(a.getTime());
         inquilino.setCreateUser("system");
         inquilino.setModifyUser("system");
         inquilino.setProcessId(1);
         inquilino.setModelAction(action);
 
         return inquilino;
     }

 
 public static Funcionario insertFuncionario(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Funcionario funcionario = new Funcionario();
         Date a = new Date();
         funcionario.setId(id);
         funcionario.setNome('nome_1');
         funcionario.setNomePai('nomePai_2');
         funcionario.setNomeMae('nomeMae_3');
         funcionario.setNomeConjugue('nomeConjugue_4');
         funcionario.setEstadoCivil(1005);
         funcionario.setTipoPessoa(1006);
         funcionario.setDatanasc(b.getTime());
         funcionario.setFoto('foto_8');
         funcionario.setPessoaTypeEnum(1009);
         funcionario.setSexo(1010);
         funcionario.setEnderecos(new ArrayList<Enderecos>());
         funcionario.getEnderecos().add(insertEnderecos(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setDocumentos(new ArrayList<Documentos>());
         funcionario.getDocumentos().add(insertDocumentos(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setEmails(new ArrayList<Emails>());
         funcionario.getEmails().add(insertEmails(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setTelefones(new ArrayList<Telefones>());
         funcionario.getTelefones().add(insertTelefones(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setBancos(new ArrayList<Bancos>());
         funcionario.getBancos().add(insertBancos(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setFormaPagamentoList(new ArrayList<FormaPagamentoList>());
         funcionario.getFormaPagamentoList().add(insertFormaPagamentoList(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setCondPagList(new ArrayList<CondPagList>());
         funcionario.getCondPagList().add(insertCondPagList(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setContatoList(new ArrayList<ContatoList>());
         funcionario.getContatoList().add(insertContatoList(id,TabelaEnum.FUNCIONARIO,action));
         funcionario.setTabelaEnum(tabela);
         funcionario.setParentId(id);
         funcionario.setEmprId(1);
         funcionario.setModifyDateUTC(a.getTime());
         funcionario.setCreateDateUTC(a.getTime());
         funcionario.setCreateUser("system");
         funcionario.setModifyUser("system");
         funcionario.setProcessId(1);
         funcionario.setModelAction(action);
 
         return funcionario;
     }


}


 
 public static Audiencia insertAudiencia(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Audiencia audiencia = new Audiencia();
         Date a = new Date();
         audiencia.setId(id);
         audiencia.setDataAudiencia(1001);
         audiencia.setValor(10.00);
         audiencia.setDescricao('descricao_3');
         audiencia.setNoteLIst(new ArrayList<NoteLIst>());
         audiencia.getNoteLIst().add(insertNoteLIst(id,TabelaEnum.AUDIENCIA,action));
         audiencia.setTabelaEnum(tabela);
         audiencia.setParentId(id);
         audiencia.setEmprId(1);
         audiencia.setModifyDateUTC(a.getTime());
         audiencia.setCreateDateUTC(a.getTime());
         audiencia.setCreateUser("system");
         audiencia.setModifyUser("system");
         audiencia.setProcessId(1);
         audiencia.setModelAction(action);
 
         return audiencia;
     }

 
 public static Processo insertProcesso(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Processo processo = new Processo();
         Date a = new Date();
         processo.setId(id);
         processo.setDataProcess(1001);
         processo.setValor(10.00);
         processo.setAdvogadoList(new ArrayList<AdvogadoList>());
         processo.getAdvogadoList().add(insertAdvogadoList(id,TabelaEnum.PROCESSO,action));
         processo.setClienteList(new ArrayList<ClienteList>());
         processo.getClienteList().add(insertClienteList(id,TabelaEnum.PROCESSO,action));
         processo.setAudienciaList(new ArrayList<AudienciaList>());
         processo.getAudienciaList().add(insertAudienciaList(id,TabelaEnum.PROCESSO,action));
         processo.setTabelaEnum(tabela);
         processo.setParentId(id);
         processo.setEmprId(1);
         processo.setModifyDateUTC(a.getTime());
         processo.setCreateDateUTC(a.getTime());
         processo.setCreateUser("system");
         processo.setModifyUser("system");
         processo.setProcessId(1);
         processo.setModelAction(action);
 
         return processo;
     }


}


 
 public static Convenio insertConvenio(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Convenio convenio = new Convenio();
         Date a = new Date();
         convenio.setId(id);
         convenio.setTabelaEnum(tabela);
         convenio.setParentId(id);
         convenio.setEmprId(1);
         convenio.setModifyDateUTC(a.getTime());
         convenio.setCreateDateUTC(a.getTime());
         convenio.setCreateUser("system");
         convenio.setModifyUser("system");
         convenio.setProcessId(1);
         convenio.setModelAction(action);
 
         return convenio;
     }

 
 public static Cidade insertCidade(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cidade cidade = new Cidade();
         Date a = new Date();
         cidade.setId(id);
         cidade.setCodigo('codigo_1');
         cidade.setNome('nome_2');
         cidade.setCdIBGE('cdIBGE_3');
         cidade.setCep('cep_4');
         cidade.setMunicipio('municipio_5');
         cidade.setEstado(1006);
         cidade.setTabelaEnum(tabela);
         cidade.setParentId(id);
         cidade.setEmprId(1);
         cidade.setModifyDateUTC(a.getTime());
         cidade.setCreateDateUTC(a.getTime());
         cidade.setCreateUser("system");
         cidade.setModifyUser("system");
         cidade.setProcessId(1);
         cidade.setModelAction(action);
 
         return cidade;
     }

 
 public static Estado insertEstado(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Estado estado = new Estado();
         Date a = new Date();
         estado.setId(id);
         estado.setNome('nome_1');
         estado.setAbreviacao('abreviacao_2');
         estado.setTabelaEnum(tabela);
         estado.setParentId(id);
         estado.setEmprId(1);
         estado.setModifyDateUTC(a.getTime());
         estado.setCreateDateUTC(a.getTime());
         estado.setCreateUser("system");
         estado.setModifyUser("system");
         estado.setProcessId(1);
         estado.setModelAction(action);
 
         return estado;
     }

 
 public static Tarefa insertTarefa(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Tarefa tarefa = new Tarefa();
         Date a = new Date();
         tarefa.setId(id);
         tarefa.setNome('nome_1');
         tarefa.setDescricao('descricao_2');
         tarefa.setTabelaEnum(tabela);
         tarefa.setParentId(id);
         tarefa.setEmprId(1);
         tarefa.setModifyDateUTC(a.getTime());
         tarefa.setCreateDateUTC(a.getTime());
         tarefa.setCreateUser("system");
         tarefa.setModifyUser("system");
         tarefa.setProcessId(1);
         tarefa.setModelAction(action);
 
         return tarefa;
     }


}


 
 public static Consulta insertConsulta(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Consulta consulta = new Consulta();
         Date a = new Date();
         consulta.setId(id);
         consulta.setDataConsulta(b.getTime());
         consulta.setValor(10.00);
         consulta.setDataMarcacao(b.getTime());
         consulta.setMedico(1004);
         consulta.setPaciente(1005);
         consulta.setPlanoSaude(1006);
         consulta.setExameList(new ArrayList<ExameList>());
         consulta.getExameList().add(insertExameList(id,TabelaEnum.CONSULTA,action));
         consulta.setTabelaEnum(tabela);
         consulta.setParentId(id);
         consulta.setEmprId(1);
         consulta.setModifyDateUTC(a.getTime());
         consulta.setCreateDateUTC(a.getTime());
         consulta.setCreateUser("system");
         consulta.setModifyUser("system");
         consulta.setProcessId(1);
         consulta.setModelAction(action);
 
         return consulta;
     }

 
 public static Exame insertExame(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Exame exame = new Exame();
         Date a = new Date();
         exame.setId(id);
         exame.setTabelaEnum(tabela);
         exame.setParentId(id);
         exame.setEmprId(1);
         exame.setModifyDateUTC(a.getTime());
         exame.setCreateDateUTC(a.getTime());
         exame.setCreateUser("system");
         exame.setModifyUser("system");
         exame.setProcessId(1);
         exame.setModelAction(action);
 
         return exame;
     }


}


 
 public static NotaFiscalEntrada insertNotaFiscalEntrada(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         NotaFiscalEntrada notafiscalentrada = new NotaFiscalEntrada();
         Date a = new Date();
         notafiscalentrada.setId(id);
         notafiscalentrada.setTabelaEnum(tabela);
         notafiscalentrada.setParentId(id);
         notafiscalentrada.setEmprId(1);
         notafiscalentrada.setModifyDateUTC(a.getTime());
         notafiscalentrada.setCreateDateUTC(a.getTime());
         notafiscalentrada.setCreateUser("system");
         notafiscalentrada.setModifyUser("system");
         notafiscalentrada.setProcessId(1);
         notafiscalentrada.setModelAction(action);
 
         return notafiscalentrada;
     }

 
 public static PedidoCompras insertPedidoCompras(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         PedidoCompras pedidocompras = new PedidoCompras();
         Date a = new Date();
         pedidocompras.setId(id);
         pedidocompras.setTabelaEnum(tabela);
         pedidocompras.setParentId(id);
         pedidocompras.setEmprId(1);
         pedidocompras.setModifyDateUTC(a.getTime());
         pedidocompras.setCreateDateUTC(a.getTime());
         pedidocompras.setCreateUser("system");
         pedidocompras.setModifyUser("system");
         pedidocompras.setProcessId(1);
         pedidocompras.setModelAction(action);
 
         return pedidocompras;
     }

 
 public static Cotacao insertCotacao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cotacao cotacao = new Cotacao();
         Date a = new Date();
         cotacao.setId(id);
         cotacao.setTabelaEnum(tabela);
         cotacao.setParentId(id);
         cotacao.setEmprId(1);
         cotacao.setModifyDateUTC(a.getTime());
         cotacao.setCreateDateUTC(a.getTime());
         cotacao.setCreateUser("system");
         cotacao.setModifyUser("system");
         cotacao.setProcessId(1);
         cotacao.setModelAction(action);
 
         return cotacao;
     }


}


 
 public static Avisos insertAvisos(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Avisos avisos = new Avisos();
         Date a = new Date();
         avisos.setId(id);
         avisos.setTabelaEnum(tabela);
         avisos.setParentId(id);
         avisos.setEmprId(1);
         avisos.setModifyDateUTC(a.getTime());
         avisos.setCreateDateUTC(a.getTime());
         avisos.setCreateUser("system");
         avisos.setModifyUser("system");
         avisos.setProcessId(1);
         avisos.setModelAction(action);
 
         return avisos;
     }


}


 
 public static Eventos insertEventos(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Eventos eventos = new Eventos();
         Date a = new Date();
         eventos.setId(id);
         eventos.setTabelaEnum(tabela);
         eventos.setParentId(id);
         eventos.setEmprId(1);
         eventos.setModifyDateUTC(a.getTime());
         eventos.setCreateDateUTC(a.getTime());
         eventos.setCreateUser("system");
         eventos.setModifyUser("system");
         eventos.setProcessId(1);
         eventos.setModelAction(action);
 
         return eventos;
     }

 
 public static Beneficios insertBeneficios(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Beneficios beneficios = new Beneficios();
         Date a = new Date();
         beneficios.setId(id);
         beneficios.setTabelaEnum(tabela);
         beneficios.setParentId(id);
         beneficios.setEmprId(1);
         beneficios.setModifyDateUTC(a.getTime());
         beneficios.setCreateDateUTC(a.getTime());
         beneficios.setCreateUser("system");
         beneficios.setModifyUser("system");
         beneficios.setProcessId(1);
         beneficios.setModelAction(action);
 
         return beneficios;
     }

 
 public static HoraFunc insertHoraFunc(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         HoraFunc horafunc = new HoraFunc();
         Date a = new Date();
         horafunc.setId(id);
         horafunc.setTabelaEnum(tabela);
         horafunc.setParentId(id);
         horafunc.setEmprId(1);
         horafunc.setModifyDateUTC(a.getTime());
         horafunc.setCreateDateUTC(a.getTime());
         horafunc.setCreateUser("system");
         horafunc.setModifyUser("system");
         horafunc.setProcessId(1);
         horafunc.setModelAction(action);
 
         return horafunc;
     }


}


 
 public static Empresa insertEmpresa(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Empresa empresa = new Empresa();
         Date a = new Date();
         empresa.setId(id);
         empresa.setNome('nome_1');
         empresa.setEntidadeId(1002);
         empresa.setNumFunc(1003);
         empresa.setStatusInicial(1004);
         empresa.setEntidadeEnumValue(1005);
         empresa.setRegime(1006);
         empresa.setDocumentos(new ArrayList<Documentos>());
         empresa.getDocumentos().add(insertDocumentos(id,TabelaEnum.EMPRESA,action));
         empresa.setEnderecos(new ArrayList<Enderecos>());
         empresa.getEnderecos().add(insertEnderecos(id,TabelaEnum.EMPRESA,action));
         empresa.setEmails(new ArrayList<Emails>());
         empresa.getEmails().add(insertEmails(id,TabelaEnum.EMPRESA,action));
         empresa.setTelefones(new ArrayList<Telefones>());
         empresa.getTelefones().add(insertTelefones(id,TabelaEnum.EMPRESA,action));
         empresa.setCnaes(new ArrayList<Cnaes>());
         empresa.getCnaes().add(insertCnaes(id,TabelaEnum.EMPRESA,action));
         empresa.setStatusList(new ArrayList<StatusList>());
         empresa.getStatusList().add(insertStatusList(id,TabelaEnum.EMPRESA,action));
         empresa.setNotes(new ArrayList<Notes>());
         empresa.getNotes().add(insertNotes(id,TabelaEnum.EMPRESA,action));
         empresa.setTabelaEnum(tabela);
         empresa.setParentId(id);
         empresa.setEmprId(1);
         empresa.setModifyDateUTC(a.getTime());
         empresa.setCreateDateUTC(a.getTime());
         empresa.setCreateUser("system");
         empresa.setModifyUser("system");
         empresa.setProcessId(1);
         empresa.setModelAction(action);
 
         return empresa;
     }

 
 public static Filial insertFilial(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Filial filial = new Filial();
         Date a = new Date();
         filial.setId(id);
         filial.setNome('nome_1');
         filial.setEntidadeId(1002);
         filial.setNumFunc(1003);
         filial.setStatusInicial(1004);
         filial.setEntidadeEnumValue(1005);
         filial.setRegime(1006);
         filial.setDocumentos(new ArrayList<Documentos>());
         filial.getDocumentos().add(insertDocumentos(id,TabelaEnum.FILIAL,action));
         filial.setEnderecos(new ArrayList<Enderecos>());
         filial.getEnderecos().add(insertEnderecos(id,TabelaEnum.FILIAL,action));
         filial.setEmails(new ArrayList<Emails>());
         filial.getEmails().add(insertEmails(id,TabelaEnum.FILIAL,action));
         filial.setTelefones(new ArrayList<Telefones>());
         filial.getTelefones().add(insertTelefones(id,TabelaEnum.FILIAL,action));
         filial.setCnaes(new ArrayList<Cnaes>());
         filial.getCnaes().add(insertCnaes(id,TabelaEnum.FILIAL,action));
         filial.setStatusList(new ArrayList<StatusList>());
         filial.getStatusList().add(insertStatusList(id,TabelaEnum.FILIAL,action));
         filial.setNotes(new ArrayList<Notes>());
         filial.getNotes().add(insertNotes(id,TabelaEnum.FILIAL,action));
         filial.setTabelaEnum(tabela);
         filial.setParentId(id);
         filial.setEmprId(1);
         filial.setModifyDateUTC(a.getTime());
         filial.setCreateDateUTC(a.getTime());
         filial.setCreateUser("system");
         filial.setModifyUser("system");
         filial.setProcessId(1);
         filial.setModelAction(action);
 
         return filial;
     }

 
 public static Deposito insertDeposito(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Deposito deposito = new Deposito();
         Date a = new Date();
         deposito.setId(id);
         deposito.setNome('nome_1');
         deposito.setEntidadeId(1002);
         deposito.setNumFunc(1003);
         deposito.setStatusInicial(1004);
         deposito.setEntidadeEnumValue(1005);
         deposito.setRegime(1006);
         deposito.setDocumentos(new ArrayList<Documentos>());
         deposito.getDocumentos().add(insertDocumentos(id,TabelaEnum.DEPOSITO,action));
         deposito.setEnderecos(new ArrayList<Enderecos>());
         deposito.getEnderecos().add(insertEnderecos(id,TabelaEnum.DEPOSITO,action));
         deposito.setEmails(new ArrayList<Emails>());
         deposito.getEmails().add(insertEmails(id,TabelaEnum.DEPOSITO,action));
         deposito.setTelefones(new ArrayList<Telefones>());
         deposito.getTelefones().add(insertTelefones(id,TabelaEnum.DEPOSITO,action));
         deposito.setCnaes(new ArrayList<Cnaes>());
         deposito.getCnaes().add(insertCnaes(id,TabelaEnum.DEPOSITO,action));
         deposito.setStatusList(new ArrayList<StatusList>());
         deposito.getStatusList().add(insertStatusList(id,TabelaEnum.DEPOSITO,action));
         deposito.setNotes(new ArrayList<Notes>());
         deposito.getNotes().add(insertNotes(id,TabelaEnum.DEPOSITO,action));
         deposito.setTabelaEnum(tabela);
         deposito.setParentId(id);
         deposito.setEmprId(1);
         deposito.setModifyDateUTC(a.getTime());
         deposito.setCreateDateUTC(a.getTime());
         deposito.setCreateUser("system");
         deposito.setModifyUser("system");
         deposito.setProcessId(1);
         deposito.setModelAction(action);
 
         return deposito;
     }

 
 public static Usuario insertUsuario(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Usuario usuario = new Usuario();
         Date a = new Date();
         usuario.setId(id);
         usuario.setNome(1001);
         usuario.setCpf(1002);
         usuario.setEmail('email_3');
         usuario.setSenha('senha_4');
         usuario.setPergunta('pergunta_5');
         usuario.setRole('role_6');
         usuario.setLanguage(1007);
         usuario.setUltAcesso(b.getTime());
         usuario.setTabelaEnum(tabela);
         usuario.setParentId(id);
         usuario.setEmprId(1);
         usuario.setModifyDateUTC(a.getTime());
         usuario.setCreateDateUTC(a.getTime());
         usuario.setCreateUser("system");
         usuario.setModifyUser("system");
         usuario.setProcessId(1);
         usuario.setModelAction(action);
 
         return usuario;
     }

 
 public static Advocacia insertAdvocacia(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Advocacia advocacia = new Advocacia();
         Date a = new Date();
         advocacia.setId(id);
         advocacia.setNome('nome_1');
         advocacia.setEntidadeId(1002);
         advocacia.setNumFunc(1003);
         advocacia.setStatusInicial(1004);
         advocacia.setEntidadeEnumValue(1005);
         advocacia.setRegime(1006);
         advocacia.setDocumentos(new ArrayList<Documentos>());
         advocacia.getDocumentos().add(insertDocumentos(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setEnderecos(new ArrayList<Enderecos>());
         advocacia.getEnderecos().add(insertEnderecos(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setEmails(new ArrayList<Emails>());
         advocacia.getEmails().add(insertEmails(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setTelefones(new ArrayList<Telefones>());
         advocacia.getTelefones().add(insertTelefones(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setCnaes(new ArrayList<Cnaes>());
         advocacia.getCnaes().add(insertCnaes(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setStatusList(new ArrayList<StatusList>());
         advocacia.getStatusList().add(insertStatusList(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setNotes(new ArrayList<Notes>());
         advocacia.getNotes().add(insertNotes(id,TabelaEnum.ADVOCACIA,action));
         advocacia.setTabelaEnum(tabela);
         advocacia.setParentId(id);
         advocacia.setEmprId(1);
         advocacia.setModifyDateUTC(a.getTime());
         advocacia.setCreateDateUTC(a.getTime());
         advocacia.setCreateUser("system");
         advocacia.setModifyUser("system");
         advocacia.setProcessId(1);
         advocacia.setModelAction(action);
 
         return advocacia;
     }

 
 public static Clinica insertClinica(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Clinica clinica = new Clinica();
         Date a = new Date();
         clinica.setId(id);
         clinica.setNome('nome_1');
         clinica.setEntidadeId(1002);
         clinica.setNumFunc(1003);
         clinica.setStatusInicial(1004);
         clinica.setEntidadeEnumValue(1005);
         clinica.setRegime(1006);
         clinica.setDocumentos(new ArrayList<Documentos>());
         clinica.getDocumentos().add(insertDocumentos(id,TabelaEnum.CLINICA,action));
         clinica.setEnderecos(new ArrayList<Enderecos>());
         clinica.getEnderecos().add(insertEnderecos(id,TabelaEnum.CLINICA,action));
         clinica.setEmails(new ArrayList<Emails>());
         clinica.getEmails().add(insertEmails(id,TabelaEnum.CLINICA,action));
         clinica.setTelefones(new ArrayList<Telefones>());
         clinica.getTelefones().add(insertTelefones(id,TabelaEnum.CLINICA,action));
         clinica.setCnaes(new ArrayList<Cnaes>());
         clinica.getCnaes().add(insertCnaes(id,TabelaEnum.CLINICA,action));
         clinica.setStatusList(new ArrayList<StatusList>());
         clinica.getStatusList().add(insertStatusList(id,TabelaEnum.CLINICA,action));
         clinica.setNotes(new ArrayList<Notes>());
         clinica.getNotes().add(insertNotes(id,TabelaEnum.CLINICA,action));
         clinica.setTabelaEnum(tabela);
         clinica.setParentId(id);
         clinica.setEmprId(1);
         clinica.setModifyDateUTC(a.getTime());
         clinica.setCreateDateUTC(a.getTime());
         clinica.setCreateUser("system");
         clinica.setModifyUser("system");
         clinica.setProcessId(1);
         clinica.setModelAction(action);
 
         return clinica;
     }

 
 public static Condominio insertCondominio(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Condominio condominio = new Condominio();
         Date a = new Date();
         condominio.setId(id);
         condominio.setNome('nome_1');
         condominio.setEntidadeId(1002);
         condominio.setNumFunc(1003);
         condominio.setStatusInicial(1004);
         condominio.setEntidadeEnumValue(1005);
         condominio.setRegime(1006);
         condominio.setDocumentos(new ArrayList<Documentos>());
         condominio.getDocumentos().add(insertDocumentos(id,TabelaEnum.CONDOMINIO,action));
         condominio.setEnderecos(new ArrayList<Enderecos>());
         condominio.getEnderecos().add(insertEnderecos(id,TabelaEnum.CONDOMINIO,action));
         condominio.setEmails(new ArrayList<Emails>());
         condominio.getEmails().add(insertEmails(id,TabelaEnum.CONDOMINIO,action));
         condominio.setTelefones(new ArrayList<Telefones>());
         condominio.getTelefones().add(insertTelefones(id,TabelaEnum.CONDOMINIO,action));
         condominio.setCnaes(new ArrayList<Cnaes>());
         condominio.getCnaes().add(insertCnaes(id,TabelaEnum.CONDOMINIO,action));
         condominio.setStatusList(new ArrayList<StatusList>());
         condominio.getStatusList().add(insertStatusList(id,TabelaEnum.CONDOMINIO,action));
         condominio.setNotes(new ArrayList<Notes>());
         condominio.getNotes().add(insertNotes(id,TabelaEnum.CONDOMINIO,action));
         condominio.setTabelaEnum(tabela);
         condominio.setParentId(id);
         condominio.setEmprId(1);
         condominio.setModifyDateUTC(a.getTime());
         condominio.setCreateDateUTC(a.getTime());
         condominio.setCreateUser("system");
         condominio.setModifyUser("system");
         condominio.setProcessId(1);
         condominio.setModelAction(action);
 
         return condominio;
     }


}


 
 public static ContasPagar insertContasPagar(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ContasPagar contaspagar = new ContasPagar();
         Date a = new Date();
         contaspagar.setId(id);
         contaspagar.setNumero('numero_1');
         contaspagar.setDataEmissao(b.getTime());
         contaspagar.setDataVencimento(b.getTime());
         contaspagar.setDocId(1004);
         contaspagar.setValor(10.00);
         contaspagar.setObservacao('observacao_6');
         contaspagar.setFinanceiroEnumValue(1007);
         contaspagar.setListBaixa(new ArrayList<ListBaixa>());
         contaspagar.getListBaixa().add(insertListBaixa(id,TabelaEnum.CONTASPAGAR,action));
         contaspagar.setTabelaEnum(tabela);
         contaspagar.setParentId(id);
         contaspagar.setEmprId(1);
         contaspagar.setModifyDateUTC(a.getTime());
         contaspagar.setCreateDateUTC(a.getTime());
         contaspagar.setCreateUser("system");
         contaspagar.setModifyUser("system");
         contaspagar.setProcessId(1);
         contaspagar.setModelAction(action);
 
         return contaspagar;
     }

 
 public static Titulo insertTitulo(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Titulo titulo = new Titulo();
         Date a = new Date();
         titulo.setId(id);
         titulo.setNumero('numero_1');
         titulo.setDataEmissao(b.getTime());
         titulo.setDataVencimento(b.getTime());
         titulo.setDocId(1004);
         titulo.setValor(10.00);
         titulo.setObservacao('observacao_6');
         titulo.setFinanceiroEnumValue(1007);
         titulo.setListBaixa(new ArrayList<ListBaixa>());
         titulo.getListBaixa().add(insertListBaixa(id,TabelaEnum.TITULO,action));
         titulo.setTabelaEnum(tabela);
         titulo.setParentId(id);
         titulo.setEmprId(1);
         titulo.setModifyDateUTC(a.getTime());
         titulo.setCreateDateUTC(a.getTime());
         titulo.setCreateUser("system");
         titulo.setModifyUser("system");
         titulo.setProcessId(1);
         titulo.setModelAction(action);
 
         return titulo;
     }

 
 public static BaixaTitulo insertBaixaTitulo(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         BaixaTitulo baixatitulo = new BaixaTitulo();
         Date a = new Date();
         baixatitulo.setId(id);
         baixatitulo.setDataBaixa(b.getTime());
         baixatitulo.setObservacao('observacao_3');
         baixatitulo.setValor(10.00);
         baixatitulo.setJuros(10.00);
         baixatitulo.setMulta(10.00);
         baixatitulo.setDesconto(10.00);
         baixatitulo.setTipoBaixaList(new ArrayList<TipoBaixaList>());
         baixatitulo.getTipoBaixaList().add(insertTipoBaixaList(id,TabelaEnum.BAIXATITULO,action));
         baixatitulo.setTabelaEnum(tabela);
         baixatitulo.setParentId(id);
         baixatitulo.setEmprId(1);
         baixatitulo.setModifyDateUTC(a.getTime());
         baixatitulo.setCreateDateUTC(a.getTime());
         baixatitulo.setCreateUser("system");
         baixatitulo.setModifyUser("system");
         baixatitulo.setProcessId(1);
         baixatitulo.setModelAction(action);
 
         return baixatitulo;
     }

 
 public static TipoBaixa insertTipoBaixa(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         TipoBaixa tipobaixa = new TipoBaixa();
         Date a = new Date();
         tipobaixa.setId(id);
         tipobaixa.setNome('nome_1');
         tipobaixa.setDescricao(new ArrayList<Descricao>());
         tipobaixa.getDescricao().add(insertDescricao(id,TabelaEnum.TIPOBAIXA,action));
         tipobaixa.setTabelaEnum(tabela);
         tipobaixa.setParentId(id);
         tipobaixa.setEmprId(1);
         tipobaixa.setModifyDateUTC(a.getTime());
         tipobaixa.setCreateDateUTC(a.getTime());
         tipobaixa.setCreateUser("system");
         tipobaixa.setModifyUser("system");
         tipobaixa.setProcessId(1);
         tipobaixa.setModelAction(action);
 
         return tipobaixa;
     }

 
 public static ContasReceber insertContasReceber(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ContasReceber contasreceber = new ContasReceber();
         Date a = new Date();
         contasreceber.setId(id);
         contasreceber.setNumero('numero_1');
         contasreceber.setDataEmissao(b.getTime());
         contasreceber.setDataVencimento(b.getTime());
         contasreceber.setDocId(1004);
         contasreceber.setValor(10.00);
         contasreceber.setObservacao('observacao_6');
         contasreceber.setFinanceiroEnumValue(1007);
         contasreceber.setListBaixa(new ArrayList<ListBaixa>());
         contasreceber.getListBaixa().add(insertListBaixa(id,TabelaEnum.CONTASRECEBER,action));
         contasreceber.setTabelaEnum(tabela);
         contasreceber.setParentId(id);
         contasreceber.setEmprId(1);
         contasreceber.setModifyDateUTC(a.getTime());
         contasreceber.setCreateDateUTC(a.getTime());
         contasreceber.setCreateUser("system");
         contasreceber.setModifyUser("system");
         contasreceber.setProcessId(1);
         contasreceber.setModelAction(action);
 
         return contasreceber;
     }

 
 public static CondPag insertCondPag(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         CondPag condpag = new CondPag();
         Date a = new Date();
         condpag.setId(id);
         condpag.setNome('nome_1');
         condpag.setValorIni(10.00);
         condpag.setValorFin(10.00);
         condpag.setParcelas(1004);
         condpag.setListTipoPag(new ArrayList<ListTipoPag>());
         condpag.getListTipoPag().add(insertListTipoPag(id,TabelaEnum.CONDPAG,action));
         condpag.setTabelaEnum(tabela);
         condpag.setParentId(id);
         condpag.setEmprId(1);
         condpag.setModifyDateUTC(a.getTime());
         condpag.setCreateDateUTC(a.getTime());
         condpag.setCreateUser("system");
         condpag.setModifyUser("system");
         condpag.setProcessId(1);
         condpag.setModelAction(action);
 
         return condpag;
     }

 
 public static FormaPg insertFormaPg(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         FormaPg formapg = new FormaPg();
         Date a = new Date();
         formapg.setId(id);
         formapg.setDescricao('descricao_1');
         formapg.setDiasPg(1002);
         formapg.setEntrada(1003);
         formapg.setTabelaEnum(tabela);
         formapg.setParentId(id);
         formapg.setEmprId(1);
         formapg.setModifyDateUTC(a.getTime());
         formapg.setCreateDateUTC(a.getTime());
         formapg.setCreateUser("system");
         formapg.setModifyUser("system");
         formapg.setProcessId(1);
         formapg.setModelAction(action);
 
         return formapg;
     }

 
 public static Banco insertBanco(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Banco banco = new Banco();
         Date a = new Date();
         banco.setId(id);
         banco.setNome('nome_1');
         banco.setTabelaEnum(tabela);
         banco.setParentId(id);
         banco.setEmprId(1);
         banco.setModifyDateUTC(a.getTime());
         banco.setCreateDateUTC(a.getTime());
         banco.setCreateUser("system");
         banco.setModifyUser("system");
         banco.setProcessId(1);
         banco.setModelAction(action);
 
         return banco;
     }

 
 public static ContaCorrente insertContaCorrente(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ContaCorrente contacorrente = new ContaCorrente();
         Date a = new Date();
         contacorrente.setId(id);
         contacorrente.setAgencia(1001);
         contacorrente.setSaldo(10.00);
         contacorrente.setNumeroConta('numeroConta_3');
         contacorrente.setNossoNumero('nossoNumero_4');
         contacorrente.setHistoricoList(new ArrayList<HistoricoList>());
         contacorrente.getHistoricoList().add(insertHistoricoList(id,TabelaEnum.CONTACORRENTE,action));
         contacorrente.setTabelaEnum(tabela);
         contacorrente.setParentId(id);
         contacorrente.setEmprId(1);
         contacorrente.setModifyDateUTC(a.getTime());
         contacorrente.setCreateDateUTC(a.getTime());
         contacorrente.setCreateUser("system");
         contacorrente.setModifyUser("system");
         contacorrente.setProcessId(1);
         contacorrente.setModelAction(action);
 
         return contacorrente;
     }

 
 public static Caixa insertCaixa(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Caixa caixa = new Caixa();
         Date a = new Date();
         caixa.setId(id);
         caixa.setSaldo(10.00);
         caixa.setBaixaTituloList(new ArrayList<BaixaTituloList>());
         caixa.getBaixaTituloList().add(insertBaixaTituloList(id,TabelaEnum.CAIXA,action));
         caixa.setTabelaEnum(tabela);
         caixa.setParentId(id);
         caixa.setEmprId(1);
         caixa.setModifyDateUTC(a.getTime());
         caixa.setCreateDateUTC(a.getTime());
         caixa.setCreateUser("system");
         caixa.setModifyUser("system");
         caixa.setProcessId(1);
         caixa.setModelAction(action);
 
         return caixa;
     }


}


 
 public static Regime insertRegime(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Regime regime = new Regime();
         Date a = new Date();
         regime.setId(id);
         regime.setNome('nome_1');
         regime.setDescricao('descricao_2');
         regime.setTabelaEnum(tabela);
         regime.setParentId(id);
         regime.setEmprId(1);
         regime.setModifyDateUTC(a.getTime());
         regime.setCreateDateUTC(a.getTime());
         regime.setCreateUser("system");
         regime.setModifyUser("system");
         regime.setProcessId(1);
         regime.setModelAction(action);
 
         return regime;
     }

 
 public static Cfop insertCfop(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cfop cfop = new Cfop();
         Date a = new Date();
         cfop.setId(id);
         cfop.setCfop('cfop_1');
         cfop.setNatureza('natureza_2');
         cfop.setSimplificado('simplificado_3');
         cfop.setCfopTypeEnum(1004);
         cfop.setIcms(10.00);
         cfop.setIcmsReduzido(10.00);
         cfop.setMargemAgregadaST(10.00);
         cfop.setCstPrincipal(10.00);
         cfop.setClassFiscal(10.00);
         cfop.setObservacao('observacao_10');
         cfop.setTabelaEnum(tabela);
         cfop.setParentId(id);
         cfop.setEmprId(1);
         cfop.setModifyDateUTC(a.getTime());
         cfop.setCreateDateUTC(a.getTime());
         cfop.setCreateUser("system");
         cfop.setModifyUser("system");
         cfop.setProcessId(1);
         cfop.setModelAction(action);
 
         return cfop;
     }

 
 public static Cnae insertCnae(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cnae cnae = new Cnae();
         Date a = new Date();
         cnae.setId(id);
         cnae.setCodigo('codigo_1');
         cnae.setCnae('cnae_2');
         cnae.setDescricao('descricao_3');
         cnae.setAbreviado('abreviado_4');
         cnae.setTabelaEnum(tabela);
         cnae.setParentId(id);
         cnae.setEmprId(1);
         cnae.setModifyDateUTC(a.getTime());
         cnae.setCreateDateUTC(a.getTime());
         cnae.setCreateUser("system");
         cnae.setModifyUser("system");
         cnae.setProcessId(1);
         cnae.setModelAction(action);
 
         return cnae;
     }

 
 public static CnaeEmpresa insertCnaeEmpresa(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         CnaeEmpresa cnaeempresa = new CnaeEmpresa();
         Date a = new Date();
         cnaeempresa.setId(id);
         cnaeempresa.setIdCnae(1001);
         cnaeempresa.setTabelaEnum(tabela);
         cnaeempresa.setParentId(id);
         cnaeempresa.setEmprId(1);
         cnaeempresa.setModifyDateUTC(a.getTime());
         cnaeempresa.setCreateDateUTC(a.getTime());
         cnaeempresa.setCreateUser("system");
         cnaeempresa.setModifyUser("system");
         cnaeempresa.setProcessId(1);
         cnaeempresa.setModelAction(action);
 
         return cnaeempresa;
     }


}


 
 public static ProdutoParent insertProdutoParent(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ProdutoParent produtoparent = new ProdutoParent();
         Date a = new Date();
         produtoparent.setId(id);
         produtoparent.setTributacao(1001);
         produtoparent.setEstoqueList(new ArrayList<EstoqueList>());
         produtoparent.getEstoqueList().add(insertEstoqueList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setPrecoList(new ArrayList<PrecoList>());
         produtoparent.getPrecoList().add(insertPrecoList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setCustoList(new ArrayList<CustoList>());
         produtoparent.getCustoList().add(insertCustoList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setPorcaoList(new ArrayList<PorcaoList>());
         produtoparent.getPorcaoList().add(insertPorcaoList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setRentabilidadeList(new ArrayList<RentabilidadeList>());
         produtoparent.getRentabilidadeList().add(insertRentabilidadeList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setCfopList(new ArrayList<CfopList>());
         produtoparent.getCfopList().add(insertCfopList(id,TabelaEnum.PRODUTOPARENT,action));
         produtoparent.setDataValidade(b.getTime());
         produtoparent.setLocalizacao('localizacao_9');
         produtoparent.setComissao('comissao_10');
         produtoparent.setTabelaEnum(tabela);
         produtoparent.setParentId(id);
         produtoparent.setEmprId(1);
         produtoparent.setModifyDateUTC(a.getTime());
         produtoparent.setCreateDateUTC(a.getTime());
         produtoparent.setCreateUser("system");
         produtoparent.setModifyUser("system");
         produtoparent.setProcessId(1);
         produtoparent.setModelAction(action);
 
         return produtoparent;
     }

 
 public static Produto insertProduto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Produto produto = new Produto();
         Date a = new Date();
         produto.setId(id);
         produto.setCodigo('codigo_1');
         produto.setCdBarras('cdBarras_2');
         produto.setProduto('produto_3');
         produto.setDataCreate(b.getTime());
         produto.setAplicacao('aplicacao_5');
         produto.setFracao('fracao_6');
         produto.setClassificacao(1007);
         produto.setUniMed(1008);
         produto.setGrupo(1009);
         produto.setSubGrupo(1010);
         produto.setMarca(new ArrayList<Marca>());
         produto.getMarca().add(insertMarca(id,TabelaEnum.PRODUTO,action));
         produto.setPorcao(10.00);
         produto.setPesoBruto(10.00);
         produto.setPesoLiquido(10.00);
         produto.setModoUso('modoUso_15');
         produto.setTabelaEnum(tabela);
         produto.setParentId(id);
         produto.setEmprId(1);
         produto.setModifyDateUTC(a.getTime());
         produto.setCreateDateUTC(a.getTime());
         produto.setCreateUser("system");
         produto.setModifyUser("system");
         produto.setProcessId(1);
         produto.setModelAction(action);
 
         return produto;
     }

 
 public static Cfop insertCfop(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Cfop cfop = new Cfop();
         Date a = new Date();
         cfop.setId(id);
         cfop.setCfop('cfop_1');
         cfop.setNatureza('natureza_2');
         cfop.setSimplificado('simplificado_3');
         cfop.setCfopTypeEnum(1004);
         cfop.setIcms(10.00);
         cfop.setIcmsReduzido(10.00);
         cfop.setMargemAgregadaST(10.00);
         cfop.setCstPrincipal(10.00);
         cfop.setClassFiscal(10.00);
         cfop.setObservacao('observacao_10');
         cfop.setTabelaEnum(tabela);
         cfop.setParentId(id);
         cfop.setEmprId(1);
         cfop.setModifyDateUTC(a.getTime());
         cfop.setCreateDateUTC(a.getTime());
         cfop.setCreateUser("system");
         cfop.setModifyUser("system");
         cfop.setProcessId(1);
         cfop.setModelAction(action);
 
         return cfop;
     }

 
 public static Marca insertMarca(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Marca marca = new Marca();
         Date a = new Date();
         marca.setId(id);
         marca.setMarca('marca_1');
         marca.setFabricante('fabricante_2');
         marca.setEmailList(new ArrayList<EmailList>());
         marca.getEmailList().add(insertEmailList(id,TabelaEnum.MARCA,action));
         marca.setEnderecoList(new ArrayList<EnderecoList>());
         marca.getEnderecoList().add(insertEnderecoList(id,TabelaEnum.MARCA,action));
         marca.setTelefoneList(new ArrayList<TelefoneList>());
         marca.getTelefoneList().add(insertTelefoneList(id,TabelaEnum.MARCA,action));
         marca.setTabelaEnum(tabela);
         marca.setParentId(id);
         marca.setEmprId(1);
         marca.setModifyDateUTC(a.getTime());
         marca.setCreateDateUTC(a.getTime());
         marca.setCreateUser("system");
         marca.setModifyUser("system");
         marca.setProcessId(1);
         marca.setModelAction(action);
 
         return marca;
     }

 
 public static MarcaProduto insertMarcaProduto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         MarcaProduto marcaproduto = new MarcaProduto();
         Date a = new Date();
         marcaproduto.setId(id);
         marcaproduto.setMarcaId(1001);
         marcaproduto.setTabelaEnum(tabela);
         marcaproduto.setParentId(id);
         marcaproduto.setEmprId(1);
         marcaproduto.setModifyDateUTC(a.getTime());
         marcaproduto.setCreateDateUTC(a.getTime());
         marcaproduto.setCreateUser("system");
         marcaproduto.setModifyUser("system");
         marcaproduto.setProcessId(1);
         marcaproduto.setModelAction(action);
 
         return marcaproduto;
     }

 
 public static Grupo insertGrupo(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Grupo grupo = new Grupo();
         Date a = new Date();
         grupo.setId(id);
         grupo.setGrupo('grupo_1');
         grupo.setDescricao('descricao_2');
         grupo.setSubGrupo(1003);
         grupo.setTabelaEnum(tabela);
         grupo.setParentId(id);
         grupo.setEmprId(1);
         grupo.setModifyDateUTC(a.getTime());
         grupo.setCreateDateUTC(a.getTime());
         grupo.setCreateUser("system");
         grupo.setModifyUser("system");
         grupo.setProcessId(1);
         grupo.setModelAction(action);
 
         return grupo;
     }

 
 public static SubGrupo insertSubGrupo(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         SubGrupo subgrupo = new SubGrupo();
         Date a = new Date();
         subgrupo.setId(id);
         subgrupo.setSubGrupo('subGrupo_1');
         subgrupo.setDescricao('descricao_2');
         subgrupo.setTabelaEnum(tabela);
         subgrupo.setParentId(id);
         subgrupo.setEmprId(1);
         subgrupo.setModifyDateUTC(a.getTime());
         subgrupo.setCreateDateUTC(a.getTime());
         subgrupo.setCreateUser("system");
         subgrupo.setModifyUser("system");
         subgrupo.setProcessId(1);
         subgrupo.setModelAction(action);
 
         return subgrupo;
     }

 
 public static UniMed insertUniMed(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         UniMed unimed = new UniMed();
         Date a = new Date();
         unimed.setId(id);
         unimed.setUnimed('unimed_1');
         unimed.setSigla('sigla_2');
         unimed.setTabelaEnum(tabela);
         unimed.setParentId(id);
         unimed.setEmprId(1);
         unimed.setModifyDateUTC(a.getTime());
         unimed.setCreateDateUTC(a.getTime());
         unimed.setCreateUser("system");
         unimed.setModifyUser("system");
         unimed.setProcessId(1);
         unimed.setModelAction(action);
 
         return unimed;
     }

 
 public static Tributacao insertTributacao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Tributacao tributacao = new Tributacao();
         Date a = new Date();
         tributacao.setId(id);
         tributacao.setCstId(1001);
         tributacao.setIcms(10.00);
         tributacao.setSt(10.00);
         tributacao.setMva(10.00);
         tributacao.setCsosnId(1005);
         tributacao.setIpi(10.00);
         tributacao.setIat(10.00);
         tributacao.setIppt(10.00);
         tributacao.setIncidencia(1009);
         tributacao.setTabelaEnum(tabela);
         tributacao.setParentId(id);
         tributacao.setEmprId(1);
         tributacao.setModifyDateUTC(a.getTime());
         tributacao.setCreateDateUTC(a.getTime());
         tributacao.setCreateUser("system");
         tributacao.setModifyUser("system");
         tributacao.setProcessId(1);
         tributacao.setModelAction(action);
 
         return tributacao;
     }

 
 public static Custo insertCusto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Custo custo = new Custo();
         Date a = new Date();
         custo.setId(id);
         custo.setValor(10.00);
         custo.setCusto(new ArrayList<Custo>());
         custo.getCusto().add(insertCusto(id,TabelaEnum.CUSTO,action));
         custo.setTabelaEnum(tabela);
         custo.setParentId(id);
         custo.setEmprId(1);
         custo.setModifyDateUTC(a.getTime());
         custo.setCreateDateUTC(a.getTime());
         custo.setCreateUser("system");
         custo.setModifyUser("system");
         custo.setProcessId(1);
         custo.setModelAction(action);
 
         return custo;
     }

 
 public static CustoItens insertCustoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         CustoItens custoitens = new CustoItens();
         Date a = new Date();
         custoitens.setId(id);
         custoitens.setCusto(1001);
         custoitens.setCustoDesp(1002);
         custoitens.setTabelaEnum(tabela);
         custoitens.setParentId(id);
         custoitens.setEmprId(1);
         custoitens.setModifyDateUTC(a.getTime());
         custoitens.setCreateDateUTC(a.getTime());
         custoitens.setCreateUser("system");
         custoitens.setModifyUser("system");
         custoitens.setProcessId(1);
         custoitens.setModelAction(action);
 
         return custoitens;
     }

 
 public static Estoque insertEstoque(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Estoque estoque = new Estoque();
         Date a = new Date();
         estoque.setId(id);
         estoque.setEstoqueTypeEnum(1001);
         estoque.setUltimoMov(b.getTime());
         estoque.setQuant(10.00);
         estoque.setTabelaEnum(tabela);
         estoque.setParentId(id);
         estoque.setEmprId(1);
         estoque.setModifyDateUTC(a.getTime());
         estoque.setCreateDateUTC(a.getTime());
         estoque.setCreateUser("system");
         estoque.setModifyUser("system");
         estoque.setProcessId(1);
         estoque.setModelAction(action);
 
         return estoque;
     }

 
 public static Porcao insertPorcao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Porcao porcao = new Porcao();
         Date a = new Date();
         porcao.setId(id);
         porcao.setValor(10.00);
         porcao.setPorcaoItens(new ArrayList<PorcaoItens>());
         porcao.getPorcaoItens().add(insertPorcaoItens(id,TabelaEnum.PORCAO,action));
         porcao.setTabelaEnum(tabela);
         porcao.setParentId(id);
         porcao.setEmprId(1);
         porcao.setModifyDateUTC(a.getTime());
         porcao.setCreateDateUTC(a.getTime());
         porcao.setCreateUser("system");
         porcao.setModifyUser("system");
         porcao.setProcessId(1);
         porcao.setModelAction(action);
 
         return porcao;
     }

 
 public static PorcaoItens insertPorcaoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         PorcaoItens porcaoitens = new PorcaoItens();
         Date a = new Date();
         porcaoitens.setId(id);
         porcaoitens.setPorcao(10.00);
         porcaoitens.setVd(10.00);
         porcaoitens.setUnimed(1003);
         porcaoitens.setNome('nome_4');
         porcaoitens.setTabelaEnum(tabela);
         porcaoitens.setParentId(id);
         porcaoitens.setEmprId(1);
         porcaoitens.setModifyDateUTC(a.getTime());
         porcaoitens.setCreateDateUTC(a.getTime());
         porcaoitens.setCreateUser("system");
         porcaoitens.setModifyUser("system");
         porcaoitens.setProcessId(1);
         porcaoitens.setModelAction(action);
 
         return porcaoitens;
     }

 
 public static Rentabilidade insertRentabilidade(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Rentabilidade rentabilidade = new Rentabilidade();
         Date a = new Date();
         rentabilidade.setId(id);
         rentabilidade.setRentabilidadeList(new ArrayList<RentabilidadeList>());
         rentabilidade.getRentabilidadeList().add(insertRentabilidadeList(id,TabelaEnum.RENTABILIDADE,action));
         rentabilidade.setTabelaEnum(tabela);
         rentabilidade.setParentId(id);
         rentabilidade.setEmprId(1);
         rentabilidade.setModifyDateUTC(a.getTime());
         rentabilidade.setCreateDateUTC(a.getTime());
         rentabilidade.setCreateUser("system");
         rentabilidade.setModifyUser("system");
         rentabilidade.setProcessId(1);
         rentabilidade.setModelAction(action);
 
         return rentabilidade;
     }

 
 public static RentabilidadeItens insertRentabilidadeItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         RentabilidadeItens rentabilidadeitens = new RentabilidadeItens();
         Date a = new Date();
         rentabilidadeitens.setId(id);
         rentabilidadeitens.setProduto(1001);
         rentabilidadeitens.setValor(10.00);
         rentabilidadeitens.setRentabilidadeTypeEnum(1003);
         rentabilidadeitens.setTabelaEnum(tabela);
         rentabilidadeitens.setParentId(id);
         rentabilidadeitens.setEmprId(1);
         rentabilidadeitens.setModifyDateUTC(a.getTime());
         rentabilidadeitens.setCreateDateUTC(a.getTime());
         rentabilidadeitens.setCreateUser("system");
         rentabilidadeitens.setModifyUser("system");
         rentabilidadeitens.setProcessId(1);
         rentabilidadeitens.setModelAction(action);
 
         return rentabilidadeitens;
     }


}


 
 public static Servico insertServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Servico servico = new Servico();
         Date a = new Date();
         servico.setId(id);
         servico.setNome('nome_1');
         servico.setDescricao('descricao_2');
         servico.setPreco(new ArrayList<Preco>());
         servico.getPreco().add(insertPreco(id,TabelaEnum.SERVICO,action));
         servico.setTabelaEnum(tabela);
         servico.setParentId(id);
         servico.setEmprId(1);
         servico.setModifyDateUTC(a.getTime());
         servico.setCreateDateUTC(a.getTime());
         servico.setCreateUser("system");
         servico.setModifyUser("system");
         servico.setProcessId(1);
         servico.setModelAction(action);
 
         return servico;
     }

 
 public static PlanoByServico insertPlanoByServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         PlanoByServico planobyservico = new PlanoByServico();
         Date a = new Date();
         planobyservico.setId(id);
         planobyservico.setServico(1001);
         planobyservico.setTabelaEnum(tabela);
         planobyservico.setParentId(id);
         planobyservico.setEmprId(1);
         planobyservico.setModifyDateUTC(a.getTime());
         planobyservico.setCreateDateUTC(a.getTime());
         planobyservico.setCreateUser("system");
         planobyservico.setModifyUser("system");
         planobyservico.setProcessId(1);
         planobyservico.setModelAction(action);
 
         return planobyservico;
     }

 
 public static Site insertSite(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Site site = new Site();
         Date a = new Date();
         site.setId(id);
         site.setNome('nome_1');
         site.setUrl('url_2');
         site.setQuemSomos('quemSomos_3');
         site.setMissao('missao_4');
         site.setVisao('visao_5');
         site.setTitulo('titulo_6');
         site.setLogo('logo_7');
         site.setAtorization(true);
         site.setSiteTypeEnum(1009);
         site.setEmpresa(1010);
         site.setServicoList(new ArrayList<ServicoList>());
         site.getServicoList().add(insertServicoList(id,TabelaEnum.SITE,action));
         site.setPlanoList(new ArrayList<PlanoList>());
         site.getPlanoList().add(insertPlanoList(id,TabelaEnum.SITE,action));
         site.setTabelaEnum(tabela);
         site.setParentId(id);
         site.setEmprId(1);
         site.setModifyDateUTC(a.getTime());
         site.setCreateDateUTC(a.getTime());
         site.setCreateUser("system");
         site.setModifyUser("system");
         site.setProcessId(1);
         site.setModelAction(action);
 
         return site;
     }

 
 public static Contato insertContato(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Contato contato = new Contato();
         Date a = new Date();
         contato.setId(id);
         contato.setDataContato(b.getTime());
         contato.setNome('nome_2');
         contato.setMotivoValue(1003);
         contato.setContatoItensList(new ArrayList<ContatoItensList>());
         contato.getContatoItensList().add(insertContatoItensList(id,TabelaEnum.CONTATO,action));
         contato.setTabelaEnum(tabela);
         contato.setParentId(id);
         contato.setEmprId(1);
         contato.setModifyDateUTC(a.getTime());
         contato.setCreateDateUTC(a.getTime());
         contato.setCreateUser("system");
         contato.setModifyUser("system");
         contato.setProcessId(1);
         contato.setModelAction(action);
 
         return contato;
     }

 
 public static ContatoItens insertContatoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ContatoItens contatoitens = new ContatoItens();
         Date a = new Date();
         contatoitens.setId(id);
         contatoitens.setDataAlt(b.getTime());
         contatoitens.setTexto('texto_2');
         contatoitens.setTitulo('titulo_3');
         contatoitens.setContatoStatus(1004);
         contatoitens.setVisto(true);
         contatoitens.setTabelaEnum(tabela);
         contatoitens.setParentId(id);
         contatoitens.setEmprId(1);
         contatoitens.setModifyDateUTC(a.getTime());
         contatoitens.setCreateDateUTC(a.getTime());
         contatoitens.setCreateUser("system");
         contatoitens.setModifyUser("system");
         contatoitens.setProcessId(1);
         contatoitens.setModelAction(action);
 
         return contatoitens;
     }

 
 public static OrdemServico insertOrdemServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServico ordemservico = new OrdemServico();
         Date a = new Date();
         ordemservico.setId(id);
         ordemservico.setUserId('userId_1');
         ordemservico.setNome('nome_2');
         ordemservico.setData(b.getTime());
         ordemservico.setAssunto('assunto_4');
         ordemservico.setStatusValue(1005);
         ordemservico.setOrdemServicoItensList(new ArrayList<OrdemServicoItensList>());
         ordemservico.getOrdemServicoItensList().add(insertOrdemServicoItensList(id,TabelaEnum.ORDEMSERVICO,action));
         ordemservico.setTabelaEnum(tabela);
         ordemservico.setParentId(id);
         ordemservico.setEmprId(1);
         ordemservico.setModifyDateUTC(a.getTime());
         ordemservico.setCreateDateUTC(a.getTime());
         ordemservico.setCreateUser("system");
         ordemservico.setModifyUser("system");
         ordemservico.setProcessId(1);
         ordemservico.setModelAction(action);
 
         return ordemservico;
     }

 
 public static OrdemServicoItens insertOrdemServicoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServicoItens ordemservicoitens = new OrdemServicoItens();
         Date a = new Date();
         ordemservicoitens.setId(id);
         ordemservicoitens.setData(b.getTime());
         ordemservicoitens.setTexto('texto_2');
         ordemservicoitens.setTabelaEnum(tabela);
         ordemservicoitens.setParentId(id);
         ordemservicoitens.setEmprId(1);
         ordemservicoitens.setModifyDateUTC(a.getTime());
         ordemservicoitens.setCreateDateUTC(a.getTime());
         ordemservicoitens.setCreateUser("system");
         ordemservicoitens.setModifyUser("system");
         ordemservicoitens.setProcessId(1);
         ordemservicoitens.setModelAction(action);
 
         return ordemservicoitens;
     }

 
 public static Plano insertPlano(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Plano plano = new Plano();
         Date a = new Date();
         plano.setId(id);
         plano.setDataInicio(b.getTime());
         plano.setDataFinal(b.getTime());
         plano.setNumeroContrato(1003);
         plano.setDescricao('descricao_4');
         plano.setTitulo('titulo_5');
         plano.setCor('cor_6');
         plano.setPrecoList(new ArrayList<PrecoList>());
         plano.getPrecoList().add(insertPrecoList(id,TabelaEnum.PLANO,action));
         plano.setServicoList(new ArrayList<ServicoList>());
         plano.getServicoList().add(insertServicoList(id,TabelaEnum.PLANO,action));
         plano.setTabelaEnum(tabela);
         plano.setParentId(id);
         plano.setEmprId(1);
         plano.setModifyDateUTC(a.getTime());
         plano.setCreateDateUTC(a.getTime());
         plano.setCreateUser("system");
         plano.setModifyUser("system");
         plano.setProcessId(1);
         plano.setModelAction(action);
 
         return plano;
     }

 
 public static ServicoAndPlano insertServicoAndPlano(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ServicoAndPlano servicoandplano = new ServicoAndPlano();
         Date a = new Date();
         servicoandplano.setId(id);
         servicoandplano.setDataInicio(b.getTime());
         servicoandplano.setValor(10.00);
         servicoandplano.setServicoPlanoEnumValue(1003);
         servicoandplano.setServicoList(1004);
         servicoandplano.setPlanoList(1005);
         servicoandplano.setTabelaEnum(tabela);
         servicoandplano.setParentId(id);
         servicoandplano.setEmprId(1);
         servicoandplano.setModifyDateUTC(a.getTime());
         servicoandplano.setCreateDateUTC(a.getTime());
         servicoandplano.setCreateUser("system");
         servicoandplano.setModifyUser("system");
         servicoandplano.setProcessId(1);
         servicoandplano.setModelAction(action);
 
         return servicoandplano;
     }


}


 
 public static NotaFiscalSaida insertNotaFiscalSaida(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         NotaFiscalSaida notafiscalsaida = new NotaFiscalSaida();
         Date a = new Date();
         notafiscalsaida.setId(id);
         notafiscalsaida.setTabelaEnum(tabela);
         notafiscalsaida.setParentId(id);
         notafiscalsaida.setEmprId(1);
         notafiscalsaida.setModifyDateUTC(a.getTime());
         notafiscalsaida.setCreateDateUTC(a.getTime());
         notafiscalsaida.setCreateUser("system");
         notafiscalsaida.setModifyUser("system");
         notafiscalsaida.setProcessId(1);
         notafiscalsaida.setModelAction(action);
 
         return notafiscalsaida;
     }

 
 public static Orcamento insertOrcamento(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Orcamento orcamento = new Orcamento();
         Date a = new Date();
         orcamento.setId(id);
         orcamento.setTabelaEnum(tabela);
         orcamento.setParentId(id);
         orcamento.setEmprId(1);
         orcamento.setModifyDateUTC(a.getTime());
         orcamento.setCreateDateUTC(a.getTime());
         orcamento.setCreateUser("system");
         orcamento.setModifyUser("system");
         orcamento.setProcessId(1);
         orcamento.setModelAction(action);
 
         return orcamento;
     }

 
 public static OrdemServico insertOrdemServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServico ordemservico = new OrdemServico();
         Date a = new Date();
         ordemservico.setId(id);
         ordemservico.setUserId('userId_1');
         ordemservico.setNome('nome_2');
         ordemservico.setData(b.getTime());
         ordemservico.setAssunto('assunto_4');
         ordemservico.setStatusValue(1005);
         ordemservico.setOrdemServicoItensList(new ArrayList<OrdemServicoItensList>());
         ordemservico.getOrdemServicoItensList().add(insertOrdemServicoItensList(id,TabelaEnum.ORDEMSERVICO,action));
         ordemservico.setTabelaEnum(tabela);
         ordemservico.setParentId(id);
         ordemservico.setEmprId(1);
         ordemservico.setModifyDateUTC(a.getTime());
         ordemservico.setCreateDateUTC(a.getTime());
         ordemservico.setCreateUser("system");
         ordemservico.setModifyUser("system");
         ordemservico.setProcessId(1);
         ordemservico.setModelAction(action);
 
         return ordemservico;
     }


}


 
 public static Endereco insertEndereco(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Endereco endereco = new Endereco();
         Date a = new Date();
         endereco.setId(id);
         endereco.setCodIbge(1001);
         endereco.setLogradouro('logradouro_2');
         endereco.setBairro('bairro_3');
         endereco.setNumero('numero_4');
         endereco.setEnderecoTypeValue(1005);
         endereco.setCep('cep_6');
         endereco.setLatitude('latitude_7');
         endereco.setLongitude('longitude_8');
         endereco.setComplemento('complemento_9');
         endereco.setCidade(1010);
         endereco.setTabelaEnum(tabela);
         endereco.setParentId(id);
         endereco.setEmprId(1);
         endereco.setModifyDateUTC(a.getTime());
         endereco.setCreateDateUTC(a.getTime());
         endereco.setCreateUser("system");
         endereco.setModifyUser("system");
         endereco.setProcessId(1);
         endereco.setModelAction(action);
 
         return endereco;
     }


}


 
 public static Email insertEmail(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Email email = new Email();
         Date a = new Date();
         email.setId(id);
         email.setTypeValue(1001);
         email.setEmail('email_2');
         email.setEmailTypeEnumValue(1003);
         email.setTabelaEnum(tabela);
         email.setParentId(id);
         email.setEmprId(1);
         email.setModifyDateUTC(a.getTime());
         email.setCreateDateUTC(a.getTime());
         email.setCreateUser("system");
         email.setModifyUser("system");
         email.setProcessId(1);
         email.setModelAction(action);
 
         return email;
     }


}


 
 public static Telefone insertTelefone(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Telefone telefone = new Telefone();
         Date a = new Date();
         telefone.setId(id);
         telefone.setTypeValue(1001);
         telefone.setDdd('ddd_2');
         telefone.setNumero('numero_3');
         telefone.setTelefoneTypeEnumValue(1004);
         telefone.setTabelaEnum(tabela);
         telefone.setParentId(id);
         telefone.setEmprId(1);
         telefone.setModifyDateUTC(a.getTime());
         telefone.setCreateDateUTC(a.getTime());
         telefone.setCreateUser("system");
         telefone.setModifyUser("system");
         telefone.setProcessId(1);
         telefone.setModelAction(action);
 
         return telefone;
     }


}


 
 public static Arquivo insertArquivo(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Arquivo arquivo = new Arquivo();
         Date a = new Date();
         arquivo.setId(id);
         arquivo.setTabelaEnum(tabela);
         arquivo.setParentId(id);
         arquivo.setEmprId(1);
         arquivo.setModifyDateUTC(a.getTime());
         arquivo.setCreateDateUTC(a.getTime());
         arquivo.setCreateUser("system");
         arquivo.setModifyUser("system");
         arquivo.setProcessId(1);
         arquivo.setModelAction(action);
 
         return arquivo;
     }


}


 
 public static Classificacao insertClassificacao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Classificacao classificacao = new Classificacao();
         Date a = new Date();
         classificacao.setId(id);
         classificacao.setDescricao('descricao_1');
         classificacao.setCodigo('codigo_2');
         classificacao.setTabelaEnum(tabela);
         classificacao.setParentId(id);
         classificacao.setEmprId(1);
         classificacao.setModifyDateUTC(a.getTime());
         classificacao.setCreateDateUTC(a.getTime());
         classificacao.setCreateUser("system");
         classificacao.setModifyUser("system");
         classificacao.setProcessId(1);
         classificacao.setModelAction(action);
 
         return classificacao;
     }


}


 
 public static Documento insertDocumento(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Documento documento = new Documento();
         Date a = new Date();
         documento.setId(id);
         documento.setDocumentoTypeEnumValue(1001);
         documento.setNumero('numero_2');
         documento.setData(b.getTime());
         documento.setTabelaEnum(tabela);
         documento.setParentId(id);
         documento.setEmprId(1);
         documento.setModifyDateUTC(a.getTime());
         documento.setCreateDateUTC(a.getTime());
         documento.setCreateUser("system");
         documento.setModifyUser("system");
         documento.setProcessId(1);
         documento.setModelAction(action);
 
         return documento;
     }


}


 
 public static HistoricoUtil insertHistoricoUtil(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         HistoricoUtil historicoutil = new HistoricoUtil();
         Date a = new Date();
         historicoutil.setId(id);
         historicoutil.setDataMovimento(b.getTime());
         historicoutil.setHistoricoUtilType(1002);
         historicoutil.setQuantidade(1003);
         historicoutil.setTabelaEnumValue(1004);
         historicoutil.setTabelaEnum(tabela);
         historicoutil.setParentId(id);
         historicoutil.setEmprId(1);
         historicoutil.setModifyDateUTC(a.getTime());
         historicoutil.setCreateDateUTC(a.getTime());
         historicoutil.setCreateUser("system");
         historicoutil.setModifyUser("system");
         historicoutil.setProcessId(1);
         historicoutil.setModelAction(action);
 
         return historicoutil;
     }

 
 public static Historico insertHistorico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Historico historico = new Historico();
         Date a = new Date();
         historico.setId(id);
         historico.setData(b.getTime());
         historico.setUserId(1002);
         historico.setAcaoEnumValue(1003);
         historico.setTabelaEnum(tabela);
         historico.setParentId(id);
         historico.setEmprId(1);
         historico.setModifyDateUTC(a.getTime());
         historico.setCreateDateUTC(a.getTime());
         historico.setCreateUser("system");
         historico.setModifyUser("system");
         historico.setProcessId(1);
         historico.setModelAction(action);
 
         return historico;
     }

 
 public static HistoricoItens insertHistoricoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         HistoricoItens historicoitens = new HistoricoItens();
         Date a = new Date();
         historicoitens.setId(id);
         historicoitens.setAcaoEnumValue(1001);
         historicoitens.setTabelaEnum(tabela);
         historicoitens.setParentId(id);
         historicoitens.setEmprId(1);
         historicoitens.setModifyDateUTC(a.getTime());
         historicoitens.setCreateDateUTC(a.getTime());
         historicoitens.setCreateUser("system");
         historicoitens.setModifyUser("system");
         historicoitens.setProcessId(1);
         historicoitens.setModelAction(action);
 
         return historicoitens;
     }


}


 
 public static Notes insertNotes(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Notes notes = new Notes();
         Date a = new Date();
         notes.setId(id);
         notes.setNoteText('noteText_1');
         notes.setTabelaEnum(tabela);
         notes.setParentId(id);
         notes.setEmprId(1);
         notes.setModifyDateUTC(a.getTime());
         notes.setCreateDateUTC(a.getTime());
         notes.setCreateUser("system");
         notes.setModifyUser("system");
         notes.setProcessId(1);
         notes.setModelAction(action);
 
         return notes;
     }


}


 
 public static Socio insertSocio(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Socio socio = new Socio();
         Date a = new Date();
         socio.setId(id);
         socio.setNome('nome_1');
         socio.setCota(10.00);
         socio.setPorcentagem(10.00);
         socio.setTabelaEnum(tabela);
         socio.setParentId(id);
         socio.setEmprId(1);
         socio.setModifyDateUTC(a.getTime());
         socio.setCreateDateUTC(a.getTime());
         socio.setCreateUser("system");
         socio.setModifyUser("system");
         socio.setProcessId(1);
         socio.setModelAction(action);
 
         return socio;
     }


}


 
 public static OrdemServico insertOrdemServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServico ordemservico = new OrdemServico();
         Date a = new Date();
         ordemservico.setId(id);
         ordemservico.setUserId('userId_1');
         ordemservico.setNome('nome_2');
         ordemservico.setData(b.getTime());
         ordemservico.setAssunto('assunto_4');
         ordemservico.setStatusValue(1005);
         ordemservico.setOrdemServicoItensList(new ArrayList<OrdemServicoItensList>());
         ordemservico.getOrdemServicoItensList().add(insertOrdemServicoItensList(id,TabelaEnum.ORDEMSERVICO,action));
         ordemservico.setTabelaEnum(tabela);
         ordemservico.setParentId(id);
         ordemservico.setEmprId(1);
         ordemservico.setModifyDateUTC(a.getTime());
         ordemservico.setCreateDateUTC(a.getTime());
         ordemservico.setCreateUser("system");
         ordemservico.setModifyUser("system");
         ordemservico.setProcessId(1);
         ordemservico.setModelAction(action);
 
         return ordemservico;
     }

 
 public static OrdemServicoType insertOrdemServicoType(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServicoType ordemservicotype = new OrdemServicoType();
         Date a = new Date();
         ordemservicotype.setId(id);
         ordemservicotype.setTabelaEnum(tabela);
         ordemservicotype.setParentId(id);
         ordemservicotype.setEmprId(1);
         ordemservicotype.setModifyDateUTC(a.getTime());
         ordemservicotype.setCreateDateUTC(a.getTime());
         ordemservicotype.setCreateUser("system");
         ordemservicotype.setModifyUser("system");
         ordemservicotype.setProcessId(1);
         ordemservicotype.setModelAction(action);
 
         return ordemservicotype;
     }

 
 public static OrdemServicoStatus insertOrdemServicoStatus(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServicoStatus ordemservicostatus = new OrdemServicoStatus();
         Date a = new Date();
         ordemservicostatus.setId(id);
         ordemservicostatus.setNome(1001);
         ordemservicostatus.setCota(1002);
         ordemservicostatus.setPorcentagem(1003);
         ordemservicostatus.setTabelaEnum(tabela);
         ordemservicostatus.setParentId(id);
         ordemservicostatus.setEmprId(1);
         ordemservicostatus.setModifyDateUTC(a.getTime());
         ordemservicostatus.setCreateDateUTC(a.getTime());
         ordemservicostatus.setCreateUser("system");
         ordemservicostatus.setModifyUser("system");
         ordemservicostatus.setProcessId(1);
         ordemservicostatus.setModelAction(action);
 
         return ordemservicostatus;
     }

 
 public static OrdemServicoItens insertOrdemServicoItens(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         OrdemServicoItens ordemservicoitens = new OrdemServicoItens();
         Date a = new Date();
         ordemservicoitens.setId(id);
         ordemservicoitens.setData(b.getTime());
         ordemservicoitens.setTexto('texto_2');
         ordemservicoitens.setTabelaEnum(tabela);
         ordemservicoitens.setParentId(id);
         ordemservicoitens.setEmprId(1);
         ordemservicoitens.setModifyDateUTC(a.getTime());
         ordemservicoitens.setCreateDateUTC(a.getTime());
         ordemservicoitens.setCreateUser("system");
         ordemservicoitens.setModifyUser("system");
         ordemservicoitens.setProcessId(1);
         ordemservicoitens.setModelAction(action);
 
         return ordemservicoitens;
     }


}


 
 public static Status insertStatus(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Status status = new Status();
         Date a = new Date();
         status.setId(id);
         status.setDataStatus(b.getTime());
         status.setStatusValue(1002);
         status.setAcaoEnumValue(1003);
         status.setNote('note_4');
         status.setTabelaEnum(tabela);
         status.setParentId(id);
         status.setEmprId(1);
         status.setModifyDateUTC(a.getTime());
         status.setCreateDateUTC(a.getTime());
         status.setCreateUser("system");
         status.setModifyUser("system");
         status.setProcessId(1);
         status.setModelAction(action);
 
         return status;
     }


}


 
 public static Tributacao insertTributacao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Tributacao tributacao = new Tributacao();
         Date a = new Date();
         tributacao.setId(id);
         tributacao.setCstId(1001);
         tributacao.setIcms(10.00);
         tributacao.setSt(10.00);
         tributacao.setMva(10.00);
         tributacao.setCsosnId(1005);
         tributacao.setIpi(10.00);
         tributacao.setIat(10.00);
         tributacao.setIppt(10.00);
         tributacao.setIncidencia(1009);
         tributacao.setTabelaEnum(tabela);
         tributacao.setParentId(id);
         tributacao.setEmprId(1);
         tributacao.setModifyDateUTC(a.getTime());
         tributacao.setCreateDateUTC(a.getTime());
         tributacao.setCreateUser("system");
         tributacao.setModifyUser("system");
         tributacao.setProcessId(1);
         tributacao.setModelAction(action);
 
         return tributacao;
     }


}


 
 public static Agencia insertAgencia(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Agencia agencia = new Agencia();
         Date a = new Date();
         agencia.setId(id);
         agencia.setNome('nome_1');
         agencia.setGerente('gerente_2');
         agencia.setResponsavelConta('responsavelConta_3');
         agencia.setNumeroAgencia('numeroAgencia_4');
         agencia.setParentId(1005);
         agencia.setEnderecos(new ArrayList<Enderecos>());
         agencia.getEnderecos().add(insertEnderecos(id,TabelaEnum.AGENCIA,action));
         agencia.setEmails(new ArrayList<Emails>());
         agencia.getEmails().add(insertEmails(id,TabelaEnum.AGENCIA,action));
         agencia.setTelefones(new ArrayList<Telefones>());
         agencia.getTelefones().add(insertTelefones(id,TabelaEnum.AGENCIA,action));
         agencia.setContaList(new ArrayList<ContaList>());
         agencia.getContaList().add(insertContaList(id,TabelaEnum.AGENCIA,action));
         agencia.setTabelaEnum(tabela);
         agencia.setParentId(id);
         agencia.setEmprId(1);
         agencia.setModifyDateUTC(a.getTime());
         agencia.setCreateDateUTC(a.getTime());
         agencia.setCreateUser("system");
         agencia.setModifyUser("system");
         agencia.setProcessId(1);
         agencia.setModelAction(action);
 
         return agencia;
     }


}


 
 public static Profissao insertProfissao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Profissao profissao = new Profissao();
         Date a = new Date();
         profissao.setId(id);
         profissao.setTabelaEnum(tabela);
         profissao.setParentId(id);
         profissao.setEmprId(1);
         profissao.setModifyDateUTC(a.getTime());
         profissao.setCreateDateUTC(a.getTime());
         profissao.setCreateUser("system");
         profissao.setModifyUser("system");
         profissao.setProcessId(1);
         profissao.setModelAction(action);
 
         return profissao;
     }


}


 
 public static Salario insertSalario(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Salario salario = new Salario();
         Date a = new Date();
         salario.setId(id);
         salario.setTabelaEnum(tabela);
         salario.setParentId(id);
         salario.setEmprId(1);
         salario.setModifyDateUTC(a.getTime());
         salario.setCreateDateUTC(a.getTime());
         salario.setCreateUser("system");
         salario.setModifyUser("system");
         salario.setProcessId(1);
         salario.setModelAction(action);
 
         return salario;
     }


}


 
 public static Custo insertCusto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Custo custo = new Custo();
         Date a = new Date();
         custo.setId(id);
         custo.setValor(10.00);
         custo.setCusto(new ArrayList<Custo>());
         custo.getCusto().add(insertCusto(id,TabelaEnum.CUSTO,action));
         custo.setTabelaEnum(tabela);
         custo.setParentId(id);
         custo.setEmprId(1);
         custo.setModifyDateUTC(a.getTime());
         custo.setCreateDateUTC(a.getTime());
         custo.setCreateUser("system");
         custo.setModifyUser("system");
         custo.setProcessId(1);
         custo.setModelAction(action);
 
         return custo;
     }


}


 
 public static Estoque insertEstoque(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Estoque estoque = new Estoque();
         Date a = new Date();
         estoque.setId(id);
         estoque.setEstoqueTypeEnum(1001);
         estoque.setUltimoMov(b.getTime());
         estoque.setQuant(10.00);
         estoque.setTabelaEnum(tabela);
         estoque.setParentId(id);
         estoque.setEmprId(1);
         estoque.setModifyDateUTC(a.getTime());
         estoque.setCreateDateUTC(a.getTime());
         estoque.setCreateUser("system");
         estoque.setModifyUser("system");
         estoque.setProcessId(1);
         estoque.setModelAction(action);
 
         return estoque;
     }


}


 
 public static Porcao insertPorcao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Porcao porcao = new Porcao();
         Date a = new Date();
         porcao.setId(id);
         porcao.setValor(10.00);
         porcao.setPorcaoItens(new ArrayList<PorcaoItens>());
         porcao.getPorcaoItens().add(insertPorcaoItens(id,TabelaEnum.PORCAO,action));
         porcao.setTabelaEnum(tabela);
         porcao.setParentId(id);
         porcao.setEmprId(1);
         porcao.setModifyDateUTC(a.getTime());
         porcao.setCreateDateUTC(a.getTime());
         porcao.setCreateUser("system");
         porcao.setModifyUser("system");
         porcao.setProcessId(1);
         porcao.setModelAction(action);
 
         return porcao;
     }


}


 
 public static Preco insertPreco(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Preco preco = new Preco();
         Date a = new Date();
         preco.setId(id);
         preco.setDataMarcacao(b.getTime());
         preco.setPrecoTypeEnum(1002);
         preco.setValor(10.00);
         preco.setDataProInicial(b.getTime());
         preco.setDataProFinal(b.getTime());
         preco.setTabelaEnum(tabela);
         preco.setParentId(id);
         preco.setEmprId(1);
         preco.setModifyDateUTC(a.getTime());
         preco.setCreateDateUTC(a.getTime());
         preco.setCreateUser("system");
         preco.setModifyUser("system");
         preco.setProcessId(1);
         preco.setModelAction(action);
 
         return preco;
     }


}


 
 public static DoisValor insertDoisValor(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         DoisValor doisvalor = new DoisValor();
         Date a = new Date();
         doisvalor.setId(id);
         doisvalor.setNome('nome_1');
         doisvalor.setDescricao('descricao_2');
         doisvalor.setDoisValorType(1003);
         doisvalor.setTabelaEnum(tabela);
         doisvalor.setParentId(id);
         doisvalor.setEmprId(1);
         doisvalor.setModifyDateUTC(a.getTime());
         doisvalor.setCreateDateUTC(a.getTime());
         doisvalor.setCreateUser("system");
         doisvalor.setModifyUser("system");
         doisvalor.setProcessId(1);
         doisvalor.setModelAction(action);
 
         return doisvalor;
     }


}


 
 public static Configuracao insertConfiguracao(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Configuracao configuracao = new Configuracao();
         Date a = new Date();
         configuracao.setId(id);
         configuracao.setConfGeral(1001);
         configuracao.setConfNFe(1002);
         configuracao.setConfFiscal(1003);
         configuracao.setConfProd(1004);
         configuracao.setConfVendas(1005);
         configuracao.setConfCMTP(1006);
         configuracao.setConfEntrada(1007);
         configuracao.setConfCarne(1008);
         configuracao.setBoletoList(new ArrayList<BoletoList>());
         configuracao.getBoletoList().add(insertBoletoList(id,TabelaEnum.CONFIGURACAO,action));
         configuracao.setTabelaEnum(tabela);
         configuracao.setParentId(id);
         configuracao.setEmprId(1);
         configuracao.setModifyDateUTC(a.getTime());
         configuracao.setCreateDateUTC(a.getTime());
         configuracao.setCreateUser("system");
         configuracao.setModifyUser("system");
         configuracao.setProcessId(1);
         configuracao.setModelAction(action);
 
         return configuracao;
     }

 
 public static Boleto insertBoleto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Boleto boleto = new Boleto();
         Date a = new Date();
         boleto.setId(id);
         boleto.setAtivarBolOnLine(1001);
         boleto.setTipoBoleto(1002);
         boleto.setAgencia(1003);
         boleto.setCedente(1004);
         boleto.setJuros(10.00);
         boleto.setTipoCalcMora(1006);
         boleto.setMora(10.00);
         boleto.setInstrucoes('instrucoes_8');
         boleto.setDemonstrativo('demonstrativo_9');
         boleto.setImpJuros(1010);
         boleto.setTabelaEnum(tabela);
         boleto.setParentId(id);
         boleto.setEmprId(1);
         boleto.setModifyDateUTC(a.getTime());
         boleto.setCreateDateUTC(a.getTime());
         boleto.setCreateUser("system");
         boleto.setModifyUser("system");
         boleto.setProcessId(1);
         boleto.setModelAction(action);
 
         return boleto;
     }

 
 public static ConfigCarne insertConfigCarne(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigCarne configcarne = new ConfigCarne();
         Date a = new Date();
         configcarne.setId(id);
         configcarne.setCarneBotelo(1001);
         configcarne.setCarneNormal(1002);
         configcarne.setTabelaEnum(tabela);
         configcarne.setParentId(id);
         configcarne.setEmprId(1);
         configcarne.setModifyDateUTC(a.getTime());
         configcarne.setCreateDateUTC(a.getTime());
         configcarne.setCreateUser("system");
         configcarne.setModifyUser("system");
         configcarne.setProcessId(1);
         configcarne.setModelAction(action);
 
         return configcarne;
     }

 
 public static ConfigEntrada insertConfigEntrada(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigEntrada configentrada = new ConfigEntrada();
         Date a = new Date();
         configentrada.setId(id);
         configentrada.setValorTotalFixo(1001);
         configentrada.setManterPrecoVendaProd(1002);
         configentrada.setTabelaEnum(tabela);
         configentrada.setParentId(id);
         configentrada.setEmprId(1);
         configentrada.setModifyDateUTC(a.getTime());
         configentrada.setCreateDateUTC(a.getTime());
         configentrada.setCreateUser("system");
         configentrada.setModifyUser("system");
         configentrada.setProcessId(1);
         configentrada.setModelAction(action);
 
         return configentrada;
     }

 
 public static ConfigFiscal insertConfigFiscal(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigFiscal configfiscal = new ConfigFiscal();
         Date a = new Date();
         configfiscal.setId(id);
         configfiscal.setPrincAtividade(1001);
         configfiscal.setRegime(1002);
         configfiscal.setAliqSimples(10.00);
         configfiscal.setTabelaEnum(tabela);
         configfiscal.setParentId(id);
         configfiscal.setEmprId(1);
         configfiscal.setModifyDateUTC(a.getTime());
         configfiscal.setCreateDateUTC(a.getTime());
         configfiscal.setCreateUser("system");
         configfiscal.setModifyUser("system");
         configfiscal.setProcessId(1);
         configfiscal.setModelAction(action);
 
         return configfiscal;
     }

 
 public static ConfigAlertas insertConfigAlertas(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigAlertas configalertas = new ConfigAlertas();
         Date a = new Date();
         configalertas.setId(id);
         configalertas.setEstoqMin(1001);
         configalertas.setEstoqMax(1002);
         configalertas.setErroNFe(1003);
         configalertas.setPdCompra(1004);
         configalertas.setTabelaEnum(tabela);
         configalertas.setParentId(id);
         configalertas.setEmprId(1);
         configalertas.setModifyDateUTC(a.getTime());
         configalertas.setCreateDateUTC(a.getTime());
         configalertas.setCreateUser("system");
         configalertas.setModifyUser("system");
         configalertas.setProcessId(1);
         configalertas.setModelAction(action);
 
         return configalertas;
     }

 
 public static ConfigGeral insertConfigGeral(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigGeral configgeral = new ConfigGeral();
         Date a = new Date();
         configgeral.setId(id);
         configgeral.setFusoHorario(1001);
         configgeral.setCasasDecimais(1002);
         configgeral.setDiasCartaCobr(1003);
         configgeral.setInfPosicionarMouse(1004);
         configgeral.setCnpjCPFUnico(1005);
         configgeral.setImpCodPersonalizado(1006);
         configgeral.setLogListRelImp(1007);
         configgeral.setObsProdFinProd(1008);
         configgeral.setTabelaEnum(tabela);
         configgeral.setParentId(id);
         configgeral.setEmprId(1);
         configgeral.setModifyDateUTC(a.getTime());
         configgeral.setCreateDateUTC(a.getTime());
         configgeral.setCreateUser("system");
         configgeral.setModifyUser("system");
         configgeral.setProcessId(1);
         configgeral.setModelAction(action);
 
         return configgeral;
     }

 
 public static ConfigProduto insertConfigProduto(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigProduto configproduto = new ConfigProduto();
         Date a = new Date();
         configproduto.setId(id);
         configproduto.setCfop(1001);
         configproduto.setIcmsSitTrib(1002);
         configproduto.setIcmsOrigem(1003);
         configproduto.setIcmsModalidadeBC(1004);
         configproduto.setIcmsRedBaseCalc(10.00);
         configproduto.setIcmsAliq(10.00);
         configproduto.setIcmsMotDesoneracao(1007);
         configproduto.setIcmsModBCST(1008);
         configproduto.setIcmsMargValAdic(10.00);
         configproduto.setIcmsRedBaseCalcST(10.00);
         configproduto.setIcmsPrecoUnitPautaST(10.00);
         configproduto.setIcmsAliqST(10.00);
         configproduto.setIpiSitTrib(1013);
         configproduto.setIpiClasCigarroBebida(10.00);
         configproduto.setIpiCNPJProd('ipiCNPJProd_15');
         configproduto.setIpiCodSeloCont('ipiCodSeloCont_16');
         configproduto.setIpiQtdSelo(10.00);
         configproduto.setIpiCodEnquad(1018);
         configproduto.setIpiTipCalc(1019);
         configproduto.setIpiAliq(10.00);
         configproduto.setPisSitTrib(1021);
         configproduto.setPisAliq(10.00);
         configproduto.setPisValUnidtrib(10.00);
         configproduto.setPistipoCalcSubstTrib(1024);
         configproduto.setPisAliqST(10.00);
         configproduto.setPisValorAliqST(10.00);
         configproduto.setCofinsSubstTrib(1027);
         configproduto.setCofinsAliq(10.00);
         configproduto.setCofinsValorAliq(10.00);
         configproduto.setCofinsTipoCalcSubstTrib(1030);
         configproduto.setCofinsAliqST(10.00);
         configproduto.setCofinsValorAliqST(10.00);
         configproduto.setTabelaEnum(tabela);
         configproduto.setParentId(id);
         configproduto.setEmprId(1);
         configproduto.setModifyDateUTC(a.getTime());
         configproduto.setCreateDateUTC(a.getTime());
         configproduto.setCreateUser("system");
         configproduto.setModifyUser("system");
         configproduto.setProcessId(1);
         configproduto.setModelAction(action);
 
         return configproduto;
     }

 
 public static ConfigSMTP insertConfigSMTP(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigSMTP configsmtp = new ConfigSMTP();
         Date a = new Date();
         configsmtp.setId(id);
         configsmtp.setServSMTP('servSMTP_1');
         configsmtp.setPorta('porta_2');
         configsmtp.setEndEmail('endEmail_3');
         configsmtp.setUsuario('usuario_4');
         configsmtp.setSenha('senha_5');
         configsmtp.setSeguranca(1006);
         configsmtp.setTabelaEnum(tabela);
         configsmtp.setParentId(id);
         configsmtp.setEmprId(1);
         configsmtp.setModifyDateUTC(a.getTime());
         configsmtp.setCreateDateUTC(a.getTime());
         configsmtp.setCreateUser("system");
         configsmtp.setModifyUser("system");
         configsmtp.setProcessId(1);
         configsmtp.setModelAction(action);
 
         return configsmtp;
     }

 
 public static ConfiguracaoNFe insertConfiguracaoNFe(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfiguracaoNFe configuracaonfe = new ConfiguracaoNFe();
         Date a = new Date();
         configuracaonfe.setId(id);
         configuracaonfe.setPresCompr(1001);
         configuracaonfe.setDestConsFinal(1002);
         configuracaonfe.setPreencherDataHora(1003);
         configuracaonfe.setIcmsPadrao(10.00);
         configuracaonfe.setIpiPadrao(10.00);
         configuracaonfe.setPisPadrao(10.00);
         configuracaonfe.setCofinsPadrao(10.00);
         configuracaonfe.setAmbienteEnvio(1008);
         configuracaonfe.setServMsmNota(10.00);
         configuracaonfe.setSerieEnvio('serieEnvio_10');
         configuracaonfe.setAnexarXmlEmail(1011);
         configuracaonfe.setIdCSC('idCSC_12');
         configuracaonfe.setCSC('cSC_13');
         configuracaonfe.setInformacaoAdd('informacaoAdd_14');
         configuracaonfe.setCertificado('certificado_15');
         configuracaonfe.setSenha('senha_16');
         configuracaonfe.setSalvarSenha(1017);
         configuracaonfe.setCfopPadrao(1018);
         configuracaonfe.setConfSMTP(1019);
         configuracaonfe.setTabelaEnum(tabela);
         configuracaonfe.setParentId(id);
         configuracaonfe.setEmprId(1);
         configuracaonfe.setModifyDateUTC(a.getTime());
         configuracaonfe.setCreateDateUTC(a.getTime());
         configuracaonfe.setCreateUser("system");
         configuracaonfe.setModifyUser("system");
         configuracaonfe.setProcessId(1);
         configuracaonfe.setModelAction(action);
 
         return configuracaonfe;
     }

 
 public static ConfigVendas insertConfigVendas(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         ConfigVendas configvendas = new ConfigVendas();
         Date a = new Date();
         configvendas.setId(id);
         configvendas.setDescontoMaxVenda(10.00);
         configvendas.setObservacao('observacao_2');
         configvendas.setImprSegVia(1003);
         configvendas.setImprAssinatura(1004);
         configvendas.setImprResumoFinanc(1005);
         configvendas.setAtuaPrecoClonar(1006);
         configvendas.setImprColUnidade(1007);
         configvendas.setBloquearvendProdSemEstoq(1008);
         configvendas.setAddDespCalcImposto(1009);
         configvendas.setRetSubstTribICMS(1010);
         configvendas.setTabelaEnum(tabela);
         configvendas.setParentId(id);
         configvendas.setEmprId(1);
         configvendas.setModifyDateUTC(a.getTime());
         configvendas.setCreateDateUTC(a.getTime());
         configvendas.setCreateUser("system");
         configvendas.setModifyUser("system");
         configvendas.setProcessId(1);
         configvendas.setModelAction(action);
 
         return configvendas;
     }


}


 
 public static Rentabilidade insertRentabilidade(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Rentabilidade rentabilidade = new Rentabilidade();
         Date a = new Date();
         rentabilidade.setId(id);
         rentabilidade.setRentabilidadeList(new ArrayList<RentabilidadeList>());
         rentabilidade.getRentabilidadeList().add(insertRentabilidadeList(id,TabelaEnum.RENTABILIDADE,action));
         rentabilidade.setTabelaEnum(tabela);
         rentabilidade.setParentId(id);
         rentabilidade.setEmprId(1);
         rentabilidade.setModifyDateUTC(a.getTime());
         rentabilidade.setCreateDateUTC(a.getTime());
         rentabilidade.setCreateUser("system");
         rentabilidade.setModifyUser("system");
         rentabilidade.setProcessId(1);
         rentabilidade.setModelAction(action);
 
         return rentabilidade;
     }


}


 
 public static Servico insertServico(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Servico servico = new Servico();
         Date a = new Date();
         servico.setId(id);
         servico.setNome('nome_1');
         servico.setDescricao('descricao_2');
         servico.setPreco(new ArrayList<Preco>());
         servico.getPreco().add(insertPreco(id,TabelaEnum.SERVICO,action));
         servico.setTabelaEnum(tabela);
         servico.setParentId(id);
         servico.setEmprId(1);
         servico.setModifyDateUTC(a.getTime());
         servico.setCreateDateUTC(a.getTime());
         servico.setCreateUser("system");
         servico.setModifyUser("system");
         servico.setProcessId(1);
         servico.setModelAction(action);
 
         return servico;
     }


}


 
 public static Classes insertClasses(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Classes classes = new Classes();
         Date a = new Date();
         classes.setId(id);
         classes.setNome('nome_1');
         classes.setTabelaEnum(tabela);
         classes.setParentId(id);
         classes.setEmprId(1);
         classes.setModifyDateUTC(a.getTime());
         classes.setCreateDateUTC(a.getTime());
         classes.setCreateUser("system");
         classes.setModifyUser("system");
         classes.setProcessId(1);
         classes.setModelAction(action);
 
         return classes;
     }

 
 public static Interface insertInterface(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Interface interface = new Interface();
         Date a = new Date();
         interface.setId(id);
         interface.setNome('nome_1');
         interface.setLocal('local_2');
         interface.setTabelaEnum(tabela);
         interface.setParentId(id);
         interface.setEmprId(1);
         interface.setModifyDateUTC(a.getTime());
         interface.setCreateDateUTC(a.getTime());
         interface.setCreateUser("system");
         interface.setModifyUser("system");
         interface.setProcessId(1);
         interface.setModelAction(action);
 
         return interface;
     }

 
 public static Field insertField(Integer id,TabelaEnum tabela,PersistenceActionEnum action)
     {
         Field field = new Field();
         Date a = new Date();
         field.setId(id);
         field.setTamanho(1001);
         field.setTipo('tipo_2');
         field.setRequerid(1003);
         field.setPrimaryKey(1004);
         field.setForenkey(1005);
         field.setModel(1006);
         field.setXml(1007);
         field.setTabelaEnum(tabela);
         field.setParentId(id);
         field.setEmprId(1);
         field.setModifyDateUTC(a.getTime());
         field.setCreateDateUTC(a.getTime());
         field.setCreateUser("system");
         field.setModifyUser("system");
         field.setProcessId(1);
         field.setModelAction(action);
 
         return field;
     }


}



}
