import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './components/ColorBox';

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
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          Here are some boxes of different colors
        </Text>
        <ColorBox hexCode="#2aa198" colorName="Cyan" />
        <ColorBox hexCode="#268bd2" colorName="Blue" />
        <ColorBox hexCode="#d33682" colorName="Magenta" />
        <ColorBox hexCode="#cb4b16" colorName="Orange" />
      </View>
    </SafeAreaView>
  );
};

export default App;
