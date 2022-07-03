import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "./Componentes/Detalhes";
import Topo from "./Componentes/Topo";

export default function Cesta() {
    return (
        <>
            <Topo />
            <View style={estilos.cesta}>
                <Detalhes />
            </View>
        </>
    )

}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 9,
        paddingHorizontal: 16,

    },
});