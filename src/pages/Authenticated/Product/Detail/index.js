/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Header, Hr} from './styles';
import Background from '~/components/Background';
import {Arrow} from '~/components/icons/Arrow';

const Detail = ({route}) => {
  const {item} = route.params;
  const [sum, setSum] = useState(0);
  const [total, setTotal] = useState(item.price);
  const [itemid, setItemId] = useState(0);

  const types = item.type;

  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }

  function decrease() {
    if (sum === 0) {
      setSum(0);
    } else {
      setSum(sum - 1);
    }
  }
  function add() {
    setSum(sum + 1);
  }

  function optionFunc(par1, par2, par3) {
    if (par3 === true) {
      setItemId(par1);
      setTotal(par2);
    } else {
      setItemId(0);
      setTotal(0);
    }
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
          <LinearGradient
            colors={['#fcf6f3', '#ebe5e1', '#dbd4d1']}
            style={{flex: 1, height: 200, margin: 0, width: '100%'}}>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: `${item.picture}`,
                }}
              />
            </View>
          </LinearGradient>

          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <Text numberOfLines={2} style={{fontWeight: 'bold', fontSize: 26}}>
              {item.name}
            </Text>
            <Text style={{marginTop: 20, fontSize: 18, color: '#9b9b9b'}}>
              {item.body}
            </Text>
            {item.type ? (
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#E55300',
                }}>
                A partir de R${item.price}
              </Text>
            ) : (
              <View />
            )}
          </View>

          {item.type ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  width: '100%',
                  alignItems: 'center',
                  height: 80,
                  backgroundColor: '#e8ecf2',
                  paddingHorizontal: 20,
                }}>
                <View style={{width: '50%'}}>
                  <Text>Escolha seu refrigerante</Text>
                </View>
                <View
                  style={{
                    width: '40%',
                    height: 25,
                    backgroundColor: '#9b9b9b',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 11,
                    }}>
                    Campo Obrigatório
                  </Text>
                </View>
              </View>
              <FlatList
                data={types}
                keyExtractor={(type) => String(type.id)}
                renderItem={({item: type}) => (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        optionFunc(type.id, type.price, type.available)
                      }>
                      <View
                        style={{
                          height: 80,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginHorizontal: 20,
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          {type.id === itemid ? (
                            <MaterialCommunityIcons
                              ref={type.id}
                              reverseColor
                              name="radiobox-marked"
                              color="#e55300"
                              type="font-awesome"
                              size={30}
                            />
                          ) : (
                            <MaterialCommunityIcons
                              ref={type.id}
                              reverseColor
                              name="radiobox-blank"
                              color="#ccc"
                              type="font-awesome"
                              size={30}
                            />
                          )}
                          {type.available === true ? (
                            <Text style={{marginLeft: 20}}>{type.name}</Text>
                          ) : (
                            <Text style={{marginLeft: 20, color: '#9b9b9b'}}>
                              {type.name}
                            </Text>
                          )}
                        </View>

                        {type.available ? (
                          <Text style={{fontSize: 12}}>R${type.price}</Text>
                        ) : (
                          <View
                            style={{
                              height: 30,
                              backgroundColor: '#ccc',
                              borderRadius: 15,
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 80,
                            }}>
                            <Text style={{fontSize: 12, color: '#FFF'}}>
                              Esgotado
                            </Text>
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                    <Hr />
                  </>
                )}
              />
            </>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '100%',
                alignItems: 'center',
                height: 80,
                backgroundColor: '#e8ecf2',
                paddingHorizontal: 20,
              }}>
              <View style={{width: '50%'}}>
                <Text>Escolha a quantidade</Text>
              </View>

              <View
                style={{
                  width: '40%',
                  height: 25,
                  backgroundColor: '#9b9b9b',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 11,
                  }}>
                  Campo Obrigatório
                </Text>
              </View>
            </View>
          )}

          <View
            style={{
              marginTop: 40,
              height: 320,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 50,
            }}>
            <TouchableOpacity onPress={decrease}>
              <View
                style={{
                  backgroundColor: 'transparent',
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 3,
                }}>
                <Text style={{color: '#ccc', fontSize: 25}}>-</Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'transparent',
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{sum}</Text>
            </View>
            <TouchableOpacity onPress={add}>
              <View
                style={{
                  backgroundColor: 'transparent',
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 3,
                }}>
                <Text style={{color: '#e55300', fontSize: 25}}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {sum > 0 && total !== 0 ? (
          <View
            id="cart"
            style={{
              position: 'absolute',
              bottom: 0,
              height: 70,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e55300',
            }}>
            <Text style={{color: '#fff'}}>ADICIONAR AO CARRINHO</Text>
            <Text style={{color: '#fff', marginLeft: 15, fontWeight: 'bold'}}>
              R${total * sum}
            </Text>
          </View>
        ) : (
          <View
            id="cart"
            style={{
              position: 'absolute',
              bottom: 0,
              height: 70,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ccc',
            }}>
            <Text style={{color: '#fff', marginRight: 15}}>
              ADICIONAR AO CARRINHO
            </Text>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>R$0.00</Text>
          </View>
        )}
      </Container>
    </Background>
  );
};

export default Detail;
