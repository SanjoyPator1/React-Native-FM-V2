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
import ColorBoxes from './screens/ColorBoxes';

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
        <Stack.Screen
          name="ColorBoxes"
          component={ColorBoxes}
          options={({route}) => ({title: route.params.paletteName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
