const Produtos= require('../models/produtos_models')
const produtos = (app,produtos_database)=>{

   app.get('/produtos',(req, res)=>{
     produtos_database.all('SELECT * FROM Produtos', (erro,tabela)=>{
       if(erro){
         res.status(404).json({
           "mensagem": erro.message,
           "error":true
         })
       }
       else{
        res.status(200).json({
          "produtos":tabela,
          "count":tabela.length
       
    })
       }
     })
    })
  app.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    produtos_database.all(`SELECT * FROM Produtos WHERE id =${id}`, (erro,tabela)=>{
      if(erro){
        res.status(404).json({
          "mensagem": erro.message,
          "error":true
        })
      }
      else{
       res.status(200).json({
         "produtos":tabela,
         "count":tabela.length
      
   })
      }
    })
   })
    app.post("/produtos",(req, res) => {
        const body = req.body
        produtos_database.all(`UPDATE ? Produtos SET WHERE ID = ?`, (erro,tabela)=>{
          if(erro){
            res.status(404).json({
              "mensagem": erro.message,
              "error":true
            })
          }
          else{
           res.status(200).json({
             "produtos":tabela,
             "count":tabela.length
          
       })
          }
        })

        app.patch('/produtos/:id', (req, res) => {
                const id = req.params.id
                produtos_database.all(`UPDATE * Produtos SET WHERE ID `, (erro,tabela)=>{
                  if(erro){
                    res.status(404).json({
                      "mensagem": erro.message,
                      "error":true
                    })
                  }
                  else{
                   res.status(200).json({
                     "produtos":tabela,
                     "count":tabela.length
                  
               })
                  }
                })
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