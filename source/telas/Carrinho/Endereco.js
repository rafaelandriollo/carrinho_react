import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Endereco ({item:{nome, rua, bairro, cidade, estado, cep, icone}}) {
    return <>
            <View style={estilos.container} >
                <Image style={estilos.imagem} source={icone} />
                <View style={estilos.item} key={nome}>
                    <Texto style={estilos.nome}>{nome}</Texto>
                    <Texto style={estilos.endereco}>{rua}</Texto>
                    <Texto style={estilos.endereco}>{bairro}</Texto>
                    <Texto style={estilos.endereco}>{cidade}</Texto>
                    <Texto style={estilos.endereco}>{estado}</Texto>
                    <Texto style={estilos.endereco}>{cep}</Texto>
                </View>
            </View>
   
    </>;
}

const estilos = StyleSheet.create({
   item: {
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 15
    },

    nome: {
        fontSize: 18,
        color: "#464646",
        marginLeft: 15,
        lineHeight: 25,
        fontWeight: "bold"
    },

    endereco: {
        fontSize: 14,
        color: "#464646",
        marginLeft: 15,
        lineHeight: 25,
    },

    imagem: {
        width: 50,
        height: 50
    },

    container: {
        flexDirection: "row", 
        alignItems: "center"
    }

});