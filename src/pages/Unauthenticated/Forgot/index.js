/* eslint-disable react/jsx-props-no-spreading */
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Arrow} from '~/components/icons/Arrow';

import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function Forgot() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [cpf, setCpf] = useState('');

  // TODO FORGOT REQUEST
  function handleSubmit() {
    dispatch(signInRequest(cpf));
  }

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

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <Container>
        <TouchableOpacity
          style={{
            marginTop: '10%',
            marginBottom: '10%',
          }}
          onPress={navigateBack}>
          <Arrow />
        </TouchableOpacity>

        {isKeyboardVisible ? (
          <Title style={{fontSize: 20, marginTop: 0}}>Recuperar Senha</Title>
        ) : (
          <Title>Recuperar Senha</Title>
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
