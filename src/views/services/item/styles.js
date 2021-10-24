import { StyleSheet } from 'react-native';
import { collors } from '../../../styles';

export default StyleSheet.create({
  information: {
    padding: 24
  },
  name: {
    color: collors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calc: {
    color: collors.dark,
    fontSize: 14,
    marginVertical: 8,
  },
  price: {
    color: collors.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: collors.grey,
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
    color: collors.dark,
    fontSize: 16,
    marginRight: 8,
  },
  quantity: {
    width: 42,
  }
});