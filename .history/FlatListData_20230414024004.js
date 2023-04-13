import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";

import CustomButton from "./CustomButton";
import ExternalStyle from "./ExternalStyle";


import GetApi from "./GetApi";

// const DATA = [
//     {
//       title: "Main dishes",
//       data: ["Pizza", "Burger", "Risotto"],
//     },
//     {
//       title: "Sides",
//       data: ["French Fries", "Onion Rings", "Fried Shrimps"],
//     },
//     {
//       title: "Drinks",
//       data: ["Water", "Coke", "Beer"],
//     },
//     {
//       title: "Desserts",
//       data: ["Cheese Cake", "Ice Cream"],
//     },
//   ];

  export default function FlatListData() {

    const {data} = GetApi("https://fakestoreapi.com/products");

  

    loginBtnPressed = () => {};
  
    return (
      <View>
       
  
        {/* <CustomButton afzal='top' />
        <CustomButton afzal='bottom' />
        <CustomButton afzal='left' />
        <CustomButton afzal='right' /> */}
  
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View >
                <Text style={ExternalStyle.title}> {item.title} </Text>
              </View>
  
              <View style={{ flexDirection:'row'}}>
                
                <Image style={ExternalStyle.image} source= {{uri:item.image}} ></Image>
                <View>
  
                <Text style={ExternalStyle.category}> category = {item.category} </Text>
                <Text style={ExternalStyle.description}> {item.description} </Text>
                </View>
                
  
  
              </View>
  
              <View>
              <Text style={ExternalStyle.price}>Price = {item.price}</Text>
              </View>
              
  
              {/* <View>
                <Text> {item.category} </Text>
              </View>
  
              <Text> {item.category} </Text> */}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
  
        {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={{backgroundColor:'green'}}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={{backgroundColor:'lightgrey'}}>
          <Text style={styles.header}>{title}</Text>
          </View>
        )}
      /> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: 'center',
      // justifyContent: 'center',
      marginTop: 100,
    },
  });

  