import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>

      <View className="w-full">
        <TextInput 
          placeholder="Name"
          className="p-4 border border-gray-300 rounded mb-4"
        />
        <TextInput 
          placeholder="Email"
          className="p-4 border border-gray-300 rounded mb-4"
          keyboardType="email-address"
        />
        <TextInput 
          placeholder="Password"
          className="p-4 border border-gray-300 rounded mb-4"
          secureTextEntry
        />
        <TextInput 
          placeholder="Confirm Password"
          className="p-4 border border-gray-300 rounded mb-4"
          secureTextEntry
        />
      </View>

      <TouchableOpacity className="w-full bg-blue-500 py-4 rounded mt-2">
        <Text className="text-center text-white font-bold">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text className="text-blue-500">Already have an account? Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
