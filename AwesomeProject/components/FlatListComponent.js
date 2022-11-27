/* eslint-disable react-native/no-inline-styles */
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

const FOODS_DATA = [
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
  'Broccoli12',
  'Cookies12',
  'Doritos12',
  'Eclairs12',
  'Apples22',
  'Broccoli22',
  'Cookies22',
  'Doritos22',
  'Eclairs22',
  'Eclairs23',
];

const FlatListComponent = () => {
  return (
    <FlatList
      // eslint-disable-next-line react-native/no-inline-styles
      style={{padding: 20}}
      data={FOODS_DATA}
      columnWrapperStyle={{
        justifyContent: FOODS_DATA % 2 === 1 ? 'flex-start' : 'space-between',
      }}
      keyExtractor={item => item}
      renderItem={({item}) => <Food name={item} />}
      ItemSeparatorComponent={<Text>item separator</Text>}
      ListEmptyComponent={<Text>List is empty</Text>}
      ListFooterComponent={<Text>List Footer component</Text>}
      ListHeaderComponent={<Text>List Header component</Text>}
      horizontal={false}
      numColumns={2}
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
