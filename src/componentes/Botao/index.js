import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import funcaoEstilosPadrao from "./estilos";

export default function Botao({pequeno=false, invertido=false, valor, acao }){
    const estilosPadrao = funcaoEstilosPadrao();
    return <TouchableOpacity onpress={acao} style={estilosPadrao.botao}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}