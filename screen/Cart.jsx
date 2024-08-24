import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { restaurantsData } from '../constants';
export default function Cart() {
    const navigation = useNavigation()
    const restaurant = restaurantsData[0].restaurants[0]
    return (
        <View style={styles.container}>
            <View style={styles.cartContainer} className="relative py-4  shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-2 shadow top-5 left-2"
                >
                    <Icon name="arrowleft" size={20} color="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-black text-center font-bold text-2xl">Your Cart</Text>
                    <Text className="text-gray-500 text-center" >{restaurant.name}</Text>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="my-2 flex-row items-center px-4 py-4">
                    <Image source={require("../assests/images/bikeguy.png")} className="w-20 h-20 rounded-full" />
                    <Text className="flex-1 pl-4 text-black">Deliver in 20-30 minutes</Text>
                    <TouchableOpacity>
                        <Text className="font-bold" style={{ color: themeColors.text }}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 200
                    }}
                    className="bg-white pt-5 "
                >
                    {
                        restaurant.dishes.map((dish, index) => {
                            return (
                                <View
                                    style={{
                                        shadowColor: themeColors.bgColor(0.3),
                                        shadowRadius: 7
                                    }}
                                    key={index}
                                    className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-2xl">
                                    <Text className="font-bold" style={{ color: themeColors.text }}>2 x</Text>
                                    <Image className="h-14 w-14 rounded-full" source={dish.image} />
                                    <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                    <Text className="font-semibold text-black">$20</Text>
                                    <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                                        <Icon name="minus" size={20} color="white" />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View className="p-6 px-6 rounded-t-3xl space-y-4 absolute bottom-0 w-full" style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Subtotal</Text>
                        <Text className="text-gray-700">$20</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Delivery Fees</Text>
                        <Text className="text-gray-700">$20</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700 font-extrabold">Order Total</Text>
                        <Text className="text-gray-700 font-extrabold">$30</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("OrderPrepairing")} className="p-3 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',


    },
    cartContainer: {
        height: '95%', // Adjust this value to control the height
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,


    },

});
