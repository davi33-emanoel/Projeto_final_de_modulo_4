const produtos_database=require('../database/sqlite')
class Produtos{
    constructor(nome_do_produto,fabricante_do_produto,valor_do_produto,modo_de_pagamento,descricao,avaliacoes,quantidade_de_produtos,imagem){
        this.nome_do_produto=nome_do_produto,
        this.fabricante_do_produto=fabricante_do_produto,
        this.valor_do_produto=valor_do_produto,
        this.modo_de_pagamento=modo_de_pagamento,
        this.descricao=descricao,
        this.avaliacoes=avaliacoes,
        this.quantidade_de_produtos=quantidade_de_produtos,
        this.imagem=imagem
    }
}
    module.exports = Produtos