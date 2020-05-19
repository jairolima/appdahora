/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, HelperText} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

// https://github.com/n4kz/react-native-material-textfield/issues/249
import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {
  Container,
  Body,
  Footer,
  SubmitButton,
  Title,
  InputAvatar,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const birthRef = useRef();
  const surnameRef = useRef();
  const cpfRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const cepRef = useRef();
  const streetRef = useRef();
  const neighborRef = useRef();
  const numberRef = useRef();
  const complementRef = useRef();
  const cityRef = useRef();
  const userstateRef = useRef();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cep, setCep] = useState('');
  const [neighbor, setNeighbor] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [userstate, setUserstate] = useState('');

  const signed = useSelector((state) => state.auth.signed);

  function handleSubmit() {
    dispatch(
      signInRequest(
        name,
        surname,
        cpf,
        birth,
        email,
        phone,
        password,
        cep,
        neighbor,
        street,
        number,
        complement,
        city,
        userstate,
      ),
    );
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToPrivacy() {
    navigation.navigate('Privacy');
  }

  function navigateToTerms() {
    navigation.navigate('Terms');
  }

  const [isEnabledPrivacy, setIsEnabledPrivacy] = useState(false);
  const [isEnabledTerms, setIsEnabledTerms] = useState(false);
  const toggleSwitchPrivacy = () =>
    setIsEnabledPrivacy((previousState) => !previousState);
  const toggleSwitchTerms = () =>
    setIsEnabledTerms((previousState) => !previousState);

  return (
    <Background>
      <ScrollView>
        <TouchableOpacity
          style={{marginTop: '10%', paddingHorizontal: 20}}
          onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="long-arrow-left"
            color="#ccc"
            type="font-awesome"
            size={70}
          />
          <Text>{signed}</Text>
        </TouchableOpacity>

        <Title>Cadastrar</Title>

        <InputAvatar>
          <View
            style={{
              paddingHorizontal: 60,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: '#484848',
                alignItems: 'center',
                justifyContent: 'center',
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
            <Text
              style={{paddingLeft: 12, fontSize: 16}}
              adjustsFontSizeToFit
              numberOfLines={3}
              ellipsizeMode="tail">
              Nos envie uma foto sua {'\n'}para identificação e {'\n'}segurança.
              <Text style={{color: '#e66118'}}> Enviar foto</Text>
            </Text>
          </View>
        </InputAvatar>
        <Container>
          <Body>
            <TextInput
              label="NOME *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => surnameRef.current.focus()}
              value={name}
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
              label="SOBRENOME *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => cpfRef.current.focus()}
              value={surname}
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
              label="CPF"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => birthRef.current.focus()}
              value={cpf}
              onChangeText={setCpf}
              render={(props) => <TextInputMask {...props} type="cpf" />}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              CPF invalido
            </HelperText>
            <TextInput
              label="DATA DE NASCIMENTO *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={birth}
              onChangeText={setBirth}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Data de nascimento invalido
            </HelperText>
            <TextInput
              label="EMAIL *"
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
              Email invalido
            </HelperText>

            <TextInput
              label="TELEFONE *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={phone}
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
            <TextInput
              label="SENHA *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Senha invalido
            </HelperText>
            <TextInput
              label="CONFIRMAR SENHA *"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => cepRef.current.focus()}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Confirmar Senha invalido
            </HelperText>
            <TextInput
              label="CEP"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => streetRef.current.focus()}
              value={cep}
              onChangeText={setCep}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              CEP invalido
            </HelperText>
            <TextInput
              label="RUA"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => neighborRef.current.focus()}
              value={street}
              onChangeText={setStreet}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              RUA invalido
            </HelperText>
            <TextInput
              label="BAIRRO"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current.focus()}
              value={neighbor}
              onChangeText={setNeighbor}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              BAIRRO invalido
            </HelperText>
            <TextInput
              label="NUMERO"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => complementRef.current.focus()}
              value={number}
              onChangeText={setNumber}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Numero invalido
            </HelperText>
            <TextInput
              label="COMPLEMENTO"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
              value={complement}
              onChangeText={setComplement}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Complemento invalido
            </HelperText>
            <TextInput
              label="CIDADE"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => userstateRef.current.focus()}
              value={city}
              onChangeText={setCity}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Cidade invalido
            </HelperText>
            <TextInput
              label="ESTADO"
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              value={userstate}
              onChangeText={setUserstate}
            />
            <HelperText
              style={{
                paddingHorizontal: 0,
              }}
              type="error"
              visible={false}>
              Cidade invalido
            </HelperText>

            <TouchableOpacity
              style={{marginTop: '10%', alignItems: 'center'}}
              activeOpacity={0.5}
              onPress={navigateToTerms}>
              <Text style={{color: '#e66118'}}>Termos de uso</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginTop: '10%', alignItems: 'center'}}
              activeOpacity={0.5}
              onPress={navigateToPrivacy}>
              <Text style={{color: '#e66118'}}>Política de Privacidade</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                marginTop: '15%',
                alignItems: 'center',
              }}>
              <Switch
                trackColor={{false: '#767577', true: '#e66118'}}
                thumbColor={isEnabledPrivacy ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchPrivacy}
                value={isEnabledPrivacy}
              />
              <Text
                adjustsFontSizeToFit
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{fontSize: 16, marginLeft: 10}}>
                Desejo receber novidades e {'\n'}promoções do Cliente Da Hora.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: '10%',
                alignItems: 'center',
              }}>
              <Switch
                trackColor={{false: '#767577', true: '#e66118'}}
                thumbColor={isEnabledTerms ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchTerms}
                value={isEnabledTerms}
              />
              <Text
                adjustsFontSizeToFit
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{fontSize: 16, marginLeft: 10}}>
                Li e concordo com os termos {'\n'}de uso, política de
                privacidade.
              </Text>
            </View>
          </Body>

          <Footer>
            <SubmitButton onPress={handleSubmit}>
              <Text>Cadastrar</Text>
            </SubmitButton>
          </Footer>
        </Container>
      </ScrollView>
    </Background>
  );
}
