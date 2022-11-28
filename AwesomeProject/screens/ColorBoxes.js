/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorBoxes = ({route}) => {
  const {colors, palleteName} = route.params;
  return (
    <View>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({item}) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{palleteName}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBoxes;
