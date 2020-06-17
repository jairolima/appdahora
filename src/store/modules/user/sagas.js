import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfilefailure,
  updateAwardsSuccess,
  updateRescueSuccess,
} from './actions';
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
      // TODO remove or use headers because token is already passed in profile
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

export function* storeAwardsRequest({payload}) {
  try {
    const {modalId} = payload;

    yield call(api.post, `/awards/redeem/${modalId}`);
    // const rescue = yield call(api.get, `/clients/awards`);
    // yield put(storeAwardsSuccess(rescue));

    // const {response} = yield call(api.get, `/me`);
    // yield put(storeAwardsSuccess());

    Alert.alert('Resgate', 'Resgate efetuado com sucesso!');

    try {
      const response = yield call(api.get, '/clients/me');

      // Alert.alert('Sucesso!', 'Pontos atualizados!');

      yield put(updateAwardsSuccess(response.data.data));
    } catch (error) {
      Alert.alert('Erro!', 'Erro ao atualizar Pontos');
    }

    try {
      const rescue = yield call(api.get, '/clients/awards');

      // Alert.alert('Sucesso!', 'Historico atualizado!');

      yield put(updateRescueSuccess(rescue));
    } catch (error) {
      Alert.alert('Erro!', 'Historico nao atualizado');
    }
  } catch (err) {
    console.tron.log('erro no resgate', err);
    Alert.alert('Falha no resgate', 'Problema no resgate');
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
  takeLatest('@user/STORE_AWARDS_REQUEST', storeAwardsRequest),
]);
