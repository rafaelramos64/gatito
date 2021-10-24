import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/button";
import CompleteInput from "../../../components/completeInput";

import styles from "./styles";

import { actions } from "../../../store/cart";
import { useDispatch } from "react-redux";

export default function Item({ name, price, description, quantity: inicialQuantity, index }) {
  const [quantity, setQuantity] = useState(inicialQuantity)
  const [total, setTotal] = useState(price * inicialQuantity)

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    totalCalc(newQuantity)
  }

  const totalCalc = (newQuantity) => {
    setTotal(newQuantity * price);
  }

  const dispatch = useDispatch()


  return <>
    <View style={styles.information}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(price)
      }</Text>
    </View>

    <View style={styles.cart}>
      <View>
        <View style={styles.value}>
          <Text style={styles.description}>Quantidade:</Text>
          <CompleteInput styles={styles.quantity} value={quantity} acao={updateTotalQuantity} />
        </View>
        <View style={styles.value}>
          <Text style={styles.description}>Total:</Text>
          <Text style={styles.price}>{
            Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(total)
          }</Text>
        </View>
      </View>
      <Button value="Remover ao Carrinho" acao={() => { dispatch(actions.remover(index)) }} />
    </View>
    <View style={styles.divisor} />
  </>
}