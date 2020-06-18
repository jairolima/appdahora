import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {
  signInSuccess,
  signFailure,
  signUpSuccess,
  signUpFailure,
} from './actions';
import {navigate} from '~/services/navigationService';

export function* signIn({payload}) {
  try {
    const {cpf, password} = payload;
    const response = yield call(api.post, '/auth', {
      cpf,
      password,
    });

    const {token, user} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token.access_token}`;

    // yield delay(7000) and also import delay from redux-saga/effects;

    // console.tron.log(token.access_token);

    const rescue = yield call(api.get, '/clients/awards');

    yield put(signInSuccess(token, user, rescue));
    navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seu cpf/senha',
    );
    yield put(signFailure());
  }
}

export function* forgotRequest({payload}) {
  try {
    const {email} = payload;

    yield call(api.post, '/auth/forgot-password', {
      email,
    });
    Alert.alert(
      'Esqueci a senha',
      'Uma nova senha foi enviado para o seu email!',
    );
    navigate('SignIn');
  } catch (err) {
    Alert.alert('Falha ao recuperar senha', 'verifique seu email');
  }
}

export function* signUp({payload}) {
  try {
    const {first_name, last_name, ...rest} = payload.values;

    yield call(api.post, '/clients', {
      first_name,
      last_name,
      ...rest,
    });
    Alert.alert('Cadastro de Usuário', 'Cadastradado com sucesso!');
    yield put(signUpSuccess());
    navigate('SignIn');
  } catch (err) {
    console.tron.log('erro no cadastro', err);
    Alert.alert('Falha no cadastro', 'verifique seus dados');
    yield put(signUpFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGOT_REQUEST', forgotRequest),
]);
