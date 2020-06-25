/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Header} from './styles';
import Background from '~/components/Background';
import {Arrow} from '~/components/icons/Arrow';

const Detail = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }
  return (
    <Background>
      <Container>
        <ScrollView>
          <Header>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
              }}
              onPress={navigateBack}>
              <Arrow />
            </TouchableOpacity>
          </Header>
          <View style={{height: 200, width: '100%', backgroundColor: 'red'}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri: `${item.thumbnail}`,
              }}
            />
          </View>

          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <Text numberOfLines={2} style={{fontWeight: 'bold', fontSize: 26}}>
              {item.name}
            </Text>
            <Text style={{marginTop: 20, fontSize: 18, color: '#9b9b9b'}}>
              {item.body}
            </Text>
          </View>

          <View style={{height: 100, backgroundColor: '#e8ecf2'}} />

          <View style={{height: 100, backgroundColor: '#c1c5ca'}} />
        </ScrollView>
      </Container>
    </Background>
  );
};

export default Detail;
