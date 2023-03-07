import { View, Text,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantsCard from './ResturantsCard'
import sanityClient from "../sanity"
const FeaturedRows = ({title,description,id}) => {
  const [featuredRows,setFeaturedRows] = useState([])
  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "featured" && _id==$id]{
        ...,
        restaurant []-> {
        ...,
          dishes[]->,
          type->{
            name
          }
          }
      }[0]
      `,{id}
    ).then((data)=>{
      setFeaturedRows(data?.restaurant)
      
    })
  },[id])
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {
          featuredRows?.map((restaurant)=>(
            <ResturantsCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.title}
            imgUrl={restaurant.image}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            />
          ))
        }
       
        </ScrollView>
    </View>
  )
}

export default FeaturedRows