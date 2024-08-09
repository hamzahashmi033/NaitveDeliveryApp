import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
export default function RestaurantCard({ id, name, rating, image, deliveryTime, dishes }) {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Restaurant", {
                name, rating, image, deliveryTime, dishes
            })}
        >
            <View
                style={{
                    shadowColor: themeColors.bgColor(0.9),
                    shadowRadius: 7
                }}
                className="mr-3 ml-3 my-2 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={image} />
        
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2 text-black">{name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <AntDesign name="star" size={12} color="gold" />
                        <Text className="text-green-700">{rating}</Text>
                        <Text className="text-gray-700 ">
                            (4.4k reviews) .
                            <Text className="font-semibold"> Fast Food</Text></Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Entypo name="time-slot" size={16} color="gray" />
                        <Text className="text-gray-700 text-xs">({deliveryTime})</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}