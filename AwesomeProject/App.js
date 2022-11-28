/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AllColorBox from './components/AllColorBox';
import ColorBox from './components/ColorBox';
import FlatListComponent from './components/FlatListComponent';
import ListColor from './components/ListColor';
import SectionListComponent from './components/SectionListComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';
import TestPage from './screens/TestPage';

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  containerBgColor: {backgroundColor: 'white'},
  smallContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    textColor: 'white',
  },
  smallText: {
    color: 'white',
  },
  container: {
    paddingHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="ColorPallete" component={ColorPallete} />
        <Stack.Screen name="FlatList" component={FlatListComponent} />
        <Stack.Screen name="SectionList" component={SectionListComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
