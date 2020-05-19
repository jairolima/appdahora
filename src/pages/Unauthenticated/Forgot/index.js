/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function Forgot() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [cpf, setCpf] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  // TODO FORGOT REQUEST
  function handleSubmit() {
    dispatch(signInRequest(cpf));
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <Container>
        <TouchableOpacity style={{marginTop: '10%'}} onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="long-arrow-left"
            color="#ccc"
            type="font-awesome"
            size={70}
          />
          <Text>{signed}</Text>
        </TouchableOpacity>

        <Title>Recuperar Senha</Title>

        <Body>
          <TextInput
            label="CPF"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            value={cpf}
            onChangeText={setCpf}
            render={(props) => <TextInputMask {...props} type="cpf" />}
          />

          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#484848', marginTop: '10%'}}>
              Informe o CPF que você usou no cadastro
            </Text>
          </View>
        </Body>

        <Footer>
          <SubmitButton onPress={handleSubmit}>
            <Text>Recuperar</Text>
          </SubmitButton>
        </Footer>
      </Container>
    </Background>
  );
}
