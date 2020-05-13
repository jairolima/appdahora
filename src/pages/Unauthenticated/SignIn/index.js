import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import {TextField} from 'react-native-material-textfield';
import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

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

  function navigateToForgot() {
    navigation.navigate('Forgot');
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

        <Title>Login</Title>

        <Body>
          <TextField
            label="Email"
            tintColor="#e66118"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <TextField
            label="Senha"
            tintColor="#e66118"
            secureTextEntry
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
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
