import React from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signOut} from '~/store/modules/auth/actions';


import {Container, LogoutButton, LoginButton, ProfileButton} from './styles';
import Background from '~/components/Background';

export default function Account() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signed = useSelector((state) => state.auth.signed);
  // const auth = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.profile);


  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function navigateToVouchers() {
    navigation.navigate('Vouchers');
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>


      {signed && (<Text>Olá {user.username},</Text>)}
      {signed && (<ProfileButton onPress={navigateToVouchers}>Meus Vouchers</ProfileButton>)}
      {signed && (<ProfileButton onPress={navigateToProfile}>Meu Perfil</ProfileButton>)}
      {signed && (<LogoutButton onPress={handleLogout}>Sair</LogoutButton>)}   

      {!signed && (<LoginButton onPress={navigateToSignIn}>Entrar</LoginButton>)}

      <ProfileButton onPress={navigateToVouchers}>Politicas de Privacidade</ProfileButton>
      <ProfileButton onPress={navigateToVouchers}>Atendimento</ProfileButton>
      <ProfileButton onPress={navigateToVouchers}>Sobre o App</ProfileButton>
      </Container>
    </Background>
  );
}
