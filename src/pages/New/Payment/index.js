/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {Text, Alert} from 'react-native';

import {Container, SubmitButton} from './styles';

import api from '~/services/api';
import {useSelector} from 'react-redux';


export default function Payment({route}) {
  const {voucher_quantity} = route.params;
  const {slot} = route.params;
  const token = useSelector((state) => state.auth.token.token);

  // se o pagamento tiver sucesso executa o que ta na func
  // melhorar o headers colocando token global no services api
  async function handleSubmit() {
    await api.post(`/slots/${slot.id}/appointment`, 
    {voucher_quantity: voucher_quantity},
    {headers: {"Authorization" : `Bearer ${token}`}});
    Alert.alert('pagamento efetuado com sucesso');
  }

  return (
    <Container>
      <Text>Resumo {voucher_quantity}</Text>
      <Text>{token}</Text>

      <SubmitButton onPress={handleSubmit}>PAGAR</SubmitButton>
    </Container>
  );
}
