import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
  return (
     <View className="bg-green-600 flex flex-row justify-between p-4">
      <Text className="text-white text-xl font-bold">Food</Text>
      <FontAwesome name="shopping-basket" color="white" size={24} />
    </View>
  );
};

export default Header;
