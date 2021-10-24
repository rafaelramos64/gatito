import { StyleSheet } from 'react-native';
import { collors } from '../../styles';

export default (small, inverted, margin) => StyleSheet.create({
  button: {
    borderRadius: 4,
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: inverted ? collors.lightGreen2 : collors.danger2,
    marginTop: margin ? 80 : 0,
    shadowColor: "#111",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
  },
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: inverted ? collors.light : collors.light,
  }
});