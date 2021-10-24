import React from "react";
import { Text, View } from "react-native";
import Button from "../button";
import styles from "./styles";

import { useDispatch } from 'react-redux';
import { actions } from "../../store/cart"

export default function StatusCart({ total }) {
  const dispatch = useDispatch();
  return <View style={styles.content}>
    <View style={styles.total}>
      <Text style={styles.description}>Total do Carrinho</Text>
      <Text style={styles.value}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(total)
        }
      </Text>
    </View>
    <View style={styles.button}>
      <Button value='Concluir Pedido' inverted action={() => {
        dispatch(actions.reset());
        alert("Pedido Concluido!")
      }} />
    </View>
  </View>
}