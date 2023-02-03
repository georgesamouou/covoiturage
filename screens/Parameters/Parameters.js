import React,{useState} from 'react';
import { TouchableOpacity,View,Text,StyleSheet,Image,ScrollView, Button } from 'react-native';
import { AntDesign,Feather,Ionicons   } from '@expo/vector-icons';

// import { Container } from './styles';

const Parameters = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    return (
        <View>
            <View style={styles.header}>
                <AntDesign name="arrowleft" style={styles.arrow} size={24} color="white" />
                <View>
                    <Text style={styles.profileTxt}>Profile</Text>
                    <Image 
                        style={styles.img}
                        source = {require("../../assets/largeIcon.png")}
                    />
                </View>
                <Feather name="bell" size={24} color="white" />
            </View>
            <View style={styles.btnEditContainer}>
                <View style={styles.btnEdit}>
                    <Button  title='Edit profile'/>
                </View>
            </View> 
            <Text style={styles.aboutTxt}>About Me</Text>
            <TouchableOpacity style={styles.boxContainer}>
                <View style={styles.flex}>
                    <AntDesign name="staro" style={styles.paramIco} size={24} color="black" />
                    <Text style={styles.paramIco}>Notes</Text>
                </View>
                <Text>></Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.boxContainer}>
                <View style={styles.flex}>
                    <AntDesign name="staro" style={styles.paramIco} size={24} color="black" />
                    <Text style={styles.paramIco}>Notes</Text>
                </View>
                <Text>></Text>
            </TouchableOpacity>   
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignSelf:"center"
    },
    img:{
        width:100,
        height:100,
        marginBottom:5,
        marginTop:10,
        borderRadius:100000000
    },
    imgContainer:{
        width:"80%",
        alignSelf:"center",

    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:45,
        height:200,
        width:"100%",
        alignSelf:"center",
        backgroundColor:"#D5E3FF"
    },
    profileTxt:{
        textAlign:"center",
        color:"white"
    },
    aboutTxt:{
        margin:10
    },
    btnEdit:{
        width:200,
        borderRadius:5,
        alignSelf:"center",
        margin:20
    },
    btnEditContainer: {
        backgroundColor:"white",
    },
    flex:{
        flexDirection:"row",
    },
    boxContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        padding:20,
        backgroundColor:"white"
    },
    paramIco:{
        margin:5
    }
})
export default Parameters;