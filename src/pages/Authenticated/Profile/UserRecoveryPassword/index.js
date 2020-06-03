/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {Arrow} from '~/components/icons/Arrow';

import {updatePasswordRequest} from '~/store/modules/user/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function UserRecoveryPassword() {
  const navigation = useNavigation();
  const access_token = useSelector((state) => state.auth.token.access_token);

  const dispatch = useDispatch();
  const password_confirmationRef = useRef();

  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  // TODO FORGOT REQUEST
  function handleSubmit() {
    dispatch(
      updatePasswordRequest(password, password_confirmation, access_token),
    );
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        <Container>
          <TouchableOpacity
            style={{
              marginTop: '10%',
              paddingHorizontal: 20,
            }}
            onPress={navigateBack}>
            <Arrow />
          </TouchableOpacity>
          <Text>{signed}</Text>

          <Title>Alterar Senha</Title>

          <Body>
            <TextInput
              label="NOVA SENHA *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              secureTextEntry
              theme={{colors: {primary: '#e66118'}}}
              onSubmitEditing={() => password_confirmationRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              label="CONFIRMAR NOVA SENHA *"
              ref={password_confirmationRef}
              style={{
                marginTop: 20,
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              secureTextEntry
              theme={{colors: {primary: '#e66118'}}}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
            />
          </Body>

          <Footer>
            <SubmitButton onPress={handleSubmit}>
              <Text>Confirmar</Text>
            </SubmitButton>
          </Footer>
          <View style={{flex: 1}} />
        </Container>
      </SafeAreaView>
    </Background>
  );
}
