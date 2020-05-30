/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';

import {TouchableOpacity, ScrollView, Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '~/services/api';
import {Arrow} from '~/components/icons/Arrow';

import Background from '~/components/Background';

import {Container, Title} from './styles';

export default function UserPointsHistory() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/history');

      setItems(response.data);
    }

    loadItems();
  }, []);
  return (
    <Background>
      <Container>
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
          <Title>Histórico</Title>

          <FlatList
            style={{marginVertical: 10}}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 5,
                  marginHorizontal: 16,
                  height: 85,
                  shadowOffset: {
                    width: 1,
                    height: 2,
                  },
                  shadowRadius: 10,
                  shadowOpacity: 0.03,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      color: '#e66118',
                    }}>
                    25
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '100',
                      color: 'rgba(0,0,0,0.8)',
                    }}>
                    MAY
                  </Text>
                </View>
                <View>
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={2}
                    style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginBottom: 6,
                    }}>
                    +{item.point} pontos
                  </Text>
                  <Text style={{color: 'rgba(0,0,0,0.3)', fontSize: 12}}>
                    Válidos até 14/02/2018
                  </Text>
                </View>
                <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.3)'}}>
                  08:11
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </Container>
    </Background>
  );
}
