# Projeto_final_de_modulo_4
Para poder utilizar o projeto basta baixar em sua maquina abrir o vscode ou seu editor de código preferido abrir a pasta do projeto nele, e abrir o terminal e rodar primeiramente o comando (npm init) e ir preenchendo os dados depois rodar o comando (npm i) sem os 
parênteses no qual já ira isntalar tudo que for necessario.
TESTES REALIZADOS UTILIZANDO INSOMNIA, mas pode ser consumida e modificada com postman, os resultados podem ser exibidos no navegador também. 
O inicio do Projeto contendo uma rota projeto final do modulo 4, com a rota dos produtos com as rotas de get,delete,patch e post, ainda sem o sqlite.

Para utiliziar a rota de post para poder utilizar a api é só colocar :http://localhost:3000/produtos e criar um produto seguindo o esquema abaixo utilizando json:
{ "id":"2",
"nome_do_produto":"placa mãe fuleira",
"fabricante_do_produto":"Giba",
"valor_do_produto":"um milhao de dolares",
"modo_de_pagamento":"rim", "descricao":"o melhor dos dois mundos",
"avaliacoes":"travou meu olho de tanto fps",
"quantidade_de_produtos":"1" 
} ps:precisa criar um produto no inicio pois ainda esta usando banco de dados mocado como teste.

Para testar a rota de modificação basta usar a seguinte rota :http://localhost:3000/produtos/(o id do produto que vocẽ criou anteriormente) e o que você quer modificar.
exemplo modificando o nome da placa mãe:
{ "id":"2", 
"nome_do_produto":"placa mãe",
"fabricante_do_produto":"Giba",
"valor_do_produto":"um milhao de dolares",
"modo_de_pagamento":"rim",
"descricao":"o melhor dos dois mundos",
"avaliacoes":"travou meu olho de tanto fps",
"quantidade_de_produtos":"1"
}  

Agora para testar a rota de get basta utilizar :http://localhost:3000/produtos a lista de produtos cadastrados ira aparecer no consumidor de api ou navegador
Por ultimo a rota de delete que consiste em utilizar :http://localhost:3000/produtos/(o id do produto a ser excluido).
Depois pode se verificar na rota get que eles não esta mais lá.
