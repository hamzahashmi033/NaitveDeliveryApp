import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { defaultStyle } from '../styles/styles'
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import {useNavigation} from "@react-navigation/native"
const DeliveryScreen = () => {
    const navigation = useNavigation()
    return (
        <View className="flex-1" style={defaultStyle}>
            <SafeAreaView className="z-50 bg-[#00CCBB]" >
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <XMarkIcon size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white font-light text-lg">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md relative top-6">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https:/links.papareact.com/fls"
                            }}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
                    <Text className="mt-3 text-gray-400">Your order is being prepared</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
            />
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title="Wagues Spoon"
                description="Taste the extra Ordinary"
                identifier="origin"
                pinColor="#00CCBB"
            />
        </View>
    )
}

export default DeliveryScreen