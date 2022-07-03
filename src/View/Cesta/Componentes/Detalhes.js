import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import logo from '../../../../assets/logo.png';


export default function Detalhes() {
    <>
        <Texto style={estilos.nome}>Cestas De Verduras </Texto>

        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazena}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua Cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>


}



const estilos = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazena: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 16,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,

    }

});