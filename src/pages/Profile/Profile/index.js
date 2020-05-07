import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';
import {updateProfileRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton, Header} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector((state) => state.user.profile);

  const [phone, setPhone] = useState('');

  function navigateBack() {
    navigation.goBack();
  }

  function handleSubmit() {
    dispatch(updateProfileRequest({phone}));
  }

  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={navigateBack}>
          <FontAwesome
            reverseColor
            name="chevron-left"
            color="#3cf0c5"
            type="font-awesome"
            size={26}
          />
          <Text>Voltar</Text>
        </TouchableOpacity>
      </Header>
      <Container>
        <Form>
          <FormInput
            icon="user"
            autoCapitalize="none"
            placeholder={user.username}
            editable={false}
          />
          <FormInput
            icon="envelope"
            autoCapitalize="none"
            placeholder={user.email}
            editable={false}
          />

          <FormInput
            icon="user"
            autoCapitalize="none"
            placeholder={user.cpf}
            editable={false}
          />

          <FormInput
            icon="phone"
            autoCorrect={false}
            autoCapitalize="none"
            value={phone}
            onChangeText={setPhone}
            placeholder={user.phone}
          />

          <SubmitButton onPress={handleSubmit}>
            Atualizar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
