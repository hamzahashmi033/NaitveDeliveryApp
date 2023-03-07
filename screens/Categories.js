import { View, Text, ScrollView } from "react-native";
import React,{useEffect,useState} from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [category,setCategory] = useState([])
  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "category"]
      `
    ).then((data)=>{
      setCategory(data)
    })
  },[])
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    > 
      {
        category?.map((cate)=>(
          <CategoryCard key={cate._id} imgUrl={urlFor(cate.image).url()} title={cate.name} />
        ))
      }
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" /> */}
    
    </ScrollView>
  );
};

export default Categories;
