import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Container } from './styles';

const Search = ({title}) => {
  return (
    <View style={styles.container}>
        <Ionicons name="search-outline" style = {styles.icon} size={24} color="black" />
        <TextInput
            style={styles.input}
            placeholder={title}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:"80%",
        borderColor:"white",
        borderWidth:2,
        alignSelf:"center",
        borderRadius:300,
        backgroundColor:"#EBF1FD",
        height:45,
        position:"relative",
        top:-1
    },
    icon:{
        position:'relative',
        margin:10,
        color:'gray'
    },
    input:{
        borderRadius:20,
        height:30,
        backgroundColor:"#EBF1FD",
        textAlignVertical:"center",
        marginTop:5
    }
})
export default Search;