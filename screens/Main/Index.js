import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from '../../components/Nav/Nav';
import HeaderMain from '../../components/Header/Header';



export default function Index() {
  const [displayNav,setDisplayNav] = useState(false)
  return (
    <View style={styles.container}>
      <HeaderMain stDisplayNav = {setDisplayNav} displayNav={displayNav}/>
      {displayNav ? <Nav/>:""}
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4E1FA',
  },
});
