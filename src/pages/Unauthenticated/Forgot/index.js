import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

// https://github.com/n4kz/react-native-material-textfield/issues/249
import {TextField} from 'react-native-material-textfield';
import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Body, Footer, SubmitButton, Title} from './styles';

export default function Forgot() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [cpf, setCpf] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  // TODO FORGOT REQUEST
  function handleSubmit() {
    dispatch(signInRequest(cpf));
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <Container>
        <TouchableOpacity style={{marginTop: '10%'}} onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="long-arrow-left"
            color="#ccc"
            type="font-awesome"
            size={70}
          />
          <Text>{signed}</Text>
        </TouchableOpacity>

        <Title>Recuperar Senha</Title>

        <Body>
          <TextField
            label="CPF"
            tintColor="#e66118"
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={cpf}
            onChangeText={setCpf}
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
