/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import api from '~/services/api';
import {Container, Title, Insidebox, AwardsView} from './styles';

import Background from '~/components/Background';
import Qrcode from '~/components/Qrcode';

const initialLayout = {width: Dimensions.get('window').width};

export default function Dashboard() {
  const [isModalVisibleRescue, setModalVisibleRescue] = useState(false);

  const [isModalVisibleQr, setModalVisibleQr] = useState(false);
  const [modalTitle, setModalTitle] = useState('nao mudou');

  const toggleModalQr = () => {
    setModalVisibleQr(!isModalVisibleQr);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/data');

      setItems(response.data);
    }

    loadItems();
  }, []);

  const FirstRoute = () => (
    <View>
      <AwardsView>
        <FlatList
          style={{marginVertical: 10}}
          data={items}
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

  const SecondRoute = () => (
    <View>
      <AwardsView>
        <FlatList
          style={{marginVertical: 10}}
          data={items}
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
                        backgroundColor: '#9b9b9b',
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
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Prêmios'},
    {key: 'second', title: 'Resgatados'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  function rescue() {
    setModalVisibleQr(!isModalVisibleQr);
    setModalVisibleRescue(!isModalVisibleRescue);
  }

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

                <Qrcode size={30} color="#fff" />
              </View>
            </Insidebox>
          </ImageBackground>

          <Modal
            style={{
              marginVertical: 40,
            }}
            isVisible={isModalVisibleQr}>
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 20,
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    onPress={() => setModalVisibleQr(!isModalVisibleQr)}>
                    <Icon name="close" color="#ccc" size={50} />
                  </TouchableOpacity>
                </View>
                <Image
                  style={{
                    width: 250,
                    height: 250,
                    alignSelf: 'center',
                  }}
                  source={{
                    uri:
                      'https://assets.xtechcommerce.com/uploads/images/medium/277403b46c912f6bfef153812c264f2a.jpg',
                  }}
                />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {modalTitle}
              </Text>
              <Text>
                A Capa de Almofada Belchior Design é descolada com modernas e
                divertidas estampas que estão no auge da moda.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#9b9b9b'}}>Ref. 89475639-5</Text>
                <Text style={{color: '#e66118', fontWeight: 'bold'}}>
                  145 P
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: '#e66118',
                  paddingHorizontal: '40%',
                  paddingVertical: 20,
                  borderRadius: 10,
                }}
                onPress={rescue}>
                <Text style={{color: '#fff'}}>Resgatar</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            style={{
              marginVertical: 200,
              marginHorizontal: 30,
            }}
            isVisible={isModalVisibleRescue}>
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 26, marginTop: 10}}>
                Resgatado!
              </Text>
              <Text style={{fontSize: 16}}>
                {' '}
                Seu produto foi resgatado, e você pode ir para um de nossos
                pontos de troca para receber o produto que você resgatou.
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: '#e66118',
                  paddingHorizontal: 120,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}
                onPress={() => setModalVisibleRescue(!isModalVisibleRescue)}>
                <Text style={{color: '#fff'}}>OK</Text>
              </TouchableOpacity>
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
