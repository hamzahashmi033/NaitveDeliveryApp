import { Text, View, TextInput } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from 'react-native-vector-icons/Feather';
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { themeColors } from '../../theme';

export default function Search(params) {
    return (
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300">
                <AntDesign name="search1" size={25} color="gray"/>
                <TextInput placeholder='Restaurants' className="ml-2 flex-1" placeholderTextColor={"gray"}/>
                <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300">
                    <EvilIcons name="location" size={25} color="gray"/>
                    <Text className="text-gray-600 text-sm">New York, NYC</Text>
                </View>
            </View>
            <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full bg-gray-300">
                <Feather name="sliders" size={20} color="white"/>
            </View>
        </View>
    )
}