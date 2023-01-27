import React from 'react';
import { View,Text, Image,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const ProfilJ = ({notification}) => {
  const diplayNotif = notification > 0 ? <MaterialCommunityIcons name="bell" size={24} color="black" /> : ""
  return (
    <View style={styles.container}>
      {diplayNotif}
      <Image 
        style={styles.profilImg}
        source = {require("../../assets/profil.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  profilImg:{
    width:30,
    height:30,
    borderRadius:100000000000,
    marginLeft:10
  }
});

export default ProfilJ;