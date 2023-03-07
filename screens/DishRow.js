import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {useDispatch,useSelector} from "react-redux"
import { addToBasket, removeToBasket, selectBasketItems, selectBasketItemsWihId } from '../redux/basket'
const DishRow = ({ imageUrl,name,description,price,id }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state)=>selectBasketItemsWihId(state.basketReducer,id))
    const dispatch = useDispatch()
    const addItemTobasket = ()=>{
        dispatch(addToBasket({id,name,description,price:500,imageUrl}))

    }
    const removeItemTobasket = ()=>{
        if(!items.length < 0){
            return
        }
        dispatch(removeToBasket({id}))
        
    }
   
    return (
        <>
            <TouchableOpacity className="p-2 shadow-md bg-gray-100 mb-1" onPress={() => setIsPressed(!isPressed)}>
                <View className="flex-row items-center">
                    <View className="flex-1">
                        <Text className="font-bold text-xl">{name}</Text>
                        <Text className="text-xs text-gray-500">{description}</Text>
                        <Text className="text-xs text-gray-500">$50</Text>
                        {
                            isPressed && (
                                <View>
                                    <View className="flex-row items-center space-x-2">
                                        <TouchableOpacity onPress={removeItemTobasket} disabled={!items.length}>
                                            <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray" }  />
                                        </TouchableOpacity>
                                        <Text>{items.length}</Text>
                                        <TouchableOpacity onPress={addItemTobasket}>
                                            <PlusCircleIcon size={40} color="#00CCBB" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    <View >
                        <Image
                            source={{
                                uri: urlFor(imageUrl).url()
                            }}
                            className="w-20 h-20 border border-gray-500"
                        />
                    </View>
                </View>
            </TouchableOpacity>

        </>
    )
}

export default DishRow