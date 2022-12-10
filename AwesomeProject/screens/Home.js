/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.list}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('TestPage')}
      >
        <Text style={styles.buttonText}>Test Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ColorPallete')}
      >
        <Text style={styles.buttonText}>Color Pallete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('HooksAndNetworkRequests')}
      >
        <Text style={styles.buttonText}>Hooks And Network Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('NetworkRequestRefreshPage')}
      >
        <Text style={styles.buttonText}>Network Request Refresh Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // width: 200,
    // height: 100,
  },
  box: {
    padding: 10,
    borderRadius: 9,
    justifyContent: 'center',
    // overflow: "hidden",
    // alignItems: 'center',
    margin: 10,
    height: 50,
  },
  buttonStyle: {
    backgroundColor: '#85C1E9',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
  buttonText: {
    fontWeight: '600',
    color: 'black',
    letterSpacing: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
