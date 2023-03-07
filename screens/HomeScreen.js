import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React,{useState,useEffect} from "react";
import { defaultStyle } from "../styles/styles";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "./Categories";
import FeaturedRows from "./FeaturedRows";
import sanityClient from "../sanity"

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([])
  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "featured"]{
        ...,
        restaurant []-> {
        ...,
          dishes[]->,
          ...
          }
      }
      `
    ).then((data)=>{
      setFeaturedCategory(data)
      console.log(data)
    })
  },[])
  return (
    <SafeAreaView>
      <View style={defaultStyle}>
        {/* header */}
        <View className="flex flex-row items-center pb-3 mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full "
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-sx">
              Delivery Now
            </Text>
            <View className="flex flex-row items-center space-x-2">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* search */}
        <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              keyboardType="default"
              placeholder="Restaurants and cuisines"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" size={35} />
        </View>
        {/* categories */}
        <ScrollView
            contentContainerStyle={{
              paddingBottom: 260,
            }}
        >
          {/* categories */}
          <Categories />
          {
            featuredCategory?.map((category)=>(
              <FeaturedRows
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
              />
            ))
          }
          {/* featured Rows */}
          {/* <FeaturedRows
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          />
          <FeaturedRows
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoy juicy discounts!"
          />
          <FeaturedRows
          id="1235"
          title="Offer near you"
          description="Why not support your local resturants tonight!"
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
