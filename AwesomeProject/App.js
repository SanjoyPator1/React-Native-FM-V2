import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

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

        <View style={[styles.smallContainer, {backgroundColor: '#2aa198'}]}>
          <Text style={styles.smallText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.smallContainer, {backgroundColor: '#268bd2'}]}>
          <Text style={styles.smallText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.smallContainer, {backgroundColor: '#d33682'}]}>
          <Text style={styles.smallText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.smallContainer, {backgroundColor: '#cb4b16'}]}>
          <Text style={styles.smallText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
