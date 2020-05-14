/* eslint-disable react/jsx-props-no-spreading */
// import React, {useEffect, useState} from 'react';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
// instalar essa lib
// import Code from 'react-native-qrcode';
import Modal from 'react-native-modal';
// import api from '~/services/api';
import {Container, Title, Insidebox, AwardsView} from './styles';

import Background from '~/components/Background';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Capa Para Almofada Belchior',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Lustre Pendente Aramado Duplo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad23abb28ba',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd61aa95f63',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-gd96-145571229d72',
    title: 'Sixth Item',
  },
];

const initialLayout = {width: Dimensions.get('window').width};

export default function Dashboard() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisibleQr, setModalVisibleQr] = useState(false);
  const [modalTitle, setModalTitle] = useState('nao mudou');

  const toggleModalQr = () => {
    setModalVisibleQr(!isModalVisibleQr);
  };

  const FirstRoute = () => (
    <View>
      <AwardsView>
        <FlatList
          style={{marginVertical: 10}}
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setModalTitle(item.title);
                toggleModalQr();
              }}>
              <View
                style={{
                  height: 80,
                  marginVertical: 3,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 0,
                    height: 80,
                    margin: 0,
                  }}>
                  <View
                    style={{
                      width: '25%',
                      height: 80,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: 74,
                        height: 74,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 10,
                          borderWidth: 1.3,
                          borderColor: '#f5f5f5',
                        }}
                        source={{
                          uri:
                            'https://assets.xtechcommerce.com/uploads/images/medium/277403b46c912f6bfef153812c264f2a.jpg',
                        }}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      width: '55%',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    <Text
                      adjustsFontSizeToFit
                      numberOfLines={2}
                      style={{
                        fontWeight: 'bold',
                        color: '#303030',
                        fontSize: 18,
                      }}>
                      {item.title}
                    </Text>
                    <Text style={{color: '#9b9b9b'}}>Ref: 89475639-5</Text>
                  </View>

                  <View
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#E66221',
                        paddingHorizontal: 12,
                        paddingVertical: 3,
                        borderRadius: 6,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        48
                        <Text style={{fontSize: 12, fontWeight: '700'}}>
                          {' '}
                          P
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </AwardsView>
    </View>
  );

  const SecondRoute = () => <View style={{backgroundColor: '#673ab7'}} />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Prêmios'},
    {key: 'second', title: 'Resgatados'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   async function loadItems() {
  //     const response = await api.get('/api/unknown');

  //     setItems(response.data);
  //   }

  //   loadItems();
  // }, []);

  return (
    <Background>
      <Container>
        <ScrollView>
          <Text>{modalTitle}</Text>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Title>Seus pontos</Title>
            <Icon name="wifi" size={30} />
          </View>
          <ImageBackground
            source={require('../../../assets/card-bg.png')}
            style={{
              height: 168,
              borderRadius: 10,
              flexDirection: 'column',
              padding: 20,
              marginTop: 20,
            }}
            imageStyle={{borderRadius: 10}}>
            <Insidebox>
              <View>
                <Text style={{fontSize: 44, color: '#fff', fontWeight: 'bold'}}>
                  115<Text style={{fontSize: 16}}>P</Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    textTransform: 'uppercase',
                  }}>
                  PONTOS ACUMULADOS
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 14, color: '#fff8', fontWeight: 'bold'}}>
                  Válidos até{' '}
                  <Text style={{fontSize: 14, color: '#fff'}}>14/05/2018</Text>
                </Text>

                <TouchableOpacity onPress={toggleModal}>
                  <Icon name="qrcode" size={30} color="#fff" />
                  <Modal isVisible={isModalVisible} style={{margin: 0}}>
                    <View
                      style={{flex: 1, backgroundColor: 'white', padding: 20}}>
                      <Title>
                        Apresente este QR Code ao caixa, para adiquirir mais
                        pontos
                      </Title>

                      <ImageBackground
                        source={require('../../../assets/borders.png')}
                        style={{
                          width: 266,
                          height: 266,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'white',
                          marginHorizontal: 20,
                        }}>
                        <View style={{overflow: 'hidden'}}>
                          {/* <Code
                            value="dsds"
                            size={180}
                            bgColor="black"
                            fgColor="white"
                          /> */}
                          <Text>lugar do code</Text>
                        </View>
                      </ImageBackground>

                      <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
            </Insidebox>
          </ImageBackground>

          <Modal isVisible={isModalVisibleQr} style={{margin: 0}}>
            <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
              <Title>{modalTitle}</Title>

              <Button
                title="Hide modal"
                onPress={() => setModalVisibleQr(!isModalVisibleQr)}
              />
            </View>
          </Modal>

          <View style={{flex: 1, marginTop: 20}}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              renderTabBar={(
                props, // unnecessary, this is the default implementation
              ) => (
                <TabBar
                  {...props}
                  activeColor="#000"
                  inactiveColor="#ccc"
                  indicatorStyle={{backgroundColor: 'orange'}}
                  style={{
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#F1F6FC',
                  }}
                />
              )}
            />
          </View>
        </ScrollView>
      </Container>
    </Background>
  );
}
