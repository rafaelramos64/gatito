import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/button";
import CompleteInput from "../../../components/completeInput";

import styles from "./styles";

import { useDispatch } from "react-redux";
import { actions } from "../../../store/cart";

export default function Item({ id, name, price, description }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(price)
  const [expand, setExpand] = useState(false);

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calcTotal(newQuantity)
  }

  const calcTotal = (newQuantity) => {
    setTotal(newQuantity * price);
  }

  const invertExpand = () => {
    setExpand(!expand);
    updateTotalQuantity(1);
  }

  const addOnCart = () => {
    dispatch(actions.add({ id, name, price, description, quantity }))
    alert("Adicionado ao carrinho!")
  }

  return <>
    <TouchableOpacity style={styles.information} onPress={invertExpand}>
      <Text style={styles.name}>{name}
        <Text style={styles.price, styles.align}>{
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(price)
        }</Text>
      </Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>

    {expand && <View style={styles.cart}>
      <View>
        <View style={styles.value}>
          <Text style={styles.description}>Quantidade:</Text>
          <CompleteInput styles={styles.quantity} value={quantity} action={updateTotalQuantity} />
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
      <Button value="Adicionar ao Carrinho" inverted margin action={addOnCart} />
    </View>}
    <View style={styles.divisor} />
  </>
}