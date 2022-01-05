class produtos_Dao{
    constructor(produtos_database){
        this.produtos_database=produtos_database
    }

seleciona_produtos(){
    return new Promise((resolve, reject) =>{
        this.produtos_database.all('SELECT * FROM Produtos', (error,tabela)=>{
            if(error){
                reject({
                    "mensagem": error.message,
                    "error":true
                  })
            }
            else{
                resolve({ 
                "produtos":tabela,
                "count":tabela.length,
                "error":false
            })
            }
          })
    })
}
seleciona_produtos_por_id(id){
    return new Promise((resolve, reject) =>{
        this.produtos_database.all('SELECT * FROM Produtos WHERE id =?',id, (error,tabela)=>{
            
            if(error){
                reject({
                    "mensagem": error.message,
                    "error":true
                  })
            }
            else{
                resolve({ 
                "produtos":tabela,
                "count":tabela.length,
                "error":false
            })
            }
          })
    })
}
seleciona_produtos_por_nome(nome_do_produto){
    console.log(nome_do_produto)
    return new Promise((resolve, reject) =>{
        console.log(nome_do_produto)
        this.produtos_database.all('SELECT * FROM Produtos WHERE nome_do_produto = ?',nome_do_produto, (error,tabela)=>{
            
            if(error){
                reject({
                    "mensagem": error.message,
                    "error":true
                  })
            }
            else{
                resolve({ 
                "produtos":tabela,
                "count":tabela.length,
                "error":false
            })
            }
          })
    })
}
adiciona_produtos(body){
    return new Promise((resolve, reject)=> {
    this.produtos_database.run(`INSERT INTO Produtos(nome_do_produto, fabricante_do_produto, valor_do_produto, modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos,imagem)VALUES (?,?,?,?,?,?,?,?)`,[body.nome_do_produto,body.fabricante_do_produto,body.valor_do_produto,body.modo_de_pagamento,body.descricao,body.avaliacoes,body.quantidade_de_produtos,body.imagem],(error)=>{
        if(error){
          reject({
            "produtos" : error.message,
            "erro" : true 
        })
        }else{
          resolve({
            "produtos" : body,
            "erro" : false
        })
        }
      })
    })
}
deleta_produto(id){
    return new Promise((resolve, reject) =>{
        this.produtos_database.all('DELETE FROM Produtos WHERE id =?',id, (error)=>{
            if(error){
                reject({
                    "mensagem": error.message,
                    "error":true
                  })
            }
            else{
                resolve({ 
                "produtos":id,
                "count":id.length,
                "error":false
            })
            }
          })
    })
}
adiciona_produtos(body){
    return new Promise((resolve, reject)=> {
    this.produtos_database.run(`INSERT INTO Produtos(nome_do_produto, fabricante_do_produto, valor_do_produto, modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos,imagem)VALUES (?,?,?,?,?,?,?,?)`,[body.nome_do_produto,body.fabricante_do_produto,body.valor_do_produto,body.modo_de_pagamento,body.descricao,body.avaliacoes,body.quantidade_de_produtos,body.imagem],(error)=>{
        if(error){
          reject({
            "produtos" : error.message,
            "erro" : true 
        })
        }else{
          resolve({
            "produtos" : body,
            "erro" : false
        })
        }
      })
    })
}
deleta_produto(id){
    return new Promise((resolve, reject) =>{
        this.produtos_database.all('DELETE FROM Produtos WHERE id =?',id, (error)=>{
            if(error){
                reject({
                    "mensagem": error.message,
                    "error":true
                  })
            }
            else{
                resolve({ 
                "produtos":id,
                "count":id.length,
                "error":false
            })
            }
          })
    })
}
atualiza_dados_dos_produtos(id,body){
    return new Promise((resolve, reject)=> {
        this.produtos_database.run('UPDATE Produtos SET (nome_do_produto, fabricante_do_produto, valor_do_produto, modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos,imagem)=(?,?,?,?,?,?,?,?) WHERE id =?',[body.nome_do_produto,body.fabricante_do_produto,body.valor_do_produto,body.modo_de_pagamento,body.descricao,body.avaliacoes,body.quantidade_de_produtos,body.imagem,id],(error)=>{
            if(error){
              reject({
                "produtos" : error.message,
                "erro" : true 
            })
            }else{
              resolve({
                "produtos" :body,
                "erro" : false
            })
            }
          })
        })
}
}
module.exports = produtos_Dao