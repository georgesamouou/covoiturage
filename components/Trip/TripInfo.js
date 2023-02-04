import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfilJ from '../ProfilJ/ProfilJ';

// import { Container } from './styles';

const TripInfo = ({departure,prix,destination,car}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.block}>
            <View>
                <View style={styles.circle}/>
                    <Text style={styles.dots}>. . .</Text>
                <Ionicons name="location-sharp"  size={24} color="#FF7D4B" />
            </View>
            <View>
                <View style={styles.space}>
                    <Text style={styles.dest}>Departure</Text>
                    <Text style={styles.txt}>{departure}</Text> 
                </View>
                
                
                <Text style={styles.dest}>Destination</Text>
                <Text style={styles.txt}>{destination}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.prix}>{prix}</Text>
            <View  style={{alignSelf:"center"}}>
                <Image 
                    style={styles.profilImg}
                    source = {require("../../assets/profil.png")}
                />
            </View>
            <Text style={{color:"gray",fontSize:10,textAlign:"center"}}>{car}</Text>
        </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flexDirection:"row",
        borderWidth:1,
        margin:10,
        padding:5,
        borderRadius:5,
        backgroundColor:"#E8F4FF",
        borderColor:"white"
    },
    circle:{
        height:15,
        width:15,
        borderRadius:1000,
        borderWidth:3,
        marginLeft:5,
        borderColor:"#545BFD"
    },
    dots:{
        fontWeight:"bold",
        fontSize:20,
        transform: [{ rotate: '90deg' }],
        alignSelf:"flex-start",
        color:'gray',
        margin:5
    },
    block:{
        flexDirection:"row"
    },
    dest:{
        color:'gray',
        fontSize:10
    },
    space:{
        marginBottom:5
    },
    prix:{
        fontWeight:"bold",
        color:"#FF7D4B",
        textAlign:"center",
        marginTop:10
    },
    profilImg:{
        width:30,
        height:30,
        borderRadius:100000000000,
        marginLeft:10
      }
});

export default TripInfo;