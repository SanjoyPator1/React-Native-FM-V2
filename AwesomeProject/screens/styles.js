/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const commonStyles = StyleSheet.create({
  buttonsInOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  smallContainer: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 15,
  },
  mainContainer: {
    backgroundColor: '#2A2C40',
    padding: 10,
    height: '100%',
  },
  pageHeader: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  boldHeader: {
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#85C1E9',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontWeight: '600',
    color: 'black',
    letterSpacing: 3,
  },
});

export default commonStyles;
