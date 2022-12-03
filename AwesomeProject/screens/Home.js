/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Test Page"
        onPress={() => navigation.navigate('TestPage')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ColorPallete')}>
        <Text>Go to Color Pallete</Text>
      </TouchableOpacity>
      <Button
        title="Go to Hooks And Network Requests Page"
        onPress={() => navigation.navigate('HooksAndNetworkRequests')}
      />
    </View>
  );
};

export default Home;
