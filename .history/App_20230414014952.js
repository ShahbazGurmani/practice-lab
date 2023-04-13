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

import axios from "axios";

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

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products", {
        // params: {
        //     articleID: articleID
        // }
      })
      .then(function (response) {
        console.log("response", response.data);

        setData(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      })
      .then(function () {
        // always executed
        console.log("Always", data[0]);
      });
  }, []);

  loginBtnPressed = () => {};

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

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

            <View style={{flexDirection:'row'}}>
              
              <Image style={ExternalStyle.image} source= {{uri:item.image}} ></Image>
              <Text> {item.category} </Text>
              <Text> {item.description} </Text>


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
