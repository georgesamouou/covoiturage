import React, {useState} from 'react';
import { View,Text,StyleSheet,TextInput, Pressable,Image } from 'react-native';
import { FontAwesome,Feather,FontAwesome5 } from '@expo/vector-icons';
//import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';

// import { Container } from './styles';

const SignIn = () => {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState();
  const emailHandler = (e) =>{
    setEmail(e.target.value)
  }
  return (
    <View style={{flex:1, width: "100%"}}>
      <Text style={styles.login}>Sign In</Text>
      <View style={styles.block}>
        <View style={styles.container}>
            <FontAwesome name="envelope-o" size={24} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                onChange={emailHandler}
            />
        </View>
        {email?<Text>Mail sent on the Address: <Text style={styles.emailTxt}>{email}</Text></Text>:""}
        <View style={styles.container}>
            <FontAwesome name="envelope-o" size={24} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Enter the confirmation code send"
            />
            <FontAwesome5 name="eye" size={24} color="black" style={styles.lock}/>
        </View>
        
        <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Sign In</Text>
        </Pressable>
        <View style={{alignSelf:"center",flexDirection:'row',justifyContent:"space-between"}}>
            <View style={{flexDirection:'row',}}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={styles.checkboxTxt}>TripPlaner</Text>
            </View>
            
            <Text style={styles.forget}>Already have an account?</Text>
        </View>
        
        <View style={styles.social}>
            <FontAwesome
            name = "facebook"
            color = "#3b5998"
            size={40}
            style={styles.socialIcon}
            /> 
            <FontAwesome
            name = "pinterest"
            color = '#cb2027'
            size={40}
            style={styles.socialIcon}

            /> 
            <FontAwesome
            name = 'google-plus-official'
            color = '#dd4b39'
            size={40}
            style={styles.socialIcon}
            /> 
            <FontAwesome
            name = 'instagram'
            color = '#517fa4'
            size={40}
            style={styles.socialIcon}
            />      
        </View>

        <View style={styles.imgContainer}>
            <Image
                style={styles.subtract}
                source = {require("../assets/Subtract.png")}
            />
            <Image
            style={styles.perso}
            source = {require("../assets/image.png")}
            />
            <Image
            style={styles.circle}
            source = {require("../assets/circle.png")}
            />
            
        </View>
        <Text style={{marginLeft:20,marginTop:20}}>Or recover with the following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    emailTxt:{
        fontWeight:"bold"
    },
    checkboxTxt:{
        marginTop:15,
    },
    circle:{
        position:"absolute",
        zIndex:1000,
        bottom:0
    },
    perso:{
      position:"absolute",
      zIndex:0,
      height:"100%",
      width:"100%",
    },
    subtract:{
        position:"absolute",
        bottom:0,
        zIndex:100,
        width:"100%",
      },
    imgContainer:{
        height:"30%",
        width:"100%",
        position: "absolute",
        bottom: 0
    },
    block:{
        flex:1
      },
    container: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center"
    },
    login:{
      alignSelf:"center",
      fontSize:30,
      margin:50,
    },
    input: {
      width:250,
      backgroundColor: "#F5F5F5",
      margin: 12,
      borderWidth: 1,
      borderTopColor: '#F5F5F5',
      borderLeftColor: '#F5F5F5',
      borderRightColor: '#F5F5F5',
      padding: 10,
      paddingLeft:50,
      borderBottomColor:"#A6A6A6",
      fontSize:20,
      //fontFamily: 'Poppins',
      fontStyle: "normal",
      lineHeight: 38,
    },
    icon: {
      color: '#A6A6A6',
      position: 'relative',
      left: 40,
      zIndex:100
    },
    lock:{
      position:"absolute",
      right:50,
      color: '#A6A6A6',
    },
    btn:{
      backgroundColor:'#0386D0',
      color:"white",
      padding:10,
      borderRadius:5,
      marginTop:10,
      marginLeft:10,
      height:50,
      alignSelf:'center',
      fontSize:25,
      width:255,
    },
    btnTxt:{
      color:"white",
      fontSize:20,
      alignSelf:"center"
    },
    
    
    checkbox:{
        marginTop:15,
    },
    check:{
      flexDirection:"row",
      alignSelf:"center"
    },
    forget:{
      alignSelf:"flex-end",
      margin:15,
      color:"#0386D0"
    },
    social:{
      flexDirection:"row",
      alignSelf:"center",
      justifyContent:"space-between"
    },
    socialIcon:{
      marginLeft:10,
      marginRight:10
    },
    
  });

export default SignIn;