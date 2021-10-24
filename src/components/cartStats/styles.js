import { StyleSheet } from 'react-native';
import { collors } from '../../styles';

export default StyleSheet.create({
  content: {
    backgroundColor: collors.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: collors.green,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: collors.golden,
  },
  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});