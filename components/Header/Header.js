import React from 'react';
import { TouchableOpacity, View,StyleSheet,Text } from 'react-native';
import Profil from '../ProfilJ/ProfilJ'
import { Octicons,MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const HeaderMain = (props) => {
  const handleDisplayNav = () => {
    if (props.displayNav) {
      props.stDisplayNav(!props.displayNav)
    }else{
      props.stDisplayNav(!props.displayNav)
    }
    
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleDisplayNav} style={styles.btn}>
          <Octicons name="three-bars" style={styles.icon} size={24} color="black" />
        </TouchableOpacity>
        <Profil notification = {1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    
    flexDirection:"row",
    justifyContent:"space-between",
    margin:35
  },
  btn:{
    borderRadius:10000,
    backgroundColor:"white",
    zIndex:1000000000,
    width:35,
    height:35
  },
  icon:{
    fontSize:18,
    textAlign:"center",
    paddingTop:7
  }
})

export default HeaderMain;