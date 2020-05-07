import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton, Header} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="chevron-left"
            color="#3cf0c5"
            type="font-awesome"
            size={26}
          />
          <Text>{signed}</Text>
        </TouchableOpacity>
      </Header>
      <Container>
        <Form>
          <FormInput
            icon="envelope"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="key"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit}>
            <Text>Entrar</Text>
          </SubmitButton>
        </Form>

        <TouchableOpacity onPress={navigateToSignUp}>
          <Text>CRIRAR CONTA</Text>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
