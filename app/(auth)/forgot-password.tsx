import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation , Redirect, useRouter} from 'expo-router';

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

      <TouchableOpacity className="w-full bg-emerald-500 py-4 rounded mt-2">
        <Text className="text-center text-white font-bold">Send Reset Link</Text>
      </TouchableOpacity>

     
      <View className='mt-4'>
      <Link className="text-emerald-500" href="/(auth)/sign-in">Back to Sign In</Link>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
