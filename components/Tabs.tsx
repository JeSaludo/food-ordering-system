import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Cart from '~/app/screens/cart';
import Home from '~/app';
import Account from '~/app/screens/account';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: '#4CAF50' }, // Custom tab bar background color
          tabBarLabelStyle: { color: 'white' }, // Tab text color
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-basket" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs