import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png'

import ps4pro from '../../assets/Itens/ps4pro.png';
import gow from '../../assets/Itens/gow.jpg';
import eld from '../../assets/Itens/eld.jpg';
import spi from '../../assets/Itens/spi.jpg';
import tl2 from '../../assets/Itens/tl2.jpg';

import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import work from '../../assets/work.png';
import other from '../../assets/other.png';




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
    },

    endereco: 
    {
        titulo:"Meus endereços",
        lista: [
            {
                nome:"Minha casa",
                rua:"Rua A, 123",
                bairro:"Jardim das Flores",
                cidade:"São Paulo",
                estado:"SP",
                cep: "18000-500",
                icone: home1
            },
            {
                nome:"Trabalho",
                rua:"Rua B, 321",
                bairro:"Vila Santa Luzia",
                cidade:"Maringá",
                estado:"PR",
                cep: "28000-500",
                icone: home2
            },
            {
                nome:"Casa da minha mãe",
                rua:"Rua C, 567",
                bairro:"Residencial do Bosque",
                cidade:"Sorocaba",
                estado:"SP",
                cep: "14700-000",
                icone: work
            },
            {
                nome:"Casa da Júlia",
                rua:"Rua C, 800",
                bairro:"Parque das Cerejeiras",
                cidade:"Ourinhos",
                estado:"SP",
                cep: "34700-000",
                icone: other
            }
        ]
    }
    

};

export default carrinho;