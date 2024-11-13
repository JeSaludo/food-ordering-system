import { View, Text, TextInput, TouchableOpacity, Pressable, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation , Redirect, useRouter} from 'expo-router';

const SignIn = () => {

  return (
    <SafeAreaView className='flex-1 items-start ml-10 mr-10'>
      
      <View className='mt-10'>
      <Text className='text-3xl font-bold'>Sign In</Text>
      </View>

      <View className='mt-[80px]'>
        <Text className='text-xl'>Email Address</Text>
      </View>

      <View className="w-full">
      <TextInput
        className="border border-gray-300 rounded-xl p-1.5 text-lg text-black"
        placeholder="Type your email address"
        placeholderTextColor="#A9A9A9"
      />
    </View>

      <View className='mt-10'>
        <Text className='text-xl'>Password</Text>
      </View>

      <View className="w-full">
      <TextInput
        className="border border-gray-300 rounded-xl p-1.5 text-lg text-black"
        placeholder="Type your password"
        placeholderTextColor="#A9A9A9"
      />
      </View>
      {/* SIGN IN BUTTON TEMPORARY COMMENT FOR NAVIGATION TO HOME PAGE
    <View className='w-full mt-16'>
    <Pressable
        onPress={() => console.log("Button Pressed!")}
        className="bg-emerald-500 py-3 px-6 rounded-xl active:bg-emerald-700"
      >
        <Text className="text-white text-lg font-semibold text-center">Sign In</Text>
      </Pressable>
    </View>*/}

    <View className='w-full mt-16'>
      <Link className='text-emerald-500 underline text-lg text-center' href="/(tabs)/home">SIGN IN</Link>
    </View>

    <View className='w-full mt-10'>
    <Link className='text-emerald-500 underline text-lg text-center' href="/(auth)/forgot-password">Forgot Password</Link>
    </View>

    <View className='w-full mt-2'>
    <Link className='text-emerald-500 text-lg text-center' href="/(auth)/sign-up">Create Account</Link>
    </View>
    </SafeAreaView>
  );
}
export default SignIn;