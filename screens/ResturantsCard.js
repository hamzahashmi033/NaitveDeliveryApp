import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
const ResturantsCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    const navigation = useNavigation()
  return (
   <TouchableOpacity className="bg-white mr-3 shadow mt-3"
   onPress={()=>{
    navigation.navigate('Restaurant',{
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
    })
   }}
   >   
    <Image
    source={{
        uri:urlFor(imgUrl).url()
    }}
    className="h-36 w-64 rounded-sm"
    />
    <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" size={22} opacity={0.5}/>
            <Text className="text-xs text-gray-500">
                <Text>{rating}</Text> . {genre}
            </Text>
        </View>

        <View className="flex-row items-center space-x-1">
            <MapIcon color="gray" size={22} opacity={0.4}/>
            <Text className="text-xs text-gray-500">
                Nerby . {address}
            </Text>
        </View>
    </View>
   </TouchableOpacity>
  )
}

export default ResturantsCard