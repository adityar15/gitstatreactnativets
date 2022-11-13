import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    src: string
    username: string
}

const User = ({src, username}: Props) => {
  return (
    <View className="flex flex-row item-center space-x-3 mt-5 mx-auto w-11/12">
    <Image source={{uri:src}} className="w-10 h-10 rounded-full" />
      <Text className="text-lg text-gray-200 font-semibold">{username}</Text>
    </View>
  )
}

export default User