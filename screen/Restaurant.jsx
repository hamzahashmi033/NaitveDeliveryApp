import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { themeColors } from "../theme"
import DishRow from "../component/DishRow"
import CartIcon from "../component/CartIcon"
export default function Restaurant() {
    const navigation = useNavigation()
    const { params } = useRoute()
    return (
        <View>
            <CartIcon />
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={params.image} />
                    <TouchableOpacity className="absolute top-2 left-2 bg-gray-50 p-2 rounded-full shadow" onPress={() => navigation.goBack()}>
                        <Icon name="arrowleft" size={20} color={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white -mt-12 pt-6"
                >
                    <View className="px-5">
                        <Text className="text-black text-3xl font-bold">{params.name}</Text>
                        <View className="flex-row items-center space-x-1">
                            <AntDesign name="star" size={12} color="gold" />
                            <Text className="text-green-700">{params.rating}</Text>
                            <Text className="text-gray-700 ">
                                (4.4k reviews) .
                                <Text className="font-semibold"> Fast Food</Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Entypo name="time-slot" size={16} color="gray" />
                            <Text className="text-gray-700 text-xs">({params.deliveryTime})</Text>
                        </View>
                        <Text className="text-gray-500 mt-2">Hot And Spicy Pizzas</Text>
                    </View>
                </View>
                <View className="pb-24 bg-white">
                    <Text className="px-4 py-4 text-3xl text-black font-bold">Menu</Text>
                    {/* dishes */}
                    {
                        params.dishes.map((dish, index) => {
                            return (
                                <DishRow key={index} item={{ ...dish }} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}