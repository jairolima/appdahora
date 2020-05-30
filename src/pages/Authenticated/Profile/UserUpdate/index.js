/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';

import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TextInput, HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';
import {Arrow} from '~/components/icons/Arrow';

import {updateProfileRequest} from '~/store/modules/user/actions';

import {Container, SubmitButton, HeaderAvatar, Footer} from './styles';

export default function UserUpdate() {
  const user = useSelector((state) => state.user.profile);

  const navigation = useNavigation();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const last_nameRef = useRef();
  const birthdayRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest(first_name, last_name, birthday, email, phone),
    );
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ScrollView>
        <HeaderAvatar>
          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            <TouchableOpacity
              style={{
                marginTop: '20%',
                marginBottom: '10%',
                paddingHorizontal: 20,
              }}
              onPress={navigateBack}>
              <Arrow />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#484848',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
            }}>
            <FontAwesome
              reverseColor
              name="camera"
              label="Nos envie uma foto sua para identificação e segurança."
              color="#fff"
              type="font-awesome"
              size={23}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#e66118',
                fontSize: 14,
                textAlign: 'center',
                marginBottom: 24,
              }}>
              Alterar foto de perfil
            </Text>
          </TouchableOpacity>
        </HeaderAvatar>
        <Container>
          <TextInput
            label="NOME"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            returnKeyType="next"
            onSubmitEditing={() => last_nameRef.current.focus()}
            value={user.first_name}
            onChangeText={setFirst_name}
          />
          <HelperText
            style={{
              paddingHorizontal: 0,
            }}
            type="error"
            visible={false}>
            Nome invalido
          </HelperText>
          <TextInput
            label="SOBRENOME"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            returnKeyType="next"
            onSubmitEditing={() => birthdayRef.current.focus()}
            value={user.last_name}
            onChangeText={setLast_name}
          />
          <HelperText
            style={{
              paddingHorizontal: 0,
            }}
            type="error"
            visible={false}>
            Sobrenome invalido
          </HelperText>
          <TextInput
            label="NASCIMENTO"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={user.birthday}
            onChangeText={setBirthday}
          />
          <HelperText
            style={{
              paddingHorizontal: 0,
            }}
            type="error"
            visible={false}>
            Email invalido
          </HelperText>
          <TextInput
            label="EMAIL"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
            value={user.email}
            onChangeText={setEmail}
          />
          <HelperText
            style={{
              paddingHorizontal: 0,
            }}
            type="error"
            visible={false}>
            Nome invalido
          </HelperText>
          <TextInput
            label="TELEFONE"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            value={user.phone}
            onChangeText={setPhone}
          />
          <HelperText
            style={{
              paddingHorizontal: 0,
            }}
            type="error"
            visible={false}>
            Telefone invalido
          </HelperText>

          <Footer>
            <SubmitButton onPress={handleSubmit}>
              <Text>Confirmar</Text>
            </SubmitButton>
          </Footer>
        </Container>
      </ScrollView>
    </Background>
  );
}
