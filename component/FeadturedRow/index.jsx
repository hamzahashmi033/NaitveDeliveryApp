import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { themeColors } from "../../theme";
import RestaurantCard from "../RestaurantCard";

export default function FeaturedRow({ title, restaurants, description }) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-black text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={restaurants}
                renderItem={({ item }) => <RestaurantCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}