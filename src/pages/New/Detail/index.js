/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import {Container, SubmitButton} from './styles';

export default function Price({route}) {
  const {slot} = route.params;
  const navigation = useNavigation();

  const signed = useSelector((state) => state.auth.signed);

  function navigateToSelectQuantity() {
    if (signed) {
      navigation.navigate('SelectQuantity', {slot});
    } else {
      navigation.navigate('Account', {screen: 'SignIn', params: {slot}});
    }
  }

  return (
    <Container>
      <Text>{slot.title}</Text>
      <Text>{slot.description}</Text>
      <SubmitButton title="ok" onPress={navigateToSelectQuantity}>
        {`Pagar ${slot.price}`}
      </SubmitButton>
    </Container>
  );
}
