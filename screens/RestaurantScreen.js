import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React,{useEffect} from "react";
import { defaultStyle } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "./DishRow";
import BasketIcon from "./BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/restaurantSlice";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  useEffect(()=>{
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
    }))
  })
  return (
    <>
    <SafeAreaView>
      <ScrollView className="relative">
      <View style={defaultStyle}>
        <View className="bg-gray-300 relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-64"
            />
          <TouchableOpacity
            className="p-4 bg-gray-100 rounded-full absolute top-4 left-3 "
            onPress={navigation.goBack}
            >
            <ArrowLeftIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="font-bold text-3xl">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row space-x-1 items-center">
              <StarIcon color="green" size={20} opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
              </Text>
            </View>
            <View className="flex-row space-x-1 items-center">
              <MapIcon color="gray" size={20} opacity={0.5} />
              <Text className="text-xs text-gray-500">Nerby . {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          <TouchableOpacity>
            <View className="flex-row items-center space-x-2 border border-gray-100 shadow p-3">
              <QuestionMarkCircleIcon size={25} color={"gray"} opacity={0.5} />
              <Text className="text-md pl-2 font-bold flex-1">
                Have a food allergy?
              </Text>
              <ChevronRightIcon size={20} color="#00CCBB" opacity={0.6} />
            </View>
          </TouchableOpacity>
          <View className="mt-6">
            <Text className="font-bold text-3xl">Menu</Text>
          </View>
          <View className="mt-3 pb-28">
            {
              dishes.map((dish)=>(
                <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                imageUrl={dish.image}
                />
                ))
              }
            </View>
        </View>
      </View>
      </ScrollView>
    <BasketIcon/>
    </SafeAreaView>
    </>
  );
};

export default RestaurantScreen;
