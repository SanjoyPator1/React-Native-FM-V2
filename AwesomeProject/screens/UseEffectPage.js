/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useCallback, useEffect} from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import commonStyles from './styles';

const UseEffectPage = () => {
  const [facts, setFacts] = useState([]);

  const textStyle = {
    color: 'white',
  };
  const colorStyle = {
    backgroundColor: '#D35400',
  };

  const handleFetchCatFacts = useCallback(async () => {
    try {
      const result = await fetch('https://dummyjson.com/products');
      const responseFacts = await result.json();
      console.log('response : ', responseFacts.products);
      if (result.ok) {
        setFacts(responseFacts.products);
      }
    } catch (err) {
      console.log('err ', err);
    }
  });

  useEffect(() => {
    console.log('use effect called');
    handleFetchCatFacts();
  }, []);

  return (
    <View style={[commonStyles.smallContainer, {flex: 1}]}>
      <Text style={commonStyles.boldHeader}>useEffect</Text>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={[styles.box, colorStyle]}>
            <Text style={[styles.text, textStyle]}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    padding: 10,
    flex: 1,
  },
  box: {
    padding: 10,
    borderRadius: 9,
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default UseEffectPage;
