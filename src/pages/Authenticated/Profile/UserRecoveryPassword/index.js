/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function UserRecoveryPassword() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  // TODO FORGOT REQUEST
  function handleSubmit() {
    dispatch(signInRequest(password));
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

        <Title>Alterar Senha</Title>

        <Body>
          <TextInput
            label="SENHA"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            secureTextEntry
            theme={{colors: {primary: '#e66118'}}}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            label="CONFIRMAR SENHA"
            style={{
              marginTop: 20,
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            secureTextEntry
            theme={{colors: {primary: '#e66118'}}}
            value={password}
            onChangeText={setPassword}
          />
        </Body>

        <Footer>
          <SubmitButton onPress={handleSubmit}>
            <Text>Confirmar</Text>
          </SubmitButton>
        </Footer>
      </Container>
    </Background>
  );
}
