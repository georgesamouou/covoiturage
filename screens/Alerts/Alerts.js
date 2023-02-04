import React,{useState} from 'react';
import { View,Text,StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AlertItem from '../../components/Alert/AlertItem';
import HeaderMain from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';

// import { Container } from './styles';

const Alerts = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    
    return (
        <View>
            <HeaderMain navigation={navigation} stDisplayNav = {setDisplayNav} displayNav={displayNav}/>
                {displayNav ? <Nav stDisplayNav = {setDisplayNav} navigation={navigation} />:""} 
                <Search title="search alert"/>
            <Text style={styles.txt}>List of Alerts</Text>
            <ScrollView>
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                <AlertItem 
                    name="Paul"
                    car="KIA (37KI-61058)"
                    date=" 02 DEC 2022"
                />
                
            </ScrollView>
            <TouchableOpacity style={styles.icon}>
                <Text style={styles.next}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    txt:{
        textAlign:"center",
        fontSize:35,
        fontWeight:"bold"
    },icon:{
        borderRadius:10000000,
        backgroundColor:"#FF7D4B",
        fontSize:20,
        width:50,
        height:50,
        margin:10,
        marginTop:30,
        position:'absolute',
        top:450,
        right:0
    },
    next:{
        textAlignVertical:'center',
        textAlign:'center',
        color:'white',
        fontSize:30
    },
})

export default Alerts;