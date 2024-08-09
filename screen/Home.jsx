import { View, Text, ScrollView, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import Search from "../component/search"
import Category from "../component/category"
import { restaurantsData } from "../constants"
import FeaturedRow from "../component/FeadturedRow"
export default function HomeScreen(params) {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle={"light-content"} />
            <View className="my-2">
                {/* search */}
                <Search />
                <ScrollView contentContainerStyle={{ paddingBottom:150}} showsVerticalScrollIndicator={false}>

                    {/* categories */}
                    <Category />
                    {/* featured */}
                    <View className="mt-5">
                        {
                            [...restaurantsData, ...restaurantsData, ...restaurantsData].map((item, index) => {
                                return (
                                    <FeaturedRow
                                        key={index}
                                        title={item.title}
                                        restaurants={item.restaurants}
                                        description={item.description}
                                    />
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}