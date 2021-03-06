/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
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
import {useSelector, useDispatch} from 'react-redux';
import {TabView, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';
import {BoxIcon} from '~/components/icons';
import loadingjson from '~/assets/loadingjson';

import {Container, Title, Insidebox, AwardsView} from './styles';
import lazyload from '~/assets/lazyload';

import Background from '~/components/Background';
import Qrcode from '~/components/Qrcode';
import {storeAwardsRequest} from '~/store/modules/user/actions';

const initialLayout = {width: Dimensions.get('window').width};

Icon.loadFont();

export default function Dashboard() {
  const rescueload = useSelector((state) => state.user.rescueload);
  const user = useSelector((state) => state.user.profile);
  const access_token = useSelector((state) => state.auth.token.access_token);
  const user_rescue = useSelector((state) => state.user.rescue.data);

  const dispatch = useDispatch();

  const [isModalVisibleQr, setModalVisibleQr] = useState(false);
  const [modalTitle, setModalTitle] = useState('nao mudou');
  const [modalBody, setModalBody] = useState('Modal body content');
  const [modalCode, setModalCode] = useState('Modal code');
  const [modalPoints, setModalPoints] = useState('Modal points');
  const [modalThumbnail, setModalThumbnail] = useState('Modal thumbnail');
  const [modalButton, setModalButton] = useState(null);
  const [modalId, setModalId] = useState(null);

  const toggleModalQr = () => {
    setModalVisibleQr(!isModalVisibleQr);
  };

  const [items, setItems] = useState('empty');
  const [apiLoad, setApiLoad] = useState(false);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/awards');
      setItems(response.data);
    }

    loadItems();
  }, []);

  const FirstRoute = ({isActiveTab}) => (
    <>
      {isActiveTab ? (
        <View>
          {items.message === 'empty' ? (
            <View>
              <AwardsView style={{height: 200}}>
                <BoxIcon fill="#E66118" />
                <Text style={{marginTop: 20}}>Não há prêmios cadastrados</Text>
              </AwardsView>
            </View>
          ) : (
            <View>
              <AwardsView
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 2.84,
                  elevation: 1,
                }}>
                {apiLoad ? null : (
                  <Lottie
                    style={{
                      marginTop: -40,
                      width: '160%',
                      alignSelf: 'center',
                    }}
                    source={lazyload}
                    resizeMode="contain"
                    autoPlay
                    loop
                  />
                )}
                <FlatList
                  style={{marginVertical: 10}}
                  legacyImplementation
                  data={items.data}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onLoad={setApiLoad(true)}
                      onPress={() => {
                        setModalId(item.id);
                        setModalTitle(item.name);
                        setModalBody(item.body);
                        setModalCode(item.code);
                        setModalPoints(item.points);
                        setModalThumbnail(item.thumbnail);
                        setModalButton(null);

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
                                  uri: `https://clientedahora.com.br${item.thumbnail}`,
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
                                fontWeight: '700',
                                color: '#303030',
                                fontSize: 18,
                              }}>
                              {item.name}
                            </Text>
                            <Text style={{color: '#9b9b9b'}}>
                              Ref: {item.code}
                            </Text>
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
                                flex: 1,
                                width: 50,
                                maxHeight: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontWeight: '700',
                                  fontSize: 16,
                                }}>
                                {item.points}
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: '700',
                                  }}>
                                  P
                                </Text>
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  // https://github.com/filipemerker/flatlist-performance-tips
                  // Performance settings
                />
              </AwardsView>
            </View>
          )}
        </View>
      ) : (
        <View />
      )}
    </>
  );

  const SecondRoute = ({isActiveTab}) => (
    <>
      {isActiveTab ? (
        <View>
          {user_rescue.message === 'empty' ? (
            <View>
              <AwardsView style={{height: 200}}>
                <BoxIcon fill="#9B9B9B" />
                <Text style={{marginTop: 20}}>
                  Você ainda não resgatou nenhum prêmio
                </Text>
              </AwardsView>
            </View>
          ) : (
            <View>
              <AwardsView
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 2.84,
                  elevation: 1,
                }}>
                <FlatList
                  style={{marginVertical: 10}}
                  legacyImplementation
                  data={user_rescue.data}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        setModalTitle(item.name);
                        setModalBody(item.body);
                        setModalCode(item.code);

                        setModalPoints(item.points);
                        setModalThumbnail(item.thumbnail);
                        setModalButton(item.created_at);
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
                                  uri: `https://clientedahora.com.br${item.thumbnail}`,
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
                              {item.name}
                            </Text>
                            <Text style={{color: '#9b9b9b'}}>
                              Ref: {item.code}
                            </Text>
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
                                flex: 1,
                                width: 50,
                                maxHeight: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontWeight: 'bold',
                                  fontSize: 16,
                                }}>
                                {item.points}
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
          )}
        </View>
      ) : (
        <View />
      )}
    </>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Prêmios'},
    {key: 'second', title: 'Resgatados'},
  ]);

  function rescue() {
    dispatch(storeAwardsRequest(modalId, access_token));
    setModalVisibleQr(!isModalVisibleQr);
  }

  return (
    <>
      {rescueload ? (
        <Background>
          <Container>
            <View style={{height: '100%', width: '100%', alignSelf: 'center'}}>
              <Lottie source={loadingjson} resizeMode="contain" autoPlay loop />
            </View>
          </Container>
        </Background>
      ) : (
        <Background>
          <Container>
            <ScrollView>
              {/* <Text>{modalTitle}</Text> */}
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
                    <Text
                      style={{fontSize: 44, color: '#fff', fontWeight: 'bold'}}>
                      {user.salt_points}
                      <Text style={{fontSize: 16}}>P</Text>
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
                      style={{
                        fontSize: 14,
                        color: '#fff8',
                        fontWeight: 'bold',
                      }}>
                      Válidos até{' '}
                      <Text style={{fontSize: 14, color: '#fff'}}>
                        14/05/2018
                      </Text>
                    </Text>

                    <Qrcode size={30} color="#fff" />
                  </View>
                </Insidebox>
              </ImageBackground>

              <Modal
                style={{
                  marginVertical: 40,
                }}
                onSwipeComplete={() => setModalVisibleQr(!isModalVisibleQr)}
                swipeDirection={['up', 'left', 'right', 'down']}
                isVisible={isModalVisibleQr}>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    padding: 20,
                    maxHeight: 600,
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
                        uri: `https://clientedahora.com.br${modalThumbnail}`,
                      }}
                    />
                  </View>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {modalTitle}
                  </Text>
                  <Text>{modalBody}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#9b9b9b'}}>Ref. {modalCode}</Text>
                    <Text style={{color: '#e66118', fontWeight: 'bold'}}>
                      {modalPoints}
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '700',
                        }}>
                        P
                      </Text>
                    </Text>
                  </View>

                  {modalButton !== null ? (
                    <View
                      style={{
                        backgroundColor: '#9b9b9b',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        paddingVertical: 20,
                        borderRadius: 10,
                      }}
                      onPress={rescue}>
                      <Text style={{color: '#fff'}}>
                        Resgatado {modalButton}
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e66118',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        paddingVertical: 20,
                        borderRadius: 10,
                      }}
                      onPress={rescue}>
                      <Text style={{color: '#fff'}}>Resgatar</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </Modal>

              {/* <Modal
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
          </Modal> */}

              <View style={{flex: 1, marginTop: 20}}>
                <TabView
                  lazy
                  renderLazyPlaceholder={() => <Text>Loading...</Text>}
                  navigationState={{index, routes}}
                  renderScene={({route}) => {
                    switch (route.key) {
                      case 'first':
                        return FirstRoute({isActiveTab: index === 0});
                      case 'second':
                        return SecondRoute({isActiveTab: index === 1});
                      default:
                        return null;
                    }
                  }}
                  onIndexChange={setIndex}
                  initialLayout={initialLayout}
                  renderTabBar={(
                    props, // unnecessary, this is the default implementation
                  ) => (
                    <TabBar
                      {...props}
                      activeColor="#000"
                      inactiveColor="#ccc"
                      indicatorStyle={{
                        marginBottom: -1,
                        height: 2,
                        backgroundColor: '#E55300',
                      }}
                      getLabelText={({route}) => route.title}
                      labelStyle={{fontWeight: 'bold'}}
                      style={{
                        borderBottomWidth: 1,
                        borderColor: '#ccc',
                        elevation: 0,
                        shadowOpacity: 0,
                        backgroundColor: '#F1F6FC',
                      }}
                    />
                  )}
                />
              </View>
            </ScrollView>
          </Container>
        </Background>
      )}
    </>
  );
}

Dashboard.propTypes = {
  isActiveTab: PropTypes.string,
};

Dashboard.defaultProps = {
  isActiveTab: 0,
};
