import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Services from '../views/services';
import Cart from '../views/cart';

import { collors } from '../styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
      }}

      tabBarOptions={{
        activeTintColor: collors.purple,
        inactiveTintColor: collors.white,
        activeBackgroundColor: collors.purple,
        inactiveBackgroundColor: collors.orange,
        style: {
          height: 70
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: collors.orange
        },
        keyboardHidesTabBar: true
      }}
      screenOptions={{
        tabBarActiveTintColor: collors.purple,
        tabBarInactiveTintColor: collors.white,
        tabBarActiveBackgroundColor: collors.purple,
        tabBarInactiveBackgroundColor: collors.orange,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          textAlignVertical: 'center',
          height: '95%',
          width: '105%',
          backgroundColor: collors.orange,
        },
        tabBarStyle: {
          width: '100%',
          height: 70,
          lineHeight: 21,
        },
        tabBarIconStyle: {
          display: 'none',
        },
        keyBoarHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  </NavigationContainer>
}