import { StyleSheet } from "react-native";

const ExternalStyle = StyleSheet.create({
   
    title:
    {
        backgroundColor:'green',
        height:50,
        color:'white',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        margin:10,
        

        

    },

    image:
    {
        height:200,
        width :200,
    },
    price:
    {
        borderRadius:20,
        backgroundColor:'blue',
        color:'white',
        textAlign:'center',
        fontSize:20,
        height:30,
        width:200,
        margin:10,
    },

    category:
    {
        fontSize:20,
        
        paddingLeft:30,

    },

    description:
    {
        paddingLeft:30,
        paddingRight:10,
    },
})

export default ExternalStyle;