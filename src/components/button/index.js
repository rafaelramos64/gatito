import React from "react";
import { TouchableOpacity, Text } from "react-native";

import functionDefaultStyles from "./styles";

export default function button({ small = false, inverted = false, margin = false, value, action, styles }) {
  const defaultStyles = functionDefaultStyles(small, inverted, margin)
  return <TouchableOpacity onPress={action} style={[defaultStyles.button, styles]}>
    <Text style={defaultStyles.value}>{value}</Text>
  </TouchableOpacity>
}