const Produtos = require("../models/produtos_models");
const usuario_Dao = require("../DAO/usuario_Dao");
const produtos = (app, produtos_database) => {
const novo_usuario_Dao = new usuario_Dao(produtos_database);
  app.get("/produtos", (req, res) => {
    novo_usuario_Dao
      .seleciona_produtos()
      .then((tabela) => {
        res.status(200).json({ tabela });
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  });
  app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    novo_usuario_Dao
      .seleciona_produtos_por_id(id, res)
      .then((tabela) => {
        res.status(200).json({ tabela });
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  });
  app.post("/produtos", (req, res) => {
    const body = req.body;
    const novo_produto = new Produtos(body.nome_do_produto, body.fabricante_do_produto, body.valor_do_produto,body.modo_de_pagamento,body.descricao,body.avaliacoes,body.quantidade_de_produtos)
    novo_usuario_Dao
      .adiciona_produtos(novo_produto, res)
      .then((tabela) => {
        res.status(200).json({ tabela });
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  });
  app.patch("/produtos/:id", (req, res) => {
    const body = req.body;
    const id = parseInt(req.params.id);
    const novo_produto = new Produtos(body.nome_do_produto, body.fabricante_do_produto, body.valor_do_produto,body.modo_de_pagamento,body.descricao,body.avaliacoes,body.quantidade_de_produtos)
    novo_usuario_Dao
      .atualiza_dados_dos_produtos(id,novo_produto,res)
      .then((tabela) => {
        res.status(200).json({ tabela });
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  });
  app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
  novo_usuario_Dao
    .deleta_produto(id, res)
    .then((tabela) => {
      res.status(200).json({ tabela });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
  });
};
module.exports = produtos;
