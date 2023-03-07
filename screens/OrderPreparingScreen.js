import { View, Text,SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'
const OrderPreparingScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(()=>{
        navigation.navigate("Delivery")
      },4000)
    }, [])
    
  return (
   <SafeAreaView className="bg-white flex-1 justify-center items-center">
    <Animatable.Image
    source={require("../assets/giphy.gif")}
    animation="slideInUp"
    iterationCount={1}
    className="h-96 w-96"
    />
    <Animatable.Text

    animation="slideInUp"
    iterationCount={1}
    className="text-lg text-gray-500 font-bold text-center"
    >
        Waiting for restaurant to confirm your order!
    </Animatable.Text>
    <Progress.Circle size={60} indeterminate={true} color="black" className="mt-5"/>
    </SafeAreaView>
  )
}

export default OrderPreparingScreen