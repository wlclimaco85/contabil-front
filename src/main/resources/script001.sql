
delete from doisvalor where pagina = 10 ;

delete from doisvalortype where id >110;
INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES
(111,'TIPO DOCUMENTO', 'TIPO DOCUMENTO', 1477075035443, 'System'),
(112,'MODELO', 'MODELO' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('55', 'NFE','NF-e',112,10, 1477075035443, 'System'),
    ('65', 'NFCE','NFC-e',112,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(113,'SERIE', 'SERIE' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
('1', '1', '1',113,10, 1477075035443, 'System'),
('2', '2', '2',113,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(114,'TIPO', 'TIPO' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'ENTRADA', 'Entrada',114,10, 1477075035443, 'System'),
    ('1', 'SAIDA', 'Saida',114,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(115,'IDENTIFICADOR LOCAL DESTINO OPERACAO', 'IDENTIFICADOR LOCAL DESTINO OPERACAO' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'OPERACAO_INTERNA','Operação interna',115,10, 1477075035443, 'System'),
    ('2', 'OPERACAO_INTERESTADUAL','Operação interestadual',115,10, 1477075035443, 'System'),
    ('3', 'OPERACAO_COM_EXTERIOR','Operação com o exterior',115,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(130,'TIPO IMPRESSAO', 'TIPO IMPRESSAO' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'SEM_GERACAO_DANFE','Sem geração de DANFe',130,10, 1477075035443, 'System'),
    ('1', 'DANFE_NORMAL_RETRATO','DANFe normal retrato',130,10, 1477075035443, 'System'),
    ('2', 'DANFE_NORMAL_PAISAGEM','DANFe normal paisagem',130,10, 1477075035443, 'System'),
    ('3', 'DANFE_SIMPLIFICADO','DANFe simplificado',130,10, 1477075035443, 'System'),
    ('4', 'DANFE_NFCE','DANFe NFCe',130,10, 1477075035443, 'System'),
    ('5', 'DANFE_NFCE_MENSAGEM_ELETRONICA','DANFe NFCe mensagem eletronica',130,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(116,'TIPO EMISSAO', 'TIPO EMISSAO' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'EMISSAO_NORMAL','Normal',116,10, 1477075035443, 'System'),
    ('2', 'CONTINGENCIA_FS_IA','Contingeancia FS',116,10, 1477075035443, 'System'),
    ('3', 'CONTINGENCIA_SCAN','Contingeancia SCAN',116,10, 1477075035443, 'System'),
    ('4', 'CONTINGENCIA_DPEC','Contingeancia DPEC',116,10, 1477075035443, 'System'),
    ('5', 'CONTINGENCIA_FSDA','Contingeancia FSDA',116,10, 1477075035443, 'System'),
    ('6', 'CONTINGENCIA_SVCAN','Contingeancia SVCAN',116,10, 1477075035443, 'System'),
    ('7', 'CONTINGENCIA_SVCRS(','Contingeancia SVCRS',116,10, 1477075035443, 'System'),
    ('9', 'CONTIGENCIA_OFFLINE','Contingeancia offline NFC-e',116,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(117,'AMBIENTE', 'AMBIENTE' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'PRODUCAO','Produção',117,10, 1477075035443, 'System'),
    ('2', 'HOMOLOGACAO','Homologação',117,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(118,'FINALIDADE', 'FINALIDADE' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'NORMAL','Normal',118,10, 1477075035443, 'System'),
    ('2', 'COMPLEMENTAR','Complementar',118,10, 1477075035443, 'System'),
    ('3', 'AJUSTE','Ajuste',118,10, 1477075035443, 'System'),
    ('4', 'DEVOLUCAO_OU_RETORNO','Devolução ou retorno',118,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(119,'OPERACAO CONSUMIDOR FINAL', 'OPERACAO CONSUMIDOR FINAL' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'NAO','Não',119,10, 1477075035443, 'System'),
    ('1', 'SIM','Sim',119,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(120,'INDICADOR	PRESENCA COMPRADOR','INDICADOR	PRESENCA COMPRADOR' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'NAO_APLICA','N\u00e3o se aplica',120,10, 1477075035443, 'System'),
    ('1', 'OPERACAO_PRESENCIAL','Operação presencial',120,10, 1477075035443, 'System'),
    ('2', 'OPERACAO_NAO_PRESENCIAL_INTERNET','Operação não presencial - Internet',120,10, 1477075035443, 'System'),
    ('3', 'OPERACAO_NAO_PRESENCIAL_TELEATENDIMENTO','Operação não presencial - Teleatendimento',120,10, 1477075035443, 'System'),
    ('4', 'NFCE_EM_OPERACAO_COM_ENTREGA_DOMICILIO','NFC-e emOperação com entrega a domicilio',120,10, 1477075035443, 'System'),
    ('9', 'OPERACAO_NAO_PRESENCIAL_OUTROS','Operação não presencial - Outros',120,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(121,'PROGRAMA EMISSOR', 'PROGRAMA EMISSOR' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'CONTRIBUINTE','Aplicativo do contribuinte',121,10, 1477075035443, 'System'),
    ('1', 'AVULSA_FISCO','Emissão de NF-e avulsa pelo Fisco',121,10, 1477075035443, 'System'),
    ('2', 'AVULSA_CONTRIBUINTE_COM_CERTIFICADO_DIGITAL_FISCO','Emissão de NF-e avulsa, pelo contribuinte com certificado digital atravas do Fisco',121,10, 1477075035443, 'System'),
    ('3', 'CONTRIBUINTE_APLICATIVO_FISCO','Emissão de NF-e pelo contribuinte com aplicativo fornecido pelo Fisco',121,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(122,'INDICADOR IE DESTINATARIO', 'INDICADOR IE DESTINATARIO' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'CONTRIBUINTE_ICMS','Contribuinte ICMS',122,10, 1477075035443, 'System'),
    ('2', 'CONTRIBUINTE_ISENTO_INSCRICAO_CONTRIBUINTES_ICMS','Contribuinte isento inscrição contribuintes ICMS',122,10, 1477075035443, 'System'),
    ('9', 'NAO_CONTRIBUINTE','Não contribuinte',122,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(123,'MODALIDADE FRETE', 'MODALIDADE FRETE' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'POR_CONTA_DO_EMITENTE','Por conta do emitente',123,10, 1477075035443, 'System'),
    ('1', 'POR_CONTA_DO_DESTINATARIO_REMETENTE','Por conta do destinatário remetente',123,10, 1477075035443, 'System'),
    ('2', 'POR_CONTA_DE_TERCEIROS','Por conta de terceiros',123,10, 1477075035443, 'System'),
    ('9', 'SEM_FRETE','Sem frete',123,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(124,'TIPO DOC', 'TIPO DOC' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
('1', 'ORCAMENTO','Orçamento',124,10, 1477075035443, 'System'),
('2', 'PEDIDO VENDA','Pedido Venda',124,10, 1477075035443, 'System'),
('3', 'PEDIDO COMPRA','Pedido Compra',124,10, 1477075035443, 'System'),
('4', 'NOTA FISCAL SAIDA','Nota Fiscal Saida',124,10, 1477075035443, 'System'),
('5', 'NOTA FISCAL ENTRADA','Nota Fiscal Entrada',124,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(125,'FORMA PAGAMENTO MOEDA', 'FORMA PAGAMENTO MOEDA' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('01', 'DINHEIRO','Dinheiro',125,10, 1477075035443, 'System'),
    ('02', 'CHEQUE','Cheque',125,10, 1477075035443, 'System'),
    ('03', 'CARTAO_CREDITO','Cartão de credito',125,10, 1477075035443, 'System'),
    ('04', 'CARTAO_DEBITO','Cartão de debito',125,10, 1477075035443, 'System'),
    ('05', 'CARTAO_LOJA','Cartão da loja',125,10, 1477075035443, 'System'),
    ('10', 'VALE_ALIMENTACAO','Vale alimentaçao',125,10, 1477075035443, 'System'),
    ('11', 'VALE_REFEICAO','Vale refeiçao',125,10, 1477075035443, 'System'),
    ('12', 'VALE_PRESENTE','Vale presente',125,10, 1477075035443, 'System'),
    ('13', 'VALE_COMBUSTIVEL','Vale combustível',125,10, 1477075035443, 'System'),
    ('99', 'OUTRO','Outro',125,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(126,'INDICADOR ORIGEM PROCESSO', 'INDICADOR ORIGEM PROCESSO' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('0', 'SEFAZ','Sefaz',126,10, 1477075035443, 'System'),
    ('1', 'JUSTICA_FEDERAL','Justiça Federal',126,10, 1477075035443, 'System'),
    ('2', 'JUSTICA_ESTADUAL','Justiça Estadual',126,10, 1477075035443, 'System'),
    ('3', 'SECEX_RFB','Secex RFB',126,10, 1477075035443, 'System'),
    ('9', 'OUTROS','Outros',126,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(127,'ASSINATURA', 'ASSINATURA' , 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
('1', 'dddddd','',110,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(128,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
('1', 'ORCAMENTO','Orçamento',128,10, 1477075035443, 'System'),
('2', 'PEDIDO VENDA','Pedido Venda',128,10, 1477075035443, 'System'),
('3', 'PEDIDO COMPRA','Pedido Compra',128,10, 1477075035443, 'System'),
('4', 'NOTA FISCAL SAIDA','Nota Fiscal Saida',128,10, 1477075035443, 'System'),
('5', 'NOTA FISCAL ENTRADA','Nota Fiscal Entrada',128,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(129,'TRIBUTACAO', 'TRIBUTACAO' , 1477075035443, 'System');
INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    ('1', 'MICROEMPRESA_MUNICIPAL','Microempresa municipal',110,10, 1477075035443, 'System'),
    ('2', 'ESTIMATIVA','Estimativa',110,10, 1477075035443, 'System'),
    ('3', 'SOCIEDADE_PROFISSIONAIS','Sociedade profissionais',110,10, 1477075035443, 'System'),
    ('4', 'COOPERATIVA','Cooperativa',110,10, 1477075035443, 'System'),
    ('5', 'MICROEMPRESARIO_INDIVIDUAL_MEI','Microempresario individual MEI',110,10, 1477075035443, 'System'),
    ('6', 'MICROEMPRESARIO_E_EMPRESA_PEQUENOPORTE','Microempresario e empresa de pequeno porte',110,10, 1477075035443, 'System');

INSERT INTO pagina(id ,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (8,'Empresa', 0, 100, 1477075035443, 'System');

    INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1,'PAIS', 'PAIS', 1477075035443, 'System'),
		   (2,'INDICADOR IE', 'INDICADOR IE' , 1477075035443, 'System');


	INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES

('1', 'Brasil','Brasil',1,8, 1477075035443, 'System'),
('2', 'Argentina','Argentina',1,8, 1477075035443, 'System'),
('1', ' ',' ',151,8, 1477075035443, 'System'),
('2', 'Contribuinte ICMS','Contribuinte ICMS',2,8, 1477075035443, 'System'),
('3', 'Isento de cadastro','Isento de cadastro',2,8, 1477075035443, 'System'),
('4', 'Não contribuinte','Não contribuinte',2,8, 1477075035443, 'System');


INSERT INTO pagina(id ,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (101,'Financeiro', 0, 100, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (102,'TIPO DOCUMENTO', 'TIPO DOCUMENTO', 1477075035443, 'System'),
	(103,'CATEGORIA', 'CATEGORIA' , 1477075035443, 'System'),
(104,'CADASTROMAIS', 'CADASTRO MAIS VEZES' , 1477075035443, 'System'),
(105,'INTERVALO', 'INTERVALO' , 1477075035443, 'System'),
(106,'SITUACAO', 'SITUACAO' , 1477075035443, 'System');


INSERT INTO pagina(id ,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (102,'Conta', 0, 100, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES (110,'TIPO CONTA', 'TIPO CONTA', 1477075035443, 'System');



INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES

('1', 'Caixa','Caixa',110,102, 1477075035443, 'System'),
('2', 'Banco Itaú','Banco Itaú',110,102, 1477075035443, 'System');


INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES

('1', 'Apenas uma vez','Apenas uma vez',104,101, 1477075035443, 'System'),
('2', '2 vezes ao todo','2 vezes ao todo',104,101, 1477075035443, 'System'),
('3', '3 vezes ao todo','3 vezes ao todo',104,101, 1477075035443, 'System'),
('4', '4 vezes ao todo','4 vezes ao todo',104,101, 1477075035443, 'System'),
('5', '5 vezes ao todo','5 vezes ao todo',104,101, 1477075035443, 'System'),
('6', '6 vezes ao todo','6 vezes ao todo',104,101, 1477075035443, 'System'),
('7', '7 vezes ao todo','7 vezes ao todo',104,101, 1477075035443, 'System'),
('8', '8 vezes ao todo','8 vezes ao todo',104,101, 1477075035443, 'System'),
('9', '9 vezes ao todo','9 vezes ao todo',104,101, 1477075035443, 'System'),
('10', '10 vezes ao todo','10 vezes ao todo',104,101, 1477075035443, 'System'),
('11', '11 vezes ao todo','11 vezes ao todo',104,101, 1477075035443, 'System'),
('12', '12 vezes ao todo','12 vezes ao todo',104,101, 1477075035443, 'System'),
('13', '13 vezes ao todo','13 vezes ao todo',104,101, 1477075035443, 'System'),
('14', '14 vezes ao todo','14 vezes ao todo',104,101, 1477075035443, 'System'),
('15', '15 vezes ao todo','15 vezes ao todo',104,101, 1477075035443, 'System'),
('16', '16 vezes ao todo','16 vezes ao todo',104,101, 1477075035443, 'System'),
('17', '17 vezes ao todo','17 vezes ao todo',104,101, 1477075035443, 'System'),
('18', '18 vezes ao todo','18 vezes ao todo',104,101, 1477075035443, 'System'),
('19', '19 vezes ao todo','19 vezes ao todo',104,101, 1477075035443, 'System'),
('20', '20 vezes ao todo','20 vezes ao todo',104,101, 1477075035443, 'System'),
('21', '21 vezes ao todo','21 vezes ao todo',104,101, 1477075035443, 'System'),
('22', '22 vezes ao todo','22 vezes ao todo',104,101, 1477075035443, 'System'),
('23', '23 vezes ao todo','23 vezes ao todo',104,101, 1477075035443, 'System'),
('24', '24 vezes ao todo','24 vezes ao todo',104,101, 1477075035443, 'System'),


('1', 'Dias','Dias',105,101, 1477075035443, 'System'),
('7', 'Semanas','Semanas',105,101, 1477075035443, 'System'),
('15', 'Quinzenas','Quinzenas',105,101, 1477075035443, 'System'),
('30', 'Meses','Meses',105,101, 1477075035443, 'System'),
('60', 'Bimestres','Bimestres',105,101, 1477075035443, 'System'),
('90', 'Trimestres','Trimestres',105,101, 1477075035443, 'System'),
('180', 'Semestres','Semestres',105,101, 1477075035443, 'System'),
('365', 'Anos','Anos',105,101, 1477075035443, 'System'),
('0', 'Sem intervalo','Sem intervalo',105,101, 1477075035443, 'System'),


('1', 'Pago','Pago',106,101, 1477075035443, 'System'),
('2', 'Aberta','Aberta',106,101, 1477075035443, 'System'),
('3', 'Vencida','Vencida',106,101, 1477075035443, 'System'),
('4', 'Cancelada','Cancelada',106,101, 1477075035443, 'System');



INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES

	('1', 'Dinheiro','Dinheiro',102,101, 1477075035443, 'System'),
        ('2', 'Cheque','Cheque',102,101, 1477075035443, 'System'),
        ('3', 'Boleto','Boleto',102,101, 1477075035443, 'System'),
        ('4', 'Cartão Crédito','Cartão Crédito',102,101, 1477075035443, 'System'),
        ('5', 'Cartão Débito','Cartão Débito',102,101, 1477075035443, 'System'),
        ('6', 'Duplicata','Duplicata',102,101, 1477075035443, 'System'),
        ('7', 'Carnê','Carnê',102,101, 1477075035443, 'System'),
        ('8', 'Transf. Eletrônica','Transf. Eletrônica',102,101, 1477075035443, 'System'),
        ('9', 'Crédito Loja','Crédito Loja',102,101, 1477075035443, 'System'),
        ('10', 'Vale Alimentação','Vale Alimentação',102,101, 1477075035443, 'System'),
        ('11', 'Vale Refeição','Vale Refeição',102,101, 1477075035443, 'System'),
        ('12', 'Vale Presente','Vale Presente',102,101, 1477075035443, 'System'),
        ('13', 'Vale Combustível','Vale Combustível',102,101, 1477075035443, 'System'),
        ('14', 'Sem documento','Sem documento',102,101, 1477075035443, 'System'),

('14', 'Despesas operacionais Água','Despesas operacionais Água',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Aluguel','Despesas operacionais Aluguel',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Condomínio','Despesas operacionais Condomínio',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais FGTS','Despesas operacionais FGTS',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais INSS','Despesas operacionais INSS',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Luz','Despesas operacionais Luz',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Material de consumo','Despesas operacionais Material de consumo',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Material de escritório','Despesas operacionais Material de escritório',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Salário','Despesas operacionais Salário',103,101, 1477075035443, 'System'),
('14', 'Despesas operacionais Outras despesas','Despesas operacionais Outras despesas',103,101, 1477075035443, 'System'),
('14', 'Despesas de vendas Comissões','Despesas de vendas Comissões',103,101, 1477075035443, 'System'),
('14', 'Despesas de vendas Embalagens','Despesas de vendas Embalagens',103,101, 1477075035443, 'System'),
('14', 'Despesas de vendas Fretes','Despesas de vendas Fretes',103,101, 1477075035443, 'System'),
('14', 'Despesas de vendas Outras despesas','Despesas de vendas Outras despesas',103,101, 1477075035443, 'System'),
('14', 'Impostos IPI','Impostos IPI',103,101, 1477075035443, 'System'),
('14', 'Impostos ICMS','Impostos ICMS',103,101, 1477075035443, 'System'),
('14', 'Impostos ISSQN','Impostos ISSQN',103,101, 1477075035443, 'System'),
('14', 'Impostos SIMPLES','Impostos SIMPLES',103,101, 1477075035443, 'System'),
('14', 'Impostos Outro imposto','Impostos Outro imposto',103,101, 1477075035443, 'System'),
('14', 'Despesas diversas Tarifas bancárias','Despesas diversas Tarifas bancárias',103,101, 1477075035443, 'System'),
('14', 'Despesas diversas Juros e multas','Despesas diversas Juros e multas',103,101, 1477075035443, 'System'),
('14', 'Despesas diversas Outras despesas','Sem_documento',103,101, 1477075035443, 'System'),
('14', 'Investimentos Automóvel','Investimentos Automóvel',103,101, 1477075035443, 'System'),
('14', 'Investimentos Computador','Investimentos Computador',103,101, 1477075035443, 'System'),
('14', 'Investimentos Móveis','Investimentos Móveis',103,101, 1477075035443, 'System'),
('14', 'Investimentos Outros investimentos','Investimentos Outros investimentos',103,101, 1477075035443, 'System'),
('14', 'Compras (estoque) Compras (estoque)','Compras (estoque) Compras (estoque)',103,101, 1477075035443, 'System'),


('14', 'Compras (estoque) Compras (estoque)','Compras (estoque) Compras (estoque)',104,101, 1477075035443, 'System'),

('14', 'Compras (estoque) Compras (estoque)','Compras (estoque) Compras (estoque)',105,101, 1477075035443, 'System');



INSERT INTO pagina(pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES ('Produto', 0, 100, 1477075035443, 'System');


INSERT INTO pagina(id,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (6,'tributação', 0, 100, 1477075035443, 'System');


    INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (21,'ICMS - SITUAÇÃO TRIBUTARIA SIMPLES NACIONAL', 'ICMS - SITUAÇÃO TRIBUTARIA SIMPLES NACIONAL', 1477075035443, 'System'),
	(22,'ICMS - SITUAÇÃO TRIBUTARIA TRIBUTACAO NORMAL', 'ICMS - SITUAÇÃO TRIBUTARIA TRIBUTACAO NORMAL' , 1477075035443, 'System'),
	(23,'ICMS - REGINE', 'ICMS - REGIME' , 1477075035443, 'System'),
	(10,'ICMS - MODALIDADE BC', 'MODALIDADE BC', 1477075035443, 'System'),
	(11,'ICMS - MODALIDADE BC ST', 'MODALIDADE BC', 1477075035443, 'System'),
	(12,'ICMS - MOTIVO DESONERAÇÃO', 'ICMS - MOTIVO DESONERAÇÃO', 1477075035443, 'System'),
	(13,'IPI - SITUAÇÃO TRIBUTARIA', 'IPI - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	(14,'TIPO CALCULO', 'TIPO CALCULO', 1477075035443, 'System'),
	(15,'PIS - SITUAÇÃO TRIBUTARIA', 'PIS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	(16,'COFINS - SITUAÇÃO TRIBUTARIA', 'COFINS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System');


	INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES


    	/* MODALIDADE BC */
    	('0', 'Margem valor agregado','Margem valor agregado',10,6, 1477075035443, 'System'),
    	('1', 'Pauta (valor)','Pauta (valor)',10,6, 1477075035443, 'System'),
    	('2', 'Preço tabelado máx. (valor)','Preço tabelado máx. (valor)',10,6, 1477075035443, 'System'),
    	('3', 'Valor da operação','Valor da operação',10,6, 1477075035443, 'System'),

    	/* ICMS - REGINE */
       ('00', '00: Tributada Normal','00: Tributada Normal',23,6, 1477075035443, 'System'),
	   ('10', '10: Simples Nacional','10: Simples Nacional',23,6, 1477075035443, 'System'),

	   /*MODALIDADE BC ST*/
	   ('0', 'Tabelado ou máx. sugerido','Tabelado ou máx. sugerido',11,6, 1477075035443, 'System'),
	   ('1', 'Lista Negativa (valor)','Lista Negativa (valor)',11,6, 1477075035443, 'System'),
	   ('2', 'Lista Positiva (valor)','Lista Positiva (valor)',11,6, 1477075035443, 'System'),
	   ('3', 'Lista Neutra (valor)','Lista Neutra (valor)',11,6, 1477075035443, 'System'),
	   ('4', 'Margem Valor Agregado (%)','Margem Valor Agregado (%)',11,6, 1477075035443, 'System'),
	   ('5', 'Pauta (valor)','Pauta (valor)',11,6, 1477075035443, 'System'),

	   /* ICMS - SITUAÇÃO TRIBUTARIA */
	   ('00', '00: Tributada integralmente','Tributada integralmente',22,6, 1477075035443, 'System'),
	   ('10', '10: Tributada com cobr. por subst. trib.','10: Tributada com cobr. por subst. trib.',22,6, 1477075035443, 'System'),
	   ('20', '20: Com redução de base de cálculo','20: Com redução de base de cálculo',22,6, 1477075035443, 'System'),
	   ('30', '30: Isenta ou não trib com cobr por subst trib','30: Isenta ou não trib com cobr por subst trib',22,6, 1477075035443, 'System'),
	   ('40', '40: Isenta','40: Isenta',22,6, 1477075035443, 'System'),
	   ('41', '41: Não tributada','41: Não tributada',22,6, 1477075035443, 'System'),
	   ('50', '50: Suspesão','50: Suspesão',22,6, 1477075035443, 'System'),
	   ('51', '51: Diferimento','51: Diferimento',22,6, 1477075035443, 'System'),
	   ('60', '60: ICMS cobrado anteriormente por subst trib','60: ICMS cobrado anteriormente por subst trib',22,6, 1477075035443, 'System'),
	   ('70', '70: Redução de Base Calc e cobr ICMS por subst trib','70: Redução de Base Calc e cobr ICMS por subst trib',22,6, 1477075035443, 'System'),
	   ('90', '90: Outros','90: Outros',22,6, 1477075035443, 'System'),
	   ('10Part', 'Partilha 10: Entre UF origem e destino ou definida na legislação com Subst Trib','Entre UF origem e destino ou definida na legislação com Subst Trib',22,6, 1477075035443, 'System'),
	   ('90Part', 'Partilha 90: Entre UF origem e destino ou definida na legislação - outros','Entre UF origem e destino ou definida na legislação - outros',22,6, 1477075035443, 'System'),
	   ('41ST', 'ICMS ST retido em operações interestaduais com repasses do Subst Trib','ICMS ST retido em operações interestaduais com repasses do Subst Trib',22,6, 1477075035443, 'System'),
	   ('101', '101: Com permissão de crédito','101: Com permissão de crédito',21,6, 1477075035443, 'System'),
	   ('102', '102: Sem permissão de crédito','102: Sem permissão de crédito',21,6, 1477075035443, 'System'),
	   ('103', '103: Isenção do ICMS para faixa de receita bruta','103: Isenção do ICMS para faixa de receita bruta',2,6, 1477075035443, 'System'),
	   ('201', '201: Com permissão de crédito, com cobr ICMS por Subst Trib','201: Com permissão de crédito, com cobr ICMS por Subst Trib',21,6, 1477075035443, 'System'),
	   ('202', '202: Sem permissão de crédito, com cobr ICMS por Subst Trib','202: Sem permissão de crédito, com cobr ICMS por Subst Trib',21,6, 1477075035443, 'System'),
	   ('203', '203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST','203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST',21,6, 1477075035443, 'System'),
	   ('300', '300: Imune','300: Imune',21,6, 1477075035443, 'System'),
	   ('400', '400: Não tributada','400: Não tributada',21,6, 1477075035443, 'System'),
	   ('500', '500: ICMS cobrado antes por subst trib ou antecipação','500: ICMS cobrado antes por subst trib ou antecipação',21,6, 1477075035443, 'System'),
	   ('900', '900: Outros','900: Outros',21,6, 1477075035443, 'System'),

	   /* MODALIDADE BC */
	   ('0','Nacional, exceto as indicadas nos códigos de 3 a 5','0 - Nacional, exceto as indicadas nos códigos de 3 a 5',4,6, 1477075035443, 'System'),
	   ('1','Estrangeira - Importação direta, exceto a indicada no código 6','1 - Estrangeira - Importação direta, exceto a indicada no código 6',4,6, 1477075035443, 'System'),
	   ('2','Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7','2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7',4,6, 1477075035443, 'System'),
	   ('3','Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%','3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%',4,6, 1477075035443, 'System'),
	   ('4','Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes','4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes',4,6, 1477075035443, 'System'),
	   ('5','Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%','5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%',4,6, 1477075035443, 'System'),
	   ('6','Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX','6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX',4,6, 1477075035443, 'System'),
	   ('7','Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX','7 - Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX',4,6, 1477075035443, 'System'),

	   /*MOTIVO DESONERAÇÃO*/
	   ('0','Não desejo usar','Não desejo usar',12,6, 1477075035443, 'System'),
	   ('3','Produtor agropecuário','3: Produtor agropecuário',12,6, 1477075035443, 'System'),
	   ('9','Outros','9: Outros',12,6, 1477075035443, 'System'),
	   ('12','Órgão de fomento e desenvolv. agropecuário','12: Órgão de fomento e desenvolv. agropecuário',12,6, 1477075035443, 'System'),

	   /*IPI - SITUAÇÃO TRIBUTARIA*/
	   ('-1','Não usar','- Não usar -',13,6, 1477075035443, 'System'),
	   ('00','00: Entrada com recuperação de crédito','00: Entrada com recuperação de crédito',13,6, 1477075035443, 'System'),
	   ('01','01: Entrada tributada com alíquota zero','01: Entrada tributada com alíquota zero',13,6, 1477075035443, 'System'),
	   ('02','02: Entrada isenta','02: Entrada isenta',13,6, 1477075035443, 'System'),
	   ('03','03: Entrada não-tributada','03: Entrada não-tributada',13,6, 1477075035443, 'System'),
	   ('04','04: Entrada imune','04: Entrada imune',13,6, 1477075035443, 'System'),
	   ('05','05: Entrada com suspensão','05: Entrada com suspensão',13,6, 1477075035443, 'System'),
	   ('49','49: Outras entradas','49: Outras entradas',13,6, 1477075035443, 'System'),
	   ('50','50: Saída tributada','50: Saída tributada',13,6, 1477075035443, 'System'),
	   ('51','51: Saída tributada com alíquota zero','51: Saída tributada com alíquota zero',13,6, 1477075035443, 'System'),
	   ('52','52: Saída isenta','52: Saída isenta',13,6, 1477075035443, 'System'),
	   ('53','53: Saída não-tributada','53: Saída não-tributada',13,6, 1477075035443, 'System'),
	   ('54','54: Saída imune','54: Saída imune',13,6, 1477075035443, 'System'),
	   ('55','55: Saída com suspensão','55: Saída com suspensão',13,6, 1477075035443, 'System'),
	   ('99','99: Outras saídas','99: Outras saídas',13,6, 1477075035443, 'System'),

	   /* Porcentagem BC */
	   ('1','Porcentagem','Porcentagem',14,6, 1477075035443, 'System'),
	   ('2','Em valor','Em valor',14,6, 1477075035443, 'System'),

	   /* PIS SITUAÇÃO TRIBUTARIA */
	   ('01','01: Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)','01: Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)',15,6, 1477075035443, 'System'),
	   ('02','02: Operação tributável (BC = valor da operação (alíquota diferenciada)','02: Operação tributável (BC = valor da operação (alíquota diferenciada)',15,6, 1477075035443, 'System'),
	   ('03','03: Operação tributável (BC = quant. x alíq. por unidade de produto)','03: Operação tributável (BC = quant. x alíq. por unidade de produto)',15,6, 1477075035443, 'System'),
	   ('04','04: Operação tributável (tributação monofásica, alíquota zero)','04: Operação tributável (tributação monofásica, alíquota zero)',15,6, 1477075035443, 'System'),
	   ('06','06: Operação tributável (alíquota zero)','06: Operação tributável (alíquota zero)',15,6, 1477075035443, 'System'),
	   ('07','07: Operação isenta da contribuição','07: Operação isenta da contribuição',15,6, 1477075035443, 'System'),
	   ('08','08: Operação sem incidência da contribuição','08: Operação sem incidência da contribuição',15,6, 1477075035443, 'System'),
	   ('09','09: Operação com suspensão da contribuição','09: Operação com suspensão da contribuição',15,6, 1477075035443, 'System'),
	   ('49','49: Outras Operações de Saída','49: Outras Operações de Saída',15,6, 1477075035443, 'System'),
	   ('50','50: Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno','50: Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('51','51: Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno','51: Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('52','52: Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação','52: Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação',15,6, 1477075035443, 'System'),
	   ('53','53: Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno','53: Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('54','54: Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação','54: Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação',15,6, 1477075035443, 'System'),
	   ('55','55: Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação','55: Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação',15,6, 1477075035443, 'System'),
	   ('56','56: Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','56: Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',15,6, 1477075035443, 'System'),
	   ('60','60: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno','60: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('61','61: Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno','61: Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('62','62: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação','62: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação',15,6, 1477075035443, 'System'),
	   ('63','63: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno','63: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno',15,6, 1477075035443, 'System'),
	   ('64','64: Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação','64: Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação',15,6, 1477075035443, 'System'),
	   ('65','65: Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação','65: Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação',15,6, 1477075035443, 'System'),
	   ('66','66: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','66: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',15,6, 1477075035443, 'System'),
	   ('67','67: Crédito Presumido - Outras Operações','67: Crédito Presumido - Outras Operações',15,6, 1477075035443, 'System'),
	   ('70','70: Operação de Aquisição sem Direito a Crédito','70: Operação de Aquisição sem Direito a Crédito',15,6, 1477075035443, 'System'),
	   ('71','71: Operação de Aquisição com Isenção','71: Operação de Aquisição com Isenção',15,6, 1477075035443, 'System'),
	   ('72','72: Operação de Aquisição com Suspensão','72: Operação de Aquisição com Suspensão',15,6, 1477075035443, 'System'),
	   ('73','73: Operação de Aquisição a Alíquota Zero','73: Operação de Aquisição a Alíquota Zero',15,6, 1477075035443, 'System'),
	   ('74','74: Operação de Aquisição sem Incidência da Contribuição','74: Operação de Aquisição sem Incidência da Contribuição',15,6, 1477075035443, 'System'),
	   ('75','75: Operação de Aquisição por Substituição Tributária','75: Operação de Aquisição por Substituição Tributária',15,6, 1477075035443, 'System'),
	   ('98','98: Outras Operações de Entrada','98: Outras Operações de Entrada',15,6, 1477075035443, 'System'),
	   ('99','99: Outras operações','99: Outras operações',15,6, 1477075035443, 'System'),

		/* COFINS SITUAÇÃO TRIBUTARIA */
	   ('01','Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)','01: Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)',16,6, 1477075035443, 'System'),
	   ('02','02: Operação tributável (BC = valor da operação (alíquota diferenciada)','02: Operação tributável (BC = valor da operação (alíquota diferenciada)',16,6, 1477075035443, 'System'),
	   ('03','Operação tributável (BC = quant. x alíq. por unidade de produto)','03: Operação tributável (BC = quant. x alíq. por unidade de produto)',16,6, 1477075035443, 'System'),
	   ('04','Operação tributável (tributação monofásica, alíquota zero)','04: Operação tributável (tributação monofásica, alíquota zero)',16,6, 1477075035443, 'System'),
	   ('06','Operação tributável (alíquota zero)','06: Operação tributável (alíquota zero)',16,6, 1477075035443, 'System'),
	   ('07','Operação isenta da contribuição','07: Operação isenta da contribuição',16,6, 1477075035443, 'System'),
	   ('08','Operação sem incidência da contribuição','08: Operação sem incidência da contribuição',16,6, 1477075035443, 'System'),
	   ('09','Operação com suspensão da contribuição','09: Operação com suspensão da contribuição',16,6, 1477075035443, 'System'),
	   ('49','Outras Operações de Saída','49: Outras Operações de Saída',16,6, 1477075035443, 'System'),
	   ('50','Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno','50: Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('51','Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno','51: Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('52','Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação','52: Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação',16,6, 1477075035443, 'System'),
	   ('53','Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno','53: Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('54','Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação','54: Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação',16,6, 1477075035443, 'System'),
	   ('55','Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação','55: Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação',16,6, 1477075035443, 'System'),
	   ('56','Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','56: Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',16,6, 1477075035443, 'System'),
	   ('60','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno','60: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('61','Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno','61: Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('62','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação','62: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação',16,6, 1477075035443, 'System'),
	   ('63','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno','63: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno',16,6, 1477075035443, 'System'),
	   ('64','Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação','64: Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação',16,6, 1477075035443, 'System'),
	   ('65','Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação','65: Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação',16,6, 1477075035443, 'System'),
	   ('66','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','66: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',16,6, 1477075035443, 'System'),
	   ('67','Crédito Presumido - Outras Operações','67: Crédito Presumido - Outras Operações',16,6, 1477075035443, 'System'),
	   ('70','Operação de Aquisição sem Direito a Crédito','70: Operação de Aquisição sem Direito a Crédito',16,6, 1477075035443, 'System'),
	   ('71','Operação de Aquisição com Isenção','71: Operação de Aquisição com Isenção',16,6, 1477075035443, 'System'),
	   ('72','Operação de Aquisição com Suspensão','72: Operação de Aquisição com Suspensão',16,6, 1477075035443, 'System'),
	   ('73','Operação de Aquisição a Alíquota Zero','73: Operação de Aquisição a Alíquota Zero',16,6, 1477075035443, 'System'),
	   ('74','Operação de Aquisição sem Incidência da Contribuição','74: Operação de Aquisição sem Incidência da Contribuição',16,6, 1477075035443, 'System'),
	   ('75','Operação de Aquisição por Substituição Tributária','75: Operação de Aquisição por Substituição Tributária',16,6, 1477075035443, 'System'),
	   ('98','Outras Operações de Entrada','98: Outras Operações de Entrada',16,6, 1477075035443, 'System'),
	   ('99','Outras operações','99: Outras operações',16,6, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (17,'EXIGIBILIDADE DO ISS', 'EXIGIBILIDADE DO ISS', 1477075035443, 'System');



	INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES


    	/* MODALIDADE BC */

    	('1', 'Exigível','Exigível',17,6, 1477075035443, 'System'),
    	('2', 'Não incidência','Não incidência',17,6, 1477075035443, 'System'),
    	('3', 'Isenção','Isenção',17,6, 1477075035443, 'System'),
	('4', 'Exportação','Exportação',17,6, 1477075035443, 'System'),
	('5', 'Imunidade','Imunidade',17,6, 1477075035443, 'System'),
	('6', 'Exigibilidade Suspensa por Decisão Judicial','Exigibilidade Suspensa por Decisão Judicial',17,6, 1477075035443, 'System'),
	('7', 'Exigib. Susp. por Processo Administrativo','Exigib. Susp. por Processo Administrativo',17,6, 1477075035443, 'System');


INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES ('00', 'Tributada integralmente','Tributada integralmente',22,2, 1477075035443, 'System'),
	   ('10', '10:Tributada com cobr. por subst. trib.','10: Tributada com cobr. por subst. trib.',22,2, 1477075035443, 'System'),
	   ('20', '20:Com redução de base de cálculo','20: Com redução de base de cálculo',22,2, 1477075035443, 'System'),
	   ('30', '30: Isenta ou não trib com cobr por subst trib','30: Isenta ou não trib com cobr por subst trib',22,2, 1477075035443, 'System'),
	   ('40', '40: Isenta','40: Isenta',22,2, 1477075035443, 'System'),
	   ('41', '41: Não tributada','41: Não tributada',22,2, 1477075035443, 'System'),
	   ('50', '50: Suspesão','50: Suspesão',22,2, 1477075035443, 'System'),
	   ('51', '51: Diferimento','51: Diferimento',22,2, 1477075035443, 'System'),
	   ('60', '60: ICMS cobrado anteriormente por subst trib','60: ICMS cobrado anteriormente por subst trib',22,2, 1477075035443, 'System'),
	   ('70', '70: Redução de Base Calc e cobr ICMS por subst trib','70: Redução de Base Calc e cobr ICMS por subst trib',22,2, 1477075035443, 'System'),
	   ('90', '90: Outros','90: Outros',22,2, 1477075035443, 'System'),
	   ('10Part', 'Entre UF origem e destino ou definida na legislação com Subst Trib','Entre UF origem e destino ou definida na legislação com Subst Trib',22,2, 1477075035443, 'System'),
	   ('90Part', 'Entre UF origem e destino ou definida na legislação - outros','Entre UF origem e destino ou definida na legislação - outros',22,2, 1477075035443, 'System'),
	   ('41ST', 'ICMS ST retido em operações interestaduais com repasses do Subst Trib','ICMS ST retido em operações interestaduais com repasses do Subst Trib',22,2, 1477075035443, 'System'),
	   ('101', 'Simples Nacional: 101: Com permissão de crédito','Simples Nacional: 101: Com permissão de crédito',21,2, 1477075035443, 'System'),
	   ('102', 'Simples Nacional: 102: Sem permissão de crédito','Simples Nacional: 102: Sem permissão de crédito',21,2, 1477075035443, 'System'),
	   ('103', 'Simples Nacional: 103: Isenção do ICMS para faixa de receita bruta','Simples Nacional: 103: Isenção do ICMS para faixa de receita bruta',2,2, 1477075035443, 'System'),
	   ('201', 'Simples Nacional: 201: Com permissão de crédito, com cobr ICMS por Subst Trib','',21,2, 1477075035443, 'System'),
	   ('202', 'Simples Nacional: 202: Sem permissão de crédito, com cobr ICMS por Subst Trib','',21,2, 1477075035443, 'System'),
	   ('203', 'Simples Nacional: 203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST','',21,2, 1477075035443, 'System'),
	   ('300', 'Simples Nacional: 300: Imune','',21,2, 1477075035443, 'System'),
	   ('400', 'Simples Nacional: 400: Não tributada','',21,2, 1477075035443, 'System'),
	   ('500', 'Simples Nacional: 500: ICMS cobrado antes por subst trib ou antecipação','',21,2, 1477075035443, 'System'),
	   ('900', 'Simples Nacional: 900: Outros','',21,2, 1477075035443, 'System'),

	   ('0', 'Nacional, exceto as indicadas nos códigos de 3 a 5','0 - Nacional, exceto as indicadas nos códigos de 3 a 5',3,2, 1477075035443, 'System'),
	   ('1', 'Estrangeira - Importação direta, exceto a indicada no código 6','1 - Estrangeira - Importação direta, exceto a indicada no código 6',3,2, 1477075035443, 'System'),
	   ('2', 'Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7','2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7',3,2, 1477075035443, 'System'),
	   ('3', 'Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%','3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%',3,2, 1477075035443, 'System'),
	   ('4', 'Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes','4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes',3,2, 1477075035443, 'System'),
	   ('5', 'Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%','5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%',3,2, 1477075035443, 'System'),
	   ('6', 'Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX','6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX',3,2, 1477075035443, 'System'),
	   ('7', 'Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX','7 - Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX',3,2, 1477075035443, 'System');





INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES ('00', '00: Tributada Normal','00: Tributada Normal',23,2, 1477075035443, 'System'),
	   ('10', '10: Simples Nacional','10: Simples Nacional',23,2, 1477075035443, 'System'),




	   ('01','Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)','01: Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)',8,2, 1477075035443, 'System'),
	   ('02','Operação tributável (BC = valor da operação (alíquota diferenciada)','02: Operação tributável (BC = valor da operação (alíquota diferenciada)',8,2, 1477075035443, 'System'),
	   ('03','Operação tributável (BC = quant. x alíq. por unidade de produto)','03: Operação tributável (BC = quant. x alíq. por unidade de produto)',8,2, 1477075035443, 'System'),
	   ('04','Operação tributável (tributação monofásica, alíquota zero)','04: Operação tributável (tributação monofásica, alíquota zero)',8,2, 1477075035443, 'System'),
	   ('06','Operação tributável (alíquota zero)','06: Operação tributável (alíquota zero)',8,2, 1477075035443, 'System'),
	   ('07','Operação isenta da contribuição','07: Operação isenta da contribuição',8,2, 1477075035443, 'System'),
	   ('08','Operação sem incidência da contribuição','08: Operação sem incidência da contribuição',8,2, 1477075035443, 'System'),
	   ('09','Operação com suspensão da contribuição','09: Operação com suspensão da contribuição',8,2, 1477075035443, 'System'),
	   ('49','Outras Operações de Saída','49: Outras Operações de Saída',8,2, 1477075035443, 'System'),
	   ('50','Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno','50: Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('51','Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno','51: Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('52','Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação','52: Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação',8,2, 1477075035443, 'System'),
	   ('53','Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno','53: Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('54','Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação','54: Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação',8,2, 1477075035443, 'System'),
	   ('55','Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação','55: Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação',8,2, 1477075035443, 'System'),
	   ('56','Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','56: Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',8,2, 1477075035443, 'System'),
	   ('60','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno','60: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('61','Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno','61: Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('62','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação','62: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação',8,2, 1477075035443, 'System'),
	   ('63','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno','63: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno',8,2, 1477075035443, 'System'),
	   ('64','Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação','64: Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação',8,2, 1477075035443, 'System'),
	   ('65','Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação','65: Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação',8,2, 1477075035443, 'System'),
	   ('66','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','66: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',8,2, 1477075035443, 'System'),
	   ('67','Crédito Presumido - Outras Operações','67: Crédito Presumido - Outras Operações',8,2, 1477075035443, 'System'),
	   ('70','Operação de Aquisição sem Direito a Crédito','70: Operação de Aquisição sem Direito a Crédito',8,2, 1477075035443, 'System'),
	   ('71','Operação de Aquisição com Isenção','71: Operação de Aquisição com Isenção',8,2, 1477075035443, 'System'),
	   ('72','Operação de Aquisição com Suspensão','72: Operação de Aquisição com Suspensão',8,2, 1477075035443, 'System'),
	   ('73','Operação de Aquisição a Alíquota Zero','73: Operação de Aquisição a Alíquota Zero',8,2, 1477075035443, 'System'),
	   ('74','Operação de Aquisição sem Incidência da Contribuição','74: Operação de Aquisição sem Incidência da Contribuição',8,2, 1477075035443, 'System'),
	   ('75','Operação de Aquisição por Substituição Tributária','75: Operação de Aquisição por Substituição Tributária',8,2, 1477075035443, 'System'),
	   ('98','Outras Operações de Entrada','98: Outras Operações de Entrada',8,2, 1477075035443, 'System'),
	   ('99','Outras operações','99: Outras operações',8,2, 1477075035443, 'System'),

	   ('01','Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)','01: Operação tributável (BC = Operação alíq. normal (cumul./não cumul.)',9,2, 1477075035443, 'System'),
	   ('02','02: Operação tributável (BC = valor da operação (alíquota diferenciada)','02: Operação tributável (BC = valor da operação (alíquota diferenciada)',9,2, 1477075035443, 'System'),
	   ('03','Operação tributável (BC = quant. x alíq. por unidade de produto)','03: Operação tributável (BC = quant. x alíq. por unidade de produto)',9,2, 1477075035443, 'System'),
	   ('04','Operação tributável (tributação monofásica, alíquota zero)','04: Operação tributável (tributação monofásica, alíquota zero)',9,2, 1477075035443, 'System'),
	   ('06','Operação tributável (alíquota zero)','06: Operação tributável (alíquota zero)',9,2, 1477075035443, 'System'),
	   ('07','Operação isenta da contribuição','07: Operação isenta da contribuição',9,2, 1477075035443, 'System'),
	   ('08','Operação sem incidência da contribuição','08: Operação sem incidência da contribuição',9,2, 1477075035443, 'System'),
	   ('09','Operação com suspensão da contribuição','09: Operação com suspensão da contribuição',9,2, 1477075035443, 'System'),
	   ('49','Outras Operações de Saída','49: Outras Operações de Saída',9,2, 1477075035443, 'System'),
	   ('50','Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno','50: Direito a Crédito. Vinculada Exclusivamente a Receita Tributada no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('51','Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno','51: Direito a Crédito. Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('52','Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação','52: Direito a Crédito. Vinculada Exclusivamente a Receita de Exportação',9,2, 1477075035443, 'System'),
	   ('53','Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno','53: Direito a Crédito. Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('54','Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação','54: Direito a Crédito. Vinculada a Receitas Tributadas no Mercado Interno e de Exportação',9,2, 1477075035443, 'System'),
	   ('55','Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação','55: Direito a Crédito. Vinculada a Receitas Não-Trib. no Mercado Interno e de Exportação',9,2, 1477075035443, 'System'),
	   ('56','Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','56: Direito a Crédito. Vinculada a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',9,2, 1477075035443, 'System'),
	   ('60','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno','60: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita Tributada no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('61','Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno','61: Créd. Presumido. Aquisição Vinc. Exclusivamente a Rec. Não-Trib. no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('62','Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação','62: Créd. Presumido. Aquisição Vinc. Exclusivamente a Receita de Exportação',9,2, 1477075035443, 'System'),
	   ('63','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno','63: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. no Mercado Interno',9,2, 1477075035443, 'System'),
	   ('64','Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação','64: Créd. Presumido. Aquisição Vinc. a Rec. Trib. no Mercado Interno e de Exportação',9,2, 1477075035443, 'System'),
	   ('65','Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação','65: Créd. Presumido. Aquisição Vinc. a Rec. Não-Trib. Mercado Interno e Exportação',9,2, 1477075035443, 'System'),
	   ('66','Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação','66: Créd. Presumido. Aquisição Vinc. a Rec. Trib. e Não-Trib. Mercado Interno e Exportação',9,2, 1477075035443, 'System'),
	   ('67','Crédito Presumido - Outras Operações','67: Crédito Presumido - Outras Operações',9,2, 1477075035443, 'System'),
	   ('70','Operação de Aquisição sem Direito a Crédito','70: Operação de Aquisição sem Direito a Crédito',9,2, 1477075035443, 'System'),
	   ('71','Operação de Aquisição com Isenção','71: Operação de Aquisição com Isenção',9,2, 1477075035443, 'System'),
	   ('72','Operação de Aquisição com Suspensão','72: Operação de Aquisição com Suspensão',9,2, 1477075035443, 'System'),
	   ('73','Operação de Aquisição a Alíquota Zero','73: Operação de Aquisição a Alíquota Zero',9,2, 1477075035443, 'System'),
	   ('74','Operação de Aquisição sem Incidência da Contribuição','74: Operação de Aquisição sem Incidência da Contribuição',9,2, 1477075035443, 'System'),
	   ('75','Operação de Aquisição por Substituição Tributária','75: Operação de Aquisição por Substituição Tributária',9,2, 1477075035443, 'System'),
	   ('98','Outras Operações de Entrada','98: Outras Operações de Entrada',9,2, 1477075035443, 'System'),
	   ('99','Outras operações','99: Outras operações',9,2, 1477075035443, 'System');


	   INSERT INTO pagina(id,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (5,'Pedido Vendas', 0, 101, 1477075035443, 'System');




INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES ('0', '0 - Emitente','0 - Emitente',26,5, 1477075035443, 'System'),
	   ('1', '1 - Destinatário','1 - Destinatário',26,5, 1477075035443, 'System'),
	   ('2', '2 - Terceiros','2 - Terceiros',26,5, 1477075035443, 'System'),
	   ('9', '9 - Sem frete','9 - Sem frete',26,5, 1477075035443, 'System');


INSERT INTO pagina(id,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (10,'Nota Fiscal', 0, 100, 1477075035443, 'System');


INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
       (1001,'0', '0 - Pedido Vendas','0 - Pedido Vendas',1001,10, 1477075035443, 'System'),
	   (1002,'1', '1 - Orçamento','1 - Orçamento',1001,10, 1477075035443, 'System'),
	   (1003,'2', '2 - NF-e Saida','2 - NF-e Saida',1001,10, 1477075035443, 'System'),
	   (1004,'3', '3 - NF-e Entrada','3 - NF-e Entrada',1001,10, 1477075035443, 'System'),
	   (1005,'4', '4 - Pedido Compra','4 - Pedido Compra',1001,10, 1477075035443, 'System');



	   INSERT INTO pagina(id,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (10,'Nota Fiscal', 0, 100, 1477075035443, 'System');


    INSERT INTO pagina(id,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (2,'Produto', 0, 100, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (131,'ORIGEM', 'ORIGEM', 1477075035443, 'System'),
	(132,'EXCECAO TAB IPI', 'EXCECAO TAB IPI' , 1477075035443, 'System'),
	(133,'TIPO OPERACAO', 'TIPO OPERACAO' , 1477075035443, 'System'),
	(134,'TIPO COMBUSTIVEL', 'TIPO COMBUSTIVEL' , 1477075035443, 'System'),
	(135,'TIPO VEICULO', 'TIPO VEICULO' , 1477075035443, 'System'),
	(136,'ESPECIE VEICULO', 'ESPECIE VEICULO' , 1477075035443, 'System'),
	(137,'CONDICAO CHASSI', 'CONDICAO CHASSI' , 1477075035443, 'System'),
	(138,'CONDICAO', 'CONDICAO' , 1477075035443, 'System'),
	(139,'COR DENATRAN', 'COR DENATRAN' , 1477075035443, 'System'),
	(140,'RESTRICAO', 'RESTRICAO' , 1477075035443, 'System'),

	(141,'TIPO ARMA', 'TIPO ARMA' , 1477075035443, 'System');


INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
    	('0', '0 - Nacional, exceto as indicadas nos códigos de 3, 4, 5 e 8','0 - Nacional, exceto as indicadas nos códigos de 3, 4, 5 e 8',131,2, 1477075035443, 'System'),
    	('1', '1 - Estrangeira, importação direta, exceto a indicada no código 6','1 - Estrangeira, importação direta, exceto a indicada no código 6',131,2, 1477075035443, 'System'),
    	('2', '2 - Estrangeira, adquirida no mercado interno, exceto a indicada no código 7','2 - Estrangeira, adquirida no mercado interno, exceto a indicada no código 7',131,2, 1477075035443, 'System'),
    	('3', '3 - Nacional, mercadoria ou bem com Conteúdo de Importação maior que 40% e menor ou igual a 70%','3 - Nacional, mercadoria ou bem com Conteúdo de Importação maior que 40% e menor ou igual a 70%',131,2, 1477075035443, 'System'),
	('4', '4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes','4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes',131,2, 1477075035443, 'System'),
	('5', '5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%','5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%',131,2, 1477075035443, 'System'),
	('6', '6 - Estrangeira, importação direta, sem similar nacional, constante na lista da CAMEX e gás natural','6 - Estrangeira, importação direta, sem similar nacional, constante na lista da CAMEX e gás natural',131,2, 1477075035443, 'System'),
	('7', '7 - Estrangeira, adquir. merc. interno, sem similar nacional, na lista da CAMEX e gás natural','7 - Estrangeira, adquir. merc. interno, sem similar nacional, na lista da CAMEX e gás natural',131,2, 1477075035443, 'System'),
	('8', '8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%','8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%',131,2, 1477075035443, 'System'),

	('1', '01','01',132,2, 1477075035443, 'System'),
	('2', '02','02',132,2, 1477075035443, 'System'),
	('3', '03','03',132,2, 1477075035443, 'System'),
	('4', '04','04',132,2, 1477075035443, 'System'),
	('5', '05','05',132,2, 1477075035443, 'System'),
	('6', '06','06',132,2, 1477075035443, 'System'),
	('7', '07','07',132,2, 1477075035443, 'System'),

	('01', 'Alcool','Alcool',134,2, 1477075035443, 'System'),
	('02', 'Gasolina','Gasolina',134,2, 1477075035443, 'System'),
	('03', 'Diesel','Diesel',134,2, 1477075035443, 'System'),
	('04', 'Gasogéanio','Gasogéanio',134,2, 1477075035443, 'System'),
	('05', 'Gas Metano','Gas Metano',134,2, 1477075035443, 'System'),
	('06', 'Eletrico (fonte interna)','Eletrico (fonte interna)',134,2, 1477075035443, 'System'),
	('07', 'Eletrico (fonte externa)','Eletrico (fonte externa)',134,2, 1477075035443, 'System'),
	('08', 'Gasol/Gas natural/Combustivel','Gasol/Gas natural/Combustivel',134,2, 1477075035443, 'System'),
	('09', 'Alcool/Gas natural','Alcool/Gas natural',134,2, 1477075035443, 'System'),
	('10', 'Diesel/Gas natural','Diesel/Gas natural',134,2, 1477075035443, 'System'),
	('11', 'Vide campo observaçao','Vide campo observaçao',134,2, 1477075035443, 'System'),
	('12', 'Alcool/Gas natural veicular','Alcool/Gas natural veicular',134,2, 1477075035443, 'System'),
	('13', 'Gasolina/Gas natural veicular','Gasolina/Gas natural veicular',134,2, 1477075035443, 'System'),
	('14', 'Diesel/Gas natural veicular','Diesel/Gas natural veicular',134,2, 1477075035443, 'System'),
	('15', 'Gas natural veicular','Gas natural veicular',134,2, 1477075035443, 'System'),
	('16', 'Alcool/Gasolina','Alcool/Gasolina',134,2, 1477075035443, 'System'),
	('17', 'Gasolina/Alcool/Gas natural','Gasolina/Alcool/Gas natural',134,2, 1477075035443, 'System'),
	('18', 'Gasolina/Eletrico','Gasolina/Eletrico',134,2, 1477075035443, 'System'),

	('0', 'Outros','Outros',133,2, 1477075035443, 'System'),
	('1', 'Venda concessionária','Venda concessionária',133,2, 1477075035443, 'System'),
	('2', 'Faturamento direto consumidor final','Faturamento direto consumidor final',133,2, 1477075035443, 'System'),
	('3', 'Venda direta grandes consumidores','Venda direta grandes consumidores',133,2, 1477075035443, 'System'),

	('06', 'Automóvel','Automóvel',135,2, 1477075035443, 'System'),
	('14', 'Caminhão','Caminhão',135,2, 1477075035443, 'System'),
	('13', 'Caminhoneta','Caminhoneta',135,2, 1477075035443, 'System'),
	('24', 'Carga','Carga',135,2, 1477075035443, 'System'),
	('02', 'Ciclomotor','Ciclomotor',135,2, 1477075035443, 'System'),
	('22', 'Especial Ônibus','Especial Ônibus',135,2, 1477075035443, 'System'),
	('07', 'Microonibus','Microonibus',135,2, 1477075035443, 'System'),
	('23', 'Misto','Misto',135,2, 1477075035443, 'System'),
	('04', 'Motociclo','Motociclo',135,2, 1477075035443, 'System'),
	('03', 'Motoneta','Motoneta',135,2, 1477075035443, 'System'),
	('08', 'Ônibus','Ônibus',135,2, 1477075035443, 'System'),
	('10', 'Reboque','Reboque',135,2, 1477075035443, 'System'),
	('05', 'Triciclo','Triciclo',135,2, 1477075035443, 'System'),
	('17', 'Trator','Trator',135,2, 1477075035443, 'System'),

	('1', 'Passageiro','Passageiro',136,2, 1477075035443, 'System'),
	('2', 'Carga','Carga',136,2, 1477075035443, 'System'),
	('3', 'Misto','Misto',136,2, 1477075035443, 'System'),
	('4', 'Corrida','Corrida',136,2, 1477075035443, 'System'),
	('5', 'Tração','Tração',136,2, 1477075035443, 'System'),
	('6', 'Especial','Especial',136,2, 1477075035443, 'System'),
	('7', 'Coleção','Coleção',136,2, 1477075035443, 'System'),

	('N', 'Normal','Normal',137,2, 1477075035443, 'System'),
	('R', 'Remarcado','Remarcado',137,2, 1477075035443, 'System'),

	('1', 'Acabado','Acabado',138,2, 1477075035443, 'System'),
	('2', 'Inacabado','Inacabado',138,2, 1477075035443, 'System'),
	('3', 'Semi-acabado','Semi-acabado',138,2, 1477075035443, 'System'),

	    ('01', 'Amarela','Amarela',139,2, 1477075035443, 'System'),
	    ('02', 'Azul','Azul',139,2, 1477075035443, 'System'),
	    ('03', 'Bege','Bege',139,2, 1477075035443, 'System'),
	    ('04', 'Branca','Branca',139,2, 1477075035443, 'System'),
	    ('05', 'Cinza','Cinza',139,2, 1477075035443, 'System'),
	    ('06', 'Dourada','Dourada',139,2, 1477075035443, 'System'),
	    ('07', 'Grená','Grená',139,2, 1477075035443, 'System'),
	    ('08', 'Laranja','Laranja',139,2, 1477075035443, 'System'),
	    ('09', 'Marrom','Marrom',139,2, 1477075035443, 'System'),
	    ('10', 'Prata','Prata',139,2, 1477075035443, 'System'),
	    ('11', 'Preta','Preta',139,2, 1477075035443, 'System'),
	    ('12', 'Rosa','Rosa',139,2, 1477075035443, 'System'),
	    ('13', 'Roxa','Roxa',139,2, 1477075035443, 'System'),
	    ('14', 'Verde','Verde',139,2, 1477075035443, 'System'),
	    ('15', 'Vermelha','Vermelha',139,2, 1477075035443, 'System'),
	    ('16', 'Fantasia','Fantasia',139,2, 1477075035443, 'System'),

('0', 'Não há','Não há',140,2, 1477075035443, 'System'),
('1', 'Alienação fiduciária','Alienação fiduciária',140,2, 1477075035443, 'System'),
('2', 'Arrendamento mercantil','Arrendamento mercantil',140,2, 1477075035443, 'System'),
('3', 'Reserva dominio','Reserva dominio',140,2, 1477075035443, 'System'),
('4', 'Penhor','Penhor',140,2, 1477075035443, 'System'),
('9', 'Outras','Outras',140,2, 1477075035443, 'System'),

('0', 'Permitido','Permitido',141,2, 1477075035443, 'System'),
('1', 'Restrito','Restrito',141,2, 1477075035443, 'System');

INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
       (1001,'0', '0 - Pedido Vendas','0 - Pedido Vendas',1001,10, 1477075035443, 'System'),
	   (1002,'1', '1 - Orçamento','1 - Orçamento',1001,10, 1477075035443, 'System'),
	   (1003,'2', '2 - NF-e Saida','2 - NF-e Saida',1001,10, 1477075035443, 'System'),
	   (1004,'3', '3 - NF-e Entrada','3 - NF-e Entrada',1001,10, 1477075035443, 'System'),
	   (1005,'4', '4 - Pedido Compra','4 - Pedido Compra',1001,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1,'NFNotaInfoItemModalidadeBCICMSST', 'NF NOTA INFO ITEM MODALIDADE BC ICMS ST', 1477075035443, 'System'),
	(2,'NFNotaInfoItemModalidadeBCICMS', 'NF NOTA INFO ITEM MODALIDADE BC ICMS', 1477075035443, 'System'),
	(3,'NFNotaInfoImpostoTributacaoISSQN', 'NF NOTA INFO IMPOSTO TRIBUTACAO ISSQN', 1477075035443, 'System'),
	(4,'NFNotaInfoImpostoTributacaoICMS', 'NF NOTAINFO IMPOSTO TRIBUTACAO ICMS', 1477075035443, 'System'),
	(5,'NFNotaInfoEspecieVeiculo', 'NF NOTA INFO ESPECIE VEICULO', 1477075035443, 'System'),
	(6,'NFNotaInfoCombustivelTipo', 'NF NOTA INFO COMBUSTIVEL TIPO', 1477075035443, 'System'),

	(16,'TIPO FRETE', 'TIPO FRETE', 1477075035443, 'System'),
	(17,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL', 1477075035443, 'System'),
	(18,'NF AMBIENTE', 'NF AMBIENTE', 1477075035443, 'System'),
	(19,'NF MODALIDADE FRETE', 'NF MODALIDADE FRETE', 1477075035443, 'System'),
	(20,'NFModelo', 'NF MODELO', 1477075035443, 'System'),
	(21,'ICMS - SITUAÇÃO TRIBUTARIA SIMPLES NACIONAL', 'ICMS - SITUAÇÃO TRIBUTARIA SIMPLES NACIONAL', 1477075035443, 'System'),
	(22,'ICMS - SITUAÇÃO TRIBUTARIA TRIBUTACAO NORMAL', 'ICMS - SITUAÇÃO TRIBUTARIA TRIBUTACAO NORMAL' , 1477075035443, 'System'),
	(23,'ICMS - REGINE', 'ICMS - REGIME' , 1477075035443, 'System'),
	(7,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL', 1477075035443, 'System'),
	(8,'ICMS - SITUAÇÃO TRIBUTARIA ', 'ICMS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	(9,'ICMS - ORIGEM', 'ICMS - ORIGEM', 1477075035443, 'System'),
	(10,'ICMS - MODALIDADE BC', 'MODALIDADE BC', 1477075035443, 'System'),
	(11,'ICMS - MOTIVO DESONERAÇÃO', 'ICMS - MOTIVO DESONERAÇÃO', 1477075035443, 'System'),
	(12,'IPI - SITUAÇÃO TRIBUTARIA', 'IPI - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	(13,'TIPO CALCULO', 'TIPO CALCULO', 1477075035443, 'System'),
	(14,'PIS - SITUAÇÃO TRIBUTARIA', 'PIS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	(15,'COFINS - SITUAÇÃO TRIBUTARIA', 'COFINS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1001,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL', 1477075035443, 'System');

    INSERT INTO doisvalortype(tipo, descricao,  create_date, create_user)
    VALUES ('ICMS - SITUAÇÃO TRIBUTARIA ', 'ICMS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('ICMS - ORIGEM', 'ICMS - ORIGEM', 1477075035443, 'System'),
	('ICMS - MODALIDADE BC', 'MODALIDADE BC', 1477075035443, 'System'),
	('ICMS - MOTIVO DESONERAÇÃO', 'ICMS - MOTIVO DESONERAÇÃO', 1477075035443, 'System'),
	('IPI - SITUAÇÃO TRIBUTARIA', 'IPI - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('TIPO CALCULO', 'TIPO CALCULO', 1477075035443, 'System'),
	('PIS - SITUAÇÃO TRIBUTARIA', 'PIS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('COFINS - SITUAÇÃO TRIBUTARIA', 'COFINS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (26,'TIPO FRETE', 'TIPO FRETE', 1477075035443, 'System');
INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1001,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL', 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1002,'NF AMBIENTE', 'NF AMBIENTE', 1477075035443, 'System');

	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
       (1006,'1', '1 - Produção','1 - Produção',1002,10, 1477075035443, 'System'),
	   (1007,'2', '2 - Homologação','2 - Homologação',1002,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1003,'NF MODALIDADE FRETE', 'NF MODALIDADE FRETE', 1477075035443, 'System');

	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
       (1008,'0', 'POR_CONTA_DO_EMITENTE','Por conta do emitente',1003,10, 1477075035443, 'System'),
	   (1009,'1', 'POR_CONTA_DO_DESTINATARIO_REMETENTE','Por conta do destinatário remetente',1003,10, 1477075035443, 'System'),
	   (1010,'2', 'POR_CONTA_DE_TERCEIROS','Por conta de terceiros',1003,10, 1477075035443, 'System'),
	   (1011,'9', 'SEM_FRETE','Sem frete',1003,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1004,'NFModelo', 'NF MODELO', 1477075035443, 'System');


	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
       (1012,'55', 'NFE','NF-e',1004,10, 1477075035443, 'System'),
	   (1013,'65', 'NFCE','NFC-e',1004,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1005,'NFNotaInfoCombustivelTipo', 'NF NOTA INFO COMBUSTIVEL TIPO', 1477075035443, 'System');

	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1014,'01', 'ALCOOL','\u00c1lcool',1005,10, 1477075035443, 'System'),
	(1015,'02', 'GASOLINA','Gasolina',1005,10, 1477075035443, 'System'),
	(1016,'03', 'DIESEL','Diesel',1005,10, 1477075035443, 'System'),
	(1017,'04', 'GASOGENIO','Gasog\u00eanio',1005,10, 1477075035443, 'System'),
	(1018,'05', 'GAS_METANO','G\u00e1s metano',1005,10, 1477075035443, 'System'),
	(1019,'06', 'ELETRICO_FONTE_INTERNA','"El\u00e9trico (fonte interna)',1005,10, 1477075035443, 'System'),
	(1020,'07', 'ELETRICO_FONTE_EXTERNA','El\u00e9trico (fonte externa)',1005,10, 1477075035443, 'System'),
	(1021,'08', 'GASOL_GAS_NATURAL_COMBUSTIVEL','Gasol/G\u00e1s natural/Combust\u00edvel',1005,10, 1477075035443, 'System'),
	(1022,'09', 'ALCOOL_GAS_NATURAL','\u00c1lcool/G\u00e1s natural',1005,10, 1477075035443, 'System'),
	(1023,'10', 'DIESEL_GAS_NATURAL','Diesel/G\u00e1s natural',1005,10, 1477075035443, 'System'),
	(1024,'11', 'VIDE_CAMPO_OBSERVACAO','Vide campo observa\u00e7\u00e3o',1005,10, 1477075035443, 'System'),
	(1025,'12', 'ALCOOL_GAS_NATURAL_VEICULAR','\u00c1lcool/G\u00e1s natural veicular',1005,10, 1477075035443, 'System'),
	(1026,'13', 'GASOLINA_GAS_NATURAL_VEICULAR','Gasolina/G\u00e1s natural veicular',1005,10, 1477075035443, 'System'),
	(1027,'14', 'DIESEL_GAS_NATURAL_VEICULAR','Diesel/G\u00e1s natural veicular',1005,10, 1477075035443, 'System'),
	(1028,'15', 'GAS_NATURAL_VEICULAR','G\u00e1s natural veicular',1005,10, 1477075035443, 'System'),
	(1029,'16', 'ALCOOL_GASOLINA','\u00c1lcool/Gasolina',1005,10, 1477075035443, 'System'),
	(1030,'17', 'GASOLINA_ALCOOL_GAS_NATURAL','Gasolina/\u00c1lcool/G\u00e1s natural',1005,10, 1477075035443, 'System'),
	(1031,'18', 'GASOLINA_ELETRICO','Gasolina/El\u00e9trico',1005,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1006,'NFNotaInfoEspecieVeiculo', 'NF NOTA INFO ESPECIE VEICULO', 1477075035443, 'System');


INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1032,'1', 'PASSAGEIRO','Passageiro',1006,10, 1477075035443, 'System'),
	(1033,'2', 'CARGA','Carga',1006,10, 1477075035443, 'System'),
	(1034,'3', 'MISTO','Misto',1006,10, 1477075035443, 'System'),
	(1035,'4', 'CORRIDA','Corrida',1006,10, 1477075035443, 'System'),
	(1036,'5', 'TRACAO','Tração',1006,10, 1477075035443, 'System'),
	(1037,'6', 'ESPECIAL','Especial',1006,10, 1477075035443, 'System'),
	(1038,'7', 'COLECAO','Coleção',1006,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1007,'NFNotaInfoImpostoTributacaoICMS', 'NF NOTAINFO IMPOSTO TRIBUTACAO ICMS', 1477075035443, 'System');

	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1039,'00', 'TRIBUTACAO_INTEGRALMENTE','Tributada integralmente',1007,10, 1477075035443, 'System'),
	(1040,'10', 'TRIBUTADA_COM_COBRANCA_ICMS_POR_SUBSTITUICAO_TRIBUTARIA','Tributada com cobran\u00e7a de ICMS por ST',1007,10, 1477075035443, 'System'),
	(1041,'20', 'COM_REDUCAO_BASE_CALCULO','Com redu\u00e7\u00e3o da base de c\u00e1lculo',1007,10, 1477075035443, 'System'),
	(1042,'30', 'ISENTA_OU_NAO_TRIBUTADA_COM_COBRANCA_ICMS_POR_SUBSTITUICAO_TRIBUTARIA','Isenta ou n\u00e3o tributada com cobran\u00e7a de ICMS por ST',1007,10, 1477075035443, 'System'),
	(1043,'40', 'ISENTA','Isenta',1007,10, 1477075035443, 'System'),
	(1044,'41', 'NAO_TRIBUTADO','N\u00e3o tributada',1007,10, 1477075035443, 'System'),
	(1045,'50', 'SUSPENSAO','Suspens\u00e3o',1007,10, 1477075035443, 'System'),
	(1046,'51', 'DIFERIMENTO','Diferimento',1007,10, 1477075035443, 'System'),
	(1047,'60', 'ICMS_COBRADO_ANTERIORMENTE_POR_SUBSTITUICAO_TRIBUTARIA','ICMS cobrado anteriormente por ST',1007,10, 1477075035443, 'System'),
	(1048,'70', 'COM_REDUCAO_BASE_CALCULO_COBRANCA_ICMS_POR_SUBSTITUICAO_TRIBUTARIA_ICMS_SUBSTITUICAO_TRIBUTARIA','Com redu\u00e7\u00e3o da base de c\u00e1lculo/Cobran\u00e7a ICMS por ST/ICMS ST',1007,10, 1477075035443, 'System'),
	(1049,'90', 'OUTROS','Outros',1007,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1008,'NFNotaInfoImpostoTributacaoISSQN', 'NF NOTA INFO IMPOSTO TRIBUTACAO ISSQN', 1477075035443, 'System');

INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1050,'N', 'NORMAL','Normal',1008,10, 1477075035443, 'System'),
	(1051,'R', 'RETIDA','Retida',1008,10, 1477075035443, 'System'),
	(1052,'S', 'SUBSTITUTA','Substituta',1008,10, 1477075035443, 'System'),
	(1053,'I', 'ISENTA','Isenta',1008,10, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1009,'NFNotaInfoItemModalidadeBCICMS', 'NF NOTA INFO ITEM MODALIDADE BC ICMS', 1477075035443, 'System');

INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1054,'0', 'MVA','Margem de valor agregado',1009,10, 1477075035443, 'System'),
	(1055,'1', 'PAUTA','Pauta',1009,10, 1477075035443, 'System'),
	(1056,'2', 'PRECO_TABELADO_MAXIMO','Pre\u00e7o tabelado m\u00e1ximo',1009,10, 1477075035443, 'System'),
	(1057,'3', 'VALOR_OPERACAO','Valor da opera\u00e7\u00e3o',1009,10, 1477075035443, 'System');

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1010,'NFNotaInfoItemModalidadeBCICMSST', 'NF NOTA INFO ITEM MODALIDADE BC ICMS ST', 1477075035443, 'System');

	INSERT INTO doisvalor(id,value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
	(1058,'0', 'PRECO_TABELADO','Pre\u00e7o Tabelado',1010,10, 1477075035443, 'System'),
	(1059,'1', 'LISTA_NEGATIVA','Lista Negativa',1010,10, 1477075035443, 'System'),
	(1060,'2', 'LISTA_POSITIVA','Lista Positiva',1010,10, 1477075035443, 'System'),
	(1061,'3', 'LISTA_NEUTRA','Lista Neutra',1010,10, 1477075035443, 'System'),
	(1062,'4', 'MARGEM_VALOR_AGREGADO','Margem Valor Agregado',1010,10, 1477075035443, 'System'),
	(1063,'5', 'PAUTA','Pauta',1010,10, 1477075035443, 'System'),

INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (1001,'TIPO NOTA FISCAL', 'TIPO NOTA FISCAL', 1477075035443, 'System');



    INSERT INTO pagina(id ,pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES (103,'Processo', 0, 100, 1477075035443, 'System');


INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)VALUES
(142,'STATUS', 'STATUS' , 1477075035443, 'System'),
(143,'TIPO ENVOLVIMENTO', 'TIPO ENVOLVIMENTO' , 1477075035443, 'System'),
(144,'ENVOLVIMENTO', 'ENVOLVIMENTO' , 1477075035443, 'System'),
(145,'SITUACAO', 'SITUACAO' , 1477075035443, 'System'),
(146,'INSTANCIA', 'INSTANCIA' , 1477075035443, 'System'),
(147,'JUSTICA', 'JUSTICA' , 1477075035443, 'System'),
(148,'TRIBUNAL', 'TRIBUNAL' , 1477075035443, 'System'),
(149,'LOCALIDADE', 'LOCALIDADE' , 1477075035443, 'System'),
(150,'CAPITUR POR', 'CAPITUR POR' , 1477075035443, 'System'),
(151,'CAPTURA AUTOMATICA', 'CAPTURA AUTOMATICA' , 1477075035443, 'System');


INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES
('4', 'Arquivado','Arquivado',142,103, 1477075035443, 'System'),
('1', 'Ativo','Ativo',142,103, 1477075035443, 'System'),
('5', 'Em grau de recurso','Em grau de recurso',142,103, 1477075035443, 'System'),
('3', 'Encerrado','Encerrado',142,103, 1477075035443, 'System'),
('2', 'Suspenso','Suspenso',142,103, 1477075035443, 'System'),

('PARTE_ATIVA', 'Parte Ativa','Parte Ativa',143,103, 1477075035443, 'System'),
('PARTE_PASSIVA', 'Parte Passiva','Parte Passiva',143,103, 1477075035443, 'System'),
('TERCEIRO', 'Terceiro','Terceiro',143,103, 1477075035443, 'System'),
('ASSISTENTE', 'Assistente','Assistente',143,103, 1477075035443, 'System'),
('FISCAL', 'Fiscal','Fiscal',143,103, 1477075035443, 'System'),
('TESTEMUNHA', 'Testemunha','Testemunha',143,103, 1477075035443, 'System'),
('VITIMA', 'Vítima','Vítima',143,103, 1477075035443, 'System'),
('OUTROS', 'Outros','Outros',143,103, 1477075035443, 'System'),

('63', 'Acusador','Acusador',144,103, 1477075035443, 'System'),
('2', 'Agravante','Agravante',144,103, 1477075035443, 'System'),
('3', 'Apelante','Apelante',144,103, 1477075035443, 'System'),
('1', 'Autor','Autor',144,103, 1477075035443, 'System'),
('4', 'Embargante','Embargante',144,103, 1477075035443, 'System'),
('5', 'Excipiente','Excipiente',144,103, 1477075035443, 'System'),
('6', 'Exequente','Exequente',144,103, 1477075035443, 'System'),
('7', 'Impetrante','Impetrante',144,103, 1477075035443, 'System'),
('8', 'Impugnante','Impugnante',144,103, 1477075035443, 'System'),
('9', 'Interpelante','Interpelante',144,103, 1477075035443, 'System'),
('10', 'Inventariante','Inventariante',144,103, 1477075035443, 'System'),
('11', 'Notificante','Notificante',144,103, 1477075035443, 'System'),
('12', 'Opoente','Opoente',144,103, 1477075035443, 'System'),
('13', 'Reclamante','Reclamante',144,103, 1477075035443, 'System'),
('14', 'Reconvinte','Reconvinte',144,103, 1477075035443, 'System'),
('15', 'Recorrente','Recorrente',144,103, 1477075035443, 'System'),
('61', 'Requerente','Requerente',144,103, 1477075035443, 'System'),
('16', 'Sujeito Ativo','Sujeito Ativo',144,103, 1477075035443, 'System'),

('2', 'Conselho Nacional de Justiça','Conselho Nacional de Justiça',145,103, 1477075035443, 'System'),
('8', 'Justiça dos Estados e do Distrito Federal e Territórios','Justiça dos Estados e do Distrito Federal e Territórios',143,103, 1477075035443, 'System'),
('5', 'Justiça do Trabalho','Justiça do Trabalho',145,103, 1477075035443, 'System'),
('6', 'Justiça Eleitoral','Justiça Eleitoral',145,103, 1477075035443, 'System'),
('4', 'Justiça Federal','Justiça Federal',145,103, 1477075035443, 'System'),
('7', 'Justiça Militar da União','Justiça Militar da União',145,103, 1477075035443, 'System'),
('9', 'Justiça Militar Estadual','Justiça Militar Estadual',145,103, 1477075035443, 'System'),
('3', 'Superior Tribunal de Justiça','Superior Tribunal de Justiça',145,103, 1477075035443, 'System'),
('1', 'Supremo Tribunal Federal','Supremo Tribunal Federal',145,103, 1477075035443, 'System'),

('PRIMEIRA_INSTANCIA', '1ª Instância','1ª Instância',146,103, 1477075035443, 'System'),
('SEGUNDA_INSTANCIA', '2ª Instância','2ª Instância',146,103, 1477075035443, 'System'),
('TERCEIRA_INSTANCIA', '3ª Instância','3ª Instância',146,103, 1477075035443, 'System'),
('QUARTA_INSTANCIA', '4ª Instância','4ª Instância',146,103, 1477075035443, 'System'),

('1', 'Supremo Tribunal Federal','Supremo Tribunal Federal',147,103, 1477075035443, 'System'),
('3', 'Superior Tribunal de Justiça','Superior Tribunal de Justiça',147,103, 1477075035443, 'System'),
('4', 'Justiça Federal','Justiça Federal',147,103, 1477075035443, 'System'),
('5', 'Justiça do Trabalho','Justiça do Trabalho',147,103, 1477075035443, 'System'),
('8', 'Justica dos Estados e do Distrito Federal e Territórios','Justica dos Estados e do Distrito Federal e Territórios',147,103, 1477075035443, 'System'),

('1', 'Tribunal de Justiça do Acre','Tribunal de Justiça do Acre',148,103, 1477075035443, 'System'),
('7', 'Tribunal de Justiça de Alagoas','Tribunal de Justiça de Alagoas',148,103, 1477075035443, 'System'),
('8', 'Tribunal de Justiça do Amazonas','Tribunal de Justiça do Amazonas',148,103, 1477075035443, 'System'),
('11', 'Tribunal de Justiça da Bahia','Tribunal de Justiça da Bahia',148,103, 1477075035443, 'System'),
('16', 'Tribunal de Justiça do Ceará','Tribunal de Justiça do Ceará',148,103, 1477075035443, 'System'),
('53', 'Tribunal de Justiça do Distrito Federal e dos Territórios - DF','Tribunal de Justiça do Distrito Federal e dos Territórios - DF',148,103, 1477075035443, 'System'),
('19', 'Tribunal de Justiça do Espírito Santo','Tribunal de Justiça do Espírito Santo',148,103, 1477075035443, 'System'),
('20', 'Tribunal de Justiça de Goiás','Tribunal de Justiça de Goiás',148,103, 1477075035443, 'System'),
('22', 'Tribunal de Justiça do Maranhão','Tribunal de Justiça do Maranhão',148,103, 1477075035443, 'System'),
('29', 'Tribunal de Justiça de Mato Grosso','Tribunal de Justiça de Mato Grosso',148,103, 1477075035443, 'System'),
('26', 'Tribunal de Justiça de Mato Grosso do Sul','Tribunal de Justiça de Mato Grosso do Sul',148,103, 1477075035443, 'System'),
('24', 'Tribunal de Justiça de Minas Gerais','Tribunal de Justiça de Minas Gerais',148,103, 1477075035443, 'System'),
('34', 'Tribunal de Justiça do Paraná','Tribunal de Justiça do Paraná',148,103, 1477075035443, 'System'),
('51', 'Tribunal de Justiça do Pará - PA','Tribunal de Justiça do Pará - PA',148,103, 1477075035443, 'System'),
('33', 'Tribunal de Justiça do Piauí','Tribunal de Justiça do Piauí',148,103, 1477075035443, 'System'),
('40', 'Tribunal de Justiça do Rio Grande do Norte','Tribunal de Justiça do Rio Grande do Norte',148,103, 1477075035443, 'System'),
('43', 'Tribunal de Justiça de Rio Grande do Sul','Tribunal de Justiça de Rio Grande do Sul',148,103, 1477075035443, 'System'),
('37', 'Tribunal de Justiça do Rio de Janeiro','Tribunal de Justiça do Rio de Janeiro',148,103, 1477075035443, 'System'),
('42', 'Tribunal de Justiça de Rondônia','Tribunal de Justiça de Rondônia',148,103, 1477075035443, 'System'),
('45', 'Tribunal de Justiça de Santa Catarina','Tribunal de Justiça de Santa Catarina',148,103, 1477075035443, 'System'),
('4', 'Tribunal de Justiça de São Paulo','Tribunal de Justiça de São Paulo',148,103, 1477075035443, 'System'),

('PRIMEIRA_INSTANCIA', '1ª Instância','1ª Instância',149,103, 1477075035443, 'System'),
('SEGUNDA_INSTANCIA', '2ª Instância','2ª Instância',149,103, 1477075035443, 'System'),
('TERCEIRA_INSTANCIA', '3ª Instância','3ª Instância',149,103, 1477075035443, 'System'),
('QUARTA_INSTANCIA', '4ª Instância','4ª Instância',149,103, 1477075035443, 'System'),

('PRIMEIRA_INSTANCIA', '1ª Instância','1ª Instância',150,103, 1477075035443, 'System'),
('SEGUNDA_INSTANCIA', '2ª Instância','2ª Instância',150,103, 1477075035443, 'System'),
('TERCEIRA_INSTANCIA', '3ª Instância','3ª Instância',150,103, 1477075035443, 'System'),
('QUARTA_INSTANCIA', '4ª Instância','4ª Instância',150,103, 1477075035443, 'System'),

('NAO_CAPTURAR', 'Não capturar','Não capturar',151,103, 1477075035443, 'System'),
('DIARIA', 'Diária','Diária',151,103, 1477075035443, 'System'),
('SEMANAL', 'Semanal','Semanal',151,103, 1477075035443, 'System'),
('MENSAL', 'Mensal','Mensal',151,103, 1477075035443, 'System');



