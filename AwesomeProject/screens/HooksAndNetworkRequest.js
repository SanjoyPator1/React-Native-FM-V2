/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import UseStatePage from './UseStatePage';
import customStyles from './styles';
import UseCallbackPage from './UseCallbackPage';
import UseEffectPage from './UseEffectPage';

const HooksAndNetworkRequests = () => {
  return (
    <View style={customStyles.mainContainer}>
      <ScrollView>
        <Text style={customStyles.pageHeader}>Hooks And Network Requests</Text>
        <UseStatePage />
        <UseCallbackPage />
        <UseEffectPage />
      </ScrollView>
    </View>
  );
};

export default HooksAndNetworkRequests;
