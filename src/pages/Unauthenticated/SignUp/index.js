/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
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
// import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Arrow} from '~/components/icons/Arrow';

// import {signUpRequest} from '~/store/modules/auth/actions';

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

  // const dispatch = useDispatch();
  const birthdayRef = useRef(null);
  const last_nameRef = useRef(null);
  const cpfRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmationRef = useRef(null);
  const zipcodeRef = useRef(null);
  const addressRef = useRef(null);
  const neighborhoodRef = useRef(null);
  const numberRef = useRef(null);
  const complementRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);

  const [avatar, setAvatar] = useState('null');
  // const [first_name, setFirst_name] = useState('');
  // const [last_name, setLast_name] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState('');
  // const [password_confirmation, setPassword_confirmation] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [neighborhood, setNeighborhood] = useState('');
  // const [address, setAddress] = useState('');
  // const [number, setNumber] = useState('');
  // const [complement, setComplement] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');

  const [isEnabledPrivacy, setIsEnabledPrivacy] = useState(false);
  const [isEnabledTerms, setIsEnabledTerms] = useState(false);
  const toggleSwitchPrivacy = () =>
    setIsEnabledPrivacy((previousState) => !previousState);
  const toggleSwitchTerms = () =>
    setIsEnabledTerms((previousState) => !previousState);

  // function handleSubmit() {
  //   if (isEnabledPrivacy && isEnabledTerms) {
  //     dispatch(
  //       signUpRequest(
  //         avatar,
  //         first_name,
  //         last_name,
  //         cpf,
  //         birthday,
  //         email,
  //         phone,
  //         password,
  //         password_confirmation,
  //         zipcode,
  //         neighborhood,
  //         address,
  //         number,
  //         complement,
  //         city,
  //         state,
  //       ),
  //     );
  //   } else {
  //     return Alert.alert(
  //       'Erro!',
  //       'É necessário aceitar os termos de uso e politica de privacidade para continuar!',
  //     );
  //   }
  // }

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
    zipcode: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
    neighborhood: Yup.string()
      .required('Campo obrigatório')
      .min(2, 'Digite pelo menos 2 caracteres'),
    address: Yup.string()
      .required('Campo obrigatório')
      .min(4, 'Digite pelo menos 4 caracteres'),
    number: Yup.string()
      .required('Campo obrigatório')
      .min(1, 'Digite pelo menos 1 caracteres'),
    complement: Yup.string()
      .required('Campo obrigatório')
      .min(3, 'Digite pelo menos 3 caracteres'),
    city: Yup.string()
      .required('Campo obrigatório')
      .min(3, 'Digite pelo menos 3 caracteres'),
    state: Yup.string()
      .required('Campo obrigatório')
      .min(3, 'Digite pelo menos 3 caracteres'),
  });

  // const [errorFirstName, setErrorFirstName] = useState(false);

  // useEffect(() => {
  //   const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  //   if (pattern.test(first_name) || first_name.lenght <= 2) {
  //     setErrorFirstName(true);
  //   } else {
  //     setErrorFirstName(false);
  //   }
  // }, [first_name]);

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
            zipcode: '',
            neighborhood: '',
            address: '',
            number: '',
            complement: '',
            city: '',
            state: '',
          }}
          onSubmit={(values) => {
            Alert.alert('Sucesso!');

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
                  {/* <Row>
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
                      onBlur={() => setFieldTouched('birthday', true)}
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
                    {!errors.birthday && touched.birthday && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.brithday && touched.birthday && (
                      <Text>{errors.birthday}</Text>
                    )}
                  </HelperText> */}
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
                      returnKeyType="done"
                      onSubmitEditing={() => zipcodeRef.current.focus()}
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
                  <Row>
                    <TextInput
                      label="CEP"
                      ref={zipcodeRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => addressRef.current.focus()}
                      value={values.zipcode}
                      onChangeText={handleChange('zipcode')}
                      onBlur={() => setFieldTouched('zipcode', true)}
                    />
                    {!errors.zipcode && touched.zipcode && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.zipcode && touched.zipcode && (
                      <Text>{errors.zipcode}</Text>
                    )}
                  </HelperText>

                  <Row>
                    <TextInput
                      label="RUA"
                      ref={addressRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => neighborhoodRef.current.focus()}
                      value={values.address}
                      onChangeText={handleChange('address')}
                      onBlur={() => setFieldTouched('address', true)}
                    />
                    {!errors.address && touched.address && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.address && touched.address && (
                      <Text>{errors.address}</Text>
                    )}
                  </HelperText>
                  <Row>
                    <TextInput
                      label="BAIRRO"
                      ref={neighborhoodRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => numberRef.current.focus()}
                      value={values.neighborhood}
                      onChangeText={handleChange('neighborhood')}
                      onBlur={() => setFieldTouched('neighborhood', true)}
                    />
                    {!errors.neighborhood && touched.neighborhood && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.neighborhood && touched.neighborhood && (
                      <Text>{errors.neighborhood}</Text>
                    )}
                  </HelperText>
                  <Row>
                    <TextInput
                      label="NUMERO"
                      ref={numberRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => complementRef.current.focus()}
                      value={values.number}
                      onChangeText={handleChange('number')}
                      onBlur={() => setFieldTouched('number', true)}
                    />
                    {!errors.number && touched.number && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.number && touched.number && (
                      <Text>{errors.number}</Text>
                    )}
                  </HelperText>
                  <Row>
                    <TextInput
                      label="COMPLEMENTO"
                      ref={complementRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => cityRef.current.focus()}
                      value={values.complement}
                      onChangeText={handleChange('complement')}
                      onBlur={() => setFieldTouched('complement', true)}
                    />
                    {!errors.complement && touched.complement && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.complement && touched.complement && (
                      <Text>{errors.complement}</Text>
                    )}
                  </HelperText>
                  <Row>
                    <TextInput
                      label="CIDADE"
                      ref={cityRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      returnKeyType="done"
                      onSubmitEditing={() => stateRef.current.focus()}
                      value={values.city}
                      onChangeText={handleChange('city')}
                      onBlur={() => setFieldTouched('city', true)}
                    />
                    {!errors.city && touched.city && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.city && touched.city && <Text>{errors.city}</Text>}
                  </HelperText>
                  <Row>
                    <TextInput
                      label="ESTADO"
                      returnKeyType="send"
                      ref={stateRef}
                      style={{
                        flex: 1,
                        paddingHorizontal: 0,
                        backgroundColor: 'none',
                      }}
                      theme={{colors: {primary: '#e66118'}}}
                      value={values.state}
                      onChangeText={handleChange('state')}
                      onBlur={() => setFieldTouched('state', true)}
                    />
                    {!errors.state && touched.state && <Check />}
                  </Row>
                  <HelperText
                    style={{
                      paddingHorizontal: 0,
                    }}
                    type="error"
                    visible>
                    {errors.state && touched.state && (
                      <Text>{errors.state}</Text>
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
                      Desejo receber novidades e {'\n'}promoções do Cliente Da
                      Hora.
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
  );
}
