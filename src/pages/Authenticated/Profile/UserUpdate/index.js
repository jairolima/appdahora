/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';

import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TextInput, HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';

import {updateProfileRequest} from '~/store/modules/user/actions';

import {Container, SubmitButton, HeaderAvatar, Footer} from './styles';

export default function UserUpdate() {
  const user = useSelector((state) => state.user.profile);

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const surnameRef = useRef();
  const birthRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(updateProfileRequest(name, surname, birth, email, phone));
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ScrollView>
        <HeaderAvatar>
          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            <TouchableOpacity style={{marginTop: '10%'}} onPress={navigateBack}>
              <FontAwesome
                reverseColor
                name="long-arrow-left"
                color="#ccc"
                type="font-awesome"
                size={70}
              />
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
            onSubmitEditing={() => surnameRef.current.focus()}
            value={user.name}
            onChangeText={setName}
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
            onSubmitEditing={() => birthRef.current.focus()}
            value={user.surname}
            onChangeText={setSurname}
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
            value={user.birth}
            onChangeText={setBirth}
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
