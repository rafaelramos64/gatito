import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";


import Item from "./item";




const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "BAnho simples!"
  },
  {
    id: 1,
    name: "Tosagem",
    price: 140.25,
    description: "Tosagem + banho!"
  },
  {
    id: 1,
    name: "Cortar unhas",
    price: 50.25,
    description: "Corte de unhas + relaxamento."
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas. "
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
  },

]

export default function Services() {

  return <>
    <FlatList
      data={services}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </>
}