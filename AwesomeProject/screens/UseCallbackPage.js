/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import commonStyles from './styles';

const UseCallbackPage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(current => current + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(current => current - 1);
  }, []);

  return (
    <View style={commonStyles.smallContainer}>
      <Text style={commonStyles.boldHeader}>useCallback</Text>
      <Text>Counter: {count}</Text>

      <View style={commonStyles.buttonsInOneRow}>
        <TouchableOpacity
          style={commonStyles.buttonStyle}
          onPress={handleIncrement}
        >
          <Text style={commonStyles.buttonText}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={commonStyles.buttonStyle}
          onPress={handleDecrement}
        >
          <Text style={commonStyles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UseCallbackPage;
