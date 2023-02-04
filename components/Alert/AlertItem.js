import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const AlertItem = ({date,name,car}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.infoContainer}>
            <Image 
                style={styles.profilImg}
                source = {require("../../assets/profil.png")}
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.txt}>{car}</Text>
                <Text style={styles.txt}>{date}</Text>
            </View>
        </View>
        <View style={styles.icon}>
            <Text style={styles.next}>></Text>
        </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    profilImg:{
        width:30,
        height:30,
        borderRadius:100000000000,
        margin:10,
        position:"relative",
        top:10
    },
    icon:{
        borderRadius:10000000,
        backgroundColor:"#5476EF",
        fontSize:20,
        width:22,
        height:22,
        margin:10,
        marginTop:30
    },
    next:{
        textAlignVertical:'center',
        textAlign:'center',
        color:'white',
        
    },
    infoContainer:{
        flexDirection:'row',
        margin:10
    },
    container:{
        flexDirection:"row",
        justifyContent:'space-between',
        borderWidth:2,
        borderColor:"white",
        margin:10,
        borderRadius:5,
        backgroundColor:"#fff"
    },
    name:{
        fontWeight:"bold",
        fontSize:20
    },
    txt:{
        opacity:0.5
    }
})
export default AlertItem;