/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';

const Food = props => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const FOODS = [
  'Apples',
  'Broccoli',
  'Cookies',
  'Doritos',
  'Eclairs',
  'Apples1',
  'Broccoli1',
  'Cookies1',
  'Doritos1',
  'Eclairs1',
  'Apples2',
  'Broccoli2',
  'Cookies2',
  'Doritos2',
  'Eclairs2',
];

const FlatListComponent = () => {
  return (
    <FlatList
      style={{padding: 20}}
      data={FOODS}
      keyExtractor={item => item}
      renderItem={({item}) => <Food name={item} />}
    />
  );
};

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FlatListComponent;
