/* eslint-disable react/prop-types */
import React from 'react';

import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signOut} from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import Qrcode from '~/components/Qrcode';

import {Container, MenuItem, ButtonCircle} from './styles';

export default function Menu() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  function navigateToUserUpdate() {
    navigation.navigate('UserUpdate');
  }

  function navigateToUserPointsHistory() {
    navigation.navigate('UserPointsHistory');
  }

  function navigateToPrivacy() {
    navigation.navigate('Privacy');
  }

  function navigateToUserRecoveryPassword() {
    navigation.navigate('UserRecoveryPassword');
  }

  return (
    <Background>
      <Container>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
              marginBottom: 80,
              paddingHorizontal: 40,
            }}>
            <View style={{alignItems: 'center'}}>
              <ButtonCircle>
                <Qrcode size={24} color="#e66118" />
              </ButtonCircle>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'rgba(0,0,0,0.5)',
                }}>
                QR CODE
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 80, width: 80}}
                source={{
                  uri:
                    'https://clientedahora.com.br/assets/images/faces/default.png',
                }}
              />
              <Text style={{fontSize: 22}}>Jocelyn K.</Text>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'rgba(0,0,0,0.5)',
                }}>
                096.948.304-59
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleLogout}
              style={{alignItems: 'center'}}>
              <ButtonCircle>
                <Icon name="sign-out" size={24} color="#000" />
              </ButtonCircle>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'rgba(0,0,0,0.5)',
                }}>
                SAIR
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <MenuItem>
              <Icon.Button
                onPress={navigateToUserUpdate}
                iconStyle={{color: '#000', marginRight: 20}}
                name="user"
                backgroundColor="#fff"
                style={{
                  height: 64,
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                  Meus dados
                </Text>
              </Icon.Button>
            </MenuItem>
            <MenuItem>
              <Icon.Button
                onPress={navigateToUserPointsHistory}
                iconStyle={{color: '#000', marginRight: 20}}
                name="bitcoin"
                backgroundColor="#fff"
                style={{
                  height: 64,
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                  Meus pontos
                </Text>
              </Icon.Button>
            </MenuItem>
            <MenuItem>
              <Icon.Button
                onPress={navigateToPrivacy}
                iconStyle={{color: '#000', marginRight: 20}}
                name="shield"
                backgroundColor="#fff"
                style={{
                  height: 64,
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                  Política de Privacidade
                </Text>
              </Icon.Button>
            </MenuItem>
            <MenuItem>
              <Icon.Button
                onPress={navigateToUserRecoveryPassword}
                iconStyle={{color: '#000', marginRight: 20}}
                name="key"
                backgroundColor="#fff"
                style={{
                  height: 64,
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                  Alterar Senha
                </Text>
              </Icon.Button>
            </MenuItem>
            <MenuItem style={{marginBottom: 80}}>
              <Icon.Button
                iconStyle={{color: '#e66118', marginRight: 20}}
                name="wifi"
                backgroundColor="#fff"
                style={{
                  height: 64,
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                  Conectado
                </Text>
              </Icon.Button>
            </MenuItem>
          </View>
        </ScrollView>
      </Container>
    </Background>
  );
}
