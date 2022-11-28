/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListColor from '../components/ListColor';

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

const ColorPallete = () => {
  return (
    <View style={[styles.container, styles.containerBgColor]}>
      <View style={{width: '100%'}}>
        <ListColor />
      </View>
    </View>
  );
};

export default ColorPallete;
