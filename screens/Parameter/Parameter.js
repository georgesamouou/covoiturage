import React from 'react';
import { View,Image,StyleSheet,Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

// import { Container } from './styles';

const Parameter = () => {
  return (
    <View>
        <View style={styles.header}>
            <Feather name="arrow-left" size={24} color="black" />
            <View style={styles.profil}>
                <Text style={styles.txt}>Profile</Text>
                <Image 
                    style={styles.profilImg}
                    source = {require("../../assets/profilLarge.png")}
                />
            </View>
            <Octicons name="bell" size={24} color="black" />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    profil:{

    },
    profilImg:{
        width:120,
        height:120,
        borderRadius:10000
    },
    txt:{
        textAlign:"center"
    }
})
export default Parameter;