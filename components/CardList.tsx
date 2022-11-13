import { View, Text } from 'react-native'
import React from 'react'
import {Data} from "../App"

type Props = {
    data: Data
}

const Card = ({number, text, ...other} : {number: string | number ,text:string, [other:string]:any}) =>{
    return(
        <View className="flex justify-center items-center rounded-md w-36 h-36" {...other}>
            <View>
                <Text className="text-gray-50 font-semibold text-center">{number}</Text>
                <Text className="text-gray-50 font-semibold mt-3">{text}</Text>
            </View>
        </View>
    )
}

const CardList = ({data}: Props) => {
  return (
    <View className="flex flex-row gap-5 flex-wrap my-5 mx-auto">
        <Card text="Public repos" number={data.public_repos} className="bg-blue-500" />
        <Card text="Followers" number={data.followers} className="bg-green-500" />
        <Card text="Following" number={data.following} className="bg-orange-500" />
    </View>
  )
}

export default CardList