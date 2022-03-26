import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png'

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
        tituloProduto:"God of War",
        descricao:"Kratos é pai novamente (...)",
        logoVendedor:logoVendedor,
        nomeVendedor:"Game Store",
        preco:"R$ 59,00"
    },
    items: 
    {
        titulo:"Items do Carrinho",
        lista: [
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