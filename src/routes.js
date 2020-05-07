/* eslint-disable react/prop-types */

import React from 'react';
// import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {setNavigator} from './services/navigationService';

// starter path
import SignIn from './pages/Unauthenticated/SignIn';
import SignUp from './pages/Unauthenticated/SignUp';
import Home from './pages/Unauthenticated/Home';
import Forgot from './pages/Unauthenticated/Forgot';
import Privacy from './pages/Unauthenticated/SignUp/Read/Privacy';
import Terms from './pages/Unauthenticated/SignUp/Read/Terms';

// account tab path
// import Account from './pages/Profile/Account';
// import Vouchers from './pages/Profile/Vouchers';
// import Profile from './pages/Profile/Profile';

// dashboard tab path
// import Dashboard from './pages/New/Dashboard';
// import Detail from './pages/New/Detail';
// import SelectQuantity from './pages/New/SelectQuantity';

FontAwesome.loadFont();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  // const SignedIn = useSelector((state) => state.auth.signed);
  const SignedIn = true;

  function StackAccount() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    );
  }

  function StackDashboard() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer ref={setNavigator}>
      {SignedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Dashboard"
            component={StackDashboard}
            options={{
              tabBarIcon: () => (
                <FontAwesome
                  reverseColor
                  name="home"
                  color="#3cf0c5"
                  type="font-awesome"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={StackAccount}
            options={{
              tabBarIcon: () => (
                <FontAwesome
                  reverseColor
                  name="user"
                  color="#3cf0c5"
                  type="font-awesome"
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Terms" component={Terms} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
