/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, HelperText} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import loadingjson from '~/assets/loadingjson';
import {Arrow} from '~/components/icons/Arrow';

import {signUpRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import Check from '~/components/Check';

import {
  Container,
  Body,
  Footer,
  SubmitButton,
  Title,
  InputAvatar,
  Row,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  const registerload = useSelector((state) => state.auth.registerload);
  const dispatch = useDispatch();
  const birthdayRef = useRef(null);
  const last_nameRef = useRef(null);
  const cpfRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmationRef = useRef(null);

  const [avatar, setAvatar] = useState('null');

  const [isEnabledPrivacy, setIsEnabledPrivacy] = useState(false);
  const [isEnabledTerms, setIsEnabledTerms] = useState(false);
  const toggleSwitchPrivacy = () =>
    setIsEnabledPrivacy((previousState) => !previousState);
  const toggleSwitchTerms = () =>
    setIsEnabledTerms((previousState) => !previousState);

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToPrivacy() {
    navigation.navigate('Privacy');
  }

  function navigateToTerms() {
    navigation.navigate('Terms');
  }

  const FormSchema = Yup.object().shape({
    first_name: Yup.string()
      .required('Campo obrigatório')
      .min(2, 'Digite pelo menos 2 caracteres'),
    last_name: Yup.string()
      .required('Campo obrigatório')
      .min(2, 'Digite pelo menos 2 caracteres'),
    cpf: Yup.string()
      .required('Campo obrigatório')
      .min(11, 'Digite pelo menos 11 caracteres'),
    birthday: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
    email: Yup.string()
      .required('Campo obrigatório')
      .email('Digite um email válido')
      .min(4, 'Digite pelo menos 4 caracteres'),
    phone: Yup.string()
      .required('Campo obrigatório')
      .min(11, 'Digite pelo menos 11 caracteres'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
    password_confirmation: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
  });

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
    <>
      {registerload ? (
        <Background>
          <Container>
            <View style={{height: '100%', width: '100%', alignSelf: 'center'}}>
              <Lottie source={loadingjson} resizeMode="contain" autoPlay loop />
            </View>
          </Container>
        </Background>
      ) : (
        <Background>
          <ScrollView>
            <TouchableOpacity
              style={{
                marginTop: '20%',
                marginBottom: '10%',
                paddingHorizontal: 20,
              }}
              onPress={navigateBack}>
              <Arrow />
            </TouchableOpacity>

            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                cpf: '',
                birthday: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
              }}
              onSubmit={(values) => {
                // Alert.alert('Sucesso!');
                if (isEnabledPrivacy && isEnabledTerms) {
                  dispatch(signUpRequest(values));
                } else {
                  return Alert.alert(
                    'Erro!',
                    'É necessário aceitar os termos de uso e politica de privacidade para continuar!',
                  );
                }

                console.tron.log(values);
              }}
              validationSchema={FormSchema}>
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                setFieldTouched,
              }) => (
                <>
                  <Title>Cadastrar</Title>

                  <InputAvatar onPress={setImage}>
                    <View
                      style={{
                        paddingHorizontal: 0,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {avatar === 'null' ? (
                        <View
                          style={{
                            height: 80,
                            width: 80,
                            borderRadius: 50,
                            backgroundColor: '#babdc2',
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
                        <Image
                          source={avatar}
                          style={{
                            height: 80,
                            width: 80,
                            borderRadius: 50,
                            backgroundColor: '#484848',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        />
                        // <Text>{avatar.uri}</Text>
                      )}

                      <Text
                        style={{paddingLeft: 35, fontSize: 16}}
                        adjustsFontSizeToFit
                        numberOfLines={3}
                        ellipsizeMode="tail">
                        Nos envie uma foto sua {'\n'}para identificação e {'\n'}
                        segurança.
                        <Text style={{color: '#e66118'}}> Enviar foto</Text>
                      </Text>
                    </View>
                  </InputAvatar>
                  <Container>
                    <Body>
                      <Row>
                        <TextInput
                          label="NOME *"
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          onSubmitEditing={() => last_nameRef.current.focus()}
                          value={values.first_name}
                          onChangeText={handleChange('first_name')}
                          onBlur={() => setFieldTouched('first_name', true)}
                        />
                        {!errors.first_name && touched.first_name && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.first_name && touched.first_name && (
                          <Text>{errors.first_name}</Text>
                        )}
                      </HelperText>
                      <Row>
                        <TextInput
                          label="SOBRENOME *"
                          ref={last_nameRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          // onSubmitEditing={() => cpfRef.current.focus()}
                          value={values.last_name}
                          onChangeText={handleChange('last_name')}
                          onBlur={() => setFieldTouched('last_name', true)}
                        />
                        {!errors.last_name && touched.last_name && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.last_name && touched.last_name && (
                          <Text>{errors.last_name}</Text>
                        )}
                      </HelperText>
                      <Row>
                        <TextInput
                          label="CPF *"
                          ref={cpfRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          // onSubmitEditing={() => birthdayRef.current.focus()}
                          value={values.cpf}
                          onChangeText={handleChange('cpf')}
                          render={(props) => (
                            <TextInputMask {...props} type="cpf" />
                          )}
                          onBlur={() => setFieldTouched('cpf', true)}
                        />
                        {!errors.cpf && touched.cpf && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.cpf && touched.cpf && <Text>{errors.cpf}</Text>}
                      </HelperText>
                      <Row>
                        <TextInput
                          label="DATA DE NASCIMENTO *"
                          ref={birthdayRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          onSubmitEditing={() => emailRef.current.focus()}
                          value={values.birthday}
                          onChangeText={handleChange('birthday')}
                          render={(props) => (
                            <TextInputMask
                              {...props}
                              type="custom"
                              options={{
                                mask: '99/99/9999',
                              }}
                            />
                          )}
                          onBlur={() => setFieldTouched('birthday', true)}
                        />
                        {!errors.birthday && touched.birthday && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.birthday && touched.birthday && (
                          <Text>{errors.birthday}</Text>
                        )}
                      </HelperText>
                      <Row>
                        <TextInput
                          label="EMAIL *"
                          ref={emailRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          // onSubmitEditing={() => phoneRef.current.focus()}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          onBlur={() => setFieldTouched('email', true)}
                        />
                        {!errors.email && touched.email && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.email && touched.email && (
                          <Text>{errors.email}</Text>
                        )}
                      </HelperText>

                      <Row>
                        <TextInput
                          label="TELEFONE *"
                          ref={phoneRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          onSubmitEditing={() => passwordRef.current.focus()}
                          value={values.phone}
                          onChangeText={handleChange('phone')}
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
                          onBlur={() => setFieldTouched('phone', true)}
                        />
                        {!errors.phone && touched.phone && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.phone && touched.phone && (
                          <Text>{errors.phone}</Text>
                        )}
                      </HelperText>

                      <Row>
                        <TextInput
                          label="SENHA *"
                          ref={passwordRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          secureTextEntry
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="done"
                          onSubmitEditing={() =>
                            password_confirmationRef.current.focus()
                          }
                          value={values.password}
                          onChangeText={handleChange('password')}
                          onBlur={() => setFieldTouched('password', true)}
                        />
                        {!errors.password && touched.password && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.password && touched.password && (
                          <Text>{errors.password}</Text>
                        )}
                      </HelperText>
                      <Row>
                        <TextInput
                          label="CONFIRMAR SENHA *"
                          ref={password_confirmationRef}
                          style={{
                            flex: 1,
                            paddingHorizontal: 0,
                            backgroundColor: 'none',
                          }}
                          secureTextEntry
                          theme={{colors: {primary: '#e66118'}}}
                          returnKeyType="send"
                          onSubmitEditing={handleSubmit}
                          value={values.password_confirmation}
                          onChangeText={handleChange('password_confirmation')}
                          onBlur={() =>
                            setFieldTouched('password_confirmation', true)
                          }
                        />
                        {!errors.password_confirmation &&
                          touched.password_confirmation && <Check />}
                      </Row>
                      <HelperText
                        style={{
                          paddingHorizontal: 0,
                        }}
                        type="error"
                        visible>
                        {errors.password_confirmation &&
                          touched.password_confirmation && (
                            <Text>{errors.password_confirmation}</Text>
                          )}
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
                        <Text style={{color: '#e66118'}}>
                          Política de Privacidade
                        </Text>
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
                          Desejo receber novidades e {'\n'}promoções do Cliente
                          Da Hora.
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
                </>
              )}
            </Formik>
          </ScrollView>
        </Background>
      )}
    </>
  );
}
