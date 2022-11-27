import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  containerBgColor: {backgroundColor: 'lavender'},
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
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
