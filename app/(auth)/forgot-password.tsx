import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPassword = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4">Forgot Password</Text>

      <View className="w-full">
        <Text className="mb-2">Enter your email address and we'll send you a link to reset your password.</Text>

        <TextInput 
          placeholder="Email"
          className="p-4 border border-gray-300 rounded mb-4"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity className="w-full bg-blue-500 py-4 rounded mt-2">
        <Text className="text-center text-white font-bold">Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text className="text-blue-500">Back to Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
