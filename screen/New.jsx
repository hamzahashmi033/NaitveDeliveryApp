import { View, Text } from "react-native"
import Feather from 'react-native-vector-icons/Feather';

export default function NewScreen(params) {
    return (
        <View className="flex-row">
            <Text className="bg-red-500 w-1/2 p-16">diwhdiwdeidiehdiehdiihieiheihehh</Text>
            <Feather name="sliders" size={50} color="black" />
            <Text className="bg-yellow-800 w-1/2 p-16">diwhdiwdeidiehdiehdiihieiheihehh</Text>
        </View>
    )
}