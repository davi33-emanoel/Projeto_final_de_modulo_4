const Produtos = require("../models/produtos_models");
const produtos_Dao = require("../DAO/produtos_Dao");
const produtos = (app, produtos_database) => {
const novo_produtos_Dao = new produtos_Dao(produtos_database);
  app.get("/produtos",async (req, res) => {
    try {
    const resposta = await novo_produtos_Dao.seleciona_produtos()
    res.status(200).json({resposta})
    } catch (error) {
      res.status(404).json({ error });
    }
  });
  app.get("/produtos/:id",async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const resposta = await novo_produtos_Dao.seleciona_produtos_por_id(id)
      res.status(200).json({resposta})
      } catch (error) {
        res.status(404).json({ error });
      }
  });
  app.post("/produtos",async  (req, res) => {
    try {
      const body = req.body;
      const novo_produto = new Produtos(...Object.values(body))
      const resposta = await novo_produtos_Dao.adiciona_produtos(novo_produto)
      res.status(201).json({resposta})
      } catch (error) {
        res.status(404).json({ error });
      }
  });
  app.patch("/produtos/:id",async (req, res) => {
    try {
      const body = req.body
      const id = parseInt(req.params.id)
      const novo_produto = new Produtos(...Object.values(body))
      const resposta = await novo_produtos_Dao.atualiza_dados_dos_produtos(id,novo_produto)
      res.status(200).json({resposta})
      } catch (error) {
        res.status(404).json({ error });
      }
  });
  app.delete("/produtos/:id",async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const resposta = await novo_produtos_Dao.deleta_produto(id)
      res.status(200).json({resposta})
      } catch (error) {
        res.status(404).json({ error });
      }
  });
};
module.exports = produtos;
