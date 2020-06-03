import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {updateProfileSuccess, updateProfilefailure} from './actions';
import {navigate} from '~/services/navigationService';

export function* updateProfile({payload}) {
  try {
    const {phone, email, first_name, last_name, access_token} = payload;

    const profile = {
      phone,
      email,
      first_name,
      last_name,
      access_token,
    };

    const response = yield call(api.put, '/clients/update', profile, {
      headers: {Authorization: `Bearer ${access_token}`},
    });

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data.data));
    navigate('Menu');
  } catch (error) {
    Alert.alert('Erro!', 'Erro ao atualizar Perfil');

    yield put(updateProfilefailure());
    navigate('Menu');
  }
}

export function* updatePassword({payload}) {
  try {
    const {password, password_confirmation, access_token} = payload;

    const profile = {
      password,
      password_confirmation,
      access_token,
    };

    yield call(api.put, '/clients/password', profile, {
      headers: {Authorization: `Bearer ${access_token}`},
    });

    Alert.alert('Sucesso!', 'Senha atualizada com sucesso!');
    navigate('Menu');
  } catch (error) {
    Alert.alert(
      'Erro!',
      'Erro ao atualizar Senha, a senha deve conter pelo menos 6 digitos',
    );
    navigate('Menu');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_PASSWORD_REQUEST', updatePassword),
]);
