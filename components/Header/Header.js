import React from 'react';
import { TouchableOpacity, View,StyleSheet,Text } from 'react-native';
import Profil from '../ProfilJ/ProfilJ'
import { Octicons,MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const HeaderMain = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Octicons name="three-bars" size={24} color="black" />
        </TouchableOpacity>
        <Profil notification = {1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:35
  },
  btn:{
    borderRadius:10000000000,
    backgroundColor:"white",
    zIndex:1000000000
  }
})

export default HeaderMain;