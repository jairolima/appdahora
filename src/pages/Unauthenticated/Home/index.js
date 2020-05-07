import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Background from '~/components/Background';

import {Container, Logo, Phrase, SubmitButton, Btns} from './styles';

export default function Home() {
  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }
  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <Container>
        {/* <WifiIcon /> */}
        <Logo source={require('../../../assets/marca.png')} />

        <Phrase>
          Cadastre-se e tenha direito a pontos promocionais e Wi-Fi grátis em
          nossas lojas
        </Phrase>

        <Btns>
          <SubmitButton onPress={navigateToSignIn}>
            <Text>Login</Text>
          </SubmitButton>
          <SubmitButton
            style={{backgroundColor: '#fff'}}
            onPress={navigateToSignUp}>
            <Text style={{color: '#000'}}>Criar conta</Text>
          </SubmitButton>
        </Btns>
      </Container>
    </Background>
  );
}
