import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux"
import { selectBasketItems, totalPrice } from '../redux/basket'
import { useNavigation } from '@react-navigation/native'
const BasketIcon = () => {
  const navigation = useNavigation()
    const items = useSelector((state)=>selectBasketItems(state.basketReducer))
    const basketTotal = useSelector((state)=>totalPrice(state.basketReducer))
    if(items.length == 0){
      return null
    }
  return (
    <View className="absolute bottom-10 w-full z-50">
    <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row">
      <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
      <Text className="text-white font-extrabold text-lg flex-1 text-center">View Basket</Text>
      <Text className="text-white font-extrabold text-lg">${basketTotal}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BasketIcon