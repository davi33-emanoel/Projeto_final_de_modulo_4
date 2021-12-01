const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const produtos_database = new sqlite3.Database(caminhoArq);

const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Produtos" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_do_produto" varchar(64),
    "fabricante_do_produto" varchar(64),
    "valor_do_produto" int,
    "modo_de_pagamento" varchar(64),
    "descricao" varchar(64),
    "avaliacoes" varchar(150),
    "quantidade_de_produtos" int
  ); `
const ADD_PRODUTOS_DATA = `
INSERT INTO Produtos (nome_do_produto, fabricante_do_produto, valor_do_produto, modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos)
VALUES 
    ("placa mae","gigaa",250,"dinheiro cartao pix","placa mae ddr4","otímo custo beneficio",5),
    ("placa mae","gigaa",250,"dinheiro cartao pix","placa mae ddr4","otímo custo beneficio",5),
`
console.log("passei aqui tbm");

function cria_tabela_prod() {
    produtos_database.run(PRODUTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela " + error);
    });
}

function popula_tabela_pro() {
    produtos_database.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários " + error);
    });
}

produtos_database.serialize( ()=> {
    cria_tabela_prod();
    popula_tabela_pro();
});