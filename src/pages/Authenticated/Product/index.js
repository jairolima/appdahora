/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Background from '~/components/Background';

import {Container, Adress, Hr} from './styles';

const FirstRoute = () => (
  <>
    <View style={{marginVertical: 40, marginHorizontal: 20}}>
      <Text style={{color: '#9b9b9b', fontWeight: 'bold', fontSize: 11}}>
        CATEGORIA DE PRODUTO
      </Text>
      <View
        style={{
          marginTop: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',

          height: 90,
          width: '100%',
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            width: '25%',
            height: 80,
            borderRadius: 30,
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
                uri: `https://api.adorable.io/avatars/285/abott@adorable.png`,
              }}
            />
          </View>
        </View>
        <View style={{backgroundColor: 'transparent', width: '50%'}}>
          <Text style={{fontWeight: 'bold'}}>Refrigerante KS</Text>
          <Text style={{marginTop: 15}}>200 ml</Text>
        </View>
        <View
          style={{
            marginTop: 25,
            width: '25%',
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: '#E55300'}}>R$2,50</Text>
        </View>
      </View>
    </View>
  </>
);

const SecondRoute = () => <View />;

const ThirdRoute = () => <View />;

const initialLayout = {width: Dimensions.get('window').width};

export default function Product() {
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
      </Container>
    </Background>
  );
}
