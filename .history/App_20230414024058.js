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


import GetApi from "./GetApi";



export default function App() {
 

// const {data} = GetApi("https://fakestoreapi.com/products");

  

  //loginBtnPressed = () => {};

  return (
    
      
      <FlatListData/>
    
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
