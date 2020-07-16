import React from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';

export default function Coupon() {
  return (
    <Container>
      <View
        style={{
          backgroundColor: '#f9f9f9',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000'}}>#Coupon TAB</Text>
      </View>
    </Container>
  );
}
