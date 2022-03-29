import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png'

import ps4pro from '../../assets/Itens/ps4pro.png';
import gow from '../../assets/Itens/gow.jpg';
import eld from '../../assets/Itens/eld.jpg';
import spi from '../../assets/Itens/spi.jpg';
import tl2 from '../../assets/Itens/tl2.jpg';


const carrinho = {
    topo:{
        titulo:"Carrinho",
        imagem: topo

    },
    detalhes: {
        titulo:"Detalhes do Carrinho",
        tituloProduto:"Playstation 4 Pro Bundle",
        descricao:"Desperte seus sentidos com o PS4 Pro (...)",
        logoVendedor:logoVendedor,
        nomeVendedor:"Game Store",
        preco:"R$ 2.999,00",
        logoProduto: ps4pro
    },
    itens: 
    {
        titulo:"Items do Carrinho",
        lista: [
            {
                nome:"Playstation 4 Pro",
                imagem: ps4pro,
            },
            {
                nome:"God of War",
                imagem: gow,
            },
            {
                nome:"Elden Ring",
                imagem: eld,
            },
            {
                nome:"Spider-Man",
                imagem: spi,
            },
            {
                nome:"The Last of Us 2",
                imagem: tl2,
            },
        ]
    }
    

};

export default carrinho;