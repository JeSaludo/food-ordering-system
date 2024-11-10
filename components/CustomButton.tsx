import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerSyles, textStyles, isLoading}:any) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-blue-600 rounded-lg min-h-[62px] justify-center items-center ${containerSyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}>
      <Text className={`text-white ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton