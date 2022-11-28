/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';

const TestPage = ({navigation}) => {
  return (
    <View>
      <Text>Test Page</Text>
      <Button
        title="Go to FlatList Page"
        onPress={() => navigation.navigate('FlatList')}
      />
      <Button
        title="Go to SectionList Page"
        onPress={() => navigation.navigate('SectionList')}
      />
    </View>
  );
};

export default TestPage;
