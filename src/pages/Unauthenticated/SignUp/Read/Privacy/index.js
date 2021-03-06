import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Arrow} from '~/components/icons/Arrow';

import Background from '~/components/Background';

import {Container, Title} from './styles';

export default function Privacy() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <Background>
      <Container>
        <ScrollView>
          <TouchableOpacity
            style={{
              marginTop: '20%',
              marginBottom: '10%',
            }}
            onPress={navigateBack}>
            <Arrow />
          </TouchableOpacity>

          <Title>Privacidade</Title>

          <View>
            <Text style={{fontSize: 17, marginBottom: 40, color: '#333'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{fontSize: 17, marginBottom: 40, color: '#333'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </Container>
    </Background>
  );
}
