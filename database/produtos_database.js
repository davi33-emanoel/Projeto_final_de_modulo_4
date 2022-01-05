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
    "quantidade_de_produtos" int,
    "imagem" varchar(255)
  ); `
const ADD_PRODUTOS_DATA = `
INSERT INTO Produtos (nome_do_produto, fabricante_do_produto, valor_do_produto, modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos,imagem)
VALUES 
    ("plac-mae-h81","msi",250,"dinheiro, cartao, pix","socket 1150 2x ddr3","otímo custo beneficio",5,"https://asset.msi.com/resize/image/global/product/five_pictures1_2918_20140407164857.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"),
    ("placa-mae-A320M-S2H","gigabyte",650,"dinheiro, cartao, pix","placa mae ddr4","otímo custo beneficio",5,"https://images.kabum.com.br/produtos/fotos/94709/94709_1517494361_index_gg.jpg")
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