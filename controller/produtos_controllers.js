const Produtos= require('../models/produtos_models')
const produtos = (app,produtos_database)=>{

   app.get('/produtos',(req, res)=>{
    res.status(200).json({
        "produtos":produtos_database.produtos
     
  })})
  app.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produtos = produtos_database.produtos.filter((produtos) => produtos.id === id)
    if (!produtos.length) {
      res.status(404).json({
        'erro': true,
        'msg': 'produto não encontrado',
      });
      return
    }
    res.status(200).json({
      erro: false,
      produtos: produtos[0],
    })
  })
    app.post("/produtos",(req, res) => {
        const body = req.body
        try{
           const novo_produto = new Produtos(body.id,body.nome_do_produto,body.fabricante_do_produto,body.valor_do_produto,body.modo_de_pagammento,body.descricao,body.avaliacoes,body.quantidade_de_produtos,body.data_de_entrada,body.data_de_saida)
           produtos_database.produtos.push(novo_produto)

           res.status(201).json({
               "requisicao":novo_produto,
               "error":false
           })
        }
        catch (error){
            res.status(400).json({
                "produto":"não foi possivel cadastrar o produto",
                "error":true
            })}

        app.patch('/produtos/:id', (req, res) => {
                const id = req.params.id;
                const index_id = produtos_database.produtos.findIndex((produtos) => produtos.id === id)
            
                if (index_id === -1) {
                  res.status(404).json({
                    erro: true,
                    msg: 'Produto não encontrado',
                  });
                  return;
                }
            
                const body = req.body;
                const produto = produtos_database.produtos[index_id];
                const id_atualizado = {
                    id: body.id ? body.id : produto.id,
                  nome_do_produto: body.nome_do_produto ? body.nome_do_produto : produto.nome_do_produto,
                  fabricante_do_produto: body.fabricante_do_produto ? body.fabricante_do_produto: produto.fabricante_do_produto,
                  valor_do_produto:body.valor_do_produto ? body.valor_do_produto: produto.valor_do_produto,
                  modo_de_pagamento:body.modo_de_pagamento ? body.modo_de_pagamento : produto.modo_de_pagamento,
                  descricao: body.descricao ? body.descricao : produto.descricao,
                  avaliacoes: body.avaliacoes ? body.avaliacoes : produto.avaliacoes,
                  quantidade_de_produtos: body.quantidade_de_produtos ? body.quantidade_de_produtos : produto.quantidade_de_produtos,
                  data_de_entrada: body.data_de_entrada ? body.data_de_entrada : produto.data_de_entrada,
                  data_de_saida: body.data_de_saida ? body.data_de_saida : produto.data_de_saida,
                };
            
                produtos_database.produtos[index_id] = id_atualizado;
            
                res.status(200).json({
                  erro: false,
                  dadosAtualizados: id_atualizado,
                });
              });
    app.delete('/produtos/:id', (req, res)=> {
         const id = req.params.id
         const index_id= produtos_database.produtos.findIndex((produtos=>produtos.id===id))
            if(index_id > -1){
                const id_deletado = produtos_database.produtos.splice(index_id, 1)
                res.status(200).json({
                    "deletado": id_deletado,
                     "error" : false
                    })
            } else {
                res.status(404).json({
                    "mensagem": `O produto com o id: ${id} esta fora de estoque`,
                     "error" : true
                    })
                }
        
            })
    }
)}
module.exports= produtos