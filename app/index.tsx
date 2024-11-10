import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, View, Text, TouchableOpacity, Image, SafeAreaView, Button, StatusBar } from 'react-native';
import { Link, useNavigation , Redirect, useRouter} from 'expo-router'; // For navigation
import CustomButton from '~/components/CustomButton';

export default function App() {
 
    const router = useRouter();

  return (
      <>
       <SafeAreaView className="bg-indigo-950 h-full">
          <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className='w-full justify-center items-center min-h-[85vh] px-4'>
              <Text className='text-white font-semibold'>CANTEEN FOOD </Text>
               <CustomButton title="Continue" containerSyles="my-4 px-4 w-full max-w-md" textStyles="" handlePress={()=> router.push('/(auth)/sign-in')}></CustomButton>
            </View>
          </ScrollView>

        <StatusBar backgroundColor="#161622" barStyle="light-content" />

       </SafeAreaView>
      </>
  );
}
