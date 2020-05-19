/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  function handleSubmit() {
    dispatch(signInRequest(cpf, password));
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToForgot() {
    navigation.navigate('Forgot');
  }

  // function formatText(text) {
  //   text = text.replace(/[^\d]/g, '');
  //   return text.replace(/(\d)(\d)/, '$1.$2');
  //   return text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  // }

  // function _hasErrors() {
  //   return email.includes('@');
  // }

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

        <Title>Login</Title>

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

          <TextInput
            label="Senha"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <TouchableOpacity
            onPress={navigateToForgot}
            style={{marginTop: '10%', alignItems: 'flex-end'}}
            activeOpacity={0.5}>
            <Text style={{color: '#e66118'}}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Body>

        <Footer>
          <SubmitButton onPress={handleSubmit}>
            <Text>Login</Text>
          </SubmitButton>
        </Footer>
      </Container>
    </Background>
  );
}
