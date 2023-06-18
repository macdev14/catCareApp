import React from "react";
import { StatusBar } from 'expo-status-bar';
import { FlatList } from "react-native";
import Item from "./Item";
import estilosGlobal from "../../estilos";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO. MAS SE PRECISAR NÓS DAMOS."
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina Antirrábica. O seu gato precisa de uma por ano."
  }
];

export default function Servicos() {
  return (
   

    <>
          <FlatList data={servicos}
          renderItem={({ item }) => {
            return <Item {...item} />
          }}
          keyExtractor={({ id }) => String(id)}
        />
    </>
    
   



  );
}