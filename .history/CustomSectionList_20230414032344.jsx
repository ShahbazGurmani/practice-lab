import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'

export default class CustomSectionList extends Component {
  render(props) {
    const [data , setData] = useState(props.data1);
    return (

     
      <View>
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
      </View>
    )
  }
}
