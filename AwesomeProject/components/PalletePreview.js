/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PalletePreview = ({handlePress, palleteItem}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.heading}>{palleteItem.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palleteItem.colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <View style={[styles.color, {backgroundColor: item.hexCode}]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default PalletePreview;
