/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const UseStatePage = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>useState Example </Text>
      <Text>Counter: {count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setCount(currentValue => currentValue + 1)}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCount(currentValue => currentValue - 1)}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 15,
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

export default UseStatePage;
