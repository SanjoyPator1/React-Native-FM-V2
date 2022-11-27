/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import ColorBox from './ColorBox';

const AllColorBox = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
        Here are some boxes of different colors
      </Text>
      <ColorBox hexCode="#2aa198" colorName="Cyan" />
      <ColorBox hexCode="#268bd2" colorName="Blue" />
      <ColorBox hexCode="#d33682" colorName="Magenta" />
      <ColorBox hexCode="#cb4b16" colorName="Orange" />
    </View>
  );
};

export default AllColorBox;
