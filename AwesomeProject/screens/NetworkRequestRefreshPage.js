/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useCallback, useEffect} from 'react';
import {Text, FlatList, StyleSheet, View, RefreshControl} from 'react-native';
import commonStyles from './styles';

const NetworkRequestRefreshPage = () => {
  const [facts, setFacts] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchCatFacts();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

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
      <Text style={commonStyles.boldHeader}>Pull down to refresh</Text>

      <FlatList
        nestedScrollEnabled
        style={[
          styles.list,
          {
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            paddingVertical: 10,
          },
        ]}
        data={facts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={[styles.box, colorStyle]}>
            <Text style={[styles.text, textStyle]}>{item.title}</Text>
          </View>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // width: 200,
    // height: 100,
  },
  box: {
    padding: 10,
    borderRadius: 9,
    justifyContent: 'center',
    // overflow: "hidden",
    // alignItems: 'center',
    margin: 10,
    height: 50,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NetworkRequestRefreshPage;
