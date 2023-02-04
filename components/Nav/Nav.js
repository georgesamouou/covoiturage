import React,{useState} from 'react';
import { View,StyleSheet,Text, TouchableOpacity,Switch,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// import { Container } from './styles';

const Nav = ({navigation,stDisplayNav}) => {
    const [planner,setPlanner] = useState(false);
    /* const diplayPlanner = planner === 0 ?<TouchableOpacity>

    </TouchableOpacity>  : "" */
    const toggleSwitch = value =>{
        setPlanner(value);
    }
    return (
        <ScrollView style={styles.container}>
            
            <TouchableOpacity onPress={()=>{stDisplayNav(false);navigation.navigate('main');}} style={styles.block}>
                <Text>List of my trips</Text>
                <View style={styles.icon}>
                    <Text style={styles.next}>></Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.block}>
                <Text>History of my travels</Text>
                <View style={styles.icon}>
                    <Text style={styles.next}>></Text>
                </View>
            </TouchableOpacity>
            {planner ?
                <TouchableOpacity onPress={()=>{stDisplayNav(false);navigation.navigate("cars")}} style={styles.block}>
                    <Text>My cars</Text>
                    <View style={styles.icon}>
                        <Text style={styles.next}>></Text>
                    </View>
                </TouchableOpacity>
                : ""
            }
            {planner ?
                <TouchableOpacity onPress={()=>{stDisplayNav(false);}} style={styles.block}>
                    <Text>My drivers</Text>
                    <View style={styles.icon}>
                        <Text style={styles.next}>></Text>
                    </View>
                </TouchableOpacity>
                : ""
            }
            <TouchableOpacity onPress={()=>{stDisplayNav(false);navigation.navigate("alerts")}} style={styles.block}>
                <Text>Alerts</Text>
                <View style={styles.icon}>
                    <Text style={styles.next}>></Text>
                </View>
            </TouchableOpacity>
            <View>
                <Switch
                    style={{ marginTop: 30 }}
                    onValueChange={toggleSwitch}
                    value={planner}
                    style={styles.switch}
                />
            </View>
            
            <Text style={{textAlign:'center'}}>{planner ? `Connected as Planner` : 'Connected as user'}</Text>
        </ScrollView>
    );
    }

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignSelf:'center'
    },
    block:{
        flexDirection:'row',
        width:"90%",
        justifyContent:'space-between',
        margin:10,
        backgroundColor:'#EBF1FD',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        borderColor:'white'
    },
    icon:{
        borderRadius:10000000,
        backgroundColor:"#5476EF",
        fontSize:20,
        width:22,
        height:22,
    },
    next:{
        textAlignVertical:'center',
        textAlign:'center',
        color:'white',
    },
    switch:{
        alignSelf:"flex-start",
        color:'orange',
    }
});

export default Nav;