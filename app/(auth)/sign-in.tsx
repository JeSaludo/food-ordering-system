import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center  ">
      <Text className='text-red-600 text-4xl my-4R'>Sign in</Text>
     <View className='mx-4'>
        <View className="w-full">
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
        </View>
      </View>
      
      <TouchableOpacity className="w-full bg-blue-500 py-4 rounded mt-2">
        <Text className="text-center text-white font-bold">Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text className="text-blue-500">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
