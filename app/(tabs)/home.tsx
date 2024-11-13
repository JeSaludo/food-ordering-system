import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Canteen Food</Text>

      <View>
        <TextInput
         placeholder="Search..."
         className="w-full py-3 px-4 bg-white rounded-lg border border-gray-300 shadow-sm text-gray-700"
        />
      </View>
      
      <View className=''>

      </View>

    </SafeAreaView>
  )
}

export default Home