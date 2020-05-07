/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SelectQuantity({route}) {
  const navigation = useNavigation();
  const [voucher_quantity, setQuantity] = useState('');
  const {slot} = route.params;
  // TODO PEGAR SLOT E PASSAR PRA PAYMENT
  function handleSubmit() {
    navigation.navigate('Payment', {voucher_quantity, slot});
  }

  return (
    <Container>
      <Text>Aqui vc seleciona quantidade de vouchers</Text>
      <Form>
        <FormInput
          value={voucher_quantity}
          placeholder="ex 1"
          onChangeText={setQuantity}
          required
        />
        <SubmitButton onPress={handleSubmit}>OK</SubmitButton>
      </Form>
    </Container>
  );
}
