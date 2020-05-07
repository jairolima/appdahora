import React, {useRef, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton, Header} from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loading = useSelector((state) => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const cpfRef = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');

  function navigateBack() {
    navigation.goBack();
  }

  function handleSubmit() {
    dispatch(signUpRequest(username, email, password, phone, cpf));
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
          <Text>Voltar</Text>
        </TouchableOpacity>
      </Header>
      <Container>
        <Form>
          <FormInput
            icon="user"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Como quer ser chamado"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            icon="envelope"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="phone"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu telefone"
            returnKeyType="next"
            onSubmitEditing={() => cpfRef.current.focus()}
            value={phone}
            onChangeText={setPhone}
          />

          <FormInput
            icon="user"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CPF"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={cpf}
            onChangeText={setCpf}
          />

          <FormInput
            icon="key"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
