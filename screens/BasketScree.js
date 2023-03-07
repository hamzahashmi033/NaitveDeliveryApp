import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { defaultStyle } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurantSlice'
import { removeToBasket, selectBasketItems } from '../redux/basket'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'

const BasketScreen = () => {
  const restaurant = useSelector((state) => selectRestaurant(state.restaurantReducer))
  const items = useSelector((state) => selectBasketItems(state.basketReducer))
  const [groupedItemsInBasket, setgroupedItemsInBasket] = useState([])
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useMemo(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item)
      return result
    }, {})
    setgroupedItemsInBasket(groupedItems)

  }, [items])

  return (
    <SafeAreaView className=" bg-white">
      <View style={defaultStyle} className=" bg-gray-100 h-full">
        <View className="p-3 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-3 py-3 my-3">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
          />
          <Text className="flex-1">Deliver in 50-60 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket)?.map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.imageUrl).url() }}
                className="h-12 w-12 rounded-full" />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                $500
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeToBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0">
          <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">$1500</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-400">Delivery fee</Text>
              <Text className="text-gray-400">$150</Text>
            </View>

            <View className="flex-row justify-between">
              <Text >Subtotal</Text>
              <Text className="font-extrabold">$1500</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('OrderPreparingScreen')} className="rounded-lg bg-[#00CCBB] p-4">
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >

    </SafeAreaView >
  )
}

export default BasketScreen