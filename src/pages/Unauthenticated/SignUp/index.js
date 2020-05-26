/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, HelperText} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Arrow} from '~/components/icons/Arrow';

import {signUpRequest} from '~/store/modules/auth/actions';

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
  const birthdayRef = useRef();
  const last_nameRef = useRef();
  const cpfRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const password_confirmationRef = useRef();
  const zipcodeRef = useRef();
  const addressRef = useRef();
  const neighborhoodRef = useRef();
  const numberRef = useRef();
  const complementRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  const [avatar, setAvatar] = useState('null');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [isEnabledPrivacy, setIsEnabledPrivacy] = useState(false);
  const [isEnabledTerms, setIsEnabledTerms] = useState(false);
  const toggleSwitchPrivacy = () =>
    setIsEnabledPrivacy((previousState) => !previousState);
  const toggleSwitchTerms = () =>
    setIsEnabledTerms((previousState) => !previousState);

  function handleSubmit() {
    if (isEnabledPrivacy && isEnabledTerms) {
      dispatch(
        signUpRequest(
          avatar,
          first_name,
          last_name,
          cpf,
          birthday,
          email,
          phone,
          password,
          password_confirmation,
          zipcode,
          neighborhood,
          address,
          number,
          complement,
          city,
          state,
        ),
      );
    } else {
      return Alert.alert(
        'Erro!',
        'É necessário aceitar os termos de uso e politica de privacidade para continuar!',
      );
    }
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

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */

  async function setImage() {
    try {
      await ImagePicker.showImagePicker(
        {
          title: 'Selecionar Avatar',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        },
        (response) => {
          if (response.didCancel) {
            console.tron.log('User cancelled image picker');
          } else if (response.error) {
            console.tron.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.tron.log(
              'User tapped custom button: ',
              response.customButton,
            );
          } else {
            const source = {
              // uri: 'data:image/jpeg;base64,' + response.data,
              uri: response.uri,
              type: 'image/jpeg',
              name: response.fileName,
            };

            setAvatar(source);
          }
        },
      );
    } catch (e) {
      console.tron.log(e);
    }
  }

  return (
    <Background>
      <ScrollView>
        <TouchableOpacity
          style={{marginTop: '20%', marginBottom: '10%', paddingHorizontal: 20}}
          onPress={navigateBack}>
          <Arrow />
        </TouchableOpacity>

        <Title>Cadastrar</Title>

        <InputAvatar onPress={setImage}>
          <View
            style={{
              paddingHorizontal: 60,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {avatar === 'null' ? (
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
            ) : (
              // <Image
              //   source={avatar}
              //   style={{
              //     height: 100,
              //     width: 100,
              //     borderRadius: 50,
              //     backgroundColor: '#484848',
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //   }}
              // />
              <Text>{avatar.uri}</Text>
            )}

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
              label="SOBRENOME *"
              ref={last_nameRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => cpfRef.current.focus()}
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
              label="CPF"
              ref={cpfRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => birthdayRef.current.focus()}
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
              ref={birthdayRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={birthday}
              onChangeText={setBirthday}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type="custom"
                  options={{
                    mask: '99/99/9999',
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
              Data de nascimento invalido
            </HelperText>
            <TextInput
              label="EMAIL *"
              ref={emailRef}
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
              ref={phoneRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
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
            <TextInput
              label="SENHA *"
              ref={passwordRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => password_confirmationRef.current.focus()}
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
              ref={password_confirmationRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => zipcodeRef.current.focus()}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
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
              ref={zipcodeRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => addressRef.current.focus()}
              value={zipcode}
              onChangeText={setZipcode}
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
              ref={addressRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => neighborhoodRef.current.focus()}
              value={address}
              onChangeText={setAddress}
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
              ref={neighborhoodRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current.focus()}
              value={neighborhood}
              onChangeText={setNeighborhood}
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
              ref={numberRef}
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
              ref={complementRef}
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
              ref={cityRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              returnKeyType="next"
              onSubmitEditing={() => stateRef.current.focus()}
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
              returnKeyType="send"
              ref={stateRef}
              style={{
                paddingHorizontal: 0,
                backgroundColor: 'none',
              }}
              theme={{colors: {primary: '#e66118'}}}
              value={state}
              onChangeText={setState}
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
