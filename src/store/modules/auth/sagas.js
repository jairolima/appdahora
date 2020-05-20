import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {signInSuccess, signFailure} from './actions';
import {navigate} from '~/services/navigationService';

export function* signIn({payload}) {
  try {
    const {cpf, password} = payload;
    const response = yield call(api.post, '/auth', {
      cpf,
      password,
    });

    const {token, user} = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seu cpf/senha',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {username, email, password, phone, cpf} = payload;

    yield call(api.post, 'users', {
      username,
      email,
      password,
      phone,
      cpf,
    });
    Alert.alert('Cadastro de Usuário', 'Cadastradado com sucesso!');
    navigate('SignIn');
    // history.push('/');
  } catch (err) {
    console.tron.log('erro no cadastro', err);
    Alert.alert('Falha no cadastro', 'verifique seus dados');
    yield put(signFailure());
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
]);
