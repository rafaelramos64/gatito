import React from "react";
import { FlatList, Text, View } from "react-native";

import Item from "./item";
import CartStats from "../../components/cartStats";

import { useSelector } from "react-redux";


export default function cart() {
  const cart = useSelector((state) => state.cart.items)
  const total = cart.reduce((soma, { price, quantity }) => soma + (price * quantity), 0)
  if (cart.length) {
    return <>
      <CartStats total={total} />
      <FlatList
        data={cart}
        renderItem={({ item, index }) => <Item {...item} index={index} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  } else {
    return <>
      <CartStats total={total} />
      <Text style={{ fontSize: 22, marginLeft: 15, color: '#887725' }} if={total < 1}>Carrinho está vazio. Vamos gastar um pouquinho!!</Text>
    </>
  }
}