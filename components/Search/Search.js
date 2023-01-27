import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Container } from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Search a trip"
        />
        <Ionicons name="search-outline" style = {styles.icon} size={24} color="black" />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    icon:{
        position:'relative'
    },
    input:{
        borderRadius:20,
        height:30,
        backgroundColor:"#EBF1FD"
    }
})
export default Search;