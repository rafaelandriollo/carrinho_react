import React from "react";

import {Image, Text, StyleSheet, View} from "react-native"

import Texto from '../../components/Texto'

export default function Detalhes ({titulo, tituloProduto, descricao, nomeVendedor, logoVendedor, preco, logoProduto}) {
    return <>
      <Texto style={styles.detalhes}>{titulo}</Texto>
      
      <View style={styles.produto}>
        <Image style={styles.logoProduto} source={logoProduto}/>
        <View style={styles.descricao}>
          <Texto style={styles.titulo}>{tituloProduto}</Texto>
            <View style={styles.vendedor}>
                <Image style={styles.logoVendedor} source={logoVendedor} />
                <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
            </View>
          <Texto style={styles.desc}>{descricao}</Texto>
          <Texto style={styles.preco}>{preco}</Texto>
        </View>
      </View>
    </>
}



const styles = StyleSheet.create({
    detalhes: {
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "left",
        marginBottom: 15,
        marginLeft: 10
      },
      titulo: {
        color: "#017b81",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "left"
      },
      nomeVendedor: {
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10.
      },
      desc: {
        fontSize: 16,
        paddingVertical: 10,
        //flexWrap: "wrap"
      },
      preco: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "right",
        paddingHorizontal: 10
      },
      logoVendedor: {
        width: 32,
        height: 32,
        //marginLeft: 10
      },
      vendedor: {
        flexDirection: "row",
        padding: 10
      },
      produto: {
        padding: 10,
        flexDirection: "row"
      },
      logoProduto: {
        width: 100,
        height: 100,
        alignSelf: "center"

      },
      descricao: {
        padding:20,
        flexDirection: "column"
      }
});