INSERT INTO pagina(pagina,parentid, tabelaenumvalue, create_date, create_user)
    VALUES ('Produto', 0, 100, 1477075035443, 'System');



INSERT INTO doisvalortype(tipo, descricao,  create_date, create_user)
    VALUES ('ICMS - SITUAÇÃO TRIBUTARIA', 'ICMS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('ICMS - ORIGEM', 'ICMS - ORIGEM', 1477075035443, 'System'),
	('ICMS - MODALIDADE BC', 'MODALIDADE BC', 1477075035443, 'System'),
	('ICMS - MOTIVO DESONERAÇÃO', 'ICMS - MOTIVO DESONERAÇÃO', 1477075035443, 'System'),
	('IPI - SITUAÇÃO TRIBUTARIA', 'IPI - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('TIPO CALCULO', 'TIPO CALCULO', 1477075035443, 'System'),
	('PIS - SITUAÇÃO TRIBUTARIA', 'PIS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System'),
	('COFINS - SITUAÇÃO TRIBUTARIA', 'COFINS - SITUAÇÃO TRIBUTARIA', 1477075035443, 'System');



INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES ('00', 'Tributada integralmente','Tributada integralmente',2,2, 1477075035443, 'System'),
	   ('10', 'Tributada com cobr. por subst. trib.','Tributada com cobr. por subst. trib.',2,2, 1477075035443, 'System'),
	   ('20', 'Com redução de base de cálculo','Com redução de base de cálculo',2,2, 1477075035443, 'System'),
	   ('30', 'Isenta ou não trib com cobr por subst trib','Isenta ou não trib com cobr por subst trib',2,2, 1477075035443, 'System'),
	   ('40', 'Isenta','Isenta',2,2, 1477075035443, 'System'),
	   ('41', 'Não tributada','Não tributada',2,2, 1477075035443, 'System'),
	   ('50', 'Suspesão','Suspesão',2,2, 1477075035443, 'System'),
	   ('51', 'Diferimento','Diferimento',2,2, 1477075035443, 'System'),
	   ('60', 'ICMS cobrado anteriormente por subst trib','ICMS cobrado anteriormente por subst trib',2,2, 1477075035443, 'System'),
	   ('70', 'Redução de Base Calc e cobr ICMS por subst trib','Redução de Base Calc e cobr ICMS por subst trib',2,2, 1477075035443, 'System'),
	   ('90', 'Outros','Outros',2,2, 1477075035443, 'System'),
	   ('10Part', 'Entre UF origem e destino ou definida na legislação com Subst Trib','Entre UF origem e destino ou definida na legislação com Subst Trib',2,2, 1477075035443, 'System'),
	   ('90Part', 'Entre UF origem e destino ou definida na legislação - outros','Entre UF origem e destino ou definida na legislação - outros',2,2, 1477075035443, 'System'),
	   ('41ST', 'ICMS ST retido em operações interestaduais com repasses do Subst Trib','ICMS ST retido em operações interestaduais com repasses do Subst Trib',2,2, 1477075035443, 'System'),
	   ('101', 'Simples Nacional: 101: Com permissão de crédito','Simples Nacional: 101: Com permissão de crédito',2,2, 1477075035443, 'System'),
	   ('102', 'Simples Nacional: 102: Sem permissão de crédito','Simples Nacional: 102: Sem permissão de crédito',2,2, 1477075035443, 'System'),
	   ('103', 'Simples Nacional: 103: Isenção do ICMS para faixa de receita bruta','Simples Nacional: 103: Isenção do ICMS para faixa de receita bruta',2,2, 1477075035443, 'System'),
	   ('201', 'Simples Nacional: 201: Com permissão de crédito, com cobr ICMS por Subst Trib','',2,2, 1477075035443, 'System'),
	   ('202', 'Simples Nacional: 202: Sem permissão de crédito, com cobr ICMS por Subst Trib','',2,2, 1477075035443, 'System'),
	   ('203', 'Simples Nacional: 203: Isenção ICMS p/ faixa de receita bruta e cobr do ICMS por ST','',2,2, 1477075035443, 'System'),
	   ('300', 'Simples Nacional: 300: Imune','',2,2, 1477075035443, 'System'),
	   ('400', 'Simples Nacional: 400: Não tributada','',2,2, 1477075035443, 'System'),
	   ('500', 'Simples Nacional: 500: ICMS cobrado antes por subst trib ou antecipação','',2,2, 1477075035443, 'System'),
	   ('900', 'Simples Nacional: 900: Outros','',2,2, 1477075035443, 'System'),

	   ('0', 'Nacional, exceto as indicadas nos códigos de 3 a 5','0 - Nacional, exceto as indicadas nos códigos de 3 a 5',3,2, 1477075035443, 'System'),
	   ('1', 'Estrangeira - Importação direta, exceto a indicada no código 6','1 - Estrangeira - Importação direta, exceto a indicada no código 6',3,2, 1477075035443, 'System'),
	   ('2', 'Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7','2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7',3,2, 1477075035443, 'System'),
	   ('3', 'Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%','3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%',3,2, 1477075035443, 'System'),
	   ('4', 'Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes','4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes',3,2, 1477075035443, 'System'),
	   ('5', 'Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%','5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%',3,2, 1477075035443, 'System'),
	   ('6', 'Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX','6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX',3,2, 1477075035443, 'System'),
	   ('7', 'Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX','7 - Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX',3,2, 1477075035443, 'System'),

	   ('0','Nacional, exceto as indicadas nos códigos de 3 a 5','0 - Nacional, exceto as indicadas nos códigos de 3 a 5',4,2, 1477075035443, 'System'),
	   ('1','Estrangeira - Importação direta, exceto a indicada no código 6','1 - Estrangeira - Importação direta, exceto a indicada no código 6',4,2, 1477075035443, 'System'),
	   ('2','Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7','2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7',4,2, 1477075035443, 'System'),
	   ('3','Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%','3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%',4,2, 1477075035443, 'System'),
	   ('4','Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes','4 - Nacional, produção em conformidade com processos básicos que tratam as legisl. dos Ajustes',4,2, 1477075035443, 'System'),
	   ('5','Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%','5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%',4,2, 1477075035443, 'System'),
	   ('6','Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX','6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX',4,2, 1477075035443, 'System'),
	   ('7','Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX','7 - Estrangeira - Adquirida mercado interno, sem similar nacional, constante em lista da CAMEX',4,2, 1477075035443, 'System'),

	   ('0','Não desejo usar','Não desejo usar',5,2, 1477075035443, 'System'),
	   ('3','Produtor agropecuário','3: Produtor agropecuário',5,2, 1477075035443, 'System'),
	   ('9','Outros','9: Outros',5,2, 1477075035443, 'System'),
	   ('12','Órgão de fomento e desenvolv. agropecuário','12: Órgão de fomento e desenvolv. agropecuário',5,2, 1477075035443, 'System'),

	   ('-1','Não usar','- Não usar -',6,2, 1477075035443, 'System'),
	   ('00','Entrada com recuperação de crédito','00: Entrada com recuperação de crédito',6,2, 1477075035443, 'System'),
	   ('01','Entrada tributada com alíquota zero','01: Entrada tributada com alíquota zero',6,2, 1477075035443, 'System'),
	   ('02','Entrada isenta','02: Entrada isenta',6,2, 1477075035443, 'System'),
	   ('03','Entrada não-tributada','03: Entrada não-tributada',6,2, 1477075035443, 'System'),
	   ('04','Entrada imune','04: Entrada imune',6,2, 1477075035443, 'System'),
	   ('05','Entrada com suspensão','05: Entrada com suspensão',6,2, 1477075035443, 'System'),
	   ('49','Outras entradas','49: Outras entradas',6,2, 1477075035443, 'System'),
	   ('50','Saída tributada','50: Saída tributada',6,2, 1477075035443, 'System'),
	   ('51','Saída tributada com alíquota zero','51: Saída tributada com alíquota zero',6,2, 1477075035443, 'System'),
	   ('52','Saída isenta','52: Saída isenta',6,2, 1477075035443, 'System'),
	   ('53','Saída não-tributada','53: Saída não-tributada',6,2, 1477075035443, 'System'),
	   ('54','Saída imune','54: Saída imune',6,2, 1477075035443, 'System'),
	   ('55','Saída com suspensão','55: Saída com suspensão',6,2, 1477075035443, 'System'),
	   ('99','Outras saídas','99: Outras saídas',6,2, 1477075035443, 'System'),


	   ('1','Porcentagem','Porcentagem',7,2, 1477075035443, 'System'),
	   ('2','Em valor','Em valor',7,2, 1477075035443, 'System'),

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



INSERT INTO doisvalortype(id,tipo, descricao,  create_date, create_user)
    VALUES (26,'TIPO FRETE', 'TIPO FRETE', 1477075035443, 'System');

INSERT INTO doisvalor(value,nome, descricao, doisvalortype, pagina,create_date, create_user )
    VALUES ('0', '0 - Emitente','0 - Emitente',26,5, 1477075035443, 'System'),
	   ('1', '1 - Destinatário','1 - Destinatário',26,5, 1477075035443, 'System'),
	   ('2', '2 - Terceiros','2 - Terceiros',26,5, 1477075035443, 'System'),
	   ('9', '9 - Sem frete','9 - Sem frete',26,5, 1477075035443, 'System');