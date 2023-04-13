import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react'




export default function CustomSectionList(props) {
  const [data, setdata] = useState(props.data2)
  return (
    <View>
     <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={{backgroundColor:'green'}}>
          <Text >{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={{backgroundColor:'lightgrey'}}>
        <Text >{title}</Text>
        </View>
      )}
    />
    </View>
  )
}