/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import api from '~/services/api';
import Background from '~/components/Background';
import lazyload from '~/assets/lazyload';

import {Container, Adress, Hr, ProductsView} from './styles';

export default function Product() {
  const [items, setItems] = useState('empty');
  const [apiLoad, setApiLoad] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/awards');
      console.tron.log(response.data);
      setItems({
        data: [
          {
            id: 1,
            slug: 'macbook-air',
            name: 'Refrigerante KS',
            quantity: '225ml',
            type: [
              {
                id: 1,
                name: 'Coca-Cola',
                price: '3.50',
                available: true,
                selected: false,
              },
              {
                id: 2,
                name: 'Coca-Cola Zero',
                price: '3.50',
                available: true,
                selected: false,
              },
              {
                id: 3,
                name: 'Fanta Laranja',
                price: '2.50',
                available: true,
                selected: false,
              },
              {
                id: 4,
                name: 'Fanta Uva',
                price: '2.50',
                available: true,
                selected: false,
              },
              {
                id: 5,
                name: 'Guaraná',
                price: '3.50',
                available: false,
                selected: false,
              },
            ],
            body: 'Refrigerante gelado, tamanho ideal para o seu lanche.',
            price: '2.50',
            thumbnail: 'https://i.ibb.co/BPs0zsx/coca-cola.png',
            picture: 'https://i.ibb.co/4RWjLrq/coca-cola-2.png',
          },
          {
            id: 2,
            slug: 'macbook-air',
            name: 'Adoçante Diétetico Líquido Stevia 100%',
            quantity: '60ml',
            body:
              'A estévia/ stevia é um adoçante natural, obtida através de uma planta, muito bem tolerado pelo público diabético, e serve como um substituto saudável para o açucar e para os adoçantes artificiais.',
            price: '3.50',
            thumbnail: 'https://i.ibb.co/jy4zxDR/stevia.png',
            picture: 'https://i.ibb.co/0C1CyXH/pack-linea.png',
          },
          {
            id: 3,
            slug: 'macbook-air',
            name: 'Salgadinho Cheetos Onda Parmesão',
            quantity: '225g',
            body: 'Refrigerante KS',
            price: '7.00',
            thumbnail: 'https://i.ibb.co/5cwGySB/cheetos-parmesao.png',
            picture: 'https://i.ibb.co/5cwGySB/cheetos-parmesao.png',
          },
          {
            id: 4,
            slug: 'macbook-air',
            name: 'Salgadinho Cheetos Lua Parmesão',
            quantity: '225ml',
            body: 'Refrigerante KS',
            price: '7.00',
            thumbnail: 'https://i.ibb.co/Qnj8wv1/cheetos.png',
            picture: 'https://i.ibb.co/Qnj8wv1/cheetos.png',
          },
        ],
        message: 'Requisição feita com sucesso',
      });
    }
    loadItems();
  }, []);

  const snacks = {
    data: [
      {
        id: 1,
        slug: 'macbook-air',
        name: 'Salgadinho Cheetos Onda Parmesão',
        quantity: '225g',
        body: 'Refrigerante KS',
        price: '7.00',
        thumbnail: 'https://i.ibb.co/5cwGySB/cheetos-parmesao.png',
        picture: 'https://i.ibb.co/5cwGySB/cheetos-parmesao.png',
      },
      {
        id: 2,
        slug: 'macbook-air',
        name: 'Salgadinho Cheetos Lua Parmesão',
        quantity: '225ml',
        body: 'Refrigerante KS',
        price: '7.00',
        thumbnail: 'https://i.ibb.co/Qnj8wv1/cheetos.png',
        picture: 'https://i.ibb.co/Qnj8wv1/cheetos.png',
      },
    ],
    message: 'Requisição feita com sucesso',
  };

  const sodas = {
    data: [
      {
        id: 1,
        slug: 'macbook-air',
        name: 'Refrigerante KS',
        quantity: '225ml',
        body: 'Refrigerante KS',
        price: '3.50',
        thumbnail: 'https://i.ibb.co/BPs0zsx/coca-cola.png',
        picture: 'https://i.ibb.co/4RWjLrq/coca-cola-2.png',
      },
    ],
    message: 'Requisição feita com sucesso',
  };

  const FirstRoute = () => (
    <>
      <View
        style={{
          marginVertical: 40,
          marginHorizontal: '2%',
        }}>
        <Text style={{color: '#9b9b9b', fontWeight: 'bold', fontSize: 11}}>
          CATEGORIA DE PRODUTO
        </Text>
        {apiLoad ? null : (
          <Lottie
            style={{
              marginTop: -20,
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
          style={{marginTop: 10}}
          legacyImplementation
          data={items.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onLoad={setApiLoad(true)}
              onPress={() => navigation.navigate('Detail', {item})}>
              <ProductsView
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.05,
                  shadowRadius: 2.84,
                  elevation: 5,
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <View
                  style={{
                    width: '25%',
                    height: 80,

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
                        borderColor: '#ccc',
                      }}
                      source={{
                        uri: `${item.thumbnail}`,
                      }}
                    />
                  </View>
                </View>
                <View style={{backgroundColor: 'transparent', width: '50%'}}>
                  <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                    {item.name}
                  </Text>
                  <Text style={{marginTop: 15}}>{item.quantity}</Text>
                </View>
                <View
                  style={{
                    marginTop: 25,
                    width: '25%',
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: '#E55300'}}>
                    R${item.price}
                  </Text>
                </View>
              </ProductsView>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );

  const SecondRoute = () => (
    <>
      <View
        style={{
          marginVertical: 40,
          marginHorizontal: '2%',
        }}>
        <Text style={{color: '#9b9b9b', fontWeight: 'bold', fontSize: 11}}>
          CATEGORIA DE SALGADOS
        </Text>
        <FlatList
          style={{marginTop: 10}}
          legacyImplementation
          data={snacks.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ProductsView
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.05,
                shadowRadius: 2.84,
                elevation: 5,
                marginTop: 5,
                marginBottom: 5,
              }}>
              <View
                style={{
                  width: '25%',
                  height: 80,

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
                      borderColor: '#ccc',
                    }}
                    source={{
                      uri: `${item.thumbnail}`,
                    }}
                  />
                </View>
              </View>
              <View style={{backgroundColor: 'transparent', width: '50%'}}>
                <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{marginTop: 15}}>{item.quantity}</Text>
              </View>
              <View
                style={{
                  marginTop: 25,
                  width: '25%',
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', color: '#E55300'}}>
                  R${item.price}
                </Text>
              </View>
            </ProductsView>
          )}
        />
      </View>
    </>
  );

  const ThirdRoute = () => (
    <>
      <View
        style={{
          marginVertical: 40,
          marginHorizontal: '2%',
        }}>
        <Text style={{color: '#9b9b9b', fontWeight: 'bold', fontSize: 11}}>
          CATEGORIA DE SALGADOS
        </Text>
        <FlatList
          style={{marginTop: 10}}
          legacyImplementation
          data={sodas.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ProductsView
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.05,
                shadowRadius: 2.84,
                elevation: 5,
                marginTop: 5,
                marginBottom: 5,
              }}>
              <View
                style={{
                  width: '25%',
                  height: 80,

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
                      borderColor: '#ccc',
                    }}
                    source={{
                      uri: `${item.thumbnail}`,
                    }}
                  />
                </View>
              </View>
              <View style={{backgroundColor: 'transparent', width: '50%'}}>
                <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{marginTop: 15}}>{item.quantity}</Text>
              </View>
              <View
                style={{
                  marginTop: 25,
                  width: '25%',
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', color: '#E55300'}}>
                  R${item.price}
                </Text>
              </View>
            </ProductsView>
          )}
        />
      </View>
    </>
  );

  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Todos'},
    {key: 'second', title: 'Salgados'},
    {key: 'third', title: 'Refrigerantes'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  return (
    <Background>
      <Container>
        <ScrollView>
          <Adress>
            <Text style={{fontSize: 16}}>R. dos pescadores, 428</Text>
            <Text style={{color: '#E55300', fontSize: 11}}>TROCAR</Text>
          </Adress>
          <Hr />

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
                activeColor="#E55300"
                inactiveColor="#ccc"
                indicatorStyle={{
                  height: 3,
                  backgroundColor: '#E55300',
                }}
                getLabelText={({route}) => route.title}
                labelStyle={{fontWeight: 'normal'}}
                style={{
                  paddingTop: 5,
                  height: 60,
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#FFF',
                }}
              />
            )}
          />
        </ScrollView>
      </Container>
    </Background>
  );
}
