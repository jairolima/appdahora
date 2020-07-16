/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';

import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TextInput, HelperText} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';
import Background from '~/components/Background';
import {Arrow} from '~/components/icons/Arrow';

import {updateProfileRequest} from '~/store/modules/user/actions';

import {Container, SubmitButton, HeaderAvatar, Footer} from './styles';

export default function UserUpdate() {
  const user = useSelector((state) => state.user.profile);
  const access_token = useSelector((state) => state.auth.token.access_token);

  const navigation = useNavigation();

  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  // const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const last_nameRef = useRef();
  const birthdayRef = useRef();
  // const emailRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest(first_name, last_name, email, phone, access_token),
    );
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ScrollView>
        <HeaderAvatar>
          {/* <Text>{JSON.stringify(user)}</Text> */}
          {/* <Text>{JSON.stringify(access_token)}</Text> */}
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
            value={first_name}
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
            value={last_name}
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
            label="EMAIL"
            style={{
              paddingHorizontal: 0,
              backgroundColor: 'none',
            }}
            theme={{colors: {primary: '#e66118'}}}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
            value={email}
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
            value={phone}
            onChangeText={setPhone}
            render={(props) => (
              <TextInputMask
                {...props}
                type="cel-phone"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
              />
            )}
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
