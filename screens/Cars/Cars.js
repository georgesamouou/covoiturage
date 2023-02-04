import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,ScrollView } from 'react-native';
import HeaderMain from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';

// import { Container } from './styles';

const Cars = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    return (
        <View>
            <View style={styles.container}>
                <HeaderMain navigation={navigation} stDisplayNav = {setDisplayNav} displayNav={displayNav}/>
                {displayNav ? <Nav stDisplayNav = {setDisplayNav} navigation={navigation} />:""} 
                <Search title="search cars"/>
                <ScrollView>
                    <View style={styles.imgContainer}>
                        <Image 
                            style={styles.img}
                            source = {require("../../assets/car.png")}
                        />
                    </View>
                    <Text style={{marginLeft:32}}>Available</Text>
                </ScrollView>
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignSelf:"center"
    },
    img:{
        alignSelf:"center",
        width:"100%",
        marginBottom:5,
        marginTop:10,
    },
    imgContainer:{
        width:"80%",
        alignSelf:"center",

    }
})
export default Cars;