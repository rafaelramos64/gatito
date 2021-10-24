import { StyleSheet } from 'react-native';
import { collors } from '../../../styles';

export default StyleSheet.create({
  information: {
    padding: 24
  },
  name: {
    color: collors.laranja,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calc: {
    color: collors.escuro,
    fontSize: 14,
    marginVertical: 8,
  },
  price: {
    color: collors.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: collors.cinza,
  },
  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  description: {
    color: collors.escuro,
    fontSize: 16,
    marginRight: 8,
  },
  quantity: {
    width: 42,
  }
});