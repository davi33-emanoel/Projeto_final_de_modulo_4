const produtos_database=require('../database/sqlite')
class Produtos{
    constructor(id,nome_do_produto,fabricante_do_produto,valor_do_produto,modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos){
        this.id=id,
        this.nome_do_produto=nome_do_produto,
        this.fabricante_do_produto=fabricante_do_produto,
        this.valor_do_produto=valor_do_produto,
        this.modo_de_pagamento=modo_de_pagamento,
        this.descricao=descricao,
        this.avaliacoes=avaliacoes,
        this.quantidade_de_produtos=quantidade_de_produtos,
        this.data_de_entrada=this.data_criada(),
        this.data_de_saida=this.data_criada()
    }
    data_criada(){
        const data = new Date()
        return data.toLocaleString("pt-br")
    }
}
    module.exports = Produtos