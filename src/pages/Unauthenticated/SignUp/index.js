import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

// https://github.com/n4kz/react-native-material-textfield/issues/249
import {TextField} from 'react-native-material-textfield';
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
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
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

  const formatText = (text) => {
    return text.replace(/[^\d]+/g, '');
  };

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
            <TextField
              label="NOME *"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={name}
              onChangeText={setName}
            />
            <TextField
              label="SOBRENOME *"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={surname}
              onChangeText={setSurname}
            />
            <TextField
              label="CPF *"
              formatText={formatText}
              tintColor="#e66118"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={cpf}
              onChangeText={setCpf}
            />
            <TextField
              label="DATA DE NASCIMENTO *"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={birth}
              onChangeText={setBirth}
            />
            <TextField
              label="EMAIL *"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <TextField
              label="TELEFONE *"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={phone}
              onChangeText={setPhone}
            />
            <TextField
              label="SENHA *"
              tintColor="#e66118"
              secureTextEntry
              returnKeyType="send"
              ref={passwordRef}
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <TextField
              label="CONFIRMAR SENHA *"
              tintColor="#e66118"
              secureTextEntry
              returnKeyType="send"
              ref={passwordRef}
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <TextField
              label="CEP"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={cep}
              onChangeText={setCep}
            />
            <TextField
              label="RUA"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={street}
              onChangeText={setStreet}
            />
            <TextField
              label="Bairro"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={neighbor}
              onChangeText={setNeighbor}
            />
            <TextField
              label="NUMERO"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={number}
              onChangeText={setNumber}
            />
            <TextField
              label="COMPLEMENTO"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={complement}
              onChangeText={setComplement}
            />
            <TextField
              label="CIDADE"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={city}
              onChangeText={setCity}
            />
            <TextField
              label="ESTADO"
              tintColor="#e66118"
              autoCorrect={false}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={userstate}
              onChangeText={setUserstate}
            />

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
