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
import FlatListData from "./FlatListData";
import CustomSectionList from "./CustomSectionList";


import GetApi from "./GetApi";



export default function App() {
 

const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  return (
    
      
      //<FlatListData/>
     <SectionList data1 = {DATA}/>
    
  );
}


