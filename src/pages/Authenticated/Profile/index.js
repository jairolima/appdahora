/* eslint-disable react/prop-types */
import React from 'react';

import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {signOut} from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import Qrcode from '~/components/Qrcode';

import {Container, MenuItem, ButtonCircle} from './styles';

export default function Menu() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
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
              marginTop: 80,
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
              <ButtonCircle style={{height: 100, width: 100, borderRadius: 50}}>
                <Icon name="camera" size={24} color="#000" />
              </ButtonCircle>
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

          <MenuItem>
            <Icon.Button
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
              iconStyle={{color: '#000', marginRight: 20}}
              name="user"
              backgroundColor="#fff"
              style={{
                height: 64,
                alignItems: 'center',
                paddingHorizontal: 30,
              }}>
              <Text style={{fontFamily: 'Arial', fontSize: 16}}>
                Meus cartões
              </Text>
            </Icon.Button>
          </MenuItem>
        </ScrollView>
      </Container>
    </Background>
  );
}
