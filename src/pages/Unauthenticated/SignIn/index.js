/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';
import {Arrow} from '~/components/icons/Arrow';
import loadingjson from '~/assets/loadingjson';
import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function SignIn() {
  const loading = useSelector((state) => state.auth.loading);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(cpf, password));
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToForgot() {
    navigation.navigate('Forgot');
  }

  // function _hasErrors() {
  //   return email.includes('@');
  // }

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      {loading ? (
        <Background>
          <Container>
            <View style={{height: '100%', width: '100%', alignSelf: 'center'}}>
              <Lottie source={loadingjson} resizeMode="contain" autoPlay loop />
            </View>
          </Container>
        </Background>
      ) : (
        <Background>
          <Container>
            <TouchableOpacity
              style={{marginTop: '10%', paddingHorizontal: 20}}
              onPress={navigateBack}>
              <Arrow />
            </TouchableOpacity>

            {isKeyboardVisible ? (
              <Title style={{fontSize: 20, marginTop: 15, marginBottom: 0}}>
                Login
              </Title>
            ) : (
              <Title>Login</Title>
            )}

            <Body>
              <TextInput
                label="CPF"
                style={{
                  paddingHorizontal: 0,
                  backgroundColor: 'none',
                }}
                theme={{colors: {primary: '#e66118'}}}
                value={cpf}
                returnKeyType="next"
                onChangeText={setCpf}
                onSubmitEditing={() => passwordRef.current.focus()}
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
      )}
    </>
  );
}
