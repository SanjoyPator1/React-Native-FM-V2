/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AllColorBox from './components/AllColorBox';
import ColorBox from './components/ColorBox';
import FlatListComponent from './components/FlatListComponent';
import ListColor from './components/ListColor';
import SectionListComponent from './components/SectionListComponent';

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

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.containerBgColor]}>
        <View style={{width: '100%'}}>
          <ListColor />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
