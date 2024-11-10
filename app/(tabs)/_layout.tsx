import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabsLayout = () => {
  return (
    <>       
      <Tabs screenOptions={{ headerShown: false }}> 
        <Tabs.Screen 
          name="home" 
          options={{
            title: "Home",
            headerShown: false, 
            tabBarIcon: ({ color, focused }) => (
              <Foundation name="home" size={24} color={focused ? "blue" : "black"} />
            ),
          }}
        />
        <Tabs.Screen 
          name="cart" 
          options={{
            title: "Cart",
            headerShown: false, 
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="basket" size={24} color={focused ? "blue" : "black"} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: "Profile",
            headerShown: false, 
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="account-circle" size={24} color={focused ? "blue" : "black"} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
