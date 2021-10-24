import React from "react"
import { TextInput,TouchableOpacity, Text , StyleSheet} from "react-native"
import defaultStyles from './styles'

export default function completeInput({ value, styles, action }) {
  const update = (newValue, returnAction) => {
    returnAction(newValue);
  }
  const numberText = String(value)
  return <>
  <TouchableOpacity>
    <Text
    style={[stylesButton.button, stylesButton.text]}
    onPress={() => update(--value, action)}
    >-</Text>
  </TouchableOpacity>
  
  <Text style={[defaultStyles.campo, styles]}>{value}</Text>
  <TouchableOpacity>
<Text style={[stylesButton.button, stylesButton.text]} onPress={() => update(++value, action)} >+</Text>
  </TouchableOpacity>
  </>
}



const stylesButton = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: '#A050BE',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});