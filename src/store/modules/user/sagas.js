import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfilefailure,
  updatePasswordSuccess,
  updatePasswordfailure,
} from './actions';

export function* updateProfile({payload}) {
  try {
    const {phone} = payload.data;

    const profile = {
      phone,
    };

    const response = yield call(api.put, '/clients/update', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro!', 'Erro ao atualizar Perfil');
    yield put(updateProfilefailure());
  }
}

export function* updatePassword({payload}) {
  try {
    const {password, password_confirmation} = payload.data;

    const profile = {
      password,
      password_confirmation,
    };

    const response = yield call(api.put, 'clients/password', profile);

    Alert.alert('Sucesso!', 'Senha atualizada com sucesso!');

    yield put(updatePasswordSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro!', 'Erro ao atualizar Senha');
    yield put(updatePasswordfailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_PASSWORD_REQUEST', updatePassword),
]);
