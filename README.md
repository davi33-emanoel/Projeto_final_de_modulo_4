
# Projeto_final_de_modulo_4
Para poder utilizar o projeto basta baixar em sua maquina abrir o vscode ou seu editor de código preferido abrir a pasta do projeto nele, abra o terminal e depois rode o comando (npm i) sem os 
parênteses no qual ira isntalar tudo que for necessario.

TESTES REALIZADOS UTILIZANDO INSOMNIA, mas pode ser consumida e modificada com postman, os resultados podem ser exibidos no navegador também ou direto por este link ```https://api-final-modulo-4-resilia.herokuapp.com/produtos```. podendo testar a rota get já no navegador, e a roda get por id támbem como exemplo irei usar o produto com id 23, segue o link para vizualizar esse exemplo ```https://api-final-modulo-4-resilia.herokuapp.com/produtos/23```
projeto final do modulo 4, com a entidade <produtos> contendo as rotas de get,delete,patch e post.

Para criar um produto segue o esquema abaixo utilizando json:
```
{
    "nome_do_produto":"placa mãe de entrada",
    "fabricante_do_produto":"Giba",
    "valor_do_produto":"um milhao de dolares",
    "modo_de_pagamento":"rim",
    "descricao":"o melhor dos dois mundos",
    "avaliacoes":"travou meu olho de tanto fps",
    "quantidade_de_produtos":"1" 
}
```
ps: É necessario rodar o arquivo ```produtos_database``` se não foi criado automaticamente, rode o arquivo para criar um banco de dados dentro da api.

Segue abaixo exemplo de como modificar algum parametro da entidade.

Exemplo modificando o nome da placa mãe:
```
{  
    "nome_do_produto":"placa mãe" <-- <anteriormente estava placa mãe de entrada>,
    "fabricante_do_produto":"Giba",
    "valor_do_produto":"um milhao de dolares",
    "modo_de_pagamento":"rim",
    "descricao":"o melhor dos dois mundos",
    "avaliacoes":"travou meu olho de tanto fps",
    "quantidade_de_produtos":"1"
}
```

Para aplicar a modificação basta usar a  rota de patch :```http://localhost:3000/produtos/<o id a ser modificado>``` ou então ```https://api-final-modulo-4-resilia.herokuapp.com/produtos/<o id a ser modificado>```

Agora para testar a rota de get basta utilizar :```http://localhost:3000/produtos``` ou então ```https://api-final-modulo-4-resilia.herokuapp.com/produtos```

a lista de produtos cadastrados ira aparecer no consumidor de api ou navegador, para ver a modificação feita anteriormente basta localizar a id do produto
que teve algum atributo modificado e colocar no caminho, ```http://localhost:3000/produtos/<id do produto qual você modificou o atributo>``` ou ```https://api-final-modulo-4-resilia.herokuapp.com/<id do produto qual você modificou o atributo>```

Por ultimo a rota de delete que consiste em utilizar :```http://localhost:3000/produtos/<o id do produto a ser excluido>.```e também ```https://api-final-modulo-4-resilia.herokuapp.com/<id do produto excluido>```

Depois você pode verificar na rota get que eles não esta mais lá. 
Modificações todas feitas pelo Insomnia. e podendo ser consumida pela web ou pelo proprío programa.
