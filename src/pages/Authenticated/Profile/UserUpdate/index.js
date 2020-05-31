/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';

import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TextInput, HelperText} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import Background from '~/components/Background';
import {Arrow} from '~/components/icons/Arrow';

import {updateProfileRequest} from '~/store/modules/user/actions';

import {Container, SubmitButton, HeaderAvatar, Footer} from './styles';

export default function UserUpdate() {
  // const user = useSelector((state) => state.user.profile);

  const user = {
    id: 10,
    slug: 'jairo-lima',
    name: 'Jairo Lima',
    first_name: 'Jairo',
    last_name: 'Lima',
    phone: '83998620082',
    sexo: 0,
    email: 'msgjairo@gmail.com',
    cpf: '07726192470',
    avatar: 'https://clientedahora.com.br/assets/images/faces/default.png',
    birthday: '22/11/1990',
    salt_points: '0P',
  };

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
                paddingHorizontal: 20,
              }}
              onPress={navigateBack}>
              <Arrow />
            </TouchableOpacity>
          </View>
          <Image
            style={{height: 80, width: 80}}
            source={{
              uri:
                'https://clientedahora.com.br/assets/images/faces/default.png',
            }}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: '#e66118',
                fontSize: 14,
                textAlign: 'center',
                marginBottom: 24,
                marginTop: 5,
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
