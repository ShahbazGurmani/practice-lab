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

export default function CustomSectionList(props) {

 
    const [data,setData] = useState[props.data];

     <SectionList
        sections={data}
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
      /> 

}
