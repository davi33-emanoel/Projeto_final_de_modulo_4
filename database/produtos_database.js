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
    ("placa mae h81","MSI",250,"dinheiro, cartao, pix","socket 1150 2x ddr3","otímo custo beneficio",5,"https://asset.msi.com/resize/image/global/product/five_pictures1_2918_20140407164857.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"),

    ("placa mae A320M-S2H","GIGABYTE",650,"dinheiro, cartao, pix","placa mae ddr4","otímo custo beneficio",5,"https://images.kabum.com.br/produtos/fotos/94709/94709_1517494361_index_gg.jpg"),

    ("RTX 3070","NVIDIA",7999,"pix, dinheiro, cartão","NVIDIA GeForce RTX 3070 Ti TRINITY LHR, 19 Gbps, 8GB GDDR6X","Opinião Geral:gostei da placa, refrigeração melhor que a msi ventus 3x",10,"https://images.kabum.com.br/produtos/fotos/166105/-pre-venda-placa-de-video-zotac-nvidia-geforce-rtx-3070ti-trinity-8gb-19-gbps-gddr6x-ray-tracing-dlss-rgb-zt-a30710d-10p_1623326241_gg.jpg"),

    ("Titan RTX","NVIDIA",7999,"pix, dinheiro, cartão","Nvidia Titan RTX 24GB GDDR6 384-Bit","Opinião Geral:é a placa gráfica de PC mais rápida já construída. É alimentado pela premiada arquitetura Turing",10,"https://cdn.dooca.store/265/products/clwksbpgc2fzm9rw1cimf6kzgfjgxa8gp51f_1600x1600+fill_ffffff.jpg?v=1584394178"),

    
    ("Radeon AXRX 6600","AMD",3899,"pix, dinheiro, cartão","Power Color Fighter AMD Radeon AXRX 6600 3DH, 8GB GDDR6","Opinião Geral:placas com desining simples, mas n deixa a desejar no poder gráfico",10,"https://images.kabum.com.br/produtos/fotos/250880/placa-de-video-power-color-fighter-adm-radeon-axrx-6600-3dh-8gb-gddr6-preto-axrx-6600-8gbd6-3dh_1636630192_gg.jpg"),

    ("Quadro Rtx A6000","NVIDIA",55322,"pix, dinheiro, cartão","Placa De Video Pny Nvidia Quadro Rtx A6000 48gb Gddr6 384-bit Vcnrtxa6000-pb","Opinião Geral:Cuda Cores: 10752",10,"https://m.media-amazon.com/images/I/61VMLv2BrVS._AC_SL1500_.jpg"),

    ("Geforce, RTX 3080","NVIDIA",12199,"pix, dinheiro, cartão","Placa de Vídeo Asus, TUF, Geforce, RTX 3080, LHR, 10GB, V2, GDDR6X, DLSS, Ray Tracing","Opinião Geral:CBase de construção para a GPU mais rápida e eficiente do mundo",10,"https://img.terabyteshop.com.br/produto/g/placa-de-video-asus-tuf-geforce-rtx-3080-10gb-lhr-v2-gddr6x-320bit-tuf-rtx3080-10g-v2-gaming-imp_128130.jpg"),

    ("Radeon RX 6800 XT","GIGABYTE",8929,"pix, dinheiro, cartão","Placa de Vídeo Asus, TUF, Geforce, RTX 3080, LHR, 10GB, V2, GDDR6X, DLSS, Ray Tracing","Opinião Geral:CBase de construção para a GPU mais rápida e eficiente do mundo",10,"https://images.kabum.com.br/produtos/fotos/136529/placa-de-video-gigabyte-radeon-rx-6800-xt-16-gb-gddr6-rgb-fusion-pci-express-4-0-gv-r68xtgaming-oc-16gd_1610655804_gg.jpg"),

    ("GeForce RTX 3090","NVIDIA",12929,"pix, dinheiro, cartão","Placa de Vídeo Gigabyte NVIDIA GeForce RTX 3090 Turbo 24G, 24GB GDDR6X, DLSS, Ray Tracing - GV-N3090TURBO-24GD","Opinião Geral:Menor placa RTX3090 do mercado, ocupa só 2 slots e tem uns 28cm de comprimento, cabendo na maioria dos cases pequenos.",10,"https://images.kabum.com.br/produtos/fotos/232735/placa-de-video-gigabyte-nvidia-geforce-rtx-3090-turbo-24g-24gb-gddr6x-dlss-ray-tracing-gv-n3090turbo-24gd_1633017115_gg.jpg"),

    ("Radeon RX 6900 XT","AMD",10929,"pix, dinheiro, cartão","Placa de Vídeo Sapphire AMD Radeon RX 6900 XT OEM, 18Gbps, 16GB GDDR6, AMD RDNA 2","Opinião Geral:streamar tibia, e umas edições no movie maker",10,"https://images.kabum.com.br/produtos/fotos/162935/placa-de-video-sapphire-amd-radeon-rx-6900-xt-18gbps-16gb-gddr6-amd-rdna-2-21308-02-10g_1622118538_gg.jpg"),

    ("RTX 3060","NVIDIA",5199,"pix, dinheiro, cartão","Placa de Vídeo Asus NVIDIA GeForce KO RTX 3060 OC V2 Edition, 12G GDDR6, 15Gbps, LHR, ARGB, DLSS, Ray Tracing
    Roda jogos em 4k tranquilamente.","Opinião Geral:Roda jogos em 4k tranquilamente.",10,"https://images.kabum.com.br/produtos/fotos/197913/placa-de-video-asus-nvidia-geforce-rtx-3060-oc-edition-12g-gddr6-15gbps-argb-dlss-ray-tracing-90yv0gc7-m0na10_1630682108_gg.jpg"),

    ("Ryzen 7 5800X","AMD",2189,"pix, dinheiro, cartão","Processador AMD Ryzen 7 5800X, 8-Core, 16-Threads, 3.8GHz (4.7GHz Turbo), Cache 36MB, AM4","Opinião Geral:Processador fora de série (topssimo), chegou essa semana já instalei e está rodando muito bem.",10,"https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000063wof_1.jpg"),

    ("i5-12600K","INTEL",2199,"pix, dinheiro, cartão","Processador Intel Core i5-12600K, Cache 20MB, 3.7GHz (4.9GHz Max Turbo), LGA 1700","Opinião Geral:Em núcleos de desempenho. O desempenho varia de acordo com o uso, configuração e outros fatores.",10,"https://images.kabum.com.br/produtos/fotos/241046/processador-intel-core-i5-12600k-cache-16mb-3-7ghz-4-9ghz-max-turbo-lga-1700-bx8071512600k_1634828162_gg.jpg"),

    ("Threadripper PRO 3955WX","AMD",7299,"pix, dinheiro, cartão","Processador AMD Ryzen Threadripper PRO 3955WX, 16-Core, 32-Threads, 3.9GHz (4.3GHz Turbo), Cache 72MB","Opinião Geral:Em núcleos de desempenho. O desempenho varia de acordo com o uso, configuração e outros fatores.",10,"https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000167wof1.jpg"),

    ("Core i9-10900K","INTEL",3449,"pix, dinheiro, cartão","PProcessador Intel Core i9-10900K, Cache 20MB, 3.7GHz (5.3GHz Max Turbo), LGA 1200 - BX8070110900K","Opinião Geral:excelente processador para games e trabalhos em aplicativos pesados ótimo em tudo vale a pena comprar!!!!!!!!",10,"https://images.kabum.com.br/produtos/fotos/113000/processador-intel-core-i9-10900k-cache-20mb-3-7ghz-5-3ghz-max-turbo-lga-1200-bx8070110900k_1637699992_gg.jpg"),

    ("Ryzen 9 5950X","AMD",4249,"pix, dinheiro, cartão","Processador AMD Ryzen 9 5950X, 16-Core, 32-Threads, 3.4GHz (4.9GHz Turbo), Cache 72MB, AM4","Opinião Geral:Tá rodando meu Freefire no máximo aqui, mó daora.",10,"https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000059wof_1.jpg"),

    ("Core i9-12900K","INTEL",4349,"pix, dinheiro, cartão","Processador Intel Core i9-12900K, Cache 30MB, 3.2GHz (5.2GHz Max Turbo), LGA 1700 - BX8071512900K","Opinião Geral:Desempenho revolucionário e capacidade para multitarefas",10,"https://images.kabum.com.br/produtos/fotos/241050/processador-intel-core-i9-12900k-cache-30mb-3-2ghz-5-2ghz-max-turbo-lga-1700-bx8071512900k_1635255797_gg.jpg"),

    ("Core i7-12700K","INTEL",4349,"pix, dinheiro, cartão","Processador Intel Core i7-12700K, Cache 25MB, 3.6GHz (5.0GHz Max Turbo), LGA 1700 - BX8071512700K","Opinião Geral:Desempenho, qualidade e performance sem iguais",10,"https://images.kabum.com.br/produtos/fotos/241048/processador-intel-core-i7-12700k-cache-25mb-3-6ghz-5-0ghz-max-turbo-lga-1700-bx8071512700k_1634830260_gg.jpg"),

    ("MAG B560M","MSI",859,"pix, dinheiro, cartão","Interfaces de unidade de armazenamento com suporte: M.2, SATA III","Opinião Geral:Soquete do processador: LGA 1151 (soquete H4)",10,"https://www.techinn.com/f/13846/138461560_4/msi-placa-mae-mag-b560m-mortar.jpg?_gl=1*144qwmc*_up*MQ..&gclid=Cj0KCQiAoNWOBhCwARIsAAiHnEiOR1TvYkVMnta9SIzZ5vIjGQIcDaCyc6juZmF5dS5W8KJN9oqe_dYaAmMlEALw_wcB"),

    ("MPG B550","GIGABYTE",1249,"pix, dinheiro, cartão","Placa-Mãe MSI MPG B550 Gaming Plus, AMD AM4, ATX","Opinião Geral:Soquete do processador:Muito bem construída, componentes de excelente qualidade, é uma placa muito bonita",10,"https://images.kabum.com.br/produtos/fotos/114335/placa-mae-msi-mpg-b550-gaming-plus-amd-am4-atx_1594999681_gg.jpg"),

    ("Maximus XIII Hero","ASUS",3044,"pix, dinheiro, cartão","Asus Placa-Mãe ROG Maximus XIII Hero","Opinião Geral:Soluções de software inteligentes ajudam a garantir que seu sistema tenha o melhor desempenho.",10,"https://www.techinn.com/f/13814/138148224_10/asus-placa-mae-rog-maximus-xiii-hero.jpg?_gl=1*1dxemn1*_up*MQ..&gclid=Cj0KCQiAoNWOBhCwARIsAAiHnEghNWZz9IMK7zx12aEdp0fFgS_UoDR0q-B5ZbxiqLas4nyDQGlI0_0aAgDTEALw_wcB"),

    ("ROG Strix B550","ASUS",1799,"pix, dinheiro, cartão","Placa-Mãe Asus ROG Strix B550-F Gaming, AMD AM4, ATX, DDR4","Opinião Geral:A ROG nunca deixou a desejar nos seus produtos lindos e de ótima construção. Recomendo!",10,"https://images.kabum.com.br/produtos/fotos/113866/placa-mae-asus-rog-strix-b550-f-gaming-amd-am4-atx-ddr4_1594652100_gg.jpg"),

    ("ROG Strix X570","ASUS",2799,"pix, dinheiro, cartão","Placa-Mãe Asus ROG Strix X570-F Gaming, AMD AM4, ATX, DDR4","Opinião Geral:A ROG nunca deixou a desejar nos seus produtos lindos e de ótima construção. Recomendo!",10,"https://images.kabum.com.br/produtos/fotos/102576/placa-mae-asus-rog-strix-x570-f-gaming-amd-am4-atx-ddr4_placa-mae-asus-rog-strix-x570-f-gaming-amd-am4-atx-ddr4_1564495954_gg.jpg")
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