/* eslint-disable react/prop-types */

import React from 'react';
// import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {setNavigator} from './services/navigationService';
import {BurguerIcon, BoxIcon} from '~/components/icons';

// starter path
import SignIn from './pages/Unauthenticated/SignIn';
import SignUp from './pages/Unauthenticated/SignUp';
import Home from './pages/Unauthenticated/Home';
import Forgot from './pages/Unauthenticated/Forgot';
import Privacy from './pages/Unauthenticated/SignUp/Read/Privacy';
import Terms from './pages/Unauthenticated/SignUp/Read/Terms';

// profile tab path
import Menu from './pages/Authenticated/Profile';
import UserUpdate from './pages/Authenticated/Profile/UserUpdate';
import UserPointsHistory from './pages/Authenticated/Profile/UserPointsHistory';
import UserRecoveryPassword from './pages/Authenticated/Profile/UserRecoveryPassword';

// dashboard tab path
import Dashboard from './pages/Authenticated/Dashboard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  const SignedIn = useSelector((state) => state.auth.signed);
  // testes const SignedIn = true;

  function StackAccount() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="UserUpdate" component={UserUpdate} />
        <Stack.Screen name="UserPointsHistory" component={UserPointsHistory} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen
          name="UserRecoveryPassword"
          component={UserRecoveryPassword}
        />
      </Stack.Navigator>
    );
  }

  function StackDashboard() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false, tableShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer ref={setNavigator}>
      {SignedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconColor;

              if (route.name === 'Dashboard') {
                iconColor = focused ? '#E66118' : '#E6611866';
                return <BoxIcon fill={iconColor} />;
              }
              if (route.name === 'Account') {
                iconColor = focused ? '#E66118' : '#E6611866';
                return <BurguerIcon fill={iconColor} />;
              }
              return false;
            },
          })}>
          <Tab.Screen
            name="Dashboard"
            component={StackDashboard}
            // options={{
            //   tabBarIcon: () => <BoxIcon fill="#E66118" />,
            // }}
          />
          <Tab.Screen
            name="Account"
            component={StackAccount}
            tabBarOptions={{showLabel: false}}
            // options={{
            //   tabBarIcon: () => <BurguerIcon />,
            // }}
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
